/**
 * Options for design system generation
 */
export interface GenerateOptions {
  // Root filtering
  includeRoots?: string[];
  excludeRoots?: string[];

  // Category filtering
  includeCategories?: string[];
  excludeCategories?: string[];

  // Font and theme selection
  selectedFonts?: string[];
  selectedThemes?: string[];

  // Output directory
  outDir: string;

  // Library metadata (optional)
  libraryName?: string;
  libraryVersion?: string;
  description?: string;
}
