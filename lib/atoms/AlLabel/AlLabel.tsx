import type { ReactNode } from 'react';
import type { AlBaseProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { alLabelClasses } from '../../utils/classMap';

export interface AlLabelProps extends AlBaseProps {
  /** Conteúdo de texto ou children */
  children: ReactNode;
  /** Atributo HTML for vinculado a um input */
  htmlFor?: string;
  /** Exibir indicador de obrigatório */
  required?: boolean;
}

export function AlLabel({
  children,
  htmlFor,
  required,
  className,
  'data-testid': testId,
}: AlLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        alLabelClasses.label,
        required && alLabelClasses.required,
        className,
      )}
      data-testid={testId}
    >
      {children}
    </label>
  );
}
