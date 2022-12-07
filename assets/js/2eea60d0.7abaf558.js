"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[3721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="42Crunch",o={unversionedId:"guides/security/42crunch",id:"guides/security/42crunch",title:"42Crunch",description:"Automatically run security and vulnerabilities scan on your OpenAPI definition.",source:"@site/docs/guides/security/42crunch.md",sourceDirName:"guides/security",slug:"/guides/security/42crunch",permalink:"/guides/security/42crunch",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/security/42crunch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/guides/observability"},next:{title:"Install Kusk CLI",permalink:"/reference/cli/overview"}},c={},u=[{value:"42Crunch Reference",id:"42crunch-reference",level:2},{value:"Example Configuration",id:"example-configuration",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"42crunch"},(0,a.kt)("inlineCode",{parentName:"h1"},"42Crunch")),(0,a.kt)("p",null,"Automatically run security and vulnerabilities scan on your OpenAPI definition. "),(0,a.kt)("h2",{id:"42crunch-reference"},"42Crunch Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"security.42crunch")),(0,a.kt)("td",{parentName:"tr",align:null},"Enables 42Crunch scan assesment"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"security.42crunch.token")),(0,a.kt)("td",{parentName:"tr",align:null},"Object holding API Token for 42Crunch"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"security.42crunch.token.name")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the kubernetes secret"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"security.42crunch.token.namespace")),(0,a.kt)("td",{parentName:"tr",align:null},"Namespace of the kubernetes secret"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))),(0,a.kt)("h2",{id:"example-configuration"},"Example Configuration"),(0,a.kt)("p",null,"A minimal example of the configuration for this filter is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=crunch42.yaml"',title:'crunch42.yaml"'},'openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  cors:\n    origins:\n      - "*"\n    methods:\n      - GET\n      - POST\n  upstream:\n    service:\n      name: hello-world-svc\n      namespace: default\n      port: 8080\n  security:\n    42crunch:\n      token:\n        name: demo-secret\n        namespace: default\npaths:\n  /hello:\n    get:\n      responses:\n        "200":\n          description: A simple hello world!\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  message:\n                    type: string\n              example:\n                message: Hello from a mocked response!\n\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a 42Crunch account ",(0,a.kt)("a",{parentName:"li",href:"https://platform.42crunch.com/login"},"https://platform.42crunch.com/login"),"."),(0,a.kt)("li",{parentName:"ol"},"Get 42Crunch API token ",(0,a.kt)("a",{parentName:"li",href:"https://platform.42crunch.com/settings/tokens"},"https://platform.42crunch.com/settings/tokens")),(0,a.kt)("li",{parentName:"ol"},"Store the token in a Kubernetes secret")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export 42CRUNCH_TOKEN=[your_api_token] \n$ echo $42CRUNCH_TOKEN | base64 \nbXk0MmNydW5jaHRva2VuCg==\n")),(0,a.kt)("p",null,"Copy the output and paste it under ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUNCH42_TOKEN")," property of the secret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: demo-secret\n  namespace: default\ntype: Opaque\ndata:\n  CRUNCH42_TOKEN: bXk0MmNydW5jaHRva2VuCg==\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl apply -f openapi.yaml")," (use the example above)"),(0,a.kt)("li",{parentName:"ol"},"Log in into ",(0,a.kt)("a",{parentName:"li",href:"https://platform.42crunch.com/login"},"42Crunch")," and look for the API collection named simple-api and within it there will be your API with all security scans ran.")))}s.isMDXComponent=!0}}]);