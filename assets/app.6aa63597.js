import{d as p,Q as o,a5 as i,u,q as c,k as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,ab as g,ac as P,ad as v,ae as y,af as w,ag as C,ah as R,ai as _,M as b}from"./chunks/framework.be63c0dd.js";import{t as D}from"./chunks/theme.9adb86e5.js";const E={extends:D,enhanceApp({app:e,router:a,siteData:t}){}};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(E),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function x(){const e=S(),a=O();a.provide(A,e);const t=g(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function O(){return C(T)}function S(){let e=o,a;return R(t=>{let s=_(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),b(()=>import(s),[])},n.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{x as createApp};
