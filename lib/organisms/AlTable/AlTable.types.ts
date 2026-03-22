import type { Table } from '@tanstack/react-table';
import type { AlBaseProps } from '../../types/common';

export interface AlTableProps<TData> extends AlBaseProps {
  table: Table<TData>;
  /** Exibir mensagem de estado vazio quando não houver linhas */
  emptyMessage?: string;
}
