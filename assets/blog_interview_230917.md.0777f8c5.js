import{_ as i,c as a,o as e,V as t}from"./chunks/framework.35c8bad0.js";const P=JSON.parse('{"title":"面试题[Vue生态系统]","description":"","frontmatter":{"title":"面试题[Vue生态系统]","date":"2023-09-17T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230917.md","lastUpdated":1733107800000}'),l={name:"blog/interview/230917.md"},n=t('<h1 id="面试题-vue生态系统" tabindex="-1">面试题[Vue生态系统] <a class="header-anchor" href="#面试题-vue生态系统" aria-label="Permalink to &quot;面试题[Vue生态系统]&quot;">​</a></h1><h2 id="_1-vuex" tabindex="-1">1. Vuex <a class="header-anchor" href="#_1-vuex" aria-label="Permalink to &quot;1. Vuex&quot;">​</a></h2><h3 id="_1-1-mapstate-引起的问题" tabindex="-1">1.1 mapstate 引起的问题 <a class="header-anchor" href="#_1-1-mapstate-引起的问题" aria-label="Permalink to &quot;1.1 mapstate 引起的问题&quot;">​</a></h3><ul><li>vuex 是单向数据流。</li><li>双向绑定的是 data 里面的属性，更改 state，不触发 data 属性的 set，也就不触发依赖更新；computed 里面每次更改值，会重新走一遍依赖收集更新机制，所以没问题。</li><li>computed 就是一个 lazy 的 watch。</li></ul><h2 id="_2-pinia" tabindex="-1">2. Pinia <a class="header-anchor" href="#_2-pinia" aria-label="Permalink to &quot;2. Pinia&quot;">​</a></h2><h3 id="_2-1-pinia-和-vuex-的区别" tabindex="-1">2.1 Pinia 和 Vuex 的区别 <a class="header-anchor" href="#_2-1-pinia-和-vuex-的区别" aria-label="Permalink to &quot;2.1 Pinia 和 Vuex 的区别&quot;">​</a></h3><p>Pinia 和 Vuex 是 Vue 中常用的状态管理工具，但它们有一些明显的区别：</p><ol><li><strong>API设计和使用方式</strong>： <ul><li>Pinia 提供了更加简洁和现代化的 API，使用起来更加符合开发者的直觉，而 Vuex 的 API 相对复杂，需要定义多种概念，比如 state、mutations、actions 等。</li><li>Vuex：：Vuex 的 API 设计是基于 Flux 模式，需要定义 state（状态）、mutations（同步修改状态的方法）、actions（异步操作）和 getters（类似于计算属性）；两者之间的通信需要通过 commit 和 dispatch。</li><li>Pinia：Pinia 则更加灵活，可以直接修改 state，并且 actions 既可以是同步的，也可以是异步的，更符合现代 JavaScript 开发习惯。Pinia 还利用了 Vue3 的组合式 API，使得代码结构更加简洁。</li></ul></li><li><strong>模块化和状态可拆分性</strong>： <ul><li>Vuex 需要手动分模块并合并，而 Pinia 支持更自然的模块化，通过定义和使用不同的 store 实现状态的拆分和复用。</li><li>Vuex：在 Vuex 中，模块划分需要手动编写，store 对象会变得庞大，需要手动引入各个模块并合并。</li><li>Pinia：Pinia 的模块化更加自然，每个 store 相当于是一个模块，可以单独定义并导入到组件中使用，这样的设计符合现代模块化开发的思想。</li></ul></li><li><strong>开发体验</strong>： <ul><li>Pinia 具有更好的 TypeScript 支持，能提供更好的开发体验，尤其是在类型推导和 IDE 提示方面，而 Vuex 虽然也支持 TypeScript，但需要更多的手动配置。</li><li><strong>TypeScript支持</strong>：Pinia 在设计之初就考虑了 TypeScript 的使用，类型推导非常自然；而 Vuex 支持 TypeScript 却需要更多的额外配置。</li><li><strong>调试工具</strong>：两者都支持 Vue DevTools，但由于 Pinia 遵循了 Vue 3 的新设计理念，所以在性能和调试效率上带来了优化。</li></ul></li><li><strong>插件生态</strong>：目前 Pinia 的插件生态还不如 Vuex 丰富。不过 Pinia 是 Vue 官方团队推荐的新一代状态管理工具，社区支持度和生态逐渐提升。</li></ol>',8),o=[n];function r(s,u,c,p,_,d){return e(),a("div",null,o)}const x=i(l,[["render",r]]);export{P as __pageData,x as default};