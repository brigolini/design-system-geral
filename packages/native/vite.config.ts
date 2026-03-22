import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/utils/data/**', 'src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'dist',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-hook-form',
        '@hookform/resolvers',
        '@hookform/resolvers/zod',
        'zod',
        'downshift',
        '@tanstack/react-table',
        '@tanstack/react-virtual',
        '@almg/interfaces',
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    cssCodeSplit: false,
  },
});
