import { globSync } from 'fast-glob';
import { relative } from 'path';
import { Project } from 'ts-morph';
import type { RawComponentMeta } from '../types/ComponentMeta';
import type { ComponentRoot } from '../config';

/**
 * Scans component directories for exported React components
 * Produces raw component metadata without normalization
 */
export class ComponentScanner {
  private tsProject: Project;

  constructor() {
    this.tsProject = new Project({
      compilerOptions: {
        skipLibCheck: true,
      },
    });
  }

  /**
   * Scan all component roots and produce raw metadata
   */
  async scanRoots(roots: ComponentRoot[], projectRoot: string): Promise<RawComponentMeta[]> {
    const allComponents: RawComponentMeta[] = [];

    for (const root of roots) {
      const components = await this.scanRoot(root, projectRoot);
      allComponents.push(...components);
    }

    return allComponents;
  }

  /**
   * Scan a single component root
   */
  private async scanRoot(root: ComponentRoot, projectRoot: string): Promise<RawComponentMeta[]> {
    const components: RawComponentMeta[] = [];

    // Glob for all .tsx files
    const files = globSync(`${root.path}/**/*.tsx`, {
      ignore: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx'],
    });

    for (const filePath of files) {
      const fileComponents = this.extractComponentsFromFile(filePath, root.id, projectRoot);
      components.push(...fileComponents);
    }

    return components;
  }

  /**
   * Extract exported React components from a single file
   */
  private extractComponentsFromFile(
    filePath: string,
    rootId: string,
    projectRoot: string
  ): RawComponentMeta[] {
    const components: RawComponentMeta[] = [];

    try {
      const sourceFile = this.tsProject.addSourceFileAtPath(filePath);

      // Find all named exports
      sourceFile.getExportedDeclarations().forEach((declarations, exportName) => {
        declarations.forEach((declaration) => {
          // Check if it's a function or const with a function type (likely a React component)
          if (this.isLikelyReactComponent(declaration, exportName)) {
            const relativeFilePath = relative(projectRoot, filePath);

            components.push({
              name: exportName,
              exportName,
              filePath: relativeFilePath.replace(/\\/g, '/'), // Normalize to forward slashes
              rootId,
              category: undefined, // Will be set in normalization diff
              tags: [],
              status: 'stable', // Default status
              variants: undefined,
            });
          }
        });
      });
    } catch (error) {
      console.warn(`Error parsing file ${filePath}:`, error);
    }

    return components;
  }

  /**
   * Heuristic to detect if a declaration is likely a React component
   */
  private isLikelyReactComponent(declaration: any, exportName: string): boolean {
    // React components start with uppercase
    if (!exportName.match(/^[A-Z]/)) {
      return false;
    }

    // Check if it's a function or const (not a type/interface)
    const kind = declaration.getKindName();
    return kind === 'FunctionDeclaration' || kind === 'VariableDeclaration';
  }
}
