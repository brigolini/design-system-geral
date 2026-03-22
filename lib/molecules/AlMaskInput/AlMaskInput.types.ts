import type {
  AlBaseProps,
  AlInteractiveProps,
  AlFormFieldWrapperProps,
} from '../../types/common';
import type { AlFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlMaskInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlBaseProps,
    AlInteractiveProps,
    AlFormFieldWrapperProps,
    AlFormFieldProps<TFieldValues> {
  /**
   * Padrão de máscara. Use:
   * - '9' para dígito
   * - 'a' para letra
   * - '*' para alfanumérico
   * Outros caracteres são separadores literais.
   * Exemplo: '(999) 999-9999' para telefone US
   */
  mask: string;
  /** Caractere a exibir para posições não preenchidas (default: '_') */
  maskChar?: string;
  /** Texto de placeholder */
  placeholder?: string;
}
