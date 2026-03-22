/** Variantes visuais de intenção para componentes interativos */
export type AlIntent = 'primary' | 'secondary' | 'danger' | 'warning';

/** Posicionamento do label em relação ao campo de formulário */
export type AlLabelPosition = 'left' | 'top' | 'right';

/** Posicionamento da mensagem de erro em relação ao campo de formulário */
export type AlErrorPosition = 'bottom' | 'right';

/** Props base compartilhadas por todos os componentes Al */
export interface AlBaseProps {
  /** Classes CSS adicionais */
  className?: string;
  /** ID de teste para testes automatizados */
  'data-testid'?: string;
}

/** Props para componentes interativos (botões, inputs, selects, etc.) */
export interface AlInteractiveProps {
  /** Exibe indicador de carregamento e desabilita interação */
  loading?: boolean;
  /** Desabilita o componente */
  disabled?: boolean;
}

/** Props para componentes que suportam variantes de intenção */
export interface AlIntentProps {
  /** Intenção/variante visual do componente */
  intent?: AlIntent;
}

/** Props do wrapper de campo de formulário (label + exibição de erro) */
export interface AlFormFieldWrapperProps {
  /** Texto do label do campo. Quando omitido, nenhum label é renderizado. */
  label?: string;
  /** Posição do label em relação ao input */
  labelPosition?: AlLabelPosition;
  /** Mensagem de erro a ser exibida (tipicamente do Zod via RHF) */
  errorMessage?: string;
  /** Posição da mensagem de erro: 'bottom' (padrão) ou 'right' */
  errorPosition?: AlErrorPosition;
  /** Se o campo é obrigatório (adiciona indicador visual ao label) */
  required?: boolean;
  /** Texto de ajuda exibido abaixo do campo */
  helpText?: string;
}
