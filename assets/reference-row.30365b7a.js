var ke=Object.defineProperty,xe=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Z=(e,n,a)=>n in e?ke(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,H=(e,n)=>{for(var a in n||(n={}))Ce.call(n,a)&&Z(e,a,n[a]);if(Q)for(var a of Q(n))De.call(n,a)&&Z(e,a,n[a]);return e},L=(e,n)=>xe(e,Be(n));var K=(e,n,a)=>new Promise((o,l)=>{var _=u=>{try{h(a.next(u))}catch(f){l(f)}},w=u=>{try{h(a.throw(u))}catch(f){l(f)}},h=u=>u.done?o(u.value):Promise.resolve(u.value).then(_,w);h((a=a.apply(e,n)).next())});import{I as Se,bK as Re,bL as $e,n as ee,q as r,aO as te,k as O,o as F,aX as ae,d as M,t as Ve,y as ie,aM as Ae,r as k,S as Ee,aN as ze,c as $,aU as x,bg as q,b6 as y,B as Ne,bM as I,h as v,b3 as B,aW as Te,bi as Me,D as X,a5 as ne,a9 as N,aa as T,ab as p,ac as g,a3 as V,aC as Y,ae as U,as as Ue,au as We,ax as G,aw as oe,bv as Pe,ag as je,ah as He,bw as Le,aD as Ke,aE as Oe}from"./plugin-vue_export-helper.54a58cfa.js";import{_ as qe,W as Ie}from"./WaitParent.e432afca.js";const Xe=e=>{const{primaryColor:n,opacityDisabled:a,borderRadius:o,textColor3:l}=e,_="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Re),{iconColor:l,textColor:"white",loadingColor:n,opacityDisabled:a,railColor:_,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${$e(n,{alpha:.2})}`})},Ye={name:"Switch",common:Se,self:Xe};var Ge=Ye,Je=ee("switch",`
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
 `),O("&:focus",[r("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),F("round",[r("rail","border-radius: calc(var(--n-rail-height) / 2);",[r("button","border-radius: calc(var(--n-button-height) / 2);")])]),ae("disabled",[ae("icon",[F("rubber-band",[F("pressed",[r("rail",[r("button","max-width: var(--n-button-width-pressed);")])]),r("rail",[O("&:active",[r("button","max-width: var(--n-button-width-pressed);")])]),F("active",[F("pressed",[r("rail",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),r("rail",[O("&:active",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),F("active",[r("rail",[r("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),r("rail",`
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
 `)]),F("active",[r("rail","background-color: var(--n-rail-color-active);")]),F("loading",[r("rail",`
 cursor: wait;
 `)]),F("disabled",[r("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Qe=Object.assign(Object.assign({},ie.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Ze=M({name:"Switch",props:Qe,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=Ve(e),o=ie("Switch","-switch",Je,Ge,e,n),l=Ae(e),{mergedSizeRef:_,mergedDisabledRef:w}=l,h=k(e.defaultValue),u=Ee(e,"value"),f=ze(u,h),b=$(()=>f.value===e.checkedValue),t=k(!1),i=k(!1),c=$(()=>{const{railStyle:s}=e;if(!!s)return s({focused:i.value,checked:b.value})});function m(s){const{"onUpdate:value":A,onChange:E,onUpdateValue:z}=e,{nTriggerFormInput:W,nTriggerFormChange:P}=l;A&&X(A,s),z&&X(z,s),E&&X(E,s),h.value=s,W(),P()}function C(){const{nTriggerFormFocus:s}=l;s()}function d(){const{nTriggerFormBlur:s}=l;s()}function re(){e.loading||w.value||(f.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue))}function se(){i.value=!0,C()}function ue(){i.value=!1,d(),t.value=!1}function le(s){e.loading||w.value||s.code==="Space"&&(f.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue),t.value=!1)}function ce(s){e.loading||w.value||s.code==="Space"&&(s.preventDefault(),t.value=!0)}const J=$(()=>{const{value:s}=_,{self:{opacityDisabled:A,railColor:E,railColorActive:z,buttonBoxShadow:W,buttonColor:P,boxShadowFocus:de,loadingColor:he,textColor:fe,iconColor:be,[x("buttonHeight",s)]:S,[x("buttonWidth",s)]:me,[x("buttonWidthPressed",s)]:ve,[x("railHeight",s)]:R,[x("railWidth",s)]:j,[x("railBorderRadius",s)]:ge,[x("buttonBorderRadius",s)]:pe},common:{cubicBezierEaseInOut:_e}}=o.value,we=q((y(R)-y(S))/2),Fe=q(Math.max(y(R),y(S))),ye=y(R)>y(S)?j:q(y(j)+y(S)-y(R));return{"--n-bezier":_e,"--n-button-border-radius":pe,"--n-button-box-shadow":W,"--n-button-color":P,"--n-button-width":me,"--n-button-width-pressed":ve,"--n-button-height":S,"--n-height":Fe,"--n-offset":we,"--n-opacity-disabled":A,"--n-rail-border-radius":ge,"--n-rail-color":E,"--n-rail-color-active":z,"--n-rail-height":R,"--n-rail-width":j,"--n-width":ye,"--n-box-shadow-focus":de,"--n-loading-color":he,"--n-text-color":fe,"--n-icon-color":be}}),D=a?Ne("switch",$(()=>_.value[0]),J,e):void 0;return{handleClick:re,handleBlur:ue,handleFocus:se,handleKeyup:le,handleKeydown:ce,mergedRailStyle:c,pressed:t,mergedClsPrefix:n,mergedValue:f,checked:b,mergedDisabled:w,cssVars:a?void 0:J,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:a,mergedRailStyle:o,onRender:l,$slots:_}=this;l==null||l();const{checked:w,unchecked:h,icon:u,"checked-icon":f,"unchecked-icon":b}=_,t=!(I(u)&&I(f)&&I(b));return v("div",{role:"switch","aria-checked":a,class:[`${e}-switch`,this.themeClass,t&&`${e}-switch--icon`,a&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},v("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},B(w,i=>B(h,c=>i||c?v("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},v("div",{class:`${e}-switch__rail-placeholder`},v("div",{class:`${e}-switch__button-placeholder`}),i),v("div",{class:`${e}-switch__rail-placeholder`},v("div",{class:`${e}-switch__button-placeholder`}),c)):null)),v("div",{class:`${e}-switch__button`},B(u,i=>B(f,c=>B(b,m=>v(Te,null,{default:()=>this.loading?v(Me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?v("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(m||i)?v("div",{class:`${e}-switch__button-icon`,key:m?"unchecked-icon":"icon"},m||i):null})))),B(w,i=>i&&v("div",{key:"checked",class:`${e}-switch__checked`},i)),B(h,i=>i&&v("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});const et=U("\u654C"),tt=U("\u53CB");var at=M({props:{initForm:null,phases:null},setup(e,{expose:n}){var f;const a=e,o=k(L(H({_id:0,_type:"reference",phase:0,ability:"",source:"",isHostile:!1},a.initForm),{timestamp:ne.duration((f=a.initForm.timestamp)!=null?f:0).format("mm:ss.SSS")})),l={ability:[{required:!0,message:"\u6280\u80FD\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],source:[{required:!0,message:"\u4F7F\u7528\u8005\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],isHostile:[{required:!0,type:"boolean",message:"\u662F\u654C\u662F\u53CB\uFF1F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],phase:[{required:!0,type:"number",message:"\u9636\u6BB5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],timestamp:[{required:!0,message:"\u4F7F\u7528\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator(b,t){return u(t).format("mm:ss.SSS")!==t?new Error("\u65F6\u95F4\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6309 mm:ss.SSS \u7684\u5F62\u5F0F\u8F93\u5165\u65F6\u95F4"):!0},trigger:"blur"}]},_=k(null);function w(){return K(this,null,function*(){return new Promise((b,t)=>{var i;(i=_.value)==null||i.validate(c=>{var m,C;if(c){const d=(m=c==null?void 0:c[0])==null?void 0:m[0];window.$message.error((C=d==null?void 0:d.message)!=null?C:"\u6570\u636E\u9A8C\u8BC1\u5931\u8D25"),t(d);return}b(L(H({},o.value),{timestamp:u(o.value.timestamp).asMilliseconds()}))})})})}const h=$(()=>a.phases.map((b,t)=>({label:b.name||`P${t+1}`,value:t})));n({validate:w});function u(b){var i,c,m;const t=b==null?void 0:b.match(/^([0-9]{2})\:([0-5][0-9])\.([0-9]{3})$/);return ne.duration({minutes:(i=Number(t==null?void 0:t[1]))!=null?i:0,seconds:(c=Number(t==null?void 0:t[2]))!=null?c:0,milliseconds:(m=Number(t==null?void 0:t[3]))!=null?m:0})}return(b,t)=>{const i=Ue,c=Ze,m=qe,C=We;return N(),T(C,{ref_key:"formRef",ref:_,"label-width":80,model:o.value,rules:l},{default:p(()=>[g(i,{path:"ability",label:"\u6280\u80FD\u540D\u79F0"},{default:p(()=>[g(V(Y),{value:o.value.ability,"onUpdate:value":t[0]||(t[0]=d=>o.value.ability=d),placeholder:"\u8F93\u5165\u6280\u80FD\u540D\u79F0"},null,8,["value"])]),_:1}),g(i,{path:"source",label:"\u4F7F\u7528\u8005\u540D\u79F0"},{default:p(()=>[g(V(Y),{value:o.value.source,"onUpdate:value":t[2]||(t[2]=d=>o.value.source=d),placeholder:"\u8F93\u5165\u4F7F\u7528\u8005\u540D\u79F0"},{suffix:p(()=>[g(c,{value:o.value.isHostile,"onUpdate:value":t[1]||(t[1]=d=>o.value.isHostile=d),"rail-style":({checked:d})=>d?{background:"var(--a-error-color)"}:{background:"var(--a-info-color)"}},{checked:p(()=>[et]),unchecked:p(()=>[tt]),_:1},8,["value","rail-style"])]),_:1},8,["value"])]),_:1}),g(i,{path:"phase",label:"\u9636\u6BB5"},{default:p(()=>[g(m,{value:o.value.phase,"onUpdate:value":t[3]||(t[3]=d=>o.value.phase=d),options:V(h),clearable:""},null,8,["value","options"])]),_:1}),g(i,{path:"timestamp",label:"\u4F7F\u7528\u65F6\u95F4"},{default:p(()=>[g(V(Y),{value:o.value.timestamp,"onUpdate:value":t[4]||(t[4]=d=>o.value.timestamp=d)},null,8,["value"])]),_:1})]),_:1},8,["model"])}}});const nt=U("\u53D6\u6D88"),ot=U("\u4FDD\u5B58"),it=M({setup(e){const n=k(),a=k([]),o=k();G(window.opener,"reference-row@loaded",{}),oe("reference-row@loaded:replay",h=>{var u;n.value=(u=h.form)!=null?u:{},a.value=h.phases});const l=Pe({onTimeout(){window.$message.error("\u4FDD\u5B58\u5931\u8D25\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u9875\u9762")},immediate:!1});function _(){return K(this,null,function*(){var u;const h=yield(u=o.value)==null?void 0:u.validate();G(window.opener,"reference-row@save",h),l.start()})}oe("reference-row@save:replay",()=>{l.stop(),window.close()});function w(){G(window.opener,"@close",{}),window.close()}return(h,u)=>{const f=je,b=He,t=Le;return n.value?(N(),T(t,{key:0,style:{height:"100vh"}},{footer:p(()=>[g(b,{justify:"center"},{default:p(()=>[g(f,{onClick:w},{default:p(()=>[nt]),_:1}),g(f,{type:"primary",onClick:_,loading:V(l).loading},{default:p(()=>[ot]),_:1},8,["loading"])]),_:1})]),default:p(()=>[g(at,{ref_key:"formRef",ref:o,"init-form":n.value,phases:a.value},null,8,["init-form","phases"])]),_:1})):(N(),T(Ie,{key:1}))}}}),rt=M({setup(e){return(n,a)=>(N(),T(Ke,null,{default:p(()=>[g(it)]),_:1}))}});Oe(rt).mount("#app");
