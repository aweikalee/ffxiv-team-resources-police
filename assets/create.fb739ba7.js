var y=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))_.call(n,t)&&u(e,t,n[t]);if(d)for(var t of d(n))C.call(n,t)&&u(e,t,n[t]);return e};import{n as I,o as m,k as h,y as p,d as $,t as R,aF as x,c as l,B as z,A as P,aG as S,h as f,j as w}from"./plugin-vue_export-helper.54a58cfa.js";function k(e){return n=>{n?e.value=n.$el:e.value=null}}var j=I("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[m("color-transition",{transition:"color .3s var(--n-bezier)"}),m("depth",{color:"var(--n-color)"},[h("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),h("svg",{height:"1em",width:"1em"})]);const A=Object.assign(Object.assign({},p.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),D=$({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:A,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=R(e),r=p("Icon","-icon",j,x,e,n),s=l(()=>{const{depth:o}=e,{common:{cubicBezierEaseInOut:a},self:g}=r.value;if(o!==void 0){const{color:v,[`opacity${o}Depth`]:b}=g;return{"--n-bezier":a,"--n-color":v,"--n-opacity":b}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),i=t?z("icon",l(()=>`${e.depth||"d"}`),s,e):void 0;return{mergedClsPrefix:n,mergedStyle:l(()=>{const{size:o,color:a}=e;return{fontSize:P(o),color:a}}),cssVars:t?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:r,component:s,onRender:i,themeClass:o}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&S("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),f("i",w(this.$attrs,{role:"img",class:[`${r}-icon`,o,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),s?f(s):this.$slots)}});let N=0;function L(){return++N}let O=0;function F(){return++O}let T=0;function G(){return T--}function B(e){return c({_id:0,name:"",regexp:"",_regexp:new RegExp("")},e)}function H(e){return c({_id:0,name:""},e)}function M(e){return c({id:0,title:"",phases:[B()],list:[],abilities:[]},e)}export{D as N,M as a,L as b,k as c,F as d,B as e,G as f,H as g};