import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgDatePickerProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Data mínima selecionável (ISO string) */
  min?: string;
  /** Data máxima selecionável (ISO string) */
  max?: string;
}
