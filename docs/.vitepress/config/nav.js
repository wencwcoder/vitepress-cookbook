module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Start', link: '/start' },
  // {
  //   text: 'Summary',
  //   items: [
  //     { text: 'Frontend', link: '/frontend/' },
  //     { text: 'Backend', link: '/backend/' },
  //     { text: 'Blog', link: '/blog/' },
  //     { text: 'Essays', link: '/essays/' },
  //   ]
  // },
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
]
