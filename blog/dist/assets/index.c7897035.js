import{d as Q,r as p,l as f,E as R,o as q,S as F,c as V,f as d,x as Y,g as J,U as O,V as Z,n as G,b as H,_ as ee,I as te,B as ne,C as ae,H as X,w as se,e as z,M as le,W as oe,X as ue,j as ie,y as M,Y as j,h as de,q as re,u as P,G as ce,s as pe,i as me}from"./index.08377aad.js";var T=Q({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(l,{emit:m,slots:k}){let r=p(document.createElement("div")),s=p(document.createElement("div"));const u=p(0),C=p(0);let b=0;const S=p(0),N=p(0),h=p(0),c=p(!1),e=p(!1),a=p({}),v=function(o,i,t="modelValue",n){return f({get:()=>o[t],set:w=>{i(`update:${t}`,n?n(w):w)}})}(l,m,"danmus"),y=R({channels:f(()=>l.channels||S.value),autoplay:f(()=>l.autoplay),loop:f(()=>l.loop),useSlot:f(()=>l.useSlot),debounce:f(()=>l.debounce),randomChannel:f(()=>l.randomChannel)}),g=R({height:f(()=>N.value),fontSize:f(()=>l.fontSize),speeds:f(()=>l.speeds),top:f(()=>l.top),right:f(()=>l.right)});function U(){A(),l.isSuspend&&function(){let o=[];s.value.addEventListener("mouseover",i=>{let t=i.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(o.includes(t)||(m("dm-over",{el:t}),t.classList.add("pause"),o.push(t)))}),s.value.addEventListener("mouseout",i=>{let t=i.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(m("dm-out",{el:t}),t.classList.remove("pause"),o.forEach(n=>{n.classList.remove("pause")}),o=[])})}(),y.autoplay&&D()}function A(){if(u.value=r.value.offsetWidth,C.value=r.value.offsetHeight,u.value===0||C.value===0)throw new Error("\u83B7\u53D6\u4E0D\u5230\u5BB9\u5668\u5BBD\u9AD8")}function D(){e.value=!1,b||(b=window.setInterval(()=>function(){if(!e.value&&v.value.length)if(h.value>v.value.length-1){const o=s.value.children.length;y.loop&&(o<h.value&&(m("list-end"),h.value=0),$())}else $()}(),y.debounce))}function $(o){const i=y.loop?h.value%v.value.length:h.value,t=o||v.value[i];let n=document.createElement("div");y.useSlot?n=function(w,x){return O({render:()=>Z("div",{},[k.dm&&k.dm({danmu:w,index:x})])}).mount(document.createElement("div"))}(t,i).$el:(n.innerHTML=t,n.setAttribute("style",l.extraStyle),n.style.fontSize=`${g.fontSize}px`,n.style.lineHeight=`${g.fontSize}px`),n.classList.add("dm"),s.value.appendChild(n),n.style.opacity="0",G(()=>{g.height||(N.value=n.offsetHeight),y.channels||(S.value=Math.floor(C.value/(g.height+g.top)));let w=function(x){let L=[...Array(y.channels).keys()];y.randomChannel&&(L=L.sort(()=>.5-Math.random()));for(let _ of L){const B=a.value[_];if(!B||!B.length)return a.value[_]=[x],x.addEventListener("animationend",()=>a.value[_].splice(0,1)),_%y.channels;for(let E=0;E<B.length;E++){const I=K(B[E])-10;if(I<=.88*(x.offsetWidth-B[E].offsetWidth)||I<=0)break;if(E===B.length-1)return a.value[_].push(x),x.addEventListener("animationend",()=>a.value[_].splice(0,1)),_%y.channels}}return-1}(n);if(w>=0){const x=n.offsetWidth,L=g.height;n.classList.add("move"),n.dataset.index=`${i}`,n.dataset.channel=w.toString(),n.style.opacity="1",n.style.top=w*(L+g.top)+"px",n.style.width=x+g.right+"px",n.style.setProperty("--dm-scroll-width",`-${u.value+x}px`),n.style.left=`${u.value}px`,n.style.animationDuration=u.value/g.speeds+"s",n.addEventListener("animationend",()=>{Number(n.dataset.index)!==v.value.length-1||y.loop||m("play-end",n.dataset.index),s.value&&s.value.removeChild(n)}),h.value++}else s.value.removeChild(n)})}function K(o){const i=o.offsetWidth||parseInt(o.style.width),t=o.getBoundingClientRect().right||s.value.getBoundingClientRect().right+i;return s.value.getBoundingClientRect().right-t}function W(){clearInterval(b),b=0,h.value=0}return q(()=>{U()}),F(()=>{W()}),{container:r,dmContainer:s,hidden:c,paused:e,danmuList:v,getPlayState:function(){return!e.value},resize:function(){A();const o=s.value.getElementsByClassName("dm");for(let i=0;i<o.length;i++){const t=o[i];t.style.setProperty("--dm-scroll-width",`-${u.value+t.offsetWidth}px`),t.style.left=`${u.value}px`,t.style.animationDuration=u.value/g.speeds+"s"}},play:D,pause:function(){e.value=!0},stop:function(){a.value={},s.value.innerHTML="",e.value=!0,c.value=!1,W()},show:function(){c.value=!1},hide:function(){c.value=!0},reset:function(){N.value=0,U()},add:function(o){if(h.value===v.value.length)return v.value.push(o),v.value.length-1;{const i=h.value%v.value.length;return v.value.splice(i,0,o),i+1}},push:function(o){return v.value.push(o),v.value.length-1},insert:$}}});const ve={ref:"container",class:"vue-danmaku"};(function(l,m){m===void 0&&(m={});var k=m.insertAt;if(l&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",k==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(document.createTextNode(l))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),T.render=function(l,m,k,r,s,u){return H(),V("div",ve,[d("div",{ref:"dmContainer",class:Y(["danmus",{show:!l.hidden},{paused:l.paused}])},null,2),J(l.$slots,"default")],512)},T.__file="src/lib/Danmaku.vue";const fe={class:"absolute inset-x-1 top-3/10 z-5 mx-auto w-[350px] animate-zoom-in border-1 rounded-3xl px-1 py-5 text-center text-light shadow-2xl lg:w-[420px]"},he={class:"mt-6 h-9 flex justify-center lg:mt-6"},ye={class:"ml-5 text-left text-white space-y-3"},ge={class:"mt-6 flex items-center"},xe={class:"space-x-3"},be={class:"flex items-center"},we={class:"absolute inset-0 top-[60px]"},ke={class:"flex items-center rounded-3xl bg-#00000060 px-2 py-1 text-white lg:px-4 lg:py-2"},Ce=["src"],Se={class:"ml-2 text-sm"},_e={__name:"index",setup(l){const m=te(),{pageList:k}=ne(ae()),r=p(""),s=p(!1),u=p(null),C=p(!1),b=p(!1),S=p([{avatar:"https://www.bing.com/rp/ar_9isCNU2Q-VG1yEDDHnx8HAFQ.png",content:"\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4F5C\u8005\uFF0C\u6B22\u8FCE\u7ED9\u6211\u70B9\u4E00\u9897 Star!",nickname:"\u9635\u3001\u96E8"}]);q(async()=>{const c=await X.getMessages();await G(),S.value=[...S.value,...c.data]});async function N(){var e;if(r.value=r.value.trim(),!r.value){(e=window==null?void 0:window.$message)==null||e.info("\u6D88\u606F\u4E0D\u80FD\u4E3A\u7A7A!");return}const c={avatar:m.avatar,nickname:m.nickname,content:r.value};await X.saveMessage(c),u.value.push(c),r.value=""}se(C,c=>c?u.value.hide():u.value.show());const h=f(()=>{const c=k.value.find(e=>e.label==="message");return c?`background: url('${c==null?void 0:c.cover}') center center / cover no-repeat;`:'background: url("https://static.talkxj.com/config/83be0017d7f1a29441e33083e7706936.jpg") center center / cover no-repeat;'});return(c,e)=>(H(),V("div",{style:ce(h.value),class:"banner-fade-down absolute inset-x-0 h-screen overflow-hidden"},[d("div",fe,[e[11]||(e[11]=d("h1",{class:"text-2xl font-bold"}," \u7559\u8A00\u677F ",-1)),d("div",he,[z(d("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),class:"w-3/4 border-1 rounded-2xl bg-transparent px-4 text-sm text-#eee outline-none",placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427\uFF1F",onClick:e[1]||(e[1]=oe(a=>s.value=!0,["stop"])),onKeyup:ue(N,["enter"])},null,544),[[le,r.value]]),s.value?(H(),V("button",{key:0,class:"ml-3 animate-back-in-right border-1 rounded-2xl px-4",onClick:N}," \u53D1\u9001 ")):ie("",!0)]),d("ul",ye,[d("li",ge,[e[8]||(e[8]=M(" \u5FAA\u73AF\u64AD\u653E\uFF1A ")),z(d("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>b.value=a),type:"checkbox"},null,512),[[j,b.value]])]),d("li",xe,[e[9]||(e[9]=M(" \u64CD\u4F5C\u5F39\u5E55\uFF1A ")),d("button",{class:"border-1 rounded-lg p-1 text-sm",onClick:e[3]||(e[3]=(...a)=>u.value.play&&u.value.play(...a))}," \u64AD\u653E "),d("button",{class:"border-1 rounded-lg p-1 text-sm",onClick:e[4]||(e[4]=(...a)=>u.value.pause&&u.value.pause(...a))}," \u6682\u505C "),d("button",{class:"border-1 rounded-lg p-1 text-sm",onClick:e[5]||(e[5]=(...a)=>u.value.stop&&u.value.stop(...a))}," \u505C\u6B62 ")]),d("li",be,[e[10]||(e[10]=M(" \u9690\u85CF\u5F39\u5E55\uFF1A ")),z(d("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>C.value=a),type:"checkbox"},null,512),[[j,C.value]])])])]),d("div",we,[de(P(T),{ref_key:"dmRef",ref:u,danmus:S.value,"onUpdate:danmus":e[7]||(e[7]=a=>S.value=a),class:"h-full w-full","use-slot":"",loop:b.value,speeds:200,channels:0,top:5,"is-suspend":!0},{dm:re(({danmu:a})=>[d("div",ke,[d("img",{class:"h-[28px] rounded-full",src:P(pe)(a.avatar),alt:"avatar"},null,8,Ce),d("span",Se,me(`${a.nickname} : ${a.content}`),1)])]),_:1},8,["danmus","loop"])])],4))}},Le=ee(_e,[["__scopeId","data-v-a96bc17d"]]);export{Le as default};
