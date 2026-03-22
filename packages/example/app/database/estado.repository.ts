import { readJson, writeJson, nextId } from './db';

export interface EstadoRecord {
  id: string;
  nome: string;
  sigla: string;
}

const FILE = 'estados.json';

export function findAll(): EstadoRecord[] {
  return readJson<EstadoRecord>(FILE);
}

export function findById(id: string): EstadoRecord | undefined {
  return findAll().find((e) => e.id === id);
}

export function search(query: string): EstadoRecord[] {
  const q = query.toLowerCase();
  return findAll().filter(
    (e) => e.nome.toLowerCase().includes(q) || e.sigla.toLowerCase().includes(q)
  );
}

export function create(data: Omit<EstadoRecord, 'id'>): EstadoRecord {
  const items = findAll();
  const newItem: EstadoRecord = { id: nextId(items), ...data };
  items.push(newItem);
  writeJson(FILE, items);
  return newItem;
}

export function update(id: string, data: Omit<EstadoRecord, 'id'>): EstadoRecord {
  const items = findAll();
  const index = items.findIndex((e) => e.id === id);
  if (index === -1) throw new Error(`Estado ${id} não encontrado`);
  items[index] = { id, ...data };
  writeJson(FILE, items);
  return items[index];
}

export function remove(id: string): void {
  const items = findAll().filter((e) => e.id !== id);
  writeJson(FILE, items);
}
