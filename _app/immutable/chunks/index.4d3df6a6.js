import{ao as x,ap as u}from"./index.c6d32d37.js";function _(o){const t=o-1;return t*t*t+1}function S(o,{delay:t=0,duration:n=400,easing:s=x}={}){const a=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:s,css:c=>`opacity: ${c*a}`}}function U(o,{delay:t=0,duration:n=400,easing:s=_,x:a=0,y:c=0,opacity:f=0}={}){const r=getComputedStyle(o),e=+r.opacity,y=r.transform==="none"?"":r.transform,p=e*(1-f),[l,m]=u(a),[$,d]=u(c);return{delay:t,duration:n,easing:s,css:(i,g)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${e-p*g}`}}export{U as a,S as f};
