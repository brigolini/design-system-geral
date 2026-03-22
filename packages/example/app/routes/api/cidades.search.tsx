import type { LoaderFunctionArgs } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  const cidadeService = await import('../../services/cidade.service');
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const results = cidadeService.search(q);
  return Response.json(
    results.map((c) => ({ value: c.id, label: c.nome }))
  );
}
