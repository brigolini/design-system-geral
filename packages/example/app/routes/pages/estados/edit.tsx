import { useLoaderData, useNavigate, redirect } from 'react-router';
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlmgInput, AlmgButton, AlmgBreadcrumbs } from '@almg/native';
import { estadoSchema, type EstadoInput } from '../../../services/estado.schema';

export async function loader({ params }: LoaderFunctionArgs) {
  const estadoService = await import('../../../services/estado.service');
  const estado = estadoService.getById(params.id!);
  return Response.json({ estado });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const estadoService = await import('../../../services/estado.service');
  const formData = await request.formData();
  const input = JSON.parse(formData.get('data') as string);
  try {
    estadoService.update(params.id!, input);
    return redirect('/estados');
  } catch {
    return Response.json({ error: 'Erro ao atualizar estado' }, { status: 400 });
  }
}

export default function EstadoEdit() {
  const { estado } = useLoaderData() as { estado: { id: string; nome: string; sigla: string } };
  const navigate = useNavigate();
  const form = useForm<EstadoInput>({
    resolver: zodResolver(estadoSchema),
    mode: 'onBlur',
    defaultValues: { nome: estado.nome, sigla: estado.sigla },
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
        { text: 'Estados', link: '/estados' },
        { text: `Editar: ${estado.nome}` },
      ]} />
      <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)', margin: '24px 0 16px' }}>
        Editar Estado
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AlmgInput<EstadoInput> name="nome" form={form} label="Nome" required />
        <AlmgInput<EstadoInput> name="sigla" form={form} label="Sigla" required maxLength={2} />
        <div style={{ display: 'flex', gap: '12px' }}>
          <AlmgButton intent="primary" type="submit">Salvar</AlmgButton>
          <AlmgButton intent="secondary" type="button" onClick={() => navigate('/estados')}>Cancelar</AlmgButton>
        </div>
      </form>
    </div>
  );
}
