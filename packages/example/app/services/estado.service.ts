import * as estadoRepo from '../database/estado.repository';
import { estadoSchema, type EstadoInput } from './estado.schema';

export { estadoSchema, type EstadoInput };

export function list() {
  return estadoRepo.findAll();
}

export function getById(id: string) {
  const estado = estadoRepo.findById(id);
  if (!estado) throw new Error(`Estado ${id} não encontrado`);
  return estado;
}

export function search(query: string) {
  return estadoRepo.search(query);
}

export function create(input: EstadoInput) {
  const parsed = estadoSchema.parse(input);
  return estadoRepo.create(parsed);
}

export function update(id: string, input: EstadoInput) {
  const parsed = estadoSchema.parse(input);
  return estadoRepo.update(id, parsed);
}

export function remove(id: string) {
  return estadoRepo.remove(id);
}
