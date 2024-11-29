import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5004', // Backend API URL
        changeOrigin: true,              // Ensure the origin is changed to the target URL
        secure: false,                   // Set to true if using HTTPS in your backend
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrites the path if necessary
      },
    },
  },
});
