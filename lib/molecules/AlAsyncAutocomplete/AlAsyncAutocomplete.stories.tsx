import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlAsyncAutocomplete } from './AlAsyncAutocomplete';
import { AlButton } from '../../atoms/AlButton';

const schema = z.object({
  city: z.string().min(1, 'Please select a city'),
});

type FormData = z.infer<typeof schema>;

const allCities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
  'Indianapolis', 'San Francisco', 'Seattle', 'Denver', 'Nashville',
  'London', 'Paris', 'Tokyo', 'Berlin', 'Madrid', 'Rome',
  'Amsterdam', 'Vienna', 'Prague', 'Barcelona', 'Lisbon',
  'São Paulo', 'Buenos Aires', 'Mexico City', 'Toronto', 'Vancouver',
];

// Simulated async fetch
const fetchCities = async (query: string) => {
  await new Promise((r) => setTimeout(r, 500)); // Simulate network delay
  return allCities
    .filter((c) => c.toLowerCase().includes(query.toLowerCase()))
    .map((c) => ({ value: c.toLowerCase().replace(/\s/g, '-'), label: c }));
};

const meta: Meta<typeof AlAsyncAutocomplete> = {
  title: 'Molecules/AlAsyncAutocomplete',
  component: AlAsyncAutocomplete,
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
      <AlAsyncAutocomplete<FormData>
        name="city"
        form={form}
        fetchOptions={fetchCities}
        label={args.label as string ?? 'Cidade'}
        placeholder={args.placeholder as string ?? 'Digite para buscar cidades...'}
        debounceMs={args.debounceMs as number ?? 300}
        minChars={args.minChars as number ?? 1}
      />
      <div style={{ marginTop: '12px' }}>
        <AlButton type="submit">Enviar</AlButton>
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
