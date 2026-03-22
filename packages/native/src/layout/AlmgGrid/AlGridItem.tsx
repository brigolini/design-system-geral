import type { AlmgGridItemProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgGridClasses } from '../../utils/classMap';

export function AlmgGridItem({
  span,
  children,
  className,
  'data-testid': testId,
}: AlmgGridItemProps) {
  const spanClass = span ? `${almgGridClasses.spanPrefix}${span}` : undefined;

  return (
    <div className={cn(spanClass, className)} data-testid={testId}>
      {children}
    </div>
  );
}
