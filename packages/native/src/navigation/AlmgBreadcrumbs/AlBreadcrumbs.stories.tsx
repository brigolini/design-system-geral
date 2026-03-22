import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgBreadcrumbs } from './AlBreadcrumbs';
import { defaultBreadcrumbs, twoLevelBreadcrumbs, customSeparatorBreadcrumbs } from '../../utils/data';

const meta: Meta<typeof AlmgBreadcrumbs> = {
  title: 'Forms/AlmgBreadcrumbs',
  component: AlmgBreadcrumbs,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: defaultBreadcrumbs,
  },
};

export const TwoLevels: Story = {
  args: {
    items: twoLevelBreadcrumbs,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: customSeparatorBreadcrumbs,
    separator: '›',
  },
};
