"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[6913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},s="Envoy Fleet",i={unversionedId:"reference/customresources/envoyfleet",id:"reference/customresources/envoyfleet",title:"Envoy Fleet",description:"This resource defines the Envoy Fleet, which is the implementation of the gateway in Kubernetes based on Envoy Proxy.",source:"@site/docs/reference/customresources/envoyfleet.md",sourceDirName:"reference/customresources",slug:"/reference/customresources/envoyfleet",permalink:"/reference/customresources/envoyfleet",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/reference/customresources/envoyfleet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/reference/customresources/api"},next:{title:"Static Route",permalink:"/reference/customresources/staticroute"}},l={},p=[{value:"<strong>Limitations</strong>",id:"limitations",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"envoy-fleet"},"Envoy Fleet"),(0,a.kt)("p",null,"This resource defines the Envoy Fleet, which is the implementation of the gateway in Kubernetes based on Envoy Proxy."),(0,a.kt)("p",null,"Once the resource manifest is deployed to Kubernetes, it is used by Kusk Gateway Manager to set up K8s Envoy Proxy ",(0,a.kt)("strong",{parentName:"p"},"Deployment"),",\n",(0,a.kt)("strong",{parentName:"p"},"ConfigMap")," and ",(0,a.kt)("strong",{parentName:"p"},"Service"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"ConfigMap")," config bootstraps Envoy Proxy to connect to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol"},"XDS")," service of the KGW Manager to retrieve the configuration.\nIn its initial state there is a minimal configuration, you have to deploy API or StaticRoute resource to set up the routing."),(0,a.kt)("p",null,"If the Custom Resource is uninstalled, the Manager deletes the created K8s resources."),(0,a.kt)("p",null,"You can deploy multiple Envoy Fleets and have multiple Gateways available."),(0,a.kt)("p",null,"Once the Fleet is deployed, its ",(0,a.kt)("strong",{parentName:"p"},"status")," field shows the success of the process (Deployed, Failed), so it can be shown with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe envoyfleet")," command."),(0,a.kt)("h2",{id:"limitations"},(0,a.kt)("strong",{parentName:"h2"},"Limitations")),(0,a.kt)("p",null,"Currently, only the success of K8s resources deployment is shown, not if the Envoy Proxy pods are alive or if the Service has the External IP Address allocated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"metadata.",(0,a.kt)("strong",{parentName:"p"},"name")," and metadata.",(0,a.kt)("strong",{parentName:"p"},"namespace")," - Used as the Envoy Fleet ID. The Manager will supply the configuration for this specific ID - Envoy will connect to the KGW Manager with it. API/Static Route can be deployed to this fleet using their fleet name field.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"image")," - The Envoy Proxy container image tag, usually envoyproxy/envoy-alpine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"service")," - Defines the configuration of the K8s Service that exposes the Envoy Proxy deployment. It is similar to the K8s Service configuration but with a limited set of fields.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.service.",(0,a.kt)("strong",{parentName:"p"},"type")," - Select the Service Type (NodePort, ClusterIP, LoadBalancer).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.service.",(0,a.kt)("strong",{parentName:"p"},"ports")," - Expose TCP ports (80, 443 or any other) routed to the ports names that Deployment exposes (http, https); ports to which the Envoy Proxy listener binds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.service.",(0,a.kt)("strong",{parentName:"p"},"annotations")," - Add annotations to the Service that will control load balancer configuration in the specific cloud providers implementations (e.g. to set up the internal Google Cloud Platform load balancer in the Google Cloud Engine, we annotate Service with the related annotation).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.service.",(0,a.kt)("strong",{parentName:"p"},"loadBalancerIP")," - Used to specify the pre-allocated Load Balancer IP address so it won't be deleted in case the Service is deleted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.service.",(0,a.kt)("strong",{parentName:"p"},"externalTrafficPolicy")," - Optional parameter that denotes if this Service routes external traffic to node-local or cluster-wide endpoints. ",(0,a.kt)("strong",{parentName:"p"},"Local")," preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. ",(0,a.kt)("strong",{parentName:"p"},"Cluster"),' obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. For the preservation of the real client IP in access logs, choose "Local"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"size")," - Optional parameter to specify the number of Envoy Proxy pods in the K8s deployment. If not specified, defaults to 1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"resources")," - Optional parameter that configures the Envoy Proxy container CPU/Memory requests and limits. Read ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Resource Management for Pods and Containers")," for the details. By default, no requests or limits are specified.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"annotations")," - Optional parameter that adds additional annotations to the Envoy Proxy pods, e.g. for Prometheus scraping.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"nodeSelector"),", spec.",(0,a.kt)("strong",{parentName:"p"},"tolerations")," and spec.",(0,a.kt)("strong",{parentName:"p"},"affinity")," - Optional parameters that provide the Envoy Proxy deployment settings for the K8s Pod scheduler. Read ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"},"Assigning Pods to Nodes")," to understand how can you bind Envoy pods to some types of nodes (e.g. non-preemtible node type pool) and how to ensure that Envoy pods are placed onto the different nodes for High Availability. See the YAML example below, too. The structure of these fields are the same as for K8s Deployment. These options can be used simultaneously, influencing each other.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"accesslog")," - Optional parameter that defines Envoy Proxy stdout HTTP requests logging. Each Envoy pod can stream the access log to stdout. If not specified,  no streaming occurs. If specified, you must chose the ",(0,a.kt)("strong",{parentName:"p"},"format")," and, optionally, the text or JSON template to tune the output.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.accesslog.",(0,a.kt)("strong",{parentName:"p"},"format")," - Required parameter that specifies the format of the output: ",(0,a.kt)("strong",{parentName:"p"},"JSON")," (structured) or ",(0,a.kt)("strong",{parentName:"p"},"text"),". Note that JSON format doesn't preserve fields order.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.accesslog.",(0,a.kt)("strong",{parentName:"p"},"text_template"),"|",(0,a.kt)("strong",{parentName:"p"},"json_template")," - Optional parameters that could be used to specify the exact Envoy request data to log. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log-format-strings"},"Envoy's Access Logging")," for the details. If not specified, Kusk Gateway provided defaults.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.",(0,a.kt)("strong",{parentName:"p"},"tls")," - Optional parameter that defines TLS settings for the Envoy Fleet. If not specified, the Envoy Fleet will accept only HTTP traffic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.",(0,a.kt)("strong",{parentName:"p"},"cipherSuites")," - An optional field that, when specified, the TLS listener will only support the specified cipher list when negotiating TLS 1.0 or 1.2 (this setting has no effect when negotiating TLS 1.3). If not specified, a default list will be used. Defaults are different for server (downstream) and client (upstream) TLS configurations. For more information see: ",(0,a.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/common.proto"},"Envoy's Common TLS Configuration"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.",(0,a.kt)("strong",{parentName:"p"},"tlsMinimumProtocolVersion")," - An optional field specifying the minimum TLS protocol version. By default, TLSv1_2 for clients and TLSv1_0 for servers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.",(0,a.kt)("strong",{parentName:"p"},"tlsMaximumProtocolVersion")," - An optional field specifying the maximum TLS protocol version. By default, TLSv1_2 for clients and TLSv1_3 for servers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.",(0,a.kt)("strong",{parentName:"p"},"https_redirect_hosts"),' - An optional field specifying the domain names to force use of HTTPS with. Non-secure HTTP requests with the matched Host header will be automatically redirected to secure HTTPS with the "301 Moved Permanently" code.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.",(0,a.kt)("strong",{parentName:"p"},"tlsSecrets")," - Secret name and namespace combinations for locating TLS secrets containing TLS certificates. More than one may be specified.\nKusk Gateway Manager pulls the certificates from the secrets, extracts the matching hostnames from the SubjectAlternativeNames (SAN) certificate field and configures Envoy to use that certificate for those hostnames.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.tlsSecrets.",(0,a.kt)("strong",{parentName:"p"},"secretRef")," - The name of the Kubernetes secret containing the TLS certificate.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"spec.tls.tlsSecrets.",(0,a.kt)("strong",{parentName:"p"},"namespace")," - The namespace where the Kubernetes secret resides."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: gateway.kusk.io/v1alpha1\nkind: EnvoyFleet\nmetadata:\n  name: default\n  namespace: default\nspec:\n  image: "envoyproxy/envoy-alpine:v1.20.0"\n  service:\n    # NodePort, ClusterIP, LoadBalancer\n    type: LoadBalancer\n    # Specify annotations to modify service behaviour, e.g. for GCP to create internal load balancer:\n    # annotations:\n    #   networking.gke.io/load-balancer-type: "Internal"\n    # Specify preallocated static load balancer IP address if present\n    #loadBalancerIP: 10.10.10.10\n    ports:\n    - name: http\n      port: 80\n      targetPort: http\n    - name: https\n      port: 443\n      targetPort: http\n  # externalTrafficPolicy: Cluster|Local\n  resources:\n    # limits:\n    #   cpu: 1\n    #   memory: 100M\n    requests:\n      cpu: 10m\n      memory: 100M\n  # Put any additional annotations to the Enovy pod.\n  # Here we add the annotations for the Prometheus service discovery to scrape Envoy pods for the Prometheus metrics.\n  # annotations:\n  #   prometheus.io/scrape: \'true\'\n  #   prometheus.io/port: \'19000\'\n  #   prometheus.io/path: /stats/prometheus\n\n  ##### Scheduling directives\n  # Read https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/ for the details.\n\n  # Optional - schedule Envoy pods to the node with the label "disktype=ssd".\n  # nodeSelector:\n  #   disktype: "ssd"\n\n  # Optional - allow to be scheduled on the "tainted" node. Taint with "kubectl taint nodes node1 key1=value1:NoSchedule".\n  # Taints will repel the pods from the node unless the pods have the specific toleration.\n  # The line below will allow this specific Envoy pod to be scheduled there (but scheduler decideds where to put it anyway).\n  # tolerations:\n  # - key: "key1"\n  #   operator: "Exists"\n  #   effect: "NoSchedule"\n\n  # Optional - provide pods affinity and anti-affinity settings.\n  # This is more flexible than nodeSelector scheme, but they can be specified together.\n  # For the scalability and fault tolerance we prefer to put all Envoy pods onto different nodes - in a case one node fails we survive on others.\n  # The block below will search for all matching labels of THIS "default" envoy fleet pods and will try to schedule pods onto different nodes.\n  # Other fleets (if present) are not taken into consideration. You can specify nodeAffinity and podAffinity as well.\n  # affinity:\n  #   podAntiAffinity:\n  #     requiredDuringSchedulingIgnoredDuringExecution:\n  #     - labelSelector:\n  #         matchExpressions:\n  #         - key: app.kubernetes.io/name\n  #           operator: In\n  #           values:\n  #           - kusk-gateway-envoy-fleet\n  #         - key: fleet\n  #           operator: In\n  #           values:\n  #           - default\n  #       topologyKey: kubernetes.io/hostname\n\n  # optional, the number of Envoy Proxy pods to start\n  size: 1\n\n  # Access logging to stdout\n  # Optional, if this is missing no access logging to stdout will be done\n  accesslog:\n    # json|text\n    format: text\n    # Depending on format we can specify our own log template or if template is not specified - default Kusk Gateway will be used.\n    # See https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log-format-strings for the details.\n    # Below are specified the examples of similar and minimalistic formats for both text and json format types.\n    # Text format fields order is preserved.\n    # The output example:\n    # "[2021-12-15T16:50:50.217Z]" "GET" "/" "200" "1"\n    text_template: |\n      "[%START_TIME%]" "%REQ(:METHOD)%" "%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%" "%RESPONSE_CODE%" "%DURATION%"\n    # Json format fields order isn\'t preserved\n    # The output example:\n    # {"start_time":"2021-12-15T16:46:52.135Z","path":"/","response_code":200,"method":"GET","duration":1}\n    json_template:\n      start_time: "%START_TIME%"\n      method: "%REQ(:METHOD)%"\n      path: "%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%"\n      response_code: "%RESPONSE_CODE%"\n      duration: "%DURATION%"\n\n  # TLS configuration\n  # tls:\n    # cipherSuites:\n    #   - ECDHE-ECDSA-AES128-SHA\n    #   - ECDHE-RSA-AES128-SHA\n    #   - AES128-GCM-SHA256\n    # tlsMinimumProtocolVersion: TLSv1_2\n    # tlsMaximumProtocolVersion: TLSv1_3\n    # https_redirect_hosts:\n    #     - "example.com"\n    #     - "my-other-example.com"\n    # tlsSecrets:\n    #   - secretRef: my-cert\n    #     namespace: default\n')))}d.isMDXComponent=!0}}]);