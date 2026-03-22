import { useLoaderData, Link, useFetcher } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { AlmgTable, useAlmgTable, AlmgButton, AlmgBreadcrumbs } from '@almg/native';

interface PessoaView {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}

export async function loader() {
  const pessoaService = await import('../../../services/pessoa.service');
  const pessoas = pessoaService.list();
  return Response.json({
    pessoas: pessoas.map((p) => ({
      id: p.id,
      nome: p.nome,
      cpf: p.cpf,
      email: p.email,
      telefone: p.telefone,
    })),
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const pessoaService = await import('../../../services/pessoa.service');
  const formData = await request.formData();
  const _action = formData.get('_action');
  if (_action === 'delete') {
    const id = formData.get('id') as string;
    pessoaService.remove(id);
    return Response.json({ success: true, message: 'Pessoa excluída com sucesso' });
  }
  return Response.json({ success: false });
}

export default function PessoasList() {
  const { pessoas } = useLoaderData() as { pessoas: PessoaView[] };
  const fetcher = useFetcher();

  const columnHelper = createColumnHelper<PessoaView>();
  const columns = [
    columnHelper.accessor('nome', { header: 'Nome' }),
    columnHelper.accessor('cpf', { header: 'CPF' }),
    columnHelper.accessor('email', { header: 'E-mail' }),
    columnHelper.accessor('telefone', { header: 'Telefone' }),
    columnHelper.display({
      id: 'actions',
      header: 'Ações',
      cell: ({ row }) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to={`/pessoas/${row.original.id}`}>
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
    data: pessoas,
    columns,
    enableSorting: true,
    enablePagination: true,
    pageSize: 10,
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Início', link: '/' },
        { text: 'Pessoas' },
      ]} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
        <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)' }}>Pessoas</h1>
        <Link to="/pessoas/novo">
          <AlmgButton intent="primary">Nova Pessoa</AlmgButton>
        </Link>
      </div>
      <AlmgTable table={table} emptyMessage="Nenhuma pessoa encontrada" />
    </div>
  );
}
