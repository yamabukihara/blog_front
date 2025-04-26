import{G as ee,bp as ye,e as A,bq as ut,br as vt,s as c,bs as ht,bt as Z,bu as gt,a9 as xt,aa as Pe,bh as mt,M as Q,aI as yt,a6 as wt,R as St,ab as Ct,bv as Rt,bw as Tt,F as r,aj as i,X as S,al as T,am as zt,H as $t,J as We,bx as we,aK as ne,L as Pt,U as oe,Q as ie,p as Wt,at as Lt,K as j,by as Et,ap as _t,aD as I,au as Y,O as At,a0 as Se,aG as se,bz as Bt,S as J,aq as kt,be as jt,az as It,bA as Ht,aL as Ot}from"./index-25b6f427.js";import{A as Ft}from"./Add-d4ec7561.js";const Mt=ye(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ye("&::-webkit-scrollbar",{width:0,height:0})]),Dt=ee({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=A(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const s=ut();return Mt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:vt,ssr:s}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var m;(m=e.value)===null||m===void 0||m.scrollTo(...d)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Nt=/\s/;function Vt(e){for(var n=e.length;n--&&Nt.test(e.charAt(n)););return n}var Xt=/^\s+/;function Ut(e){return e&&e.slice(0,Vt(e)+1).replace(Xt,"")}var Ce=0/0,Gt=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Yt=parseInt;function Re(e){if(typeof e=="number")return e;if(ht(e))return Ce;if(Z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ut(e);var s=Kt.test(e);return s||qt.test(e)?Yt(e.slice(2),s?2:8):Gt.test(e)?Ce:+e}var Jt=function(){return gt.Date.now()};const le=Jt;var Qt="Expected a function",Zt=Math.max,ea=Math.min;function ta(e,n,s){var u,d,m,v,f,x,h=0,g=!1,L=!1,E=!0;if(typeof e!="function")throw new TypeError(Qt);n=Re(n)||0,Z(s)&&(g=!!s.leading,L="maxWait"in s,m=L?Zt(Re(s.maxWait)||0,n):m,E="trailing"in s?!!s.trailing:E);function y(b){var R=u,F=d;return u=d=void 0,h=b,v=e.apply(F,R),v}function z(b){return h=b,f=setTimeout(W,n),g?y(b):v}function C(b){var R=b-x,F=b-h,U=n-R;return L?ea(U,m-F):U}function P(b){var R=b-x,F=b-h;return x===void 0||R>=n||R<0||L&&F>=m}function W(){var b=le();if(P(b))return $(b);f=setTimeout(W,C(b))}function $(b){return f=void 0,E&&u?y(b):(u=d=void 0,v)}function O(){f!==void 0&&clearTimeout(f),h=0,u=x=d=f=void 0}function _(){return f===void 0?v:$(le())}function p(){var b=le(),R=P(b);if(u=arguments,d=this,x=b,R){if(f===void 0)return z(x);if(L)return clearTimeout(f),f=setTimeout(W,n),y(x)}return f===void 0&&(f=setTimeout(W,n)),v}return p.cancel=O,p.flush=_,p}var aa="Expected a function";function de(e,n,s){var u=!0,d=!0;if(typeof e!="function")throw new TypeError(aa);return Z(s)&&(u="leading"in s?!!s.leading:u,d="trailing"in s?!!s.trailing:d),ta(e,n,{leading:u,maxWait:n,trailing:d})}const fe=xt("n-tabs"),Le={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},la=ee({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Le,slots:Object,setup(e){const n=Pe(fe,null);return n||mt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ra=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Tt(Le,["displayDirective"])),be=ee({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ra,setup(e){const{mergedClsPrefixRef:n,valueRef:s,typeRef:u,closableRef:d,tabStyleRef:m,addTabStyleRef:v,tabClassRef:f,addTabClassRef:x,tabChangeIdRef:h,onBeforeLeaveRef:g,triggerRef:L,handleAdd:E,activateTab:y,handleClose:z}=Pe(fe);return{trigger:L,mergedClosable:Q(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?d.value:C}),style:m,addStyle:v,tabClass:f,addTabClass:x,clsPrefix:n,value:s,type:u,handleClose(C){C.stopPropagation(),!e.disabled&&z(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){E();return}const{name:C}=e,P=++h.id;if(C!==s.value){const{value:W}=g;W?Promise.resolve(W(e.name,s.value)).then($=>{$&&h.id===P&&y(C)}):y(C)}}}},render(){const{internalAddable:e,clsPrefix:n,name:s,disabled:u,label:d,tab:m,value:v,mergedClosable:f,trigger:x,$slots:{default:h}}=this,g=d??m;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:s,"data-name":s,"data-disabled":u?!0:void 0},yt({class:[`${n}-tabs-tab`,v===s&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,f&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(wt,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(St,{clsPrefix:n},{default:()=>c(Ft,null)})):h?h():typeof g=="object"?g:Ct(g??s)),f&&this.type==="card"?c(Rt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),na=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[S("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[T("prefix, suffix",`
 display: flex;
 align-items: center;
 `),T("prefix","padding-right: 16px;"),T("suffix","padding-left: 16px;")]),i("top, bottom",[r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[S("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),S("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),T("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),T("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[S("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),S("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),S("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),S("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),S("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[T("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[T("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),zt("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")])]),i("left, right",`
 flex-direction: column; 
 `,[T("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),i("top",[i("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),T("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),oa=Object.assign(Object.assign({},We.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),da=ee({name:"Tabs",props:oa,slots:Object,setup(e,{slots:n}){var s,u,d,m;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=$t(e),x=We("Tabs","-tabs",na,Bt,e,v),h=A(null),g=A(null),L=A(null),E=A(null),y=A(null),z=A(null),C=A(!0),P=A(!0),W=we(e,["labelSize","size"]),$=we(e,["activeName","value"]),O=A((u=(s=$.value)!==null&&s!==void 0?s:e.defaultValue)!==null&&u!==void 0?u:n.default?(m=(d=ne(n.default())[0])===null||d===void 0?void 0:d.props)===null||m===void 0?void 0:m.name:null),_=Pt($,O),p={id:0},b=Q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});oe(_,()=>{p.id=0,G(),ue()});function R(){var t;const{value:a}=_;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function F(t){if(e.type==="card")return;const{value:a}=g;if(!a)return;const o=a.style.opacity==="0";if(t){const l=`${v.value}-tabs-bar--disabled`,{barWidth:w,placement:B}=e;if(t.dataset.disabled==="true"?a.classList.add(l):a.classList.remove(l),["top","bottom"].includes(B)){if(pe(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const k=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${k}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const k=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${k}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function U(){if(e.type==="card")return;const{value:t}=g;t&&(t.style.opacity="0")}function pe(t){const{value:a}=g;if(a)for(const o of t)a.style[o]=""}function G(){if(e.type==="card")return;const t=R();t?F(t):U()}function ue(){var t;const a=(t=y.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=R();if(!o)return;const{scrollLeft:l,offsetWidth:w}=a,{offsetLeft:B,offsetWidth:k}=o;l>B?a.scrollTo({top:0,left:B,behavior:"smooth"}):B+k>l+w&&a.scrollTo({top:0,left:B+k-w,behavior:"smooth"})}const K=A(null);let te=0,H=null;function Ee(t){const a=K.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,l=()=>{a.style.height=o,a.style.maxHeight=o};H?(l(),H(),H=null):H=l}}function _e(t){const a=K.value;if(a){const o=t.getBoundingClientRect().height,l=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};H?(H(),H=null,l()):H=l}}function Ae(){const t=K.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:l}=a;o!==void 0&&(t.style.maxHeight=o),l!==void 0&&(t.style.height=l)}}}const ve={value:[]},he=A("next");function Be(t){const a=_.value;let o="next";for(const l of ve.value){if(l===a)break;if(l===t){o="prev";break}}he.value=o,ke(t)}function ke(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":l}=e;a&&J(a,t),o&&J(o,t),l&&J(l,t),O.value=t}function je(t){const{onClose:a}=e;a&&J(a,t)}function ge(){const{value:t}=g;if(!t)return;const a="transition-disabled";t.classList.add(a),G(),t.classList.remove(a)}const M=A(null);function ae({transitionDisabled:t}){const a=h.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=R();o&&M.value&&(M.value.style.width=`${o.offsetWidth}px`,M.value.style.height=`${o.offsetHeight}px`,M.value.style.transform=`translateX(${o.offsetLeft-kt(getComputedStyle(a).paddingLeft)}px)`,t&&M.value.offsetWidth),t&&a.classList.remove("transition-disabled")}oe([_],()=>{e.type==="segment"&&ie(()=>{ae({transitionDisabled:!1})})}),Wt(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let xe=0;function Ie(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||xe===t.contentRect.width)return;xe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&ge(),o!=="segment"){const{placement:l}=e;re((l==="top"||l==="bottom"?(a=y.value)===null||a===void 0?void 0:a.$el:z.value)||null)}}const He=de(Ie,64);oe([()=>e.justifyContent,()=>e.size],()=>{ie(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ge()})});const D=A(!1);function Oe(t){var a;const{target:o,contentRect:{width:l,height:w}}=t,B=o.parentElement.parentElement.offsetWidth,k=o.parentElement.parentElement.offsetHeight,{placement:V}=e;if(!D.value)V==="top"||V==="bottom"?B<l&&(D.value=!0):k<w&&(D.value=!0);else{const{value:X}=E;if(!X)return;V==="top"||V==="bottom"?B-l>X.$el.offsetWidth&&(D.value=!1):k-w>X.$el.offsetHeight&&(D.value=!1)}re(((a=y.value)===null||a===void 0?void 0:a.$el)||null)}const Fe=de(Oe,64);function Me(){const{onAdd:t}=e;t&&t(),ie(()=>{const a=R(),{value:o}=y;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:l,offsetWidth:w}=t;C.value=o<=0,P.value=o+w>=l}else{const{scrollTop:o,scrollHeight:l,offsetHeight:w}=t;C.value=o<=0,P.value=o+w>=l}}const De=de(t=>{re(t.target)},64);Lt(fe,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),tabClassRef:j(e,"tabClass"),addTabStyleRef:j(e,"addTabStyle"),addTabClassRef:j(e,"addTabClass"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:_,tabChangeIdRef:p,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:Be,handleClose:je,handleAdd:Me}),Et(()=>{G(),ue()}),_t(()=>{const{value:t}=L;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,l=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(l):t.classList.add(l)});const Ne={syncBarPosition:()=>{G()}},Ve=()=>{ae({transitionDisabled:!0})},me=Q(()=>{const{value:t}=W,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],l=`${t}${o}`,{self:{barColor:w,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:V,tabColor:X,tabBorderColor:Xe,paneTextColor:Ue,tabFontWeight:Ge,tabBorderRadius:Ke,tabFontWeightActive:qe,colorSegment:Ye,fontWeightStrong:Je,tabColorSegment:Qe,closeSize:Ze,closeIconSize:et,closeColorHover:tt,closeColorPressed:at,closeBorderRadius:rt,[I("panePadding",t)]:q,[I("tabPadding",l)]:nt,[I("tabPaddingVertical",l)]:ot,[I("tabGap",l)]:it,[I("tabGap",`${l}Vertical`)]:st,[I("tabTextColor",a)]:lt,[I("tabTextColorActive",a)]:dt,[I("tabTextColorHover",a)]:ct,[I("tabTextColorDisabled",a)]:bt,[I("tabFontSize",t)]:ft},common:{cubicBezierEaseInOut:pt}}=x.value;return{"--n-bezier":pt,"--n-color-segment":Ye,"--n-bar-color":w,"--n-tab-font-size":ft,"--n-tab-text-color":lt,"--n-tab-text-color-active":dt,"--n-tab-text-color-disabled":bt,"--n-tab-text-color-hover":ct,"--n-pane-text-color":Ue,"--n-tab-border-color":Xe,"--n-tab-border-radius":Ke,"--n-close-size":Ze,"--n-close-icon-size":et,"--n-close-color-hover":tt,"--n-close-color-pressed":at,"--n-close-border-radius":rt,"--n-close-icon-color":B,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":V,"--n-tab-color":X,"--n-tab-font-weight":Ge,"--n-tab-font-weight-active":qe,"--n-tab-padding":nt,"--n-tab-padding-vertical":ot,"--n-tab-gap":it,"--n-tab-gap-vertical":st,"--n-pane-padding-left":Y(q,"left"),"--n-pane-padding-right":Y(q,"right"),"--n-pane-padding-top":Y(q,"top"),"--n-pane-padding-bottom":Y(q,"bottom"),"--n-font-weight-strong":Je,"--n-tab-color-segment":Qe}}),N=f?At("tabs",Q(()=>`${W.value[0]}${e.type[0]}`),me,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:_,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:K,tabsElRef:h,barElRef:g,addTabInstRef:E,xScrollInstRef:y,scrollWrapperElRef:L,addTabFixed:D,tabWrapperStyle:b,handleNavResize:He,mergedSize:W,handleScroll:De,handleTabsResize:Fe,cssVars:f?void 0:me,themeClass:N==null?void 0:N.themeClass,animationDirection:he,renderNameListRef:ve,yScrollElRef:z,handleSegmentResize:Ve,onAnimationBeforeLeave:Ee,onAnimationEnter:_e,onAnimationAfterEnter:Ae,onRender:N==null?void 0:N.onRender},Ne)},render(){const{mergedClsPrefix:e,type:n,placement:s,addTabFixed:u,addable:d,mergedSize:m,renderNameListRef:v,onRender:f,paneWrapperClass:x,paneWrapperStyle:h,$slots:{default:g,prefix:L,suffix:E}}=this;f==null||f();const y=g?ne(g()).filter(p=>p.type.__TAB_PANE__===!0):[],z=g?ne(g()).filter(p=>p.type.__TAB__===!0):[],C=!z.length,P=n==="card",W=n==="segment",$=!P&&!W&&this.justifyContent;v.value=[];const O=()=>{const p=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:s==="top"||s==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),C?y.map((b,R)=>(v.value.push(b.props.name),ce(c(be,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0&&(!$||$==="center"||$==="start"||$==="end")}),b.children?{default:b.children.tab}:void 0)))):z.map((b,R)=>(v.value.push(b.props.name),ce(R!==0&&!$?$e(b):b))),!u&&d&&P?ze(d,(C?y.length:z.length)!==0):null,$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&d?c(se,{onResize:this.handleTabsResize},{default:()=>p}):p,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},_=W?"top":s;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${m}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${_}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${_}`,`${e}-tabs-nav`]},Se(L,p=>p&&c("div",{class:`${e}-tabs-nav__prefix`},p)),W?c(se,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),C?y.map((p,b)=>(v.value.push(p.props.name),c(be,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),p.children?{default:p.children.tab}:void 0))):z.map((p,b)=>(v.value.push(p.props.name),b===0?p:$e(p))))}):c(se,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(_)?c(Dt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:O}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},O()))}),u&&d&&P?ze(d,!0):null,Se(E,p=>p&&c("div",{class:`${e}-tabs-nav__suffix`},p))),C&&(this.animated&&(_==="top"||_==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,x]},Te(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Te(y,this.mergedValue,this.renderedNames)))}});function Te(e,n,s,u,d,m,v){const f=[];return e.forEach(x=>{const{name:h,displayDirective:g,"display-directive":L}=x.props,E=z=>g===z||L===z,y=n===h;if(x.key!==void 0&&(x.key=h),y||E("show")||E("show:lazy")&&s.has(h)){s.has(h)||s.add(h);const z=!E("if");f.push(z?jt(x,[[It,y]]):x)}}),v?c(Ht,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:m},{default:()=>f}):f}function ze(e,n){return c(be,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function $e(e){const n=Ot(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{da as N,la as a};
