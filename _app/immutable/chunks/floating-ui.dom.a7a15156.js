import{w as Pt}from"./index.ed81c708.js";import{at as Ft}from"./index.79ee095d.js";const $t=Pt(void 0);function ae(t,e){const{computePosition:n,autoUpdate:o,offset:i,shift:s,flip:r,arrow:c,size:l,autoPlacement:a,hide:g,inline:p}=Ft($t),m={open:!1,autoUpdateCleanup:()=>{}},f=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let d;const h="https://www.skeleton.dev/utilities/popups";let u,w;function x(){u=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),w=u.querySelector(".arrow")??document.createElement("div")}x();function v(){var C,T,A,V,R,k,S,P;if(!u)throw new Error(`The data-popup="${e.target}" element was not found. ${h}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${h}`);if(!i)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${h}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${h}`);if(!r)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${h}`);if(!c)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${h}`);const b=[];l&&b.push(l((C=e.middleware)==null?void 0:C.size)),a&&b.push(a((T=e.middleware)==null?void 0:T.autoPlacement)),g&&b.push(g((A=e.middleware)==null?void 0:A.hide)),p&&b.push(p((V=e.middleware)==null?void 0:V.inline)),n(t,u,{placement:e.placement??"bottom",middleware:[i(((R=e.middleware)==null?void 0:R.offset)??8),s(((k=e.middleware)==null?void 0:k.shift)??{padding:8}),r((S=e.middleware)==null?void 0:S.flip),c(((P=e.middleware)==null?void 0:P.arrow)??{element:w||null}),...b]}).then(({x:it,y:Tt,placement:kt,middlewareData:St})=>{if(Object.assign(u.style,{left:`${it}px`,top:`${Tt}px`}),w){const{x:dt,y:mt}=St.arrow,Dt={top:"bottom",right:"left",bottom:"top",left:"right"}[kt.split("-")[0]];Object.assign(w.style,{left:dt!=null?`${dt}px`:"",top:mt!=null?`${mt}px`:"",right:"",bottom:"",[Dt]:"-4px"})}})}function E(){u&&(m.open=!0,e.state&&e.state({state:m.open}),v(),u.style.display="block",u.style.opacity="1",u.style.pointerEvents="auto",u.removeAttribute("inert"),m.autoUpdateCleanup=o(t,u,v),d=Array.from(u==null?void 0:u.querySelectorAll(f)))}function y(b){if(!u)return;const C=parseFloat(window.getComputedStyle(u).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{m.open=!1,e.state&&e.state({state:m.open}),u.style.opacity="0",u.setAttribute("inert",""),m.autoUpdateCleanup&&m.autoUpdateCleanup(),b&&b()},C)}function L(){m.open===!1?E():y()}function O(b){if(m.open===!1||t.contains(b.target))return;if(u&&u.contains(b.target)===!1){y();return}const C=e.closeQuery===void 0?"a[href], button":e.closeQuery,T=u==null?void 0:u.querySelectorAll(C);T==null||T.forEach(A=>{A.contains(b.target)&&y()})}const $=b=>{if(m.open===!1)return;const C=b.key;if(C==="Escape"){b.preventDefault(),t.focus(),y();return}d=Array.from(u==null?void 0:u.querySelectorAll(f)),m.open&&document.activeElement===t&&(C==="ArrowDown"||C==="Tab")&&f.length>0&&d.length>0&&(b.preventDefault(),d[0].focus())};switch(e.event){case"click":t.addEventListener("click",L,!0),window.addEventListener("click",O,!0);break;case"hover":t.addEventListener("mouseover",E,!0),t.addEventListener("mouseleave",()=>y(),!0);break;case"focus-blur":t.addEventListener("focus",L,!0),t.addEventListener("blur",()=>y(),!0);break;case"focus-click":t.addEventListener("focus",E,!0),window.addEventListener("click",O,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${h}`)}return window.addEventListener("keydown",$,!0),v(),{update(b){y(()=>{e=b,v(),x()})},destroy(){t.removeEventListener("click",L,!0),t.removeEventListener("mouseover",E,!0),t.removeEventListener("mouseleave",()=>y(),!0),t.removeEventListener("focus",L,!0),t.removeEventListener("focus",E,!0),t.removeEventListener("blur",()=>y(),!0),window.removeEventListener("click",O,!0),window.removeEventListener("keydown",$,!0)}}}function fe(t,e){const{transition:n,params:o,enabled:i}=e;return i?n(t,o):"duration"in o?n(t,{duration:0}):{duration:0}}const _=Math.min,U=Math.max,J=Math.round,G=Math.floor,H=t=>({x:t,y:t}),Mt={left:"right",right:"left",bottom:"top",top:"bottom"},Wt={start:"end",end:"start"};function rt(t,e,n){return U(t,_(e,n))}function N(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function ct(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(z(t))?"y":"x"}function lt(t){return yt(et(t))}function Bt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=lt(t),s=ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=Z(r)),[r,Z(r)]}function Vt(t){const e=Z(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Wt[e])}function Ht(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function It(t,e,n,o){const i=Q(t);let s=Ht(z(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(st)))),s}function Z(t){return t.replace(/left|right|bottom|top/g,e=>Mt[e])}function Ut(t){return{top:0,right:0,bottom:0,left:0,...t}}function xt(t){return typeof t!="number"?Ut(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function pt(t,e,n){let{reference:o,floating:i}=t;const s=et(e),r=lt(e),c=ct(r),l=z(e),a=s==="y",g=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:g,y:o.y-i.height};break;case"bottom":f={x:g,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:p};break;case"left":f={x:o.x-i.width,y:p};break;default:f={x:o.x,y:o.y}}switch(Q(e)){case"start":f[r]-=m*(n&&a?-1:1);break;case"end":f[r]+=m*(n&&a?-1:1);break}return f}const zt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:p}=pt(a,o,l),m=o,f={},d=0;for(let h=0;h<c.length;h++){const{name:u,fn:w}=c[h],{x,y:v,data:E,reset:y}=await w({x:g,y:p,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(g=x??g,p=v??p,f={...f,[u]:{...f[u],...E}},y&&d<=50){d++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(a=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:g,y:p}=pt(a,m,l)),h=-1;continue}}return{x:g,y:p,placement:m,strategy:i,middlewareData:f}};async function vt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:g="viewport",elementContext:p="floating",altBoundary:m=!1,padding:f=0}=N(e,t),d=xt(f),u=c[m?p==="floating"?"reference":"floating":p],w=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(u)))==null||n?u:u.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:g,strategy:l})),x=p==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},y=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:v,strategy:l}):x);return{top:(w.top-y.top+d.top)/E.y,bottom:(y.bottom-w.bottom+d.bottom)/E.y,left:(w.left-y.left+d.left)/E.x,right:(y.right-w.right+d.right)/E.x}}const ue=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:g=0}=N(t,e)||{};if(a==null)return{};const p=xt(g),m={x:n,y:o},f=lt(i),d=ct(f),h=await r.getDimensions(a),u=f==="y",w=u?"top":"left",x=u?"bottom":"right",v=u?"clientHeight":"clientWidth",E=s.reference[d]+s.reference[f]-m[f]-s.floating[d],y=m[f]-s.reference[f],L=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let O=L?L[v]:0;(!O||!await(r.isElement==null?void 0:r.isElement(L)))&&(O=c.floating[v]||s.floating[d]);const $=E/2-y/2,b=O/2-h[d]/2-1,C=_(p[w],b),T=_(p[x],b),A=C,V=O-h[d]-T,R=O/2-h[d]/2+$,k=rt(A,R,V),S=!l.arrow&&Q(i)!=null&&R!=k&&s.reference[d]/2-(R<A?C:T)-h[d]/2<0,P=S?R<A?R-A:R-V:0;return{[f]:m[f]+P,data:{[f]:k,centerOffset:R-k-P,...S&&{alignmentOffset:P}},reset:S}}}),de=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:g=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:h=!0,...u}=N(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=z(i),x=z(c)===c,v=await(l.isRTL==null?void 0:l.isRTL(a.floating)),E=m||(x||!h?[Z(c)]:Vt(c));!m&&d!=="none"&&E.push(...It(c,h,d,v));const y=[c,...E],L=await vt(e,u),O=[];let $=((o=s.flip)==null?void 0:o.overflows)||[];if(g&&O.push(L[w]),p){const A=Bt(i,r,v);O.push(L[A[0]],L[A[1]])}if($=[...$,{placement:i,overflows:O}],!O.every(A=>A<=0)){var b,C;const A=(((b=s.flip)==null?void 0:b.index)||0)+1,V=y[A];if(V)return{data:{index:A,overflows:$},reset:{placement:V}};let R=(C=$.filter(k=>k.overflows[0]<=0).sort((k,S)=>k.overflows[1]-S.overflows[1])[0])==null?void 0:C.placement;if(!R)switch(f){case"bestFit":{var T;const k=(T=$.map(S=>[S.placement,S.overflows.filter(P=>P>0).reduce((P,it)=>P+it,0)]).sort((S,P)=>S[1]-P[1])[0])==null?void 0:T[0];k&&(R=k);break}case"initialPlacement":R=c;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function jt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=z(n),c=Q(n),l=et(n)==="y",a=["left","top"].includes(r)?-1:1,g=s&&l?-1:1,p=N(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:d}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&typeof d=="number"&&(f=c==="end"?d*-1:d),l?{x:f*g,y:m*a}:{x:m*a,y:f*g}}const me=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await jt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:u=>{let{x:w,y:x}=u;return{x:w,y:x}}},...l}=N(t,e),a={x:n,y:o},g=await vt(e,l),p=et(z(i)),m=yt(p);let f=a[m],d=a[p];if(s){const u=m==="y"?"top":"left",w=m==="y"?"bottom":"right",x=f+g[u],v=f-g[w];f=rt(x,f,v)}if(r){const u=p==="y"?"top":"left",w=p==="y"?"bottom":"right",x=d+g[u],v=d-g[w];d=rt(x,d,v)}const h=c.fn({...e,[m]:f,[p]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function I(t){return bt(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){var e;return(e=(bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bt(t){return t instanceof Node||t instanceof D(t).Node}function W(t){return t instanceof Element||t instanceof D(t).Element}function M(t){return t instanceof HTMLElement||t instanceof D(t).HTMLElement}function ht(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof D(t).ShadowRoot}function K(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function qt(t){return["table","td","th"].includes(I(t))}function at(t){const e=ft(),n=F(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function _t(t){let e=X(t);for(;M(e)&&!nt(e);){if(at(e))return e;e=X(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(I(t))}function F(t){return D(t).getComputedStyle(t)}function ot(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ht(t)&&t.host||B(t);return ht(e)?e.host:e}function Et(t){const e=X(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&K(e)?e:Et(e)}function Y(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Et(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=D(i);return s?e.concat(r,r.visualViewport||[],K(i)?i:[],r.frameElement&&n?Y(r.frameElement):[]):e.concat(i,Y(i,[],n))}function At(t){const e=F(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=J(n)!==s||J(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function ut(t){return W(t)?t:t.contextElement}function q(t){const e=ut(t);if(!M(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=At(e);let r=(s?J(n.width):n.width)/o,c=(s?J(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Xt=H(0);function Lt(t){const e=D(t);return!ft()||!e.visualViewport?Xt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==D(t)?!1:e}function j(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ut(t);let r=H(1);e&&(o?W(o)&&(r=q(o)):r=q(t));const c=Yt(s,n,o)?Lt(s):H(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,g=i.width/r.x,p=i.height/r.y;if(s){const m=D(s),f=o&&W(o)?D(o):o;let d=m.frameElement;for(;d&&o&&f!==m;){const h=q(d),u=d.getBoundingClientRect(),w=F(d),x=u.left+(d.clientLeft+parseFloat(w.paddingLeft))*h.x,v=u.top+(d.clientTop+parseFloat(w.paddingTop))*h.y;l*=h.x,a*=h.y,g*=h.x,p*=h.y,l+=x,a+=v,d=D(d).frameElement}}return tt({width:g,height:p,x:l,y:a})}function Nt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=M(n),s=B(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c=H(1);const l=H(0);if((i||!i&&o!=="fixed")&&((I(n)!=="body"||K(s))&&(r=ot(n)),M(n))){const a=j(n);c=q(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function Qt(t){return Array.from(t.getClientRects())}function Ct(t){return j(B(t)).left+ot(t).scrollLeft}function Kt(t){const e=B(t),n=ot(t),o=t.ownerDocument.body,i=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Ct(t);const c=-n.scrollTop;return F(o).direction==="rtl"&&(r+=U(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function Gt(t,e){const n=D(t),o=B(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function Jt(t,e){const n=j(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=M(t)?q(t):H(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function wt(t,e,n){let o;if(e==="viewport")o=Gt(t,n);else if(e==="document")o=Kt(B(t));else if(W(e))o=Jt(e,n);else{const i=Lt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Rt(t,e){const n=X(t);return n===e||!W(n)||nt(n)?!1:F(n).position==="fixed"||Rt(n,e)}function Zt(t,e){const n=e.get(t);if(n)return n;let o=Y(t,[],!1).filter(c=>W(c)&&I(c)!=="body"),i=null;const s=F(t).position==="fixed";let r=s?X(t):t;for(;W(r)&&!nt(r);){const c=F(r),l=at(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||K(r)&&!l&&Rt(t,r))?o=o.filter(g=>g!==r):i=c,r=X(r)}return e.set(t,o),o}function te(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?Zt(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,g)=>{const p=wt(e,g,i);return a.top=U(p.top,a.top),a.right=_(p.right,a.right),a.bottom=_(p.bottom,a.bottom),a.left=U(p.left,a.left),a},wt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ee(t){return At(t)}function ne(t,e,n){const o=M(e),i=B(e),s=n==="fixed",r=j(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=H(0);if(o||!o&&!s)if((I(e)!=="body"||K(i))&&(c=ot(e)),o){const a=j(e,!0,s,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Ct(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function gt(t,e){return!M(t)||F(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ot(t,e){const n=D(t);if(!M(t))return n;let o=gt(t,e);for(;o&&qt(o)&&F(o).position==="static";)o=gt(o,e);return o&&(I(o)==="html"||I(o)==="body"&&F(o).position==="static"&&!at(o))?n:o||_t(t)||n}const oe=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Ot,s=this.getDimensions;return{reference:ne(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function ie(t){return F(t).direction==="rtl"}const re={convertOffsetParentRelativeRectToViewportRelativeRect:Nt,getDocumentElement:B,getClippingRect:te,getOffsetParent:Ot,getElementRects:oe,getClientRects:Qt,getDimensions:ee,getScale:q,isElement:W,isRTL:ie};function se(t,e){let n=null,o;const i=B(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:g,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const f=G(g),d=G(i.clientWidth-(a+p)),h=G(i.clientHeight-(g+m)),u=G(a),x={rootMargin:-f+"px "+-d+"px "+-h+"px "+-u+"px",threshold:U(0,_(1,l))||1};let v=!0;function E(y){const L=y[0].intersectionRatio;if(L!==l){if(!v)return r();L?r(!1,L):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(t)}return r(!0),s}function he(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=ut(t),g=i||s?[...a?Y(a):[],...Y(e)]:[];g.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),s&&w.addEventListener("resize",n)});const p=a&&c?se(a,n):null;let m=-1,f=null;r&&(f=new ResizeObserver(w=>{let[x]=w;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let d,h=l?j(t):null;l&&u();function u(){const w=j(t);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&n(),h=w,d=requestAnimationFrame(u)}return n(),()=>{g.forEach(w=>{i&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),p&&p(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(d)}}const we=(t,e,n)=>{const o=new Map,i={platform:re,...n},s={...i.platform,_c:o};return zt(t,e,{...i,platform:s})};export{he as a,$t as b,we as c,fe as d,ue as e,de as f,me as o,ae as p,pe as s};
