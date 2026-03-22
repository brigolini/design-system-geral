import type { ReactNode } from 'react';
import type { AlBaseProps } from '../../types/common';

export interface AlAccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AlAccordionProps extends AlBaseProps {
  items: AlAccordionItem[];
  /** Permitir múltiplos itens abertos simultaneamente */
  allowMultiple?: boolean;
  /** Direção do layout */
  direction?: 'vertical' | 'horizontal';
  /** IDs dos itens inicialmente abertos */
  defaultOpen?: string[];
}
