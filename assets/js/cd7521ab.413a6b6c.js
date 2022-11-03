"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[1298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="API",s={unversionedId:"reference/customresources/api",id:"reference/customresources/api",title:"API",description:"This resource uses an OpenAPI file with x-kusk annotations as the source of truth to configure routing.",source:"@site/docs/reference/customresources/api.md",sourceDirName:"reference/customresources",slug:"/reference/customresources/api",permalink:"/reference/customresources/api",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/reference/customresources/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kusk Custom Resources",permalink:"/reference/customresources/overview"},next:{title:"Envoy Fleet",permalink:"/reference/customresources/envoyfleet"}},p={},l=[{value:"<strong>Using fleet</strong>",id:"using-fleet",level:2},{value:"<strong>Limitations</strong>",id:"limitations",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api"},"API"),(0,o.kt)("p",null,"This resource uses an OpenAPI file with x-kusk annotations as the source of truth to configure routing.\nRefer to ",(0,o.kt)("a",{parentName:"p",href:"/extension"},"OpenAPI Extension Reference")," for the further information on how to add routing information to OpenAPI file."),(0,o.kt)("p",null,"The required field of API resource is ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.**spec**")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kusk"),"-enhanced OpenAPI file is supplied as an embedded string.\nYou can generate API resources from an OpenAPI definition (and integrate into your CI) using the Kusk CLI - see\n",(0,o.kt)("a",{parentName:"p",href:"/reference/cli/generate-cmd"},"Generating API CRDs"),"."),(0,o.kt)("h2",{id:"using-fleet"},(0,o.kt)("strong",{parentName:"h2"},"Using fleet")),(0,o.kt)("p",null,"The optional spec.",(0,o.kt)("strong",{parentName:"p"},"fleet")," field specifies to what Envoy Fleet (Envoy Proxy instances with the exposing K8s Service) this configuration applies.\nThe fleet.",(0,o.kt)("strong",{parentName:"p"},"name")," and fleet.",(0,o.kt)("strong",{parentName:"p"},"namespace")," fields reference the deployed Envoy Fleet Custom Resource name and namespace.\nDeploy your API configuration in any namespace with any name and it will be applied to the specific Envoy Fleet.\nIf this option is missing, auto-detection will be performed to find the single fleet deployed in the Kubernetes cluster fleet, which is considered as the default fleet.\nThe deployed API custom resource will be changed to map to that fleet accordingly.\nIf there are multiple fleets deployed, the spec.",(0,o.kt)("strong",{parentName:"p"},"fleet")," is required to specify in the manifest."),(0,o.kt)("p",null,"Once the resource manifest is deployed, Kusk Gateway Manager will use it to configure routing for Envoy Fleet.\nMultiple resources can exist in different namespaces; all of them will be evaluated and the configuration merged on any update with these resources.\nTrying to apply a resource that has conflicting routes with the existing resources (i.e. same HTTP method and path) will result in error."),(0,o.kt)("h2",{id:"limitations"},(0,o.kt)("strong",{parentName:"h2"},"Limitations")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Currently, the resource ",(0,o.kt)("strong",{parentName:"li"},"status")," field is not updated by the manager when the configuration process finishes.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: gateway.kusk.io/v1alpha1\nkind: API\nmetadata:\n  name: api-sample\nspec:\n  # Envoy Fleet (its name and namespace) to deploy the configuration to, here - deployed EnvoyFleet with the name "default" in the namespace "default".\n  # Optional, if not specified - single (default) fleet auto-detection will be performed in the cluster.\n  fleet:\n    name: default\n    namespace: default\n  # OpenAPI file with x-kusk annotation here\n  spec: |\n    openapi: 3.0.2\n    servers:\n      - url: /api/v3\n    info:\n      description: Some description\n      version: 1.0.0\n      title: the best API in the world\n    # top level x-kusk extension to configure routes\n    x-kusk:\n      disabled: false\n      hosts: [ "*" ]\n      cors:\n        origins:\n        - "*"\n        methods:\n        - POST\n        - GET\n        - OPTIONS\n        headers:\n        - Content-Type\n        credentials: true\n        expose_headers:\n        - X-Custom-Header1\n        max_age: 86200\n      upstream:\n        service:\n          name: oldapi\n          namespace: default\n          port: 80\n        # Strips prefix when forwarding to upstream\n        rewrite:\n          pattern: "^/api"\n          substitution: ""\n      path:\n        prefix: /api\n    paths:\n      /pet:\n        x-kusk:\n          disabled: true\n        post:\n          x-kusk:\n            disabled: false\n            upstream:\n              host:\n                hostname: newapi.default.svc.cluster.local\n                port: 8080\n    --- skipped ---\n        put:\n          summary: Update pet\n          description: Update an existing pet by Id\n          operationId: updatePet\n     --- skipped ---\n\n')))}c.isMDXComponent=!0}}]);