import{w as $t}from"./index.rSSxKMQm.js";import{Z as Mt}from"./scheduler.B-h4_l2j.js";const Wt=$t(void 0);function he(t,e){const{computePosition:o,autoUpdate:n,offset:i,shift:s,flip:r,arrow:c,size:l,autoPlacement:a,hide:p,inline:d}=Mt(Wt),m={open:!1,autoUpdateCleanup:()=>{}},u=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let h;const w="https://www.skeleton.dev/utilities/popups";let f,g;function y(){f=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=f.querySelector(".arrow")??document.createElement("div")}y();function v(){var A,O,S,I,L,B,k,R;if(!f)throw new Error(`The data-popup="${e.target}" element was not found. ${w}`);if(!o)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${w}`);if(!i)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${w}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${w}`);if(!r)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${w}`);if(!c)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${w}`);const b=[];l&&b.push(l((A=e.middleware)==null?void 0:A.size)),a&&b.push(a((O=e.middleware)==null?void 0:O.autoPlacement)),p&&b.push(p((S=e.middleware)==null?void 0:S.hide)),d&&b.push(d((I=e.middleware)==null?void 0:I.inline)),o(t,f,{placement:e.placement??"bottom",middleware:[i(((L=e.middleware)==null?void 0:L.offset)??8),s(((B=e.middleware)==null?void 0:B.shift)??{padding:8}),r((k=e.middleware)==null?void 0:k.flip),c(((R=e.middleware)==null?void 0:R.arrow)??{element:g||null}),...b]}).then(({x:F,y:$,placement:ct,middlewareData:Pt})=>{if(Object.assign(f.style,{left:`${F}px`,top:`${$}px`}),g){const{x:wt,y:gt}=Pt.arrow,Ft={top:"bottom",right:"left",bottom:"top",left:"right"}[ct.split("-")[0]];Object.assign(g.style,{left:wt!=null?`${wt}px`:"",top:gt!=null?`${gt}px`:"",right:"",bottom:"",[Ft]:"-4px"})}})}function E(){f&&(m.open=!0,e.state&&e.state({state:m.open}),v(),f.style.display="block",f.style.opacity="1",f.style.pointerEvents="auto",f.removeAttribute("inert"),m.autoUpdateCleanup=n(t,f,v),h=Array.from(f==null?void 0:f.querySelectorAll(u)))}function x(b){if(!f)return;const A=parseFloat(window.getComputedStyle(f).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{m.open=!1,e.state&&e.state({state:m.open}),f.style.opacity="0",f.setAttribute("inert",""),m.autoUpdateCleanup&&m.autoUpdateCleanup(),b&&b()},A)}function C(){m.open===!1?E():x()}function D(b){if(m.open===!1||t.contains(b.target))return;if(f&&f.contains(b.target)===!1){x();return}const A=e.closeQuery===void 0?"a[href], button":e.closeQuery;if(A==="")return;const O=f==null?void 0:f.querySelectorAll(A);O==null||O.forEach(S=>{S.contains(b.target)&&x()})}const H=b=>{if(m.open===!1)return;const A=b.key;if(A==="Escape"){b.preventDefault(),t.focus(),x();return}h=Array.from(f==null?void 0:f.querySelectorAll(u)),m.open&&document.activeElement===t&&(A==="ArrowDown"||A==="Tab")&&u.length>0&&h.length>0&&(b.preventDefault(),h[0].focus())};switch(e.event){case"click":t.addEventListener("click",C,!0),window.addEventListener("click",D,!0);break;case"hover":t.addEventListener("mouseover",E,!0),t.addEventListener("mouseleave",()=>x(),!0);break;case"focus-blur":t.addEventListener("focus",C,!0),t.addEventListener("blur",()=>x(),!0);break;case"focus-click":t.addEventListener("focus",E,!0),window.addEventListener("click",D,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${w}`)}return window.addEventListener("keydown",H,!0),v(),{update(b){x(()=>{e=b,v(),y()})},destroy(){t.removeEventListener("click",C,!0),t.removeEventListener("mouseover",E,!0),t.removeEventListener("mouseleave",()=>x(),!0),t.removeEventListener("focus",C,!0),t.removeEventListener("focus",E,!0),t.removeEventListener("blur",()=>x(),!0),window.removeEventListener("click",D,!0),window.removeEventListener("keydown",H,!0)}}}function we(t,e){const{transition:o,params:n,enabled:i}=e;return i?o(t,n):"duration"in n?o(t,{duration:0}):{duration:0}}const Y=Math.min,_=Math.max,nt=Math.round,et=Math.floor,z=t=>({x:t,y:t}),Bt={left:"right",right:"left",bottom:"top",top:"bottom"},Vt={start:"end",end:"start"};function at(t,e,o){return _(t,Y(e,o))}function G(t,e){return typeof t=="function"?t(e):t}function j(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function Et(t){return t==="x"?"y":"x"}function ut(t){return t==="y"?"height":"width"}function N(t){return["top","bottom"].includes(j(t))?"y":"x"}function dt(t){return Et(N(t))}function Ht(t,e,o){o===void 0&&(o=!1);const n=J(t),i=dt(t),s=ut(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function It(t){const e=ot(t);return[ft(t),e,ft(e)]}function ft(t){return t.replace(/start|end/g,e=>Vt[e])}function zt(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function Ut(t,e,o,n){const i=J(t);let s=zt(j(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ft)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Bt[e])}function _t(t){return{top:0,right:0,bottom:0,left:0,...t}}function At(t){return typeof t!="number"?_t(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function yt(t,e,o){let{reference:n,floating:i}=t;const s=N(e),r=dt(e),c=ut(r),l=j(e),a=s==="y",p=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,m=n[c]/2-i[c]/2;let u;switch(l){case"top":u={x:p,y:n.y-i.height};break;case"bottom":u={x:p,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(J(e)){case"start":u[r]-=m*(o&&a?-1:1);break;case"end":u[r]+=m*(o&&a?-1:1);break}return u}const jt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:d}=yt(a,n,l),m=n,u={},h=0;for(let w=0;w<c.length;w++){const{name:f,fn:g}=c[w],{x:y,y:v,data:E,reset:x}=await g({x:p,y:d,initialPlacement:n,placement:m,strategy:i,middlewareData:u,rects:a,platform:r,elements:{reference:t,floating:e}});p=y??p,d=v??d,u={...u,[f]:{...u[f],...E}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(a=x.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:p,y:d}=yt(a,m,l)),w=-1)}return{x:p,y:d,placement:m,strategy:i,middlewareData:u}};async function Lt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=G(e,t),h=At(u),f=c[m?d==="floating"?"reference":"floating":d],g=it(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(f)))==null||o?f:f.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:p,strategy:l})),y=d==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},x=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-x.top+h.top)/E.y,bottom:(x.bottom-g.bottom+h.bottom)/E.y,left:(g.left-x.left+h.left)/E.x,right:(x.right-g.right+h.right)/E.x}}const qt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:p=0}=G(t,e)||{};if(a==null)return{};const d=At(p),m={x:o,y:n},u=dt(i),h=ut(u),w=await r.getDimensions(a),f=u==="y",g=f?"top":"left",y=f?"bottom":"right",v=f?"clientHeight":"clientWidth",E=s.reference[h]+s.reference[u]-m[u]-s.floating[h],x=m[u]-s.reference[u],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let D=C?C[v]:0;(!D||!await(r.isElement==null?void 0:r.isElement(C)))&&(D=c.floating[v]||s.floating[h]);const H=E/2-x/2,b=D/2-w[h]/2-1,A=Y(d[g],b),O=Y(d[y],b),S=A,I=D-w[h]-O,L=D/2-w[h]/2+H,B=at(S,L,I),k=!l.arrow&&J(i)!=null&&L!==B&&s.reference[h]/2-(L<S?A:O)-w[h]/2<0,R=k?L<S?L-S:L-I:0;return{[u]:m[u]+R,data:{[u]:B,centerOffset:L-B-R,...k&&{alignmentOffset:R}},reset:k}}}),Xt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:w=!0,...f}=G(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const g=j(i),y=N(c),v=j(c)===c,E=await(l.isRTL==null?void 0:l.isRTL(a.floating)),x=m||(v||!w?[ot(c)]:It(c)),C=h!=="none";!m&&C&&x.push(...Ut(c,w,h,E));const D=[c,...x],H=await Lt(e,f),b=[];let A=((n=s.flip)==null?void 0:n.overflows)||[];if(p&&b.push(H[g]),d){const L=Ht(i,r,E);b.push(H[L[0]],H[L[1]])}if(A=[...A,{placement:i,overflows:b}],!b.every(L=>L<=0)){var O,S;const L=(((O=s.flip)==null?void 0:O.index)||0)+1,B=D[L];if(B)return{data:{index:L,overflows:A},reset:{placement:B}};let k=(S=A.filter(R=>R.overflows[0]<=0).sort((R,F)=>R.overflows[1]-F.overflows[1])[0])==null?void 0:S.placement;if(!k)switch(u){case"bestFit":{var I;const R=(I=A.filter(F=>{if(C){const $=N(F.placement);return $===y||$==="y"}return!0}).map(F=>[F.placement,F.overflows.filter($=>$>0).reduce(($,ct)=>$+ct,0)]).sort((F,$)=>F[1]-$[1])[0])==null?void 0:I[0];R&&(k=R);break}case"initialPlacement":k=c;break}if(i!==k)return{reset:{placement:k}}}return{}}}};async function Yt(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=j(o),c=J(o),l=N(o)==="y",a=["left","top"].includes(r)?-1:1,p=s&&l?-1:1,d=G(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof h=="number"&&(u=c==="end"?h*-1:h),l?{x:u*p,y:m*a}:{x:m*a,y:u*p}}const Nt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Yt(e,t);return r===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},Qt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:f=>{let{x:g,y}=f;return{x:g,y}}},...l}=G(t,e),a={x:o,y:n},p=await Lt(e,l),d=N(j(i)),m=Et(d);let u=a[m],h=a[d];if(s){const f=m==="y"?"top":"left",g=m==="y"?"bottom":"right",y=u+p[f],v=u-p[g];u=at(y,u,v)}if(r){const f=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=h+p[f],v=h-p[g];h=at(y,h,v)}const w=c.fn({...e,[m]:u,[d]:h});return{...w,data:{x:w.x-o,y:w.y-n}}}}};function K(t){return Ct(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Ct(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ct(t){return t instanceof Node||t instanceof T(t).Node}function M(t){return t instanceof Element||t instanceof T(t).Element}function W(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function xt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Kt(t){return["table","td","th"].includes(K(t))}function rt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function mt(t){const e=pt(),o=P(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Zt(t){let e=U(t);for(;W(e)&&!Q(e);){if(rt(e))return null;if(mt(e))return e;e=U(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(K(t))}function P(t){return T(t).getComputedStyle(t)}function st(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(K(t)==="html")return t;const e=t.assignedSlot||t.parentNode||xt(t)&&t.host||V(t);return xt(e)?e.host:e}function Ot(t){const e=U(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&tt(e)?e:Ot(e)}function Z(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Ot(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=T(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&o?Z(r.frameElement):[]):e.concat(i,Z(i,[],o))}function Rt(t){const e=P(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=W(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=nt(o)!==s||nt(n)!==r;return c&&(o=s,n=r),{width:o,height:n,$:c}}function ht(t){return M(t)?t:t.contextElement}function X(t){const e=ht(t);if(!W(e))return z(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=Rt(e);let r=(s?nt(o.width):o.width)/n,c=(s?nt(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Gt=z(0);function Tt(t){const e=T(t);return!pt()||!e.visualViewport?Gt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==T(t)?!1:e}function q(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=ht(t);let r=z(1);e&&(n?M(n)&&(r=X(n)):r=X(t));const c=Jt(s,o,n)?Tt(s):z(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,p=i.width/r.x,d=i.height/r.y;if(s){const m=T(s),u=n&&M(n)?T(n):n;let h=m,w=h.frameElement;for(;w&&n&&u!==h;){const f=X(w),g=w.getBoundingClientRect(),y=P(w),v=g.left+(w.clientLeft+parseFloat(y.paddingLeft))*f.x,E=g.top+(w.clientTop+parseFloat(y.paddingTop))*f.y;l*=f.x,a*=f.y,p*=f.x,d*=f.y,l+=v,a+=E,h=T(w),w=h.frameElement}}return it({width:p,height:d,x:l,y:a})}function te(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const s=i==="fixed",r=V(n),c=e?rt(e.floating):!1;if(n===r||c&&s)return o;let l={scrollLeft:0,scrollTop:0},a=z(1);const p=z(0),d=W(n);if((d||!d&&!s)&&((K(n)!=="body"||tt(r))&&(l=st(n)),W(n))){const m=q(n);a=X(n),p.x=m.x+n.clientLeft,p.y=m.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+p.x,y:o.y*a.y-l.scrollTop*a.y+p.y}}function ee(t){return Array.from(t.getClientRects())}function St(t){return q(V(t)).left+st(t).scrollLeft}function ne(t){const e=V(t),o=st(t),n=t.ownerDocument.body,i=_(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=_(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+St(t);const c=-o.scrollTop;return P(n).direction==="rtl"&&(r+=_(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:c}}function oe(t,e){const o=T(t),n=V(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=pt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ie(t,e){const o=q(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=W(t)?X(t):z(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=n*s.y;return{width:r,height:c,x:l,y:a}}function vt(t,e,o){let n;if(e==="viewport")n=oe(t,o);else if(e==="document")n=ne(V(t));else if(M(e))n=ie(e,o);else{const i=Tt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return it(n)}function kt(t,e){const o=U(t);return o===e||!M(o)||Q(o)?!1:P(o).position==="fixed"||kt(o,e)}function re(t,e){const o=e.get(t);if(o)return o;let n=Z(t,[],!1).filter(c=>M(c)&&K(c)!=="body"),i=null;const s=P(t).position==="fixed";let r=s?U(t):t;for(;M(r)&&!Q(r);){const c=P(r),l=mt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!l&&kt(t,r))?n=n.filter(p=>p!==r):i=c,r=U(r)}return e.set(t,n),n}function se(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?rt(e)?[]:re(e,this._c):[].concat(o),n],c=r[0],l=r.reduce((a,p)=>{const d=vt(e,p,i);return a.top=_(d.top,a.top),a.right=Y(d.right,a.right),a.bottom=Y(d.bottom,a.bottom),a.left=_(d.left,a.left),a},vt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ce(t){const{width:e,height:o}=Rt(t);return{width:e,height:o}}function le(t,e,o){const n=W(e),i=V(e),s=o==="fixed",r=q(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=z(0);if(n||!n&&!s)if((K(e)!=="body"||tt(i))&&(c=st(e)),n){const d=q(e,!0,s,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else i&&(l.x=St(i));const a=r.left+c.scrollLeft-l.x,p=r.top+c.scrollTop-l.y;return{x:a,y:p,width:r.width,height:r.height}}function lt(t){return P(t).position==="static"}function bt(t,e){return!W(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function Dt(t,e){const o=T(t);if(rt(t))return o;if(!W(t)){let i=U(t);for(;i&&!Q(i);){if(M(i)&&!lt(i))return i;i=U(i)}return o}let n=bt(t,e);for(;n&&Kt(n)&&lt(n);)n=bt(n,e);return n&&Q(n)&&lt(n)&&!mt(n)?o:n||Zt(t)||o}const ae=async function(t){const e=this.getOffsetParent||Dt,o=this.getDimensions,n=await o(t.floating);return{reference:le(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function fe(t){return P(t).direction==="rtl"}const ue={convertOffsetParentRelativeRectToViewportRelativeRect:te,getDocumentElement:V,getClippingRect:se,getOffsetParent:Dt,getElementRects:ae,getClientRects:ee,getDimensions:ce,getScale:X,isElement:M,isRTL:fe};function de(t,e){let o=null,n;const i=V(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:p,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=et(p),h=et(i.clientWidth-(a+d)),w=et(i.clientHeight-(p+m)),f=et(a),y={rootMargin:-u+"px "+-h+"px "+-w+"px "+-f+"px",threshold:_(0,Y(1,l))||1};let v=!0;function E(x){const C=x[0].intersectionRatio;if(C!==l){if(!v)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(E,{...y,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,y)}o.observe(t)}return r(!0),s}function ge(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=ht(t),p=i||s?[...a?Z(a):[],...Z(e)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),s&&g.addEventListener("resize",o)});const d=a&&c?de(a,o):null;let m=-1,u=null;r&&(u=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=u)==null||v.observe(e)})),o()}),a&&!l&&u.observe(a),u.observe(e));let h,w=l?q(t):null;l&&f();function f(){const g=q(t);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&o(),w=g,h=requestAnimationFrame(f)}return o(),()=>{var g;p.forEach(y=>{i&&y.removeEventListener("scroll",o),s&&y.removeEventListener("resize",o)}),d==null||d(),(g=u)==null||g.disconnect(),u=null,l&&cancelAnimationFrame(h)}}const ye=Nt,xe=Qt,ve=Xt,be=qt,Ee=(t,e,o)=>{const n=new Map,i={platform:ue,...o},s={...i.platform,_c:n};return jt(t,e,{...i,platform:s})};export{ge as a,xe as b,Ee as c,we as d,be as e,ve as f,ye as o,he as p,Wt as s};
