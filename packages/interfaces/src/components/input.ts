import type { InputHTMLAttributes } from 'react';
import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../common';
import type { AlmgFormFieldProps } from '../form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues>,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'placeholder' | 'autoComplete' | 'maxLength' | 'min' | 'max' | 'step'
    > {
  /** Tipos de input suportados */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}
