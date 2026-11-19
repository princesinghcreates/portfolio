import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    host: true,
    allowedHosts: true,
    watch: {
      ignored: ['**/public/assets/**', '**/*.mp4']
    }
  },
  preview: {
    port: 3000,
    open: false,
    host: true,
    allowedHosts: true
  }
});
