import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlAccordion } from './AlAccordion';

const meta: Meta<typeof AlAccordion> = {
  title: 'Organisms/AlAccordion',
  component: AlAccordion,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    allowMultiple: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  { id: '1', title: 'O que é Al UI?', content: <p>Al UI é um design system para desenvolvedores web.</p> },
  { id: '2', title: 'Como instalar?', content: <p>Instale via npm: npm install @almg/al-ui</p> },
  { id: '3', title: 'É acessível?', content: <p>Sim, todos os componentes atendem aos padrões WCAG AA.</p> },
];

export const Vertical: Story = {
  args: { items, direction: 'vertical' },
};

export const Horizontal: Story = {
  args: { items, direction: 'horizontal' },
};

export const AllowMultiple: Story = {
  args: { items, allowMultiple: true },
};

export const DefaultOpen: Story = {
  args: { items, defaultOpen: ['1'] },
};
