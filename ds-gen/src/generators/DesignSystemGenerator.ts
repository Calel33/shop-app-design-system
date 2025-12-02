import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { ComponentMeta } from '../types/ComponentMeta';
import { FontMeta } from '../types/FontMeta';
import { Theme } from '../types/Theme';
import { GenerateOptions } from '../types/GenerateOptions';

/**
 * Core design system library generator
 */
export class DesignSystemGenerator {
  /**
   * Generate a design system library
   */
  static generateDesignSystem(
    options: GenerateOptions,
    components: ComponentMeta[],
    fonts: FontMeta[],
    themes: Theme[]
  ): void {
    const { outDir } = options;

    console.log(`Generating design system library to: ${outDir}`);

    // Create directory structure
    mkdirSync(resolve(outDir, 'src/components'), { recursive: true });
    mkdirSync(resolve(outDir, 'src/tokens'), { recursive: true });
    mkdirSync(resolve(outDir, 'src/theme'), { recursive: true });

    // Filter components
    const filteredComponents = this.filterComponents(components, options);
    console.log(`Selected ${filteredComponents.length} component(s)`);

    // Filter fonts and themes
    const selectedFonts = this.filterFonts(fonts, options);
    const selectedThemes = this.filterThemes(themes, options);
    console.log(`Selected ${selectedFonts.length} font(s) and ${selectedThemes.length} theme(s)`);

    // Generate files
    this.generateComponentsIndex(outDir, filteredComponents);
    this.generateTokensThemesFile(outDir, selectedThemes);
    this.generateTokensFontsFile(outDir, selectedFonts);
    this.generateThemeProvider(outDir, selectedThemes);
    this.generatePackageJson(outDir, options);
    this.generateTsConfig(outDir);

    console.log('✓ Design system library generated successfully');
  }

  /**
   * Filter components based on options
   */
  private static filterComponents(components: ComponentMeta[], options: GenerateOptions): ComponentMeta[] {
    return components.filter((comp) => {
      // Check root filter
      if (options.includeRoots && !options.includeRoots.includes(comp.rootId)) {
        return false;
      }
      if (options.excludeRoots && options.excludeRoots.includes(comp.rootId)) {
        return false;
      }

      // Check category filter
      if (options.includeCategories && !options.includeCategories.includes(comp.category)) {
        return false;
      }
      if (options.excludeCategories && options.excludeCategories.includes(comp.category)) {
        return false;
      }

      return true;
    });
  }

  /**
   * Filter fonts based on options
   */
  private static filterFonts(fonts: FontMeta[], options: GenerateOptions): FontMeta[] {
    if (!options.selectedFonts || options.selectedFonts.length === 0) {
      return fonts;
    }
    return fonts.filter((font) => options.selectedFonts!.includes(font.id));
  }

  /**
   * Filter themes based on options
   */
  private static filterThemes(themes: Theme[], options: GenerateOptions): Theme[] {
    if (!options.selectedThemes || options.selectedThemes.length === 0) {
      return themes;
    }
    return themes.filter((theme) => options.selectedThemes!.includes(theme.id));
  }

  /**
   * Generate src/components/index.ts
   */
  private static generateComponentsIndex(outDir: string, components: ComponentMeta[]): void {
    const lines: string[] = [
      '/**',
      ' * Auto-generated component exports',
      ' */',
      '',
    ];

    // Group components by root for better organization
    const byRoot = new Map<string, ComponentMeta[]>();
    components.forEach((comp) => {
      if (!byRoot.has(comp.rootId)) {
        byRoot.set(comp.rootId, []);
      }
      byRoot.get(comp.rootId)!.push(comp);
    });

    // Generate exports
    for (const [rootId, rootComponents] of byRoot) {
      lines.push(`// ${rootId}`);
      for (const comp of rootComponents) {
        lines.push(
          `export { ${comp.exportName} as ${comp.exportName}${comp.rootId !== 'core-ui' ? `_${rootId}` : ''} } from '${this.getComponentImportPath(comp)}'`
        );
      }
      lines.push('');
    }

    const indexPath = resolve(outDir, 'src/components/index.ts');
    writeFileSync(indexPath, lines.join('\n'));
    console.log(`Generated: ${indexPath}`);
  }

  /**
   * Get relative import path for a component
   */
  private static getComponentImportPath(comp: ComponentMeta): string {
    // Return a relative path from the generated library to the component
    // For now, use absolute-like paths that would work in a monorepo
    return `../../../${comp.filePath}`;
  }

