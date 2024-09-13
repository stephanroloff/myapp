import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test:{
      globals: true,
      environment: "jsdom",
      setupFiles: './src/__tests__/setup.ts'
    },
    base: isProduction ? '/wp-content/themes/wp-react-app/app/dist' : '/'
  }
})







