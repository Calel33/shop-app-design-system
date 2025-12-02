import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { loadConfig } from '../config';
import { ThemeManager } from './ThemeManager';
import { generateThemeCss, generateThemeTokensTs } from './themeCssGenerator';

/**
 * Build themes: scan, normalize, and generate outputs
 */
export async function buildThemes(
  configPath: string = './config/design-system.config.json'
): Promise<void> {
  try {
    // Load config
    const config = await loadConfig(configPath);
    const themesRoot = config.paths.themesRoot;
    const themesIndexPath = config.indexes.themes;

    console.log(`Scanning themes from: ${themesRoot}`);

    // Scan themes directory
    const themes = ThemeManager.scanThemesDirectory(themesRoot);
    console.log(`Found ${themes.length} theme(s)`);

    // Write themes index
    const indexDir = dirname(themesIndexPath);
    mkdirSync(indexDir, { recursive: true });
    writeFileSync(themesIndexPath, JSON.stringify(themes, null, 2));
    console.log(`Wrote themes index: ${themesIndexPath}`);

    // Generate theme CSS
    const generatedDir = resolve(dirname(themesIndexPath), '../generated');
    mkdirSync(generatedDir, { recursive: true });

    const themeCss = generateThemeCss(themes);
    const themeCssPath = resolve(generatedDir, 'themes.css');
    writeFileSync(themeCssPath, themeCss);
    console.log(`Generated theme CSS: ${themeCssPath}`);

    // Generate theme tokens TypeScript file
    const themeTokensTs = generateThemeTokensTs(themes);
    const themeTokensPath = resolve(generatedDir, 'themes.ts');
    writeFileSync(themeTokensPath, themeTokensTs);
    console.log(`Generated theme tokens: ${themeTokensPath}`);
  } catch (error) {
    console.error('Error building themes:', error);
    throw error;
  }
}
