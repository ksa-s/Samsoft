import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// BASE_PATH controls the root path the site is served from.
// For a custom domain served from the root (e.g. samsoft.fun), leave this as '/'.
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'attached_assets'),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
});
