import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgAsyncAutocomplete } from './AlAsyncAutocomplete';
import { AlmgButton } from '../../primitives/AlmgButton';
import { fetchCities } from '../../utils/data';

const schema = z.object({
  city: z.string({ error: 'Selecione uma cidade' }).min(1, 'Selecione uma cidade'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlmgAsyncAutocomplete> = {
  title: 'Forms/AlmgAsyncAutocomplete',
  component: AlmgAsyncAutocomplete,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

function AsyncStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlmgAsyncAutocomplete<FormData>
        name="city"
        form={form}
        fetchOptions={fetchCities}
        label={args.label as string ?? 'Cidade'}
        placeholder={args.placeholder as string ?? 'Digite para buscar cidades...'}
        debounceMs={args.debounceMs as number ?? 300}
        minChars={args.minChars as number ?? 1}
      />
      <div style={{ marginTop: '12px' }}>
        <AlmgButton type="submit">Enviar</AlmgButton>
      </div>
    </form>
  );
}

export const Default: Story = {
  render: (args) => <AsyncStory {...args} />,
  args: {
    label: 'Cidade',
    placeholder: 'Digite para buscar cidades...',
  },
};

export const MinTwoChars: Story = {
  render: (args) => <AsyncStory {...args} />,
  args: {
    label: 'Cidade',
    placeholder: 'Digite pelo menos 2 caracteres...',
    minChars: 2,
  },
};
