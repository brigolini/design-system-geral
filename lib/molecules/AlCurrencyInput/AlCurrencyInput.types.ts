import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlCurrencyInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
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
