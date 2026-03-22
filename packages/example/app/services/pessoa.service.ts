import * as pessoaRepo from '../database/pessoa.repository';
import { enderecoSchema, pessoaSchema, type EnderecoInput, type PessoaInput } from './pessoa.schema';

export { enderecoSchema, pessoaSchema, type EnderecoInput, type PessoaInput };

export function list() {
  return pessoaRepo.findAll();
}

export function getById(id: string) {
  const pessoa = pessoaRepo.findById(id);
  if (!pessoa) throw new Error(`Pessoa ${id} não encontrada`);
  return pessoa;
}

export function search(query: string) {
  return pessoaRepo.search(query);
}

export function create(input: PessoaInput) {
  const parsed = pessoaSchema.parse(input);
  const enderecos = parsed.enderecos.map((e, i) => ({
    id: String(i + 1),
    ...e,
  }));
  return pessoaRepo.create({ ...parsed, enderecos });
}

export function update(id: string, input: PessoaInput) {
  const parsed = pessoaSchema.parse(input);
  const enderecos = parsed.enderecos.map((e, i) => ({
    id: String(i + 1),
    ...e,
  }));
  return pessoaRepo.update(id, { ...parsed, enderecos });
}

export function remove(id: string) {
  return pessoaRepo.remove(id);
}
