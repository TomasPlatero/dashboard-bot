import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr({exportAsDefault: true})],
  server: {
    port: process.env.PORT || 8080, // Usa el puerto dinámico de Railway
    host: "0.0.0.0", // Permitir conexiones externas
    allowedHosts: ["asistente.artictempest.es", "dashboard-bot-production.up.railway.app"] // Agrega los dominios permitidos
  }
})
