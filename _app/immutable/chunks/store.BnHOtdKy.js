import{r as d,w as u}from"./index.60cKgXHc.js";const g=n=>(n==null?void 0:n.subscribe)instanceof Function,w=d(void 0),F=n=>(n==null?void 0:n.subscribe)instanceof Function;d(void 0);const j=(n={})=>{const o=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e)),{subscribe:a,update:r,set:i}=u(o(n)),c=t=>{r(e=>{const s=t(e);return o(s)})};return{subscribe:a,update:c,set:t=>c(()=>t),toggle:t=>{r(e=>e[t]===!0?(delete e[t],e):{...e,[t]:!0})},add:t=>{r(e=>({...e,[t]:!0}))},addAll:t=>{r(e=>({...e,...Object.fromEntries(t.map(s=>[s,!0]))}))},remove:t=>{r(e=>(delete e[t],e))},removeAll:t=>{r(e=>{for(const s of t)delete e[s];return e})},clear:()=>{i({})}}};export{w as U,F as a,g as i,j as r};