import type { AlmgBreadcrumbsProps } from './AlBreadcrumbs.types';
import { cn } from '../../utils/cn';
import { almgBreadcrumbsClasses } from '../../utils/classMap';

export function AlmgBreadcrumbs({
  items,
  separator = '/',
  className,
  'data-testid': testId,
}: AlmgBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(almgBreadcrumbsClasses.nav, className)}
      data-testid={testId}
    >
      <ol className={almgBreadcrumbsClasses.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={almgBreadcrumbsClasses.item}>
              {!isLast && item.link ? (
                <a href={item.link} className={almgBreadcrumbsClasses.link}>
                  {item.text}
                </a>
              ) : (
                <span
                  className={almgBreadcrumbsClasses.current}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.text}
                </span>
              )}
              {!isLast && (
                <span className={almgBreadcrumbsClasses.separator} aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
