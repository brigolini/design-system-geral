import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlDateRangePicker } from './AlDateRangePicker';
import { AlButton } from '../../atoms/AlButton';

const schema = z.object({
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlDateRangePicker> = {
  title: 'Molecules/AlDateRangePicker',
  component: AlDateRangePicker,
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
      <AlDateRangePicker<FormData>
        startName="startDate"
        endName="endDate"
        form={form}
        label={args.label as string ?? 'Date Range'}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlButton type="submit">Enviar</AlButton>
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
