import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        `
          $weather-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        `
      }
    }
  }
})
