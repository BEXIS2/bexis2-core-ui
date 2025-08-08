import{S as A,i as M,s as P,m as b,o as v,p as S,q as w,r as H,u as E,d as l,b as r,e as _,K as C,h as k,j as x,k as g,n as T,z as B}from"../chunks/Cxos4rAu.js";import"../chunks/IHki7fMi.js";import{P as U}from"../chunks/xcdkpsz9.js";import{T as R,C as z}from"../chunks/BDzQvOp-.js";import{w as D}from"../chunks/CIVVwgPB.js";const q=`using BExIS.Security.Entities.Authorization;
using BExIS.UI.Hooks;

namespace BExIS.Modules.Dcm.UI.Hooks
{
    public class MetadataEditHook : Hook
    {
        public MetadataEditHook()
        {
            Start = "dcm/metadata/start";
        }

        public override void Check(long id, string username)
        {
            // check status
            checkStatus(id, username);

        }

        private void checkStatus(long id, string username)
        {
            // check if the user has access rights to the entrypoint - set in Start
            bool hasAccess = hasUserAccessRights(username);

            // user rights to the dataset
            bool hasRights = hasUserEntityRights(id, username,RightType.Write);

            // if one fail then access is denied
            if (hasAccess == false || hasRights == false)
            {
                Status = HookStatus.AccessDenied; return;
            }
            else
            {
                Status = HookStatus.Open;
            }

        }

    }
}`,V=`  <!-- fill out alle the hook aatributes otherwise there will not be loaded -->
  <Hooks>
	  <!-- VIEW-->
	  <Hook
		    name="metadata"
		    mode="view"
		    entity="dataset"
		    place="details"
		    module="dcm"
		    type="BExIS.Modules.Dcm.UI.Hooks.MetadataViewHook, BExIS.Modules.DCM.UI, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />
	
 </Hooks>`,j=[{place:"details",entity:"dataset",mode:"view",description:"hook in where dataset can be viewed"},{place:"details",entity:"dataset",mode:"edit",description:"hook in where dataset can be viewed"}];function K(c){let e,a="How hooks look like.";return{c(){e=x("span"),e.textContent=a,this.h()},l(n){e=_(n,"SPAN",{slot:!0,"data-svelte-h":!0}),C(e)!=="svelte-mt8tml"&&(e.textContent=a),this.h()},h(){B(e,"slot","info")},m(n,s){r(n,e,s)},p:T,d(n){n&&l(e)}}}function O(c){let e,a="All about hooks in BEXIS2",n,s,p="this page describes how to use hooks in bexis 2.",h,u,I="Hook Places",d,m,f,i,$;return m=new R({props:{config:c[0]}}),i=new z({props:{title:"How To",csharp:q,xml:V,codeOnly:!0,activetab:X,$$slots:{info:[K]},$$scope:{ctx:c}}}),{c(){e=x("h2"),e.textContent=a,n=g(),s=x("p"),s.textContent=p,h=g(),u=x("h3"),u.textContent=I,d=g(),E(m.$$.fragment),f=g(),E(i.$$.fragment)},l(t){e=_(t,"H2",{"data-svelte-h":!0}),C(e)!=="svelte-1llzjzu"&&(e.textContent=a),n=k(t),s=_(t,"P",{"data-svelte-h":!0}),C(s)!=="svelte-eqh8f5"&&(s.textContent=p),h=k(t),u=_(t,"H3",{"data-svelte-h":!0}),C(u)!=="svelte-cvw8u9"&&(u.textContent=I),d=k(t),H(m.$$.fragment,t),f=k(t),H(i.$$.fragment,t)},m(t,o){r(t,e,o),r(t,n,o),r(t,s,o),r(t,h,o),r(t,u,o),r(t,d,o),w(m,t,o),r(t,f,o),w(i,t,o),$=!0},p(t,o){const y={};o&4&&(y.$$scope={dirty:o,ctx:t}),i.$set(y)},i(t){$||(S(m.$$.fragment,t),S(i.$$.fragment,t),$=!0)},o(t){v(m.$$.fragment,t),v(i.$$.fragment,t),$=!1},d(t){t&&(l(e),l(n),l(s),l(h),l(u),l(d),l(f)),b(m,t),b(i,t)}}}function W(c){let e,a;return e=new U({props:{$$slots:{default:[O]},$$scope:{ctx:c}}}),{c(){E(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){w(e,n,s),a=!0},p(n,[s]){const p={};s&4&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){a||(S(e.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),a=!1},d(n){b(e,n)}}}let X=2;function N(c){return[{id:"hookplaces",data:D(j)}]}class Y extends A{constructor(e){super(),M(this,e,N,W,P,{})}}export{Y as component};
