import type { AlBaseProps } from '../../types/common';

export interface AlBreadcrumbItem {
  /** Texto de exibição */
  text: string;
  /** URL do link. O último item (página atual) não tem link. */
  link?: string;
}

export interface AlBreadcrumbsProps extends AlBaseProps {
  /** Array de itens de breadcrumb */
  items: AlBreadcrumbItem[];
  /** Caractere separador (default: '/') */
  separator?: string;
}
