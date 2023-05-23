import { defineConfig } from 'vitepress'
const nav = require('./config/nav.js')
const sidebar = require('./config/sidebar.js')
const svg = require('../src/public/svgs/index.js')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  // titleTemplate: 'Custom Suffix',
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/vitepress-cookbook/imgs/favicon.ico' }],
    ['script', { language: 'javascript', type: 'text/javascript', src: '/vitepress-cookbook/js/BaiduStatistics.js'}]
  ],
  base: '/vitepress-cookbook/', // https://foo.github.io/repo/
  cleanUrls: true,
  srcDir: './src',
  outDir: './.vitepress/dist',  // '../dist'
  // cacheDir: './.vitepress/cache',
  lastUpdated: true,
  // Markdown
  markdown: {
    theme: 'material-theme-palenight', // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    lineNumbers: true
  },
  // Vite
  // vite: {
  //   // Vite config options
  // },
  // Vue
  // vue: {
  //   // @vitejs/plugin-vue options
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/favicon.ico', // in nav bar
    siteTitle: 'Hello World', // in nav bar
    nav: nav,
    sidebar: sidebar,
    aside: true,
    outline: [2,4],
    outlineTitle: 'On This Page',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wencwcoder' },
      { icon: { svg: svg.juejin }, link: 'https://juejin.cn/user/3878732754590797/activities' }
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2023-present Wen'
    // },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // }
    lastUpdatedText: 'Last updated',
    // algolia: AlgoliaSearch,
    // carbonAds: CarbonAdsOptions,
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    darkModeSwitchLabel: 'Appearance', // only displayed in the mobile view
    sidebarMenuLabel: 'Menu', // only displayed in the mobile view
    returnToTopLabel: 'Return to top', // only displayed in the mobile view
    // langMenuLabel: 'Change language',
    search: {
      provider: 'local'
    }
  }
})
