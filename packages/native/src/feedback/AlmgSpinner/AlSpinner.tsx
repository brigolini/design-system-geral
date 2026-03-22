import type { AlmgBaseProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgSpinnerClasses } from '../../utils/classMap';

export type AlmgSpinnerSize = 'sm' | 'md' | 'lg';

export interface AlmgSpinnerProps extends AlmgBaseProps {
  /** Tamanho do spinner */
  size?: AlmgSpinnerSize;
  /** Label acessível para leitores de tela */
  'aria-label'?: string;
}

const sizeMap: Record<AlmgSpinnerSize, string> = {
  sm: almgSpinnerClasses.small,
  md: almgSpinnerClasses.medium,
  lg: almgSpinnerClasses.large,
};

export function AlmgSpinner({
  size = 'md',
  className,
  'data-testid': testId,
  'aria-label': ariaLabel = 'Loading',
}: AlmgSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={cn(almgSpinnerClasses.spinner, sizeMap[size], className)}
      data-testid={testId}
    />
  );
}
