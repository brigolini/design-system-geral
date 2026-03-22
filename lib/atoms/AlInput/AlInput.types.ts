import type { InputHTMLAttributes } from 'react';
import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues>,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'placeholder' | 'autoComplete' | 'maxLength' | 'min' | 'max' | 'step'
    > {
  /** Tipos de input suportados */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}
