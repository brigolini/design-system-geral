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
      include: ['lib/**/*.ts', 'lib/**/*.tsx'],
      outDir: 'dist/lib',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'dist/lib',
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
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
      },
    },
    cssCodeSplit: false,
  },
});
