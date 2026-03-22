import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlSpinner } from './AlSpinner';

const meta: Meta<typeof AlSpinner> = {
  title: 'Atoms/AlSpinner',
  component: AlSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = { args: { size: 'sm' } };
export const Medium: Story = { args: { size: 'md' } };
export const Large: Story = { args: { size: 'lg' } };
