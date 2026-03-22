import type { AlIntent } from '../types/common';
import { intentClassMap } from '../utils/classMap';

/** Resolve uma intenção para seu nome de classe CSS */
export function useAlIntent(intent?: AlIntent): string | undefined {
  if (!intent) return undefined;
  return intentClassMap[intent];
}
