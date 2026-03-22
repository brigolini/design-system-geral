import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AlmgBaseProps, AlmgInteractiveProps, AlmgIntentProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { almgButtonClasses } from '../../utils/classMap';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

export interface AlmgButtonProps
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgIntentProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'aria-label'> {
  /** Conteúdo do botão */
  children: ReactNode;
}

const intentMap: Record<string, string> = {
  primary: almgButtonClasses.primary,
  secondary: almgButtonClasses.secondary,
  danger: almgButtonClasses.danger,
  warning: almgButtonClasses.warning,
};

export function AlmgButton({
  children,
  intent = 'primary',
  loading,
  disabled,
  type = 'button',
  onClick,
  className,
  'data-testid': testId,
  'aria-label': ariaLabel,
}: AlmgButtonProps) {
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      className={cn(
        almgButtonClasses.button,
        intentMap[intent],
        isDisabled && almgButtonClasses.disabled,
        isLoading && almgButtonClasses.loading,
        className,
      )}
      data-testid={testId}
    >
      {isLoading && <AlmgSpinner size="sm" aria-label="Loading" />}
      {children}
    </button>
  );
}
