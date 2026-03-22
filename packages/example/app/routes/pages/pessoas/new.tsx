import { useState } from 'react';
import { useNavigate, redirect } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlmgInput, AlmgMaskInput, AlmgDatePicker, AlmgAsyncAutocomplete,
  AlmgButton, AlmgBreadcrumbs, AlmgStepper,
} from '@almg/native';
import { pessoaSchema, type PessoaInput } from '../../../services/pessoa.schema';

const fetchCidades = async (query: string) => {
  const res = await fetch(`/api/cidades/search?q=${encodeURIComponent(query)}`);
  return res.json();
};

export async function action({ request }: ActionFunctionArgs) {
  const pessoaService = await import('../../../services/pessoa.service');
  const formData = await request.formData();
  const raw = formData.get('data') as string;
  try {
    const input = JSON.parse(raw);
    pessoaService.create(input);
    return redirect('/pessoas');
  } catch {
    return Response.json({ error: 'Erro ao criar pessoa' }, { status: 400 });
  }
}

export default function PessoaNew() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const form = useForm<PessoaInput>({
    resolver: zodResolver(pessoaSchema),
    mode: 'onBlur',
    defaultValues: {
      nome: '', cpf: '', email: '', telefone: '', dataNascimento: '',
      enderecos: [{ rua: '', numero: '', complemento: '', bairro: '', cidadeId: '', cep: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'enderecos',
  });

  const handleSubmit = form.handleSubmit((data) => {
    const formEl = document.createElement('form');
    formEl.method = 'post';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(data);
    formEl.appendChild(input);
    document.body.appendChild(formEl);
    formEl.submit();
  });

  const steps = [
    {
      label: 'Dados Pessoais',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
          <AlmgInput<PessoaInput> name="nome" form={form} label="Nome" required />
          <AlmgMaskInput<PessoaInput> name="cpf" form={form} mask="999.999.999-99" label="CPF" required />
          <AlmgInput<PessoaInput> name="email" form={form} label="E-mail" type="email" required />
          <AlmgMaskInput<PessoaInput> name="telefone" form={form} mask="(99) 99999-9999" label="Telefone" required />
          <AlmgDatePicker<PessoaInput> name="dataNascimento" form={form} label="Data de Nascimento" required />
        </div>
      ),
    },
    {
      label: 'Endereços',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {fields.map((field, index) => (
            <div key={field.id} style={{ border: '1px solid var(--color-almg-brand-secondary)', borderRadius: '8px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3>Endereço {index + 1}</h3>
                {fields.length > 1 && (
                  <AlmgButton intent="danger" type="button" onClick={() => remove(index)}>Remover</AlmgButton>
                )}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '12px' }}>
                <AlmgInput name={`enderecos.${index}.rua`} form={form} label="Rua" required />
                <AlmgInput name={`enderecos.${index}.numero`} form={form} label="Número" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                <AlmgInput name={`enderecos.${index}.complemento`} form={form} label="Complemento" />
                <AlmgInput name={`enderecos.${index}.bairro`} form={form} label="Bairro" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '12px', marginTop: '12px' }}>
                <AlmgAsyncAutocomplete name={`enderecos.${index}.cidadeId`} form={form} label="Cidade" fetchOptions={fetchCidades} placeholder="Buscar cidade..." required />
                <AlmgMaskInput name={`enderecos.${index}.cep`} form={form} mask="99999-999" label="CEP" required />
              </div>
            </div>
          ))}
          <AlmgButton intent="secondary" type="button" onClick={() => append({ rua: '', numero: '', complemento: '', bairro: '', cidadeId: '', cep: '' })}>
            + Adicionar Endereço
          </AlmgButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Início', link: '/' },
        { text: 'Pessoas', link: '/pessoas' },
        { text: 'Nova' },
      ]} />
      <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)', margin: '24px 0 16px' }}>
        Nova Pessoa
      </h1>
      <AlmgStepper steps={steps} activeStep={activeStep} onStepChange={setActiveStep} />
      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        {activeStep > 0 && (
          <AlmgButton intent="secondary" type="button" onClick={() => setActiveStep(activeStep - 1)}>Voltar</AlmgButton>
        )}
        {activeStep < steps.length - 1 ? (
          <AlmgButton intent="primary" type="button" onClick={() => setActiveStep(activeStep + 1)}>Próximo</AlmgButton>
        ) : (
          <AlmgButton intent="primary" type="button" onClick={handleSubmit}>Salvar</AlmgButton>
        )}
        <AlmgButton intent="secondary" type="button" onClick={() => navigate('/pessoas')}>Cancelar</AlmgButton>
      </div>
    </div>
  );
}
