import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlMultiSelectOption {
  value: string;
  label: string;
}

export interface AlMultiSelectProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlMultiSelectOption[];
  /** Texto de placeholder */
  placeholder?: string;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
