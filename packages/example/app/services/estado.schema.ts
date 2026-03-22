import { z } from 'zod';

export const estadoSchema = z.object({
  nome: z.string({ error: 'Nome é obrigatório' }).min(2, 'Nome deve ter pelo menos 2 caracteres'),
  sigla: z.string({ error: 'Sigla é obrigatória' }).length(2, 'Sigla deve ter exatamente 2 caracteres').toUpperCase(),
});

export type EstadoInput = z.infer<typeof estadoSchema>;
