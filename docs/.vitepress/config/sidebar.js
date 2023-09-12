module.exports = {
  '/frontend': [
    {
      text: 'Frontend',
      items: [
        { text: 'Summary', link: '/frontend/' },
        {
          text: 'Placeholder',
          collapsed: true,
          items: [
            { text: 'One', link: '/frontend/one' },
            { text: 'Two', link: '/frontend/two' },
          ]
        }
      ]
    }
  ],
  '/backend': [
    {
      text: 'Backend',
      items: [
        { text: 'Summary', link: '/backend/' },
        {
          text: 'Placeholder',
          collapsed: true,
          items: [
            { text: 'One', link: '/backend/one' },
            { text: 'Two', link: '/backend/two' },
          ]
        }
      ]
    }
  ],
  '/blog': [
    {
      text: 'Blog',
      items: [
        { text: 'Summary', link: '/blog/' },
        { text: 'Link', link: '/blog/link.md' },
        { text: '前端开发环境搭建', link: '/blog/frontend-environment-setup.md' },
        {
          text: '简历系列',
          collapsed: true,
          items: [
            
          ]
        },
        {
          text: '面试系列',
          collapsed: true,
          items: [
            { text: '面经[主观问题]', link: '/blog/interview/230707.md' },
            { text: '面经[离职原因]', link: '/blog/interview/230515.md' },
            { text: '面试题[HTML5_CSS3]', link: '/blog/interview/230523.md' },
            { text: '面试题[JavaScript]', link: '/blog/interview/230524.md' },
            { text: '面试题[TypeScript]', link: '/blog/interview/230531.md' },
            { text: '面试题[浏览器]', link: '/blog/interview/230525.md' },
            { text: '面试题[HTTP]', link: '/blog/interview/230526.md' },
            { text: '面试题[Vue]', link: '/blog/interview/230527.md' },
            { text: '面试题[React]', link: '/blog/interview/230606.md' },
            { text: '面试题[性能优化]', link: '/blog/interview/230607.md' },
            { text: '面试题[前端工程化]', link: '/blog/interview/230601.md' },
            { text: '面试题[前端项目相关]', link: '/blog/interview/230602.md' },
            { text: '面试题[计算机网络]', link: '/blog/interview/230618.md' }
          ]
        },
        {
          text: '手写系列',
          collapsed: true,
          items: [
            { text: '手写题[JavaScript]', link: '/blog/handwritten/230608.md' },
            { text: '手写题[算法题]', link: '/blog/handwritten/230615.md' }
          ]
        }
      ]
    }
  ],
  '/note': [
    {
      text: 'Note',
      items: [
        { text: 'Summary', link: '/note/' },
        {
          text: 'Placeholder',
          collapsed: true,
          items: [
            { text: 'One', link: '/note/one' },
            { text: 'Two', link: '/note/two' },
          ]
        }
      ]
    }
  ]
}
