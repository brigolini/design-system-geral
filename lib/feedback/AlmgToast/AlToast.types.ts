import type { AlmgIntentProps } from '../../types/common';

export interface AlmgToastData extends AlmgIntentProps {
  id: string;
  title?: string;
  message: string;
  /** Auto-dispensar em ms (0 para manter aberto, default: 5000) */
  duration?: number;
}

export interface AlmgToastProviderProps {
  children: React.ReactNode;
}
