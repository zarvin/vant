import{c as f,e as a,d as p,f as m}from"./use-translate.c431c781.js";import{m as g,n as w,u as k,w as b}from"./with-install.6654422d.js";import{m as h,u as y}from"./mount-component.3889b323.js";import{p as O,P}from"./index.949f0f09.js";import{z as S,e as r,Q as N}from"./vue-libs.cab43f37.js";const[j,C]=f("notify"),v=a({},O,{type:g("danger"),color:String,message:w,className:k,background:String,lockScroll:Boolean});var i=S({name:j,props:v,emits:["update:show"],setup(e,{emit:n,slots:s}){const c=d=>n("update:show",d);return()=>r(P,{show:e.show,class:[C([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:"top",duration:.2,lockScroll:e.lockScroll,"onUpdate:show":c},{default:()=>[s.default?s.default():e.message]})}});let l,t;const x=e=>m(e)?e:{message:e};function D(){({instance:t}=h({setup(){const{state:e,toggle:n}=y();return()=>r(i,N(e,{"onUpdate:show":n}),null)}}))}function o(e){if(!!p)return t||D(),e=a({},o.currentOptions,x(e)),t.open(e),clearTimeout(l),e.duration>0&&(l=window.setTimeout(o.clear,e.duration)),t}const u=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,className:"",lockScroll:!1,background:void 0});o.clear=()=>{t&&t.toggle(!1)};o.currentOptions=u();o.setDefaultOptions=e=>{a(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=u()};o.Component=b(i);o.install=e=>{e.use(o.Component),e.config.globalProperties.$notify=o};export{o as N};