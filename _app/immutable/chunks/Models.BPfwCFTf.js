var e=Object.defineProperty;var o=(s,r,i)=>r in s?e(s,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[r]=i;var t=(s,r,i)=>o(s,typeof r!="symbol"?r+"":r,i);class h{constructor(){t(this,"id");t(this,"limit");t(this,"offset");t(this,"q");t(this,"version");t(this,"filter");t(this,"order");this.id=0,this.limit=10,this.offset=0,this.version=0,this.q="",this.filter=[],this.order=[]}}class c{constructor(){t(this,"statusText");t(this,"status");t(this,"error");t(this,"stackTrace");this.statusText="",this.status=0,this.error="",this.stackTrace=""}}export{h as S,c as e};