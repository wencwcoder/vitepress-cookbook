import{_ as s,c as n,o as a,V as l}from"./chunks/framework.35c8bad0.js";const m=JSON.parse('{"title":"前端开发环境搭建","description":"","frontmatter":{"title":"前端开发环境搭建","date":"2022-07-17T00:00:00.000Z"},"headers":[],"relativePath":"blog/frontend-environment-setup.md","lastUpdated":1712586644000}'),p={name:"blog/frontend-environment-setup.md"},e=l(`<h1 id="前端开发环境搭建" tabindex="-1">前端开发环境搭建 <a class="header-anchor" href="#前端开发环境搭建" aria-label="Permalink to &quot;前端开发环境搭建&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从零开始搭建前端开发环境</p></div><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h2><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h3><p>下载：<a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">https://nodejs.org/en/download/</a></p><p>下载路径：Download Node.js v20.12.1 -- node-v20.12.1-x64.msi</p><p>配置</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、安装路径</span></span>
<span class="line"><span style="color:#A6ACCD;">D:\\Nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2、安装测试</span></span>
<span class="line"><span style="color:#A6ACCD;">node -v、npm -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3、配置 npm 的全局模块安装路径及 cache 路径</span></span>
<span class="line"><span style="color:#A6ACCD;">a、在 D:\\Nodejs 下新建文件夹：</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> node_global、node_cache</span></span>
<span class="line"><span style="color:#A6ACCD;">b、执行命令：</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> npm config set prefix &quot;D:\\Nodejs\\node_global&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> npm config set cache &quot;D:\\Nodejs\\node_cache&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">c、查看配置：</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> npm config list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">4、添加系统变量</span></span>
<span class="line"><span style="color:#A6ACCD;">我的电脑 -&gt; 右键 -&gt; 属性 -&gt;高级系统设置 -&gt; 环境变量 -&gt; 系统变量 -&gt; 新建</span></span>
<span class="line"><span style="color:#A6ACCD;">变量名：NODE_PATH</span></span>
<span class="line"><span style="color:#A6ACCD;">变量值：D:\\Nodejs\\node_global\\node_modules</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">5、安装 express 包</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install express –g</span></span>
<span class="line"><span style="color:#A6ACCD;">安装完成后到 D:\\Nodejs\\node_global\\node_modules 查看是否有该包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">6、安装 npmmirror 中国镜像站</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g cnpm --registry=https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">7、添加系统变量 path 的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">我的电脑 -&gt; 右键 -&gt; 属性 -&gt;高级系统设置 -&gt; 环境变量 -&gt; 系统变量 -&gt; path -&gt; 编辑 -&gt; 新建</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> D:\\Nodejs\\node_global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">8、检查 cnpm 是否正常</span></span>
<span class="line"><span style="color:#A6ACCD;">cnpm –v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">9、设置 npm 默认镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">默认镜像：https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#A6ACCD;">设置镜像：npm config set registry https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#A6ACCD;">获取镜像：npm get registry</span></span>
<span class="line"><span style="color:#A6ACCD;">临时设置：npm install @micro-design/cli --registry=https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h3><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><h3 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h3><p>下载：<a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">https://git-scm.com/download/win</a></p><p>下载路径：64-bit Git for Windows Setup -- Git-2.37.1-64-bit.exe</p><p>配置</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">1.</span><span style="color:#A6ACCD;"> 基本配置</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>提交规范</p><h3 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode&quot;">​</a></h3><p>下载：<a href="https://code.visualstudio.com/Download" target="_blank" rel="noreferrer">https://code.visualstudio.com/Download</a></p><p>下载路径：Windows -- VSCodeUserSetup-x64-1.87.2.exe</p><p>settings.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">workbench.iconTheme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vscode-icons</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">workbench.colorTheme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">One Dark Pro</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editor.cursorBlinking</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">expand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editor.cursorSmoothCaretAnimation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editor.tabSize</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editor.inlineSuggest.enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">files.eol</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>插件：<a href="https://marketplace.visualstudio.com/vscode" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/vscode</a></p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">韭菜盒子</span></span>
<span class="line"><span style="color:#A6ACCD;">Auto Close Tag</span></span>
<span class="line"><span style="color:#A6ACCD;">Auto Rename Tag</span></span>
<span class="line"><span style="color:#A6ACCD;">Bundle Size</span></span>
<span class="line"><span style="color:#A6ACCD;">change-case</span></span>
<span class="line"><span style="color:#A6ACCD;">Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code</span></span>
<span class="line"><span style="color:#A6ACCD;">CodeSnap</span></span>
<span class="line"><span style="color:#A6ACCD;">CSS Peek</span></span>
<span class="line"><span style="color:#A6ACCD;">DotENV</span></span>
<span class="line"><span style="color:#A6ACCD;">Draw.io Integration</span></span>
<span class="line"><span style="color:#A6ACCD;">ESLint</span></span>
<span class="line"><span style="color:#A6ACCD;">Git History</span></span>
<span class="line"><span style="color:#A6ACCD;">GitLens — Git supercharged</span></span>
<span class="line"><span style="color:#A6ACCD;">Image preview</span></span>
<span class="line"><span style="color:#A6ACCD;">JavaScript (ES6) code snippets</span></span>
<span class="line"><span style="color:#A6ACCD;">JavaScript Booster</span></span>
<span class="line"><span style="color:#A6ACCD;">Live Server</span></span>
<span class="line"><span style="color:#A6ACCD;">Mintlify Doc Writer</span></span>
<span class="line"><span style="color:#A6ACCD;">npm Intellisense</span></span>
<span class="line"><span style="color:#A6ACCD;">One Dark Pro</span></span>
<span class="line"><span style="color:#A6ACCD;">open in browser</span></span>
<span class="line"><span style="color:#A6ACCD;">Path Intellisense</span></span>
<span class="line"><span style="color:#A6ACCD;">Prettier - Code formatter</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">✘</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Settings Sync</span></span>
<span class="line"><span style="color:#A6ACCD;">Stylelint</span></span>
<span class="line"><span style="color:#A6ACCD;">Svg Preview</span></span>
<span class="line"><span style="color:#A6ACCD;">Time Master</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">✘</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> TypeScript Vue Plugin (Volar)</span></span>
<span class="line"><span style="color:#A6ACCD;">Vetur</span></span>
<span class="line"><span style="color:#A6ACCD;">vscode-icons</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue - Official</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue 3 Snippets</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">✘</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Vue Language Features (Volar)</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue VSCode Snippets</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>AI Coding</p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GitHub Copilot</span></span>
<span class="line"><span style="color:#A6ACCD;">GitHub Copilot Chat</span></span>
<span class="line"><span style="color:#A6ACCD;">Tabnine</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,25),o=[e];function r(c,t,i,b,C,D){return a(),n("div",null,o)}const A=s(p,[["render",r]]);export{m as __pageData,A as default};
