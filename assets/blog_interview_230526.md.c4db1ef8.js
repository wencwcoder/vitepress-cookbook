import{_ as e,c as t,o as a,V as l}from"./chunks/framework.35c8bad0.js";const _=JSON.parse('{"title":"面试题[HTTP]","description":"","frontmatter":{"title":"面试题[HTTP]","date":"2023-05-26T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230526.md","lastUpdated":1712063862000}'),o={name:"blog/interview/230526.md"},r=l('<h1 id="面试题-http" tabindex="-1">面试题[HTTP] <a class="header-anchor" href="#面试题-http" aria-label="Permalink to &quot;面试题[HTTP]&quot;">​</a></h1><h2 id="_1-http-基础知识" tabindex="-1">1. HTTP 基础知识 <a class="header-anchor" href="#_1-http-基础知识" aria-label="Permalink to &quot;1. HTTP 基础知识&quot;">​</a></h2><h3 id="_1-1-什么是http-它是如何工作的" tabindex="-1">1.1 什么是HTTP？它是如何工作的？ <a class="header-anchor" href="#_1-1-什么是http-它是如何工作的" aria-label="Permalink to &quot;1.1 什么是HTTP？它是如何工作的？&quot;">​</a></h3><h3 id="_1-2-http-1-0-和-http-1-1-的区别" tabindex="-1">1.2 HTTP 1.0 和 HTTP 1.1 的区别 <a class="header-anchor" href="#_1-2-http-1-0-和-http-1-1-的区别" aria-label="Permalink to &quot;1.2 HTTP 1.0 和 HTTP 1.1 的区别&quot;">​</a></h3><h3 id="_1-3-http-各个版本的区别" tabindex="-1">1.3 HTTP 各个版本的区别 <a class="header-anchor" href="#_1-3-http-各个版本的区别" aria-label="Permalink to &quot;1.3 HTTP 各个版本的区别&quot;">​</a></h3><h3 id="_1-4-http-和-https-的区别" tabindex="-1">1.4 HTTP 和 HTTPS 的区别 <a class="header-anchor" href="#_1-4-http-和-https-的区别" aria-label="Permalink to &quot;1.4 HTTP 和 HTTPS 的区别&quot;">​</a></h3><h3 id="_1-5-http-缓存" tabindex="-1">1.5 HTTP 缓存 <a class="header-anchor" href="#_1-5-http-缓存" aria-label="Permalink to &quot;1.5 HTTP 缓存&quot;">​</a></h3><h3 id="_1-6-get-和-post-的区别" tabindex="-1">1.6 get 和 post 的区别 <a class="header-anchor" href="#_1-6-get-和-post-的区别" aria-label="Permalink to &quot;1.6 get 和 post 的区别&quot;">​</a></h3><h2 id="_2-http-拓展知识" tabindex="-1">2. HTTP 拓展知识 <a class="header-anchor" href="#_2-http-拓展知识" aria-label="Permalink to &quot;2. HTTP 拓展知识&quot;">​</a></h2><h3 id="_2-1-restful-api" tabindex="-1">2.1 Restful API <a class="header-anchor" href="#_2-1-restful-api" aria-label="Permalink to &quot;2.1 Restful API&quot;">​</a></h3><h3 id="_2-2-除了-http-和-https-前端开发中还涉及到哪些通信协议" tabindex="-1">2.2 除了 HTTP 和 HTTPS，前端开发中还涉及到哪些通信协议 <a class="header-anchor" href="#_2-2-除了-http-和-https-前端开发中还涉及到哪些通信协议" aria-label="Permalink to &quot;2.2 除了 HTTP 和 HTTPS，前端开发中还涉及到哪些通信协议&quot;">​</a></h3><ol><li>WebSocket：WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。相比于传统的 HTTP 请求-响应模式，WebSocket 允许服务器主动向客户端发送数据，实现实时通信。在前端开发中，可以使用 WebSocket 协议来建立持久连接，实现实时聊天、实时数据更新等功能。</li><li>WebRTC：WebRTC（Web 实时通信）是一项基于浏览器的实时通信技术，允许在浏览器之间进行点对点的音视频通信和数据传输，而无需借助插件或其他第三方软件。WebRTC 使用了多种协议和 API，包括实时传输协议（RTP）、会话描述协议（SDP）等。前端开发者可以利用 WebRTC 实现音视频通话、屏幕共享等实时通信应用。</li><li>MQTT：MQTT（Message Queuing Telemetry Transport）是一种轻量级的发布/订阅消息传输协议。它被设计用于低带宽、不稳定网络环境下的物联网设备通信。前端开发中，可以利用 MQTT 协议实现与物联网设备的通信，获取传感器数据、控制设备等。</li><li>RESTful API：虽然 REST（Representational State Transfer）本身不是一种通信协议，但它是一种架构风格，常用于设计 Web API。RESTful API 使用标准的 HTTP 方法（如 GET、POST、PUT、DELETE）进行通信，通过请求资源的 URL 来表达操作，并使用 HTTP 状态码表示响应状态。前端开发者可以通过使用 RESTful API 与服务器进行数据交互。</li><li>FTP（File Transfer Protocol）：FTP 是一种用于在客户端和服务器之间传输文件的协议。在前端开发中，可以使用 FTP 协议来上传、下载和管理网站文件。</li><li>SSH（Secure Shell）：SSH 是一种加密的网络协议，用于远程登录到服务器并执行命令。前端开发人员可以使用 SSH 协议来通过终端或命令行界面连接到远程服务器，进行文件操作、运行程序等任务。</li><li>DNS（Domain Name System）：DNS 是一种用于将域名转换为 IP 地址的协议。在前端开发中，当用户输入一个域名时，浏览器会使用 DNS 协议将域名解析为相应的 IP 地址，以便建立与服务器的通信。</li></ol><h3 id="_2-3-cors-跨域是如何做的-从协议的角度去讲一下" tabindex="-1">2.3 CORS 跨域是如何做的？从协议的角度去讲一下 <a class="header-anchor" href="#_2-3-cors-跨域是如何做的-从协议的角度去讲一下" aria-label="Permalink to &quot;2.3 CORS 跨域是如何做的？从协议的角度去讲一下&quot;">​</a></h3><p>CORS（跨域资源共享）是一种用于解决浏览器的同源策略限制，允许在不同域名之间进行跨域请求的机制。从协议的角度来看，CORS通过<strong>HTTP头部字段</strong>进行通信。</p><p>以下是CORS的基本工作原理：</p><ol><li>简单请求：对于简单请求（例如GET、POST、HEAD等），浏览器会在实际发送请求前，自动发送一个预检请求（Preflight request）来获取服务器的许可。预检请求是一个OPTIONS方法的HTTP请求，其中包含一些额外的头部字段。</li><li>预检请求：预检请求包含了一些关键信息，如请求方法、请求头、请求的目标URL等。服务器收到预检请求后，需要进行验证并返回响应，确认是否允许跨域请求。验证的方式包括检查Origin头部字段、Access-Control-Request-Method头部字段、Access-Control-Request-Headers头部字段等。</li><li>响应处理：如果服务器确认允许跨域请求，它会在响应中返回一些特定的头部字段，以授权浏览器访问响应的内容。这些头部字段包括Access-Control-Allow-Origin、Access-Control-Allow-Methods、Access-Control-Allow-Headers等。</li><li>安全限制：浏览器会根据响应头部字段进行安全限制，只有在响应中包含了正确的头部字段，浏览器才会允许跨域请求，并将响应的内容返回给前端。</li></ol><p>需要注意的是，<strong>CORS机制只对浏览器发起的异步请求（如Ajax请求）有效</strong>，而对于直接在浏览器地址栏中输入URL的同步请求，则不会触发CORS限制。通过CORS机制，服务器可以灵活地控制哪些域名可以访问其资源，从而提高Web应用程序的安全性和可扩展性。</p><p>从协议的角度来看，CORS是通过HTTP头部字段进行通信的。具体来说，CORS使用了以下几个HTTP头部字段：</p><ol><li>Origin：表示浏览器发起请求的源地址（协议+域名+端口号），例如<a href="http://www.example.com/" target="_blank" rel="noreferrer">http://www.example.com</a>。</li><li>Access-Control-Request-Method：表示浏览器实际发送的请求方法，例如GET、POST、PUT等。</li><li>Access-Control-Request-Headers：表示浏览器实际发送的请求头部信息，例如Content-Type、Authorization等。</li><li>Access-Control-Allow-Origin：表示服务器允许请求的源地址，可以是单个域名、多个域名、或者通配符*。</li><li>Access-Control-Allow-Methods：表示服务器允许请求的方法，例如GET、POST、PUT等。</li><li>Access-Control-Allow-Headers：表示服务器允许请求的头部信息，例如Content-Type、Authorization等。</li></ol><p>当浏览器发起跨域请求时，它会自动在请求头部中添加Origin字段，告诉服务器请求的源地址。服务器在收到请求后，检查Origin字段，如果认为请求合法，则在响应头部中添加Access-Control-Allow-Origin、Access-Control-Allow-Methods和Access-Control-Allow-Headers字段，授权浏览器访问响应的内容。</p>',20),i=[r];function T(s,h,n,c,P,d){return a(),t("div",null,i)}const u=e(o,[["render",T]]);export{_ as __pageData,u as default};
