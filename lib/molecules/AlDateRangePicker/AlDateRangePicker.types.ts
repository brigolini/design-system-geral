import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { FieldValues, UseFormReturn, Path } from 'react-hook-form';

export interface AlDateRangePickerProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    Omit<AlFormFieldWrapperProps, 'errorMessage'> {
  /** Nome do campo para data inicial */
  startName: Path<TFieldValues>;
  /** Nome do campo para data final */
  endName: Path<TFieldValues>;
  /** Instância de formulário RHF */
  form: UseFormReturn<TFieldValues>;
  /** Label da data inicial */
  startLabel?: string;
  /** Label da data final */
  endLabel?: string;
  /** Data mínima selecionável */
  min?: string;
  /** Data máxima selecionável */
  max?: string;
}
