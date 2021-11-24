import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), mkcert()],
    server: {
        host: 'ai-pharma-dev.local',
        port: 443,
        https: true,
    },
    base: '/user/',
})
