import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgRadioButton } from './AlRadioButton';
import { AlmgButton } from '../../primitives/AlmgButton';
import { positionOptions } from '../../utils/data';

const schema = z.object({
  position: z.string({ error: 'Selecione uma posição' }).min(1, 'Selecione uma posição'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgRadioButton> = {
  title: 'Primitives/AlmgRadioButton',
  component: AlmgRadioButton,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function RadioStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <AlmgRadioButton<FormData>
        name="position"
        form={form}
        label={args.label as string ?? 'Posição'}
        options={positionOptions}
        direction={args.direction as 'horizontal' | 'vertical' ?? 'vertical'}
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

export const Vertical: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Posição', direction: 'vertical' },
};

export const Horizontal: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Posição', direction: 'horizontal' },
};

export const Required: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Posição', required: true },
};

export const Disabled: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Posição', disabled: true },
};
