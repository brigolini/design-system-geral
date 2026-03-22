import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../common';
import type { AlmgFormFieldProps } from '../form';
import type { FieldValues } from 'react-hook-form';
import type { AlmgComboboxOption } from './combobox';

export interface AlmgAsyncAutocompleteProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Função assíncrona para buscar opções com base na consulta */
  fetchOptions: (query: string) => Promise<AlmgComboboxOption[]>;
  /** Atraso de debounce em milissegundos (default: 300) */
  debounceMs?: number;
  /** Texto de placeholder */
  placeholder?: string;
  /** Mínimo de caracteres antes de buscar (default: 1) */
  minChars?: number;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
