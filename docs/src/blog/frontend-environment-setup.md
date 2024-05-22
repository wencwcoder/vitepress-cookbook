---
title: 前端开发环境搭建
date: 2022-07-17
---

# 前端开发环境搭建

::: tip
从零开始搭建前端开发环境
:::



## 前置条件

### Node.js

下载：https://nodejs.org/en/download/

下载路径：Download Node.js v20.12.1 -- node-v20.12.1-x64.msi

配置

```markdown
1、安装路径
D:\Nodejs

2、安装测试
node -v、npm -v

3、配置 npm 的全局模块安装路径及 cache 路径
a、在 D:\Nodejs 下新建文件夹：
- node_global、node_cache
b、执行命令：
- npm config set prefix "D:\Nodejs\node_global"
- npm config set cache "D:\Nodejs\node_cache"
c、查看配置：
- npm config list

4、添加系统变量
我的电脑 -> 右键 -> 属性 ->高级系统设置 -> 环境变量 -> 系统变量 -> 新建
变量名：NODE_PATH
变量值：D:\Nodejs\node_global\node_modules

5、安装 express 包
npm install express –g
安装完成后到 D:\Nodejs\node_global\node_modules 查看是否有该包

6、添加系统变量 path 的内容
我的电脑 -> 右键 -> 属性 ->高级系统设置 -> 环境变量 -> 系统变量 -> path -> 编辑 -> 新建
- D:\Nodejs\node_global

7、安装 npmmirror 中国镜像站
npm install -g cnpm --registry=https://registry.npmmirror.com

8、检查 cnpm 是否正常
cnpm –v

9、设置 npm 默认镜像
默认镜像：https://registry.npmjs.org/
设置镜像：npm config set registry https://registry.npmmirror.com
获取镜像：npm get registry
临时设置：npm install @micro-design/cli --registry=https://registry.npmmirror.com
```



### 包管理工具





## 工具

### Git

下载：[https://git-scm.com/download/win](https://git-scm.com/download/win)

下载路径：64-bit Git for Windows Setup -- Git-2.37.1-64-bit.exe

配置

```markdown
1. 基本配置
```

提交规范



### VSCode

下载：[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

下载路径：Windows -- VSCodeUserSetup-x64-1.87.2.exe

settings.json

```json
{
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorTheme": "One Dark Pro",
    "editor.cursorBlinking": "expand",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.tabSize": 2,
    "editor.inlineSuggest.enabled": true,
    "files.eol": "\n"
}
```

插件：https://marketplace.visualstudio.com/vscode

```markdown
韭菜盒子
Auto Close Tag
Auto Rename Tag
Bundle Size
change-case
Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
CodeSnap
CSS Peek
DotENV
Draw.io Integration
ESLint
Git History
GitLens — Git supercharged
Image preview
JavaScript (ES6) code snippets
JavaScript Booster
Live Server
Mintlify Doc Writer
npm Intellisense
One Dark Pro
open in browser
Path Intellisense
Prettier - Code formatter
[✘] Settings Sync
Stylelint
Svg Preview
Time Master
[✘] TypeScript Vue Plugin (Volar)
Vetur
vscode-icons
Vue - Official
Vue 3 Snippets
[✘] Vue Language Features (Volar)
Vue VSCode Snippets
```

AI Coding

```markdown
Baidu Comate
GitHub Copilot
GitHub Copilot Chat
Tabnine
```

