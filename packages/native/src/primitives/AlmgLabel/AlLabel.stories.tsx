import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgLabel } from './AlLabel';

const meta: Meta<typeof AlmgLabel> = {
  title: 'Primitives/AlmgLabel',
  component: AlmgLabel,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Endereço de E-mail',
  },
};

export const Required: Story = {
  args: {
    children: 'Endereço de E-mail',
    required: true,
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: 'Nome de Usuário',
    htmlFor: 'username-input',
  },
};
