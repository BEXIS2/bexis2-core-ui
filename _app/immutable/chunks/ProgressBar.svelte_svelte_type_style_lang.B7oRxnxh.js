import{w,r as M}from"./index.CJqQti0J.js";import{Z as S}from"./scheduler.D2ilrXRr.js";const i={};function h(e){return e==="local"?localStorage:sessionStorage}function l(e,t,s){const o=JSON,m="local";function u(a,c){h(m).setItem(a,o.stringify(c))}if(!i[e]){const a=w(t,r=>{const n=h(m).getItem(e);n&&r(o.parse(n));{const g=d=>{d.key===e&&r(d.newValue?o.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:c,set:f}=a;i[e]={set(r){u(e,r),f(r)},update(r){const n=r(S(a));u(e,n),f(n)},subscribe:c}}return i[e]}const L=l("modeOsPrefers",!1),P=l("modeUserPrefers",void 0),E=l("modeCurrent",!1);function b(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return L.set(e),e}function I(e){P.set(e)}function O(e){const t=document.documentElement.classList,s="dark";e===!0?t.remove(s):t.add(s),E.set(e)}function R(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;t||s&&o?e.add("dark"):e.remove("dark")}const p="(prefers-reduced-motion: reduce)";function U(){return window.matchMedia(p).matches}const x=M(U(),e=>{{const t=o=>{e(o.matches)},s=window.matchMedia(p);return s.addEventListener("change",t),()=>{s.removeEventListener("change",t)}}});export{O as a,I as b,b as g,E as m,x as p,R as s};
