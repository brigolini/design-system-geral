import type { FieldValues, UseFormReturn, Path } from 'react-hook-form';

/** Extrai o registro RHF e estado de erro para um campo de formulário */
export function useAlmgFormField<TFieldValues extends FieldValues>(
  form: UseFormReturn<TFieldValues>,
  name: Path<TFieldValues>,
) {
  const {
    register,
    formState: { errors },
  } = form;

  // Navigate nested error path (e.g. "address.city")
  const error = name
    .split('.')
    .reduce<unknown>((obj, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        return (obj as Record<string, unknown>)[key];
      }
      return undefined;
    }, errors);

  const errorMessage = (error as { message?: string } | undefined)?.message;
  const registration = register(name);

  return {
    registration,
    errorMessage,
    hasError: !!errorMessage,
  };
}
