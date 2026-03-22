import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgCurrencyInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
  /** Símbolo de moeda a exibir (default: '$') */
  currencySymbol?: string;
  /** Separador decimal (default: '.') */
  decimalSeparator?: string;
  /** Separador de milhares (default: ',') */
  thousandsSeparator?: string;
  /** Número de casas decimais (default: 2) */
  decimalPlaces?: number;
  /** Texto de placeholder */
  placeholder?: string;
}
