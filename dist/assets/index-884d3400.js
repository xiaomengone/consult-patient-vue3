import{a as G,b as O,c as j}from"./consult-51e17c38.js";import{r as f,d as C,b as p,o as g,c as $,f as s,e as n,t as m,w as c,j as E,g as b,v as Q,F as z,s as S,h as D,_ as I,x as W,q as F,y as q,z as J,A as P,B as X,C as Y,D as Z,E as A,G as x,H as ee,p as K,m as T,I as te}from"./index-917a8082.js";import{E as ne}from"./index-6e2fbf2c.js";import"./request-9f1dea72.js";import"./function-call-2c0d12ed.js";const B="/assets/ad-c4ee3bf4.png",H=(t="doc")=>{const o=f(!1);return{loading:o,followWithInterest:async e=>{o.value=!0;try{const a=await G({type:t,id:e==null?void 0:e.id});e.likeFlag=e.likeFlag===1?0:1}finally{o.value=!1}}}},se={class:"knowledge-card van-hairline--bottom"},oe={class:"head"},ae={class:"info"},ie={class:"name"},le={class:"dep van-ellipsis"},ce={class:"body"},re={class:"title van-ellipsis"},de={class:"tag"},_e={class:"intro van-multi-ellipsis--l2"},ue={class:"logs"},pe=C({__name:"KnowledgeCard",props:{item:{}},setup(t){const{loading:o,followWithInterest:i}=H("knowledge");return(e,a)=>{var l;const _=p("van-image"),r=p("van-button");return g(),$("div",se,[s("div",oe,[n(_,{round:"",class:"avatar",src:e.item.creatorAvatar},null,8,["src"]),s("div",ae,[s("p",ie,m(e.item.creatorName),1),s("p",le,m(e.item.creatorHospatalName)+" "+m(e.item.creatorDep)+" "+m(e.item.creatorTitles),1)]),n(r,{onClick:a[0]||(a[0]=d=>b(i)(e.item)),class:"btn",size:"small",round:"",loading:b(o)},{default:c(()=>[E(m(e.item.likeFlag===1?"已关注":"+关注"),1)]),_:1},8,["loading"])]),s("div",ce,[s("h3",re,m(e.item.title),1),s("p",de,[s("span",null,"# "+m((l=e.item)==null?void 0:l.topic),1)]),s("p",_e,m(e.item.content.replace(/<[^>]+>/g,"")),1),s("div",{class:Q(["imgs",{large:e.item.coverUrl.length===1}])},[(g(!0),$(z,null,S(e.item.coverUrl,(d,v)=>(g(),D(_,{key:v,src:d,fit:"cover"},null,8,["src"]))),128))],2),s("p",ue,[s("span",null,m(e.item.collectionNumber)+" 收藏",1),s("span",null,m(e.item.commentNumber)+" 评论",1)])])])}}});const me=I(pe,[["__scopeId","data-v-fe37e0f0"]]),ve={class:"knowledge-list"},fe=C({__name:"KnowledgeList",props:{type:{}},setup(t){const o=t,i=f(!1),e=f(!1),a=f([]),_=f({type:o.type,current:1,pageSize:5}),r=async()=>{const l=await O(_.value);console.log(5,l.data.rows),a.value.push(...l.data.rows),_.value.current>=l.data.pageTotal?e.value=!0:_.value.current++,i.value=!1};return(l,d)=>{const v=p("van-list");return g(),$("div",ve,[n(v,{loading:i.value,"onUpdate:loading":d[0]||(d[0]=u=>i.value=u),finished:e.value,"finished-text":"没有更多了",onLoad:r},{default:c(()=>[(g(!0),$(z,null,S(a.value,u=>(g(),D(me,{key:u.id,item:u},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])}}});const L=I(fe,[["__scopeId","data-v-b07859c5"]]),he={class:"doctor-card"},ge={class:"name"},we={class:"van-ellipsis"},ye=C({__name:"DoctorCard",props:{item:{}},setup(t){const{loading:o,followWithInterest:i}=H();return(e,a)=>{const _=p("van-image"),r=p("van-button");return g(),$("div",he,[n(_,{round:"",src:e.item.avatar},null,8,["src"]),s("p",ge,m(e.item.name),1),s("p",we,m(e.item.hospitalName)+" "+m(e.item.depName),1),s("p",null,m(e.item.positionalTitles),1),n(r,{onClick:a[0]||(a[0]=l=>b(i)(e.item)),round:"",size:"small",type:"primary",loading:b(o)},{default:c(()=>[E(m(e.item.likeFlag==0?"+ 关注":"已关注"),1)]),_:1},8,["loading"])])}}});const $e=I(ye,[["__scopeId","data-v-b4032c6f"]]);function R(t){return J()?(P(t),!0):!1}function U(t){return typeof t=="function"?t():b(t)}const be=typeof window<"u",V=()=>{};function ke(...t){if(t.length!==1)return X(...t);const o=t[0];return typeof o=="function"?Y(Z(()=>({get:o,set:V}))):f(o)}function Ce(t,o=!0){W()?F(t):o?t():q(t)}function Ie(t){var o;const i=U(t);return(o=i==null?void 0:i.$el)!=null?o:i}const M=be?window:void 0;function Le(...t){let o,i,e,a;if(typeof t[0]=="string"||Array.isArray(t[0])?([i,e,a]=t,o=M):[o,i,e,a]=t,!o)return V;Array.isArray(i)||(i=[i]),Array.isArray(e)||(e=[e]);const _=[],r=()=>{_.forEach(u=>u()),_.length=0},l=(u,w,y,k)=>(u.addEventListener(w,y,k),()=>u.removeEventListener(w,y,k)),d=A(()=>[Ie(o),U(a)],([u,w])=>{r(),u&&_.push(...i.flatMap(y=>e.map(k=>l(u,y,k,w))))},{immediate:!0,flush:"post"}),v=()=>{d(),r()};return R(v),v}function Ee(){const t=f(!1);return W()&&F(()=>{t.value=!0}),t}function ze(t){const o=Ee();return ee(()=>(o.value,!!t()))}function Se(t,o={}){const{window:i=M}=o,e=ze(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function");let a;const _=f(!1),r=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l))},l=()=>{e.value&&(r(),a=i.matchMedia(ke(t).value),_.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",l):a.addListener(l)))};return x(l),R(()=>r()),_}function De(t={}){const{window:o=M,initialWidth:i=1/0,initialHeight:e=1/0,listenOrientation:a=!0,includeScrollbar:_=!0}=t,r=f(i),l=f(e),d=()=>{o&&(_?(r.value=o.innerWidth,l.value=o.innerHeight):(r.value=o.document.documentElement.clientWidth,l.value=o.document.documentElement.clientHeight))};if(d(),Ce(d),Le("resize",d,{passive:!0}),a){const v=Se("(orientation: portrait)");A(v,()=>d())}return{width:r,height:l}}const Fe=t=>(K("data-v-8c786f31"),t=t(),T(),t),Me={class:"follow-doctor"},Ne=Fe(()=>s("div",{className:"head"},[s("p",null,"推荐关注"),s("a",{href:"javascript:;"},[E(" 查看更多"),s("i",{class:"van-icon van-icon-arrow"})])],-1)),We={class:"body"},Ae=C({__name:"FollowDoctor",setup(t){const{width:o,height:i}=De(),e=f(),a=f({current:1,pageSize:5}),_=async()=>{const r=await j(a.value);e.value=r.data};return F(()=>{_()}),(r,l)=>{const d=p("van-swipe-item"),v=p("van-swipe");return g(),$("div",Me,[Ne,s("div",We,[n(v,{width:150/375*b(o),class:"my-swipe","indicator-color":"white","show-indicators":!1,loop:!1},{default:c(()=>{var u;return[(g(!0),$(z,null,S((u=e.value)==null?void 0:u.rows,w=>(g(),D(d,{key:w.id},{default:c(()=>[n($e,{item:w},null,8,["item"])]),_:2},1024))),128))]}),_:1},8,["width"])])])}}});const Ke=I(Ae,[["__scopeId","data-v-8c786f31"]]),h=t=>(K("data-v-81356fad"),t=t(),T(),t),Te={class:"home-page"},Be={class:"home-header"},He={class:"con"},Re=h(()=>s("h1",null,"优医",-1)),Ue={class:"search"},Ve={class:"home-navs"},Ge=h(()=>s("p",{class:"title"},"问医生",-1)),Oe=h(()=>s("p",{class:"desc"},"按科室查问医生",-1)),je=h(()=>s("p",{class:"title"},"极速问诊",-1)),Qe=h(()=>s("p",{class:"desc"},"20s医生极速回复",-1)),qe=h(()=>s("p",{class:"title"},"开药门诊",-1)),Je=h(()=>s("p",{class:"desc"},"线上买药更方便",-1)),Pe=h(()=>s("p",{class:"title"},"药品订单",-1)),Xe=h(()=>s("p",{class:"title"},"健康档案",-1)),Ye=h(()=>s("p",{class:"title"},"我的处方",-1)),Ze=h(()=>s("p",{class:"title"},"疾病查询",-1)),xe={class:"home-banner"},et=h(()=>s("img",{src:B,alt:""},null,-1)),tt=h(()=>s("img",{src:B,alt:""},null,-1)),nt=C({__name:"index",setup(t){const o=te();console.log(111,o.consult);const i=f("1");return(e,a)=>{const _=p("cp-icon"),r=p("van-icon"),l=p("router-link"),d=p("van-col"),v=p("van-row"),u=p("van-swipe-item"),w=p("van-swipe"),y=p("van-tab"),k=p("van-tabs");return g(),$("div",Te,[s("div",Be,[s("div",He,[Re,s("div",Ue,[n(_,{name:"home-search"}),E(" 搜一搜：疾病/症状/医生/健康知识 ")])])]),s("div",Ve,[n(v,null,{default:c(()=>[n(d,{span:"8"},{default:c(()=>[n(l,{to:"/",class:"nav"},{default:c(()=>[n(r,{name:"user-o",size:"40"}),Ge,Oe]),_:1})]),_:1}),n(d,{span:"8"},{default:c(()=>[n(l,{to:"/consult/fast",class:"nav",onClick:a[0]||(a[0]=N=>b(o).setType(b(ne).rapidConsultation))},{default:c(()=>[n(r,{name:"service-o",size:"40"}),je,Qe]),_:1})]),_:1}),n(d,{span:"8"},{default:c(()=>[n(l,{to:"/",class:"nav"},{default:c(()=>[n(r,{name:"shop-o",size:"40"}),qe,Je]),_:1})]),_:1})]),_:1}),n(v,null,{default:c(()=>[n(d,{span:"6"},{default:c(()=>[n(l,{to:"/",class:"nav min"},{default:c(()=>[n(r,{name:"completed",size:"40"}),Pe]),_:1})]),_:1}),n(d,{span:"6"},{default:c(()=>[n(l,{to:"/",class:"nav min"},{default:c(()=>[n(r,{name:"orders-o",size:"40"}),Xe]),_:1})]),_:1}),n(d,{span:"6"},{default:c(()=>[n(l,{to:"/",class:"nav min"},{default:c(()=>[n(r,{name:"contact",size:"40"}),Ye]),_:1})]),_:1}),n(d,{span:"6"},{default:c(()=>[n(l,{to:"/",class:"nav min"},{default:c(()=>[n(r,{name:"search",size:"40"}),Ze]),_:1})]),_:1})]),_:1})]),s("div",xe,[n(w,{"indicator-color":"#fff"},{default:c(()=>[n(u,null,{default:c(()=>[et]),_:1}),n(u,null,{default:c(()=>[tt]),_:1})]),_:1})]),n(k,{active:i.value,"onUpdate:active":a[1]||(a[1]=N=>i.value=N),sticky:""},{default:c(()=>[n(y,{title:"关注",name:"1"},{default:c(()=>[n(Ke),n(L,{type:"like"})]),_:1}),n(y,{title:"推荐",name:"2"},{default:c(()=>[n(L,{type:"recommend"})]),_:1}),n(y,{title:"减脂",name:"3"},{default:c(()=>[n(L,{type:"fatReduction"})]),_:1}),n(y,{title:"饮食",name:"4"},{default:c(()=>[n(L,{type:"food"})]),_:1})]),_:1},8,["active"])])}}});const ct=I(nt,[["__scopeId","data-v-81356fad"]]);export{ct as default};
