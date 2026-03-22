import type { ReactNode } from 'react';
import type { AlBaseProps, AlInteractiveProps, AlIntentProps } from '../../types/common';

export interface AlCarouselProps extends AlBaseProps, AlInteractiveProps, AlIntentProps {
  children: ReactNode[];
  /** Intervalo de reprodução automática em ms (0 para desabilitar) */
  autoPlay?: number;
  /** Exibir indicadores de pontos */
  showDots?: boolean;
  /** Exibir setas anterior/próximo */
  showArrows?: boolean;
}
