import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173, // Usa el puerto dinámico de Railway
    host: "0.0.0.0", // Permitir conexiones externas
    allowedHosts: ["asistente.artictempest.es", "dashboard-bot-production.up.railway.app"] // Agrega los dominios permitidos
  }
})
