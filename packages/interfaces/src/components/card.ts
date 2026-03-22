import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../common';

export interface AlmgCardProps extends AlmgBaseProps {
  /** Titulo do card, renderizado como heading */
  title: string;
  /** Nivel do heading (h2, h3, h4). Padrao: h3 */
  headingLevel?: 2 | 3 | 4;
  /** Conteudo do corpo do card */
  children: ReactNode;
}
