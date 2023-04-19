---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: My Blog
  text: A VitePress Site
  tagline: My great project tagline
  # image:
  #   src: /imgs/avatar/avatar.png
  #   alt: avatar
  actions:
    - theme: brand
      text: Start
      link: /start
    - theme: alt
      text: View on GitHub
      link: https://github.com/wencwcoder

features:
  - icon:
      src: /imgs/avatar/1.jpg
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon:
      dark: /imgs/avatar/2.jpg
      light: /imgs/avatar/2.jpg
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: https://github.com/wencwcoder
    linkText: GitHub
---

<style>
.VPFeature .VPImage {
  border-radius: 6px; 
}
</style>