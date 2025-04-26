import{G as _,H as j,I as H,e as N,M as I,L as E,at as se,K as P,s,a9 as be,S as l,X as u,F as a,aj as S,al as C,an as ue,aA as he,aB as fe,aa as ke,Y as ve,J as G,Z as me,aD as K,O as xe,bH as ge,a0 as pe,ac as Ce,a1 as ye,cb as we}from"./index-25b6f427.js";const L=be("n-checkbox-group"),Re={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ae=_({name:"CheckboxGroup",props:Re,setup(o){const{mergedClsPrefixRef:i}=j(o),x=H(o),{mergedSizeRef:y,mergedDisabledRef:w}=x,g=N(o.defaultValue),T=I(()=>o.value),h=E(T,g),D=I(()=>{var b;return((b=h.value)===null||b===void 0?void 0:b.length)||0}),n=I(()=>Array.isArray(h.value)?new Set(h.value):new Set);function R(b,r){const{nTriggerFormInput:p,nTriggerFormChange:f}=x,{onChange:c,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(h.value)){const t=Array.from(h.value),B=t.findIndex(F=>F===r);b?~B||(t.push(r),v&&l(v,t,{actionType:"check",value:r}),k&&l(k,t,{actionType:"check",value:r}),p(),f(),g.value=t,c&&l(c,t)):~B&&(t.splice(B,1),v&&l(v,t,{actionType:"uncheck",value:r}),k&&l(k,t,{actionType:"uncheck",value:r}),c&&l(c,t),g.value=t,p(),f())}else b?(v&&l(v,[r],{actionType:"check",value:r}),k&&l(k,[r],{actionType:"check",value:r}),c&&l(c,[r]),g.value=[r],p(),f()):(v&&l(v,[],{actionType:"uncheck",value:r}),k&&l(k,[],{actionType:"uncheck",value:r}),c&&l(c,[]),g.value=[],p(),f())}return se(L,{checkedCountRef:D,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:n,disabledRef:w,mergedSizeRef:y,toggleCheckbox:R}),{mergedClsPrefix:i}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),ze=()=>s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Se=()=>s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Te=u([a("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),u("&:hover",[a("checkbox-box",[C("border","border: var(--n-border-checked);")])]),u("&:focus:not(:active)",[a("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[a("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[a("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[a("checkbox-icon",[u(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[a("checkbox-box",[a("checkbox-icon",[u(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),u(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[u("&:focus:not(:active)",[a("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[a("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),a("checkbox-icon",[u(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),a("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),a("checkbox-icon",[u(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),a("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),a("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),a("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[u(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[u("&:empty",{display:"none"})])]),he(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(a("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Me=_({name:"Checkbox",props:De,setup(o){const i=ke(L,null),x=N(null),{mergedClsPrefixRef:y,inlineThemeDisabled:w,mergedRtlRef:g}=j(o),T=N(o.defaultChecked),h=P(o,"checked"),D=E(h,T),n=ve(()=>{if(i){const e=i.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return D.value===o.checkedValue}),R=H(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(i){const{value:d}=i.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=i;if(d!==void 0&&z.value>=d&&!n.value)return!0;const{minRef:{value:A}}=i;if(A!==void 0&&z.value<=A&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:b,mergedSizeRef:r}=R,p=G("Checkbox","-checkbox",Te,we,o,y);function f(e){if(i&&o.value!==void 0)i.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:A,nTriggerFormChange:U}=R,M=n.value?o.uncheckedValue:o.checkedValue;d&&l(d,M,e),z&&l(z,M,e),m&&l(m,M,e),A(),U(),T.value=M}}function c(e){b.value||f(e)}function k(e){if(!b.value)switch(e.key){case" ":case"Enter":f(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=x.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=x.value)===null||e===void 0||e.blur()}},B=me("Checkbox",g,y),F=I(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:m},self:{borderRadius:d,color:z,colorChecked:A,colorDisabled:U,colorTableHeader:M,colorTableHeaderModal:O,colorTableHeaderPopover:V,checkMarkColor:W,checkMarkColorDisabled:Y,border:J,borderFocus:X,borderDisabled:Z,borderChecked:q,boxShadowFocus:Q,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[K("fontSize",e)]:te,[K("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":m,"--n-border-radius":d,"--n-border":J,"--n-border-checked":q,"--n-border-focus":X,"--n-border-disabled":Z,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":Q,"--n-color":z,"--n-color-checked":A,"--n-color-table":M,"--n-color-table-modal":O,"--n-color-table-popover":V,"--n-color-disabled":U,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":Y,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":te,"--n-label-padding":ce}}),$=w?xe("checkbox",I(()=>r.value[0]),F,o):void 0;return Object.assign(R,t,{rtlEnabled:B,selfRef:x,mergedClsPrefix:y,mergedDisabled:b,renderedChecked:n,mergedTheme:p,labelId:ge(),handleClick:c,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:F,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:i,renderedChecked:x,mergedDisabled:y,indeterminate:w,privateInsideTable:g,cssVars:T,labelId:h,label:D,mergedClsPrefix:n,focusable:R,handleKeyUp:b,handleKeyDown:r,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const f=pe(i.default,c=>D||c?s("span",{class:`${n}-checkbox__label`,id:h},D||c):null);return s("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,x&&`${n}-checkbox--checked`,y&&`${n}-checkbox--disabled`,w&&`${n}-checkbox--indeterminate`,g&&`${n}-checkbox--inside-table`,f&&`${n}-checkbox--show-label`],tabindex:y||!R?void 0:0,role:"checkbox","aria-checked":w?"mixed":x,"aria-labelledby":h,style:T,onKeyup:b,onKeydown:r,onClick:p,onMousedown:()=>{ye("selectstart",window,c=>{c.preventDefault()},{once:!0})}},s("div",{class:`${n}-checkbox-box-wrapper`}," ",s("div",{class:`${n}-checkbox-box`},s(Ce,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Se()):s("div",{key:"check",class:`${n}-checkbox-icon`},ze())}),s("div",{class:`${n}-checkbox-box__border`}))),f)}});export{Me as N,Ae as a};
