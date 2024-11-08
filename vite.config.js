import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Global imports, if any
        additionalData: `@use 'src/styles/variables.scss' as *;`,
      },
    },
  },
});
