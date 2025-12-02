import { ThemeTokens } from '../types/Theme.js';

/**
 * ThemeNormalizer handles multi-format theme ingestion and normalization
 */
export class ThemeNormalizer {
  /**
   * Detect the format of the input data
   */
  static detectFormat(input: string | Record<string, string | Record<string, string>>): 'json' | 'flat-json' | 'css' {
    if (typeof input === 'string') {
      // Check if it looks like CSS
      if (input.includes(':') && (input.includes(';') || input.includes('--'))) {
        return 'css';
      }
      try {
        JSON.parse(input);
        return 'json';
      } catch {
        return 'css';
      }
    }
    return 'json';
  }

  /**
   * Parse a theme from various formats
   */
  static parseTheme(input: string | Record<string, string | Record<string, string>>, format?: 'json' | 'flat-json' | 'css'): ThemeTokens {
    const detectedFormat = format || this.detectFormat(input);

    if (detectedFormat === 'css') {
      return this.parseCssTheme(typeof input === 'string' ? input : '');
    } else if (detectedFormat === 'flat-json') {
      return this.parseFlatJsonTheme(typeof input === 'string' ? JSON.parse(input) : input);
    } else {
      return this.parseJsonTheme(typeof input === 'string' ? JSON.parse(input) : input);
    }
  }

  /**
   * Parse structured JSON token object
   */
  private static parseJsonTheme(obj: Record<string, string | Record<string, string>>): ThemeTokens {
    const tokens: ThemeTokens = {};

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        tokens[key] = value;
      }
    }

    return tokens;
  }

  /**
   * Parse flat JSON (e.g., { "color.primary": "#000" }) into nested structure
   */
  private static parseFlatJsonTheme(obj: Record<string, string>): ThemeTokens {
    const tokens: ThemeTokens = {};

    for (const [key, value] of Object.entries(obj)) {
      const parts = key.split('.');
      if (parts.length === 2) {
        const [category, name] = parts;
        if (!tokens[category]) {
          tokens[category] = {};
        }
        tokens[category]![name] = value;
      }
    }

    return tokens;
  }

  /**
   * Parse CSS variables string (e.g., "--color-primary: #000;")
   */
  private static parseCssTheme(cssString: string): ThemeTokens {
    const tokens: ThemeTokens = { colors: {} };

    // Match CSS variable patterns
    const varPattern = /--([a-z-]+):\s*([^;]+);/gi;
    let match;

    while ((match = varPattern.exec(cssString)) !== null) {
      const [, varName, value] = match;
      const cleanValue = value.trim();

      // Categorize based on variable name prefix
      if (varName.startsWith('color-')) {
        const colorName = varName.replace('color-', '');
        if (!tokens.colors) tokens.colors = {};
        tokens.colors[colorName] = cleanValue;
      } else if (varName.startsWith('spacing-')) {
        const spacingName = varName.replace('spacing-', '');
        if (!tokens.spacing) tokens.spacing = {};
        tokens.spacing[spacingName] = cleanValue;
      } else if (varName.startsWith('radius-')) {
        const radiusName = varName.replace('radius-', '');
        if (!tokens.borderRadius) tokens.borderRadius = {};
        tokens.borderRadius[radiusName] = cleanValue;
      } else if (varName.startsWith('shadow-')) {
        const shadowName = varName.replace('shadow-', '');
        if (!tokens.shadows) tokens.shadows = {};
        tokens.shadows[shadowName] = cleanValue;
      }
    }

    return tokens;
  }

  /**
   * Merge token overrides into base tokens
   */
  static mergeTokens(...tokenArrays: ThemeTokens[]): ThemeTokens {
    const merged: ThemeTokens = {};

    for (const tokens of tokenArrays) {
      for (const [category, values] of Object.entries(tokens)) {
        if (!merged[category]) {
          merged[category] = {};
        }
        merged[category] = { ...merged[category], ...values };
      }
    }

    return merged;
  }
}
