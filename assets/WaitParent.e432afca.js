import{d as _e,r as u,bx as Ft,by as Mt,a7 as tt,R as nt,h as r,ad as Rt,bz as Pt,k as ie,n as b,q as M,aX as qe,o as ee,y as ye,S as te,bA as Bt,c as z,bb as xe,Q as Ke,w as It,bB as At,aU as Ge,B as ot,bC as $t,at as Ve,_ as Je,ao as Qe,bd as zt,t as Et,bD as kt,aN as Xe,O as Dt,P as Wt,bE as Vt,aZ as Lt,bF as jt,bG as Ut,aM as Nt,x as Kt,bH as He,b8 as Ht,b9 as qt,ba as Gt,T as Jt,g as Qt,v as Xt,b as Ye,U as Yt,bI as Zt,W as Ze,D as L,aB as en,bJ as tn,bv as nn,az as on,a3 as Le,a9 as je,aa as Ue,ab as re,ac as Ne,aA as ln,ap as an,ae as rn,ax as sn,af as un,ai as dn,ag as cn,ah as hn,bw as fn}from"./plugin-vue_export-helper.54a58cfa.js";function vn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const q="v-hidden",bn=Pt("[v-hidden]",{display:"none!important"});var et=_e({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:_}){const p=u(null),c=u(null);function h(){const{value:R}=p,{getCounter:a,getTail:F}=e;let d;if(a!==void 0?d=a():d=c.value,!R||!d)return;d.hasAttribute(q)&&d.removeAttribute(q);const{children:C}=R,P=R.offsetWidth,B=[],O=_.tail?F==null?void 0:F():null;let g=O?O.offsetWidth:0,m=!1;const $=R.children.length-(_.tail?1:0);for(let I=0;I<$-1;++I){if(I<0)continue;const k=C[I];if(m){k.hasAttribute(q)||k.setAttribute(q,"");continue}else k.hasAttribute(q)&&k.removeAttribute(q);const W=k.offsetWidth;if(g+=W,B[I]=W,g>P){const{updateCounter:A}=e;for(let T=I;T>=0;--T){const D=$-1-T;A!==void 0?A(D):d.textContent=`${D}`;const U=d.offsetWidth;if(g-=B[T],g+U<=P||T===0){m=!0,I=T-1,O&&(I===-1?(O.style.maxWidth=`${P-U}px`,O.style.boxSizing="border-box"):O.style.maxWidth="");break}}}}const{onUpdateOverflow:f}=e;m?f!==void 0&&f(!0):(f!==void 0&&f(!1),d.setAttribute(q,""))}const E=Ft();return bn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Mt,ssr:E}),tt(h),{selfRef:p,counterRef:c,sync:h}},render(){const{$slots:e}=this;return nt(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[Rt(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),pn=ie([b("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[b("base-loading",`
 color: var(--n-loading-color);
 `),b("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M("state-border",`
 z-index: 1;
 border-color: #0000;
 `),b("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),b("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),b("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),b("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[b("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M("render-label",`
 color: var(--n-text-color);
 `)]),qe("disabled",[ie("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ee("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ee("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),b("base-selection-label","background-color: var(--n-color-active);"),b("base-selection-tags","background-color: var(--n-color-active);")])]),ee("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),b("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),b("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),b("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),b("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ee(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),qe("disabled",[ie("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ee("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),b("base-selection-label",`background-color: var(--n-color-active-${e});`),b("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ee("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),b("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),b("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ie("&:last-child","padding-right: 0;"),b("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),gn=_e({name:"InternalSelection",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const _=u(null),p=u(null),c=u(null),h=u(null),E=u(null),R=u(null),a=u(null),F=u(null),d=u(null),C=u(null),P=u(!1),B=u(!1),O=u(!1),g=ye("InternalSelection","-internal-selection",pn,Bt,e,te(e,"clsPrefix")),m=z(()=>e.clearable&&!e.disabled&&(O.value||e.active)),$=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):xe(e.selectedOption.label,e.selectedOption,!0):e.placeholder),f=z(()=>{const n=e.selectedOption;if(!!n)return n.label}),I=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function k(){var n;const{value:l}=_;if(l){const{value:S}=p;S&&(S.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=d.value)===null||n===void 0||n.sync()))}}function W(){const{value:n}=C;n&&(n.style.display="none")}function A(){const{value:n}=C;n&&(n.style.display="inline-block")}Ke(te(e,"active"),n=>{n||W()}),Ke(te(e,"pattern"),()=>{e.multiple&&nt(k)});function T(n){const{onFocus:l}=e;l&&l(n)}function D(n){const{onBlur:l}=e;l&&l(n)}function U(n){const{onDeleteOption:l}=e;l&&l(n)}function H(n){const{onClear:l}=e;l&&l(n)}function w(n){const{onPatternInput:l}=e;l&&l(n)}function ne(n){var l;(!n.relatedTarget||!(!((l=c.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&T(n)}function se(n){var l;!((l=c.value)===null||l===void 0)&&l.contains(n.relatedTarget)||D(n)}function ue(n){H(n)}function G(){O.value=!0}function Ce(){O.value=!1}function J(n){!e.active||!e.filterable||n.target!==p.value&&n.preventDefault()}function de(n){U(n)}function Q(n){if(n.code==="Backspace"&&!N.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&de(l[l.length-1])}}const N=u(!1);let oe=null;function Oe(n){const{value:l}=_;if(l){const S=n.target.value;l.textContent=S,k()}N.value?oe=n:w(n)}function Te(){N.value=!0}function Se(){N.value=!1,w(oe),oe=null}function ce(n){var l;B.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function he(n){var l;B.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function X(){var n,l;if(e.filterable)B.value=!1,(n=R.value)===null||n===void 0||n.blur(),(l=p.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:S}=h;S==null||S.blur()}else{const{value:S}=E;S==null||S.blur()}}function V(){var n,l,S;e.filterable?(B.value=!1,(n=R.value)===null||n===void 0||n.focus()):e.multiple?(l=h.value)===null||l===void 0||l.focus():(S=E.value)===null||S===void 0||S.focus()}function fe(){const{value:n}=p;n&&(A(),n.focus())}function Y(){const{value:n}=p;n&&n.blur()}function Fe(n){const{value:l}=a;l&&l.setTextContent(`+${n}`)}function Me(){const{value:n}=F;return n}function Re(){return p.value}let le=null;function ae(){le!==null&&window.clearTimeout(le)}function Pe(){e.disabled||e.active||(ae(),le=window.setTimeout(()=>{P.value=!0},100))}function Be(){ae()}function Ie(n){n||(ae(),P.value=!1)}tt(()=>{It(()=>{const n=R.value;!n||(n.tabIndex=e.disabled||B.value?-1:0)})}),At(c,e.onResize);const{inlineThemeDisabled:ve}=e,be=z(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:S,color:Ae,placeholderColor:$e,textColor:ze,paddingSingle:pe,paddingMultiple:ge,caretColor:Ee,colorDisabled:ke,textColorDisabled:De,placeholderColorDisabled:me,colorActive:K,boxShadowFocus:t,boxShadowActive:o,boxShadowHover:i,border:v,borderFocus:s,borderHover:x,borderActive:y,arrowColor:Z,arrowColorDisabled:we,loadingColor:We,colorActiveWarning:lt,boxShadowFocusWarning:at,boxShadowActiveWarning:rt,boxShadowHoverWarning:it,borderWarning:st,borderFocusWarning:ut,borderHoverWarning:dt,borderActiveWarning:ct,colorActiveError:ht,boxShadowFocusError:ft,boxShadowActiveError:vt,boxShadowHoverError:bt,borderError:pt,borderFocusError:gt,borderHoverError:mt,borderActiveError:wt,clearColor:xt,clearColorHover:yt,clearColorPressed:_t,clearSize:Ct,arrowSize:Ot,[Ge("height",n)]:Tt,[Ge("fontSize",n)]:St}}=g.value;return{"--n-bezier":l,"--n-border":v,"--n-border-active":y,"--n-border-focus":s,"--n-border-hover":x,"--n-border-radius":S,"--n-box-shadow-active":o,"--n-box-shadow-focus":t,"--n-box-shadow-hover":i,"--n-caret-color":Ee,"--n-color":Ae,"--n-color-active":K,"--n-color-disabled":ke,"--n-font-size":St,"--n-height":Tt,"--n-padding-single":pe,"--n-padding-multiple":ge,"--n-placeholder-color":$e,"--n-placeholder-color-disabled":me,"--n-text-color":ze,"--n-text-color-disabled":De,"--n-arrow-color":Z,"--n-arrow-color-disabled":we,"--n-loading-color":We,"--n-color-active-warning":lt,"--n-box-shadow-focus-warning":at,"--n-box-shadow-active-warning":rt,"--n-box-shadow-hover-warning":it,"--n-border-warning":st,"--n-border-focus-warning":ut,"--n-border-hover-warning":dt,"--n-border-active-warning":ct,"--n-color-active-error":ht,"--n-box-shadow-focus-error":ft,"--n-box-shadow-active-error":vt,"--n-box-shadow-hover-error":bt,"--n-border-error":pt,"--n-border-focus-error":gt,"--n-border-hover-error":mt,"--n-border-active-error":wt,"--n-clear-size":Ct,"--n-clear-color":xt,"--n-clear-color-hover":yt,"--n-clear-color-pressed":_t,"--n-arrow-size":Ot}}),j=ve?ot("internal-selection",z(()=>e.size[0]),be,e):void 0;return{mergedTheme:g,mergedClearable:m,patternInputFocused:B,filterablePlaceholder:$,label:f,selected:I,showTagsPanel:P,isCompositing:N,counterRef:a,counterWrapperRef:F,patternInputMirrorRef:_,patternInputRef:p,selfRef:c,multipleElRef:h,singleElRef:E,patternInputWrapperRef:R,overflowRef:d,inputTagElRef:C,handleMouseDown:J,handleFocusin:ne,handleClear:ue,handleMouseEnter:G,handleMouseLeave:Ce,handleDeleteOption:de,handlePatternKeyDown:Q,handlePatternInputInput:Oe,handlePatternInputBlur:he,handlePatternInputFocus:ce,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:Be,handleFocusout:se,handleCompositionEnd:Se,handleCompositionStart:Te,onPopoverUpdateShow:Ie,focus:V,focusInput:fe,blur:X,blurInput:Y,updateCounter:Fe,getCounter:Me,getTail:Re,renderLabel:e.renderLabel,cssVars:ve?void 0:be,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{status:e,multiple:_,size:p,disabled:c,filterable:h,maxTagCount:E,bordered:R,clsPrefix:a,onRender:F,renderTag:d,renderLabel:C}=this;F==null||F();const P=E==="responsive",B=typeof E=="number",O=P||B,g=r($t,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var $,f;return(f=($=this.$slots).arrow)===null||f===void 0?void 0:f.call($)}});let m;if(_){const $=w=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:w.value},d?d({option:w,handleClose:()=>this.handleDeleteOption(w)}):r(Ve,{size:p,closable:!w.disabled,disabled:c,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(w)},{default:()=>C?C(w,!0):xe(w.label,w,!0)})),f=(B?this.selectedOptions.slice(0,E):this.selectedOptions).map($),I=h?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,k=P?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Ve,{size:p,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let W;if(B){const w=this.selectedOptions.length-E;w>0&&(W=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Ve,{size:p,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${w}`})))}const A=P?h?r(et,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>f,counter:k,tail:()=>I}):r(et,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>f,counter:k}):B?f.concat(W):f,T=O?()=>r("div",{class:`${a}-base-selection-popover`},P?f:this.selectedOptions.map($)):void 0,D=O?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,H=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},this.placeholder):null;if(h){const w=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},A,P?null:I,g);m=r(Qe,null,O?r(Je,Object.assign({},D,{scrollable:!0}),{trigger:()=>w,default:T}):w,H)}else{const w=r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:c?void 0:0},A,g);m=r(Qe,null,O?r(Je,Object.assign({},D,{scrollable:!0,style:"height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>w,default:T}):w,H)}}else if(h){const $=this.pattern||this.isCompositing,f=this.active?!$:!this.selected,I=this.active?!1:this.selected;m=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):null,f?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else m=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:vn(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},this.placeholder),g);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},m,R?r("div",{class:`${a}-base-selection__border`}):null,R?r("div",{class:`${a}-base-selection__state-border`}):null)}}),mn=ie([b("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),b("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[zt()])]);const wn=Object.assign(Object.assign({},ye.props),{to:He.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:Zt},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,onChange:[Function,Array],items:Array});var Cn=_e({name:"Select",props:wn,setup(e){const{mergedClsPrefixRef:_,mergedBorderedRef:p,namespaceRef:c,inlineThemeDisabled:h}=Et(e),E=ye("Select","-select",mn,kt,e,_),R=u(e.defaultValue),a=te(e,"value"),F=Xe(a,R),d=u(!1),C=u(""),P=z(()=>Dt(w.value,Wt)),B=z(()=>Vt(H.value)),O=u(!1),g=Xe(te(e,"show"),O),m=u(null),$=u(null),f=u(null),{localeRef:I}=Lt("Select"),k=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:I.value.placeholder}),W=jt(e,["items","options"]),A=u([]),T=u([]),D=u(new Map),U=z(()=>{const{fallbackOption:t}=e;return t?o=>Object.assign(t(o),{value:o}):!1}),H=z(()=>T.value.concat(A.value).concat(W.value)),w=z(()=>{if(e.remote)return W.value;{const{value:t}=H,{value:o}=C;if(!o.length||!e.filterable)return t;{const{filter:i}=e;return Ut(t,i,o)}}});function ne(t){const o=e.remote,{value:i}=D,{value:v}=B,{value:s}=U,x=[];return t.forEach(y=>{if(v.has(y))x.push(v.get(y));else if(o&&i.has(y))x.push(i.get(y));else if(s){const Z=s(y);Z&&x.push(Z)}}),x}const se=z(()=>{if(e.multiple){const{value:t}=F;return Array.isArray(t)?ne(t):[]}return null}),ue=z(()=>{const{value:t}=F;return!e.multiple&&!Array.isArray(t)?t===null?null:ne([t])[0]||null:null}),G=Nt(e),{mergedSizeRef:Ce,mergedDisabledRef:J,mergedStatusRef:de}=G;function Q(t,o){const{onChange:i,"onUpdate:value":v,onUpdateValue:s}=e,{nTriggerFormChange:x,nTriggerFormInput:y}=G;i&&L(i,t,o),s&&L(s,t,o),v&&L(v,t,o),R.value=t,x(),y()}function N(t){const{onBlur:o}=e,{nTriggerFormBlur:i}=G;o&&L(o,t),i()}function oe(){const{onClear:t}=e;t&&L(t)}function Oe(t){const{onFocus:o}=e,{nTriggerFormFocus:i}=G;o&&L(o,t),i()}function Te(t){const{onSearch:o}=e;o&&L(o,t)}function Se(t){const{onScroll:o}=e;o&&L(o,t)}function ce(){var t;const{remote:o,multiple:i}=e;if(o){const{value:v}=D;if(i)(t=se.value)===null||t===void 0||t.forEach(s=>{v.set(s.value,s)});else{const s=ue.value;s&&v.set(s.value,s)}}}function he(t){const{onUpdateShow:o,"onUpdate:show":i}=e;o&&L(o,t),i&&L(i,t),O.value=t}function X(){J.value||(he(!0),O.value=!0,e.filterable&&Ee())}function V(){he(!1)}function fe(){C.value="",T.value=[]}const Y=u(!1);function Fe(){e.filterable&&(Y.value=!0)}function Me(){e.filterable&&(Y.value=!1,g.value||fe())}function Re(){J.value||(g.value?e.filterable||V():X())}function le(t){var o,i;!((i=(o=f.value)===null||o===void 0?void 0:o.selfRef)===null||i===void 0)&&i.contains(t.relatedTarget)||(d.value=!1,N(t),V())}function ae(t){Oe(t),d.value=!0}function Pe(t){d.value=!0}function Be(t){var o;!((o=m.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(d.value=!1,N(t),V())}function Ie(){var t;(t=m.value)===null||t===void 0||t.focus(),V()}function ve(t){var o;g.value&&(!((o=m.value)===null||o===void 0)&&o.$el.contains(t.target)||V())}function be(t){if(!Array.isArray(t))return[];if(U.value)return Array.from(t);{const{remote:o}=e,{value:i}=B;if(o){const{value:v}=D;return t.filter(s=>i.has(s)||v.has(s))}else return t.filter(v=>i.has(v))}}function j(t){n(t.rawNode)}function n(t){if(J.value)return;const{tag:o,remote:i,clearFilterAfterSelect:v}=e;if(o&&!i){const{value:s}=T,x=s[0]||null;x&&(A.value.push(x),T.value=[])}if(i&&D.value.set(t.value,t),e.multiple){const s=be(F.value),x=s.findIndex(y=>y===t.value);if(~x){if(s.splice(x,1),o&&!i){const y=l(t.value);~y&&(A.value.splice(y,1),v&&(C.value=""))}}else s.push(t.value),v&&(C.value="");Q(s,ne(s))}else{if(o&&!i){const s=l(t.value);~s?A.value=[A.value[s]]:A.value=[]}ge(),V(),Q(t.value,t)}}function l(t){return A.value.findIndex(i=>i.value===t)}function S(t){g.value||X();const{value:o}=t.target;C.value=o;const{tag:i,remote:v}=e;if(Te(o),i&&!v){if(!o){T.value=[];return}const s=e.onCreate(o);W.value.some(x=>x.value===s.value)||A.value.some(x=>x.value===s.value)?T.value=[]:T.value=[s]}}function Ae(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&V(),oe(),o?Q([],[]):Q(null,null)}function $e(t){!Ze(t,"action")&&!Ze(t,"empty")&&t.preventDefault()}function ze(t){Se(t)}function pe(t){var o,i,v,s,x;switch(t.code){case"Space":if(e.filterable)break;t.preventDefault();case"Enter":case"NumpadEnter":if(!(!((o=m.value)===null||o===void 0)&&o.isCompositing)){if(g.value){const y=(i=f.value)===null||i===void 0?void 0:i.getPendingTmNode();y?j(y):e.filterable||(V(),ge())}else if(X(),e.tag&&Y.value){const y=T.value[0];if(y){const Z=y.value,{value:we}=F;e.multiple&&Array.isArray(we)&&we.some(We=>We===Z)||n(y)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((v=f.value)===null||v===void 0||v.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(s=f.value)===null||s===void 0||s.next():X();break;case"Escape":V(),(x=m.value)===null||x===void 0||x.focus();break}}function ge(){var t;(t=m.value)===null||t===void 0||t.focus()}function Ee(){var t;(t=m.value)===null||t===void 0||t.focusInput()}function ke(){var t;!g.value||(t=$.value)===null||t===void 0||t.syncPosition()}ce(),Ke(te(e,"options"),ce);const De={focus:()=>{var t;(t=m.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=m.value)===null||t===void 0||t.blur()}},me=z(()=>{const{self:{menuBoxShadow:t}}=E.value;return{"--n-menu-box-shadow":t}}),K=h?ot("select",void 0,me,e):void 0;return Object.assign(Object.assign({},De),{mergedStatus:de,mergedClsPrefix:_,mergedBordered:p,namespace:c,treeMate:P,isMounted:Kt(),triggerRef:m,menuRef:f,pattern:C,uncontrolledShow:O,mergedShow:g,adjustedTo:He(e),uncontrolledValue:R,mergedValue:F,followerRef:$,localizedPlaceholder:k,selectedOption:ue,selectedOptions:se,mergedSize:Ce,mergedDisabled:J,focused:d,activeWithoutMenuOpen:Y,inlineThemeDisabled:h,onTriggerInputFocus:Fe,onTriggerInputBlur:Me,handleTriggerOrMenuResize:ke,handleMenuFocus:Pe,handleMenuBlur:Be,handleMenuTabOut:Ie,handleTriggerClick:Re,handleToggle:j,handleDeleteOption:n,handlePatternInput:S,handleClear:Ae,handleTriggerBlur:le,handleTriggerFocus:ae,handleKeydown:pe,handleMenuAfterLeave:fe,handleMenuClickOutside:ve,handleMenuScroll:ze,handleMenuKeydown:pe,handleMenuMousedown:$e,mergedTheme:E,cssVars:h?void 0:me,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Ht,null,{default:()=>[r(qt,null,{default:()=>r(gn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,_;return[(_=(e=this.$slots).arrow)===null||_===void 0?void 0:_.call(e)]}})}),r(Gt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===He.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Jt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,_,p;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Qt(r(Yt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(_=this.menuProps)===null||_===void 0?void 0:_.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(p=this.menuProps)===null||p===void 0?void 0:p.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,h;return[(h=(c=this.$slots).empty)===null||h===void 0?void 0:h.call(c)]},action:()=>{var c,h;return[(h=(c=this.$slots).action)===null||h===void 0?void 0:h.call(c)]}}),this.displayDirective==="show"?[[Xt,this.mergedShow],[Ye,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ye,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});const xn=rn("\u5173\u95ED"),yn=_e({setup(e){const _=tn(100),p=nn(),c=on();function h(){sn(window.opener,"@close",{}),window.close()}return(E,R)=>{const a=un,F=dn,d=cn,C=hn,P=fn;return Le(_)?(je(),Ue(P,{key:0,class:"wait-parent",style:ln({backgroundColor:Le(c).cardColor})},{default:re(()=>[Le(p).loading?(je(),Ue(F,{key:0,title:"\u7B49\u5F85\u4E3B\u7A97\u53E3\u8FDE\u63A5\u4E2D..."},{icon:re(()=>[Ne(a)]),_:1})):(je(),Ue(F,{key:1,title:"\u8FDE\u63A5\u5931\u8D25",description:"\u65E0\u6CD5\u8FDE\u63A5\u4E3B\u7A97\u53E3\uFF0C\u8BF7\u91CD\u65B0\u4ECE\u4E3B\u7A97\u53E3\u6253\u5F00",status:"error",size:"small"},{default:re(()=>[Ne(C,{justify:"center"},{default:re(()=>[Ne(d,{onClick:h},{default:re(()=>[xn]),_:1})]),_:1})]),_:1}))]),_:1},8,["style"])):an("",!0)}}});var On=en(yn,[["__scopeId","data-v-0057730e"]]);export{On as W,Cn as _};
