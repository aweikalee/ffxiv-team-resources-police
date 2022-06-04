var xe=Object.defineProperty,Be=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var Z=(e,a,o)=>a in e?xe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,L=(e,a)=>{for(var o in a||(a={}))De.call(a,o)&&Z(e,o,a[o]);if(Q)for(var o of Q(a))Se.call(a,o)&&Z(e,o,a[o]);return e},O=(e,a)=>Be(e,Ce(a));var W=(e,a,o)=>new Promise((i,b)=>{var g=f=>{try{w(o.next(f))}catch(l){b(l)}},p=f=>{try{w(o.throw(f))}catch(l){b(l)}},w=f=>f.done?i(f.value):Promise.resolve(f.value).then(g,p);w((o=o.apply(e,a)).next())});import{aM as Ee,bu as $e,bv as Re,q as ee,s as r,x as te,n as K,v as y,I as ne,e as j,u as Ae,C as re,g as Ve,i as x,t as ze,k as Ne,j as V,F as B,aj as q,a0 as k,G as Te,bw as I,f as _,Y as C,N as je,al as Me,m as Y,b0 as oe,b2 as E,b3 as $,b4 as m,b5 as v,a_ as D,O as X,b7 as M,bj as Ue,_ as Pe,bl as He,bx as Le,by as ae,bo as G,bn as ie,bg as Oe,a2 as We,b9 as Ke,bz as qe,b8 as Ie,ba as Ye,bs as Xe,bt as Ge}from"./useMessage.ca6bc9c1.js";const Je=e=>{const{primaryColor:a,opacityDisabled:o,borderRadius:i,textColor3:b}=e,g="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},$e),{iconColor:b,textColor:"white",loadingColor:a,opacityDisabled:o,railColor:g,railColorActive:a,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${Re(a,{alpha:.2})}`})},Qe={name:"Switch",common:Ee,self:Je};var Ze=Qe,et=ee("switch",`
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
 `)]),y("round",[r("rail","border-radius: calc(var(--n-rail-height) / 2);",[r("button","border-radius: calc(var(--n-button-height) / 2);")])]),ne("disabled",[ne("icon",[y("rubber-band",[y("pressed",[r("rail",[r("button","max-width: var(--n-button-width-pressed);")])]),r("rail",[K("&:active",[r("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[r("rail",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),r("rail",[K("&:active",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[r("rail",[r("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),r("rail",`
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
 `)])]);const tt=Object.assign(Object.assign({},re.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var nt=j({name:"Switch",props:tt,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:o}=Ae(e),i=re("Switch","-switch",et,Ze,e,a),b=Ve(e),{mergedSizeRef:g,mergedDisabledRef:p}=b,w=x(e.defaultValue),f=ze(e,"value"),l=Ne(f,w),s=V(()=>l.value===e.checkedValue),t=x(!1),n=x(!1),c=V(()=>{const{railStyle:u}=e;if(!!u)return u({focused:n.value,checked:s.value})});function d(u){const{"onUpdate:value":z,onChange:N,onUpdateValue:T}=e,{nTriggerFormInput:U,nTriggerFormChange:P}=b;z&&Y(z,u),T&&Y(T,u),N&&Y(N,u),w.value=u,U(),P()}function F(){const{nTriggerFormFocus:u}=b;u()}function h(){const{nTriggerFormBlur:u}=b;u()}function ue(){e.loading||p.value||(l.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue))}function se(){n.value=!0,F()}function le(){n.value=!1,h(),t.value=!1}function ce(u){e.loading||p.value||u.code==="Space"&&(l.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue),t.value=!1)}function de(u){e.loading||p.value||u.code==="Space"&&(u.preventDefault(),t.value=!0)}const J=V(()=>{const{value:u}=g,{self:{opacityDisabled:z,railColor:N,railColorActive:T,buttonBoxShadow:U,buttonColor:P,boxShadowFocus:he,loadingColor:be,textColor:fe,iconColor:me,[B("buttonHeight",u)]:R,[B("buttonWidth",u)]:pe,[B("buttonWidthPressed",u)]:ve,[B("railHeight",u)]:A,[B("railWidth",u)]:H,[B("railBorderRadius",u)]:ge,[B("buttonBorderRadius",u)]:_e},common:{cubicBezierEaseInOut:we}}=i.value,Fe=q((k(A)-k(R))/2),ye=q(Math.max(k(A),k(R))),ke=k(A)>k(R)?H:q(k(H)+k(R)-k(A));return{"--n-bezier":we,"--n-button-border-radius":_e,"--n-button-box-shadow":U,"--n-button-color":P,"--n-button-width":pe,"--n-button-width-pressed":ve,"--n-button-height":R,"--n-height":ye,"--n-offset":Fe,"--n-opacity-disabled":z,"--n-rail-border-radius":ge,"--n-rail-color":N,"--n-rail-color-active":T,"--n-rail-height":A,"--n-rail-width":H,"--n-width":ke,"--n-box-shadow-focus":he,"--n-loading-color":be,"--n-text-color":fe,"--n-icon-color":me}}),S=o?Te("switch",V(()=>g.value[0]),J,e):void 0;return{handleClick:ue,handleBlur:le,handleFocus:se,handleKeyup:ce,handleKeydown:de,mergedRailStyle:c,pressed:t,mergedClsPrefix:a,mergedValue:l,checked:s,mergedDisabled:p,cssVars:o?void 0:J,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:o,mergedRailStyle:i,onRender:b,$slots:g}=this;b==null||b();const{checked:p,unchecked:w,icon:f,"checked-icon":l,"unchecked-icon":s}=g,t=!(I(f)&&I(l)&&I(s));return _("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,t&&`${e}-switch--icon`,o&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},_("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},C(p,n=>C(w,c=>n||c?_("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},_("div",{class:`${e}-switch__rail-placeholder`},_("div",{class:`${e}-switch__button-placeholder`}),n),_("div",{class:`${e}-switch__rail-placeholder`},_("div",{class:`${e}-switch__button-placeholder`}),c)):null)),_("div",{class:`${e}-switch__button`},C(f,n=>C(l,c=>C(s,d=>_(je,null,{default:()=>this.loading?_(Me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||n)?_("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||n):!this.checked&&(d||n)?_("div",{class:`${e}-switch__button-icon`,key:d?"unchecked-icon":"icon"},d||n):null})))),C(p,n=>n&&_("div",{key:"checked",class:`${e}-switch__checked`},n)),C(w,n=>n&&_("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});const ot=M("\u654C"),at=M("\u53CB");var it=j({props:{initForm:null,phases:null},setup(e,{expose:a}){var l;const o=e,i=x(O(L({_id:0,_type:"reference",phase:0,ability:"",source:"",isHostile:!1},o.initForm),{timestamp:oe.duration((l=o.initForm.timestamp)!=null?l:0).format("mm:ss.SSS")})),b={ability:[{required:!0,message:"\u6280\u80FD\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],source:[{required:!0,message:"\u4F7F\u7528\u8005\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],isHostile:[{required:!0,type:"boolean",message:"\u662F\u654C\u662F\u53CB\uFF1F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],phase:[{required:!0,type:"number",message:"\u9636\u6BB5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],timestamp:[{required:!0,message:"\u4F7F\u7528\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator(s,t){return f(t).format("mm:ss.SSS")!==t?new Error("\u65F6\u95F4\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6309 mm:ss.SSS \u7684\u5F62\u5F0F\u8F93\u5165\u65F6\u95F4"):!0},trigger:"blur"}]},g=x(null);function p(){return W(this,null,function*(){return new Promise((s,t)=>{var n;(n=g.value)==null||n.validate(c=>{var d,F;if(c){const h=(d=c==null?void 0:c[0])==null?void 0:d[0];window.$message.error((F=h==null?void 0:h.message)!=null?F:"\u6570\u636E\u9A8C\u8BC1\u5931\u8D25"),t(h);return}s(O(L({},i.value),{timestamp:f(i.value.timestamp).asMilliseconds()}))})})})}const w=V(()=>o.phases.map((s,t)=>({label:s.name||`P${t+1}`,value:t})));a({validate:p});function f(s){var n,c,d;const t=s==null?void 0:s.match(/^([0-9]{2})\:([0-5][0-9])\.([0-9]{3})$/);return oe.duration({minutes:(n=Number(t==null?void 0:t[1]))!=null?n:0,seconds:(c=Number(t==null?void 0:t[2]))!=null?c:0,milliseconds:(d=Number(t==null?void 0:t[3]))!=null?d:0})}return(s,t)=>{const n=Ue,c=nt,d=Pe,F=He;return E(),$(F,{ref_key:"formRef",ref:g,"label-width":80,model:i.value,rules:b},{default:m(()=>[v(n,{path:"ability",label:"\u6280\u80FD\u540D\u79F0"},{default:m(()=>[v(D(X),{value:i.value.ability,"onUpdate:value":t[0]||(t[0]=h=>i.value.ability=h),placeholder:"\u8F93\u5165\u6280\u80FD\u540D\u79F0"},null,8,["value"])]),_:1}),v(n,{path:"source",label:"\u4F7F\u7528\u8005\u540D\u79F0"},{default:m(()=>[v(D(X),{value:i.value.source,"onUpdate:value":t[2]||(t[2]=h=>i.value.source=h),placeholder:"\u8F93\u5165\u4F7F\u7528\u8005\u540D\u79F0"},{suffix:m(()=>[v(c,{value:i.value.isHostile,"onUpdate:value":t[1]||(t[1]=h=>i.value.isHostile=h),"rail-style":({checked:h})=>h?{background:"var(--a-error-color)"}:{background:"var(--a-info-color)"}},{checked:m(()=>[ot]),unchecked:m(()=>[at]),_:1},8,["value","rail-style"])]),_:1},8,["value"])]),_:1}),v(n,{path:"phase",label:"\u9636\u6BB5"},{default:m(()=>[v(d,{value:i.value.phase,"onUpdate:value":t[3]||(t[3]=h=>i.value.phase=h),options:D(w),clearable:""},null,8,["value","options"])]),_:1}),v(n,{path:"timestamp",label:"\u4F7F\u7528\u65F6\u95F4"},{default:m(()=>[v(D(X),{value:i.value.timestamp,"onUpdate:value":t[4]||(t[4]=h=>i.value.timestamp=h)},null,8,["value"])]),_:1})]),_:1},8,["model"])}}});const rt=M("\u53D6\u6D88"),ut=M("\u4FDD\u5B58"),st=j({setup(e){const a=x(),o=x([]),i=Le(100),b=ae(),g=x();G(window.opener,"reference-row@loaded",{}),ie("reference-row@loaded:replay",l=>{var s;a.value=(s=l.form)!=null?s:{},o.value=l.phases});const p=ae({onTimeout(){window.$message.error("\u4FDD\u5B58\u5931\u8D25\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u9875\u9762")},immediate:!1});function w(){return W(this,null,function*(){var s;const l=yield(s=g.value)==null?void 0:s.validate();G(window.opener,"reference-row@save",l),p.start()})}ie("reference-row@save:replay",()=>{p.stop(),window.close()});function f(){G(window.opener,"reference-row@close",{}),window.close()}return(l,s)=>{const t=We,n=Ke,c=qe,d=Ie,F=Ye;return a.value?(E(),$(c,{key:0,style:{height:"100vh"}},{footer:m(()=>[v(n,{justify:"center"},{default:m(()=>[v(t,{onClick:f},{default:m(()=>[rt]),_:1}),v(t,{type:"primary",onClick:w,loading:D(p).loading},{default:m(()=>[ut]),_:1},8,["loading"])]),_:1})]),default:m(()=>[v(it,{ref_key:"formRef",ref:g,"init-form":a.value,phases:o.value},null,8,["init-form","phases"])]),_:1})):D(i)?(E(),$(n,{key:1,justify:"center",align:"center",style:{"min-height":"100vh"}},{default:m(()=>[D(b).loading?(E(),$(F,{key:0,title:"\u7B49\u5F85\u4EE5\u592A\u8FDE\u63A5\u4E2D..."},{icon:m(()=>[v(d)]),_:1})):(E(),$(F,{key:1,title:"\u4EE5\u592A\u8FDE\u63A5\u5931\u8D25",description:"\u4EE5\u592A\u6D53\u5EA6\u8FC7\u4F4E\uFF0C\u8BF7\u91CD\u65B0\u4ECE\u4E3B\u754C\u9762\u6253\u5F00",status:"error",size:"small"}))]),_:1})):Oe("",!0)}}}),lt=j({setup(e){return(a,o)=>(E(),$(Xe,null,{default:m(()=>[v(st)]),_:1}))}});Ge(lt).mount("#app");
