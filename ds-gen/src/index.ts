/**
 * Design System Generator
 * Multi-root component scanner with normalization and design system management
 */

// Scanner
export { scanComponents } from './scanner/scanComponents';
export { ComponentScanner } from './scanner/ComponentScanner';
export { extractJsDocMetadata } from './normalizer/extractJsDocMetadata';

// Normalizer
export { ComponentNormalizer } from './normalizer/ComponentNormalizer';

// Config
export { loadConfig } from './config';

// Types
export type { DesignSystemConfig, ComponentRoot } from './config';
export type { RawComponentMeta, ComponentMeta } from './types/ComponentMeta';
