import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');

export function readJson<T>(filename: string): T[] {
  const content = readFileSync(join(DATA_DIR, filename), 'utf-8');
  return JSON.parse(content);
}

export function writeJson<T>(filename: string, data: T[]): void {
  writeFileSync(join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf-8');
}

export function nextId(items: { id: string }[]): string {
  const maxId = items.reduce((max, item) => Math.max(max, parseInt(item.id, 10)), 0);
  return String(maxId + 1);
}
