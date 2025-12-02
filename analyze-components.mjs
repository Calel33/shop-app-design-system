import fs from 'fs';

const components = JSON.parse(fs.readFileSync('config/components.index.json', 'utf-8'));
console.log('✓ Total components indexed:', components.length);
console.log('\nBy root:');
const byRoot = {};
components.forEach(c => {
  byRoot[c.rootId] = (byRoot[c.rootId] || 0) + 1;
});
Object.entries(byRoot).forEach(([root, count]) => {
  console.log(`  ${root}: ${count} components`);
});
console.log('\nTop 10 categories:');
const byCategory = {};
components.forEach(c => {
  byCategory[c.category] = (byCategory[c.category] || 0) + 1;
});
Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} components`);
});
console.log('\nSample components:');
components.slice(0, 5).forEach(c => {
  console.log(`  - ${c.name} (${c.id}) from ${c.rootId}`);
});
