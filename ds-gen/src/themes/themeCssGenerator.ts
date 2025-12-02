import { Theme } from '../types/Theme';

/**
 * Generate CSS for themes with CSS variable blocks
 */
export function generateThemeCss(themes: Theme[]): string {
  if (themes.length === 0) {
    return '/* No themes available */\n';
  }

  const cssLines: string[] = [];

  for (const theme of themes) {
    cssLines.push(`[data-theme="${theme.id}"] {`);

    // Generate CSS variables for each token category
    for (const [category, tokens] of Object.entries(theme.tokens)) {
      if (tokens) {
        for (const [key, value] of Object.entries(tokens)) {
          const varName = `--${category}-${key}`;
          cssLines.push(`  ${varName}: ${value};`);
        }
      }
    }

    cssLines.push('}');
    cssLines.push('');
  }

  return cssLines.join('\n');
}

/**
 * Generate TypeScript file with theme tokens
 */
export function generateThemeTokensTs(themes: Theme[]): string {
  const lines: string[] = [
    '/**',
    ' * Auto-generated theme tokens',
    ' */',
    '',
    'export const themes = {',
  ];

  for (const theme of themes) {
    lines.push(`  "${theme.id}": {`);
    lines.push(`    name: "${theme.name}",`);
    lines.push(`    tokens: {`);

    for (const [category, tokens] of Object.entries(theme.tokens)) {
      if (tokens) {
        lines.push(`      ${category}: {`);
        for (const [key, value] of Object.entries(tokens)) {
          lines.push(`        ${key}: "${value}",`);
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

  return lines.join('\n');
}
