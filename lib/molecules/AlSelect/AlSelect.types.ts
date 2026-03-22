import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlSelectOption {
  value: string;
  label: string;
}

export interface AlSelectProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlSelectOption[];
  /** Texto de placeholder quando nenhum valor está selecionado */
  placeholder?: string;
}
