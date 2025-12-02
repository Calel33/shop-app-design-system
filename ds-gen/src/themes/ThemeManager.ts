import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, extname } from 'path';
import { paramCase } from 'param-case';
import { Theme } from '../types/Theme';
import { ThemeNormalizer } from './ThemeNormalizer';

/**
 * ThemeManager scans and normalizes theme files
 */
export class ThemeManager {
  /**
   * Scan a theme directory and build Theme metadata
   */
  static scanThemesDirectory(themesRoot: string): Theme[] {
    if (!existsSync(themesRoot)) {
      console.warn(`Themes root not found: ${themesRoot}`);
      return [];
    }

    const themes: Theme[] = [];

    try {
      const entries = readdirSync(themesRoot);

      for (const entry of entries) {
        const fullPath = resolve(themesRoot, entry);
        const stat = statSync(fullPath);

        if (stat.isFile()) {
          const ext = extname(entry).toLowerCase();
          if (['.json', '.css'].includes(ext)) {
            const theme = this.parseThemeFile(fullPath, entry);
            if (theme) {
              themes.push(theme);
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning themes directory ${themesRoot}:`, error);
    }

    return themes;
  }

  /**
   * Parse a single theme file
   */
  private static parseThemeFile(filePath: string, fileName: string): Theme | null {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const ext = extname(fileName).toLowerCase();
      const baseName = fileName.replace(ext, '');
      const id = paramCase(baseName);

      const format: 'json' | 'flat-json' | 'css' = ext === '.json' ? 'json' : 'css';
      const tokens = ThemeNormalizer.parseTheme(content, format);

      return {
        id,
        name: baseName,
        filePath,
        tokens,
        format,
      };
    } catch (error) {
      console.error(`Error parsing theme file ${filePath}:`, error);
      return null;
    }
  }
}
