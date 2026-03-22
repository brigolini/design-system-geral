import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../common';

export interface AlmgLabelProps extends AlmgBaseProps {
  /** Conteúdo de texto ou children */
  children: ReactNode;
  /** Atributo HTML for vinculado a um input */
  htmlFor?: string;
  /** Exibir indicador de obrigatório */
  required?: boolean;
}
