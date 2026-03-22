import type { AlBaseProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { alErrorMessageClasses } from '../../utils/classMap';

export interface AlErrorMessageProps extends AlBaseProps {
  /** Texto da mensagem de erro */
  children: string;
  /** ID para vinculação aria-describedby */
  id?: string;
}

export function AlErrorMessage({
  children,
  id,
  className,
  'data-testid': testId,
}: AlErrorMessageProps) {
  return (
    <span
      id={id}
      role="alert"
      className={cn(alErrorMessageClasses.message, className)}
      data-testid={testId}
    >
      {children}
    </span>
  );
}
