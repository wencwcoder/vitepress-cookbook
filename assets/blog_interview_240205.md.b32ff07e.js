import{_ as s,c as a,o as n,V as l}from"./chunks/framework.35c8bad0.js";const u=JSON.parse('{"title":"面试题[其它]","description":"","frontmatter":{"title":"面试题[其它]","date":"2024-02-05T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/240205.md","lastUpdated":1731465559000}'),o={name:"blog/interview/240205.md"},e=l(`<h1 id="面试题-其它" tabindex="-1">面试题[其它] <a class="header-anchor" href="#面试题-其它" aria-label="Permalink to &quot;面试题[其它]&quot;">​</a></h1><h2 id="_1-future" tabindex="-1">1. Future <a class="header-anchor" href="#_1-future" aria-label="Permalink to &quot;1. Future&quot;">​</a></h2><h3 id="_1-1-了解的最新的一些前端技术有哪些" tabindex="-1">1.1 了解的最新的一些前端技术有哪些 <a class="header-anchor" href="#_1-1-了解的最新的一些前端技术有哪些" aria-label="Permalink to &quot;1.1 了解的最新的一些前端技术有哪些&quot;">​</a></h3><ol><li>WebGPU</li></ol><h3 id="_1-2-chrome-浏览器最新的技术更新" tabindex="-1">1.2 Chrome 浏览器最新的技术更新 <a class="header-anchor" href="#_1-2-chrome-浏览器最新的技术更新" aria-label="Permalink to &quot;1.2 Chrome 浏览器最新的技术更新&quot;">​</a></h3><h2 id="_2-past" tabindex="-1">2. Past <a class="header-anchor" href="#_2-past" aria-label="Permalink to &quot;2. Past&quot;">​</a></h2><h3 id="_2-1-wangeditor-的内核是什么" tabindex="-1">2.1 WangEditor 的内核是什么 <a class="header-anchor" href="#_2-1-wangeditor-的内核是什么" aria-label="Permalink to &quot;2.1 WangEditor 的内核是什么&quot;">​</a></h3><h3 id="_2-2-小程序和-h5-的区别" tabindex="-1">2.2 小程序和 H5 的区别 <a class="header-anchor" href="#_2-2-小程序和-h5-的区别" aria-label="Permalink to &quot;2.2 小程序和 H5 的区别&quot;">​</a></h3><p><a href="https://juejin.cn/post/7239336033367277629" target="_blank" rel="noreferrer">小程序与H5深度对比及原理解析</a></p><h3 id="_2-3-react-和-vue-的语法是是如何在小程序中运行的" tabindex="-1">2.3 React 和 Vue 的语法是是如何在小程序中运行的 <a class="header-anchor" href="#_2-3-react-和-vue-的语法是是如何在小程序中运行的" aria-label="Permalink to &quot;2.3 React 和 Vue 的语法是是如何在小程序中运行的&quot;">​</a></h3><h3 id="_2-4-什么是-cdn-它的作用是什么" tabindex="-1">2.4 什么是 CDN？它的作用是什么？ <a class="header-anchor" href="#_2-4-什么是-cdn-它的作用是什么" aria-label="Permalink to &quot;2.4 什么是 CDN？它的作用是什么？&quot;">​</a></h3><h3 id="_2-5-tree-shaking-是如何做的-commonjs-能用吗" tabindex="-1">2.5 tree shaking 是如何做的，commonjs 能用吗 <a class="header-anchor" href="#_2-5-tree-shaking-是如何做的-commonjs-能用吗" aria-label="Permalink to &quot;2.5 tree shaking 是如何做的，commonjs 能用吗&quot;">​</a></h3><p>tree shaking 原理</p><h3 id="_2-6-表单中-input-和-change-事件的区别" tabindex="-1">2.6 表单中 input 和 change 事件的区别 <a class="header-anchor" href="#_2-6-表单中-input-和-change-事件的区别" aria-label="Permalink to &quot;2.6 表单中 input 和 change 事件的区别&quot;">​</a></h3><p>在表单处理中，<code>input</code> 事件和 <code>change</code> 事件是两个常用的事件类型，它们之间有一些关键的区别：</p><ol><li><p>触发时机：</p><ul><li>input：<code>input</code> 事件在用户输入过程中<strong>持续触发</strong>。每当输入框的内容发生变化时（例如，用户每键入一个字符），<code>input</code> 事件就会被触发。</li><li>change：<code>change</code> 事件在输入框的<strong>内容发生变化并且失去焦点</strong>（blur）时触发，或者在某些情况下（如选择框、复选框等）在用户完成选择后立即触发。对于文本框，当用户输入文本后<strong>按下回车</strong>或点击输入框外部使输入框失去焦点时，change 事件才会被触发。</li></ul></li><li><p>适用元素：</p><ul><li>input：主要适用于 <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, 和一些 <code>&lt;select&gt;</code> 元素（具体取决于浏览器实现）。</li><li>change：适用于所有表单元素，包括 <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;checkbox&gt;</code>, <code>&lt;radio&gt;</code> 等。</li></ul></li><li><p>使用场景：</p><ul><li>input：适用于需要实时处理用户输入的场景，如即时搜索、实时验证等。</li><li>change：适用于在用户完成输入后需要进行处理的场景，如表单提交前的验证。</li></ul></li><li><p>示例代码：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myInput</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myInput</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Input event triggered:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myInput</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Change event triggered:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ol><h3 id="_2-7-utf-8-是什么" tabindex="-1">2.7 UTF-8 是什么 <a class="header-anchor" href="#_2-7-utf-8-是什么" aria-label="Permalink to &quot;2.7 UTF-8 是什么&quot;">​</a></h3><p>UTF-8（8位元，Universal Character Set/Unicode Transformation Format）是<strong>针对 Unicode 的一种可变长度字符编码</strong>。以下是对 UTF-8 的详细解释：</p><ol><li>定义与背景 <ul><li><strong>定义</strong>：UTF-8是一种前缀码，可以用来表示Unicode标准中的任何字符。</li><li><strong>创建者</strong>：Ken Thompson、Rob Pike（罗布·派克）。</li><li><strong>创建时间</strong>：1992年9月。</li><li><strong>标准化</strong>：已经标准化为RFC 3629。</li></ul></li><li>特性与优势 <ul><li><strong>与ASCII兼容</strong>：UTF-8 编码中的第一个字节仍与 ASCII 相容，这使得原来处理 ASCII 字符的软件无需或只进行少部分修改后，便可继续使用。</li><li><strong>可变长度编码</strong>：UTF-8 使用1到4个字节为每个字符编码，根据字符的不同，编码长度会有所变化。这种特性使得 UTF-8 能够高效地表示各种字符，包括 ASCII 字符和 Unicode 标准中的其他字符。</li><li><strong>广泛应用</strong>：由于 UTF-8 的兼容性和高效性，它逐渐成为电子邮件、网页及其他存储或传送文字的应用中优先采用的编码。</li></ul></li><li>编码规则与字节结构 <ul><li><strong>ASCII字符</strong>：一个 US-ASCII 字符只需1字节编码（Unicode 范围由U+0000~U+007F），且 UTF-8 表示与 ASCII 字符表示是一样的。</li><li><strong>其他字符</strong>： <ul><li>带有变音符号的拉丁文、希腊文、西里尔字母、亚美尼亚语、希伯来文、阿拉伯文、叙利亚文等字母，需要2字节编码（Unicode 范围由 U+0080~U+07FF）。</li><li>其他语言的字符（包括中日韩文字、东南亚文字、中东文字等）包含了大部分常用字，使用3字节编码。</li><li>其他极少使用的语言字符使用4字节编码。</li></ul></li><li><strong>字节结构</strong>：UTF-8 编码字符的字节结构具有特定的标记位集，用于指示字符的编码长度和字节顺序。例如，表示非 ASCII 字符的多字节串的第一个字节总是在0xC0到0XFD的范围里，并指出这个字符包含多少个字节；而多字节串的其余字节都在0x80到0xBF范围里。</li></ul></li><li>应用场景与意义 <ul><li><strong>网页与电子邮件</strong>：UTF-8 是网页和电子邮件中常用的字符编码，因为它能够支持多种语言的字符显示，使得同一页面可以显示中文简体、繁体及其他语言（如日文、韩文）等。</li><li><strong>数据存储与传输</strong>：由于 UTF-8 的兼容性和高效性，它也被广泛应用于数据存储和传输领域，如数据库存储、文件传输等。</li></ul></li></ol><p>综上所述，UTF-8 是一种功能强大且广泛应用的字符编码方式，它<strong>支持 Unicode 标准中的所有字符，并与 ASCII 编码兼容</strong>，为各种语言的字符显示和数据存储提供了有力的支持。</p>`,20),t=[e];function p(r,c,i,F,D,y){return n(),a("div",null,t)}const h=s(o,[["render",p]]);export{u as __pageData,h as default};
