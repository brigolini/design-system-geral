import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgComboboxOption {
  value: string;
  label: string;
}

export interface AlmgComboboxProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlmgComboboxOption[];
  /** Texto de placeholder */
  placeholder?: string;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
