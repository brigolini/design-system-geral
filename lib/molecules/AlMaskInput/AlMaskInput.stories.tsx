import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlMaskInput } from './AlMaskInput';
import { AlButton } from '../../atoms/AlButton';

const schema = z.object({
  phone: z.string().min(14, 'Complete the phone number'),
});

type FormData = z.infer<typeof schema>;

const meta: Meta<typeof AlMaskInput> = {
  title: 'Molecules/AlMaskInput',
  component: AlMaskInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

function MaskStory(args: Record<string, unknown>) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={form.handleSubmit(() => {})} style={{ maxWidth: '320px' }}>
      <AlMaskInput<FormData>
        name="phone"
        form={form}
        mask={args.mask as string ?? '(999) 999-9999'}
        label={args.label as string ?? 'Telefone'}
        loading={args.loading as boolean}
        disabled={args.disabled as boolean}
      />
      <div style={{ marginTop: '12px' }}>
        <AlButton type="submit">Enviar</AlButton>
      </div>
    </form>
  );
}

export const PhoneNumber: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'Telefone', mask: '(999) 999-9999' },
};

export const SSN: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'SSN', mask: '999-99-9999' },
};

export const ZipCode: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'CEP', mask: '99999-9999' },
};

export const CreditCard: Story = {
  render: (args) => <MaskStory {...args} />,
  args: { label: 'Número do Cartão', mask: '9999 9999 9999 9999' },
};
