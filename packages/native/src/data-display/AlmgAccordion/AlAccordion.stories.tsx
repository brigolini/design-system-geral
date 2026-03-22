import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgAccordion } from './AlAccordion';
import { faqItems } from '../../utils/data';

const meta: Meta<typeof AlmgAccordion> = {
  title: 'Data Display/AlmgAccordion',
  component: AlmgAccordion,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    allowMultiple: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { items: faqItems, direction: 'vertical' },
};

export const Horizontal: Story = {
  args: { items: faqItems, direction: 'horizontal' },
};

export const AllowMultiple: Story = {
  args: { items: faqItems, allowMultiple: true },
};

export const DefaultOpen: Story = {
  args: { items: faqItems, defaultOpen: ['1'] },
};
