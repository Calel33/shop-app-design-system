import { writeFileSync } from 'fs';
import { loadConfig } from '../config';
import { ComponentScanner } from './ComponentScanner';
import type { RawComponentMeta } from '../types/ComponentMeta';

/**
 * Main entry point for component scanning
 * Scans all component roots and writes raw index to config/components.index.json
 */
export async function scanComponents(
  projectRoot: string = process.cwd(),
  options?: {
    rootId?: string; // Optional: scan only a specific root
  }
): Promise<RawComponentMeta[]> {
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

  // Scan all roots
  const components = await scanner.scanRoots(roots, projectRoot);

  console.log(`Found ${components.length} components`);

  // Write raw index
  writeFileSync(config.indexes.components, JSON.stringify(components, null, 2));
  console.log(`Wrote ${components.length} components to ${config.indexes.components}`);

  return components;
}
