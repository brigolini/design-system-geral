import type { LoaderFunctionArgs } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  const estadoService = await import('../../services/estado.service');
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const results = estadoService.search(q);
  return Response.json(
    results.map((e) => ({ value: e.id, label: `${e.nome} (${e.sigla})` }))
  );
}
