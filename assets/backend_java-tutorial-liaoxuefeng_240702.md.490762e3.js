import{_ as s,c as n,o as a,V as l}from"./chunks/framework.35c8bad0.js";const A=JSON.parse('{"title":"面向对象编程","description":"","frontmatter":{"title":"面向对象编程","date":"2024-07-02T00:00:00.000Z"},"headers":[],"relativePath":"backend/java-tutorial-liaoxuefeng/240702.md","lastUpdated":1720191748000}'),e={name:"backend/java-tutorial-liaoxuefeng/240702.md"},p=l(`<h1 id="面向对象编程" tabindex="-1">面向对象编程 <a class="header-anchor" href="#面向对象编程" aria-label="Permalink to &quot;面向对象编程&quot;">​</a></h1><h2 id="_1-前言" tabindex="-1">1. 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1. 前言&quot;">​</a></h2><p>Java是一种面向对象的编程语言。面向对象编程，英文是Object-Oriented Programming，简称OOP。那什么是面向对象编程？</p><p>和面向对象编程不同的，是面向过程编程。面向过程编程，是把模型分解成一步一步的过程。比如，老板告诉你，要编写一个TODO任务，必须按照以下步骤一步一步来：1、读取文件；2、编写TODO；3、保存文件。</p><p>而面向对象编程，顾名思义，你得首先有个对象。有了对象后，就可以和对象进行互动：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">GirlFriend</span><span style="color:#A6ACCD;"> gf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GirlFriend</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">gf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">gf</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flowers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>因此，<strong>面向对象编程，是一种通过对象的方式，把现实世界映射到计算机模型的一种编程方法</strong>。</p><h2 id="_2-面向对象基础" tabindex="-1">2. 面向对象基础 <a class="header-anchor" href="#_2-面向对象基础" aria-label="Permalink to &quot;2. 面向对象基础&quot;">​</a></h2><p>现实世界中，我们定义了“人”这种抽象概念，而具体的人则是“小明”、“小红”、“小军”等一个个具体的人。所以，“人”可以定义为一个<strong>类（class）</strong>，而具体的人则是<strong>实例（instance）</strong>：</p><table><thead><tr><th style="text-align:left;">现实世界</th><th style="text-align:left;">计算机模型</th><th style="text-align:left;">Java代码</th></tr></thead><tbody><tr><td style="text-align:left;">人</td><td style="text-align:left;">类 / class</td><td style="text-align:left;">class Person</td></tr><tr><td style="text-align:left;">小明</td><td style="text-align:left;">实例 / ming</td><td style="text-align:left;">Person ming = new Person()</td></tr><tr><td style="text-align:left;">小红</td><td style="text-align:left;">实例 / hong</td><td style="text-align:left;">Person hong = new Person()</td></tr><tr><td style="text-align:left;">小军</td><td style="text-align:left;">实例 / jun</td><td style="text-align:left;">Person jun = new Person()</td></tr></tbody></table><h3 id="class和instance" tabindex="-1">class和instance <a class="header-anchor" href="#class和instance" aria-label="Permalink to &quot;class和instance&quot;">​</a></h3><p>所以，只要理解了class和instance的概念，基本上就明白了什么是面向对象编程。</p><ul><li>class是一种<strong>对象模版</strong>，它定义了如何创建实例，因此，class本身就是一种数据类型。</li><li>而instance是<strong>对象实例</strong>，instance是根据class创建的实例，可以创建多个instance，每个instance类型相同，但各自属性可能不相同。</li></ul><h3 id="定义class" tabindex="-1">定义class <a class="header-anchor" href="#定义class" aria-label="Permalink to &quot;定义class&quot;">​</a></h3><p>在Java中，创建一个类，例如，给这个类命名为<code>Person</code>，就是定义一个<code>class</code>：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>一个<code>class</code>可以包含多个<strong>字段（<code>field</code>）</strong>，字段用来描述一个类的特征。上面的<code>Person</code>类，我们定义了两个字段，一个是<code>String</code>类型的字段，命名为<code>name</code>，一个是<code>int</code>类型的字段，命名为<code>age</code>。因此，<strong>通过<code>class</code>，把一组数据汇集到一个对象上，实现了数据封装</strong>。</p><p><code>public</code>是用来修饰字段的，它表示这个字段可以被外部访问。</p><h3 id="创建instance" tabindex="-1">创建instance <a class="header-anchor" href="#创建instance" aria-label="Permalink to &quot;创建instance&quot;">​</a></h3><p>定义了class，只是定义了对象模版，而要根据对象模版创建出真正的对象实例，必须用new操作符。</p><p>new操作符可以创建一个实例，然后，我们需要定义一个引用类型的变量来指向这个实例：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> ming </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上述代码创建了一个Person类型的实例，并通过变量<code>ming</code>指向它。</p><p>注意区分<code>Person ming</code>是定义<code>Person</code>类型的变量<code>ming</code>，而<code>new Person()</code>是创建<code>Person</code>实例。</p><p>有了指向这个实例的变量，我们就可以通过这个变量来操作实例。访问实例变量可以用<code>变量.字段</code>，例如：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ming</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Xiao Ming</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 对字段name赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">ming</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 对字段age赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ming</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 访问字段name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> hong </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">hong</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Xiao Hong</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">hong</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">上述两个变量分别指向两个不同的实例，它们在内存中的结构如下：</span></span>
<span class="line"><span style="color:#A6ACCD;">			┌──────────────────┐</span></span>
<span class="line"><span style="color:#A6ACCD;">ming ──────&gt;│Person instance   │</span></span>
<span class="line"><span style="color:#A6ACCD;">            ├──────────────────┤</span></span>
<span class="line"><span style="color:#A6ACCD;">            │name = &quot;Xiao Ming&quot;│</span></span>
<span class="line"><span style="color:#A6ACCD;">            │age = 12          │</span></span>
<span class="line"><span style="color:#A6ACCD;">            └──────────────────┘</span></span>
<span class="line"><span style="color:#A6ACCD;">            ┌──────────────────┐</span></span>
<span class="line"><span style="color:#A6ACCD;">hong ──────&gt;│Person instance   │</span></span>
<span class="line"><span style="color:#A6ACCD;">            ├──────────────────┤</span></span>
<span class="line"><span style="color:#A6ACCD;">            │name = &quot;Xiao Hong&quot;│</span></span>
<span class="line"><span style="color:#A6ACCD;">            │age = 15          │</span></span>
<span class="line"><span style="color:#A6ACCD;">            └──────────────────┘</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>两个<code>instance</code>拥有<code>class</code>定义的<code>name</code>和<code>age</code>字段，且各自都有一份独立的数据，互不干扰。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>一个Java源文件可以包含多个类的定义，但只能定义一个public类，且public类名必须与文件名一致。如果要定义多个public类，必须拆到多个Java源文件中。</p></div>`,29),o=[p];function t(c,r,i,d,y,D){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{A as __pageData,u as default};
