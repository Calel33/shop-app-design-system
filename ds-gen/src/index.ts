/**
 * Design System Generator
 * Multi-root component scanner with normalization, font management, theme management, and design system utilities
 */

// Scanner
export { scanComponents } from './scanner/scanComponents';
export { ComponentScanner } from './scanner/ComponentScanner';
export { extractJsDocMetadata } from './normalizer/extractJsDocMetadata';

// Normalizer
export { ComponentNormalizer } from './normalizer/ComponentNormalizer';

// Font Manager
export { buildFonts } from './fonts/buildFonts';
export { FontManager } from './fonts/FontManager';
export { generateFontFaceCss, generateTailwindFontExtension } from './fonts/fontCssGenerator';

// Theme Manager
export { buildThemes } from './themes/buildThemes';
export { ThemeManager } from './themes/ThemeManager';
export { ThemeNormalizer } from './themes/ThemeNormalizer';
export { generateThemeCss, generateThemeTokensTs } from './themes/themeCssGenerator';

// Generators
export { generateDesignSystem } from './generators/generateDesignSystem';
export { DesignSystemGenerator } from './generators/DesignSystemGenerator';

// Config
export { loadConfig } from './config';

// Types
export type { DesignSystemConfig, ComponentRoot } from './config';
export type { RawComponentMeta, ComponentMeta } from './types/ComponentMeta';
export type { FontMeta, FontFileMeta } from './types/FontMeta';
export type { Theme, ThemeTokens } from './types/Theme';
export type { GenerateOptions } from './types/GenerateOptions';