  /**
   * Generate src/tokens/themes.ts
   */
  private static generateTokensThemesFile(outDir: string, themes: Theme[]): void {
    const lines: string[] = [
      '/**',
      ' * Auto-generated theme tokens',
      ' */',
      '',
      'export const themes = {',
    ];

    for (const theme of themes) {
      lines.push(`  ${theme.id}: {`);
      lines.push(`    name: "${theme.name}",`);
      lines.push(`    id: "${theme.id}",`);
      lines.push(`    tokens: {`);

      for (const [category, tokens] of Object.entries(theme.tokens)) {
        if (tokens) {
          lines.push(`      ${category}: {`);
          for (const [key, value] of Object.entries(tokens)) {
            lines.push(`        "${key}": "${value}",`);
          }
          lines.push(`      },`);
        }
      }

      lines.push(`    },`);
      lines.push(`  },`);
    }

    lines.push('} as const;');
    lines.push('');
    lines.push('export type ThemeId = keyof typeof themes;');

    const themeTokensPath = resolve(outDir, 'src/tokens/themes.ts');
    writeFileSync(themeTokensPath, lines.join('\n'));
    console.log(`Generated: ${themeTokensPath}`);
  }

  /**
   * Generate src/tokens/fonts.ts
   */
  private static generateTokensFontsFile(outDir: string, fonts: FontMeta[]): void {
    const lines: string[] = [
      '/**',
      ' * Auto-generated font tokens',
      ' */',
      '',
      'export const fonts = {',
    ];

    for (const font of fonts) {
      lines.push(`  ${font.id}: {`);
      lines.push(`    family: "${font.family}",`);
      lines.push(`    id: "${font.id}",`);
      if (font.display) {
        lines.push(`    display: "${font.display}",`);
      }
      lines.push(`  },`);
    }

    lines.push('} as const;');
    lines.push('');
    lines.push('export type FontId = keyof typeof fonts;');

    const fontTokensPath = resolve(outDir, 'src/tokens/fonts.ts');
    writeFileSync(fontTokensPath, lines.join('\n'));
    console.log(`Generated: ${fontTokensPath}`);
  }

  /**
   * Generate src/theme/ThemeProvider.tsx
   */
  private static generateThemeProvider(outDir: string, themes: Theme[]): void {
    const themeIds = themes.map((t) => `'${t.id}'`).join(' | ');

    const content = `import React, { ReactNode, useState } from 'react';
import { themes } from '../tokens/themes';

type ThemeId = ${themeIds || "'light'"};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeId;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light' as ThemeId,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(defaultTheme);

  const switchTheme = (theme: ThemeId) => {
    setCurrentTheme(theme);
    // Apply theme to DOM
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  React.useEffect(() => {
    switchTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div data-theme={currentTheme}>
      {children}
    </div>
  );
};

export { themes };
export type { ThemeId };
`;

    const providerPath = resolve(outDir, 'src/theme/ThemeProvider.tsx');
    writeFileSync(providerPath, content);
    console.log(`Generated: ${providerPath}`);
  }

  /**
   * Generate package.json
   */
  private static generatePackageJson(outDir: string, options: GenerateOptions): void {
    const pkg = {
      name: options.libraryName || 'design-system',
      version: options.libraryVersion || '1.0.0',
      description: options.description || 'Auto-generated design system library',
      main: 'dist/index.js',
      types: 'dist/index.d.ts',
      files: ['dist', 'src'],
      scripts: {
        build: 'tsc',
        'build:watch': 'tsc --watch',
      },
      peerDependencies: {
        react: '>=18.0.0',
        'react-dom': '>=18.0.0',
      },
      devDependencies: {
        '@types/react': '^18.0.0',
        '@types/react-dom': '^18.0.0',
        typescript: '^5.0.0',
      },
    };

    const packagePath = resolve(outDir, 'package.json');
    writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    console.log(`Generated: ${packagePath}`);
  }

  /**
   * Generate tsconfig.json
   */
  private static generateTsConfig(outDir: string): void {
    const tsconfig = {
      compilerOptions: {
        target: 'ES2020',
        useDefineForClassFields: true,
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        skipLibCheck: true,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        resolveJsonModule: true,
        isolatedModules: true,
        moduleResolution: 'bundler',
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        outDir: './dist',
      },
      include: ['src'],
      references: [{ path: './tsconfig.app.json' }],
    };

    const tsconfigPath = resolve(outDir, 'tsconfig.json');
    writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
    console.log(`Generated: ${tsconfigPath}`);
  }
}
