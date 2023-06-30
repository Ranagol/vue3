import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {

    /**
     * Here we define to which dir points the @ in the import statement. @ means: /src. We can
     * add our different, individual aliases if we want to.
     */
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
