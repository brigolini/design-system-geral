import { flexRender, type Table, type Header } from '@tanstack/react-table';
import type { AlmgTableProps } from './AlTable.types';
import { cn } from '../../utils/cn';
import { almgTableClasses } from '../../utils/classMap';

function SortIcon({ header }: { header: Header<any, unknown> }) {
  const sorted = header.column.getIsSorted();
  if (!sorted) return <span className={almgTableClasses.sortIcon}>↕</span>;
  return (
    <span
      className={cn(
        almgTableClasses.sortIcon,
        sorted === 'asc' && almgTableClasses.sortIconAsc,
        sorted === 'desc' && almgTableClasses.sortIconDesc,
      )}
    >
      {sorted === 'asc' ? '↑' : '↓'}
    </span>
  );
}

function Pagination<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className={almgTableClasses.pagination}>
      <button
        type="button"
        className={almgTableClasses.paginationButton}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </button>
      <span className={almgTableClasses.paginationInfo}>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </span>
      <button
        type="button"
        className={almgTableClasses.paginationButton}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
    </div>
  );
}

export function AlmgTable<TData>({
  table,
  emptyMessage = 'No data available',
  className,
  'data-testid': testId,
}: AlmgTableProps<TData>) {
  const hasPagination = table.getPageCount() > 0;
  const rows = table.getRowModel().rows;

  return (
    <div className={cn(almgTableClasses.container, className)} data-testid={testId}>
      {hasPagination && (
        <div className={almgTableClasses.toolbar}>
          <Pagination table={table} />
        </div>
      )}
      <table className={almgTableClasses.table}>
        <thead className={almgTableClasses.head}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={almgTableClasses.headerRow}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={cn(
                    almgTableClasses.headerCell,
                    header.column.getCanSort() && almgTableClasses.headerCellSortable,
                    header.column.getIsSorted() && almgTableClasses.headerCellSorted,
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
        <tbody className={almgTableClasses.body}>
          {rows.length > 0 ? (
            rows.map((row) => (
              <tr key={row.id} className={almgTableClasses.row}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={almgTableClasses.cell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className={almgTableClasses.emptyState}
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
