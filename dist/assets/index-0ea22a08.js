import{p as z,a as D,c as E}from"./rules-7d7cfbfb.js";import{a as G,b as M,c as A}from"./user-e9a35a4c.js";import{d as F,r,u as H,a as J,b as c,o as h,c as K,e as t,f as o,t as V,w as d,g as k,h as w,i as O,j as C,k as j,l as Q,p as W,m as X,_ as Y}from"./index-917a8082.js";import{s as x}from"./function-call-2c0d12ed.js";import"./request-9f1dea72.js";const Z="/assets/qq-7e9221ab.svg",i=_=>(W("data-v-adac6c6c"),_=_(),X(),_),ee={class:"login-page"},oe={class:"login-head"},se={href:"javascript:;"},ae={class:"cp-cell"},te=i(()=>o("span",null,"我已同意",-1)),ne=i(()=>o("a",{href:"javascript:;"},"用户协议",-1)),le=i(()=>o("span",null,"及",-1)),re=i(()=>o("a",{href:"javascript:;"},"隐私条款",-1)),ce={class:"cp-cell"},ue={class:"cp-cell"},de=i(()=>o("a",{href:"javascript:;"},"忘记密码？",-1)),ie={class:"login-other"},pe=i(()=>o("div",{class:"icon"},[o("img",{src:Z,alt:""})],-1)),ve=F({__name:"index",setup(_){const p=r(""),g=r(""),y=r(""),m=r(!1),n=r(0),U=r(),b=H(),I=J(),l=r(!0);let v;const R=async s=>{if(l.value)if(m.value){console.log(111,s);const e=await G(g.value,p.value);j().setUser(e==null?void 0:e.data),b.push(I.query.returnUrl||"/user")}else x("请勾选用户协议");else if(m.value){console.log(111,s);const e=await M(p.value,y.value);j().setUser(e==null?void 0:e.data),b.push(I.query.returnUrl||"/user")}else x("请勾选用户协议")},B=()=>{l.value=!l.value},L=async()=>{var e,u;if(n.value>0)return;await((e=U.value)==null?void 0:e.validate("mobile"));const s=await A(p.value,"login");x({duration:5e3,message:`验证码:
${(u=s==null?void 0:s.data)==null?void 0:u.code}`,icon:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"}),n.value=6,v&&clearInterval(v),v=setInterval(()=>{n.value>0?n.value--:(clearInterval(v),n.value=0)},1e3),Q(()=>{clearInterval(v)})},N=()=>{b.push("/register")};return(s,e)=>{const u=c("cp-nav-bar"),q=c("van-icon"),f=c("van-field"),$=c("van-checkbox"),S=c("van-button"),T=c("van-form"),P=c("van-divider");return h(),K("div",ee,[t(u,{"right-text":"注册",onClickRight:e[0]||(e[0]=a=>s.$router.push("/register"))}),o("div",oe,[o("h3",null,V(l.value?"密码登录":"短信登录"),1),o("a",se,[o("span",{onClick:B},V(l.value?"短信验证码登录":"密码登录"),1),t(q,{name:"arrow"})])]),t(T,{autocomplete:"off",onSubmit:R,ref_key:"form",ref:U},{default:d(()=>[t(f,{name:"mobile",placeholder:"请输入手机号",type:"tel",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=a=>p.value=a),rules:k(z)},null,8,["modelValue","rules"]),l.value?(h(),w(f,{key:0,placeholder:"请输入密码",modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=a=>g.value=a),type:"password",rules:k(D)},null,8,["modelValue","rules"])):(h(),w(f,{key:1,placeholder:"请输入验证码",modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=a=>y.value=a),type:"password",rules:k(E)},null,8,["modelValue","rules"])),l.value?O("",!0):(h(),w(f,{key:2},{button:d(()=>[o("span",{class:"btn-send",onClick:L},V(n.value?`${n.value}s后再次发送`:"发送验证码"),1)]),_:1})),o("div",ae,[t($,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a)},{default:d(()=>[te,ne,le,re]),_:1},8,["modelValue"])]),o("div",ce,[t(S,{block:"",round:"",type:"primary","native-type":"submit"},{default:d(()=>[C("登 录")]),_:1})]),o("div",ue,[de,t(S,{onClick:N,round:"",size:"small"},{default:d(()=>[C("去注册")]),_:1})])]),_:1},512),o("div",ie,[t(P,null,{default:d(()=>[C("第三方登录")]),_:1}),pe])])}}});const ye=Y(ve,[["__scopeId","data-v-adac6c6c"]]);export{ye as default};
