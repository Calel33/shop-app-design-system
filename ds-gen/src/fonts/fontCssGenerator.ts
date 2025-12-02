import type { FontMeta } from '../types/FontMeta';

/**
 * Generate @font-face CSS rules from FontMeta array
 */
export function generateFontFaceCss(fonts: FontMeta[]): string {
  const lines: string[] = [];

  for (const font of fonts) {
    for (const file of font.files) {
      lines.push(`@font-face {`);
      lines.push(`  font-family: "${font.family}";`);
      lines.push(`  src: url("/fonts/${font.id}/${file.path}") format("${file.format}");`);
      lines.push(`  font-weight: ${file.weight};`);
      lines.push(`  font-style: ${file.style};`);
      lines.push(`  font-display: ${font.display};`);
      lines.push(`}`);
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Generate Tailwind CSS fontFamily extension from FontMeta array
 */
export function generateTailwindFontExtension(fonts: FontMeta[]): string {
  const fontFamilies: Record<string, string[]> = {};

  for (const font of fonts) {
    // Create a Tailwind-friendly key from the font id
    const tailwindKey = font.id.replace(/-/g, '');

    fontFamilies[tailwindKey] = [
      `var(--ds-font-${font.id}, "${font.family}")`,
      'system-ui',
      'sans-serif',
    ];
  }

  const lines: string[] = [
    '// Auto-generated Tailwind fontFamily extension',
    '// Import this in your tailwind.config.js and spread into theme.extend.fontFamily',
    '',
    'module.exports = {',
    '  fontFamily: {',
  ];

  for (const [key, fonts] of Object.entries(fontFamilies)) {
    const fontList = fonts.map((f) => `"${f}"`).join(', ');
    lines.push(`    ${key}: [${fontList}],`);
  }

  lines.push('  },');
  lines.push('};');
  lines.push('');

  return lines.join('\n');
}
