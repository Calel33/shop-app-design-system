import { loadConfig } from './ds-gen/src/config.js';
import { ComponentScanner } from './ds-gen/src/scanner/ComponentScanner.js';

try {
  const config = loadConfig('./config/design-system.config.json');
  console.log('Loaded config:');
  console.log('Component roots:');
  config.paths.componentRoots.forEach(root => {
    console.log(`  ${root.id}: ${root.path}`);
  });

  const scanner = new ComponentScanner();
  const components = await scanner.scanRoots(config.paths.componentRoots, process.cwd());
  console.log(`\nFound ${components.length} components`);
} catch (error) {
  console.error('Error:', error.message);
  console.error(error.stack);
}
