import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    qiankun(
      'app-vue3', // 主应用里面配置的微应用的name
      {
        useDevMode: true
      }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
