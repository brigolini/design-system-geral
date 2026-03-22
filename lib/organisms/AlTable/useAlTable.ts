import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getGroupedRowModel,
  type ColumnDef,
  type TableOptions,
  type SortingState,
  type PaginationState,
  type GroupingState,
} from '@tanstack/react-table';
import { useState } from 'react';

export interface UseAlTableOptions<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  enableSorting?: boolean;
  enableGrouping?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  initialSorting?: SortingState;
  initialGrouping?: GroupingState;
  tableOptions?: Partial<TableOptions<TData>>;
}

export function useAlTable<TData>({
  data,
  columns,
  enableSorting = false,
  enableGrouping = false,
  enablePagination = false,
  pageSize = 20,
  initialSorting = [],
  initialGrouping = [],
  tableOptions,
}: UseAlTableOptions<TData>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });
  const [grouping, setGrouping] = useState<GroupingState>(initialGrouping);

  return useReactTable({
    data,
    columns,
    state: {
      ...(enableSorting ? { sorting } : {}),
      ...(enablePagination ? { pagination } : {}),
      ...(enableGrouping ? { grouping } : {}),
    },
    ...(enableSorting ? { onSortingChange: setSorting, getSortedRowModel: getSortedRowModel() } : {}),
    ...(enablePagination ? { onPaginationChange: setPagination, getPaginationRowModel: getPaginationRowModel() } : {}),
    ...(enableGrouping ? { onGroupingChange: setGrouping, getGroupedRowModel: getGroupedRowModel() } : {}),
    getCoreRowModel: getCoreRowModel(),
    ...tableOptions,
  });
}
