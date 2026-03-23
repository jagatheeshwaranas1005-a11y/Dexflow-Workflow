import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'supabase': ['@supabase/supabase-js'],
        'charts': ['recharts'],
        'motion': ['framer-motion'],
        'icons': ['lucide-react'],
      },
    },
  },
},
  server: {
    hmr: true,
  },
});