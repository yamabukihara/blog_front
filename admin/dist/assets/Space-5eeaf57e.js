import{p as on,cc as qe,U as me,ay as pn,G as se,s as l,F,al as k,X as Z,H as $e,J as oe,cd as Jn,M,aD as te,O as He,R as gn,aa as bn,ce as ln,ab as Oe,Y as Ze,bd as mn,aj as G,am as en,bi as wn,Z as rn,K as W,cf as Yn,e as _,as as Qn,Q as yn,aq as nn,au as Ie,at as an,a0 as sn,ad as Xn,b9 as et,a2 as nt,ag as Be,cg as tt,ch as ot,ap as it,z as Je,ci as dn,a8 as lt,a6 as rt,cj as at,L as cn,bx as st,ao as dt,I as ct,bk as ut,bl as tn,ba as ft,bb as ht,bc as vt,be as pt,az as gt,bf as un,ck as bt,bg as mt,bm as wt,S as ne,cl as yt,ae as xt,cm as Ct,aK as St,cn as Ot}from"./index-25b6f427.js";import{u as xn,a as Rt}from"./Input-4dc6aa48.js";import{V as Ft,F as zt}from"./RadioGroup-9f11dd0d.js";import{g as Tt}from"./get-slot-1efb97e5.js";function Cn(e,t){t&&(on(()=>{const{value:a}=e;a&&qe.registerHandler(a,t)}),me(e,(a,s)=>{s&&qe.unregisterHandler(s)},{deep:!1}),pn(()=>{const{value:a}=e;a&&qe.unregisterHandler(a)}))}function fn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Xt(e){switch(e){case"tiny":return"mini";case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}throw new Error(`${e} has no smaller size.`)}function Ye(e){const t=e.filter(a=>a!==void 0);if(t.length!==0)return t.length===1?t[0]:a=>{e.forEach(s=>{s&&s(a)})}}const Mt=se({name:"Checkmark",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},l("g",{fill:"none"},l("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Pt=se({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),kt=F("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[k("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[k("description",`
 margin-top: 8px;
 `)])]),k("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),_t=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),It=se({name:"Empty",props:_t,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:a,mergedComponentPropsRef:s}=$e(e),c=oe("Empty","-empty",kt,Jn,e,t),{localeRef:h}=xn("Empty"),v=M(()=>{var p,m,y;return(p=e.description)!==null&&p!==void 0?p:(y=(m=s==null?void 0:s.value)===null||m===void 0?void 0:m.Empty)===null||y===void 0?void 0:y.description}),i=M(()=>{var p,m;return((m=(p=s==null?void 0:s.value)===null||p===void 0?void 0:p.Empty)===null||m===void 0?void 0:m.renderIcon)||(()=>l(Pt,null))}),z=M(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:m},self:{[te("iconSize",p)]:y,[te("fontSize",p)]:C,textColor:b,iconColor:B,extraTextColor:A}}=c.value;return{"--n-icon-size":y,"--n-font-size":C,"--n-bezier":m,"--n-text-color":b,"--n-icon-color":B,"--n-extra-text-color":A}}),T=a?He("empty",M(()=>{let p="";const{size:m}=e;return p+=m[0],p}),z,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:i,localizedDescription:M(()=>v.value||h.value.description),cssVars:a?void 0:z,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:a}=this;return a==null||a(),l("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${t}-empty__icon`},e.icon?e.icon():l(gn,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${t}-empty__extra`},e.extra()):null)}}),hn=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:a,nodePropsRef:s}=bn(ln);return{labelField:a,nodeProps:s,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:a,nodeProps:s,tmNode:{rawNode:c}}=this,h=s==null?void 0:s(c),v=t?t(c,!1):Oe(c[this.labelField],c,!1),i=l("div",Object.assign({},h,{class:[`${e}-base-select-group-header`,h==null?void 0:h.class]}),v);return c.render?c.render({node:i,option:c}):a?a({node:i,option:c,selected:!1}):i}});function Bt(e,t){return l(mn,{name:"fade-in-scale-up-transition"},{default:()=>e?l(gn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>l(Mt)}):null})}const vn=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:a,multipleRef:s,valueSetRef:c,renderLabelRef:h,renderOptionRef:v,labelFieldRef:i,valueFieldRef:z,showCheckmarkRef:T,nodePropsRef:p,handleOptionClick:m,handleOptionMouseEnter:y}=bn(ln),C=Ze(()=>{const{value:P}=a;return P?e.tmNode.key===P.key:!1});function b(P){const{tmNode:w}=e;w.disabled||m(P,w)}function B(P){const{tmNode:w}=e;w.disabled||y(P,w)}function A(P){const{tmNode:w}=e,{value:I}=C;w.disabled||I||y(P,w)}return{multiple:s,isGrouped:Ze(()=>{const{tmNode:P}=e,{parent:w}=P;return w&&w.rawNode.type==="group"}),showCheckmark:T,nodeProps:p,isPending:C,isSelected:Ze(()=>{const{value:P}=t,{value:w}=s;if(P===null)return!1;const I=e.tmNode.rawNode[z.value];if(w){const{value:E}=c;return E.has(I)}else return P===I}),labelField:i,renderLabel:h,renderOption:v,handleMouseMove:A,handleMouseEnter:B,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:a,isPending:s,isGrouped:c,showCheckmark:h,nodeProps:v,renderOption:i,renderLabel:z,handleClick:T,handleMouseEnter:p,handleMouseMove:m}=this,y=Bt(a,e),C=z?[z(t,a),h&&y]:[Oe(t[this.labelField],t,a),h&&y],b=v==null?void 0:v(t),B=l("div",Object.assign({},b,{class:[`${e}-base-select-option`,t.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:a,[`${e}-base-select-option--grouped`]:c,[`${e}-base-select-option--pending`]:s,[`${e}-base-select-option--show-checkmark`]:h}],style:[(b==null?void 0:b.style)||"",t.style||""],onClick:Ye([T,b==null?void 0:b.onClick]),onMouseenter:Ye([p,b==null?void 0:b.onMouseenter]),onMousemove:Ye([m,b==null?void 0:b.onMousemove])}),l("div",{class:`${e}-base-select-option__content`},C));return t.render?t.render({node:B,option:t,selected:a}):i?i({node:B,option:t,selected:a}):B}}),$t=F("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[F("scrollbar",`
 max-height: var(--n-height);
 `),F("virtual-list",`
 max-height: var(--n-height);
 `),F("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[k("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),F("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),F("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),k("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),k("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),k("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),F("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[G("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),G("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),G("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),G("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),G("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),G("disabled",`
 cursor: not-allowed;
 `,[en("selected",`
 color: var(--n-option-text-color-disabled);
 `),G("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),k("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[wn({enterScale:"0.5"})])])]),Et=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:a}=$e(e),s=rn("InternalSelectMenu",a,t),c=oe("InternalSelectMenu","-internal-select-menu",$t,Yn,e,W(e,"clsPrefix")),h=_(null),v=_(null),i=_(null),z=M(()=>e.treeMate.getFlattenedNodes()),T=M(()=>Qn(z.value)),p=_(null);function m(){const{treeMate:r}=e;let u=null;const{value:N}=e;N===null?u=r.getFirstAvailableNode():(e.multiple?u=r.getNode((N||[])[(N||[]).length-1]):u=r.getNode(N),(!u||u.disabled)&&(u=r.getFirstAvailableNode())),Q(u||null)}function y(){const{value:r}=p;r&&!e.treeMate.getNode(r.key)&&(p.value=null)}let C;me(()=>e.show,r=>{r?C=me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():y(),yn(ve)):y()},{immediate:!0}):C==null||C()},{immediate:!0}),pn(()=>{C==null||C()});const b=M(()=>nn(c.value.self[te("optionHeight",e.size)])),B=M(()=>Ie(c.value.self[te("padding",e.size)])),A=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),P=M(()=>{const r=z.value;return r&&r.length===0});function w(r){const{onToggle:u}=e;u&&u(r)}function I(r){const{onScroll:u}=e;u&&u(r)}function E(r){var u;(u=i.value)===null||u===void 0||u.sync(),I(r)}function $(){var r;(r=i.value)===null||r===void 0||r.sync()}function V(){const{value:r}=p;return r||null}function q(r,u){u.disabled||Q(u,!1)}function fe(r,u){u.disabled||w(u)}function he(r){var u;Be(r,"action")||(u=e.onKeyup)===null||u===void 0||u.call(e,r)}function J(r){var u;Be(r,"action")||(u=e.onKeydown)===null||u===void 0||u.call(e,r)}function Y(r){var u;(u=e.onMousedown)===null||u===void 0||u.call(e,r),!e.focusable&&r.preventDefault()}function ie(){const{value:r}=p;r&&Q(r.getNext({loop:!0}),!0)}function L(){const{value:r}=p;r&&Q(r.getPrev({loop:!0}),!0)}function Q(r,u=!1){p.value=r,u&&ve()}function ve(){var r,u;const N=p.value;if(!N)return;const re=T.value(N.key);re!==null&&(e.virtualScroll?(r=v.value)===null||r===void 0||r.scrollTo({index:re}):(u=i.value)===null||u===void 0||u.scrollTo({index:re,elSize:b.value}))}function de(r){var u,N;!((u=h.value)===null||u===void 0)&&u.contains(r.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,r))}function Re(r){var u,N;!((u=h.value)===null||u===void 0)&&u.contains(r.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,r)}an(ln,{handleOptionMouseEnter:q,handleOptionClick:fe,valueSetRef:A,pendingTmNodeRef:p,nodePropsRef:W(e,"nodeProps"),showCheckmarkRef:W(e,"showCheckmark"),multipleRef:W(e,"multiple"),valueRef:W(e,"value"),renderLabelRef:W(e,"renderLabel"),renderOptionRef:W(e,"renderOption"),labelFieldRef:W(e,"labelField"),valueFieldRef:W(e,"valueField")}),an(tt,h),on(()=>{const{value:r}=i;r&&r.sync()});const le=M(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:u},self:{height:N,borderRadius:re,color:ye,groupHeaderTextColor:xe,actionDividerColor:ae,optionTextColorPressed:U,optionTextColor:Ce,optionTextColorDisabled:ce,optionTextColorActive:Fe,optionOpacityDisabled:ze,optionCheckColor:Te,actionTextColor:Me,optionColorPending:pe,optionColorActive:ge,loadingColor:Pe,loadingSize:ke,optionColorActivePending:_e,[te("optionFontSize",r)]:Se,[te("optionHeight",r)]:be,[te("optionPadding",r)]:H}}=c.value;return{"--n-height":N,"--n-action-divider-color":ae,"--n-action-text-color":Me,"--n-bezier":u,"--n-border-radius":re,"--n-color":ye,"--n-option-font-size":Se,"--n-group-header-text-color":xe,"--n-option-check-color":Te,"--n-option-color-pending":pe,"--n-option-color-active":ge,"--n-option-color-active-pending":_e,"--n-option-height":be,"--n-option-opacity-disabled":ze,"--n-option-text-color":Ce,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":U,"--n-option-padding":H,"--n-option-padding-left":Ie(H,"left"),"--n-option-padding-right":Ie(H,"right"),"--n-loading-color":Pe,"--n-loading-size":ke}}),{inlineThemeDisabled:we}=e,K=we?He("internal-select-menu",M(()=>e.size[0]),le,e):void 0,X={selfRef:h,next:ie,prev:L,getPendingTmNode:V};return Cn(h,e.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:t,rtlEnabled:s,virtualListRef:v,scrollbarRef:i,itemSize:b,padding:B,flattenedNodes:z,empty:P,virtualListContainer(){const{value:r}=v;return r==null?void 0:r.listElRef},virtualListContent(){const{value:r}=v;return r==null?void 0:r.itemsElRef},doScroll:I,handleFocusin:de,handleFocusout:Re,handleKeyUp:he,handleKeyDown:J,handleMouseDown:Y,handleVirtualListResize:$,handleVirtualListScroll:E,cssVars:we?void 0:le,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},X)},render(){const{$slots:e,virtualScroll:t,clsPrefix:a,mergedTheme:s,themeClass:c,onRender:h}=this;return h==null||h(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${a}-base-select-menu`,this.rtlEnabled&&`${a}-base-select-menu--rtl`,c,this.multiple&&`${a}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},sn(e.header,v=>v&&l("div",{class:`${a}-base-select-menu__header`,"data-header":!0,key:"header"},v)),this.loading?l("div",{class:`${a}-base-select-menu__loading`},l(Xn,{clsPrefix:a,strokeWidth:20})):this.empty?l("div",{class:`${a}-base-select-menu__empty`,"data-empty":!0},nt(e.empty,()=>[l(It,{theme:s.peers.Empty,themeOverrides:s.peerOverrides.Empty,size:this.size})])):l(et,{ref:"scrollbarRef",theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?l(Ft,{ref:"virtualListRef",class:`${a}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:v})=>v.isGroup?l(hn,{key:v.key,clsPrefix:a,tmNode:v}):v.ignored?null:l(vn,{clsPrefix:a,key:v.key,tmNode:v})}):l("div",{class:`${a}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(v=>v.isGroup?l(hn,{key:v.key,clsPrefix:a,tmNode:v}):l(vn,{clsPrefix:a,key:v.key,tmNode:v})))}),sn(e.action,v=>v&&[l("div",{class:`${a}-base-select-menu__action`,"data-action":!0,key:"action"},v),l(zt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),At=Z([F("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
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
 `,[F("base-loading",`
 color: var(--n-loading-color);
 `),F("base-selection-tags","min-height: var(--n-height);"),k("border, state-border",`
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
 `),k("state-border",`
 z-index: 1;
 border-color: #0000;
 `),F("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[k("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),F("base-selection-overlay",`
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
 `,[k("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),F("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[k("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),F("base-selection-tags",`
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
 `),F("base-selection-label",`
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
 `,[F("base-selection-input",`
 font-size: inherit;
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
 `,[k("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),k("render-label",`
 color: var(--n-text-color);
 `)]),en("disabled",[Z("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),F("base-selection-label","background-color: var(--n-color-active);"),F("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[k("arrow",`
 color: var(--n-arrow-color-disabled);
 `),F("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),k("render-label",`
 color: var(--n-text-color-disabled);
 `)]),F("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),F("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),F("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[k("input",`
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
 `),k("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[k("state-border",`border: var(--n-border-${e});`),en("disabled",[Z("&:hover",[k("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[k("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),F("base-selection-label",`background-color: var(--n-color-active-${e});`),F("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[k("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),F("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),F("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),F("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[k("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Lt=se({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:a}=$e(e),s=rn("InternalSelection",a,t),c=_(null),h=_(null),v=_(null),i=_(null),z=_(null),T=_(null),p=_(null),m=_(null),y=_(null),C=_(null),b=_(!1),B=_(!1),A=_(!1),P=oe("InternalSelection","-internal-selection",At,ot,e,W(e,"clsPrefix")),w=M(()=>e.clearable&&!e.disabled&&(A.value||e.active)),I=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),E=M(()=>{const o=e.selectedOption;if(o)return o[e.labelField]}),$=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var o;const{value:f}=c;if(f){const{value:D}=h;D&&(D.style.width=`${f.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=y.value)===null||o===void 0||o.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:o}=C;o&&(o.style.display="none")}function fe(){const{value:o}=C;o&&(o.style.display="inline-block")}me(W(e,"active"),o=>{o||q()}),me(W(e,"pattern"),()=>{e.multiple&&yn(V)});function he(o){const{onFocus:f}=e;f&&f(o)}function J(o){const{onBlur:f}=e;f&&f(o)}function Y(o){const{onDeleteOption:f}=e;f&&f(o)}function ie(o){const{onClear:f}=e;f&&f(o)}function L(o){const{onPatternInput:f}=e;f&&f(o)}function Q(o){var f;(!o.relatedTarget||!(!((f=v.value)===null||f===void 0)&&f.contains(o.relatedTarget)))&&he(o)}function ve(o){var f;!((f=v.value)===null||f===void 0)&&f.contains(o.relatedTarget)||J(o)}function de(o){ie(o)}function Re(){A.value=!0}function le(){A.value=!1}function we(o){!e.active||!e.filterable||o.target!==h.value&&o.preventDefault()}function K(o){Y(o)}const X=_(!1);function r(o){if(o.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:f}=e;f!=null&&f.length&&K(f[f.length-1])}}let u=null;function N(o){const{value:f}=c;if(f){const D=o.target.value;f.textContent=D,V()}e.ignoreComposition&&X.value?u=o:L(o)}function re(){X.value=!0}function ye(){X.value=!1,e.ignoreComposition&&L(u),u=null}function xe(o){var f;B.value=!0,(f=e.onPatternFocus)===null||f===void 0||f.call(e,o)}function ae(o){var f;B.value=!1,(f=e.onPatternBlur)===null||f===void 0||f.call(e,o)}function U(){var o,f;if(e.filterable)B.value=!1,(o=T.value)===null||o===void 0||o.blur(),(f=h.value)===null||f===void 0||f.blur();else if(e.multiple){const{value:D}=i;D==null||D.blur()}else{const{value:D}=z;D==null||D.blur()}}function Ce(){var o,f,D;e.filterable?(B.value=!1,(o=T.value)===null||o===void 0||o.focus()):e.multiple?(f=i.value)===null||f===void 0||f.focus():(D=z.value)===null||D===void 0||D.focus()}function ce(){const{value:o}=h;o&&(fe(),o.focus())}function Fe(){const{value:o}=h;o&&o.blur()}function ze(o){const{value:f}=p;f&&f.setTextContent(`+${o}`)}function Te(){const{value:o}=m;return o}function Me(){return h.value}let pe=null;function ge(){pe!==null&&window.clearTimeout(pe)}function Pe(){e.active||(ge(),pe=window.setTimeout(()=>{$.value&&(b.value=!0)},100))}function ke(){ge()}function _e(o){o||(ge(),b.value=!1)}me($,o=>{o||(b.value=!1)}),on(()=>{it(()=>{const o=T.value;o&&(e.disabled?o.removeAttribute("tabindex"):o.tabIndex=B.value?-1:0)})}),Cn(v,e.onResize);const{inlineThemeDisabled:Se}=e,be=M(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:f},self:{fontWeight:D,borderRadius:We,color:Ke,placeholderColor:Ee,textColor:Ae,paddingSingle:Le,paddingMultiple:Ue,caretColor:Ge,colorDisabled:Ne,textColorDisabled:ue,placeholderColorDisabled:n,colorActive:d,boxShadowFocus:g,boxShadowActive:R,boxShadowHover:S,border:x,borderFocus:O,borderHover:j,borderActive:ee,arrowColor:On,arrowColorDisabled:Rn,loadingColor:Fn,colorActiveWarning:zn,boxShadowFocusWarning:Tn,boxShadowActiveWarning:Mn,boxShadowHoverWarning:Pn,borderWarning:kn,borderFocusWarning:_n,borderHoverWarning:In,borderActiveWarning:Bn,colorActiveError:$n,boxShadowFocusError:En,boxShadowActiveError:An,boxShadowHoverError:Ln,borderError:Nn,borderFocusError:Dn,borderHoverError:Vn,borderActiveError:jn,clearColor:Hn,clearColorHover:Wn,clearColorPressed:Kn,clearSize:Un,arrowSize:Gn,[te("height",o)]:qn,[te("fontSize",o)]:Zn}}=P.value,De=Ie(Le),Ve=Ie(Ue);return{"--n-bezier":f,"--n-border":x,"--n-border-active":ee,"--n-border-focus":O,"--n-border-hover":j,"--n-border-radius":We,"--n-box-shadow-active":R,"--n-box-shadow-focus":g,"--n-box-shadow-hover":S,"--n-caret-color":Ge,"--n-color":Ke,"--n-color-active":d,"--n-color-disabled":Ne,"--n-font-size":Zn,"--n-height":qn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Ve.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Ve.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Ve.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Ve.bottom,"--n-placeholder-color":Ee,"--n-placeholder-color-disabled":n,"--n-text-color":Ae,"--n-text-color-disabled":ue,"--n-arrow-color":On,"--n-arrow-color-disabled":Rn,"--n-loading-color":Fn,"--n-color-active-warning":zn,"--n-box-shadow-focus-warning":Tn,"--n-box-shadow-active-warning":Mn,"--n-box-shadow-hover-warning":Pn,"--n-border-warning":kn,"--n-border-focus-warning":_n,"--n-border-hover-warning":In,"--n-border-active-warning":Bn,"--n-color-active-error":$n,"--n-box-shadow-focus-error":En,"--n-box-shadow-active-error":An,"--n-box-shadow-hover-error":Ln,"--n-border-error":Nn,"--n-border-focus-error":Dn,"--n-border-hover-error":Vn,"--n-border-active-error":jn,"--n-clear-size":Un,"--n-clear-color":Hn,"--n-clear-color-hover":Wn,"--n-clear-color-pressed":Kn,"--n-arrow-size":Gn,"--n-font-weight":D}}),H=Se?He("internal-selection",M(()=>e.size[0]),be,e):void 0;return{mergedTheme:P,mergedClearable:w,mergedClsPrefix:t,rtlEnabled:s,patternInputFocused:B,filterablePlaceholder:I,label:E,selected:$,showTagsPanel:b,isComposing:X,counterRef:p,counterWrapperRef:m,patternInputMirrorRef:c,patternInputRef:h,selfRef:v,multipleElRef:i,singleElRef:z,patternInputWrapperRef:T,overflowRef:y,inputTagElRef:C,handleMouseDown:we,handleFocusin:Q,handleClear:de,handleMouseEnter:Re,handleMouseLeave:le,handleDeleteOption:K,handlePatternKeyDown:r,handlePatternInputInput:N,handlePatternInputBlur:ae,handlePatternInputFocus:xe,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:ke,handleFocusout:ve,handleCompositionEnd:ye,handleCompositionStart:re,onPopoverUpdateShow:_e,focus:Ce,focusInput:ce,blur:U,blurInput:Fe,updateCounter:ze,getCounter:Te,getTail:Me,renderLabel:e.renderLabel,cssVars:Se?void 0:be,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{status:e,multiple:t,size:a,disabled:s,filterable:c,maxTagCount:h,bordered:v,clsPrefix:i,ellipsisTagPopoverProps:z,onRender:T,renderTag:p,renderLabel:m}=this;T==null||T();const y=h==="responsive",C=typeof h=="number",b=y||C,B=l(at,null,{default:()=>l(Rt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var P,w;return(w=(P=this.$slots).arrow)===null||w===void 0?void 0:w.call(P)}})});let A;if(t){const{labelField:P}=this,w=L=>l("div",{class:`${i}-base-selection-tag-wrapper`,key:L.value},p?p({option:L,handleClose:()=>{this.handleDeleteOption(L)}}):l(Je,{size:a,closable:!L.disabled,disabled:s,onClose:()=>{this.handleDeleteOption(L)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(L,!0):Oe(L[P],L,!0)})),I=()=>(C?this.selectedOptions.slice(0,h):this.selectedOptions).map(w),E=c?l("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:s,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,$=y?()=>l("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(Je,{size:a,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:s})):void 0;let V;if(C){const L=this.selectedOptions.length-h;L>0&&(V=l("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},l(Je,{size:a,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:s},{default:()=>`+${L}`})))}const q=y?c?l(dn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:$,tail:()=>E}):l(dn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:I,counter:$}):C&&V?I().concat(V):I(),fe=b?()=>l("div",{class:`${i}-base-selection-popover`},y?I():this.selectedOptions.map(w)):void 0,he=b?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},z):null,Y=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},l("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,ie=c?l("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},q,y?null:E,B):l("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:s?void 0:0},q,B);A=l(rt,null,b?l(lt,Object.assign({},he,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ie,default:fe}):ie,Y)}else if(c){const P=this.pattern||this.isComposing,w=this.active?!P:!this.selected,I=this.active?!1:this.selected;A=l("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:fn(this.label)},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:s,disabled:s,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?l("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},l("div",{class:`${i}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,w?l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,B)}else A=l("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${i}-base-selection-input`,title:fn(this.label),key:"input"},l("div",{class:`${i}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):l("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),B);return l("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},A,v?l("div",{class:`${i}-base-selection__border`}):null,v?l("div",{class:`${i}-base-selection__state-border`}):null)}});function je(e){return e.type==="group"}function Sn(e){return e.type==="ignored"}function Qe(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Nt(e,t){return{getIsGroup:je,getIgnored:Sn,getKey(s){return je(s)?s.name||s.key||"key-required":s[e]},getChildren(s){return s[t]}}}function Dt(e,t,a,s){if(!t)return e;function c(h){if(!Array.isArray(h))return[];const v=[];for(const i of h)if(je(i)){const z=c(i[s]);z.length&&v.push(Object.assign({},i,{[s]:z}))}else{if(Sn(i))continue;t(a,i)&&v.push(i)}return v}return c(e)}function Vt(e,t,a){const s=new Map;return e.forEach(c=>{je(c)?c[a].forEach(h=>{s.set(h[t],h)}):s.set(c[t],c)}),s}const jt=Z([F("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),F("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[wn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ht=Object.assign(Object.assign({},oe.props),{to:tn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),eo=se({name:"Select",props:Ht,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:a,namespaceRef:s,inlineThemeDisabled:c}=$e(e),h=oe("Select","-select",jt,bt,e,t),v=_(e.defaultValue),i=W(e,"value"),z=cn(i,v),T=_(!1),p=_(""),m=st(e,["items","options"]),y=_([]),C=_([]),b=M(()=>C.value.concat(y.value).concat(m.value)),B=M(()=>{const{filter:n}=e;if(n)return n;const{labelField:d,valueField:g}=e;return(R,S)=>{if(!S)return!1;const x=S[d];if(typeof x=="string")return Qe(R,x);const O=S[g];return typeof O=="string"?Qe(R,O):typeof O=="number"?Qe(R,String(O)):!1}}),A=M(()=>{if(e.remote)return m.value;{const{value:n}=b,{value:d}=p;return!d.length||!e.filterable?n:Dt(n,B.value,d,e.childrenField)}}),P=M(()=>{const{valueField:n,childrenField:d}=e,g=Nt(n,d);return dt(A.value,g)}),w=M(()=>Vt(b.value,e.valueField,e.childrenField)),I=_(!1),E=cn(W(e,"show"),I),$=_(null),V=_(null),q=_(null),{localeRef:fe}=xn("Select"),he=M(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:fe.value.placeholder}),J=[],Y=_(new Map),ie=M(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:d,valueField:g}=e;return R=>({[d]:String(R),[g]:R})}return n===!1?!1:d=>Object.assign(n(d),{value:d})});function L(n){const d=e.remote,{value:g}=Y,{value:R}=w,{value:S}=ie,x=[];return n.forEach(O=>{if(R.has(O))x.push(R.get(O));else if(d&&g.has(O))x.push(g.get(O));else if(S){const j=S(O);j&&x.push(j)}}),x}const Q=M(()=>{if(e.multiple){const{value:n}=z;return Array.isArray(n)?L(n):[]}return null}),ve=M(()=>{const{value:n}=z;return!e.multiple&&!Array.isArray(n)?n===null?null:L([n])[0]||null:null}),de=ct(e),{mergedSizeRef:Re,mergedDisabledRef:le,mergedStatusRef:we}=de;function K(n,d){const{onChange:g,"onUpdate:value":R,onUpdateValue:S}=e,{nTriggerFormChange:x,nTriggerFormInput:O}=de;g&&ne(g,n,d),S&&ne(S,n,d),R&&ne(R,n,d),v.value=n,x(),O()}function X(n){const{onBlur:d}=e,{nTriggerFormBlur:g}=de;d&&ne(d,n),g()}function r(){const{onClear:n}=e;n&&ne(n)}function u(n){const{onFocus:d,showOnFocus:g}=e,{nTriggerFormFocus:R}=de;d&&ne(d,n),R(),g&&ae()}function N(n){const{onSearch:d}=e;d&&ne(d,n)}function re(n){const{onScroll:d}=e;d&&ne(d,n)}function ye(){var n;const{remote:d,multiple:g}=e;if(d){const{value:R}=Y;if(g){const{valueField:S}=e;(n=Q.value)===null||n===void 0||n.forEach(x=>{R.set(x[S],x)})}else{const S=ve.value;S&&R.set(S[e.valueField],S)}}}function xe(n){const{onUpdateShow:d,"onUpdate:show":g}=e;d&&ne(d,n),g&&ne(g,n),I.value=n}function ae(){le.value||(xe(!0),I.value=!0,e.filterable&&Le())}function U(){xe(!1)}function Ce(){p.value="",C.value=J}const ce=_(!1);function Fe(){e.filterable&&(ce.value=!0)}function ze(){e.filterable&&(ce.value=!1,E.value||Ce())}function Te(){le.value||(E.value?e.filterable?Le():U():ae())}function Me(n){var d,g;!((g=(d=q.value)===null||d===void 0?void 0:d.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(T.value=!1,X(n),U())}function pe(n){u(n),T.value=!0}function ge(){T.value=!0}function Pe(n){var d;!((d=$.value)===null||d===void 0)&&d.$el.contains(n.relatedTarget)||(T.value=!1,X(n),U())}function ke(){var n;(n=$.value)===null||n===void 0||n.focus(),U()}function _e(n){var d;E.value&&(!((d=$.value)===null||d===void 0)&&d.$el.contains(mt(n))||U())}function Se(n){if(!Array.isArray(n))return[];if(ie.value)return Array.from(n);{const{remote:d}=e,{value:g}=w;if(d){const{value:R}=Y;return n.filter(S=>g.has(S)||R.has(S))}else return n.filter(R=>g.has(R))}}function be(n){H(n.rawNode)}function H(n){if(le.value)return;const{tag:d,remote:g,clearFilterAfterSelect:R,valueField:S}=e;if(d&&!g){const{value:x}=C,O=x[0]||null;if(O){const j=y.value;j.length?j.push(O):y.value=[O],C.value=J}}if(g&&Y.value.set(n[S],n),e.multiple){const x=Se(z.value),O=x.findIndex(j=>j===n[S]);if(~O){if(x.splice(O,1),d&&!g){const j=o(n[S]);~j&&(y.value.splice(j,1),R&&(p.value=""))}}else x.push(n[S]),R&&(p.value="");K(x,L(x))}else{if(d&&!g){const x=o(n[S]);~x?y.value=[y.value[x]]:y.value=J}Ae(),U(),K(n[S],n)}}function o(n){return y.value.findIndex(g=>g[e.valueField]===n)}function f(n){E.value||ae();const{value:d}=n.target;p.value=d;const{tag:g,remote:R}=e;if(N(d),g&&!R){if(!d){C.value=J;return}const{onCreate:S}=e,x=S?S(d):{[e.labelField]:d,[e.valueField]:d},{valueField:O,labelField:j}=e;m.value.some(ee=>ee[O]===x[O]||ee[j]===x[j])||y.value.some(ee=>ee[O]===x[O]||ee[j]===x[j])?C.value=J:C.value=[x]}}function D(n){n.stopPropagation();const{multiple:d}=e;!d&&e.filterable&&U(),r(),d?K([],[]):K(null,null)}function We(n){!Be(n,"action")&&!Be(n,"empty")&&!Be(n,"header")&&n.preventDefault()}function Ke(n){re(n)}function Ee(n){var d,g,R,S,x;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((d=$.value)===null||d===void 0)&&d.isComposing)){if(E.value){const O=(g=q.value)===null||g===void 0?void 0:g.getPendingTmNode();O?be(O):e.filterable||(U(),Ae())}else if(ae(),e.tag&&ce.value){const O=C.value[0];if(O){const j=O[e.valueField],{value:ee}=z;e.multiple&&Array.isArray(ee)&&ee.includes(j)||H(O)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;E.value&&((R=q.value)===null||R===void 0||R.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;E.value?(S=q.value)===null||S===void 0||S.next():ae();break;case"Escape":E.value&&(wt(n),U()),(x=$.value)===null||x===void 0||x.focus();break}}function Ae(){var n;(n=$.value)===null||n===void 0||n.focus()}function Le(){var n;(n=$.value)===null||n===void 0||n.focusInput()}function Ue(){var n;E.value&&((n=V.value)===null||n===void 0||n.syncPosition())}ye(),me(W(e,"options"),ye);const Ge={focus:()=>{var n;(n=$.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=$.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=$.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=$.value)===null||n===void 0||n.blurInput()}},Ne=M(()=>{const{self:{menuBoxShadow:n}}=h.value;return{"--n-menu-box-shadow":n}}),ue=c?He("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:we,mergedClsPrefix:t,mergedBordered:a,namespace:s,treeMate:P,isMounted:ut(),triggerRef:$,menuRef:q,pattern:p,uncontrolledShow:I,mergedShow:E,adjustedTo:tn(e),uncontrolledValue:v,mergedValue:z,followerRef:V,localizedPlaceholder:he,selectedOption:ve,selectedOptions:Q,mergedSize:Re,mergedDisabled:le,focused:T,activeWithoutMenuOpen:ce,inlineThemeDisabled:c,onTriggerInputFocus:Fe,onTriggerInputBlur:ze,handleTriggerOrMenuResize:Ue,handleMenuFocus:ge,handleMenuBlur:Pe,handleMenuTabOut:ke,handleTriggerClick:Te,handleToggle:be,handleDeleteOption:H,handlePatternInput:f,handleClear:D,handleTriggerBlur:Me,handleTriggerFocus:pe,handleKeydown:Ee,handleMenuAfterLeave:Ce,handleMenuClickOutside:_e,handleMenuScroll:Ke,handleMenuKeydown:Ee,handleMenuMousedown:We,mergedTheme:h,cssVars:c?void 0:Ne,themeClass:ue==null?void 0:ue.themeClass,onRender:ue==null?void 0:ue.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(ft,null,{default:()=>[l(ht,null,{default:()=>l(Lt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),l(vt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===tn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(mn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,a;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),pt(l(Et,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(a=this.menuProps)===null||a===void 0?void 0:a.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var s,c;return[(c=(s=this.$slots).empty)===null||c===void 0?void 0:c.call(s)]},header:()=>{var s,c;return[(c=(s=this.$slots).header)===null||c===void 0?void 0:c.call(s)]},action:()=>{var s,c;return[(c=(s=this.$slots).action)===null||c===void 0?void 0:c.call(s)]}}),this.displayDirective==="show"?[[gt,this.mergedShow],[un,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[un,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function Wt(){return yt}const Kt={name:"Space",self:Wt},Ut=Kt;let Xe;function Gt(){if(!xt)return!0;if(Xe===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Xe=t}return Xe}const qt=Object.assign(Object.assign({},oe.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),no=se({name:"Space",props:qt,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:a}=$e(e),s=oe("Space","-space",void 0,Ut,e,t),c=rn("Space",a,t);return{useGap:Gt(),rtlEnabled:c,mergedClsPrefix:t,margin:M(()=>{const{size:h}=e;if(Array.isArray(h))return{horizontal:h[0],vertical:h[1]};if(typeof h=="number")return{horizontal:h,vertical:h};const{self:{[te("gap",h)]:v}}=s.value,{row:i,col:z}=Ct(v);return{horizontal:nn(z),vertical:nn(i)}})}},render(){const{vertical:e,reverse:t,align:a,inline:s,justify:c,itemClass:h,itemStyle:v,margin:i,wrap:z,mergedClsPrefix:T,rtlEnabled:p,useGap:m,wrapItem:y,internalUseGap:C}=this,b=St(Tt(this),!1);if(!b.length)return null;const B=`${i.horizontal}px`,A=`${i.horizontal/2}px`,P=`${i.vertical}px`,w=`${i.vertical/2}px`,I=b.length-1,E=c.startsWith("space-");return l("div",{role:"none",class:[`${T}-space`,p&&`${T}-space--rtl`],style:{display:s?"inline-flex":"flex",flexDirection:(()=>e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row")(),justifyContent:["start","end"].includes(c)?`flex-${c}`:c,flexWrap:!z||e?"nowrap":"wrap",marginTop:m||e?"":`-${w}`,marginBottom:m||e?"":`-${w}`,alignItems:a,gap:m?`${i.vertical}px ${i.horizontal}px`:""}},!y&&(m||C)?b:b.map(($,V)=>$.type===Ot?$:l("div",{role:"none",class:h,style:[v,{maxWidth:"100%"},m?"":e?{marginBottom:V!==I?P:""}:p?{marginLeft:E?c==="space-between"&&V===I?"":A:V!==I?B:"",marginRight:E?c==="space-between"&&V===0?"":A:"",paddingTop:w,paddingBottom:w}:{marginRight:E?c==="space-between"&&V===I?"":A:V!==I?B:"",marginLeft:E?c==="space-between"&&V===0?"":A:"",paddingTop:w,paddingBottom:w}]},$)))}});export{eo as N,Xt as a,no as b,It as c,Nt as d,Et as e,Ye as m,Ut as s};
