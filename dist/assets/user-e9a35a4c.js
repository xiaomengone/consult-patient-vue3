import{r as e}from"./request-9f1dea72.js";const i=(t,n)=>e("/login/password","POST",{mobile:n,password:t}),s=(t,n)=>e("/code","GET",{mobile:t,type:n}),r=(t,n)=>e("/login","POST",{mobile:t,code:n}),o=()=>e("/patient/myUser","GET"),p=()=>e("/patient/mylist"),d=t=>e("/patient/add","POST",t),c=t=>e("/patient/update","PUT",t),u=t=>e(`/patient/del/${t}`,"delete"),P=t=>e(`/patient/info/${t}`);export{i as a,r as b,s as c,o as d,p as e,c as f,d as g,u as h,P as i};