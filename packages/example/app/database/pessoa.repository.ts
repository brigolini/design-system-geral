import { readJson, writeJson, nextId } from './db';

export interface EnderecoRecord {
  id: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidadeId: string;
  cep: string;
}

export interface PessoaRecord {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  enderecos: EnderecoRecord[];
}

const FILE = 'pessoas.json';

export function findAll(): PessoaRecord[] {
  return readJson<PessoaRecord>(FILE);
}

export function findById(id: string): PessoaRecord | undefined {
  return findAll().find((p) => p.id === id);
}

export function search(query: string): PessoaRecord[] {
  const q = query.toLowerCase();
  return findAll().filter(
    (p) => p.nome.toLowerCase().includes(q) || p.cpf.includes(q)
  );
}

export function create(data: Omit<PessoaRecord, 'id'>): PessoaRecord {
  const items = findAll();
  const newItem: PessoaRecord = { id: nextId(items), ...data };
  items.push(newItem);
  writeJson(FILE, items);
  return newItem;
}

export function update(id: string, data: Omit<PessoaRecord, 'id'>): PessoaRecord {
  const items = findAll();
  const index = items.findIndex((p) => p.id === id);
  if (index === -1) throw new Error(`Pessoa ${id} não encontrada`);
  items[index] = { id, ...data };
  writeJson(FILE, items);
  return items[index];
}

export function remove(id: string): void {
  const items = findAll().filter((p) => p.id !== id);
  writeJson(FILE, items);
}
