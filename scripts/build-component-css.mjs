import { readdirSync, mkdirSync, copyFileSync } from 'fs';
import { join, basename } from 'path';
import { execSync } from 'child_process';

const STYLES_DIR = './styles';
const DIST_DIR = './dist/styles';

// Ensure dist directories exist
mkdirSync(join(DIST_DIR, 'components'), { recursive: true });
mkdirSync(join(DIST_DIR, 'tokens'), { recursive: true });
mkdirSync(join(DIST_DIR, 'utilities'), { recursive: true });
mkdirSync(join(DIST_DIR, 'intents'), { recursive: true });

// Copy token files
const tokenFiles = readdirSync(join(STYLES_DIR, 'tokens'));
for (const file of tokenFiles) {
  copyFileSync(join(STYLES_DIR, 'tokens', file), join(DIST_DIR, 'tokens', file));
}

// Copy utility files
const utilityFiles = readdirSync(join(STYLES_DIR, 'utilities'));
for (const file of utilityFiles) {
  copyFileSync(join(STYLES_DIR, 'utilities', file), join(DIST_DIR, 'utilities', file));
}

// Copy intent files
const intentFiles = readdirSync(join(STYLES_DIR, 'intents'));
for (const file of intentFiles) {
  copyFileSync(join(STYLES_DIR, 'intents', file), join(DIST_DIR, 'intents', file));
}

// Copy base.css
copyFileSync(join(STYLES_DIR, 'base.css'), join(DIST_DIR, 'base.css'));

// Copy individual component CSS files
const componentFiles = readdirSync(join(STYLES_DIR, 'components'));
for (const file of componentFiles) {
  if (file.endsWith('.css')) {
    copyFileSync(
      join(STYLES_DIR, 'components', file),
      join(DIST_DIR, 'components', file)
    );
  }
}

console.log(`Copied ${tokenFiles.length} token files`);
console.log(`Copied ${utilityFiles.length} utility files`);
console.log(`Copied ${intentFiles.length} intent files`);
console.log(`Copied ${componentFiles.length} component CSS files`);
console.log('Component CSS build complete.');
