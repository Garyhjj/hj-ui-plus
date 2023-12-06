import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const build = argv.build || false

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/loopPlay' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ]
    }
  ],
  '/components': [{
    items: [
      ...components
    ]
  }]
}

export default defineConfig({
  title: 'hj-ui-plus',
  description: 'Hj Vue3企业级中后台组件库',
  lang: 'cn-ZH',
  base: build ? '/hj-ui-plus' : '/',
  lastUpdated: true,
  themeConfig: {
    // logo: '/logo.png',
    siteTitle: 'hj-ui-plus',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Garyhjj/hj-ui-plus' }
    ],
    nav,
    sidebar
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
