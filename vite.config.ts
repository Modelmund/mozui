import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Inspect()],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './packages/index.ts',
      name: 'mozui'
    }
  }
})
