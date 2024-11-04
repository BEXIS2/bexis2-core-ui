import{s as A,e as _,a as k,c as C,A as x,g,i as l,f as r,m as M,n as P}from"../chunks/scheduler.sMk536BX.js";import{S as T,i as B,c as b,a as v,m as S,t as w,b as H,d as E}from"../chunks/index.DVMqOFlj.js";import{P as U}from"../chunks/Page.DM9CNPx0.js";import{T as R,C as D}from"../chunks/CodeContainer.DzwvK2bx.js";import{w as z}from"../chunks/index.60cKgXHc.js";const V=`using BExIS.Security.Entities.Authorization;
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
}`,q=`  <!-- fill out alle the hook aatributes otherwise there will not be loaded -->
  <Hooks>
	  <!-- VIEW-->
	  <Hook
		    name="metadata"
		    mode="view"
		    entity="dataset"
		    place="details"
		    module="dcm"
		    type="BExIS.Modules.Dcm.UI.Hooks.MetadataViewHook, BExIS.Modules.DCM.UI, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />
	
 </Hooks>`,O=[{place:"details",entity:"dataset",mode:"view",description:"hook in where dataset can be viewed"},{place:"details",entity:"dataset",mode:"edit",description:"hook in where dataset can be viewed"}];function W(c){let e,a="How hooks look like.";return{c(){e=_("span"),e.textContent=a,this.h()},l(n){e=C(n,"SPAN",{slot:!0,"data-svelte-h":!0}),x(e)!=="svelte-mt8tml"&&(e.textContent=a),this.h()},h(){M(e,"slot","info")},m(n,s){l(n,e,s)},p:P,d(n){n&&r(e)}}}function X(c){let e,a="All about hooks in BEXIS2",n,s,p="this page describes how to use hooks in bexis 2.",h,u,I="Hook Places",f,m,d,i,$;return m=new R({props:{config:c[0]}}),i=new D({props:{title:"How To",csharp:V,xml:q,codeOnly:!0,activetab:K,$$slots:{info:[W]},$$scope:{ctx:c}}}),{c(){e=_("h2"),e.textContent=a,n=k(),s=_("p"),s.textContent=p,h=k(),u=_("h3"),u.textContent=I,f=k(),b(m.$$.fragment),d=k(),b(i.$$.fragment)},l(t){e=C(t,"H2",{"data-svelte-h":!0}),x(e)!=="svelte-1llzjzu"&&(e.textContent=a),n=g(t),s=C(t,"P",{"data-svelte-h":!0}),x(s)!=="svelte-eqh8f5"&&(s.textContent=p),h=g(t),u=C(t,"H3",{"data-svelte-h":!0}),x(u)!=="svelte-cvw8u9"&&(u.textContent=I),f=g(t),v(m.$$.fragment,t),d=g(t),v(i.$$.fragment,t)},m(t,o){l(t,e,o),l(t,n,o),l(t,s,o),l(t,h,o),l(t,u,o),l(t,f,o),S(m,t,o),l(t,d,o),S(i,t,o),$=!0},p(t,o){const y={};o&4&&(y.$$scope={dirty:o,ctx:t}),i.$set(y)},i(t){$||(w(m.$$.fragment,t),w(i.$$.fragment,t),$=!0)},o(t){H(m.$$.fragment,t),H(i.$$.fragment,t),$=!1},d(t){t&&(r(e),r(n),r(s),r(h),r(u),r(f),r(d)),E(m,t),E(i,t)}}}function j(c){let e,a;return e=new U({props:{$$slots:{default:[X]},$$scope:{ctx:c}}}),{c(){b(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,s){S(e,n,s),a=!0},p(n,[s]){const p={};s&4&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){a||(w(e.$$.fragment,n),a=!0)},o(n){H(e.$$.fragment,n),a=!1},d(n){E(e,n)}}}let K=2;function N(c){return[{id:"hookplaces",data:z(O)}]}class Y extends T{constructor(e){super(),B(this,e,N,j,A,{})}}export{Y as component};
