/** Dados de FAQ para demonstração do accordion */

import type { ReactNode } from 'react';
import { createElement } from 'react';

export interface AccordionFaqItem {
  id: string;
  title: string;
  content: ReactNode;
}

export const faqItems: AccordionFaqItem[] = [
  {
    id: '1',
    title: 'O que é o Almg UI?',
    content: createElement('p', null, 'Almg UI é um design system para desenvolvedores web.'),
  },
  {
    id: '2',
    title: 'Como instalar?',
    content: createElement('p', null, 'Instale via npm: npm install @almg/native'),
  },
  {
    id: '3',
    title: 'É acessível?',
    content: createElement('p', null, 'Sim, todos os componentes atendem aos padrões WCAG AA.'),
  },
];
