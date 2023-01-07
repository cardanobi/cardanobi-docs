"use strict";(self.webpackChunkcardanobi_docs=self.webpackChunkcardanobi_docs||[]).push([[2628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(a),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),s=a(2389),o=a(7392),p=a(7094),i=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:s,values:m,groupId:c,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),[f,T]=(0,l.useState)(N),Z=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=c){const e=y[c];null!=e&&e!==f&&b.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=Z.indexOf(t),n=b[a].value;n!==f&&(x(t),T(n),null!=c&&v(c,String(n)))},j=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=Z.indexOf(e.currentTarget)+1;t=Z[a]??Z[0];break}case"ArrowLeft":{const a=Z.indexOf(e.currentTarget)-1;t=Z[a]??Z[Z.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>Z.push(e),onKeyDown:j,onClick:E},s,{className:(0,r.Z)("tabs__item",u,s?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,s.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},5998:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){let{children:t,type:a,style_class:l}=e;var r="theme-doc-version-badge badge badge--success";return l?r=l:a&&"post"==a&&(r="theme-doc-version-badge badge badge--warning"),a?n.createElement("span",{class:r},a.toUpperCase(),t):n.createElement("span",{class:r},t)}},4259:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);a(933);function l(e){let{children:t}=e;return n.createElement("span",{class:"theme-doc-version-badge badge badge-odata"},"OData",t)}},8068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),r=a(933),s=a(5488),o=a(5162),p=a(5998),i=a(4259);const d={title:"",sidebar_label:"Hashes",sidebar_position:4},u=void 0,m={unversionedId:"core-domain/Pools/Hashes",id:"core-domain/Pools/Hashes",title:"",description:"Version: 1.0",source:"@site/docs/core-domain/Pools/Hashes.md",sourceDirName:"core-domain/Pools",slug:"/core-domain/Pools/Hashes",permalink:"/docs/core-domain/Pools/Hashes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"",sidebar_label:"Hashes",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FetchErrors",permalink:"/docs/core-domain/Pools/FetchErrors"},next:{title:"Metadata",permalink:"/docs/core-domain/Pools/Metadata"}},c={},h=[{value:'<span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash',id:"get-all-pool-key-hash",level:2},{value:"\ud83d\udc68\u200d\ud83d\udcbb Code samples",id:"-code-samples",level:3},{value:"\ud83d\udc8c Response Codes",id:"-response-codes",level:3},{value:"\ud83d\udc8c Response Schemas",id:"-response-schemas",level:3},{value:'<span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash <span class="theme-doc-version-badge badge badge-odata"> OData</span>',id:"get-all-pool-key-hash--odata",level:2},{value:"\ud83d\udc68\u200d\ud83d\udcbb Code samples",id:"-code-samples-1",level:3},{value:"\ud83d\udc8c Response Codes",id:"-response-codes-1",level:3},{value:"\ud83d\udc8c Response Schemas",id:"-response-schemas-1",level:3}],k={toc:h};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("span",{class:"theme-doc-version-badge badge badge--primary"},"Version: 1.0"),(0,l.kt)("admonition",{title:"Endpoints Summary ",type:"tip"},(0,l.kt)(p.Z,{type:"GET",mdxType:"EndpointBadge"})," All pool key hash",(0,l.kt)("br",null),(0,l.kt)(p.Z,{type:"GET",mdxType:"EndpointBadge"})," All pool key hash ",(0,l.kt)(i.Z,{mdxType:"ODataBadge"}),(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"get-all-pool-key-hash"},(0,l.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"GET")," All pool key hash"),(0,l.kt)("p",null,"Returns every unique pool key hash."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/core/pools/hashes")),(0,l.kt)("h3",{id:"-code-samples"},"\ud83d\udc68\u200d\ud83d\udcbb Code samples"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = { \n'Accept':'application/json', \n'Authorization':'Bearer {access-token}' \n}; \n\nfetch('/api/core/epochs', \n{ \nmethod: 'GET', \n\nheaders: headers \n}) \n.then(function(res) { \n    return res.json(); \n}).then(function(body) { \n    console.log(body); \n}); \n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"import requests \nheaders = { \n'Accept': 'application/json', \n'Authorization': 'Bearer {access-token}' \n} \n\nr = requests.get('/api/core/epochs', headers = headers) \n\nprint(r.json()) \n"))),(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld { \npublic static void main(String args[]) { \n    System.out.println("Hello, World"); \n} \n} \n')))),(0,l.kt)("h3",{id:"-response-codes"},"\ud83d\udc8c Response Codes"),(0,l.kt)(s.Z,{groupId:"response-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",label:"200",attributes:{className:r.Z.green},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OK: Successful request.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[ \n { \n  "id": 0, \n  "hash_raw": 0, \n  "view": 0, \n  "hash_hex": 0\n } \n] \n'))),(0,l.kt)(o.Z,{value:"400",label:"400",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Bad Request: The request was unacceptable, often due to missing a required parameter.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n"))),(0,l.kt)(o.Z,{value:"401",label:"401",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Unauthorized: No valid API key provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n"))),(0,l.kt)(o.Z,{value:"404",label:"404",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Not Found: The requested resource cannot be found.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n")))),(0,l.kt)("h3",{id:"-response-schemas"},"\ud83d\udc8c Response Schemas"),(0,l.kt)(s.Z,{groupId:"response-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",label:"200",attributes:{className:r.Z.green},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null},"The pool hash unique identifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash_raw"),(0,l.kt)("td",{parentName:"tr",align:null},"string(byte)"),(0,l.kt)("td",{parentName:"tr",align:null},"The raw bytes of the pool hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"view"),(0,l.kt)("td",{parentName:"tr",align:null},"string(undefined)"),(0,l.kt)("td",{parentName:"tr",align:null},"The Bech32 encoding of the pool hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash_hex"),(0,l.kt)("td",{parentName:"tr",align:null},"string(undefined)"),(0,l.kt)("td",{parentName:"tr",align:null},"The hexadecimal encoding of the pool hash."))))),(0,l.kt)(o.Z,{value:"400",label:"400",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"400")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined.")),(0,l.kt)(o.Z,{value:"401",label:"401",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"401")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined.")),(0,l.kt)(o.Z,{value:"404",label:"404",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"404")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined."))),(0,l.kt)("h2",{id:"get-all-pool-key-hash--odata"},(0,l.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"GET")," All pool key hash ",(0,l.kt)("span",{class:"theme-doc-version-badge badge badge-odata"}," OData")),(0,l.kt)("p",null,"Returns every unique pool key hash."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/core/odata/poolshashes")),(0,l.kt)("h3",{id:"-code-samples-1"},"\ud83d\udc68\u200d\ud83d\udcbb Code samples"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const headers = { \n'Accept':'application/json', \n'Authorization':'Bearer {access-token}' \n}; \n\nfetch('/api/core/epochs', \n{ \nmethod: 'GET', \n\nheaders: headers \n}) \n.then(function(res) { \n    return res.json(); \n}).then(function(body) { \n    console.log(body); \n}); \n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"import requests \nheaders = { \n'Accept': 'application/json', \n'Authorization': 'Bearer {access-token}' \n} \n\nr = requests.get('/api/core/epochs', headers = headers) \n\nprint(r.json()) \n"))),(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld { \npublic static void main(String args[]) { \n    System.out.println("Hello, World"); \n} \n} \n')))),(0,l.kt)("h3",{id:"-response-codes-1"},"\ud83d\udc8c Response Codes"),(0,l.kt)(s.Z,{groupId:"response-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",label:"200",attributes:{className:r.Z.green},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OK: Successful request.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[ \n { \n  "id": 0, \n  "hash_raw": 0, \n  "view": 0, \n  "hash_hex": 0\n } \n] \n'))),(0,l.kt)(o.Z,{value:"400",label:"400",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Bad Request: The request was unacceptable, often due to missing a required parameter.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n"))),(0,l.kt)(o.Z,{value:"401",label:"401",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Unauthorized: No valid API key provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n"))),(0,l.kt)(o.Z,{value:"404",label:"404",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Not Found: The requested resource cannot be found.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Response schema is undefined.\n")))),(0,l.kt)("h3",{id:"-response-schemas-1"},"\ud83d\udc8c Response Schemas"),(0,l.kt)(s.Z,{groupId:"response-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",label:"200",attributes:{className:r.Z.green},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"integer(int64)"),(0,l.kt)("td",{parentName:"tr",align:null},"The pool hash unique identifier.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash_raw"),(0,l.kt)("td",{parentName:"tr",align:null},"string(byte)"),(0,l.kt)("td",{parentName:"tr",align:null},"The raw bytes of the pool hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"view"),(0,l.kt)("td",{parentName:"tr",align:null},"string(undefined)"),(0,l.kt)("td",{parentName:"tr",align:null},"The Bech32 encoding of the pool hash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash_hex"),(0,l.kt)("td",{parentName:"tr",align:null},"string(undefined)"),(0,l.kt)("td",{parentName:"tr",align:null},"The hexadecimal encoding of the pool hash."))))),(0,l.kt)(o.Z,{value:"400",label:"400",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"400")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined.")),(0,l.kt)(o.Z,{value:"401",label:"401",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"401")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined.")),(0,l.kt)(o.Z,{value:"404",label:"404",attributes:{className:r.Z.red},mdxType:"TabItem"},(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"404")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description")))),(0,l.kt)("p",null,"Response schema is undefined."))))}b.isMDXComponent=!0},933:(e,t,a)=>{a.d(t,{Z:()=>n});const n={features:"features_t9lD",featureSvg:"featureSvg_GfXr",green:"green_Lp1g",red:"red_UzOY",orange:"orange_z2Yv",yellow:"yellow_VPC9"}}}]);