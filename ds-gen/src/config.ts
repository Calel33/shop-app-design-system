import { readFileSync } from 'fs';
import { resolve } from 'path';

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
 */
export function loadConfig(projectRoot: string = process.cwd()): DesignSystemConfig {
  const configPath = resolve(projectRoot, 'config', 'design-system.config.json');
  const configData = JSON.parse(readFileSync(configPath, 'utf-8')) as DesignSystemConfig;

  return {
    paths: {
      componentRoots: configData.paths.componentRoots.map((root) => ({
        id: root.id,
        path: resolve(projectRoot, root.path),
      })),
      fontsRoot: resolve(projectRoot, configData.paths.fontsRoot),
      themesRoot: resolve(projectRoot, configData.paths.themesRoot),
    },
    indexes: {
      components: resolve(projectRoot, configData.indexes.components),
      fonts: resolve(projectRoot, configData.indexes.fonts),
      themes: resolve(projectRoot, configData.indexes.themes),
    },
    defaults: configData.defaults,
  };
}
