import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgDateRangePicker } from './AlDateRangePicker';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  startDate: z.string({ error: 'Data inicial é obrigatória' }).min(1, 'Data inicial é obrigatória'),
  endDate: z.string({ error: 'Data final é obrigatória' }).min(1, 'Data final é obrigatória'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgDateRangePicker> = {
  title: 'Forms/AlmgDateRangePicker',
  component: AlmgDateRangePicker,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

function DateRangeStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '500px' }}>
      <AlmgDateRangePicker<FormData>
        startName="startDate"
        endName="endDate"
        form={form}
        label={args.label as string ?? 'Date Range'}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Enviar</AlmgButton>
      </div>
    </form>
  );
}

export const Default: Story = {
  render: (args) => <DateRangeStory {...args} />,
  args: { label: 'Datas da Viagem' },
};

export const Disabled: Story = {
  render: (args) => <DateRangeStory {...args} />,
  args: { label: 'Datas da Viagem', disabled: true },
};
