import{w as a}from"./index.VMVqufi5.js";import{E as s,F as l}from"./scheduler.BWkzDb8U.js";const n="modalStore";function f(){const t=l(n);if(!t)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return t}function h(){const t=u();return s(n,t)}function u(){const{subscribe:t,set:i,update:o}=a([]);return{subscribe:t,set:i,update:o,trigger:e=>o(r=>(r.push(e),r)),close:()=>o(e=>(e.length>0&&e.shift(),e)),clear:()=>i([])}}export{f as g,h as i};
