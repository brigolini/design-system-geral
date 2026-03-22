import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgSelect } from './AlSelect';
import { AlmgButton } from '../../primitives/AlmgButton';
import { stateOptions } from '../../utils/data';

const schema = z.object({
  country: z.string({ error: 'Selecione um estado' }).min(1, 'Selecione um estado'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgSelect> = {
  title: 'Forms/AlmgSelect',
  component: AlmgSelect,
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

function SelectStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgSelect<FormData>
        name="country"
        form={form}
        options={stateOptions}
        label={args.label as string ?? 'Estado'}
        labelPosition={args.labelPosition as 'left' | 'top' | 'right' ?? 'top'}
        placeholder={args.placeholder as string ?? 'Selecione um estado...'}
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
  render: (args) => <SelectStory {...args} />,
  args: { label: 'Estado', placeholder: 'Selecione um estado...' },
};

export const Required: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'Estado', required: true },
};

export const Disabled: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'Estado', disabled: true },
};

export const Loading: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'Estado', loading: true },
};

export const LabelLeft: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'Estado', labelPosition: 'left' },
};
