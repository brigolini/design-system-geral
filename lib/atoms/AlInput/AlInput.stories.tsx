import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlInput } from './AlInput';
import { AlButton } from '../AlButton';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlInput> = {
  title: 'Atoms/AlInput',
  component: AlInput,
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
      <AlInput<FormData>
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
        <AlButton type="submit">Validar</AlButton>
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
      <AlInput<FormData>
        name="email"
        form={form}
        placeholder="Input sem label"
        type="email"
      />
    );
  },
};
