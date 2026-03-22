import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgSelectOption {
  value: string;
  label: string;
}

export interface AlmgSelectProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlmgSelectOption[];
  /** Texto de placeholder quando nenhum valor está selecionado */
  placeholder?: string;
}
