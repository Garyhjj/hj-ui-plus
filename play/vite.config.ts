import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true
      },
      imports: [
        // 预设
        'vue'
      ]
    }),
    Components({
      dts: true,
      resolvers: [
        // example of importing Vant
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.startsWith('Hj')) {
            return {
              name: componentName,
              from: '@hj-ui-plus/components',
              sideEffects: [
                '@hj-ui-plus/theme-chalk/src/base.scss',
                `@hj-ui-plus/theme-chalk/src/${componentName.slice(2)}.scss`
              ]
            }
          }
        }
      ]
    }),
    vue(),
    vueJsx(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3333,
    cors: true,
    proxy: {}
  }
})
