function E(){}const gt=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Y(){return Object.create(null)}function k(t){t.forEach(it)}function F(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function st(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t){let e;return st(t,n=>e=n)(),e}function Yt(t,e,n){t.$$.on_destroy.push(st(e,n))}function Zt(t,e,n,i){if(t){const s=rt(t,e,n,i);return t[0](s)}}function rt(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,l){if(s){const r=rt(e,n,i,l);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function re(t){const e={};for(const n in t)e[n]=!0;return e}function oe(t,e,n){return t.set(n),e}function ce(t){return t&&F(t.destroy)?t.destroy:E}const ot=typeof window<"u";let xt=ot?()=>window.performance.now():()=>Date.now(),Q=ot?t=>requestAnimationFrame(t):E;const S=new Set;function ct(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Q(ct)}function wt(t){let e;return S.size===0&&Q(ct),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let G=!1;function vt(){G=!0}function Et(){G=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:kt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function Tt(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=V("style");return Mt(lt(t),e),e.sheet}function Mt(t,e){return Tt(t.head||t,e),e.sheet}function St(t,e){if(G){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){t.insertBefore(e,n||null)}function Ct(t,e,n){G&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function ae(){return X(" ")}function ue(){return X("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _e(t){return function(e){return e.preventDefault(),t.call(this,e)}}function de(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Lt=["width","height"];function he(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Lt.indexOf(i)===-1?t[i]=e[i]:Pt(t,i,e[i])}function me(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function pe(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ye(t){return t===""?null:+t}function Ot(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){ut(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function _t(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ge(t,e,n){return _t(t,e,n,V)}function $e(t,e,n){return _t(t,e,n,at)}function Dt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function be(t){return Dt(t," ")}function Z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function xe(t,e){const n=Z(t,"HTML_TAG_START",0),i=Z(t,"HTML_TAG_END",n);if(n===i)return new tt(void 0,e);ut(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new tt(l,e)}function we(t,e){e=""+e,t.data!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function Ee(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ke(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ne(t){const e=t.querySelector(":checked");return e&&e.__value}function Te(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class Ht{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=at(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class tt extends Ht{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}}function Ae(t,e){return new t(e)}const B=new Map;let q=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:At(e),rules:{}};return B.set(t,n),n}function et(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);a+=y*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Rt(f)}_${o}`,h=lt(t),{stylesheet:u,rules:d}=B.get(h)||Bt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,q+=1,_}function qt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||zt())}function zt(){Q(()=>{q||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),B.clear())})}let O;function P(t){O=t}function N(){if(!O)throw new Error("Function called outside component initialization");return O}function Me(t){N().$$.before_update.push(t)}function Se(t){N().$$.on_mount.push(t)}function je(t){N().$$.after_update.push(t)}function Ce(t){N().$$.on_destroy.push(t)}function Pe(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=dt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Le(t,e){return N().$$.context.set(t,e),e}function Oe(t){return N().$$.context.get(t)}function De(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],nt=[];let j=[];const J=[],ht=Promise.resolve();let K=!1;function mt(){K||(K=!0,ht.then(pt))}function He(){return mt(),ht}function z(t){j.push(t)}function Re(t){J.push(t)}const U=new Set;let A=0;function pt(){if(A!==0)return;const t=O;do{try{for(;A<M.length;){const e=M[A];A++,P(e),Ft(e.$$)}}catch(e){throw M.length=0,A=0,e}for(P(null),M.length=0,A=0;nt.length;)nt.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];U.has(n)||(U.add(n),n())}j.length=0}while(M.length);for(;J.length;)J.pop()();K=!1,U.clear(),P(t)}function Ft(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Gt(t){const e=[],n=[];j.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),j=e}let C;function It(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function W(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const R=new Set;let x;function Be(){x={r:0,c:[],p:x}}function qe(){x.r||k(x.c),x=x.p}function yt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Ut(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),x.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Wt={duration:0};function ze(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&qt(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:y=gt,tick:g=E,css:w}=l||Wt,T={start:xt()+d,b:u};u||(T.group=x,x.r+=1),o||c?c=T:(w&&(f(),a=et(t,r,u,p,d,y,w)),u&&g(0,1),o=_(T,p),z(()=>W(t,u,"start")),wt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,W(t,o.b,"start"),w&&(f(),a=et(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),W(t,o.b,"end"),c||(o.b?f():--o.group.r||k(o.group.c)),o=null;else if(v>=o.start){const D=v-o.start;r=o.a+o.d*y(D/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){F(l)?It().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Fe(t,e){t.d(1),e.delete(t.key)}function Ge(t,e){Ut(t,1,1,()=>{e.delete(t.key)})}function Ie(t,e,n,i,s,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,w=new Map,T=[];for(d=u;d--;){const m=_(s,l,d),$=n(m);let b=r.get($);b?i&&T.push(()=>b.p(m,e)):(b=a($,m),b.c()),g.set($,y[d]=b),$ in p&&w.set($,Math.abs(d-p[$]))}const v=new Set,D=new Set;function I(m){yt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,u--}for(;h&&u;){const m=y[u-1],$=t[h-1],b=m.key,H=$.key;m===$?(f=m.first,h--,u--):g.has(H)?!r.has(b)||v.has(b)?I(m):D.has(H)?h--:w.get(b)>w.get(H)?(D.add(b),I(m)):(v.add(H),h--):(c($,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;u;)I(y[u-1]);return k(T),y}function Ue(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function We(t){return typeof t=="object"&&t!==null?t:{}}function Je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ke(t){t&&t.c()}function Qe(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(it).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),l.forEach(z)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(Gt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(M.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ve(t,e,n,i,s,l,r,o=[-1]){const c=O;P(t);const a=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Y(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Qt(t,_)),h}):[],a.update(),f=!0,k(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){vt();const _=Ot(e.target);a.fragment&&a.fragment.l(_),_.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),Et(),pt()}P(c)}class Xe{$destroy(){Kt(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Te as $,Jt as A,Kt as B,Zt as C,St as D,ee as E,ne as F,te as G,Le as H,$t as I,ie as J,pe as K,he as L,fe as M,Ue as N,k as O,se as P,re as Q,Oe as R,Xe as S,De as T,le as U,Yt as V,E as W,gt as X,Ce as Y,z as Z,ze as _,ae as a,Pe as a0,ve as a1,ye as a2,Je as a3,Re as a4,We as a5,_e as a6,ke as a7,Ne as a8,me as a9,at as aa,$e as ab,ce as ac,Me as ad,de as ae,F as af,tt as ag,xe as ah,Ie as ai,Fe as aj,st as ak,oe as al,Ge as am,Xt as an,Ct as b,be as c,Ut as d,ue as e,qe as f,yt as g,L as h,Ve as i,je as j,V as k,ge as l,Ot as m,Pt as n,Se as o,Ee as p,X as q,Dt as r,Vt as s,He as t,we as u,Be as v,nt as w,Ae as x,Ke as y,Qe as z};