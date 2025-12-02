import { readdirSync, existsSync, readFileSync } from 'fs';
import { join, extname } from 'path';
import { paramCase } from 'param-case';
import type { FontMeta, FontFileMeta } from '../types/FontMeta.js';

/**
 * Font configuration (optional font.config.json in each font directory)
 */
interface FontConfig {
  family?: string;
  display?: 'auto' | 'swap' | 'block' | 'fallback' | 'optional';
  weights?: string[];
  style?: 'normal' | 'italic';
}

/**
 * Manages font discovery, metadata, and generation
 */
export class FontManager {
  /**
   * Scan fonts directory and build FontMeta array
   */
  scanFonts(fontsRoot: string): FontMeta[] {
    if (!existsSync(fontsRoot)) {
      return [];
    }

    const fonts: FontMeta[] = [];
    const fontDirs = readdirSync(fontsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());

    for (const fontDir of fontDirs) {
      const fontPath = join(fontsRoot, fontDir.name);
      const font = this.scanFontFamily(fontPath, fontDir.name);
      if (font) {
        fonts.push(font);
      }
    }

    return fonts;
  }

  /**
   * Scan a single font family directory
   */
  private scanFontFamily(fontPath: string, fontDirName: string): FontMeta | null {
    // Load config if present
    const configPath = join(fontPath, 'font.config.json');
    let config: FontConfig = {};

    if (existsSync(configPath)) {
      try {
        config = JSON.parse(readFileSync(configPath, 'utf-8'));
      } catch (error) {
        console.warn(`Failed to parse ${configPath}:`, error);
      }
    }

    // Scan font files
    const files = this.scanFontFiles(fontPath);
    if (files.length === 0) {
      return null;
    }

    const id = paramCase(fontDirName);
    const family = config.family || this.inferFamilyName(fontDirName);
    const display = config.display || 'swap';

    return {
      id,
      family,
      files,
      display,
    };
  }

  /**
   * Scan font files in a directory
   */
  private scanFontFiles(fontPath: string): FontFileMeta[] {
    const files: FontFileMeta[] = [];
    const fontExtensions = ['.woff2', '.woff', '.ttf', '.otf'];

    const fileNames = readdirSync(fontPath, { withFileTypes: true }).filter((f) => f.isFile());

    for (const file of fileNames) {
      const ext = extname(file.name).toLowerCase();
      if (!fontExtensions.includes(ext)) {
        continue;
      }

      const { weight, style } = this.inferWeightAndStyle(file.name);
      const format = this.formatFromExtension(ext);

      files.push({
        path: file.name,
        weight,
        style,
        format,
      });
    }

    return files;
  }

  /**
   * Infer font weight and style from filename
   * Examples: "Font-Regular.woff2", "Font-Bold-Italic.woff2"
   */
  private inferWeightAndStyle(filename: string): { weight: string; style: 'normal' | 'italic' } {
    const basename = filename.replace(/\.[^/.]+$/, '').toLowerCase();

    let weight = '400'; // default normal
    let style: 'normal' | 'italic' = 'normal';

    // Map common font weight names to values
    const weightMap: Record<string, string> = {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    };

    for (const [name, value] of Object.entries(weightMap)) {
      if (basename.includes(name)) {
        weight = value;
        break;
      }
    }

    if (basename.includes('italic')) {
      style = 'italic';
    }

    return { weight, style };
  }

  /**
   * Convert file extension to font format
   */
  private formatFromExtension(ext: string): FontFileMeta['format'] {
    const formatMap: Record<string, FontFileMeta['format']> = {
      '.woff2': 'woff2',
      '.woff': 'woff',
      '.ttf': 'ttf',
      '.otf': 'otf',
    };
    return formatMap[ext.toLowerCase()] || 'woff2';
  }

  /**
   * Infer font family name from directory name
   * Examples: "AnekLatin" -> "Anek Latin", "my-custom-sans" -> "My Custom Sans"
   */
  private inferFamilyName(dirName: string): string {
    // Handle kebab-case: my-custom-sans -> My Custom Sans
    if (dirName.includes('-')) {
      return dirName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    // Handle PascalCase: AnekLatin -> Anek Latin
    return dirName.replace(/([A-Z])/g, ' $1').trim().replace(/\s+/g, ' ');
  }
}
