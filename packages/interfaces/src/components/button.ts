import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AlmgBaseProps, AlmgInteractiveProps, AlmgIntentProps } from '../common';

export interface AlmgButtonProps
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgIntentProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'aria-label'> {
  /** Conteúdo do botão */
  children: ReactNode;
}
