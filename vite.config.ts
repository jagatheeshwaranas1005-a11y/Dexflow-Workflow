import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        motion: 'framer-motion', // prevents wrong entry resolution
      },
    },

    optimizeDeps: {
      include: [
        '@emotion/react',
        '@emotion/styled',
        '@emotion/is-prop-valid',
        'framer-motion'
      ],
    },

    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    server: {
      hmr: true,
    },
  };
});