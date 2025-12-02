/**
 * Raw component metadata (before normalization)
 * Used by the scanner - normalized in subsequent diff
 */
export interface RawComponentMeta {
  name: string;
  exportName: string;
  filePath: string;
  rootId: string;
  category?: string;
  tags?: string[];
  status?: 'experimental' | 'stable' | 'deprecated';
  variants?: string[];
}

/**
 * Normalized component metadata (after categorization)
 * Used in indexes and generation
 */
export interface ComponentMeta extends RawComponentMeta {
  id: string;
  category: string;
  tags: string[];
  status: 'experimental' | 'stable' | 'deprecated';
}
