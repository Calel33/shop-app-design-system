/**
 * Font file metadata
 */
export interface FontFileMeta {
  path: string;
  weight: string; // "400", "700", etc.
  style: 'normal' | 'italic';
  format: 'woff2' | 'woff' | 'ttf' | 'otf';
}

/**
 * Font family metadata
 */
export interface FontMeta {
  id: string; // e.g., 'anek-latin', 'my-custom-sans'
  family: string; // e.g., 'Anek Latin', 'My Custom Sans'
  files: FontFileMeta[];
  display: 'auto' | 'swap' | 'block' | 'fallback' | 'optional';
}
