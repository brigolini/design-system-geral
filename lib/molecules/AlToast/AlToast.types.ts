import type { AlIntentProps } from '../../types/common';

export interface AlToastData extends AlIntentProps {
  id: string;
  title?: string;
  message: string;
  /** Auto-dispensar em ms (0 para manter aberto, default: 5000) */
  duration?: number;
}

export interface AlToastProviderProps {
  children: React.ReactNode;
}
