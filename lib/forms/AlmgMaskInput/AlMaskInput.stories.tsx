import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgMaskInput } from './AlMaskInput';
import { AlmgButton } from '../../primitives/AlmgButton';

const meta: Meta<typeof AlmgMaskInput> = {
  title: 'Forms/AlmgMaskInput',
  component: AlmgMaskInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

/* ── Telefone Brasil ──
   Fixo:    (XX) XXXX-XXXX   (10 dígitos)
   Celular: (XX) XXXXX-XXXX  (11 dígitos, começa com 9) */

const brPhoneSchema = z.object({
  phone: z
    .string()
    .min(14, 'Número de telefone incompleto')
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, '');
        return digits.length === 10 || digits.length === 11;
      },
      'Número de telefone inválido',
    ),
});

type BrPhoneFormData = z.infer<typeof brPhoneSchema>;

function BrazilPhoneStory() {
  const form = useForm<BrPhoneFormData>({
    resolver: zodResolver(brPhoneSchema),
    mode: 'onBlur',
  });

  const phoneValue = form.watch('phone') ?? '';
  const digits = phoneValue.replace(/\D/g, '');

  // Se o 3º dígito (primeiro do número local) for 9, é celular (11 dígitos)
  const isMobile = digits.length > 2 && digits[2] === '9';
  const mask = isMobile ? '(99) 99999-9999' : '(99) 9999-9999';

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgMaskInput<BrPhoneFormData>
        name="phone"
        form={form}
        mask={mask}
        label="Telefone"
        placeholder="(00) 00000-0000"
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Enviar</AlmgButton>
      </div>
    </form>
  );
}

export const TelefoneBrasil: Story = {
  render: () => <BrazilPhoneStory />,
};

/* ── Outros exemplos ── */

const genericSchema = z.object({
  value: z.string({ error: 'Campo obrigatório' }).min(1, 'Campo obrigatório'),
});

type GenericFormData = z.infer<typeof genericSchema>;

function MaskStory(args: Record<string, unknown>) {
  const form = useForm<GenericFormData>({
    resolver: zodResolver(genericSchema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgMaskInput<GenericFormData>
        name="value"
        form={form}
        mask={args.mask as string ?? '999-999'}
        label={args.label as string ?? 'Campo'}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Enviar</AlmgButton>
      </div>
    </form>
  );
}

export const CPF: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'CPF', mask: '999.999.999-99' },
};

export const CEP: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'CEP', mask: '99999-999' },
};

export const CartaoCredito: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'Número do Cartão', mask: '9999 9999 9999 9999' },
};

export const CNPJ: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'CNPJ', mask: '99.999.999/9999-99' },
};
