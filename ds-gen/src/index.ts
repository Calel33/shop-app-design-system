/**
 * Design System Generator
 * Multi-root component scanner with normalization, font management, and design system utilities
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

// Config
export { loadConfig } from './config';

// Types
export type { DesignSystemConfig, ComponentRoot } from './config';
export type { RawComponentMeta, ComponentMeta } from './types/ComponentMeta';
export type { FontMeta, FontFileMeta } from './types/FontMeta';
