import { readFileSync } from 'fs';
import { resolve } from 'path';
import { ComponentMeta } from '../types/ComponentMeta.js';
import { FontMeta } from '../types/FontMeta.js';
import { Theme } from '../types/Theme.js';
import { GenerateOptions } from '../types/GenerateOptions.js';
import { DesignSystemGenerator } from './DesignSystemGenerator.js';

/**
 * Load and parse design system indexes
 */
function loadIndexes(
  configPath: string
): {
  components: ComponentMeta[];
  fonts: FontMeta[];
  themes: Theme[];
} {
  const configDir = resolve(configPath, '..');

  // Load component index
  const componentIndexPath = resolve(configDir, 'components.index.json');
  const components: ComponentMeta[] = JSON.parse(readFileSync(componentIndexPath, 'utf-8'));

  // Load font index
  const fontIndexPath = resolve(configDir, 'fonts.index.json');
  const fonts: FontMeta[] = JSON.parse(readFileSync(fontIndexPath, 'utf-8'));

  // Load theme index
  const themeIndexPath = resolve(configDir, 'themes.index.json');
  const themes: Theme[] = JSON.parse(readFileSync(themeIndexPath, 'utf-8'));

  return { components, fonts, themes };
}

/**
 * Main entry point for design system generation
 */
export async function generateDesignSystem(
  options: GenerateOptions,
  configPath: string = './config/design-system.config.json'
): Promise<void> {
  try {
    console.log('Loading design system indexes...');
    const { components, fonts, themes } = loadIndexes(configPath);

    console.log(
      `Loaded: ${components.length} component(s), ${fonts.length} font(s), ${themes.length} theme(s)`
    );

    // Generate the library
    DesignSystemGenerator.generateDesignSystem(options, components, fonts, themes);
  } catch (error) {
    console.error('Error generating design system:', error);
    throw error;
  }
}
