import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgCombobox } from './AlCombobox';
import { AlmgButton } from '../../primitives/AlmgButton';
import { teamOptions } from '../../utils/data';

const schema = z.object({
  team: z.string({ error: 'Selecione um time' }).min(1, 'Selecione um time'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgCombobox> = {
  title: 'Forms/AlmgCombobox',
  component: AlmgCombobox,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: { control: 'select', options: ['left', 'top', 'right'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function ComboboxStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgCombobox<FormData>
        name="team"
        form={form}
        options={teamOptions}
        label={args.label as string ?? 'Time'}
        placeholder={args.placeholder as string ?? 'Buscar times...'}
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
  render: (args) => <ComboboxStory {...args} />,
  args: { label: 'Time', placeholder: 'Buscar times...' },
};

export const Loading: Story = {
  render: (args) => <ComboboxStory {...args} />,
  args: { label: 'Time', loading: true },
};

export const Disabled: Story = {
  render: (args) => <ComboboxStory {...args} />,
  args: { label: 'Time', disabled: true },
};
