import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 8080, // Usa el puerto de Railway o 8080 como fallback
    host: "0.0.0.0" // Permite conexiones externas
  }
})
