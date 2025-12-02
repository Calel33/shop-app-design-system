/**
 * Design System Generator
 * Multi-root component scanner and design system management
 */

export { scanComponents } from './scanner/scanComponents';
export { ComponentScanner } from './scanner/ComponentScanner';
export { loadConfig } from './config';
export type { DesignSystemConfig, ComponentRoot } from './config';
export type { RawComponentMeta, ComponentMeta } from './types/ComponentMeta';
