import { SourceFile } from 'ts-morph';
import type { RawComponentMeta } from '../types/ComponentMeta.js';

/**
 * Extract JSDoc metadata from a component export
 * Looks for @dsCategory, @dsStatus, @dsVariants tags
 */
export function extractJsDocMetadata(
  sourceFile: SourceFile,
  exportName: string
): Partial<RawComponentMeta> {
  const metadata: Partial<RawComponentMeta> = {};

  try {
    const exportedDeclarations = sourceFile.getExportedDeclarations().get(exportName);
    if (!exportedDeclarations || exportedDeclarations.length === 0) {
      return metadata;
    }

    const declaration = exportedDeclarations[0] as any;
    const jsDocs = declaration.getJsDocs?.();

    if (!jsDocs || jsDocs.length === 0) {
      return metadata;
    }

    for (const jsDoc of jsDocs) {
      const tags = jsDoc.getTags();

      for (const tag of tags) {
        const tagName = tag.getTagName();
        const text = tag.getText().trim();

        if (tagName === 'dsCategory') {
          // Extract value from @dsCategory "primitive"
          const match = text.match(/"([^"]+)"|'([^']+)'|(\w+)/);
          if (match) {
            metadata.category = match[1] || match[2] || match[3];
          }
        } else if (tagName === 'dsStatus') {
          const match = text.match(/"([^"]+)"|'([^']+)'|(\w+)/);
          if (match) {
            const status = match[1] || match[2] || match[3];
            if (['experimental', 'stable', 'deprecated'].includes(status)) {
              metadata.status = status as 'experimental' | 'stable' | 'deprecated';
            }
          }
        } else if (tagName === 'dsVariants') {
          // Extract array of variants @dsVariants ["primary", "secondary"]
          const match = text.match(/\[(.*?)\]/);
          if (match) {
            const variantsStr = match[1];
            metadata.variants = variantsStr
              .split(',')
              .map((v: string) => v.trim().replace(/["']/g, ''))
              .filter((v: string) => v.length > 0);
          }
        }
      }
    }
  } catch (error) {
    // Silently fail - JSDoc extraction is optional
  }

  return metadata;
}
