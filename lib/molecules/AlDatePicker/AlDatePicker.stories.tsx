import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlDatePicker } from './AlDatePicker';
import { AlButton } from '../../atoms/AlButton';

const schema = z.object({
  birthdate: z.string().min(1, 'Date is required'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlDatePicker> = {
  title: 'Molecules/AlDatePicker',
  component: AlDatePicker,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

function DateStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlDatePicker<FormData>
        name="birthdate"
        form={form}
        label={args.label as string ?? 'Data de Nascimento'}
        min={args.min as string}
        max={args.max as string}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
        required={args.required as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlButton type="submit">Enviar</AlButton>
      </div>
    </form>
  );
}

export const Default: Story = {
  render: (args) => <DateStory {...args} />,
  args: { label: 'Data de Nascimento' },
};

export const WithMinMax: Story = {
  render: (args) => <DateStory {...args} />,
  args: { label: 'Data do Evento', min: '2024-01-01', max: '2025-12-31' },
};

export const Required: Story = {
  render: (args) => <DateStory {...args} />,
  args: { label: 'Data de Nascimento', required: true },
};
