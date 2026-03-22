import { z } from 'zod';

export const cidadeSchema = z.object({
  nome: z.string({ error: 'Nome é obrigatório' }).min(2, 'Nome deve ter pelo menos 2 caracteres'),
  estadoId: z.string({ error: 'Estado é obrigatório' }).min(1, 'Selecione um estado'),
});

export type CidadeInput = z.infer<typeof cidadeSchema>;
