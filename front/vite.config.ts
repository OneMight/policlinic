import { defineConfig } from 'vite'
import {resolve} from 'path'
 import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})
