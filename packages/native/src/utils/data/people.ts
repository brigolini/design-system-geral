/** Dados de jogadores famosos do futebol brasileiro para demonstração */

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  department: string;
}

const firstNames = ['Pelé', 'Garrincha', 'Zico', 'Romário', 'Ronaldo'];
const lastNames = ['Nascimento', 'Santos', 'Coimbra', 'Faria', 'Nazário'];
const departments = ['Ataque', 'Meio-campo', 'Defesa', 'Goleiro', 'Comissão Técnica'];

export const people: Person[] = Array.from({ length: 50 }, (_, i) => ({
  firstName: firstNames[i % 5],
  lastName: lastNames[i % 5],
  age: 25 + (i % 30),
  email: `${firstNames[i % 5].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}${i}@selecao.com.br`,
  department: departments[i % 5],
}));

/** Dataset grande (5.000 registros) para testes de virtualização */
export const largePeopleDataset = Array.from({ length: 5000 }, (_, i) => ({
  value: `jogador-${i}`,
  label: `Jogador #${String(i + 1).padStart(5, '0')} — ${
    ['Pelé', 'Garrincha', 'Zico', 'Romário', 'Ronaldo', 'Ronaldinho', 'Kaká', 'Neymar', 'Rivaldo', 'Cafu'][i % 10]
  } ${
    ['Nascimento', 'Santos', 'Coimbra', 'Faria', 'Nazário', 'Gaúcho', 'Leite', 'Silva', 'Ferreira', 'Marcos'][i % 10]
  }`,
}));
