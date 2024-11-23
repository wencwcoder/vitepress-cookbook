import{_ as s,c as a,o as n,V as l}from"./chunks/framework.35c8bad0.js";const A=JSON.parse('{"title":"面试题[TypeScript]","description":"","frontmatter":{"title":"面试题[TypeScript]","date":"2023-05-31T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230531.md","lastUpdated":1732346359000}'),p={name:"blog/interview/230531.md"},e=l(`<h1 id="面试题-typescript" tabindex="-1">面试题[TypeScript] <a class="header-anchor" href="#面试题-typescript" aria-label="Permalink to &quot;面试题[TypeScript]&quot;">​</a></h1><h2 id="_1-typescript-基础知识" tabindex="-1">1. TypeScript 基础知识 <a class="header-anchor" href="#_1-typescript-基础知识" aria-label="Permalink to &quot;1. TypeScript 基础知识&quot;">​</a></h2><h3 id="_1-1-typescript-和-javascript-之间的关系" tabindex="-1">1.1 TypeScript 和 JavaScript 之间的关系 <a class="header-anchor" href="#_1-1-typescript-和-javascript-之间的关系" aria-label="Permalink to &quot;1.1 TypeScript 和 JavaScript 之间的关系&quot;">​</a></h3><p>TypeScript 和 JavaScript 是两种不同的编程语言，但它们之间存在着紧密的关系。以下是对它们之间关系的详细阐述：</p><ol><li><strong>TypeScript 是 JavaScript 的超集</strong><ul><li>TypeScript 是由 Microsoft 开发的一种自由和开源的编程语言，它扩展了 JavaScript 的语法和功能。</li><li>所有的合法 JavaScript 代码都是合法的 TypeScript 代码，这意味着 JavaScript 代码可以在 TypeScript 环境中无缝运行，而无需进行任何修改。</li></ul></li><li>TypeScript增加的新特性 <ul><li>静态类型检查：TypeScript 引入了静态类型系统，允许开发者在编写代码时指定变量的类型。这有助于在编译阶段发现潜在的错误，提高代码的可靠性和可维护性。</li><li>类、接口、命名空间和泛型：这些特性使得 TypeScript 支持面向对象的编程范式，提高了代码的可读性和可扩展性。</li></ul></li><li>TypeScript的编译过程 <ul><li>TypeScript 代码需要被编译成 JavaScript 代码才能在浏览器中运行。这个编译过程是由 TypeScript 编译器完成的，它确保了 TypeScript 代码可以兼容任何支持 JavaScript 的平台。</li></ul></li><li>TypeScript与JavaScript的集成 <ul><li>TypeScript 可以与许多 JavaScript 框架和库无缝集成，如 Angular、React、Vue 等。这使得开发者可以在使用这些框架和库的同时，享受 TypeScript 带来的类型安全和面向对象编程的优势。</li></ul></li><li>应用场景与选择 <ul><li>JavaScript是一种直译式脚本语言，广泛用于前端开发、后端开发和移动端开发等领域。它简单易学、灵活、动态，并且与HTML标识符结合使用，方便用户操作。</li><li>TypeScript则更适合于大型应用或插件的开发，以及需要强类型约束和面向对象编程特性的场景。尽管TypeScript增加了额外的语法和类型检查，可能会增加一些学习成本，但它带来的代码可维护性和可靠性方面的优势，使得它在这些场景中更具优势。</li></ul></li></ol><p>综上所述，TypeScript和JavaScript之间既存在紧密的联系，又各自具有独特的特点和优势。开发者可以根据项目的具体需求和个人的偏好来选择使用哪种语言。</p><h3 id="_1-2-typescript-有哪些常用类型" tabindex="-1">1.2 TypeScript 有哪些常用类型 <a class="header-anchor" href="#_1-2-typescript-有哪些常用类型" aria-label="Permalink to &quot;1.2 TypeScript 有哪些常用类型&quot;">​</a></h3><p>TypeScript 的常用类型包括：</p><ul><li>基础类型：boolean、string、number、undefined、null、symbol、bigint。</li><li>复杂类型：array、tuple、enum、object。</li><li>特殊类型：any、unknown、never、void</li></ul><p>举例说明：</p><ol><li><p>复杂类型</p><ul><li><p>1）array 数组：表示元素类型固定的列表。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1、在元素类型后面接上[]，表示由此类型元素组成的一个数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> numbers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、使用数组泛型，Array&lt;元素类型&gt;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> numbers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>2）tuple 元祖：表示已知数量和类型的数组。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当访问一个已知索引的元素，会得到正确的类型：</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// OK</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Error, &#39;number&#39; does not have &#39;substr&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当访问一个越界的元素，会使用联合类型替代</span></span>
<span class="line"><span style="color:#A6ACCD;">x[</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// OK, 字符串可以赋值给(string | number)类型</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x[</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// OK, &#39;string&#39; 和 &#39;number&#39; 都有 toString</span></span>
<span class="line"><span style="color:#A6ACCD;">x[</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Error, 布尔不是(string | number)类型</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>3）enum 枚举：用于定义一组命名常量。例如：</p><p>enum 类型是对 JavaScript 标准数据类型的一个补充。 像 C# 等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Red</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Green</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Blue</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。或者，全部都采用手动赋值。</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1、手动的指定成员的数值</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Green</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Blue </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2、全部都采用手动赋值</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Green </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Blue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Color</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Green</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>4）object：表示非原始类型的值，例如对象、数组等。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>特殊类型</p><ul><li><p>1）any：表示<strong>任意类型</strong>，允许任何类型的值。通常用于处理动态内容或逐步迁移到 TypeScript 的项目。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> anything</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">anything </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>2）unknown：表示<strong>未知类型</strong>，与 any 类似，但更安全，必须在使用之前进行类型检查。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> notSure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> notSure </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sure</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">notSure</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>3）never：表示不会发生的值，通常用于标识函数从不会返回（如抛出异常）或永远不会有结果的情况。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>4）void：表示没有返回值的函数。例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warnUser</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a warning message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void。</p></li></ul></li><li><p>高级类型和类型操作</p><ul><li><p>1）联合类型（|）和交叉类型（&amp;）： 例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> person</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Serializable</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>2）type 类型别名：用于为类型创建别名。 例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>3）interface 接口：用于定义对象的类型。 例如：</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> john</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li></ol><h3 id="_1-2-typescript-中的类型注解是什么-如何使用类型注解" tabindex="-1">1.2 TypeScript 中的类型注解是什么？如何使用类型注解？ <a class="header-anchor" href="#_1-2-typescript-中的类型注解是什么-如何使用类型注解" aria-label="Permalink to &quot;1.2 TypeScript 中的类型注解是什么？如何使用类型注解？&quot;">​</a></h3><h3 id="_1-3-typescript-中的泛型是什么-如何使用泛型" tabindex="-1">1.3 TypeScript 中的泛型是什么？如何使用泛型？ <a class="header-anchor" href="#_1-3-typescript-中的泛型是什么-如何使用泛型" aria-label="Permalink to &quot;1.3 TypeScript 中的泛型是什么？如何使用泛型？&quot;">​</a></h3><h3 id="_1-4-typescript-中的枚举是什么-如何定义和使用枚举" tabindex="-1">1.4 TypeScript 中的枚举是什么？如何定义和使用枚举？ <a class="header-anchor" href="#_1-4-typescript-中的枚举是什么-如何定义和使用枚举" aria-label="Permalink to &quot;1.4 TypeScript 中的枚举是什么？如何定义和使用枚举？&quot;">​</a></h3><h3 id="_1-5-typescript-中的接口是什么-如何定义和使用接口" tabindex="-1">1.5 TypeScript 中的接口是什么？如何定义和使用接口？ <a class="header-anchor" href="#_1-5-typescript-中的接口是什么-如何定义和使用接口" aria-label="Permalink to &quot;1.5 TypeScript 中的接口是什么？如何定义和使用接口？&quot;">​</a></h3><h3 id="_1-6-typescript-中的类是什么-如何定义和使用类" tabindex="-1">1.6 TypeScript 中的类是什么？如何定义和使用类？ <a class="header-anchor" href="#_1-6-typescript-中的类是什么-如何定义和使用类" aria-label="Permalink to &quot;1.6 TypeScript 中的类是什么？如何定义和使用类？&quot;">​</a></h3><h3 id="_1-7-typescript-中的命名空间是什么-如何定义和使用命名空间" tabindex="-1">1.7 TypeScript 中的命名空间是什么？如何定义和使用命名空间？ <a class="header-anchor" href="#_1-7-typescript-中的命名空间是什么-如何定义和使用命名空间" aria-label="Permalink to &quot;1.7 TypeScript 中的命名空间是什么？如何定义和使用命名空间？&quot;">​</a></h3><h2 id="_2-typescript-拓展知识" tabindex="-1">2. TypeScript 拓展知识 <a class="header-anchor" href="#_2-typescript-拓展知识" aria-label="Permalink to &quot;2. TypeScript 拓展知识&quot;">​</a></h2><h3 id="_2-1-type、interface" tabindex="-1">2.1 type、interface <a class="header-anchor" href="#_2-1-type、interface" aria-label="Permalink to &quot;2.1 type、interface&quot;">​</a></h3><h3 id="_2-2-any、unkonwn、never" tabindex="-1">2.2 any、unkonwn、never <a class="header-anchor" href="#_2-2-any、unkonwn、never" aria-label="Permalink to &quot;2.2 any、unkonwn、never&quot;">​</a></h3><p>any 和 unkonwn 在 TypeScript 类型中属于最顶层的 <strong>Top Type</strong>，即所有的类型都是它俩的子类型。</p><p>而 never 则相反，它作为 <strong>Bottom Type</strong> 是所有类型的子类型。</p><h3 id="_2-3-使用-typescript-进行开发时-有什么心得体会" tabindex="-1">2.3 使用 TypeScript 进行开发时，有什么心得体会 <a class="header-anchor" href="#_2-3-使用-typescript-进行开发时-有什么心得体会" aria-label="Permalink to &quot;2.3 使用 TypeScript 进行开发时，有什么心得体会&quot;">​</a></h3><h3 id="_2-4-d-ts-文件和-types-的区别" tabindex="-1">2.4 .d.ts 文件和 @types 的区别 <a class="header-anchor" href="#_2-4-d-ts-文件和-types-的区别" aria-label="Permalink to &quot;2.4 .d.ts 文件和 @types 的区别&quot;">​</a></h3><h3 id="_2-5-as-const-的作用" tabindex="-1">2.5 as const 的作用 <a class="header-anchor" href="#_2-5-as-const-的作用" aria-label="Permalink to &quot;2.5 as const 的作用&quot;">​</a></h3><ul><li>变成字面量类型。</li><li>将数组内容变成只读。</li></ul><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 若没有 as const，则会推断为 string[]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 有 as const，则 color 只能取数组里面的值</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-6-工具类型" tabindex="-1">2.6 工具类型 <a class="header-anchor" href="#_2-6-工具类型" aria-label="Permalink to &quot;2.6 工具类型&quot;">​</a></h3><h3 id="_2-7-协变和逆变" tabindex="-1">2.7 协变和逆变 <a class="header-anchor" href="#_2-7-协变和逆变" aria-label="Permalink to &quot;2.7 协变和逆变&quot;">​</a></h3>`,29),o=[e];function t(r,c,i,y,D,C){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
