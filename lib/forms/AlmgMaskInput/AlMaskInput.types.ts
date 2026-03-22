import type {
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgFormFieldWrapperProps,
} from '../../types/common';
import type { AlmgFormFieldProps } from '../../types/form';
import type { FieldValues } from 'react-hook-form';

export interface AlmgMaskInputProps<TFieldValues extends FieldValues = FieldValues>
  extends AlmgBaseProps,
    AlmgInteractiveProps,
    AlmgFormFieldWrapperProps,
    AlmgFormFieldProps<TFieldValues> {
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
