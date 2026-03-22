/** Resolve o estado efetivo de desabilitado considerando carregamento */
export function useAlLoading(loading?: boolean, disabled?: boolean) {
  const isDisabled = disabled || loading || false;

  return {
    isDisabled,
    isLoading: loading || false,
  };
}
