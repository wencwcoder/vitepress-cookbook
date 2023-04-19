module.exports = {
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
}
