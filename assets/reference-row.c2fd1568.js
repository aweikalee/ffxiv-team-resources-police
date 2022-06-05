var ke=Object.defineProperty,xe=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var Z=(e,n,a)=>n in e?ke(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,O=(e,n)=>{for(var a in n||(n={}))Ce.call(n,a)&&Z(e,a,n[a]);if(Q)for(var a of Q(n))Se.call(n,a)&&Z(e,a,n[a]);return e},H=(e,n)=>xe(e,Be(n));var L=(e,n,a)=>new Promise((o,c)=>{var _=l=>{try{h(a.next(l))}catch(f){c(f)}},w=l=>{try{h(a.throw(l))}catch(f){c(f)}},h=l=>l.done?o(l.value):Promise.resolve(l.value).then(_,w);h((a=a.apply(e,n)).next())});import{I as De,bM as Re,bN as $e,n as ee,q as r,aO as te,k as K,o as y,aX as ae,d as M,t as Ve,y as ie,aM as ze,r as k,S as Ae,aN as Ee,c as $,aU as x,bf as I,b6 as F,B as Ne,bO as q,h as v,b3 as B,aW as Te,bh as Me,D as X,a5 as ne,a9 as N,aa as T,ab as g,ac as p,a3 as V,ae as U,as as Ue,au as We,ax as Y,aw as oe,bt as Pe,ag as je,ah as Oe,bu as He,aC as Le,aD as Ke}from"./plugin-vue_export-helper.1684445f.js";import{N as G,_ as Ie,W as qe}from"./WaitParent.5a196bde.js";const Xe=e=>{const{primaryColor:n,opacityDisabled:a,borderRadius:o,textColor3:c}=e,_="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Re),{iconColor:c,textColor:"white",loadingColor:n,opacityDisabled:a,railColor:_,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${$e(n,{alpha:.2})}`})},Ye={name:"Switch",common:De,self:Xe};var Ge=Ye,Je=ee("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[r("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),r("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),r("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),ee("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[te({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),r("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),r("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("&:focus",[r("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[r("rail","border-radius: calc(var(--n-rail-height) / 2);",[r("button","border-radius: calc(var(--n-button-height) / 2);")])]),ae("disabled",[ae("icon",[y("rubber-band",[y("pressed",[r("rail",[r("button","max-width: var(--n-button-width-pressed);")])]),r("rail",[K("&:active",[r("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[r("rail",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),r("rail",[K("&:active",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[r("rail",[r("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),r("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[r("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[te()]),r("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),y("active",[r("rail","background-color: var(--n-rail-color-active);")]),y("loading",[r("rail",`
 cursor: wait;
 `)]),y("disabled",[r("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Qe=Object.assign(Object.assign({},ie.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Ze=M({name:"Switch",props:Qe,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=Ve(e),o=ie("Switch","-switch",Je,Ge,e,n),c=ze(e),{mergedSizeRef:_,mergedDisabledRef:w}=c,h=k(e.defaultValue),l=Ae(e,"value"),f=Ee(l,h),b=$(()=>f.value===e.checkedValue),t=k(!1),i=k(!1),u=$(()=>{const{railStyle:s}=e;if(!!s)return s({focused:i.value,checked:b.value})});function m(s){const{"onUpdate:value":z,onChange:A,onUpdateValue:E}=e,{nTriggerFormInput:W,nTriggerFormChange:P}=c;z&&X(z,s),E&&X(E,s),A&&X(A,s),h.value=s,W(),P()}function C(){const{nTriggerFormFocus:s}=c;s()}function d(){const{nTriggerFormBlur:s}=c;s()}function re(){e.loading||w.value||(f.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue))}function se(){i.value=!0,C()}function le(){i.value=!1,d(),t.value=!1}function ue(s){e.loading||w.value||s.code==="Space"&&(f.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue),t.value=!1)}function ce(s){e.loading||w.value||s.code==="Space"&&(s.preventDefault(),t.value=!0)}const J=$(()=>{const{value:s}=_,{self:{opacityDisabled:z,railColor:A,railColorActive:E,buttonBoxShadow:W,buttonColor:P,boxShadowFocus:de,loadingColor:he,textColor:fe,iconColor:be,[x("buttonHeight",s)]:D,[x("buttonWidth",s)]:me,[x("buttonWidthPressed",s)]:ve,[x("railHeight",s)]:R,[x("railWidth",s)]:j,[x("railBorderRadius",s)]:pe,[x("buttonBorderRadius",s)]:ge},common:{cubicBezierEaseInOut:_e}}=o.value,we=I((F(R)-F(D))/2),ye=I(Math.max(F(R),F(D))),Fe=F(R)>F(D)?j:I(F(j)+F(D)-F(R));return{"--n-bezier":_e,"--n-button-border-radius":ge,"--n-button-box-shadow":W,"--n-button-color":P,"--n-button-width":me,"--n-button-width-pressed":ve,"--n-button-height":D,"--n-height":ye,"--n-offset":we,"--n-opacity-disabled":z,"--n-rail-border-radius":pe,"--n-rail-color":A,"--n-rail-color-active":E,"--n-rail-height":R,"--n-rail-width":j,"--n-width":Fe,"--n-box-shadow-focus":de,"--n-loading-color":he,"--n-text-color":fe,"--n-icon-color":be}}),S=a?Ne("switch",$(()=>_.value[0]),J,e):void 0;return{handleClick:re,handleBlur:le,handleFocus:se,handleKeyup:ue,handleKeydown:ce,mergedRailStyle:u,pressed:t,mergedClsPrefix:n,mergedValue:f,checked:b,mergedDisabled:w,cssVars:a?void 0:J,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:a,mergedRailStyle:o,onRender:c,$slots:_}=this;c==null||c();const{checked:w,unchecked:h,icon:l,"checked-icon":f,"unchecked-icon":b}=_,t=!(q(l)&&q(f)&&q(b));return v("div",{role:"switch","aria-checked":a,class:[`${e}-switch`,this.themeClass,t&&`${e}-switch--icon`,a&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},v("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},B(w,i=>B(h,u=>i||u?v("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},v("div",{class:`${e}-switch__rail-placeholder`},v("div",{class:`${e}-switch__button-placeholder`}),i),v("div",{class:`${e}-switch__rail-placeholder`},v("div",{class:`${e}-switch__button-placeholder`}),u)):null)),v("div",{class:`${e}-switch__button`},B(l,i=>B(f,u=>B(b,m=>v(Te,null,{default:()=>this.loading?v(Me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(u||i)?v("div",{class:`${e}-switch__button-icon`,key:u?"checked-icon":"icon"},u||i):!this.checked&&(m||i)?v("div",{class:`${e}-switch__button-icon`,key:m?"unchecked-icon":"icon"},m||i):null})))),B(w,i=>i&&v("div",{key:"checked",class:`${e}-switch__checked`},i)),B(h,i=>i&&v("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});const et=U("\u654C"),tt=U("\u53CB");var at=M({props:{initForm:null,phases:null},setup(e,{expose:n}){var f;const a=e,o=k(H(O({_id:0,_type:"reference",phase:0,ability:"",source:"",isHostile:!1},a.initForm),{timestamp:ne.duration((f=a.initForm.timestamp)!=null?f:0).format("mm:ss.SSS")})),c={ability:[{required:!0,message:"\u6280\u80FD\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],phase:[{required:!0,type:"number",message:"\u9636\u6BB5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],timestamp:[{required:!0,message:"\u4F7F\u7528\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator(b,t){return l(t).format("mm:ss.SSS")!==t?new Error("\u65F6\u95F4\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6309 mm:ss.SSS \u7684\u5F62\u5F0F\u8F93\u5165\u65F6\u95F4"):!0},trigger:"blur"}]},_=k(null);function w(){return L(this,null,function*(){return new Promise((b,t)=>{var i;(i=_.value)==null||i.validate(u=>{var m,C;if(u){const d=(m=u==null?void 0:u[0])==null?void 0:m[0];window.$message.error((C=d==null?void 0:d.message)!=null?C:"\u6570\u636E\u9A8C\u8BC1\u5931\u8D25"),t(d);return}b(H(O({},o.value),{timestamp:l(o.value.timestamp).asMilliseconds()}))})})})}const h=$(()=>a.phases.map((b,t)=>({label:b.name||`P${t+1}`,value:t})));n({validate:w});function l(b){var i,u,m;const t=b==null?void 0:b.match(/^([0-9]{2})\:([0-5][0-9])\.([0-9]{3})$/);return ne.duration({minutes:(i=Number(t==null?void 0:t[1]))!=null?i:0,seconds:(u=Number(t==null?void 0:t[2]))!=null?u:0,milliseconds:(m=Number(t==null?void 0:t[3]))!=null?m:0})}return(b,t)=>{const i=Ze,u=Ue,m=Ie,C=We;return N(),T(C,{ref_key:"formRef",ref:_,"label-width":80,model:o.value,rules:c},{default:g(()=>[p(u,{path:"ability",label:"\u6280\u80FD\u540D\u79F0"},{default:g(()=>[p(V(G),{value:o.value.ability,"onUpdate:value":t[1]||(t[1]=d=>o.value.ability=d),placeholder:"\u8F93\u5165\u6280\u80FD\u540D\u79F0"},{suffix:g(()=>[p(i,{value:o.value.isHostile,"onUpdate:value":t[0]||(t[0]=d=>o.value.isHostile=d),"rail-style":({checked:d})=>d?{background:"var(--a-error-color)"}:{background:"var(--a-info-color)"}},{checked:g(()=>[et]),unchecked:g(()=>[tt]),_:1},8,["value","rail-style"])]),_:1},8,["value"])]),_:1}),p(u,{path:"source",label:"\u4F7F\u7528\u8005\u540D\u79F0"},{default:g(()=>[p(V(G),{value:o.value.source,"onUpdate:value":t[2]||(t[2]=d=>o.value.source=d),placeholder:"\u8F93\u5165\u4F7F\u7528\u8005\u540D\u79F0"},null,8,["value"])]),_:1}),p(u,{path:"phase",label:"\u9636\u6BB5"},{default:g(()=>[p(m,{value:o.value.phase,"onUpdate:value":t[3]||(t[3]=d=>o.value.phase=d),options:V(h),clearable:""},null,8,["value","options"])]),_:1}),p(u,{path:"timestamp",label:"\u4F7F\u7528\u65F6\u95F4"},{default:g(()=>[p(V(G),{value:o.value.timestamp,"onUpdate:value":t[4]||(t[4]=d=>o.value.timestamp=d)},null,8,["value"])]),_:1})]),_:1},8,["model"])}}});const nt=U("\u53D6\u6D88"),ot=U("\u4FDD\u5B58"),it=M({setup(e){const n=k(),a=k([]),o=k();Y(window.opener,"reference-row@loaded",{}),oe("reference-row@loaded:replay",h=>{var l;n.value=(l=h.form)!=null?l:{},a.value=h.phases});const c=Pe({onTimeout(){window.$message.error("\u4FDD\u5B58\u5931\u8D25\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u9875\u9762")},immediate:!1});function _(){return L(this,null,function*(){var l;const h=yield(l=o.value)==null?void 0:l.validate();Y(window.opener,"reference-row@save",h),c.start()})}oe("reference-row@save:replay",()=>{c.stop(),window.close()});function w(){Y(window.opener,"@close",{}),window.close()}return(h,l)=>{const f=je,b=Oe,t=He;return n.value?(N(),T(t,{key:0,style:{height:"100vh"}},{footer:g(()=>[p(b,{justify:"center"},{default:g(()=>[p(f,{onClick:w},{default:g(()=>[nt]),_:1}),p(f,{type:"primary",onClick:_,loading:V(c).loading},{default:g(()=>[ot]),_:1},8,["loading"])]),_:1})]),default:g(()=>[p(at,{ref_key:"formRef",ref:o,"init-form":n.value,phases:a.value},null,8,["init-form","phases"])]),_:1})):(N(),T(qe,{key:1}))}}}),rt=M({setup(e){return(n,a)=>(N(),T(Le,null,{default:g(()=>[p(it)]),_:1}))}});Ke(rt).mount("#app");
