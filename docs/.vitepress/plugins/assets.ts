import { type Plugin } from 'vitepress'

const assets = (proxy: string = '', source: string[] = []) => {
  return <Plugin>{
    name: 'assets',

    apply: 'build',

    enforce: 'post',

    transform(code: string, id: string) {
      if (id.includes('node_modules')) return null

      let modified = false

      for (const item of source) {
        if (code.includes(item)) {
          code = code.replaceAll(item, `${proxy}${item}`)

          modified = true
        }
      }

      return modified ? code : null
    }
  }
}

export default assets
