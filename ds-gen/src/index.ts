/**
 * Design System Generator
 * Multi-root component scanner with normalization, font management, theme management, and design system utilities
 */

// Scanner
export { scanComponents } from './scanner/scanComponents.js';
export { ComponentScanner } from './scanner/ComponentScanner.js';
export { extractJsDocMetadata } from './normalizer/extractJsDocMetadata.js';

// Normalizer
export { ComponentNormalizer } from './normalizer/ComponentNormalizer.js';

// Font Manager
export { buildFonts } from './fonts/buildFonts.js';
export { FontManager } from './fonts/FontManager.js';
export { generateFontFaceCss, generateTailwindFontExtension } from './fonts/fontCssGenerator.js';

// Theme Manager
export { buildThemes } from './themes/buildThemes.js';
export { ThemeManager } from './themes/ThemeManager.js';
export { ThemeNormalizer } from './themes/ThemeNormalizer.js';
export { generateThemeCss, generateThemeTokensTs } from './themes/themeCssGenerator.js';

// Generators
export { generateDesignSystem } from './generators/generateDesignSystem.js';
export { DesignSystemGenerator } from './generators/DesignSystemGenerator.js';

// Config
export { loadConfig } from './config.js';

// Types
export type { DesignSystemConfig, ComponentRoot } from './config.js';
export type { RawComponentMeta, ComponentMeta } from './types/ComponentMeta.js';
export type { FontMeta, FontFileMeta } from './types/FontMeta.js';
export type { Theme, ThemeTokens } from './types/Theme.js';
export type { GenerateOptions } from './types/GenerateOptions.js';
