import type {
  ColumnDef,
  TableOptions,
  SortingState,
  PaginationState,
  GroupingState,
} from '@tanstack/react-table';
import type { UseFormReturn } from 'react-hook-form';

/** Opções para o hook useAlTable */
export interface UseAlTableOptions<TData> {
  /** Array de dados da tabela */
  data: TData[];
  /** Definições de colunas do TanStack Table */
  columns: ColumnDef<TData, unknown>[];
  /** Habilitar ordenação de colunas */
  enableSorting?: boolean;
  /** Habilitar agrupamento de colunas */
  enableGrouping?: boolean;
  /** Habilitar paginação */
  enablePagination?: boolean;
  /** Número de linhas por página (padrão: 20) */
  pageSize?: number;
  /** Estado inicial de ordenação */
  initialSorting?: SortingState;
  /** Estado inicial de paginação */
  initialPagination?: PaginationState;
  /** Estado inicial de agrupamento */
  initialGrouping?: GroupingState;
  /** Instância de formulário RHF para edição inline */
  form?: UseFormReturn;
  /** Sobrescrever qualquer opção do TanStack Table */
  tableOptions?: Partial<TableOptions<TData>>;
}
