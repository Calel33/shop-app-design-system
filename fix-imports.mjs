import fs from 'fs';
import path from 'path';

function fixImportsInDir(dir) {
  const files = fs.readdirSync(dir, { recursive: true });
  files.forEach(file => {
    if (!file.endsWith('.ts') || file.endsWith('.d.ts')) return;
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix relative imports: from './foo' or from "./foo" -> add .js
    content = content.replace(/from ['"](\.[^'"]+)['"](?!\.js)/g, (match, importPath) => {
      return `from '${importPath}.js'`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed: ' + filePath);
  });
}

fixImportsInDir('ds-gen/src');
console.log('Import fixes complete!');
