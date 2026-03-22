import { useState, useCallback } from 'react';
import type { AlmgAccordionProps } from './AlAccordion.types';
import { cn } from '../../utils/cn';
import { almgAccordionClasses } from '../../utils/classMap';

export function AlmgAccordion({
  items,
  allowMultiple = false,
  direction = 'vertical',
  defaultOpen = [],
  className,
  'data-testid': testId,
}: AlmgAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!allowMultiple) next.clear();
          next.add(id);
        }
        return next;
      });
    },
    [allowMultiple],
  );

  return (
    <div
      className={cn(
        almgAccordionClasses.accordion,
        direction === 'horizontal' && almgAccordionClasses.accordionHorizontal,
        className,
      )}
      data-testid={testId}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              almgAccordionClasses.item,
              isOpen && almgAccordionClasses.itemOpen,
            )}
          >
            <button
              type="button"
              className={almgAccordionClasses.trigger}
              aria-expanded={isOpen}
              aria-controls={`almg-accordion-content-${item.id}`}
              id={`almg-accordion-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              {item.title}
              <svg
                className={almgAccordionClasses.icon}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className={almgAccordionClasses.content}
                id={`almg-accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`almg-accordion-trigger-${item.id}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
