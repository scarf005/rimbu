"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[23926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),k=r,h=d["".concat(m,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},63306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>M,frontMatter:()=>h,metadata:()=>N,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&u(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a};const h={title:"HashMultiMapHashValue (namespace)",slug:"/rimbu/multimap/HashMultiMapHashValue/namespace"},c="namespace HashMultiMapHashValue",N={unversionedId:"rimbu_multimap/HashMultiMapHashValue/index",id:"rimbu_multimap/HashMultiMapHashValue/index",title:"HashMultiMapHashValue (namespace)",description:"A type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the MultiMap documentation and the HashMultiMapHashValue API documentation",source:"@site/api/rimbu_multimap/HashMultiMapHashValue/index.mdx",sourceDirName:"rimbu_multimap/HashMultiMapHashValue",slug:"/rimbu/multimap/HashMultiMapHashValue/namespace",permalink:"/api/rimbu/multimap/HashMultiMapHashValue/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMultiMapHashValue (namespace)",slug:"/rimbu/multimap/HashMultiMapHashValue/namespace"},sidebar:"defaultSidebar",previous:{title:"@rimbu/multimap",permalink:"/api/rimbu/multimap"},next:{title:"HashMultiMapHashValue.Builder<K,V>",permalink:"/api/rimbu/multimap/HashMultiMapHashValue/Builder/interface"}},y={},b=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>defaultContext</code>",id:"defaultcontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-4",level:4}],f={toc:b},g="wrapper";function M(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(g,s(d(d({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"namespace-hashmultimaphashvalue"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace HashMultiMapHashValue")),(0,n.kt)("p",null,"A type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapHashValue/interface"}),"HashMultiMapHashValue API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue<K,V>"))),(0,n.kt)("h2",d({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.Builder<K,V>"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"HashMultiMapHashValue")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapHashValue/Builder/interface"}),"HashMultiMapHashValue.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.Context<UK,UV>"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A context instance for an ",(0,n.kt)("inlineCode",{parentName:"td"},"HashMultiMapHashValue")," that acts as a factory for every instance of this type of collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.NonEmpty<K,V>"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,n.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapHashValue/interface"}),"HashMultiMapHashValue API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.Types"))),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",d({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance for this type of collection and context.")),(0,n.kt)("h4",d({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<K extends UK, V extends UV>(): "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['builder'];"))),(0,n.kt)("h4",d({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",d({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.builder<number, string>()    // => HashMultiMapHashValue.Builder<number, string>\n"))),(0,n.kt)("h4",d({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#builder"}),"Factory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new HashMultiMapHashValue context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",d({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UK, UV>(options?: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapContext?: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/hashed/HashMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapValuesContext?: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UV>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): HashMultiMapHashValue.Context<UK, UV>;"))),(0,n.kt)("h4",d({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the upper value type for which the context can create instances")))),(0,n.kt)("h4",d({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapContext?: "),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/hashed/HashMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapValuesContext?: "),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/hashed/set/HashSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UV>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"(optional) an object containing the following properties:",(0,n.kt)("br",null)," - keyMapContext - (optional) the map context to use for key to valueset mappings",(0,n.kt)("br",null)," - keyMapValuesContext - (optional) the set context to use for value sets"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"defaultcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"defaultContext")),(0,n.kt)("p",null,"Returns the default context for HashMultiMapHashValue.")),(0,n.kt)("h4",d({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"defaultContext<UK, UV>(): HashMultiMapHashValue.Context<UK, UV>;"))),(0,n.kt)("h4",d({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the upper value type for which the context can create instances"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",d({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<K extends UK, V extends UV>(): "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal'];"))),(0,n.kt)("h4",d({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",d({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.empty<number, string>()    // => HashMultiMapHashValue<number, string>\nHashMultiMapHashValue.empty<string, boolean>()   // => HashMultiMapHashValue<string, boolean>\n"))),(0,n.kt)("h4",d({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#empty"}),"Factory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable multimap of this type and context, containing the entries in the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource"),".")),(0,n.kt)("h4",d({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal'];"))),(0,n.kt)("h4",d({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",d({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>>")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing key-value entries")))),(0,n.kt)("admonition",d({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.from([[1, 'a'], [2, 'b']])    // => HashMultiMapHashValue.NonEmpty<number, string>\n"))),(0,n.kt)("h4",d({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#from"}),"Factory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable multimap of this collection type and context, containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"entries"),".")),(0,n.kt)("h4",d({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<K extends UK, V extends UV>(...entries: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['nonEmpty'];"))),(0,n.kt)("h4",d({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",d({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entries")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"a non-empty array of key-value entries")))),(0,n.kt)("admonition",d({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.of([1, 'a'], [2, 'b'], [1, 'c'])    // => HashMap.NonEmpty<number, string>\n"))),(0,n.kt)("h4",d({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#of"}),"Factory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds received tuples to a MultiMap and returns the MultiMap as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a MultiMap from the source, and then add tuples to it.")),(0,n.kt)("h4",d({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<K extends UK, V extends UV>(source?: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): Reducer<[K, V], "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal']>;"))),(0,n.kt)("h4",d({},{id:"type-parameters-6"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",d({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",d({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"(optional) an initial source of tuples to add to")))),(0,n.kt)("admonition",d({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"const someSource: [number, string][] = [1, 'a'], [2, 'b'];\nconst result = Stream.of([1, 'c'], [3, 'a']).reduce(SortedMultiMap.reducer(someSource))\nresult.toArray()   // => [[1, 'a'], [1, 'c'], [2, 'b'], [3, 'a']]\n"))),(0,n.kt)("admonition",d({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a BiMap in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,n.kt)("h4",d({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#reducer"}),"Factory.reducer"))))}M.isMDXComponent=!0}}]);