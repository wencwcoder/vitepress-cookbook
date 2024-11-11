import{_ as e,c as a,o as s,V as o}from"./chunks/framework.35c8bad0.js";const F=JSON.parse('{"title":"面试题[React]","description":"","frontmatter":{"title":"面试题[React]","date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230606.md","lastUpdated":1731308995000}'),l={name:"blog/interview/230606.md"},n=o(`<h1 id="面试题-react" tabindex="-1">面试题[React] <a class="header-anchor" href="#面试题-react" aria-label="Permalink to &quot;面试题[React]&quot;">​</a></h1><h2 id="_1-react-基础知识" tabindex="-1">1. React 基础知识 <a class="header-anchor" href="#_1-react-基础知识" aria-label="Permalink to &quot;1. React 基础知识&quot;">​</a></h2><h3 id="_1-1-什么是-jsx-它与-html-有什么区别" tabindex="-1">1.1 什么是 JSX？它与 HTML 有什么区别？ <a class="header-anchor" href="#_1-1-什么是-jsx-它与-html-有什么区别" aria-label="Permalink to &quot;1.1 什么是 JSX？它与 HTML 有什么区别？&quot;">​</a></h3><p>JSX 是 JavaScript 语法的扩展，它允许编写类似于 HTML 的代码。它可以编译为常规的 JavaScript 函数调用，从而为创建组件标记提供了一种更好的方法。</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// JSX代码如下</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sidebar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 转换为以下JS代码</span></span>
<span class="line"><span style="color:#A6ACCD;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">className</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sidebar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-2-function-component-和-class-component-的区别" tabindex="-1">1.2 Function Component 和 Class Component 的区别 <a class="header-anchor" href="#_1-2-function-component-和-class-component-的区别" aria-label="Permalink to &quot;1.2 Function Component 和 Class Component 的区别&quot;">​</a></h3><h3 id="_1-3-react-hooks" tabindex="-1">1.3 React Hooks <a class="header-anchor" href="#_1-3-react-hooks" aria-label="Permalink to &quot;1.3 React Hooks&quot;">​</a></h3><h3 id="_1-4-react-context" tabindex="-1">1.4 React Context <a class="header-anchor" href="#_1-4-react-context" aria-label="Permalink to &quot;1.4 React Context&quot;">​</a></h3><h3 id="_1-5-react-的错误边界-error-boundary" tabindex="-1">1.5 React 的错误边界（Error Boundary） <a class="header-anchor" href="#_1-5-react-的错误边界-error-boundary" aria-label="Permalink to &quot;1.5 React 的错误边界（Error Boundary）&quot;">​</a></h3><h3 id="_1-6-fiber-架构" tabindex="-1">1.6 Fiber 架构 <a class="header-anchor" href="#_1-6-fiber-架构" aria-label="Permalink to &quot;1.6 Fiber 架构&quot;">​</a></h3><h3 id="_1-7-react-事件机制原理" tabindex="-1">1.7 React 事件机制原理 <a class="header-anchor" href="#_1-7-react-事件机制原理" aria-label="Permalink to &quot;1.7 React 事件机制原理&quot;">​</a></h3><p>React 的事件机制原理主要涉及到<strong>事件注册、事件合成、事件冒泡、事件派发</strong>等关键步骤，它虽然与原生 DOM 事件机制有所不同，但仍然是基于浏览器的事件机制完成的。以下是 React 事件机制原理的详细解释：</p><ol><li>事件注册： <ul><li><strong>React 并不将事件直接绑定到具体的 DOM 节点上，而是统一绑定到 <code>document</code> 上</strong>。</li><li>当组件挂载时，React 会根据组件内声明的事件类型（如 <code>onClick</code>、<code>onChange </code>等），给 <code>document</code> 添加事件监听，并指定统一的事件处理程序 <code>dispatchEvent</code>。</li><li>React 会将 React 组件内所有事件统一存放到一个对象（如 <code>listenerBank</code>）内，以便在触发事件时能够找到对应的方法去执行。</li></ul></li><li>事件合成（SyntheticEvent）： <ul><li>React 使用 <code>SyntheticEvent </code>作为所有事件的基类，该类定义了合成事件的基础公共属性和方法。</li><li>React 会根据当前的事件类型来使用不同的合成事件对象，如 <code>SyntheticMouseEvent</code>（鼠标事件）、<code>SyntheticFocusEvent</code>（焦点事件）等。</li><li><code>SyntheticEvent</code> 是 React 对原生事件的封装，处理了浏览器兼容问题，并且具有与原生事件相同的接口，如 <code>stopPropagation()</code> 和 <code>preventDefault()</code>。</li></ul></li><li>事件冒泡： <ul><li>React 中的事件传播遵循与原生 DOM 事件相似的机制，包括捕获阶段和冒泡阶段。</li><li>在 React 中，事件传播是通过组件的 props 来实现的。当一个组件触发一个事件时，React 会调用该组件的事件处理函数，并将事件对象作为参数传递给该函数。</li><li>默认情况下，React 中的事件处理程序在冒泡阶段被触发。如果需要处理捕获阶段的事件，可以使用如 <code>onClickCapture </code>的事件处理函数。</li></ul></li><li>事件派发（dispatchEvent）： <ul><li>React 通过 <code>dispatchEvent</code> 方法统一进行事件的派发。当事件触发时，React 会根据当前的组件 ID 和事件类型找到对应的事件回调函数并执行。</li><li>React 中的事件传播可以用于实现组件之间的通信和交互，如父组件可以通过 props 将事件处理函数传递给子组件，在子组件中触发该事件时，父组件可以捕获到该事件并执行相应的逻辑。</li></ul></li><li>其他特点： <ul><li>React 中的事件对象 <code>e</code> 是一个合成对象，而不是原生的事件对象。这个对象已经被 React 封装过，并且处理了浏览器兼容问题。</li><li>React 的事件命名方式采用驼峰命名法（如 <code>onClick</code>），与 DOM 的命名方式（如 <code>onclick</code>）有所不同。</li><li>在 React 中，不能通过返回 <code>false</code> 来阻止默认行为或阻止事件冒泡。需要显式调用 <code>e.preventDefault()</code> 或 <code>e.stopPropagation()</code> 来实现这些功能。</li></ul></li></ol><p>总结来说，React 的事件机制原理通过事件注册、事件合成、事件冒泡和事件派发等步骤实现了对事件的高效处理和管理。这种机制减少了内存消耗、提高了性能，并且为开发者提供了统一的规范和友好的开发体验。</p><h3 id="_1-8-usecallback-和-usememo-的区别" tabindex="-1">1.8 useCallBack 和 useMemo 的区别 <a class="header-anchor" href="#_1-8-usecallback-和-usememo-的区别" aria-label="Permalink to &quot;1.8 useCallBack 和 useMemo 的区别&quot;">​</a></h3><p><code>useCallback</code> 和 <code>useMemo</code> 是 React Hooks 中<strong>用于性能优化</strong>的两个重要工具。它们的主要区别在于用途、参数、返回值类型以及使用场景。以下是对两者区别的详细解释：</p><ol><li><p>功能不同：</p><ul><li><code>useCallback</code>：用于记忆化（memoize）回调函数，避免在每次渲染时都重新创建相同的函数。它接受一个回调函数和一个依赖项数组作为参数，当依赖项发生变化时，会返回一个新的记忆化的回调函数。</li><li><code>useMemo</code>：用于记忆化（memoize）计算结果，避免在每次渲染时都进行昂贵的计算。它接受一个计算函数和一个依赖项数组作为参数，当依赖项发生变化时，会重新计算并返回一个新的记忆化的计算结果。</li></ul></li><li><p>参数不同：</p><ul><li><code>useCallback</code>：接受一个回调函数和一个依赖项数组作为参数。</li><li><code>useMemo</code>：接受一个计算函数和一个依赖项数组作为参数。</li></ul></li><li><p>返回值类型不同：</p><ul><li><code>useCallback</code>：返回一个记忆化的回调函数。</li><li><code>useMemo</code>：返回一个记忆化的计算结果。</li></ul></li><li><p>使用场景不同：</p><ul><li><code>useCallback</code>：主要用于优化传递给子组件的回调函数，特别是当这些回调函数作为 props 传递，并且父组件频繁渲染时。通过使用 <code>useCallback</code>，可以确保子组件在 props 没有实际变化时不会重新渲染，从而提高性能。</li><li><code>useMemo</code>：主要用于优化计算操作，特别是当这些计算操作涉及复杂的计算或数据转换，并且这些计算的结果在多次渲染之间不会发生变化时。通过使用 <code>useMemo</code>，可以避免在每次渲染时都执行昂贵的计算，从而提高性能。</li></ul></li><li><p><strong>示例</strong>：</p><ul><li><p>使用 <code>useCallback</code> 优化回调函数：</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleClick </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useCallback</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Button clicked!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 依赖项数组为空，表示没有依赖项</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>使用 <code>useMemo</code> 优化计算结果：</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> expensiveValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMemo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computeExpensiveValue</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ol><p>总结来说，<code>useCallback</code> 和 <code>useMemo</code> 都是用于性能优化的 React Hooks，但它们的用途、参数、返回值类型和使用场景有所不同。在实际开发中，可以根据具体的需求和场景选择使用哪个 Hook 来提高应用的性能。</p><h3 id="_1-9-useref-和-ref-的区别" tabindex="-1">1.9 useRef 和 ref 的区别 <a class="header-anchor" href="#_1-9-useref-和-ref-的区别" aria-label="Permalink to &quot;1.9 useRef 和 ref 的区别&quot;">​</a></h3><p><code>useRef</code> 和 <code>ref</code> 在 React 中都是<strong>用于访问 DOM 元素或组件实例</strong>的工具，但它们在使用方式、适用场景以及实现原理上存在明显的区别。以下是关于 <code>useRef</code> 和 <code>ref</code> 的详细区别：</p><ol><li>使用方式： <ul><li><code>ref</code>：在类组件中，通常使用 <code>React.createRef()</code> 方法来创建一个 ref 对象，并将其赋值给类的一个实例属性。然后，可以通过这个 ref 属性来访问对应的 DOM 元素或组件实例。在函数组件中，<code>ref</code> 不能直接使用，因为函数组件没有实例。</li><li><code>useRef</code>：是 React 提供的一个 Hook，专门用于函数组件中。它返回一个可变的 ref 对象，其 <code>.current</code> 属性被初始化为传入的参数（通常是 <code>null</code>）。这个 ref 对象在整个组件的生命周期内保持不变，可以用来保存任何可变的值，不仅仅是 DOM 元素或组件实例。</li></ul></li><li>适用场景： <ul><li><code>ref</code>：主要用于类组件中，通过 ref 可以访问到子组件的实例或 DOM 元素，从而进行一些需要直接操作 DOM 或组件实例的操作，如读取输入值、设置焦点等。</li><li><code>useRef</code>：在函数组件中替代了 <code>ref</code> 的功能，并且功能更为强大。除了用于访问 DOM 元素或组件实例外，<code>useRef</code> 还可以用来保存一些不需要触发组件重新渲染的状态，如定时器、上一次的渲染结果等。此外，<code>useRef</code> 还可以用来绕过闭包问题，确保回调函数或定时器能够获取到最新的变量值。</li></ul></li><li>实现原理： <ul><li><code>ref</code>：在类组件中，<code>ref</code> 是通过实例属性来实现的。在创建组件实例时，React 会将 <code>ref</code> 属性所指向的回调函数或 <code>createRef()</code> 创建的 ref 对象存储到组件实例上，从而可以在组件内部通过 <code>this.refs</code> 或直接访问 ref 对象来访问到对应的 DOM 元素或组件实例。</li><li><code>useRef</code>：在函数组件中，由于没有实例，React 通过 <code>useRef</code> Hook 来实现 ref 的功能。<code>useRef</code> 返回一个可变的 ref 对象，这个对象在组件的整个生命周期内保持不变。当组件重新渲染时，<code>useRef</code> 会返回同一个 ref 对象，从而避免了不必要的重新创建和重新赋值。</li></ul></li><li>注意事项： <ul><li>在使用 <code>ref</code> 时，需要注意不要在渲染过程中读取或修改 ref 的值，因为这可能会导致不可预测的结果。</li><li><code>useRef</code> 返回一个可变的 ref 对象，但不应该在渲染过程中读取或修改 ref 的 <code>.current</code> 属性。通常，我们只在事件处理函数、生命周期方法或副作用（如 <code>useEffect</code>）中读取或修改 ref 的 <code>.current</code> 属性。</li></ul></li></ol><p>总结来说，<code>useRef</code> 和 <code>ref</code> 都是用于访问 DOM 元素或组件实例的工具，但它们在使用方式、适用场景以及实现原理上存在差异。在函数组件中，我们通常使用 <code>useRef</code> 来替代 <code>ref</code> 的功能。</p><h3 id="_1-10-组件之间传递状态的方式" tabindex="-1">1.10 组件之间传递状态的方式 <a class="header-anchor" href="#_1-10-组件之间传递状态的方式" aria-label="Permalink to &quot;1.10 组件之间传递状态的方式&quot;">​</a></h3><p>在React中，组件之间传递状态（或称为数据）有几种主要的方式。以下是这些方式的详细解释和归纳：</p><ol><li>父组件向子组件传递状态： <ul><li>主要通过props进行传递。父组件将需要传递的状态作为props的一部分传递给子组件，子组件通过<code>this.props</code>（在类组件中）或函数参数（在函数组件中）访问这些props。</li></ul></li><li>父组件向更深层的子组件传递状态： <ul><li>如果需要向更深层的子组件传递状态，可以通过props的逐层传递来实现，但这可能会导致代码冗余和不易于维护。</li><li>使用Context API是一种更好的选择。Context提供了一个无需显式地通过每一个层级手动传递props的方式，就能将值深入组件树的手段。在父组件中创建一个Context，将需要传递的状态存储在Context中，然后通过<code>&lt;Context.Provider&gt;</code>将状态提供给子组件，子组件可以通过<code>&lt;Context.Consumer&gt;</code>或<code>useContext</code> Hook来访问这个状态。</li></ul></li><li>子组件向父组件传递状态： <ul><li>主要通过回调函数进行传递。在父组件中定义一个回调函数，并将其作为props传递给子组件。子组件可以调用这个回调函数，并将需要传递的状态作为参数传递给它。这样，父组件就可以在回调函数中获取到子组件传递的状态。</li></ul></li><li>没有任何嵌套关系的组件之间传递状态： <ul><li>例如，兄弟组件之间的状态传递，可以通过它们共同的父组件作为中介，利用父组件向子组件传递状态的方式，再结合子组件向父组件传递状态的方式，实现兄弟组件之间的状态传递。</li><li>使用Redux、MobX等全局状态管理库也是一种常见的选择。这些库可以在应用的顶层创建一个全局状态存储，并在任何组件中访问和更新这个状态。</li></ul></li><li>传递组件本身作为参数： <ul><li>这并不直接涉及状态的传递，但也是一种在React中传递组件的方式。可以通过传递JSX元素、直接传递组件本身，或者传递一个返回组件的函数来实现。这种方式主要用于动态渲染和组件复用。</li></ul></li><li>使用Hooks（如<code>useState</code>和<code>useReducer</code>） <ul><li>Hooks是React 16.8及以后版本提供的一种新特性，用于在函数组件中添加状态和其他React特性。虽然Hooks本身并不直接涉及组件之间的状态传递，但它们提供了一种在函数组件中管理状态的方式，从而可以与上述的传递方式结合使用。</li></ul></li></ol><p>综上所述，React组件之间传递状态的方式主要包括通过props的传递、使用Context API、通过回调函数、利用全局状态管理库以及传递组件本身作为参数等方式。具体使用哪种方式取决于应用的需求和架构。</p><h3 id="_11-setstate-是同步还是异步的-setstate-做了什么" tabindex="-1">11. setState 是同步还是异步的，setState 做了什么 <a class="header-anchor" href="#_11-setstate-是同步还是异步的-setstate-做了什么" aria-label="Permalink to &quot;11. setState 是同步还是异步的，setState 做了什么&quot;">​</a></h3><p>在 React 中，<code>setState()</code> 函数通常被认为是异步的，这意味着调用<code>setState()</code> 时不会立刻改变 React 组件中 state 的值，setState 通过触发一次组件的更新来引发重绘，多次 setState 函数调用产生的效果会合并。</p><p>调用 setState 时，React 会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为和解（reconciliation）的过程。和解（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新 UI。 为此，React 将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较。</p><h3 id="_12-受控组件和非受控组件的区别" tabindex="-1">12. 受控组件和非受控组件的区别 <a class="header-anchor" href="#_12-受控组件和非受控组件的区别" aria-label="Permalink to &quot;12. 受控组件和非受控组件的区别&quot;">​</a></h3><ul><li>受控组件：由 <strong>prop 驱动</strong>。</li><li>非受控组件：由自定义组件内部的 <strong>state 驱动</strong>。</li></ul><h2 id="_2-react-拓展知识" tabindex="-1">2. React 拓展知识 <a class="header-anchor" href="#_2-react-拓展知识" aria-label="Permalink to &quot;2. React 拓展知识&quot;">​</a></h2><h3 id="_2-1-函数式编程是什么-有哪些应用场景" tabindex="-1">2.1 函数式编程是什么？有哪些应用场景？ <a class="header-anchor" href="#_2-1-函数式编程是什么-有哪些应用场景" aria-label="Permalink to &quot;2.1 函数式编程是什么？有哪些应用场景？&quot;">​</a></h3><p>函数式编程（Functional Programming，简称 FP）是一种编程范式，它将计算机程序视为数学中的函数计算，强调函数的输入输出是确定的，不会受到外部状态的影响。函数式编程一般采用无副作用、不可变数据等特性，使得代码更加模块化、可复用、易于测试和推理等。</p><p>函数式编程中的函数是一等公民，即可以像其他类型的数据一样被传递、赋值、返回等。函数式编程也强调函数的高阶抽象能力，通过组合和柯里化等技巧实现复杂的功能。</p><p>函数式编程适用于需要处理大量数据的场景，例如数据分析、机器学习、图像处理等。在这些场景中，函数式编程的无副作用、不可变数据等特性可以提高程序的性能和稳定性。函数式编程还适用于需要编写高度可复用的代码库、需要构建高层次抽象的系统等场景。</p><p>除此之外，函数式编程还可以用于实现异步编程、事件驱动编程、响应式编程等，它们都是函数式编程的应用场景。例如在 JavaScript 中，Promise 和 RxJS 都是基于函数式编程的思想实现的。</p><p>总之，函数式编程是一种强调函数抽象、模块化、不可变性等特性的编程范式，适用于处理大量数据、实现高度可复用代码库、构建高层次抽象的系统等场景。</p><h3 id="_2-2-函数式编程中的无副作用" tabindex="-1">2.2 函数式编程中的无副作用 <a class="header-anchor" href="#_2-2-函数式编程中的无副作用" aria-label="Permalink to &quot;2.2 函数式编程中的无副作用&quot;">​</a></h3><p>函数式编程的一个核心概念是无副作用（Referential Transparency），也就是函数的执行只依赖于输入参数，不会对外部环境产生影响。副作用指的是函数执行过程中对外部环境进行了修改或产生了其他可观察的行为，比如修改全局变量、写入文件、发送网络请求等。</p><p>函数式编程强调无副作用的好处在于：</p><ol><li>可靠性：由于函数的结果仅取决于输入参数，相同的输入永远得到相同的输出，不会受到外部环境的变化影响，因此更容易推断和验证函数的行为。</li><li>可测试性：函数无副作用意味着可以更容易地进行单元测试，只需关注输入和输出，而无需关心函数内部的状态变化。</li><li>可组合性：无副作用的函数更容易进行组合，通过将多个函数连接在一起，形成更复杂的功能，而不需要担心它们之间的相互影响。</li></ol><p>然而，并非所有的程序都可以完全避免副作用，因为现实世界中很多任务都需要与外部环境进行交互。在函数式编程中，通常会将具有副作用的操作封装在纯函数的边界之外，以保持主要的业务逻辑的纯洁性。</p><p>函数式编程并不是要完全消除副作用，而是通过限制和管理副作用的方式来提高程序的可靠性、可测试性和可组合性。</p><h3 id="_2-3-redux-和-mobx-和其它-react-状态管理的区别" tabindex="-1">2.3 Redux 和 Mobx 和其它 React 状态管理的区别 <a class="header-anchor" href="#_2-3-redux-和-mobx-和其它-react-状态管理的区别" aria-label="Permalink to &quot;2.3 Redux 和 Mobx 和其它 React 状态管理的区别&quot;">​</a></h3><h3 id="_2-4-react-应用的生产环境中-怎么定位到具体错误代码行数" tabindex="-1">2.4 React 应用的生产环境中，怎么定位到具体错误代码行数 <a class="header-anchor" href="#_2-4-react-应用的生产环境中-怎么定位到具体错误代码行数" aria-label="Permalink to &quot;2.4 React 应用的生产环境中，怎么定位到具体错误代码行数&quot;">​</a></h3><p>在 React 应用的生产环境中，要定位具体的错误代码行数，可以采取以下几种方法：</p><ol><li><strong>使用 Source Map</strong>： <ul><li>在构建生产版本时生成 Source Map 文件。Source Map 是一个映射文件，可以将压缩后的代码映射回原始的开发代码，包括行数、列数等信息。</li><li>当生产环境中出现错误时，浏览器会根据 Source Map 将错误定位到原始代码的行数和列数，从而帮助你准确定位问题所在。</li></ul></li><li><strong>错误边界（Error Boundary）</strong>： <ul><li>在 React 应用中使用错误边界来捕获并处理组件中的错误。你可以在错误边界的 <code>componentDidCatch</code> 方法中记录错误信息，包括错误的堆栈信息。</li><li>在错误信息中包含堆栈信息，可以帮助你定位到具体出错的组件和代码行数。</li></ul></li><li><strong>使用监控和日志工具</strong>： <ul><li>集成监控和日志工具，如 Sentry、Bugsnag 等，这些工具可以捕获前端错误，并提供详细的错误信息，包括出错的文件、行数等。</li><li>通过这些工具提供的错误报告，你可以快速定位到具体的代码行数，并了解错误发生的上下文信息。</li></ul></li><li><strong>手动添加调试信息</strong>： <ul><li>在代码中添加额外的调试信息，例如使用 <code>console.log</code> 输出变量的值或标识代码执行到了哪个阶段。</li><li>这种方法虽然相对简单，但需要手动添加代码，并且可能会影响代码的性能和可读性。</li></ul></li><li><strong>使用浏览器开发者工具</strong>： <ul><li>在浏览器的开发者工具中，可以查看 JavaScript 控制台中的错误信息，并通过点击错误信息来跳转到具体的代码行数。</li><li>这种方法适用于快速定位到错误发生的地方，但可能无法精确定位到原始的开发代码行数，特别是在代码经过压缩和混淆的情况下。</li></ul></li></ol><p>综上所述，结合使用 Source Map、错误边界、监控工具和浏览器开发者工具，可以帮助你在 React 应用的生产环境中准确定位到具体的错误代码行数。</p><h3 id="_2-5-react-应用中实现页面切换时保存数据不丢失并记忆滚动条位置" tabindex="-1">2.5 React 应用中实现页面切换时保存数据不丢失并记忆滚动条位置 <a class="header-anchor" href="#_2-5-react-应用中实现页面切换时保存数据不丢失并记忆滚动条位置" aria-label="Permalink to &quot;2.5 React 应用中实现页面切换时保存数据不丢失并记忆滚动条位置&quot;">​</a></h3><p>在 React 应用中实现页面切换时保存数据不丢失并记忆滚动条位置，可以采取以下几种优化策略，以提升用户体验并减少页面闪烁：</p><p>1、使用 React Router 中的 <code>&lt;Route&gt;</code> 组件的 <code>key</code> 属性：</p><p>在 <code>&lt;Route&gt;</code> 组件中设置唯一的 <code>key</code> 属性，使得当路由切换时，React 不会重新渲染相同的组件，而是复用已经挂载过的组件，从而保留组件的状态和数据。</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pathname</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">exact</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">component</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">Home</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pathname</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">component</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">About</span><span style="color:#89DDFF;">} /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、在组件中使用 <code>React.memo</code> 进行优化：</p><p>对于纯函数组件，可以使用 <code>React.memo</code> 进行包裹，以避免不必要的重新渲染。这样可以确保页面切换时只有必要的组件会重新渲染，减少页面闪烁。</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MemoizedComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">memo</span><span style="color:#A6ACCD;">(MyComponent)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3、使用 <code>window.sessionStorage</code> 或 <code>window.localStorage</code> 进行数据存储：</p><p>在组件卸载前将需要保存的数据存储到 <code>sessionStorage</code> 或 <code>localStorage</code> 中，在组件重新挂载时再从中恢复数据。这样可以确保数据不会在页面切换时丢失。</p><p>4、记忆滚动条位置：</p><ul><li>在页面切换时，监听 <code>window</code> 的 <code>scroll</code> 事件，将滚动条位置保存到状态或 <code>sessionStorage</code> 中。</li><li>在页面重新加载或切换回来时，从状态或 <code>sessionStorage</code> 中恢复滚动条位置，使得用户可以无缝地恢复到之前的滚动位置。</li></ul><p>5、使用 React 的 <code>useEffect</code> 钩子进行数据保存和恢复：</p><p>在组件中使用 <code>useEffect</code> 钩子监听组件的卸载和挂载事件，在卸载前将需要保存的数据存储起来，在挂载时再从存储中恢复数据。</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 在组件卸载前保存数据</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在组件重新挂载时恢复数据</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> [])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>通过以上优化策略，可以在页面切换时保持数据不丢失并记忆滚动条位置，同时减少页面闪烁，提升用户体验。</p>`,66),c=[n];function t(p,r,i,d,u,D){return s(),a("div",null,c)}const h=e(l,[["render",t]]);export{F as __pageData,h as default};
