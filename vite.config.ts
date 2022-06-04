import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import svgComponent from './plugins/svg-component'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    cssTarget: 'chrome61',

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'reference-row': path.resolve(__dirname, 'reference-row.html'),
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

  server: {
    port: 5000,
  },

  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }],
  },

  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),

    svgComponent(),
  ],
})
