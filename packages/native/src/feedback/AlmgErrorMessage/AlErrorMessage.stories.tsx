import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgErrorMessage } from './AlErrorMessage';

const meta: Meta<typeof AlmgErrorMessage> = {
  title: 'Primitives/AlmgErrorMessage',
  component: AlmgErrorMessage,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Digite algo correto dessa vez, seu nerde",
  },
};

export const EmailError: Story = {
  args: {
    children: 'Por favor, insira um endereço de e-mail válido',
  },
};
