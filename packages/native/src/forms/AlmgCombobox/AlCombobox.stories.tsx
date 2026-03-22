import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgCombobox } from './AlCombobox';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  fruit: z.string({ error: 'Selecione uma fruta' }).min(1, 'Selecione uma fruta'),
});

type FormData = z.infer<typeof schema>;

const fruitOptions = [
  { value: 'apple', label: 'Maçã' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cereja' },
  { value: 'grape', label: 'Uva' },
  { value: 'mango', label: 'Manga' },
  { value: 'orange', label: 'Laranja' },
  { value: 'peach', label: 'Pêssego' },
  { value: 'pear', label: 'Pera' },
  { value: 'strawberry', label: 'Morango' },
  { value: 'watermelon', label: 'Melancia' },
];

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
        name="fruit"
        form={form}
        options={fruitOptions}
        label={args.label as string ?? 'Fruta'}
        placeholder={args.placeholder as string ?? 'Buscar frutas...'}
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
  args: { label: 'Fruta', placeholder: 'Buscar frutas...' },
};

export const Loading: Story = {
  render: (args) => <ComboboxStory {...args} />,
  args: { label: 'Fruta', loading: true },
};

export const Disabled: Story = {
  render: (args) => <ComboboxStory {...args} />,
  args: { label: 'Fruta', disabled: true },
};
