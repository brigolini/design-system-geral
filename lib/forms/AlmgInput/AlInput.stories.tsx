import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgInput } from './AlInput';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  email: z.string({ error: 'E-mail é obrigatório' }).min(1, 'E-mail é obrigatório').email('Endereço de e-mail inválido'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgInput> = {
  title: 'Primitives/AlmgInput',
  component: AlmgInput,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: { control: 'select', options: ['left', 'top', 'right'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'tel', 'url'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function InputStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <AlmgInput<FormData>
        name="email"
        form={form}
        label={args.label as string ?? 'E-mail'}
        labelPosition={args.labelPosition as 'left' | 'top' | 'right' ?? 'top'}
        placeholder={args.placeholder as string ?? 'you@example.com'}
        type={args.type as 'text' | 'email' ?? 'email'}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
        required={args.required as boolean}
        helpText={args.helpText as string}
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Validar</AlmgButton>
      </div>
    </form>
  );
}

export const Default: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'top',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const LabelLeft: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'left',
    placeholder: 'you@example.com',
  },
};

export const LabelRight: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'right',
    placeholder: 'you@example.com',
  },
};

export const WithHelpText: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    helpText: 'Nunca compartilharemos seu e-mail.',
    placeholder: 'you@example.com',
  },
};

export const Required: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    required: true,
    placeholder: 'you@example.com',
  },
};

export const Loading: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    loading: true,
    placeholder: 'you@example.com',
  },
};

export const Disabled: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    disabled: true,
    placeholder: 'you@example.com',
  },
};

export const NoLabel: Story = {
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: 'onBlur',
    });
    return (
      <AlmgInput<FormData>
        name="email"
        form={form}
        placeholder="Input sem label"
        type="email"
      />
    );
  },
};
