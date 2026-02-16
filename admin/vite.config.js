import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',    //bg-green-500
        secondary: '#BBF7D0',  //bg-green-200
        accent: '#DCFCE7',  //bg-green-100
      },
    },
  },
  server: {port: 5174},
})
