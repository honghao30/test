import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.BASE_URL || '/',
  server: {
    host: 'localhost',
    port: 14004,
    strictPort: true,
  },
  plugins: [vue(), viteCompression()],
  optimizeDeps: {},
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/variables.scss";@import "src/assets/scss/variables.en.scss";`,
        charset: false,
      },
    },
  },
  envDir: resolve(__dirname, 'src', 'config'),
  resolve: {
    alias: [
      // {
      //   find: 'mapbox-gl',
      //   replacement: resolve('./node_modules/mapbox-gl'),
      // },
      { find: '/@', replacement: resolve(__dirname, 'src') },
      { find: '/Assets', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '/Components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '/Composables',
        replacement: resolve(__dirname, 'src/composables'),
      },
      { find: '/Libraries', replacement: resolve(__dirname, 'src/libraries') },
      { find: '/Services', replacement: resolve(__dirname, 'src/services') },
      { find: '/Views', replacement: resolve(__dirname, 'src/views') },
      { find: '/Pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '/Mixins', replacement: resolve(__dirname, 'src/mixins') },
      { find: '/Constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '/Layouts', replacement: resolve(__dirname, 'src/layouts') },
      { find: '/Projects', replacement: resolve(__dirname, 'src/projects') },
      { find: '/Hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '/Config', replacement: resolve(__dirname, 'src/config') },
      { find: '/Store', replacement: resolve(__dirname, 'src/store') },
      { find: '/Utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '/Type', replacement: resolve(__dirname, 'src/typings') },
      { find: '/Workers', replacement: resolve(__dirname, 'src/workers') },
      { find: '/Plugins', replacement: resolve(__dirname, 'src/plugins') },
    ],
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production'
      },
    },
    minify: 'terser',
    sourcemap: process.env.NODE_ENV !== 'production',
    rollupOptions: {
      external: (id) => /^\/media\/.*/.test(id),
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    keepNames: true,
  },
  assetsInclude: ['**/*.mov'],
})
