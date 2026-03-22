import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgCurrencyInput } from './AlCurrencyInput';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  amount: z.string({ error: 'Valor é obrigatório' }).min(1, 'Valor é obrigatório'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgCurrencyInput> = {
  title: 'Forms/AlmgCurrencyInput',
  component: AlmgCurrencyInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

function CurrencyStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgCurrencyInput<FormData>
        name="amount"
        form={form}
        label={args.label as string ?? 'Valor'}
        currencySymbol={args.currencySymbol as string}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Enviar</AlmgButton>
      </div>
    </form>
  );
}

export const USD: Story = {
  render: (args) => <CurrencyStory {...args} />,
  args: { label: 'Preço (USD)', currencySymbol: '$' },
};

export const EUR: Story = {
  render: (args) => <CurrencyStory {...args} />,
  args: { label: 'Preço (EUR)', currencySymbol: '€' },
};

export const Disabled: Story = {
  render: (args) => <CurrencyStory {...args} />,
  args: { label: 'Valor', disabled: true },
};
