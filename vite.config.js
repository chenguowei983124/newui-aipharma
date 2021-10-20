import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // host: 'ai-pharma-dev.local',
    port: 80,
    // https: true,
  },
})
