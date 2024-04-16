import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setupTests.js"],
    coverage: {
      reporter: ['html', 'json'],
      include: ['client/src/components/**/*.{js,jsx}', 'client/src/App.jsx', 'client/src/main.jsx', 'client/src/sum.js']
    },
  }
})
