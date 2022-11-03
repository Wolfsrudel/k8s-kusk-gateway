"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[8793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Deploying APIs",s={unversionedId:"reference/dashboard/deploying-apis",id:"reference/dashboard/deploying-apis",title:"Deploying APIs",description:"The Kusk Dashboard contains a wizard for helping you deploy your vanilla OpenAPI definitions to Kusk Gateway. It will",source:"@site/docs/reference/dashboard/deploying-apis.md",sourceDirName:"reference/dashboard",slug:"/reference/dashboard/deploying-apis",permalink:"/reference/dashboard/deploying-apis",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/reference/dashboard/deploying-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kusk Dashboard",permalink:"/reference/dashboard/overview"},next:{title:"Inspecting Deployed APIs",permalink:"/reference/dashboard/inspecting-apis"}},p={},l=[],c={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-apis"},"Deploying APIs"),(0,o.kt)("p",null,"The Kusk Dashboard contains a wizard for helping you deploy your vanilla OpenAPI definitions to Kusk Gateway. It will\nprompt and add any required ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk")," extensions for you, so you can try different configurations without having to\nadd the corresponding properties manually."),(0,o.kt)("p",null,'Open the wizard with the "Publish new API" button on the top right.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:n(75709).Z,width:"1434",height:"840"})),(0,o.kt)("p",null,'Paste your OpenAPI 3.x definition in the initial text field and proceed through the steps of the wizard as needed. As\nsoon as your API has enough configuration to be publishable, the "Publish" button in the bottom right will be enabled,\nallowing you to bypass any steps that aren\'t further required.'),(0,o.kt)("p",null,'For example, if you select "Enable mocking" on the first page, you can immediately publish your API, as it requires\nno other configuration when being mocked.'))}u.isMDXComponent=!0},75709:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deploy-wizard-page1-d59fe8b5a0f414d5354c33f6be193828.png"}}]);