import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@nvui': fileURLToPath(new URL('./nvui',import.meta.url))
    }
  },
  build: {
    outDir: 'nvui', //输出文件夹名
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, './packages/components/nvui/index.js'), //指定组件编译入口文件
      name: 'nvui',
      fileName: 'nvui'
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    } // rollup打包配置
  }
})
