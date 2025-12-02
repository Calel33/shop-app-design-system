import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';

export interface ComponentRoot {
  id: string;
  path: string;
}

export interface DesignSystemConfig {
  paths: {
    componentRoots: ComponentRoot[];
    fontsRoot: string;
    themesRoot: string;
  };
  indexes: {
    components: string;
    fonts: string;
    themes: string;
  };
  defaults: {
    fontSans: string;
    fontHeading: string;
    themes: string[];
  };
}

/**
 * Load design system config from config/design-system.config.json
 * Resolves all relative paths to absolute paths
 * @param projectRoot - Project root directory or path to config file
 */
export function loadConfig(projectRoot: string = process.cwd()): DesignSystemConfig {
  let configPath: string;
  let baseDir: string;

  // If projectRoot ends with .json, treat it as the config file path
  if (projectRoot.endsWith('.json')) {
    configPath = resolve(projectRoot);
    baseDir = dirname(dirname(configPath));
  } else {
    // Otherwise treat it as the project root
    configPath = resolve(projectRoot, 'config', 'design-system.config.json');
    baseDir = projectRoot;
  }

  const configData = JSON.parse(readFileSync(configPath, 'utf-8')) as DesignSystemConfig;

  return {
    paths: {
      componentRoots: configData.paths.componentRoots.map((root) => ({
        id: root.id,
        path: resolve(baseDir, root.path),
      })),
      fontsRoot: resolve(baseDir, configData.paths.fontsRoot),
      themesRoot: resolve(baseDir, configData.paths.themesRoot),
    },
    indexes: {
      components: resolve(baseDir, configData.indexes.components),
      fonts: resolve(baseDir, configData.indexes.fonts),
      themes: resolve(baseDir, configData.indexes.themes),
    },
    defaults: configData.defaults,
  };
}
