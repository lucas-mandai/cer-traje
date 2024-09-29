import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite que o servidor esteja acessível via IP
    port: 5173, // porta que você quer usar
  },
})
