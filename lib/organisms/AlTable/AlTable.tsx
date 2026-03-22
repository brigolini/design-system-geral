import { flexRender, type Table, type Header } from '@tanstack/react-table';
import type { AlTableProps } from './AlTable.types';
import { cn } from '../../utils/cn';
import { alTableClasses } from '../../utils/classMap';

function SortIcon({ header }: { header: Header<any, unknown> }) {
  const sorted = header.column.getIsSorted();
  if (!sorted) return <span className={alTableClasses.sortIcon}>↕</span>;
  return (
    <span
      className={cn(
        alTableClasses.sortIcon,
        sorted === 'asc' && alTableClasses.sortIconAsc,
        sorted === 'desc' && alTableClasses.sortIconDesc,
      )}
    >
      {sorted === 'asc' ? '↑' : '↓'}
    </span>
  );
}

function Pagination<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className={alTableClasses.pagination}>
      <button
        type="button"
        className={alTableClasses.paginationButton}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </button>
      <span className={alTableClasses.paginationInfo}>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </span>
      <button
        type="button"
        className={alTableClasses.paginationButton}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
    </div>
  );
}

export function AlTable<TData>({
  table,
  emptyMessage = 'No data available',
  className,
  'data-testid': testId,
}: AlTableProps<TData>) {
  const hasPagination = table.getPageCount() > 0;
  const rows = table.getRowModel().rows;

  return (
    <div className={cn(alTableClasses.container, className)} data-testid={testId}>
      {hasPagination && (
        <div className={alTableClasses.toolbar}>
          <Pagination table={table} />
        </div>
      )}
      <table className={alTableClasses.table}>
        <thead className={alTableClasses.head}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={alTableClasses.headerRow}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={cn(
                    alTableClasses.headerCell,
                    header.column.getCanSort() && alTableClasses.headerCellSortable,
                    header.column.getIsSorted() && alTableClasses.headerCellSorted,
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: header.column.getCanSort() ? 'pointer' : undefined }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanSort() && <SortIcon header={header} />}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={alTableClasses.body}>
          {rows.length > 0 ? (
            rows.map((row) => (
              <tr key={row.id} className={alTableClasses.row}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={alTableClasses.cell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className={alTableClasses.emptyState}
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
