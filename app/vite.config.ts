import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [react()],
    base: isProduction ? '/wp-content/themes/wp-react-app/app/dist' : '/'
  }
})


