function b(){}const J=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function ot(){return Object.create(null)}function T(t){t.forEach(ut)}function P(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function te(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function Tt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t){let e;return ft(t,n=>e=n)(),e}function ne(t,e,n){t.$$.on_destroy.push(ft(e,n))}function ie(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function se(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)a[o]=e.dirty[o]|s[o];return a}return e.dirty|s}return e.dirty}function re(t,e,n,i,s,a){if(s){const r=_t(e,n,i,a);t.p(r,s)}}function oe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ae(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function le(t){const e={};for(const n in t)e[n]=!0;return e}function ue(t,e,n){return t.set(n),e}function fe(t){return t&&P(t.destroy)?t.destroy:b}function _e(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const dt=typeof window<"u";let K=dt?()=>window.performance.now():()=>Date.now(),et=dt?t=>requestAnimationFrame(t):b;const M=new Set;function ht(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&et(ht)}function Q(t){let e;return M.size===0&&et(ht),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let V=!1;function Nt(){V=!0}function At(){V=!1}function St(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:St(1,s,h=>e[n[h]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const a=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);a.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<a.length&&r[c].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(r[c],f)}}function Mt(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){const e=nt("style");return Dt(mt(t),e),e.sheet}function Dt(t,e){return Mt(t.head||t,e),e.sheet}function Pt(t,e){if(V){for(Ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Ot(t,e,n){V&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function he(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function me(){return it(" ")}function pe(){return it("")}function ge(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ye(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $e(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Rt=["width","height"];function be(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Rt.indexOf(i)===-1?t[i]=e[i]:Ht(t,i,e[i])}function xe(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function we(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ve(t){return t===""?null:+t}function Bt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){gt(t);const a=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function $t(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||a.push(o.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ee(t,e,n){return $t(t,e,n,nt)}function ke(t,e,n){return $t(t,e,n,pt)}function qt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>it(e),!0)}function Te(t){return qt(t," ")}function ct(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ne(t,e){const n=ct(t,"HTML_TAG_START",0),i=ct(t,"HTML_TAG_END",n);if(n===i)return new at(void 0,e);gt(t);const s=t.splice(n,i-n+1);H(s[0]),H(s[s.length-1]);const a=s.slice(1,s.length-1);for(const r of a)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new at(a,e)}function Ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function Se(t,e){t.value=e??""}function Ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Me(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function je(t){const e=t.querySelector(":checked");return e&&e.__value}function De(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Pe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${t}_END`?(i-=1,n.push(s)):a===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class zt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=nt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class at extends zt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ot(this.t,this.n[n],e)}}function Le(t,e){return new t(e)}const U=new Map;let W=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:jt(e),rules:{}};return U.set(t,n),n}function R(t,e,n,i,s,a,r,o=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*a(m);l+=m*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Ft(f)}_${o}`,h=mt(t),{stylesheet:u,rules:d}=U.get(h)||Gt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,W+=1,_}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||It())}function It(){et(()=>{W||(U.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),U.clear())})}function Oe(t,e,n,i){if(!e)return b;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return b;const{delay:a=0,duration:r=300,easing:o=J,start:c=K()+a,end:l=c+r,tick:f=b,css:_}=n(t,{from:e,to:s},i);let h=!0,u=!1,d;function p(){_&&(d=R(t,0,1,r,a,o,_)),a||(u=!0)}function m(){_&&B(t,d),h=!1}return Q(g=>{if(!u&&g>=c&&(u=!0),u&&g>=l&&(f(1,0),m()),!h)return!1;if(u){const x=g-c,$=0+1*o(x/r);f($,1-$)}return!0}),p(),f(0,1),m}function He(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ut(t,s)}}function Ut(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function O(t){q=t}function A(){if(!q)throw new Error("Function called outside component initialization");return q}function Re(t){A().$$.before_update.push(t)}function Be(t){A().$$.on_mount.push(t)}function qe(t){A().$$.after_update.push(t)}function ze(t){A().$$.on_destroy.push(t)}function Fe(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const a=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,a)}),!a.defaultPrevented}return!0}}function Ge(t,e){return A().$$.context.set(t,e),e}function Ie(t){return A().$$.context.get(t)}function Ue(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],lt=[];let j=[];const Z=[],xt=Promise.resolve();let tt=!1;function wt(){tt||(tt=!0,xt.then(vt))}function We(){return wt(),xt}function D(t){j.push(t)}function Je(t){Z.push(t)}const Y=new Set;let S=0;function vt(){if(S!==0)return;const t=q;do{try{for(;S<C.length;){const e=C[S];S++,O(e),Wt(e.$$)}}catch(e){throw C.length=0,S=0,e}for(O(null),C.length=0,S=0;lt.length;)lt.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];Y.has(n)||(Y.add(n),n())}j.length=0}while(C.length);for(;Z.length;)Z.pop()();tt=!1,Y.clear(),O(t)}function Wt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Jt(t){const e=[],n=[];j.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),j=e}let L;function st(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function N(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const I=new Set;let k;function Ke(){k={r:0,c:[],p:k}}function Qe(){k.r||T(k.c),k=k.p}function Et(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(I.has(t))return;I.add(t),k.c.push(()=>{I.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt={duration:0};function Ve(t,e,n){const i={direction:"in"};let s=e(t,n,i),a=!1,r,o,c=0;function l(){r&&B(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=J,tick:p=b,css:m}=s||rt;m&&(r=R(t,0,1,u,h,d,m,c++)),p(0,1);const g=K()+h,x=g+u;o&&o.abort(),a=!0,D(()=>N(t,!0,"start")),o=Q($=>{if(a){if($>=x)return p(1,0),N(t,!0,"end"),l(),a=!1;if($>=g){const w=d(($-g)/u);p(w,1-w)}}return a})}let _=!1;return{start(){_||(_=!0,B(t),P(s)?(s=s(i),st().then(f)):f())},invalidate(){_=!1},end(){a&&(l(),a=!1)}}}function Xe(t,e,n){const i={direction:"out"};let s=e(t,n,i),a=!0,r;const o=k;o.r+=1;function c(){const{delay:l=0,duration:f=300,easing:_=J,tick:h=b,css:u}=s||rt;u&&(r=R(t,1,0,f,l,_,u));const d=K()+l,p=d+f;D(()=>N(t,!1,"start")),Q(m=>{if(a){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||T(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return a})}return P(s)?st().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),a&&(r&&B(t,r),a=!1)}}}function Ye(t,e,n,i){const s={direction:"both"};let a=e(t,n,s),r=i?0:1,o=null,c=null,l=null;function f(){l&&B(t,l)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=J,tick:g=b,css:x}=a||rt,$={start:K()+d,b:u};u||($.group=k,k.r+=1),o||c?c=$:(x&&(f(),l=R(t,r,u,p,d,m,x)),u&&g(0,1),o=_($,p),D(()=>N(t,u,"start")),Q(w=>{if(c&&w>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),x&&(f(),l=R(t,r,o.b,o.duration,0,m,a.css))),o){if(w>=o.end)g(r=o.b,1-r),N(t,o.b,"end"),c||(o.b?f():--o.group.r||T(o.group.c)),o=null;else if(w>=o.start){const z=w-o.start;r=o.a+o.d*m(z/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){P(a)?st().then(()=>{a=a(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Ze(t,e){t.d(1),e.delete(t.key)}function Qt(t,e){Kt(t,1,1,()=>{e.delete(t.key)})}function tn(t,e){t.f(),Qt(t,e)}function en(t,e,n,i,s,a,r,o,c,l,f,_){let h=t.length,u=a.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,x=new Map,$=[];for(d=u;d--;){const y=_(s,a,d),v=n(y);let E=r.get(v);E?i&&$.push(()=>E.p(y,e)):(E=l(v,y),E.c()),g.set(v,m[d]=E),v in p&&x.set(v,Math.abs(d-p[v]))}const w=new Set,z=new Set;function X(y){Et(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],v=t[h-1],E=y.key,F=v.key;y===v?(f=y.first,h--,u--):g.has(F)?!r.has(E)||w.has(E)?X(y):z.has(F)?h--:x.get(E)>x.get(F)?(z.add(E),X(y)):(w.add(F),h--):(c(v,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,r)}for(;u;)X(m[u-1]);return T($),m}function nn(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const r=t[a],o=e[a];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[a]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function sn(t){return typeof t=="object"&&t!==null?t:{}}function rn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function on(t){t&&t.c()}function cn(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(ut).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),a.forEach(D)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(Jt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(C.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function an(t,e,n,i,s,a,r,o=[-1]){const c=q;O(t);const l=t.$$={fragment:null,ctx:[],props:a,update:b,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ot(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&Yt(t,_)),h}):[],l.update(),f=!0,T(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Nt();const _=Bt(e.target);l.fragment&&l.fragment.l(_),_.forEach(H)}else l.fragment&&l.fragment.c();e.intro&&Et(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),At(),vt()}O(c)}class ln{$destroy(){Xt(this,1),this.$destroy=b}$on(e,n){if(!P(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,Vt as A,Xt as B,Ge as C,Ie as D,ie as E,Pt as F,re as G,oe as H,se as I,kt as J,ce as K,we as L,be as M,ge as N,nn as O,T as P,ae as Q,le as R,ln as S,Ue as T,at as U,pt as V,Pe as W,Ne as X,ke as Y,b as Z,ne as _,me as a,he as a0,De as a1,D as a2,Ye as a3,Fe as a4,ze as a5,rn as a6,ye as a7,Je as a8,Se as a9,fe as aa,Re as ab,$e as ac,P as ad,xe as ae,Me as af,je as ag,ve as ah,sn as ai,Ve as aj,Xe as ak,ft as al,en as am,tn as an,He as ao,Ut as ap,Oe as aq,te as ar,de as as,ee as at,Ze as au,Qt as av,J as aw,_e as ax,Ot as b,Te as c,Kt as d,pe as e,Qe as f,Et as g,H as h,an as i,qe as j,nt as k,Ee as l,Bt as m,Ht as n,Be as o,Ce as p,it as q,qt as r,Zt as s,We as t,Ae as u,Ke as v,lt as w,Le as x,on as y,cn as z};
