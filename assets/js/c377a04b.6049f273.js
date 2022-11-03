"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[6971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,f=y["".concat(l,".").concat(d)]||y[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},21269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Kusk Gateway",s={unversionedId:"index",id:"index",title:"Kusk Gateway",description:"Kusk Gateway is a self-service API gateway powered by OpenAPI and Envoy!",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/getting-started"}},l={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusk-gateway"},"Kusk Gateway"),(0,a.kt)("p",null,"Kusk Gateway is a self-service API gateway powered by ",(0,a.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/"},"Envoy"),"!"),(0,a.kt)("p",null,"Kusk Gateway enables you to design and configure your APIs from single OpenAPI manifest and you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a1 ",(0,a.kt)("strong",{parentName:"li"},"Rapidly prototype your APIs")," by mocking your API responses"),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udd77\ud83c\udffd Protect your endpoints with ",(0,a.kt)("strong",{parentName:"li"},"automatic request and response validations")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd25 Configure critical policies like request timeouts and CORs with ",(0,a.kt)("strong",{parentName:"li"},"no coding required")),(0,a.kt)("li",{parentName:"ul"},"\ud83e\uddd0 Centrally control your APIs from an Open Source dashboard")),(0,a.kt)("p",null,"Kusk Gateway is for you if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You or your team develop REST APIs running in Kubernetes."),(0,a.kt)("li",{parentName:"ul"},"You embrace a contract-first approach to developing your APIs using OpenAPI or Swagger."),(0,a.kt)("li",{parentName:"ul"},"You want to ramp-up time when deploying a new REST api to a cluster and you don't want to spend lots of time configuring ingress controllers that require a dedicated Ops Engineer."),(0,a.kt)("li",{parentName:"ul"},"You want your REST API endpoints traffic to be observable and controllable with the easy to use settings.")),(0,a.kt)("p",null,"Proceed with our ",(0,a.kt)("a",{parentName:"p",href:"/getting-started"},"Installation")," instructions for installing to the generic Kubernetes cluster"))}c.isMDXComponent=!0}}]);