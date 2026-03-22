import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgBreadcrumbs } from './AlBreadcrumbs';

const meta: Meta<typeof AlmgBreadcrumbs> = {
  title: 'Forms/AlmgBreadcrumbs',
  component: AlmgBreadcrumbs,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{
      "text": "Início",
      "link": "/"
    }, {
      "text": "Servidores",
      "link": "/servidores"
    }, {
      "text": "Carreira",
      "link": "/servidores/carreira"
    }, {
      "text": "Pontuação na Carreira"
    }],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { text: 'Painel', link: '/dashboard' },
      { text: 'Configurações' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { text: 'Início', link: '/' },
      { text: 'Usuários', link: '/users' },
      { text: 'John Doe' },
    ],
    separator: '›',
  },
};
