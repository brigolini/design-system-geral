import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgSpinner } from './AlSpinner';

const meta: Meta<typeof AlmgSpinner> = {
  title: 'Primitives/AlmgSpinner',
  component: AlmgSpinner,
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
