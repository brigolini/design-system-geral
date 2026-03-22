import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgDatePicker } from './AlDatePicker';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  birthdate: z.string({ error: 'Data é obrigatória' }).min(1, 'Data é obrigatória'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgDatePicker> = {
  title: 'Forms/AlmgDatePicker',
  component: AlmgDatePicker,
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
      <AlmgDatePicker<FormData>
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
        <AlmgButton type="submit">Enviar</AlmgButton>
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
