import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/ReactCI/', // 👈 Add this line for GitHub Pages (must match repo name)
  plugins: [react()],
})
