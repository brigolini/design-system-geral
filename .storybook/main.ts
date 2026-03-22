import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.stories.@(ts|tsx)',
    '../lib/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
