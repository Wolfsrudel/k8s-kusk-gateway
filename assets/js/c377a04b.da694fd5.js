"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[6971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,y=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Kusk Gateway",s={unversionedId:"index",id:"index",title:"Kusk Gateway",description:"Kusk is a Kubernetes API gateway powered by Envoy. The main difference with other API Gateways is that Kusk has native support for OpenAPI.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"When Can You Use Kusk?",permalink:"/overview/when-can-you-use-kusk"}},u={},p=[],c={toc:p};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusk-gateway"},"Kusk Gateway"),(0,a.kt)("p",null,"Kusk is a Kubernetes API gateway powered by ",(0,a.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy"),". The main difference with other API Gateways is that Kusk has native support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification"},"OpenAPI"),"."),(0,a.kt)("p",null,"Modern REST APIs are developed using OpenAPI specification that is then used to generate API documentation, tests, server stubs and clients all from the OpenAPI definition. Kusk enables the use of OpenAPI definitions to configure the Ingress Controller of your Kubernetes clusters:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Kusk diagram",src:n(88706).Z,width:"5866",height:"2976"})),(0,a.kt)("p",null,"By using OpenAPI and Kusk you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a1 ",(0,a.kt)("strong",{parentName:"li"},"Rapidly prototype your APIs")," by mocking your API responses"),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udd77\ud83c\udffd Protect your endpoints with ",(0,a.kt)("strong",{parentName:"li"},"automatic request and response validations")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd25 Configure critical policies like request timeouts and CORS with ",(0,a.kt)("strong",{parentName:"li"},"no coding required")),(0,a.kt)("li",{parentName:"ul"},"\ud83e\uddd0 Centrally manage your APIs from an open source dashboard")),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/install-kusk-cli"},"Getting Started")," section to install Kusk Gateway, deploy an example API and connect a service to the API."))}l.isMDXComponent=!0},88706:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusk-diagram-eed0aa42ae8b7036cfb0812f873cfcfd.jpg"}}]);