import { useLoaderData, Link, useFetcher } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { AlmgTable, useAlmgTable, AlmgButton, AlmgBreadcrumbs } from '@almg/native';

interface CidadeView {
  id: string;
  nome: string;
  estadoNome: string;
}

// loader: busca lista de cidades com nome do estado
export async function loader() {
  const cidadeService = await import('../../../services/cidade.service');
  const estadoService = await import('../../../services/estado.service');
  const cidades = cidadeService.list();
  const estados = estadoService.list();
  const cidadesView: CidadeView[] = cidades.map((c) => ({
    id: c.id,
    nome: c.nome,
    estadoNome: estados.find((e) => e.id === c.estadoId)?.nome ?? 'N/A',
  }));
  return Response.json({ cidades: cidadesView });
}

// action: deleta cidade
export async function action({ request }: ActionFunctionArgs) {
  const cidadeService = await import('../../../services/cidade.service');
  const formData = await request.formData();
  const _action = formData.get('_action');
  if (_action === 'delete') {
    const id = formData.get('id') as string;
    cidadeService.remove(id);
    return Response.json({ success: true, message: 'Cidade excluída com sucesso' });
  }
  return Response.json({ success: false });
}

// Component
export default function CidadesList() {
  const { cidades } = useLoaderData() as { cidades: CidadeView[] };
  const fetcher = useFetcher();

  const columnHelper = createColumnHelper<CidadeView>();
  const columns = [
    columnHelper.accessor('nome', { header: 'Nome' }),
    columnHelper.accessor('estadoNome', { header: 'Estado' }),
    columnHelper.display({
      id: 'actions',
      header: 'Ações',
      cell: ({ row }) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to={`/cidades/${row.original.id}`}>
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
    data: cidades,
    columns,
    enableSorting: true,
    enablePagination: true,
    pageSize: 5,
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Início', link: '/' },
        { text: 'Cidades' },
      ]} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
        <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)' }}>Cidades</h1>
        <Link to="/cidades/novo">
          <AlmgButton intent="primary">Nova Cidade</AlmgButton>
        </Link>
      </div>
      <AlmgTable table={table} emptyMessage="Nenhuma cidade encontrada" />
    </div>
  );
}
