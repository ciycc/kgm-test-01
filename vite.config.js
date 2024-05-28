import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import AutoImport from 'unplugin-auto-import/vite';
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kgm-test-01/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '&': resolve(__dirname, 'src/publishing'),
      '~': resolve(__dirname, 'src/service'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      // 기본 지정 클래스
      wrapperClasses: 'prose prose-sm text-left',
      markdownItSetup(md) {
        // Shiki 스킨 설정(code style)
        md.use(Shiki, {});
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // eslint 예외 처리
      eslintrc: {
        enabled: true,
        filepath: './src/system/auto-config/.eslintrc-auto-import.json',
        globalsPropValue: true,
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
      },
    },
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
