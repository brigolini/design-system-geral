import type { AlBaseProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { alSpinnerClasses } from '../../utils/classMap';

export type AlSpinnerSize = 'sm' | 'md' | 'lg';

export interface AlSpinnerProps extends AlBaseProps {
  /** Tamanho do spinner */
  size?: AlSpinnerSize;
  /** Label acessível para leitores de tela */
  'aria-label'?: string;
}

const sizeMap: Record<AlSpinnerSize, string> = {
  sm: alSpinnerClasses.small,
  md: alSpinnerClasses.medium,
  lg: alSpinnerClasses.large,
};

export function AlSpinner({
  size = 'md',
  className,
  'data-testid': testId,
  'aria-label': ariaLabel = 'Loading',
}: AlSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={cn(alSpinnerClasses.spinner, sizeMap[size], className)}
      data-testid={testId}
    />
  );
}
