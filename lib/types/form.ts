import type {
  FieldValues,
  UseFormReturn,
  Path,
  RegisterOptions,
} from 'react-hook-form';

/**
 * Props para componentes de formulário conectados ao RHF.
 * O genérico TFieldValues flui do schema Zod do formulário para nomes de campos type-safe.
 */
export interface AlFormFieldProps<TFieldValues extends FieldValues = FieldValues> {
  /** Nome do campo, type-safe em relação ao schema do formulário */
  name: Path<TFieldValues>;
  /** Instância do formulário RHF vinda do useForm() */
  form: UseFormReturn<TFieldValues>;
  /** Opções adicionais de registro do RHF */
  rules?: RegisterOptions<TFieldValues>;
}
