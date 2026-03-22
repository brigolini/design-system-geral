import type { AlmgBaseProps } from '../common';

export type AlmgSpinnerSize = 'sm' | 'md' | 'lg';

export interface AlmgSpinnerProps extends AlmgBaseProps {
  /** Tamanho do spinner */
  size?: AlmgSpinnerSize;
  /** Label acessível para leitores de tela */
  'aria-label'?: string;
}
