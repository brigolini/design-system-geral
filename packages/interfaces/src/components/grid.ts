import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../common';

/** Numero de colunas disponivel para o grid */
export type AlmgGridColumns = 1 | 2 | 3 | 8 | 12;

export interface AlmgGridProps extends AlmgBaseProps {
  /** Numero de colunas do grid */
  columns: AlmgGridColumns;
  /** Gap entre itens do grid. Padrao: 'md' */
  gap?: 'sm' | 'md' | 'lg';
  /** Itens do grid */
  children: ReactNode;
}

export interface AlmgGridItemProps extends AlmgBaseProps {
  /** Numero de colunas que este item ocupa */
  span?: number;
  /** Conteudo do item */
  children: ReactNode;
}
