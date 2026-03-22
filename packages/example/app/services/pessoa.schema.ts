import { z } from 'zod';

export const enderecoSchema = z.object({
  rua: z.string({ error: 'Rua é obrigatória' }).min(1, 'Rua é obrigatória'),
  numero: z.string({ error: 'Número é obrigatório' }).min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string({ error: 'Bairro é obrigatório' }).min(1, 'Bairro é obrigatório'),
  cidadeId: z.string({ error: 'Cidade é obrigatória' }).min(1, 'Selecione uma cidade'),
  cep: z.string({ error: 'CEP é obrigatório' }).min(9, 'CEP inválido'),
});

export const pessoaSchema = z.object({
  nome: z.string({ error: 'Nome é obrigatório' }).min(2, 'Nome deve ter pelo menos 2 caracteres'),
  cpf: z.string({ error: 'CPF é obrigatório' }).min(14, 'CPF inválido'),
  email: z.string({ error: 'E-mail é obrigatório' }).email('E-mail inválido'),
  telefone: z.string({ error: 'Telefone é obrigatório' }).min(14, 'Telefone inválido'),
  dataNascimento: z.string({ error: 'Data de nascimento é obrigatória' }).min(1, 'Data de nascimento é obrigatória'),
  enderecos: z.array(enderecoSchema).min(1, 'Pelo menos um endereço é obrigatório'),
});

export type EnderecoInput = z.infer<typeof enderecoSchema>;
export type PessoaInput = z.infer<typeof pessoaSchema>;
