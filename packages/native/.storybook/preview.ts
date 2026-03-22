import type { Preview } from '@storybook/react-vite';
import '../../styles/src/al-ui.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      level: 'AA',
    },
  },
};

export default preview;
