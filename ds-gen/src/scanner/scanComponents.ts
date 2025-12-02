import { writeFileSync } from 'fs';
import { loadConfig } from '../config';
import { ComponentScanner } from './ComponentScanner';
import { ComponentNormalizer } from '../normalizer/ComponentNormalizer';
import type { ComponentMeta } from '../types/ComponentMeta';

/**
 * Main entry point for component scanning
 * Scans all component roots, normalizes metadata, and writes normalized index
 */
export async function scanComponents(
  projectRoot: string = process.cwd(),
  options?: {
    rootId?: string; // Optional: scan only a specific root
  }
): Promise<ComponentMeta[]> {
  const config = loadConfig(projectRoot);
  const scanner = new ComponentScanner();

  // Filter roots if specific root requested
  const roots = options?.rootId
    ? config.paths.componentRoots.filter((r) => r.id === options.rootId)
    : config.paths.componentRoots;

  if (roots.length === 0) {
    console.warn(
      `No component roots found${options?.rootId ? ` matching rootId: ${options.rootId}` : ''}`
    );
    return [];
  }

  console.log(`Scanning component roots: ${roots.map((r) => r.id).join(', ')}`);

  // Scan all roots (produces raw metadata)
  const rawComponents = await scanner.scanRoots(roots, projectRoot);

  console.log(`Found ${rawComponents.length} components`);

  // Default categorization rules
  const categorizationRules = {
    categoryByDir: {
      'src/components/ui': 'primitive',
      'src/components/business': 'domain-business',
      'src/components/layout': 'layout',
      'more-components/ui2': 'extended',
    },
  };

  // Normalize components
  const normalizer = new ComponentNormalizer(categorizationRules);
  const normalizedComponents = normalizer.normalize(rawComponents);

  console.log(`Normalized ${normalizedComponents.length} components`);

  // Write normalized index
  writeFileSync(config.indexes.components, JSON.stringify(normalizedComponents, null, 2));
  console.log(`Wrote ${normalizedComponents.length} components to ${config.indexes.components}`);

  return normalizedComponents;
}
