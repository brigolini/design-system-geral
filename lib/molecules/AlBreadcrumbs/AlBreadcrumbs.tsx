import type { AlBreadcrumbsProps } from './AlBreadcrumbs.types';
import { cn } from '../../utils/cn';
import { alBreadcrumbsClasses } from '../../utils/classMap';

export function AlBreadcrumbs({
  items,
  separator = '/',
  className,
  'data-testid': testId,
}: AlBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(alBreadcrumbsClasses.nav, className)}
      data-testid={testId}
    >
      <ol className={alBreadcrumbsClasses.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={alBreadcrumbsClasses.item}>
              {!isLast && item.link ? (
                <a href={item.link} className={alBreadcrumbsClasses.link}>
                  {item.text}
                </a>
              ) : (
                <span
                  className={alBreadcrumbsClasses.current}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.text}
                </span>
              )}
              {!isLast && (
                <span className={alBreadcrumbsClasses.separator} aria-hidden="true">
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
