import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgRadioButton } from './AlRadioButton';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  color: z.string({ error: 'Selecione uma cor' }).min(1, 'Selecione uma cor'),
});

type FormData = z.infer<typeof schema>;

const colorOptions = [
  { value: 'red', label: 'Vermelho' },
  { value: 'green', label: 'Verde' },
  { value: 'blue', label: 'Azul' },
];

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
        <AlmgButton type="submit">Enviar</AlmgButton>
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
