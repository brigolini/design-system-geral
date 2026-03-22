import { useState, useEffect, useCallback, Children } from 'react';
import type { AlmgCarouselProps } from './AlCarousel.types';
import { cn } from '../../utils/cn';
import { almgCarouselClasses } from '../../utils/classMap';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';

const intentMap: Record<string, string> = {
  primary: almgCarouselClasses.primary,
  secondary: almgCarouselClasses.secondary,
  danger: almgCarouselClasses.danger,
  warning: almgCarouselClasses.warning,
};

export function AlmgCarousel({
  children,
  intent,
  autoPlay = 0,
  showDots = true,
  showArrows = true,
  loading,
  disabled,
  className,
  'data-testid': testId,
}: AlmgCarouselProps) {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const { isDisabled } = useAlmgLoading(loading, disabled);

  const goTo = useCallback(
    (index: number) => {
      if (isDisabled) return;
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length, isDisabled],
  );

  const prev = useCallback(() => goTo(current - 1), [goTo, current]);
  const next = useCallback(() => goTo(current + 1), [goTo, current]);

  useEffect(() => {
    if (autoPlay <= 0 || isDisabled) return;
    const timer = setInterval(next, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, next, isDisabled]);

  return (
    <div
      className={cn(
        almgCarouselClasses.carousel,
        intent && intentMap[intent],
        className,
      )}
      data-testid={testId}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
    >
      <div
        className={almgCarouselClasses.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={cn(
              almgCarouselClasses.slide,
              i === current && almgCarouselClasses.slideActive,
            )}
            role="tabpanel"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>
      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            className={almgCarouselClasses.prevButton}
            onClick={prev}
            disabled={isDisabled}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className={almgCarouselClasses.nextButton}
            onClick={next}
            disabled={isDisabled}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
      {showDots && slides.length > 1 && (
        <div className={almgCarouselClasses.dots} role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cn(
                almgCarouselClasses.dot,
                i === current && almgCarouselClasses.dotActive,
              )}
              onClick={() => goTo(i)}
              disabled={isDisabled}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
