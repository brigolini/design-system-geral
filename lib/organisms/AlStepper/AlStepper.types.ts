import type { ReactNode } from 'react';
import type { AlBaseProps } from '../../types/common';

export interface AlStepperStep {
  label: string;
  content: ReactNode;
  /** Se este passo pode ser acessado clicando */
  isValid?: boolean;
}

export interface AlStepperProps extends AlBaseProps {
  steps: AlStepperStep[];
  /** Índice do passo ativo atualmente (base 0) */
  activeStep: number;
  /** Callback quando o passo muda */
  onStepChange: (step: number) => void;
}
