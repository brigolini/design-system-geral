import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgCarousel } from './AlCarousel';

const meta: Meta<typeof AlmgCarousel> = {
  title: 'Data Display/AlmgCarousel',
  component: AlmgCarousel,
  tags: ['autodocs'],
  argTypes: {
    intent: { control: 'select', options: ['primary', 'secondary', 'danger', 'warning'] },
    autoPlay: { control: 'number' },
    showDots: { control: 'boolean' },
    showArrows: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const slideStyle = (bg: string) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: 'white',
  backgroundColor: bg,
});

export const Default: Story = {
  args: {
    children: [
      <div key="1" style={slideStyle('#22c55e')}>Slide 1</div>,
      <div key="2" style={slideStyle('#3b82f6')}>Slide 2</div>,
      <div key="3" style={slideStyle('#f97316')}>Slide 3</div>,
    ],
  },
};

export const WithIntent: Story = {
  args: {
    intent: 'primary',
    children: [
      <div key="1" style={slideStyle('#22c55e')}>Slide 1</div>,
      <div key="2" style={slideStyle('#3b82f6')}>Slide 2</div>,
    ],
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: 3000,
    children: [
      <div key="1" style={slideStyle('#22c55e')}>Auto 1</div>,
      <div key="2" style={slideStyle('#3b82f6')}>Auto 2</div>,
      <div key="3" style={slideStyle('#ef4444')}>Auto 3</div>,
    ],
  },
};
