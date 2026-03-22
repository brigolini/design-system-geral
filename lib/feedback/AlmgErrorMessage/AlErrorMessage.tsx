import type { AlmgBaseProps } from '../../types/common';
import { cn } from '../../utils/cn';
import { almgErrorMessageClasses } from '../../utils/classMap';

export interface AlmgErrorMessageProps extends AlmgBaseProps {
  /** Texto da mensagem de erro */
  children: string;
  /** ID para vinculação aria-describedby */
  id?: string;
}

export function AlmgErrorMessage({
  children,
  id,
  className,
  'data-testid': testId,
}: AlmgErrorMessageProps) {
  return (
    <span
      id={id}
      role="alert"
      className={cn(almgErrorMessageClasses.message, className)}
      data-testid={testId}
    >
      {children}
    </span>
  );
}
