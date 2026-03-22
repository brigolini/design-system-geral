import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgMultiSelect } from './AlMultiSelect';
import { AlmgButton } from '../../primitives/AlmgButton';

const schema = z.object({
  tags: z.array(z.string({ error: 'Campo obrigatório' }), { error: 'Selecione pelo menos uma tag' }).min(1, 'Selecione pelo menos uma tag'),
});

type FormData = z.infer<typeof schema>;

const tagOptions = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'vite', label: 'Vite' },
  { value: 'storybook', label: 'Storybook' },
  { value: 'vitest', label: 'Vitest' },
  { value: 'eslint', label: 'ESLint' },
  { value: 'prettier', label: 'Prettier' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
];

// Generate a large dataset for virtualization demo
const largeOptions = Array.from({ length: 5000 }, (_, i) => ({
  value: `item-${i}`,
  label: `Employee #${String(i + 1).padStart(5, '0')} — ${['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'][i % 5]} ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][i % 5]}`,
}));

const meta: Meta<typeof AlmgMultiSelect> = {
  title: 'Forms/AlmgMultiSelect',
  component: AlmgMultiSelect,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: { control: 'select', options: ['left', 'top', 'right'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

function MultiSelectStory(args: Record<string, unknown> & { optionSet?: 'small' | 'large' }) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: { tags: [] },
  });

  const opts = args.optionSet === 'large' ? largeOptions : tagOptions;

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '400px' }}>
      <AlmgMultiSelect<FormData>
        name="tags"
        form={form}
        options={opts}
        label={args.label as string ?? 'Tags'}
        placeholder={args.placeholder as string ?? 'Buscar tags...'}
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
  render: (args) => <MultiSelectStory {...args} />,
  args: { label: 'Tags', placeholder: 'Buscar tags...' },
};

export const LargeDataset: Story = {
  render: (args) => <MultiSelectStory {...args} optionSet="large" />,
  args: { label: 'Funcionários (5.000 itens)', placeholder: 'Buscar funcionários...' },
};

export const Disabled: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: { label: 'Tags', disabled: true },
};
