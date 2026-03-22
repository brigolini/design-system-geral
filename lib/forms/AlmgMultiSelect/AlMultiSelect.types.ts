import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgMultiSelectOption {
  value: string;
  label: string;
}

export interface AlmgMultiSelectProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Opções disponíveis */
  options: AlmgMultiSelectOption[];
  /** Texto de placeholder */
  placeholder?: string;
  /** Texto exibido quando nenhuma opção corresponde à busca */
  noResultsText?: string;
}
