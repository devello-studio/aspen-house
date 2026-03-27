import { defineConfig, type Plugin } from 'vite'
import path from 'path'

const apiProxyTarget = process.env.API_PROXY_TARGET || 'http://127.0.0.1:3000'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make resolves figma:asset/*; outside that environment, use a shared placeholder. */
function figmaAssetFallback(): Plugin {
  const virtualId = '\0figma-asset-placeholder'
  return {
    name: 'figma-asset-fallback',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return virtualId
      }
    },
    load(id) {
      if (id === virtualId) {
        return `export default ${JSON.stringify('/placeholder.svg')}`
      }
    },
  }
}

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: apiProxyTarget,
        changeOrigin: true,
      },
    },
  },
  preview: {
    proxy: {
      '/api': {
        target: apiProxyTarget,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetFallback(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
