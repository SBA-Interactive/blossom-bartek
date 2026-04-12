import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: true
  },

  appType: 'mpa',

  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
      },
      prerender: {
        enabled: true,
        routes: async () => {
          const products = [
            'citrus-bloom', 'berry-mist', 'garden-peel', 'tropical-sun', 'forest-dew', 'rose-petal'
          ];
          const sizes = ['30ml', '60ml', '100ml'];
          const productRoutes = products.flatMap(product => 
            sizes.map(size => `/product/${product}-${size}`)
          );
          return [
            '/',
            '/products',
            ...productRoutes,
            '/about',
            '/contact',
            '/cart',
            '/wishlist',
            '/compare',
            '/checkout',
            '/pricing',
            '/terms',
            '/privacy',
            '/cookies',
            '/configurator',
            '/custom',
          ];
        },
      },
    }),
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            target: '19'
          }]
        ]
      }
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
