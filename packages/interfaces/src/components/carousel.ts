import type { ReactNode } from 'react';
import type { AlmgBaseProps, AlmgInteractiveProps, AlmgIntentProps } from '../common';

export interface AlmgCarouselProps extends AlmgBaseProps, AlmgInteractiveProps, AlmgIntentProps {
  children: ReactNode[];
  /** Intervalo de reprodução automática em ms (0 para desabilitar) */
  autoPlay?: number;
  /** Exibir indicadores de pontos */
  showDots?: boolean;
  /** Exibir setas anterior/próximo */
  showArrows?: boolean;
}
