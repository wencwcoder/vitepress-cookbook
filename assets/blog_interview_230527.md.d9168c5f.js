import{_ as s,c as a,o as e,V as n}from"./chunks/framework.35c8bad0.js";const h=JSON.parse('{"title":"面试题[Vue]","description":"","frontmatter":{"title":"面试题[Vue]","date":"2023-05-27T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230527.md","lastUpdated":1733994141000}'),l={name:"blog/interview/230527.md"},o=n(`<h1 id="面试题-vue" tabindex="-1">面试题[Vue] <a class="header-anchor" href="#面试题-vue" aria-label="Permalink to &quot;面试题[Vue]&quot;">​</a></h1><h2 id="_1-vue2-相关" tabindex="-1">1. Vue2 相关 <a class="header-anchor" href="#_1-vue2-相关" aria-label="Permalink to &quot;1. Vue2 相关&quot;">​</a></h2><h3 id="_1-1-data-属性被设计为函数形式而不是对象形式" tabindex="-1">1.1 data 属性被设计为函数形式而不是对象形式 <a class="header-anchor" href="#_1-1-data-属性被设计为函数形式而不是对象形式" aria-label="Permalink to &quot;1.1 data 属性被设计为函数形式而不是对象形式&quot;">​</a></h3><p>在 Vue.js 中，<code>data</code> 属性被设计为函数形式而不是对象形式，主要是出于组件复用和独立性的考虑。以下是几个关键原因：</p><ol><li><strong>组件复用</strong>： 当 Vue 组件被复用时（例如，在列表渲染或条件渲染中多次使用相同的组件），每个组件实例都应该有自己的状态（数据）。如果 <code>data</code> 是一个对象，那么所有的组件实例将共享同一个对象，这会导致它们的状态相互干扰。通过将 <code>data</code> 定义为函数，每次创建组件实例时都会调用该函数，并返回一个新的对象实例，从而确保每个组件实例都有自己的独立状态。</li><li><strong>独立性</strong>： 组件应该尽可能地独立和可重用。当 <code>data</code> 是一个函数时，每个组件实例都可以在其自己的作用域内维护自己的状态，而不会受到其他组件实例的影响。这有助于保持组件的独立性和可测试性。</li><li><strong>Vue 实例</strong>： 在 Vue 的内部实现中，每个 Vue 实例（包括组件）都有一个与之关联的响应式数据对象。当 <code>data</code> 是一个函数时，Vue 可以在创建实例时调用该函数来获取初始数据，并将其转换为响应式对象。这确保了当组件的数据发生变化时，视图也会相应地更新。</li><li><strong>避免冲突</strong>： 如果多个组件使用相同的对象作为它们的 <code>data</code> 属性，并且这些组件被同时渲染，那么它们可能会意外地修改彼此的数据，导致不可预测的行为和潜在的错误。通过将 <code>data</code> 定义为函数，每个组件实例都有自己的独立数据对象，从而避免了这种潜在的冲突。</li></ol><p>总之，将 Vue 组件的 <code>data</code> 属性定义为函数形式是为了确保组件的独立性和可重用性，以及避免在组件实例之间共享状态时可能出现的问题。</p><h3 id="_1-2-计算属性、方法" tabindex="-1">1.2 计算属性、方法 <a class="header-anchor" href="#_1-2-计算属性、方法" aria-label="Permalink to &quot;1.2 计算属性、方法&quot;">​</a></h3><h3 id="_1-3-侦听器" tabindex="-1">1.3 侦听器 <a class="header-anchor" href="#_1-3-侦听器" aria-label="Permalink to &quot;1.3 侦听器&quot;">​</a></h3><h3 id="_1-4-生命周期钩子" tabindex="-1">1.4 生命周期钩子 <a class="header-anchor" href="#_1-4-生命周期钩子" aria-label="Permalink to &quot;1.4 生命周期钩子&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fessentials%2Flifecycle.html" target="_blank" rel="noreferrer">Vue 的生命周期</a>可以分为8个阶段：创建阶段、挂载阶段、更新阶段和销毁阶段，每个阶段都有对应的钩子函数。具体如下：</p><h3 id="_1-5-组件之间的传值方式" tabindex="-1">1.5 组件之间的传值方式 <a class="header-anchor" href="#_1-5-组件之间的传值方式" aria-label="Permalink to &quot;1.5 组件之间的传值方式&quot;">​</a></h3><h3 id="_1-6-v-show-和-v-if-的区别" tabindex="-1">1.6 v-show 和 v-if 的区别 <a class="header-anchor" href="#_1-6-v-show-和-v-if-的区别" aria-label="Permalink to &quot;1.6 v-show 和 v-if 的区别&quot;">​</a></h3><p>v-show 和 v-if 是 Vue.js 中两种常用的指令，都可以用于控制元素的显示和隐藏，但它们有本质上的区别。</p><ol><li>基本区别 <ul><li>v-show 是通过控制元素的 CSS display 属性来显示或隐藏元素。无论条件是否为真，元素都会被渲染到 DOM 中，只是通过设置 CSS 样式来控制它的可见性。</li><li>v-if 则是通过条件判断来决定是否渲染元素。如果条件为假，元素根本不会被渲染到 DOM 中。</li></ul></li><li>使用场景 <ul><li>v-show 适合用于需要频繁切换显示/隐藏状态的场景。因为它只是在现有的 DOM 元素上进行 CSS 切换，性能开销较小。</li><li>v-if 适合用于在条件变化不太频繁的情况下使用，因为它每次重新渲染时都会进行完整的 DOM 操作，性能开销较大。</li></ul></li><li>进一步探讨它们的一些细节和实际应用中的注意事项 <ol><li>性能： <ul><li>v-show 带来的性能开销主要体现在第一次渲染时。因为即便元素隐藏了，它还是会占据 DOM 的空间和资源。但是，<strong>后续的切换开销极小</strong>。</li><li>v-if 每次状态切换都伴随着<strong>元素的创建和销毁</strong>，当条件频繁变化时，这样的操作会带来一定的性能开销。因此，在频繁切换时，不推荐使用 v-if。</li></ul></li><li>初始渲染： <ul><li>v-show 在初次渲染时无论条件是否满足<strong>都会将元素生成到 DOM 中</strong>，然后根据条件通过修改 display 属性来决定显示/隐藏。</li><li>v-if 在初次渲染时会根据条件决定是否创建元素，条件为假时，元素不会生成到 DOM 中。</li></ul></li><li>使用搭配： <ul><li>针对某些场景，可以考虑 v-show 和 v-if 的结合使用。例如，外层使用 v-if 进行一次性判断是否渲染内容，因为 v-if 可以确保根本不生成不需要的 DOM 元素；内层使用 v-show 进行频繁的显示隐藏切换。</li></ul></li><li>过渡效果： <ul><li>在使用过渡效果时，v-show 和 v-if 的行为也有所不同。v-show 会触发 CSS 过渡效果（transition），而 v-if 需要配合 Vue 的 transition 组件使用。</li></ul></li><li>开发指南： <ul><li>当你需要确保某个 DOM 元素在结构上存在，但在某些情况下需要隐藏它，建议使用 v-show。</li><li>当你确定在某些条件下完全不需要某个 DOM 元素时，使用 v-if 会更适合。</li></ul></li></ol></li></ol><h3 id="_1-7-v-model" tabindex="-1">1.7 v-model <a class="header-anchor" href="#_1-7-v-model" aria-label="Permalink to &quot;1.7 v-model&quot;">​</a></h3><p>在 Vue 中，v-model 指令可以用于<strong>双向数据绑定</strong>。当我们在父组件中使用 v-model 绑定一个属性时，Vue 会将该属性及其更新方法自动传递给子组件。</p><p>具体来说，v-model 将父组件中的属性和更新方法分别绑定到子组件的 <code>value</code> 属性和 <code>input</code> 事件上。当子组件修改了 <code>value</code> 的值时，会触发 <code>input</code> 事件，并将新的值通过该事件传递给父组件，从而实现了双向数据绑定。</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- FatherComponent --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ChildComponent</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ChildComponent</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Parent Component: {{ data }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ChildComponent --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$emit(&#39;input&#39;, $event.target.value)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_1-8-nexttick" tabindex="-1">1.8 nextTick <a class="header-anchor" href="#_1-8-nexttick" aria-label="Permalink to &quot;1.8 nextTick&quot;">​</a></h3><h3 id="_1-9-scoped" tabindex="-1">1.9 scoped <a class="header-anchor" href="#_1-9-scoped" aria-label="Permalink to &quot;1.9 scoped&quot;">​</a></h3><p>在 Vue 的单文件组件中，<code>scoped</code> 属性用于将样式限定在当前组件模块中，使其仅对当前组件起作用。它是一种 CSS 模块化的技术，有助于避免样式的冲突和影响范围的扩散。</p><p>具体而言，<code>scoped</code> 属性会给组件的 <code>&lt;style&gt;</code> 标签添加一个特殊的属性选择器，以确保只有当前组件的元素受到样式的影响。这样，组件中定义的样式规则仅在组件的范围内生效，不会影响到其他组件或全局样式。</p><h3 id="_1-10-key" tabindex="-1">1.10 key <a class="header-anchor" href="#_1-10-key" aria-label="Permalink to &quot;1.10 key&quot;">​</a></h3><h3 id="_1-11-keep-alive" tabindex="-1">1.11 keep-alive <a class="header-anchor" href="#_1-11-keep-alive" aria-label="Permalink to &quot;1.11 keep-alive&quot;">​</a></h3><h3 id="_1-12-slot-原理" tabindex="-1">1.12 slot 原理 <a class="header-anchor" href="#_1-12-slot-原理" aria-label="Permalink to &quot;1.12 slot 原理&quot;">​</a></h3><h3 id="_1-13-响应式数组有哪些限制-如何解决这些限制" tabindex="-1">1.13 响应式数组有哪些限制？如何解决这些限制？ <a class="header-anchor" href="#_1-13-响应式数组有哪些限制-如何解决这些限制" aria-label="Permalink to &quot;1.13 响应式数组有哪些限制？如何解决这些限制？&quot;">​</a></h3><h3 id="_1-14-复用已经封装好的组件时-在不修改原组件的前提下-如何扩展功能" tabindex="-1">1.14 复用已经封装好的组件时，在不修改原组件的前提下，如何扩展功能 <a class="header-anchor" href="#_1-14-复用已经封装好的组件时-在不修改原组件的前提下-如何扩展功能" aria-label="Permalink to &quot;1.14 复用已经封装好的组件时，在不修改原组件的前提下，如何扩展功能&quot;">​</a></h3><p>在Vue中，可以通过使用混入（Mixin）来扩展已封装好的组件的功能，而无需修改原组件的代码。混入是一种可重用的Vue组件选项对象，可以包含组件的各种选项，如数据、计算属性、方法等。</p><p>通过混入，你可以在不修改原组件的情况下，重复使用相同的功能扩展逻辑，并在不同的组件中进行组合和定制化。但要注意，混入可能会引起命名冲突或逻辑复杂性，因此请谨慎使用，并确保正确处理混入的数据和方法与原组件之间的交互关系。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. 创建一个混入对象，其中包含要扩展的功能：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mixin.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myMixin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This is additional data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">additionalMethod</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This is an additional method</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> myMixin</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 2. 在需要扩展功能的组件中导入并使用混入对象：</span></span>
<span class="line"><span style="color:#A6ACCD;">// MyComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Original component template --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> myMixin </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./mixin.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mixins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [myMixin]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 原组件的选项继续定义...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-15-计算属性的函数名和-data-中的属性可以同名吗" tabindex="-1">1.15 计算属性的函数名和 data 中的属性可以同名吗？ <a class="header-anchor" href="#_1-15-计算属性的函数名和-data-中的属性可以同名吗" aria-label="Permalink to &quot;1.15 计算属性的函数名和 data 中的属性可以同名吗？&quot;">​</a></h3><p>不可以。因为 Vue 会将 <code>data</code> 中的属性和计算属性都挂载到 Vue 实例上，如果它们同名，则会发生命名冲突，导致实例中的属性被覆盖，从而引发不可预知的错误。</p><ol><li><strong>命名冲突的本质：</strong> 在 Vue 中，<code>data</code> 和计算属性（computed）最终都会<strong>作为 Vue 实例的一个属性存在</strong>。如果我们在 <code>data</code> 中定义了一个属性 <code>foo</code>，同时又在 <code>computed</code> 中定义了一个名为 <code>foo</code> 的计算属性，二者会产生命名冲突，Vue 会警告你存在重复定义。Vue 在初始化时会按照一定的顺序（如<code>Props、methods、data、computed、watch</code>）将这些属性挂载到 Vue 实例上，后挂载的属性会覆盖先挂载的同名属性。</li><li><strong>计算属性的优先级：</strong> <strong><code>data</code> 的优先级高于计算属性</strong>。如果在 <code>data</code> 和计算属性中存在相同的属性，那么在模板中使用这些属性时，会优先使用 <code>data</code> 中的数据，因为 <code>data</code> 是直接存储数据的，而计算属性是基于 <code>data</code> 或其他属性的变化进行计算的‌。</li><li><strong>避免命名冲突的最佳实践：</strong> 为了保持代码的清晰和简洁，建议在项目实施时遵循以下几点： <ul><li><strong>命名规范：</strong> 确保 <code>data</code> 和计算属性有不同的命名，避免命名冲突。</li><li><strong>模块化管理：</strong> 将各自逻辑进行分模块管理，提高代码的可读性和可维护性。</li><li><strong>严格代码审查：</strong> 在代码审查阶段注意这些潜在问题，及时纠正。</li></ul></li><li><strong>命名冲突如何提醒：</strong> 在运行环境下，Vue 通常会在控制台输出警告信息，来提醒开发者存在属性命名冲突，帮助快速定位和修复问题。</li><li><strong>其它Vue中的相关特性：</strong><ul><li><strong>methods：</strong> 与计算属性类似，<code>methods</code> 中的方法也会被挂载到 Vue 实例上，同样需要避免与 <code>data</code> 和计算属性同名。</li><li><strong>Watchers：</strong> 虽然数据监听器（watchers）与 <code>data</code> 和计算属性相关，但它们不会直接参与命名冲突，因为 <code>watchers</code> 本身不挂载属性名到 Vue 实例上。</li></ul></li></ol><h2 id="_2-vue3-相关" tabindex="-1">2. Vue3 相关 <a class="header-anchor" href="#_2-vue3-相关" aria-label="Permalink to &quot;2. Vue3 相关&quot;">​</a></h2><h3 id="_2-1-teleport" tabindex="-1">2.1 Teleport <a class="header-anchor" href="#_2-1-teleport" aria-label="Permalink to &quot;2.1 Teleport&quot;">​</a></h3><h3 id="_2-2-suspense" tabindex="-1">2.2 Suspense <a class="header-anchor" href="#_2-2-suspense" aria-label="Permalink to &quot;2.2 Suspense&quot;">​</a></h3><h3 id="_2-3-fragment" tabindex="-1">2.3 Fragment <a class="header-anchor" href="#_2-3-fragment" aria-label="Permalink to &quot;2.3 Fragment&quot;">​</a></h3><h3 id="_2-4-vue3-中的动画系统有哪些改进" tabindex="-1">2.4 Vue3 中的动画系统有哪些改进 <a class="header-anchor" href="#_2-4-vue3-中的动画系统有哪些改进" aria-label="Permalink to &quot;2.4 Vue3 中的动画系统有哪些改进&quot;">​</a></h3><h3 id="_2-5-ref-和-reactive-的区别" tabindex="-1">2.5 ref 和 reactive 的区别 <a class="header-anchor" href="#_2-5-ref-和-reactive-的区别" aria-label="Permalink to &quot;2.5 ref 和 reactive 的区别&quot;">​</a></h3><h3 id="_2-6-setup-执行背后发生了什么" tabindex="-1">2.6 setup 执行背后发生了什么 <a class="header-anchor" href="#_2-6-setup-执行背后发生了什么" aria-label="Permalink to &quot;2.6 setup 执行背后发生了什么&quot;">​</a></h3><h3 id="_2-7-setup-为什么可以返回一个-render-函数" tabindex="-1">2.7 setup 为什么可以返回一个 render 函数 <a class="header-anchor" href="#_2-7-setup-为什么可以返回一个-render-函数" aria-label="Permalink to &quot;2.7 setup 为什么可以返回一个 render 函数&quot;">​</a></h3><h2 id="_3-vue-拓展知识" tabindex="-1">3. Vue 拓展知识 <a class="header-anchor" href="#_3-vue-拓展知识" aria-label="Permalink to &quot;3. Vue 拓展知识&quot;">​</a></h2><h3 id="_3-1-vue3-和-vue2-的区别" tabindex="-1">3.1 Vue3 和 Vue2 的区别 <a class="header-anchor" href="#_3-1-vue3-和-vue2-的区别" aria-label="Permalink to &quot;3.1 Vue3 和 Vue2 的区别&quot;">​</a></h3><ol><li><strong>性能提升</strong>： <ul><li><strong>Vue3</strong>：通过改进虚拟 DOM 的算法和底层架构，实现了更快的渲染速度和更低的内存使用率。具体来说，Vue3 的打包大小减少了约41%，初次渲染速度提升了约55%，更新速度快了约133%，内存使用减少了约54%。</li><li>Diff 算法优化、静态标记提升、事件监听缓存、SSR 优化。</li></ul></li><li><strong>响应式系统</strong>： <ul><li><strong>Vue3</strong>：使用了基于 Proxy 的响应式系统，可以监听对象的整个属性，包括新增和删除的属性。同时，Vue3 的响应式系统还可以检测数组内部数据的变化。Proxy 可以提供更加细粒度和高效的变化侦测，这使得 Vue 3 在处理响应式数据时更快且更可靠。</li><li><strong>Vue2</strong>：使用的是基于 Object.defineProperty 的响应式系统，只能监听某个属性的变化，对于数组内部数据的变化需要特殊处理。</li></ul></li><li><strong>API 与代码组织</strong>： <ul><li><strong>Vue3</strong>：引入了<strong>Composition API</strong>，允许开发者使用函数来组织组件逻辑，使得代码更加简洁和可复用。所有 API 都是 import 引入的，对 <strong>Tree- shaking</strong> 很友好。此外，Vue3 还支持 <strong>TypeScript</strong>，提供了更好的类型检查和错误提示。</li><li><strong>Vue2</strong>：使用的是 Options API，将组件的不同部分（如 data、computed、methods 等）分散在选项中，可能导致代码逻辑不够清晰。Vue2 对 TypeScript 的支持也相对较弱。</li></ul></li><li><strong>生命周期钩子</strong>： <ul><li><strong>Vue3</strong>：生命周期钩子函数有所变化，例如 <code>beforeCreate</code>和<code>created</code> 被 <code>setup()</code> 替代，而 <code>beforeMount</code>、<code>mounted</code> 等钩子函数前需要加上 <code>on</code> 前缀（如 <code>onMounted</code>）。此外，Vue3 还增加了 <code>onRenderTracked</code> 和 <code>onRenderTriggered</code> 等新的生命周期钩子。</li><li><strong>Vue2</strong>：生命周期钩子函数包括 <code>beforeCreate</code>、<code>created</code>、<code>beforeMount</code>、<code>mounted </code>等，与 Vue3 有所不同。</li></ul></li><li><strong>其他特性与变化</strong>： <ul><li>新的组件：Fragment、Teleport、Suspense。Fragment: Vue 3 组件不再要求有一个唯一的根节点，清除了很多无用的占位 div。Teleport: 允许组件渲染在别的元素内，主要开发弹窗组件的时候特别有用。Suspense: 异步组件，更方便开发有异步请求的组件。</li><li>自定义渲染器：Vue 3 利用拆包，使用最近流行的 monorepo 管理方式，<strong>响应式、编译和运行时</strong>全部独立。</li></ul></li></ol><h3 id="_3-2-双向绑定和响应式的关系" tabindex="-1">3.2 双向绑定和响应式的关系 <a class="header-anchor" href="#_3-2-双向绑定和响应式的关系" aria-label="Permalink to &quot;3.2 双向绑定和响应式的关系&quot;">​</a></h3><p>双向绑定和响应式是相关但不完全相同的概念。</p><ul><li><strong>响应式 (Reactivity)：</strong> 指的是数据的变化能够自动地触发相关依赖的更新，从而保持视图和数据的同步。在 Vue.js 中，响应式系统负责追踪数据的变化，并在数据变化时更新相关的视图，使得视图能够反映出最新的数据状态。响应式系统可以通过监听数据的变化来实现，例如使用 Object.defineProperty() 或者 Proxy。【通过 <strong>数据劫持</strong> 和 <strong>发布订阅模式</strong> 实现】</li><li><strong>双向绑定 (Two-way Binding)：</strong> 是一种机制（是一种使视图和模型之间保持同步的机制），使得视图和模型之间的变化能够相互影响。当模型数据发生变化时，视图会自动更新以反映这些变化；同时，当视图中的表单元素值发生变化时，模型数据也会自动更新。在 Vue.js 中，双向绑定是通过在模板中使用 v-model 指令来实现的，它能够将表单元素和数据模型之间建立双向关联。</li></ul><p>虽然双向绑定通常依赖于响应式系统来实现，但它们并不是完全相同的概念。响应式系统可以单独存在，用于追踪数据的变化并更新相关的视图，而双向绑定则是一种特定的应用场景，旨在实现视图和模型之间的双向同步。</p><h3 id="_3-3-composition-api-和-options-api-的区别" tabindex="-1">3.3 Composition API 和 Options API 的区别 <a class="header-anchor" href="#_3-3-composition-api-和-options-api-的区别" aria-label="Permalink to &quot;3.3 Composition API 和 Options API 的区别&quot;">​</a></h3><h3 id="_3-4-proxy-和-object-defineproperty-的区别" tabindex="-1">3.4 Proxy 和 Object.defineProperty 的区别 <a class="header-anchor" href="#_3-4-proxy-和-object-defineproperty-的区别" aria-label="Permalink to &quot;3.4 Proxy 和 Object.defineProperty 的区别&quot;">​</a></h3><p>在Vue中，<code>Proxy</code>和<code>Object.defineProperty</code>都用于实现数据的响应式系统，但它们在Vue 2.x和Vue 3.x版本中的应用和区别显著。</p><ol><li>Vue 2.x中的<code>Object.defineProperty</code><ol><li>工作方式： <ul><li>Vue 2.x使用<code>Object.defineProperty</code>在对象的属性上设置getter和setter。</li><li>当这些属性被访问或修改时，getter和setter会被触发，从而执行相应的逻辑，如更新视图。</li></ul></li><li>限制： <ul><li><code>Object.defineProperty</code><strong>只能监听对象的属性，不能监听数组的变化</strong>（尽管Vue通过重写数组方法实现了对数组变化的监听）。</li><li><strong>对于新添加的属性，<code>Object.defineProperty</code>无法自动监听</strong>，需要手动调用<code>Vue.set</code>或使用<code>vm.$set</code>来确保新属性也是响应式的。</li><li>在深度嵌套的对象中，<code>Object.defineProperty</code>需要递归地应用，这可能会带来性能问题。</li></ul></li><li>优势： <ul><li>相对于 <code>Proxy</code>，<code>Object.defineProperty</code> 通常在性能上更优，因为它直接在对象上定义属性，不需要每次操作都经过代理。</li></ul></li></ol></li><li>Vue 3.x中的<code>Proxy</code><ol><li>工作方式： <ul><li>Vue 3.x使用<code>Proxy</code>对象来创建一个代理，从而可以拦截对对象属性的读写操作，<strong>创建对象的代理</strong>。</li><li><code>Proxy</code>提供了多达13种拦截方法，包括<code>get</code>、<code>set</code>、<code>has</code>、<code>deleteProperty</code>等，使得Vue 3.x可以更加灵活地处理对象的操作。</li></ul></li><li>限制： <ul><li>相对于 <code>Object.defineProperty</code>，<code>Proxy</code> 可能会稍微慢一些，因为每次操作都会经过代理处理。</li></ul></li><li>优势： <ul><li><code>Proxy</code>可以监听整个对象或数组，而不仅仅是单个属性。</li><li><code>Proxy</code>可以实时响应对象属性的添加、删除和修改，无需手动调用额外的方法。</li><li><code>Proxy</code>的性能在某些场景下可能更优，特别是对于深度嵌套的对象或数组。</li></ul></li><li>处理方式： <ul><li>Vue 3.x使用<code>Proxy</code>代理对象的第一层，并通过递归地应用<code>reactive</code>方法来处理深度嵌套的对象，以实现深度观测。</li><li>对于数组，Vue 3.x通过重写数组的原型方法来拦截对数组的操作，并触发相应的更新逻辑。</li></ul></li></ol></li><li>总结 <ul><li><strong>灵活性</strong>：<code>Proxy</code>在Vue 3.x中提供了更高的灵活性，可以监听整个对象或数组，并实时响应属性的添加、删除和修改。</li><li><strong>性能</strong>：虽然<code>Proxy</code>在某些场景下可能带来性能上的优势，但具体表现取决于应用的复杂性和使用场景。</li><li><strong>兼容性</strong>：<code>Proxy</code>是ES6引入的特性，因此Vue 3.x需要较新的JavaScript环境支持。而<code>Object.defineProperty</code>则具有更好的兼容性，可以在更广泛的浏览器环境中运行。</li></ul></li></ol><p>在Vue 3.x中，由于<code>Proxy</code>提供了更高的灵活性和更好的性能表现，它成为了Vue实现响应式系统的首选方式。然而，在需要兼容旧版浏览器或特定环境下，Vue 2.x及其使用的<code>Object.defineProperty</code>仍然是一个可行的选择。</p><h3 id="_3-5-vue-中使用了哪几种设计模式" tabindex="-1">3.5 Vue 中使用了哪几种设计模式 <a class="header-anchor" href="#_3-5-vue-中使用了哪几种设计模式" aria-label="Permalink to &quot;3.5 Vue 中使用了哪几种设计模式&quot;">​</a></h3><h3 id="_3-6-vue-中的性能优化有哪些常见的技巧" tabindex="-1">3.6 Vue 中的性能优化有哪些常见的技巧 <a class="header-anchor" href="#_3-6-vue-中的性能优化有哪些常见的技巧" aria-label="Permalink to &quot;3.6 Vue 中的性能优化有哪些常见的技巧&quot;">​</a></h3><ul><li>使用 v-if 和 v-for 时注意避免不必要的渲染。</li><li>合理使用 computed 属性和 watch 监听器。</li><li>使用 keep-alive 组件缓存组件状态。</li><li>使用异步组件进行按需加载。</li><li>避免在模板中使用复杂的表达式。</li><li>使用 key 属性管理组件和元素的复用。</li><li>合理使用懒加载和分割代码。。。</li></ul><h2 id="_4-虚拟-dom" tabindex="-1">4. 虚拟 DOM <a class="header-anchor" href="#_4-虚拟-dom" aria-label="Permalink to &quot;4. 虚拟 DOM&quot;">​</a></h2><h2 id="_5-diff-算法" tabindex="-1">5. Diff 算法 <a class="header-anchor" href="#_5-diff-算法" aria-label="Permalink to &quot;5. Diff 算法&quot;">​</a></h2><h3 id="vue2" tabindex="-1">Vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;Vue2&quot;">​</a></h3><h3 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3&quot;">​</a></h3><h2 id="_6-响应式原理" tabindex="-1">6. 响应式原理 <a class="header-anchor" href="#_6-响应式原理" aria-label="Permalink to &quot;6. 响应式原理&quot;">​</a></h2><h3 id="vue2-1" tabindex="-1">Vue2 <a class="header-anchor" href="#vue2-1" aria-label="Permalink to &quot;Vue2&quot;">​</a></h3><h3 id="vue3-1" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3-1" aria-label="Permalink to &quot;Vue3&quot;">​</a></h3><h2 id="_7-编译原理" tabindex="-1">7. 编译原理 <a class="header-anchor" href="#_7-编译原理" aria-label="Permalink to &quot;7. 编译原理&quot;">​</a></h2>`,65),t=[o];function r(p,i,c,d,u,y){return e(),a("div",null,t)}const F=s(l,[["render",r]]);export{h as __pageData,F as default};
