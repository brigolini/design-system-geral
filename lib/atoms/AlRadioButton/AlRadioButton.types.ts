import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlRadioOption {
  /** Valor para esta opção de radio */
  value: string;
  /** Label de exibição para esta opção */
  label: string;
}

export interface AlRadioButtonProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    Omit<AlFormFieldWrapperProps, 'labelPosition'>,
    AlFormFieldProps<TFieldValues> {
  /** Opções de radio disponíveis */
  options: AlRadioOption[];
  /** Direção do layout para o grupo de radio */
  direction?: 'horizontal' | 'vertical';
}
