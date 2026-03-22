import { useId } from 'react';

/** Gera um ID estável e único para rotulação acessível de componentes */
export function useAlId(prefix?: string): string {
  const reactId = useId();
  return prefix ? `al-${prefix}-${reactId}` : `al-${reactId}`;
}
