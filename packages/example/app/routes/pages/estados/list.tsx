import { useLoaderData, Link, useFetcher } from 'react-router';
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { AlmgTable, useAlmgTable, AlmgButton, AlmgBreadcrumbs, AlmgToastProvider, useAlmgToast } from '@almg/native';

// loader: busca lista de estados
export async function loader() {
  const estadoService = await import('../../../services/estado.service');
  return Response.json({ estados: estadoService.list() });
}

// action: deleta estado
export async function action({ request }: ActionFunctionArgs) {
  const estadoService = await import('../../../services/estado.service');
  const formData = await request.formData();
  const _action = formData.get('_action');
  if (_action === 'delete') {
    const id = formData.get('id') as string;
    estadoService.remove(id);
    return Response.json({ success: true, message: 'Estado excluído com sucesso' });
  }
  return Response.json({ success: false });
}

// Component
export default function EstadosList() {
  const { estados } = useLoaderData() as { estados: Array<{ id: string; nome: string; sigla: string }> };
  const fetcher = useFetcher();

  const columnHelper = createColumnHelper<typeof estados[0]>();
  const columns = [
    columnHelper.accessor('nome', { header: 'Nome' }),
    columnHelper.accessor('sigla', { header: 'Sigla' }),
    columnHelper.display({
      id: 'actions',
      header: 'Ações',
      cell: ({ row }) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to={`/estados/${row.original.id}`}>
            <AlmgButton intent="secondary">Editar</AlmgButton>
          </Link>
          <fetcher.Form method="post">
            <input type="hidden" name="_action" value="delete" />
            <input type="hidden" name="id" value={row.original.id} />
            <AlmgButton intent="danger" type="submit">Excluir</AlmgButton>
          </fetcher.Form>
        </div>
      ),
    }),
  ];

  const table = useAlmgTable({
    data: estados,
    columns,
    enableSorting: true,
    enablePagination: true,
    pageSize: 5,
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Início', link: '/' },
        { text: 'Estados' },
      ]} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
        <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)' }}>Estados</h1>
        <Link to="/estados/novo">
          <AlmgButton intent="primary">Novo Estado</AlmgButton>
        </Link>
      </div>
      <AlmgTable table={table} emptyMessage="Nenhum estado encontrado" />
    </div>
  );
}
