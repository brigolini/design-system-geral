import type { AlmgCardProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgCardClasses } from '../../utils/classMap';

export function AlmgCard({
  title,
  headingLevel = 3,
  children,
  className,
  'data-testid': testId,
}: AlmgCardProps) {
  const Heading = `h${headingLevel}` as const;

  return (
    <div className={cn(almgCardClasses.card, className)} data-testid={testId}>
      <div className={almgCardClasses.header}>
        <Heading className={almgCardClasses.title}>{title}</Heading>
      </div>
      <div className={almgCardClasses.body}>{children}</div>
    </div>
  );
}
