import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ssr from 'vite-plugin-ssr/plugin';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ssr(),
    sitemap({
      hostname: 'https://enhancedbjj.com/', // Replace with your actual domain
      routes: ['/'], // Add all your important routes
    }),
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.page.jsx', '.json'], // Add the extensions you want to support
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // Global imports, if any
        additionalData: `@use 'src/styles/variables.scss' as *;`,
      },
    },
  },
});
