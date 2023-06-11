import{_ as e,c as a,o as t,V as i}from"./chunks/framework.35c8bad0.js";const m=JSON.parse('{"title":"面试题[性能优化]","description":"","frontmatter":{"title":"面试题[性能优化]","date":"2023-06-07T00:00:00.000Z"},"headers":[],"relativePath":"blog/interview/230607.md","lastUpdated":1686489104000}'),o={name:"blog/interview/230607.md"},l=i('<h1 id="面试题-性能优化" tabindex="-1">面试题[性能优化] <a class="header-anchor" href="#面试题-性能优化" aria-label="Permalink to &quot;面试题[性能优化]&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>在实际的业务场景下...</p></div><h2 id="_1-什么情况下会重绘和回流-常见的改善方案" tabindex="-1">1. 什么情况下会重绘和回流，常见的改善方案 <a class="header-anchor" href="#_1-什么情况下会重绘和回流-常见的改善方案" aria-label="Permalink to &quot;1. 什么情况下会重绘和回流，常见的改善方案&quot;">​</a></h2><p>浏览器请求到对应页面资源的时候，会将 HTML 解析成 DOM，把 CSS 解析成 CSSDOM，然后将 DOM 和 CSSDOM 合并就产生了 Render Tree。在有了渲染树之后，浏览器会根据流式布局模型来计算它们在页面上的大小和位置，最后将节点绘制在页面上。</p><p>那么当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变，浏览器就会重新渲染页面，这个就是浏览器的回流。常见的回流操作有：页面的首次渲染、浏览器窗口尺寸改变、部分元素尺寸或位置变化、添加或删除可见的 DOM、激活伪类、查询某些属性或调用方法（各种宽高的获取，滚动方法的执行等）。</p><p>当页面中元素样式的改变不影响它在文档流的位置时（如 color、background-color 等），这个就是重绘。</p><p><em><strong>回流必将导致重绘，重绘不一定会引起回流。回流比重绘的代价更高。</strong></em></p><p>常见的改善方案：</p><ul><li>在进行频繁操作的时候，使用节流和防抖来控制调用频率。</li><li>避免频繁操作 DOM，可以利用 DocumentFragment，来进行对应的 DOM 操作，将最后的结果添加到文档中。</li><li>灵活使用 display: none 属性，操作结束后将其显示出来，因为 display 的属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。</li><li>获取各种会引起重绘/回流的属性，尽量将其缓存起来，不要频繁的去获取。</li><li>对复杂动画采用绝对定位，使其脱离文档流，否则它会频繁的引起父元素及其后续元素的回流。</li></ul><h2 id="_2-如何优化动画" tabindex="-1">2. 如何优化动画 <a class="header-anchor" href="#_2-如何优化动画" aria-label="Permalink to &quot;2. 如何优化动画&quot;">​</a></h2><p>一般情况下，动画需要频繁的操作 DOM，就会导致页面的性能问题，我们可以对复杂的动画采用<strong>绝对定位</strong>（position 属性设置为 absolute 或者 fixed），使其脱离文档流，这样它的回流就不会影响到页面其它元素了。</p><h2 id="_3-在实际的业务场景下怎么运用缓存机制" tabindex="-1">3. 在实际的业务场景下怎么运用缓存机制 <a class="header-anchor" href="#_3-在实际的业务场景下怎么运用缓存机制" aria-label="Permalink to &quot;3. 在实际的业务场景下怎么运用缓存机制&quot;">​</a></h2><p>在实际的业务场景中，合理运用缓存机制可以提升网站的性能、减少网络请求、降低服务器负载，并提供更好的用户体验。以下是一些常见的应用场景和相应的缓存策略：</p><ol><li>静态资源缓存：对于网站的静态资源（如 CSS、JavaScript 文件、图像等），可以通过设置适当的缓存头来让浏览器缓存这些资源。使用 Cache-Control 和 Expires 字段设置较长的缓存时间，使客户端在下次访问时可以直接从缓存获取资源。</li><li>页面级缓存：对于某些不频繁变化的页面（如首页、文章详情页等），可以在服务器端设置缓存策略，使这些页面在一定时间内不会重复生成，而是直接返回缓存的 HTML。可以使用 HTTP 头部字段如 Cache-Control、Expires 和 Last-Modified 来控制页面的缓存时间和验证机制。</li><li>数据接口缓存：对于频繁被访问的数据接口，可以将其结果缓存起来，以减少数据库查询或复杂计算的次数。可以使用内存缓存、分布式缓存或缓存服务器（如 Redis）来存储这些结果，并设置合适的缓存时间或失效策略。</li><li>动态内容缓存：对于一些动态生成的内容，可以使用缓存来提高性能。例如，可以将部分页面片段或动态生成的 HTML 片段缓存起来，以减少服务器端的计算和数据库查询。可以使用类似 Fragment Caching 或缓存模板片段的技术来实现。</li><li>CDN 缓存：将静态资源部署到 CDN（内容分发网络）上，并配置合适的缓存策略，可以使这些资源更快地被用户访问，并减轻源服务器的负载。CDN 提供了全球分布的节点，能够将静态资源缓存到离用户更近的位置，提供更快的访问速度。</li></ol><p>在运用缓存机制时，需要根据具体业务需求和资源特性来选择合适的缓存策略，并进行测试和性能优化。需要注意的是，缓存可能导致数据不一致性的问题，因此在更新或修改缓存的数据时，需要及时更新缓存或采用合适的缓存失效策略，以保证数据的一致性和准确性。</p>',15),r=[l];function n(s,c,d,p,_,h){return t(),a("div",null,r)}const D=e(o,[["render",n]]);export{m as __pageData,D as default};
