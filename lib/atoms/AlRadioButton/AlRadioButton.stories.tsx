import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlRadioButton } from './AlRadioButton';
import { AlButton } from '../AlButton';

const schema = z.object({
  color: z.string({ error: 'Selecione uma cor' }).min(1, 'Selecione uma cor'),
});

type FormData = z.infer<typeof schema>;

const colorOptions = [
  { value: 'red', label: 'Vermelho' },
  { value: 'green', label: 'Verde' },
  { value: 'blue', label: 'Azul' },
];

const meta: Meta<typeof AlRadioButton> = {
  title: 'Atoms/AlRadioButton',
  component: AlRadioButton,
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
      <AlRadioButton<FormData>
        name="color"
        form={form}
        label={args.label as string ?? 'Cor Favorita'}
        options={colorOptions}
        direction={args.direction as 'horizontal' | 'vertical' ?? 'vertical'}
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

export const Vertical: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Cor Favorita', direction: 'vertical' },
};

export const Horizontal: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Cor Favorita', direction: 'horizontal' },
};

export const Required: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Cor Favorita', required: true },
};

export const Disabled: Story = {
  render: (args) => <RadioStory {...args} />,
  args: { label: 'Cor Favorita', disabled: true },
};
