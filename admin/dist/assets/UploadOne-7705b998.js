import{F as N,aj as h,G as S,H as T,J as C,M as x,aD as k,O as V,bx as R,s as m,bB as U,a as D,e as O,U as I,y as j,o as g,V as v,j as b,w as p,bC as P,f as F,i as c,g as y,bD as M,l as A}from"./index-25b6f427.js";import{a as E,N as H}from"./Upload-af1387d7.js";const J=N("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("italic",{fontStyle:"italic"}),h("underline",{textDecoration:"underline"}),h("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),K=Object.assign(Object.assign({},C.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),G=S({name:"Text",props:K,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=T(e),o=C("Typography","-text",J,U,e,i),a=x(()=>{const{depth:s,type:u}=e,f=u==="default"?s===void 0?"textColor":`textColor${s}Depth`:k("textColor",u),{common:{fontWeightStrong:n,fontFamilyMono:l,cubicBezierEaseInOut:d},self:{codeTextColor:w,codeBorderRadius:B,codeColor:_,codeBorder:$,[f]:z}}=o.value;return{"--n-bezier":d,"--n-text-color":z,"--n-font-weight-strong":n,"--n-font-famliy-mono":l,"--n-code-border-radius":B,"--n-code-text-color":w,"--n-code-color":_,"--n-code-border":$}}),t=r?V("text",x(()=>`${e.type[0]}${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:i,compitableTag:R(e,["as","tag"]),cssVars:r?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,i,r;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const a=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(r=(i=this.$slots).default)===null||r===void 0?void 0:r.call(i);return this.code?m("code",{class:a,style:this.cssVars},this.delete?m("del",null,t):t):this.delete?m("del",{class:a,style:this.cssVars},t):m(this.compitableTag||"span",{class:a,style:this.cssVars},t)}}),L=["src"],W={class:"mb-3"},X={__name:"UploadOne",props:{preview:{type:String,default:""},width:{type:Number,default:120}},emits:["update:preview"],setup(e,{expose:i,emit:r}){const o=e,a=r,{token:t}=D(),s=O(o.preview);I(()=>o.preview,n=>s.value=n);function u({event:n}){const l=(n==null?void 0:n.target).response,d=JSON.parse(l);if(d.code!==0){$message==null||$message.error(d.message);return}s.value=d.data,a("update:preview",s.value)}const f=x(()=>j(s.value));return i({previewImg:s}),(n,l)=>(g(),v("div",null,[b(c(H),{action:"/api/upload",headers:{Authorization:`Bearer ${c(t)}`},"show-file-list":!1,onFinish:u},{default:p(()=>[s.value?(g(),v("img",{key:0,"border-color":"#d9d9d9",class:"cursor-pointer border-2 rounded-lg border-dashed hover:border-color-lightblue",style:P({width:`${o.width}px`}),src:f.value,alt:"文章封面"},null,12,L)):(g(),F(c(E),{key:1},{default:p(()=>[y("div",W,[b(c(M),{size:"50",depth:3},{default:p(()=>l[0]||(l[0]=[y("span",{class:"i-mdi:upload"},null,-1)])),_:1})]),b(c(G),null,{default:p(()=>l[1]||(l[1]=[A(" 点击或者拖动文件到该区域来上传 ")])),_:1})]),_:1}))]),_:1},8,["headers"])]))}};export{X as _};
