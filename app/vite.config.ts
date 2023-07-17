/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import cert from 'vite-plugin-mkcert';

export default defineConfig({
  cacheDir: '../node_modules/.vite/app',

  server: {
    port: 4200,
    host: 'localhost',
    https: true,
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    cert(),
    viteTsConfigPaths({
      root: '../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
