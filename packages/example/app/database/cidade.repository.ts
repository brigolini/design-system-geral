import { readJson, writeJson, nextId } from './db';

export interface CidadeRecord {
  id: string;
  nome: string;
  estadoId: string;
}

const FILE = 'cidades.json';

export function findAll(): CidadeRecord[] {
  return readJson<CidadeRecord>(FILE);
}

export function findById(id: string): CidadeRecord | undefined {
  return findAll().find((c) => c.id === id);
}

export function findByEstado(estadoId: string): CidadeRecord[] {
  return findAll().filter((c) => c.estadoId === estadoId);
}

export function search(query: string): CidadeRecord[] {
  const q = query.toLowerCase();
  return findAll().filter((c) => c.nome.toLowerCase().includes(q));
}

export function create(data: Omit<CidadeRecord, 'id'>): CidadeRecord {
  const items = findAll();
  const newItem: CidadeRecord = { id: nextId(items), ...data };
  items.push(newItem);
  writeJson(FILE, items);
  return newItem;
}

export function update(id: string, data: Omit<CidadeRecord, 'id'>): CidadeRecord {
  const items = findAll();
  const index = items.findIndex((c) => c.id === id);
  if (index === -1) throw new Error(`Cidade ${id} não encontrada`);
  items[index] = { id, ...data };
  writeJson(FILE, items);
  return items[index];
}

export function remove(id: string): void {
  const items = findAll().filter((c) => c.id !== id);
  writeJson(FILE, items);
}
