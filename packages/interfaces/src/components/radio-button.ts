import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../common';
import type { AlmgFormFieldProps } from '../form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgRadioOption {
  /** Valor para esta opção de radio */
  value: string;
  /** Label de exibição para esta opção */
  label: string;
}

export interface AlmgRadioButtonProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    Omit<AlmgFormFieldWrapperProps, 'labelPosition'>,
    AlmgFormFieldProps<TFieldValues> {
  /** Opções de radio disponíveis */
  options: AlmgRadioOption[];
  /** Direção do layout para o grupo de radio */
  direction?: 'horizontal' | 'vertical';
}
