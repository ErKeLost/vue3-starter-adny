import{r as e,o as r,c as t,a as o,b as n,N as s,d as i,e as c}from"./vendor-a8068c1e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var a=(e,r)=>{const t=e.__vccOpts||e;for(const[o,n]of r)t[o]=n;return t};var d=a({},[["render",function(o,n){const s=e("router-view");return r(),t(s)}]]);const l={},u=o({routes:[{path:"/",component:()=>{return e=()=>import("./index-64c1ccea.js"),(r=["static/js/index-64c1ccea.js","static/css/index-f347acef.css","static/js/vendor-a8068c1e.js"])&&0!==r.length?Promise.all(r.map((e=>{if((e=`./${e}`)in l)return;l[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((r,t)=>{o.addEventListener("load",r),o.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e();var e,r}}],history:n()});u.beforeEach((()=>{s.isStarted()||s.start()})),u.afterEach((()=>{s.done()}));const f=i();const p=c(d);p.use(u),p.use(f),p.mount("#app");export{a as _};
