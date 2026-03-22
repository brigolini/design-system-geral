import type { AlmgIntent } from '@almg/interfaces';
import { intentClassMap } from '../utils/classMap';

/** Resolve uma intenção para seu nome de classe CSS */
export function useAlmgIntent(intent?: AlmgIntent): string | undefined {
  if (!intent) return undefined;
  return intentClassMap[intent];
}
