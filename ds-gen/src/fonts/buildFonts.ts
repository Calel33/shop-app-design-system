import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { loadConfig } from '../config';
import { FontManager } from './FontManager';
import { generateFontFaceCss, generateTailwindFontExtension } from './fontCssGenerator';

/**
 * Build fonts index and generate CSS/Tailwind outputs
 */
export async function buildFonts(projectRoot: string = process.cwd()): Promise<void> {
  const config = loadConfig(projectRoot);

  console.log(`Scanning fonts from ${config.paths.fontsRoot}`);

  // Scan fonts
  const fontManager = new FontManager();
  const fonts = fontManager.scanFonts(config.paths.fontsRoot);

  console.log(`Found ${fonts.length} font families`);

  // Write fonts index
  writeFileSync(config.indexes.fonts, JSON.stringify(fonts, null, 2));
  console.log(`Wrote fonts index to ${config.indexes.fonts}`);

  // Generate CSS output
  const cssPath = `${projectRoot}/generated/fonts.css`;
  mkdirSync(dirname(cssPath), { recursive: true });
  const fontCss = generateFontFaceCss(fonts);
  writeFileSync(cssPath, fontCss);
  console.log(`Wrote @font-face CSS to ${cssPath}`);

  // Generate Tailwind extension
  const tailwindPath = `${projectRoot}/generated/tailwind.fonts.extend.js`;
  mkdirSync(dirname(tailwindPath), { recursive: true });
  const tailwindExt = generateTailwindFontExtension(fonts);
  writeFileSync(tailwindPath, tailwindExt);
  console.log(`Wrote Tailwind extension to ${tailwindPath}`);
}
