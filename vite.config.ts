import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function computeBase(): string {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  if (!repo || repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? computeBase() : '/',
  plugins: [vue(), tailwindcss()],
})