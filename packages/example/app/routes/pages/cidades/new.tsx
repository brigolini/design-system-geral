import { useNavigate, redirect } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlmgInput, AlmgAsyncAutocomplete, AlmgButton, AlmgBreadcrumbs } from '@almg/native';
import { cidadeSchema, type CidadeInput } from '../../../services/cidade.schema';

const fetchEstados = async (query: string) => {
  const res = await fetch(`/api/estados/search?q=${encodeURIComponent(query)}`);
  return res.json();
};

export async function action({ request }: ActionFunctionArgs) {
  const cidadeService = await import('../../../services/cidade.service');
  const formData = await request.formData();
  const input = JSON.parse(formData.get('data') as string);
  try {
    cidadeService.create(input);
    return redirect('/cidades');
  } catch {
    return Response.json({ error: 'Erro ao criar cidade' }, { status: 400 });
  }
}

export default function CidadeNew() {
  const navigate = useNavigate();
  const form = useForm<CidadeInput>({
    resolver: zodResolver(cidadeSchema),
    mode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit((data) => {
    const formEl = document.createElement('form');
    formEl.method = 'post';
    formEl.style.display = 'none';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(data);
    formEl.appendChild(input);
    document.body.appendChild(formEl);
    formEl.submit();
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Início', link: '/' },
        { text: 'Cidades', link: '/cidades' },
        { text: 'Nova' },
      ]} />
      <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)', margin: '24px 0 16px' }}>
        Nova Cidade
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AlmgInput<CidadeInput> name="nome" form={form} label="Nome" placeholder="Ex: Belo Horizonte" required />
        <AlmgAsyncAutocomplete<CidadeInput> name="estadoId" form={form} label="Estado" fetchOptions={fetchEstados} placeholder="Buscar estado..." required />
        <div style={{ display: 'flex', gap: '12px' }}>
          <AlmgButton intent="primary" type="submit">Salvar</AlmgButton>
          <AlmgButton intent="secondary" type="button" onClick={() => navigate('/cidades')}>Cancelar</AlmgButton>
        </div>
      </form>
    </div>
  );
}
