import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';
import type { AlComboboxOption } from '../AlCombobox/AlCombobox.types';

export interface AlAsyncAutocompleteProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
  /** Função assíncrona para buscar opções com base na consulta */
  fetchOptions: (query: string) => Promise<AlComboboxOption[]>;
  /** Atraso de debounce em milissegundos (default: 300) */
  debounceMs?: number;
  /** Texto de placeholder */
  placeholder?: string;
  /** Mínimo de caracteres antes de buscar (default: 1) */
  minChars?: number;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
