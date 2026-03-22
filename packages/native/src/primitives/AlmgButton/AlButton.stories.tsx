import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgButton } from './AlButton';

const meta: Meta<typeof AlmgButton> = {
  title: 'Primitives/AlmgButton',
  component: AlmgButton,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Enviar', intent: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Cancelar', intent: 'secondary' },
};

export const Danger: Story = {
  args: { children: 'Excluir', intent: 'danger' },
};

export const Warning: Story = {
  args: { children: 'Prossiga com cautela', intent: 'warning' },
};

export const Loading: Story = {
  args: { children: 'Salvando...', intent: 'primary', loading: true },
};

export const Disabled: Story = {
  args: { children: 'Desabilitado', intent: 'primary', disabled: true },
};

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <AlmgButton intent="primary">Primary</AlmgButton>
      <AlmgButton intent="secondary">Secondary</AlmgButton>
      <AlmgButton intent="danger">Danger</AlmgButton>
      <AlmgButton intent="warning">Warning</AlmgButton>
    </div>
  ),
};
