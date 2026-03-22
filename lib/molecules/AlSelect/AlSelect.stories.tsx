import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlSelect } from './AlSelect';
import { AlButton } from '../../atoms/AlButton';

const schema = z.object({
  country: z.string().min(1, 'Please select a country'),
});

type FormData = z.infer<typeof schema>;

const countryOptions = [
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'uk', label: 'Reino Unido' },
  { value: 'de', label: 'Alemanha' },
  { value: 'fr', label: 'França' },
  { value: 'jp', label: 'Japão' },
  { value: 'br', label: 'Brasil' },
];

const meta: Meta<typeof AlSelect> = {
  title: 'Molecules/AlSelect',
  component: AlSelect,
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
      <AlSelect<FormData>
        name="country"
        form={form}
        options={countryOptions}
        label={args.label as string ?? 'País'}
        labelPosition={args.labelPosition as 'left' | 'top' | 'right' ?? 'top'}
        placeholder={args.placeholder as string ?? 'Selecione um país...'}
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
  render: (args) => <SelectStory {...args} />,
  args: { label: 'País', placeholder: 'Selecione um país...' },
};

export const Required: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'País', required: true },
};

export const Disabled: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'País', disabled: true },
};

export const Loading: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'País', loading: true },
};

export const LabelLeft: Story = {
  render: (args) => <SelectStory {...args} />,
  args: { label: 'País', labelPosition: 'left' },
};
