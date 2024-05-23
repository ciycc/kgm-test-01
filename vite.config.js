import { defineConfig } from 'vite';
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '&': resolve(__dirname, 'src/publishing'),
      '~': resolve(__dirname, 'src/service'),
    },
  },
  plugins: [vue({
    include: [/\.vue$/, /\.md$/]
  }),
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    // eslint 예외 처리
    eslintrc: {
      enabled: true,
      filepath: './src/system/auto-config/.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    exclude: ['**/dist/**'],
  }),
  ],

  css: {
    devSourcemap: process.env.NODE_ENV === 'development',
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/service/scss/variable";
        @use "./src/service/scss/reset";
        @use "./src/service/scss/util" as *;`,
      }
    },
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});