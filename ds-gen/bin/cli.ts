#!/usr/bin/env node

/**
 * Design System Generator CLI
 * Provides commands for scanning, managing, and generating design system libraries
 */

import { Command } from 'commander';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import {
  scanComponents,
  buildFonts,
  buildThemes,
  generateDesignSystem,
  loadConfig,
} from '../src/index';

const program = new Command();

program
  .name('ds-gen')
  .description('Design System Generator - Scan, manage, and generate design system libraries')
  .version('1.0.0');

/**
 * Initialize design system configuration
 */
program
  .command('init')
  .description('Initialize design system config and indexes')
  .action(() => {
    const configDir = './config';
    const configPath = resolve(configDir, 'design-system.config.json');

    // Check if config already exists
    if (existsSync(configPath)) {
      console.log(`✓ Config already exists at ${configPath}`);
      return;
    }

    // Create directory
    mkdirSync(configDir, { recursive: true });

    // Create default config
    const defaultConfig = {
      paths: {
        componentRoots: [
          {
            id: 'core-ui',
            path: './src/components/ui',
          },
          {
            id: 'biz-ui',
            path: './src/components/business',
          },
          {
            id: 'layout',
            path: './src/components/layout',
          },
          {
            id: 'ui2',
            path: './more-components/ui2',
          },
        ],
        fontsRoot: './assets/fonts',
        themesRoot: './config/themes',
      },
      indexes: {
        components: './config/components.index.json',
        fonts: './config/fonts.index.json',
        themes: './config/themes.index.json',
      },
      defaults: {
        fontSans: 'inter',
        fontHeading: 'inter',
        themes: ['light', 'dark'],
      },
    };

    writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));

    // Create empty index files
    const indexes = [
      resolve(configDir, 'components.index.json'),
      resolve(configDir, 'fonts.index.json'),
      resolve(configDir, 'themes.index.json'),
    ];

    for (const indexPath of indexes) {
      if (!existsSync(indexPath)) {
        writeFileSync(indexPath, '[]');
      }
    }

    console.log(`✓ Initialized design system config at ${configDir}`);
    console.log(`✓ Created config/design-system.config.json`);
    console.log(`✓ Created empty index files`);
  });

/**
 * Scan components from configured roots
 */
program
  .command('scan-components')
  .description('Scan components from configured roots')
  .option('--root <id>', 'Scan specific root only')
  .option('--config <path>', 'Config path', './config/design-system.config.json')
  .action(async (options) => {
    try {
      console.log('Scanning components...');
      // Note: root filtering could be added in scanComponents if needed
      await scanComponents(options.config);
      console.log('✓ Components scanned successfully');
    } catch (error) {
      console.error('✗ Error scanning components:', error);
      process.exit(1);
    }
  });

/**
 * Add fonts from directory
 */
program
  .command('add-font <fontDir>')
  .description('Add fonts from a directory')
  .option('--config <path>', 'Config path', './config/design-system.config.json')
  .action(async (fontDir, options) => {
    try {
      console.log(`Adding fonts from ${fontDir}...`);

      // Load config to get fonts root
      const config = await loadConfig(options.config);
      const fontsRoot = config.paths.fontsRoot;

      // Ensure fonts directory exists
      mkdirSync(fontsRoot, { recursive: true });

      console.log(`✓ Fonts directory ready at ${fontsRoot}`);
      console.log(`✓ Copy your font files to ${resolve(fontsRoot)}`);

      // Run build to scan fonts
      await buildFonts(options.config);
      console.log('✓ Fonts added and indexed');
    } catch (error) {
      console.error('✗ Error adding fonts:', error);
      process.exit(1);
    }
  });

/**
 * Add theme from file
 */
program
  .command('add-theme <themePath>')
  .description('Add theme from JSON or CSS file')
  .option('--config <path>', 'Config path', './config/design-system.config.json')
  .action(async (themePath, options) => {
    try {
      console.log(`Adding theme from ${themePath}...`);

      // Load config
      const config = await loadConfig(options.config);
      const themesRoot = config.paths.themesRoot;

      // Ensure themes directory exists
      mkdirSync(themesRoot, { recursive: true });

      // For now, guide user to copy file
      console.log(`✓ Themes directory ready at ${themesRoot}`);
      console.log(`✓ Copy your theme file to ${resolve(themesRoot)}`);

      // Run build to scan themes
      await buildThemes(options.config);
      console.log('✓ Themes added and indexed');
    } catch (error) {
      console.error('✗ Error adding theme:', error);
      process.exit(1);
    }
  });

/**
 * Generate design system library
 */
program
  .command('generate')
  .description('Generate design system library package')
  .option('--out <dir>', 'Output directory', './generated-ds-lib')
  .option('--roots <roots...>', 'Include specific roots', ['core-ui', 'biz-ui', 'layout', 'ui2'])
  .option('--categories <categories...>', 'Include specific categories')
  .option('--fonts <fonts...>', 'Include specific fonts')
  .option('--themes <themes...>', 'Include specific themes')
  .option('--name <name>', 'Library name', 'design-system')
  .option('--version <version>', 'Library version', '1.0.0')
  .option('--config <path>', 'Config path', './config/design-system.config.json')
  .action(async (options) => {
    try {
      console.log('Generating design system library...');

      const generateOptions = {
        outDir: options.out,
        includeRoots: options.roots && options.roots.length > 0 ? options.roots : undefined,
        includeCategories: options.categories,
        selectedFonts: options.fonts,
        selectedThemes: options.themes,
        libraryName: options.name,
        libraryVersion: options.version,
      };

      await generateDesignSystem(generateOptions, options.config);
      console.log(`✓ Design system library generated at ${options.out}`);
    } catch (error) {
      console.error('✗ Error generating library:', error);
      process.exit(1);
    }
  });

/**
 * Show help for any unknown command
 */
program.on('command:*', () => {
  console.error('Invalid command. Use --help for usage information.');
  process.exit(1);
});

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
