import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` with the name of your GitHub repository
export default defineConfig({
  base: '/shoppyglobe/',
  plugins: [react()],
})
