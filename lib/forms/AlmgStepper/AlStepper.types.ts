import type { ReactNode } from 'react';
import type { AlmgBaseProps } from '../../types/common';

export interface AlmgStepperStep {
  label: string;
  content: ReactNode;
  /** Se este passo pode ser acessado clicando */
  isValid?: boolean;
}

export interface AlmgStepperProps extends AlmgBaseProps {
  steps: AlmgStepperStep[];
  /** Índice do passo ativo atualmente (base 0) */
  activeStep: number;
  /** Callback quando o passo muda */
  onStepChange: (step: number) => void;
}
