import { readdirSync, mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const SRC_DIR = './src';
const DIST_DIR = './dist';

// Garantir que diretórios de saída existam
mkdirSync(join(DIST_DIR, 'components'), { recursive: true });
mkdirSync(join(DIST_DIR, 'tokens'), { recursive: true });
mkdirSync(join(DIST_DIR, 'utilities'), { recursive: true });
mkdirSync(join(DIST_DIR, 'intents'), { recursive: true });

// 1. Build CSS bundled via Tailwind CLI
console.log('Compilando al-ui.css via Tailwind...');
execSync(`npx @tailwindcss/cli -i ${join(SRC_DIR, 'al-ui.css')} -o ${join(DIST_DIR, 'al-ui.css')}`, {
  stdio: 'inherit',
});

// 2. Build CSS minificado para CDN
console.log('Gerando versão minificada para CDN...');
execSync(`npx @tailwindcss/cli -i ${join(SRC_DIR, 'al-ui.css')} -o ${join(DIST_DIR, 'al-ui.min.css')} --minify`, {
  stdio: 'inherit',
});

// 3. Copiar base.css
copyFileSync(join(SRC_DIR, 'base.css'), join(DIST_DIR, 'base.css'));

// 4. Copiar arquivos de tokens
const tokenFiles = readdirSync(join(SRC_DIR, 'tokens'));
for (const file of tokenFiles) {
  copyFileSync(join(SRC_DIR, 'tokens', file), join(DIST_DIR, 'tokens', file));
}
console.log(`Copiados ${tokenFiles.length} arquivos de tokens`);

// 5. Copiar arquivos de utilitários
const utilityFiles = readdirSync(join(SRC_DIR, 'utilities'));
for (const file of utilityFiles) {
  copyFileSync(join(SRC_DIR, 'utilities', file), join(DIST_DIR, 'utilities', file));
}
console.log(`Copiados ${utilityFiles.length} arquivos de utilitários`);

// 6. Copiar arquivos de intenções
const intentFiles = readdirSync(join(SRC_DIR, 'intents'));
for (const file of intentFiles) {
  copyFileSync(join(SRC_DIR, 'intents', file), join(DIST_DIR, 'intents', file));
}
console.log(`Copiados ${intentFiles.length} arquivos de intenções`);

// 7. Copiar CSS de componentes individuais
const componentFiles = readdirSync(join(SRC_DIR, 'components')).filter(f => f.endsWith('.css'));
for (const file of componentFiles) {
  copyFileSync(join(SRC_DIR, 'components', file), join(DIST_DIR, 'components', file));
}
console.log(`Copiados ${componentFiles.length} arquivos CSS de componentes`);

// Resumo
const bundledSize = readFileSync(join(DIST_DIR, 'al-ui.css')).length;
const minifiedSize = readFileSync(join(DIST_DIR, 'al-ui.min.css')).length;
console.log(`\nBuild concluído!`);
console.log(`  al-ui.css:     ${(bundledSize / 1024).toFixed(1)} KB`);
console.log(`  al-ui.min.css: ${(minifiedSize / 1024).toFixed(1)} KB (CDN)`);
console.log(`  Componentes:   ${componentFiles.length} arquivos individuais`);
