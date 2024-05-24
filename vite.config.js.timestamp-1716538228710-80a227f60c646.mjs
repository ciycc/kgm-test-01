// vite.config.js
import { defineConfig } from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import vue from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoprefixer from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/autoprefixer/lib/autoprefixer.js";
import AutoImport from "file:///C:/KGM_PRJ/kgm-test-001/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_dirname = "C:\\KGM_PRJ\\kgm-test-001";
var vite_config_default = defineConfig({
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
        additionalData: `@use "./src/service/scss/variable";
        @use "./src/service/scss/reset";
        @use "./src/service/scss/util" as *;`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxLR01fUFJKXFxcXGtnbS10ZXN0LTAwMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcS0dNX1BSSlxcXFxrZ20tdGVzdC0wMDFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0tHTV9QUkova2dtLXRlc3QtMDAxL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcclxuICAgICAgJyYnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wdWJsaXNoaW5nJyksXHJcbiAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc2VydmljZScpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFt2dWUoe1xyXG4gICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxyXG4gIH0pLFxyXG4gIEF1dG9JbXBvcnQoe1xyXG4gICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxyXG4gICAgLy8gZXNsaW50IFx1QzYwOFx1QzY3OCBcdUNDOThcdUI5QUNcclxuICAgIGVzbGludHJjOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGZpbGVwYXRoOiAnLi9zcmMvc3lzdGVtL2F1dG8tY29uZmlnLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJyxcclxuICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBleGNsdWRlOiBbJyoqL2Rpc3QvKionXSxcclxuICB9KSxcclxuICBdLFxyXG5cclxuICBjc3M6IHtcclxuICAgIGRldlNvdXJjZW1hcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCIuL3NyYy9zZXJ2aWNlL3Njc3MvdmFyaWFibGVcIjtcclxuICAgICAgICBAdXNlIFwiLi9zcmMvc2VydmljZS9zY3NzL3Jlc2V0XCI7XHJcbiAgICAgICAgQHVzZSBcIi4vc3JjL3NlcnZpY2Uvc2Nzcy91dGlsXCIgYXMgKjtgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlcih7fSldLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UCxTQUFTLG9CQUFvQjtBQUMxUixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sZ0JBQWdCO0FBSnZCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDN0IsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3hDLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsSUFDdkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFBQyxJQUFJO0FBQUEsTUFDWixTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsSUFDN0IsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYyxPQUFPO0FBQUE7QUFBQSxNQUV0QyxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUyxDQUFDLFlBQVk7QUFBQSxJQUN4QixDQUFDO0FBQUEsRUFDRDtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsY0FBYyxRQUFRLElBQUksYUFBYTtBQUFBLElBQ3ZDLHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
