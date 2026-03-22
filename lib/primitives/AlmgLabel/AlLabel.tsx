import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { almgLabelClasses } from '../../utils/classMap';

export interface AlmgLabelProps extends AlmgBaseProps {
  /** Conteúdo de texto ou children */
  children: ReactNode;
  /** Atributo HTML for vinculado a um input */
  htmlFor?: string;
  /** Exibir indicador de obrigatório */
  required?: boolean;
}

export function AlmgLabel({
  children,
  htmlFor,
  required,
  className,
  'data-testid': testId,
}: AlmgLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        almgLabelClasses.label,
        required && almgLabelClasses.required,
        className,
      )}
      data-testid={testId}
    >
      {children}
    </label>
  );
}
