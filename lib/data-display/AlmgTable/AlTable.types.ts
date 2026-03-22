import type { Table } from '@tanstack/react-table';
import type { AlmgBaseProps } from '../../types/common';

export interface AlmgTableProps<TData> extends AlmgBaseProps {
  table: Table<TData>;
  /** Exibir mensagem de estado vazio quando não houver linhas */
  emptyMessage?: string;
}
