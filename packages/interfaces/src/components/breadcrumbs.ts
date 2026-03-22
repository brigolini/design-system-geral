import type { AlmgBaseProps } from '../common';

export interface AlmgBreadcrumbItem {
  /** Texto de exibição */
  text: string;
  /** URL do link. O último item (página atual) não tem link. */
  link?: string;
}

export interface AlmgBreadcrumbsProps extends AlmgBaseProps {
  /** Array de itens de breadcrumb */
  items: AlmgBreadcrumbItem[];
  /** Caractere separador (default: '/') */
  separator?: string;
}
