import type { AlmgBaseProps } from '../common';

export interface AlmgErrorMessageProps extends AlmgBaseProps {
  /** Texto da mensagem de erro */
  children: string;
  /** ID para vinculação aria-describedby */
  id?: string;
}
