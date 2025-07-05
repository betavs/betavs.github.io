import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from '@vuepress/theme-default'
import { resolve } from 'node:path'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',

  title: 'betavs',

  dest: resolve(__dirname, '../../dist'),

  public: resolve(__dirname, '../assets'),

  head: [],

  theme: defaultTheme({
    logo: '/favicon.ico',

    repo: 'betavs',

    navbar: [
      {
        text: 'Home',
        link: '/',
        ariaLabel: 'Home',
        exact: true
      },
      {
        text: 'ClashNode',
        link: '/clash-node/',
        ariaLabel: 'ClashNode',
        exact: true
      },
      {
        text: 'Contributions',
        link: '/contributions/',
        ariaLabel: 'Contributions',
        exact: true
      }
    ],

    editLink: false,

    lastUpdated: false,

    contributors: false,

    themePlugins: {
      mediumZoom: false
    }
  }),

  alias: {
    '@theme/VPToggleColorModeButton.vue': resolve(
      __dirname,
      './layouts/theme-mode.vue'
    )
  },

  templateDev: resolve(__dirname, './templates/dev.html'),

  templateBuild: resolve(__dirname, './templates/build.html'),

  plugins: [
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, './components')
    })
  ],

  bundler: viteBundler({})
})
