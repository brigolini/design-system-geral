import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlCheckbox } from './AlCheckbox';
import { AlButton } from '../AlButton';

const schema = z.object({
  terms: z.boolean({ error: 'Campo obrigatório' }).refine((v) => v === true, 'Você deve aceitar os termos'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlCheckbox> = {
  title: 'Atoms/AlCheckbox',
  component: AlCheckbox,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: { control: 'select', options: ['left', 'top', 'right'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function CheckboxStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})}>
      <AlCheckbox<FormData>
        name="terms"
        form={form}
        label={args.label as string ?? 'Aceito os termos'}
        labelPosition={args.labelPosition as 'left' | 'top' | 'right' ?? 'right'}
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
  render: (args) => <CheckboxStory {...args} />,
  args: { label: 'Aceito os termos e condições' },
};

export const LabelLeft: Story = {
  render: (args) => <CheckboxStory {...args} />,
  args: { label: 'Aceitar termos', labelPosition: 'left' },
};

export const Required: Story = {
  render: (args) => <CheckboxStory {...args} />,
  args: { label: 'Aceitar termos', required: true },
};

export const Disabled: Story = {
  render: (args) => <CheckboxStory {...args} />,
  args: { label: 'Aceitar termos', disabled: true },
};

export const Loading: Story = {
  render: (args) => <CheckboxStory {...args} />,
  args: { label: 'Aceitar termos', loading: true },
};
