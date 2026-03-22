import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../common';

export interface AlmgAccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AlmgAccordionProps extends AlmgBaseProps {
  items: AlmgAccordionItem[];
  /** Permitir múltiplos itens abertos simultaneamente */
  allowMultiple?: boolean;
  /** Direção do layout */
  direction?: 'vertical' | 'horizontal';
  /** IDs dos itens inicialmente abertos */
  defaultOpen?: string[];
}
