import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlComboboxOption {
  value: string;
  label: string;
}

export interface AlComboboxProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlComboboxOption[];
  /** Texto de placeholder */
  placeholder?: string;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
