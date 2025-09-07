import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This line adds the necessary plugin for React to work with Vite.
  plugins: [react()],
  
  // We added this section to make the browser open automatically on startup.
  server: {
    open: true,
  },
})