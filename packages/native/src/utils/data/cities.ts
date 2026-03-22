/** Cidades brasileiras para demonstração do autocomplete */

export const brazilianCities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília',
  'Fortaleza', 'Curitiba', 'Recife', 'Porto Alegre', 'Manaus',
  'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís',
  'Maceió', 'Natal', 'Campo Grande', 'Teresina', 'Florianópolis',
  'João Pessoa', 'Cuiabá', 'Aracaju', 'Vitória', 'Londrina',
  'Uberlândia', 'Ribeirão Preto', 'Sorocaba', 'Juiz de Fora', 'Santos',
  'Niterói', 'Joinville', 'Osasco', 'Maringá', 'Piracicaba',
  'Montes Claros',
];

/** Busca assíncrona simulada de cidades (com delay de rede) */
export const fetchCities = async (query: string) => {
  await new Promise((r) => setTimeout(r, 500));
  return brazilianCities
    .filter((c) => c.toLowerCase().includes(query.toLowerCase()))
    .map((c) => ({ value: c.toLowerCase().replace(/\s/g, '-'), label: c }));
};
