import{_ as s,c as l,o as a,V as n}from"./chunks/framework.35c8bad0.js";const C=JSON.parse('{"title":"JavaScript基础知识","description":"","frontmatter":{"title":"JavaScript基础知识","date":"2024-06-18T00:00:00.000Z"},"headers":[],"relativePath":"frontend/javascript/240618.md","lastUpdated":1732417434000}'),o={name:"frontend/javascript/240618.md"},p=n(`<h1 id="javascript基础知识" tabindex="-1">JavaScript基础知识 <a class="header-anchor" href="#javascript基础知识" aria-label="Permalink to &quot;JavaScript基础知识&quot;">​</a></h1><h2 id="_1-新特性" tabindex="-1">1. 新特性 <a class="header-anchor" href="#_1-新特性" aria-label="Permalink to &quot;1. 新特性&quot;">​</a></h2><h3 id="_1-1-es6" tabindex="-1">1.1 ES6 <a class="header-anchor" href="#_1-1-es6" aria-label="Permalink to &quot;1.1 ES6&quot;">​</a></h3><p>ECMAScript 2015（简称ES6）为JavaScript语言带来了许多新的特性和改进，使得JavaScript编程更加方便、高效和优雅。以下是ES6中的一些主要新特性：</p><ol><li><strong>块级作用域</strong><ul><li>ES6引入了<code>let</code>和<code>const</code>关键字，用于在块级作用域中声明变量。与<code>var</code>不同，<code>let</code>和<code>const</code>声明的变量只在当前代码块内有效，避免了变量提升和全局命名冲突的问题。</li></ul></li><li><strong>箭头函数</strong><ul><li>箭头函数是ES6中一种新的函数声明方式，使用箭头(<code>=&gt;</code>)取代传统的<code>function</code>关键字。箭头函数具有更简洁的语法，并且自动绑定了上下文（即<code>this</code>的值），解决了回调函数中<code>this</code>指向问题。</li></ul></li><li><strong>默认参数</strong><ul><li>ES6允许在函数定义时为参数提供默认值。如果调用函数时未传递某个参数，将使用默认值。这可以简化函数的使用，并且可以传递部分参数而不是全部参数。</li></ul></li><li><strong>解构赋值（Destructuring Assignment）</strong><ul><li>解构赋值允许从数组或对象中提取值，并赋值给变量。在ES6中，可以使用解构赋值语法快速获取数组或对象中的元素，从而简化了代码编写和数据交换。</li></ul></li><li><strong>扩展运算符（Spread Operator）</strong><ul><li>扩展运算符（<code>...</code>）可以将数组或对象展开，提取出其中的元素。在函数调用或数组和对象字面量中，使用扩展运算符可以将数组或对象展开成独立的元素，或将多个元素合并成数组或对象。</li><li>使用场景：数组和对象的复制、克隆及合并；在函数调用时，将数组或对象中的元素作为函数的多个参数。</li></ul></li><li><strong>模板字符串（Template Literals）</strong><ul><li>模板字符串是一种更方便的字符串拼接方式，使用<strong>反引号</strong>（\`\`）定义字符串，并可以在其中插入变量和表达式，提高了代码的可读性和可维护性。</li></ul></li><li><strong>类和模块</strong><ul><li>ES6引入了类的语法糖，使得面向对象编程更加简洁和易用。类可以通过<code>extends</code>关键字实现继承，使用<code>super</code>关键字调用父类的方法。此外，ES6还引入了模块化的概念，通过<code>import</code>和<code>export</code>关键字可以方便地导入和导出模块。</li></ul></li><li><strong>Symbol类型</strong><ul><li>ES6新增了一种原始数据类型<code>Symbol</code>，每个<code>Symbol</code>类型的值都是独一无二的。这可以用于作为对象的唯一标识符，以避免属性名的冲突。</li><li>Symbol 值只能显式转换为字符串，隐式转换会抛出错误。</li></ul></li><li><strong>Map和Set</strong><ul><li>ES6引入了<code>Map</code>和<code>Set</code>两种新的数据结构。<code>Map</code>对象保存键值对，并且任何值（对象或原始值）都可以作为一个键或一个值。<code>Set</code>对象类似于数组，但成员的值都是唯一的，没有重复的值。</li></ul></li><li><strong>Promise对象</strong><ul><li>Promise是异步编程的一种解决方案，它代表了一个最终可能可用（也可能不可用）的值或异步操作的最终完成（或失败）及其结果值。通过使用Promise，可以更好地组织异步代码，避免回调地狱（callback hell）的问题。</li></ul></li><li><strong>其他新特性</strong><ul><li><code>Proxy</code>：允许在对象和函数调用等操作前后添加自定义的行为。</li><li><code>Reflect</code>：提供了一组可以操作对象的内置方法，可以替代一些对象方法的实现。</li><li><code>for...of</code>循环：用于遍历可迭代对象（如数组、Map和Set）中的元素。</li><li><code>Promise.allSettled</code>：用于处理多个Promise的状态并返回一个包含每个Promise状态的数组（注意：这个特性可能不是所有ES6实现都包含的，它可能是在后续的ECMAScript规范中引入的）。</li></ul></li></ol><p>这些新特性使得ES6在语法和功能上都有了很大的提升，使得JavaScript成为更加强大和灵活的编程语言。</p><h3 id="_1-2-es7" tabindex="-1">1.2 ES7 <a class="header-anchor" href="#_1-2-es7" aria-label="Permalink to &quot;1.2 ES7&quot;">​</a></h3><p>ECMAScript 2016 （简称ES7），是JavaScript的第七个版本，它引入了一些重要的新特性和改进。以下是ES7的主要新特性：</p><ol><li><p><strong>Array.prototype.includes() 方法</strong></p><ul><li><p>功能：用于判断一个数组是否包含一个指定的值，并返回一个布尔值。如果包含指定的值则返回 <code>true</code>，否则返回 <code>false</code>。</p></li><li><p>优点：这个方法可以代替 <code>indexOf()</code> 方法，使代码更加简洁和易于阅读。<code>indexOf()</code> 返回的是元素的索引，如果不存在则返回 <code>-1</code>，而 <code>includes()</code> 直接返回布尔值。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p><strong>指数运算符</strong>（**）</p><ul><li><p>功能：用于计算一个数的幂，可以代替 <code>Math.pow()</code> 方法。</p></li><li><p>语法：<code>x ** y</code>，其中 <code>x</code> 表示底数，<code>y</code> 表示指数。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 8</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li><li><p><strong>对象解构的剩余和展开属性</strong></p><ul><li><p>功能：允许在对象解构中使用剩余和展开属性，使代码更加简洁和易于维护。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">rest </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(rest)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { c: 3, d: 4 }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li><li><p><strong>异步函数</strong></p><ul><li><p>功能：允许使用 <strong>async/await</strong> 关键字来编写异步代码，使异步编程更加容易和直观。</p></li><li><p>特点：<code>async</code> 函数返回一个 Promise 对象，<code>await</code> 表达式会暂停 <code>async</code> 函数的执行，等待 Promise 的结果出来后再继续执行。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetchData</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://jsonplaceholder.typicode.com/todos/1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">fetchData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul></li><li><p><strong>共享内存和原子操作</strong></p><ul><li><p>功能：允许在多个线程之间共享数据，并使用原子操作来确保数据的一致性和可靠性。</p></li><li><p>应用场景：使 JavaScript 可以更好地处理并发和多线程编程。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SharedArrayBuffer</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> view </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Int32Array</span><span style="color:#A6ACCD;">(buffer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Atomics</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">increment</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(view[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ol><h3 id="_1-3-es8" tabindex="-1">1.3 ES8 <a class="header-anchor" href="#_1-3-es8" aria-label="Permalink to &quot;1.3 ES8&quot;">​</a></h3><p>ECMAScript 2017（简称ES8），为JavaScript编程语言引入了一系列新特性和改进。以下是ES8的主要新特性：</p><ol><li><strong>异步迭代</strong><ul><li>async/await：ES8进一步增强了异步编程的支持，允许在异步函数中使用<code>for await...of</code>循环来迭代异步可迭代对象（如异步生成器）。这使得处理异步数据流变得更加简单和直观。</li></ul></li><li><strong>对象属性值的简写方法</strong><ul><li>对象字面量中的属性定义：在对象字面量中，如果属性名和属性值同名，可以省略属性值部分，只写属性名，并冒号后面跟一个函数体，这将自动把函数名作为属性名，函数体作为属性值。</li></ul></li><li><strong>字符串填充（padStart和padEnd）</strong><ul><li>padStart()和padEnd()：这两个方法用于在当前字符串的开头或结尾填充指定的字符串，直到达到指定的长度。如果原字符串的长度已经等于或超过了指定的长度，则返回原字符串。</li></ul></li><li><strong>Object.entries() 和 Object.values()</strong><ul><li>Object.entries()：返回一个给定对象自身可枚举属性的键值对数组，其排列与通过手动遍历该对象属性所得到的顺序一致（区别在于该方法的返回是一个数组）。</li><li>Object.values()：返回一个给定对象自身可枚举属性值的数组，其排列与通过手动遍历该对象属性所得到的顺序一致（区别在于该方法的返回是一个数组，而不是一个对象）。</li></ul></li><li><strong>模板字面量中的标签模板（Tagged Templates）</strong><ul><li>标签模板：允许你使用函数来处理模板字面量。标签模板函数的第一个参数是一个包含模板字符串中所有静态文本部分的数组，后续参数则是模板字符串中每个插值表达式对应的值。</li></ul></li><li><strong>函数参数列表结尾允许逗号</strong><ul><li>函数参数和数组/对象字面量中的尾随逗号：在ES8中，函数参数列表、数组字面量和对象字面量的最后一个元素后面允许有一个尾随逗号。这增加了代码的灵活性和可读性，特别是在编辑大型代码库时，可以更方便地添加或删除元素。</li></ul></li><li><strong>共享内存和Atomics对象</strong><ul><li>SharedArrayBuffer：允许在多个<code>Worker</code>线程之间共享一个ArrayBuffer。</li><li>Atomics对象：提供了一组静态方法，用于在多线程环境下以原子方式操作共享内存中的数据。</li></ul></li></ol><h2 id="_2-dom" tabindex="-1">2. DOM <a class="header-anchor" href="#_2-dom" aria-label="Permalink to &quot;2. DOM&quot;">​</a></h2><h2 id="_3-bom" tabindex="-1">3. BOM <a class="header-anchor" href="#_3-bom" aria-label="Permalink to &quot;3. BOM&quot;">​</a></h2><h2 id="_4-var、let、const-的区别" tabindex="-1">4. var、let、const 的区别 <a class="header-anchor" href="#_4-var、let、const-的区别" aria-label="Permalink to &quot;4. var、let、const 的区别&quot;">​</a></h2><p>在 JavaScript 中，<code>var</code>、<code>let</code> 和 <code>const</code> 是用于<strong>声明变量</strong>的关键字，但它们之间存在一些重要的区别。以下是它们之间的主要差异：</p><ol><li><strong>作用域（Scope）</strong>： <ul><li><code>var</code>：具有函数作用域（在ES6之前）。这意味着在函数内部声明的<code>var</code>变量在函数外部是不可见的，但在同一函数内的任何地方都是可见的。如果在函数外部声明，它将成为全局变量。</li><li><code>let</code> 和 <code>const</code>：具有块级作用域（block scope）。这意味着它们只在最近的封闭花括号 <code>{}</code>（例如函数体、循环体或任何代码块）内有效。</li></ul></li><li><strong>变量提升（Variable Hoisting）</strong>： <ul><li><code>var</code>：存在变量提升（hoisting）现象。这意味着即使你在函数或代码块的后面部分声明了一个<code>var</code>变量，它也会被视为在函数或代码块的顶部就已经声明了（只是没有初始化）。</li><li><code>let</code> 和 <code>const</code>：不存在变量提升。这意味着在声明之前，你不能引用这些变量（否则会导致引用错误）。</li></ul></li><li><strong>重新声明</strong>： <ul><li><code>var</code>：允许在同一作用域内多次声明同一个变量（但这样做通常是不好的编程实践）。</li><li><code>let</code>：允许在同一作用域内多次声明同一个变量，但会产生语法错误（在严格模式下）。</li><li><code>const</code>：不允许重新声明，也不允许重新赋值。</li></ul></li><li><strong>赋值</strong>： <ul><li><code>var</code> 和 <code>let</code>：允许重新赋值。</li><li><code>const</code>：声明时必须赋值，且之后不允许重新赋值（但如果你声明的是一个对象或数组，你可以修改其内部属性或元素）。</li></ul></li><li><strong>暂时性死区（Temporal Dead Zone, TDZ）</strong>： <ul><li><code>var</code>：不存在TDZ。</li><li><code>let</code> 和 <code>const</code>：在声明之前的区域被称为暂时性死区（TDZ）。在这个区域内引用这些变量会导致引用错误。</li></ul></li><li><strong>全局声明</strong>： <ul><li><code>var</code>：在全局作用域中声明时，会创建一个全局变量（这通常是不好的做法）。</li><li><code>let</code> 和 <code>const</code>：<strong>在全局作用域中声明时，它们不会成为全局对象的属性（在浏览器中，全局对象是<code>window</code>）</strong>。因此，它们不会意外地创建全局变量。（特别注意在箭头函数中 this 可能会指向的属性，可能输出为 undefined）</li></ul></li></ol><p>总的来说，<code>let</code> 和 <code>const</code> 提供了比 <code>var</code> 更严格和更可预测的作用域和生命周期控制，因此在现代 JavaScript 编程中更受欢迎。通常，我们推荐尽可能使用 <code>let</code> 和 <code>const</code>，并在确实需要改变变量值时选择 <code>let</code>，而在知道变量的值在声明后不会改变时选择 <code>const</code>。</p><h2 id="_5-set、map、weakset、weakmap" tabindex="-1">5. Set、Map、WeakSet、WeakMap <a class="header-anchor" href="#_5-set、map、weakset、weakmap" aria-label="Permalink to &quot;5. Set、Map、WeakSet、WeakMap&quot;">​</a></h2><h3 id="_5-1-set、map" tabindex="-1">5.1 Set、Map <a class="header-anchor" href="#_5-1-set、map" aria-label="Permalink to &quot;5.1 Set、Map&quot;">​</a></h3><p>Set 和 Map 是两种重要的<strong>数据结构</strong>，它们在许多编程语言中都有实现，尤其是在 JavaScript 中得到了广泛的应用。以下是对 Set 和 Map 的详细解释：</p><ol><li>Set <ol><li>定义： <ul><li>Set是一种<strong>集合数据结构，它允许存储不重复的值</strong>。</li><li>这些值可以是原始值（如数字、字符串）或对象引用。</li></ul></li><li>特性： <ul><li>Set中的<strong>元素是唯一的</strong>，即不会出现重复的值。</li><li>Set中的<strong>元素是无序的，即它们不按照插入的顺序存储</strong>。</li><li>Set的大小可以通过其<code>size</code>属性来获取（在JavaScript中）。</li></ul></li><li>操作方法： <ul><li><code>add(value)</code>：向Set中添加一个新元素。</li><li><code>has(value)</code>：检查Set中是否包含某个元素。</li><li><code>delete(value)</code>：从Set中删除一个元素。</li><li><code>clear()</code>：清空Set中的所有元素。</li><li><code>values()</code>、<code>keys()</code>、<code>entries()</code>：返回包含Set中所有元素、键（与值相同）和键值对的迭代器（在JavaScript中）。</li></ul></li><li>应用场景： <ul><li>当需要存储唯一值的集合时，可以使用Set。</li><li>可以用于去除数组中的重复元素。</li><li>可以用于实现数学中的集合运算，如并集、交集和差集。</li></ul></li></ol></li><li>Map <ol><li>定义： <ul><li>Map是一种<strong>键值对集合数据结构</strong>。</li><li>它允许任何类型的数据（对象或原始值）作为键。</li></ul></li><li>特性： <ul><li>Map中的<strong>键是唯一的，但值可以重复</strong>。</li><li>Map中的<strong>键值对是按照插入的顺序存储的</strong>。</li><li>Map的大小可以通过其<code>size</code>属性来获取（在JavaScript中）。</li></ul></li><li>操作方法： <ul><li><code>set(key, value)</code>：向Map中添加一个新的键值对。</li><li><code>get(key)</code>：根据键获取对应的值。</li><li><code>has(key)</code>：检查Map中是否包含某个键。</li><li><code>delete(key)</code>：从Map中删除一个键值对。</li><li><code>clear()</code>：清空Map中的所有键值对。</li><li><code>keys()</code>、<code>values()</code>、<code>entries()</code>：返回包含Map中所有键、值和键值对的迭代器（在JavaScript中）。</li><li><code>forEach()</code>：遍历Map中的所有键值对，并对每个键值对执行指定的操作。</li></ul></li><li>应用场景： <ul><li>当需要存储键值对并希望保持插入顺序时，可以使用Map。</li><li>可以用于实现对象的键值对存储和检索。</li><li>可以用于在需要快速查找、插入和删除操作的场景中。</li></ul></li></ol></li><li>总结 <ul><li>Set和Map都是重要的数据结构，它们在存储和操作数据方面提供了不同的功能和特性。</li><li>Set主要用于存储唯一值的集合，而Map则用于存储键值对并保持插入顺序。</li><li>在选择使用Set还是Map时，应根据具体的应用场景和需求来决定。</li></ul></li></ol><h3 id="_5-2-map、weakmap" tabindex="-1">5.2 Map、WeakMap <a class="header-anchor" href="#_5-2-map、weakmap" aria-label="Permalink to &quot;5.2 Map、WeakMap&quot;">​</a></h3><p>Map 和 WeakMap 都是 JavaScript 中用于<strong>存储键值对的数据结构</strong>，但它们在键的类型、键的引用方式、内存管理、遍历与大小以及使用场景等方面存在显著差异。以下是对两者的详细比较：</p><ol><li>键的类型 <ul><li><strong>Map</strong>：Map 的键可以是任意类型，包括原始数据类型（如字符串、数字）和对象。这提供了一种更加灵活的键值对存储方式。</li><li><strong>WeakMap</strong>：WeakMap 的键只能是对象类型（包括继承自 Object 的类型和 Symbol 类型，但 null 除外）。它不接受原始数据类型作为键。</li></ul></li><li>键的引用方式 <ul><li><strong>Map</strong>：Map 中的键是强引用。这意味着，只要 Map 存在，其键就不会被垃圾回收机制回收，即使没有其他地方引用这些键。</li><li><strong>WeakMap</strong>：WeakMap 中的键是弱引用。这意味着，当键对象没有其他强引用时，垃圾回收机制可以回收这些键对象。这种弱引用方式有助于避免内存泄漏。</li></ul></li><li>内存管理 <ul><li><strong>Map</strong>：由于 Map 中的键是强引用，因此即使键对象不再需要，只要它们仍在Map中作为键存在，就不会被垃圾回收。这可能导致内存泄漏，特别是当 Map 中存储了大量不再需要的键值时。</li><li><strong>WeakMap</strong>：WeakMap 的弱引用特性使其能够自动释放不再需要的键和键值对。当键对象没有其他引用时，与其关联的键值对也会自动被垃圾回收机制回收。这有助于优化内存使用并减少内存泄漏的风险。</li></ul></li><li>遍历与大小 <ul><li><strong>Map</strong>：提供了遍历方法和<code>size</code>属性来获取其成员的数量和进行遍历。</li><li><strong>WeakMap</strong>：没有遍历方法和<code>size</code>属性，因为其成员的数量取决于垃圾回收机制的运行情况。</li></ul></li><li>使用场景 <ul><li><strong>Map</strong>：Map 适用于需要长期保留键值对的情况，特别是当键是原始数据类型或需要确保键不会被垃圾回收时。它提供了丰富的 API 方法（如set、get、has、delete等）来操作键值对。</li><li><strong>WeakMap</strong>：WeakMap 适用于以下场景： <ul><li>存储与对象关联的元数据或缓存数据，当对象不再需要时，与其关联的元数据或缓存数据也会自动被回收。</li><li>在事件处理中，使用 WeakMap 可以自动解除事件监听器，从而避免内存泄漏。</li><li>在实现私有属性和方法时，可以使用 WeakMap 将私有数据关联到公共接口上，而不会增加对象的内存占用。</li></ul></li></ul></li></ol><h2 id="_6-proxy" tabindex="-1">6. Proxy <a class="header-anchor" href="#_6-proxy" aria-label="Permalink to &quot;6. Proxy&quot;">​</a></h2><h2 id="_7-json" tabindex="-1">7. JSON <a class="header-anchor" href="#_7-json" aria-label="Permalink to &quot;7. JSON&quot;">​</a></h2><p>JSON（JavaScript Object Notation，JavaScript对象表示法）是<strong>一种轻量级的数据交换格式</strong>。它易于人阅读和编写，同时也便于机器解析和生成。JSON 格式独立于编程语言，但其语法与 JavaScript 对象表示法相似，因此在前端开发特别是使用 JavaScript 时非常常见。</p><ol><li><p>基本数据类型和结构：</p><p>JSON 支持几种基本类型的数据，包括字符串、数字、布尔值、数组、对象和 null。例如：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">isStudent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">courses</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Math</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Science</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">city</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New York</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">zipcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10001</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>使用场景：</p><ul><li>主要用于数据交换，特别是在 Web 浏览器和服务器之间。例如，当客户端向服务器发送请求或从服务器接收数据时，通常会使用 JSON。</li><li>存储配置文件。许多现代的应用程序使用 JSON 格式的配置文件，因为它们易于阅读和修改。</li></ul></li><li><p>相比其他格式的优势：</p><ul><li>与 XML 相比，JSON 更轻量级，阅读和编写都更加简洁。</li><li>支持更丰富的数据类型，例如数组和内嵌对象，直观地表示复杂的数据结构。</li></ul></li><li><p>解析和生成：</p><p>在 JavaScript 中，使用 <code>JSON.parse()</code> 将 JSON 字符串解析为 JavaScript 对象，使用 <code>JSON.stringify()</code> 将 JavaScript 对象转换为 JSON 字符串。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jsonString </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;name&quot;: &quot;John&quot;, &quot;age&quot;: 30}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jsonObject </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(jsonString)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(jsonObject</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: John</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Doe</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 输出: {&quot;name&quot;:&quot;Doe&quot;,&quot;age&quot;:22}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>注意事项：</p><ul><li>JSON 的键名必须用双引号括起来，字符串值也需要使用双引号。</li><li>JSON 的表示法不支持对函数、日期对象或正则表达式的直接序列化和反序列化。</li></ul></li><li><p>安全性：</p><ul><li>在解析来自不受信任的数据源的 JSON 时，需小心防范恶意代码注入。可以使用标准库或框架中内置的解析方法来确保安全性和正确性，而不是使用 <code>eval()</code> 方法来解析 JSON。</li></ul></li></ol>`,29),e=[p];function t(c,r,i,y,D,F){return a(),l("div",null,e)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
