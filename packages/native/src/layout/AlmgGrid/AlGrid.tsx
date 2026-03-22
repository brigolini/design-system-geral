import type { AlmgGridProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgGridClasses } from '../../utils/classMap';

const colsClassMap: Record<number, string> = {
  1: almgGridClasses.cols1,
  2: almgGridClasses.cols2,
  3: almgGridClasses.cols3,
  8: almgGridClasses.cols8,
  12: almgGridClasses.cols12,
};

const gapClassMap: Record<string, string> = {
  sm: almgGridClasses.gapSm,
  md: almgGridClasses.gapMd,
  lg: almgGridClasses.gapLg,
};

export function AlmgGrid({
  columns,
  gap = 'md',
  children,
  className,
  'data-testid': testId,
}: AlmgGridProps) {
  return (
    <div
      className={cn(almgGridClasses.grid, colsClassMap[columns], gapClassMap[gap], className)}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
