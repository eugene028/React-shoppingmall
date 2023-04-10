import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouterPlugin } from 'vite-plugin-next-react-router';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  reactRouterPlugin(),],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@lib', replacement: '/src/lib' },
    ],
  },
  base: '/',
})

