import fg from 'fast-glob';

const path = 'C:\\Users\\user1\\Desktop\\designsystem\\src\\components\\ui';
const files = fg.globSync(`${path}/**/*.tsx`, {
  ignore: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx'],
});
console.log('Found files:', files.length);
console.log('Files:', files.slice(0, 5));

// Also try with forward slashes
const path2 = path.replace(/\\/g, '/');
const files2 = fg.globSync(`${path2}/**/*.tsx`, {
  ignore: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx'],
});
console.log('\nWith forward slashes:');
console.log('Found files:', files2.length);
console.log('Files:', files2.slice(0, 5));
