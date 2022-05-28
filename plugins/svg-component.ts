import { Plugin } from 'vite'
import { extname } from 'path'
import { promises as fs } from 'fs'
import { compileTemplate } from '@vue/compiler-sfc'

export default (): Plugin => {
  return {
    name: 'vconsole',
    enforce: 'pre',

    async load(id) {
      const [path, parameter] = id.split('?')

      if (!extname(path).startsWith('.svg') || parameter !== 'component') {
        return null
      }

      const svg = await fs.readFile(path, 'utf-8')

      const { code } = compileTemplate({
        id: JSON.stringify(id),
        source: svg,
        filename: path,
        transformAssetUrls: false,
      })

      return `${code}\nexport default render`
    },
  }
}
