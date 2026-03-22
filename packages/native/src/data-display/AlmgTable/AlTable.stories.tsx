import type { Meta, StoryObj } from '@storybook/react-vite';
import { createColumnHelper } from '@tanstack/react-table';
import { AlmgTable } from './AlTable';
import { useAlmgTable } from './useAlTable';
import { people, type Person } from '../../utils/data';

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', { header: 'Nome' }),
  columnHelper.accessor('lastName', { header: 'Sobrenome' }),
  columnHelper.accessor('age', { header: 'Idade' }),
  columnHelper.accessor('email', { header: 'Email' }),
  columnHelper.accessor('department', { header: 'Departamento' }),
];

const meta: Meta<typeof AlmgTable> = {
  title: 'Data Display/AlmgTable',
  component: AlmgTable,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleTable: Story = {
  render: () => {
    const table = useAlmgTable({ data: people.slice(0, 5), columns });
    return <AlmgTable table={table} />;
  },
};

export const WithSorting: Story = {
  render: () => {
    const table = useAlmgTable({ data: people, columns, enableSorting: true });
    return <AlmgTable table={table} />;
  },
};

export const WithPagination: Story = {
  render: () => {
    const table = useAlmgTable({ data: people, columns, enablePagination: true, pageSize: 10 });
    return <AlmgTable table={table} />;
  },
};

export const SortingAndPagination: Story = {
  render: () => {
    const table = useAlmgTable({
      data: people,
      columns,
      enableSorting: true,
      enablePagination: true,
      pageSize: 10,
    });
    return <AlmgTable table={table} />;
  },
};

export const GroupedColumns: Story = {
  render: () => {
    const groupedColumns = [
      columnHelper.group({
        header: 'Name',
        columns: [
          columnHelper.accessor('firstName', { header: 'Nome' }),
          columnHelper.accessor('lastName', { header: 'Sobrenome' }),
        ],
      }),
      columnHelper.group({
        header: 'Info',
        columns: [
          columnHelper.accessor('age', { header: 'Idade' }),
          columnHelper.accessor('email', { header: 'Email' }),
          columnHelper.accessor('department', { header: 'Depto' }),
        ],
      }),
    ];
    const table = useAlmgTable({ data: people.slice(0, 10), columns: groupedColumns, enableSorting: true });
    return <AlmgTable table={table} />;
  },
};

export const EmptyState: Story = {
  render: () => {
    const table = useAlmgTable({ data: [], columns });
    return <AlmgTable table={table} emptyMessage="Nenhum funcionário encontrado" />;
  },
};

export const InlineEditing: Story = {
  render: () => {
    const editableColumns = [
      columnHelper.accessor('firstName', {
        header: 'Nome',
        cell: ({ getValue }) => {
          const initialValue = getValue();
          return (
            <input
              className="almg-input"
              defaultValue={initialValue}
              onBlur={() => {}}
              style={{ width: '100%', padding: '4px 8px', fontSize: 'inherit' }}
            />
          );
        },
      }),
      columnHelper.accessor('lastName', { header: 'Sobrenome' }),
      columnHelper.accessor('age', { header: 'Idade' }),
      columnHelper.accessor('email', { header: 'Email' }),
    ];
    const table = useAlmgTable({ data: people.slice(0, 5), columns: editableColumns });
    return <AlmgTable table={table} />;
  },
};
