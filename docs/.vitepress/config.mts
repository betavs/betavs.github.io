import { type ConfigEnv, defineConfig, loadEnv } from 'vitepress'

import assets from './plugins/assets'

export default (config: ConfigEnv) => {
  const env = loadEnv(config.mode, process.cwd())

  const { VITE_ASSETS_PROXY } = env

  return defineConfig({
    title: 'My Awesome Project',

    description: 'betavs Awesome Project',

    head: [
      ['meta', { name: 'keywords', content: 'betavs, github' }],
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
      logo: 'https://avatars.githubusercontent.com/betavs',

      siteTitle: 'betavs',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'ClashNode', link: '/clash-node/' },
        { text: 'Contributions', link: '/contributions/' }
      ],

      socialLinks: [{ icon: 'github', link: 'https://github.com/betavs' }]
    },

    sitemap: {
      hostname: 'https://betavs.cn'
    },

    vite: {
      plugins: [
        assets(VITE_ASSETS_PROXY, [
          'https://github-readme-stats-one-bice.vercel.app',
          'https://github-readme-stats.vercel.app',
          'https://raw.githubusercontent.com'
        ])
      ]
    }
  })
}
