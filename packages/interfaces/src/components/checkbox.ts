import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../common';
import type { AlmgFormFieldProps } from '../form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgCheckboxProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Atributo value do checkbox */
  value?: string;
}
