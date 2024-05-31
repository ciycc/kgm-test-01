// vite.config.js
import { defineConfig } from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/vite@5.2.12_sass@1.77.3/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import vue from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.12_sass@1.77.3__vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoprefixer from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.38/node_modules/autoprefixer/lib/autoprefixer.js";
import AutoImport from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/unplugin-auto-import@0.17.6_rollup@4.18.0/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/vite-plugin-vue-markdown@0.23.8_rollup@4.18.0_vite@5.2.12_sass@1.77.3_/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import Shiki from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/.pnpm/markdown-it-shiki@0.9.0/node_modules/markdown-it-shiki/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\KGM_PRJ\\kgm-test-001";
var vite_config_default = defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      "&": resolve(__vite_injected_original_dirname, "src/publishing"),
      "~": resolve(__vite_injected_original_dirname, "src/service")
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      // 기본 지정 클래스
      wrapperClasses: "prose prose-sm text-left",
      markdownItSetup(md) {
        md.use(Shiki, {});
      }
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      // eslint 예외 처리
      eslintrc: {
        enabled: true,
        filepath: "./src/system/auto-config/.eslintrc-auto-import.json",
        globalsPropValue: true
      },
      exclude: ["**/dist/**"]
    })
  ],
  css: {
    devSourcemap: process.env.NODE_ENV === "development",
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/service/scss/variable";
        @import "./src/service/scss/reset";
        @import "./src/service/scss/util";
        @import "./src/service/scss/mixin";
        @import "./src/service/scss/common";
        `
      }
    },
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxLR01fUFJKXFxcXGtnbS10ZXN0LTAwMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcS0dNX1BSSlxcXFxrZ20tdGVzdC0wMDFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0tHTV9QUkova2dtLXRlc3QtMDAxL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWFya2Rvd24nO1xyXG5pbXBvcnQgU2hpa2kgZnJvbSAnbWFya2Rvd24taXQtc2hpa2knO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLycsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAnJic6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3B1Ymxpc2hpbmcnKSxcclxuICAgICAgJ34nOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zZXJ2aWNlJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKHtcclxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxyXG4gICAgfSksXHJcbiAgICBNYXJrZG93bih7XHJcbiAgICAgIC8vIFx1QUUzMFx1QkNGOCBcdUM5QzBcdUM4MTUgXHVEMDc0XHVCNzk4XHVDMkE0XHJcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gdGV4dC1sZWZ0JyxcclxuICAgICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgLy8gU2hpa2kgXHVDMkE0XHVEMEE4IFx1QzEyNFx1QzgxNShjb2RlIHN0eWxlKVxyXG4gICAgICAgIG1kLnVzZShTaGlraSwge30pO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxyXG4gICAgICAvLyBlc2xpbnQgXHVDNjA4XHVDNjc4IFx1Q0M5OFx1QjlBQ1xyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZmlsZXBhdGg6ICcuL3NyYy9zeXN0ZW0vYXV0by1jb25maWcvLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLFxyXG4gICAgICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4Y2x1ZGU6IFsnKiovZGlzdC8qKiddLFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvc2VydmljZS9zY3NzL3ZhcmlhYmxlXCI7XHJcbiAgICAgICAgQGltcG9ydCBcIi4vc3JjL3NlcnZpY2Uvc2Nzcy9yZXNldFwiO1xyXG4gICAgICAgIEBpbXBvcnQgXCIuL3NyYy9zZXJ2aWNlL3Njc3MvdXRpbFwiO1xyXG4gICAgICAgIEBpbXBvcnQgXCIuL3NyYy9zZXJ2aWNlL3Njc3MvbWl4aW5cIjtcclxuICAgICAgICBAaW1wb3J0IFwiLi9zcmMvc2VydmljZS9zY3NzL2NvbW1vblwiO1xyXG4gICAgICAgIGAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbYXV0b3ByZWZpeGVyKHt9KV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLFNBQVMsb0JBQW9CO0FBQzFSLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sV0FBVztBQU5sQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQzdCLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN4QyxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLElBQzdCLENBQUM7QUFBQSxJQUNELFNBQVM7QUFBQTtBQUFBLE1BRVAsZ0JBQWdCO0FBQUEsTUFDaEIsZ0JBQWdCLElBQUk7QUFFbEIsV0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBO0FBQUEsTUFFdEMsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1Ysa0JBQWtCO0FBQUEsTUFDcEI7QUFBQSxNQUNBLFNBQVMsQ0FBQyxZQUFZO0FBQUEsSUFDeEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILGNBQWMsUUFBUSxJQUFJLGFBQWE7QUFBQSxJQUN2QyxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQzVCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
