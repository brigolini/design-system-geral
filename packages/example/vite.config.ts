import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'path';

const dep = (name: string) => path.resolve(__dirname, 'node_modules', name);

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
  ],
  resolve: {
    alias: {
      // Importar direto do source — evita node_modules aninhados
      '@almg/native': path.resolve(__dirname, '../native/src/index.ts'),
      '@almg/interfaces': path.resolve(__dirname, '../interfaces/src/index.ts'),
      // Forçar todas as deps compartilhadas a resolver deste projeto
      'downshift': dep('downshift'),
      '@tanstack/react-table': dep('@tanstack/react-table'),
      '@tanstack/react-virtual': dep('@tanstack/react-virtual'),
      'react-hook-form': dep('react-hook-form'),
      '@hookform/resolvers': dep('@hookform/resolvers'),
      'clsx': dep('clsx'),
      'tailwind-merge': dep('tailwind-merge'),
    },
    dedupe: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: [
      /^@almg\//,
      'clsx',
      'tailwind-merge',
    ],
  },
});
