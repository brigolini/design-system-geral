import * as cidadeRepo from '../database/cidade.repository';
import { cidadeSchema, type CidadeInput } from './cidade.schema';

export { cidadeSchema, type CidadeInput };

export function list() {
  return cidadeRepo.findAll();
}

export function getById(id: string) {
  const cidade = cidadeRepo.findById(id);
  if (!cidade) throw new Error(`Cidade ${id} não encontrada`);
  return cidade;
}

export function search(query: string) {
  return cidadeRepo.search(query);
}

export function searchByEstado(estadoId: string) {
  return cidadeRepo.findByEstado(estadoId);
}

export function create(input: CidadeInput) {
  const parsed = cidadeSchema.parse(input);
  return cidadeRepo.create(parsed);
}

export function update(id: string, input: CidadeInput) {
  const parsed = cidadeSchema.parse(input);
  return cidadeRepo.update(id, parsed);
}

export function remove(id: string) {
  return cidadeRepo.remove(id);
}
