import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AlBaseProps, AlInteractiveProps, AlIntentProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { alButtonClasses } from '../../utils/classMap';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlSpinner } from '../AlSpinner';

export interface AlButtonProps
  extends AlBaseProps,
    AlInteractiveProps,
    AlIntentProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'aria-label'> {
  /** Conteúdo do botão */
  children: ReactNode;
}

const intentMap: Record<string, string> = {
  primary: alButtonClasses.primary,
  secondary: alButtonClasses.secondary,
  danger: alButtonClasses.danger,
  warning: alButtonClasses.warning,
};

export function AlButton({
  children,
  intent = 'primary',
  loading,
  disabled,
  type = 'button',
  onClick,
  className,
  'data-testid': testId,
  'aria-label': ariaLabel,
}: AlButtonProps) {
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      className={cn(
        alButtonClasses.button,
        intentMap[intent],
        isDisabled && alButtonClasses.disabled,
        isLoading && alButtonClasses.loading,
        className,
      )}
      data-testid={testId}
    >
      {isLoading && <AlSpinner size="sm" aria-label="Loading" />}
      {children}
    </button>
  );
}
