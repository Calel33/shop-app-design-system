/**
 * Theme-related type definitions
 */

export interface ThemeTokens {
  colors?: Record<string, string>;
  spacing?: Record<string, string>;
  borderRadius?: Record<string, string>;
  fontSize?: Record<string, string>;
  fontWeight?: Record<string, string>;
  lineHeight?: Record<string, string>;
  shadows?: Record<string, string>;
  [key: string]: Record<string, string> | undefined;
}

export interface Theme {
  id: string;
  name: string;
  filePath: string;
  tokens: ThemeTokens;
  format: 'json' | 'flat-json' | 'css';
  description?: string;
}
