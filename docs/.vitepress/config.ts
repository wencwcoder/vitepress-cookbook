import { defineConfig } from 'vitepress'
const svg = require('../src/public/svgs/index.ts')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  // titleTemplate: 'Custom Suffix',
  description: "A VitePress Site",
  head: [
    [
      'link',
      {
        rel: "icon",
        href: "/imgs/favicon.ico"
      }
    ]
  ],
  // base: '/repo/', // https://foo.github.io/repo/
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start' },
      {
        text: 'Summary',
        items: [
          { 
            text: 'Guide',
            items: [
              { text: 'Index', link: '/guide/' },
              { text: 'One', link: '/guide/one' },
              { text: 'Two', link: '/guide/two' }
            ]
          },
          { 
            text: 'Config',
            items: [
              { text: 'Index', link: '/config/' },
              { text: 'Three', link: '/config/three' },
              { text: 'Four', link: '/config/four' }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' },
            { 
              text: 'Examples',
              collapsed: true,
              items: [
                { text: 'One', link: '/guide/one' },
                { text: 'Two', link: '/guide/two' }
              ]
            }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },
    aside: true,
    outline: [2,4],
    outlineTitle: 'On this page',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wencwcoder' },
      { icon: { svg: svg.juejin }, link: 'https://juejin.cn/user/3878732754590797/activities' }
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
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
    // langMenuLabel: 'Change language'
  }
})
