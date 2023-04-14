"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[56483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(a),N=n,k=u["".concat(m,".").concat(N)]||u[N]||s[N]||l;return a?r.createElement(k,p(p({ref:t},d),{},{components:a})):r.createElement(k,p({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>C,frontMatter:()=>k,metadata:()=>c,toc:()=>g});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))o.call(t,a)&&d(e,a,t[a]);return e},s=(e,t)=>l(e,p(t)),N=(e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};const k={title:"ValuedGraphBase.Factory<Tp,UN>",slug:"/rimbu/graph/custom/ValuedGraphBase/Factory/interface"},h="interface ValuedGraphBase.Factory<Tp,UN>",c={unversionedId:"rimbu_graph/custom/ValuedGraphBase/Factory.interface",id:"rimbu_graph/custom/ValuedGraphBase/Factory.interface",title:"ValuedGraphBase.Factory<Tp,UN>",description:"undocumented",source:"@site/api/rimbu_graph/custom/ValuedGraphBase/Factory.interface.mdx",sourceDirName:"rimbu_graph/custom/ValuedGraphBase",slug:"/rimbu/graph/custom/ValuedGraphBase/Factory/interface",permalink:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ValuedGraphBase.Factory<Tp,UN>",slug:"/rimbu/graph/custom/ValuedGraphBase/Factory/interface"},sidebar:"defaultSidebar",previous:{title:"ValuedGraphBase.Context<UN,Tp>",permalink:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface"},next:{title:"ValuedGraphBase.NonEmpty<N,V,Tp>",permalink:"/api/rimbu/graph/custom/ValuedGraphBase/NonEmpty/interface"}},y={},g=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4}],b={toc:g},f="wrapper";function C(e){var t=e,{components:a}=t,n=N(t,["components"]);return(0,r.kt)(f,s(u(u({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-valuedgraphbasefactorytpun"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface ValuedGraphBase.Factory<Tp,UN>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedGraphBase.Context<UN,Tp>")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowValuedGraphHashedCreators/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashedCreators")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeValuedGraphHashedCreators/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashedCreators")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeValuedGrapSortedCreators/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGrapSortedCreators")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowValuedGraphSortedCreators/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSortedCreators"))),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Tp"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedGraphBase.Types"))),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"UN"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",u({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"Returns an empty builder instance.")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"builder<N extends UN, V>(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['builder'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.builder<number, string>()    // => ArrowValuedGraphHashed.Builder<number, string>\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"empty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"empty")),(0,r.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"empty<N extends UN, V>(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.empty<number, string>()    // => ArrowValuedGraphHashed<number, string>\nArrowValuedGraphHashed.empty<string, boolean>()   // => ArrowValuedGraphHashed<string, boolean>\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"from"}),(0,r.kt)("inlineCode",{parentName:"h3"},"from")),(0,r.kt)("p",null,"Returns an immutable valued Graph, containing the graph elements from each of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,r.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<"),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<"),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"sources")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<"),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<ValuedGraphElement<N, V>>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,r.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing graph elements to add")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.from([[1], [2]], [[3, 4, 'c']])  // => ArrowValuedGraphHashed.NonEmpty<number, string>\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"of"}),(0,r.kt)("inlineCode",{parentName:"h3"},"of")),(0,r.kt)("p",null,"Returns an immutable valued Graph instance containing the graph elements from the given ",(0,r.kt)("inlineCode",{parentName:"p"},"graphElements"),".")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"of<N extends UN, V>(...graphElements: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"graphElements")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<ValuedGraphElement<N, V>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of graph elements that are either a single tuple containing a node, or a triplet containing two connection nodes and the connection value.")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1], [2], [3, 4, 'a']) // => ArrowValuedGraphHashed.NonEmpty<number, string>\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"reducer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,r.kt)("p",null,"Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds valued received graph elements to a ValuedGraph and returns the ValuedGraph as a result. When a ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a graph from the source, and then add graph elements to it.")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reducer<N extends UN, V>(source?: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>): Reducer<ValuedGraphElement<N, V>, "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal']>;"))),(0,r.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<ValuedGraphElement<N, V>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of graph elements to add to")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource: ValuedGraphElement<number, string>[] = [[1, 2, 'a'], [3], [5]];\nconst result = Stream.of([1, 3, 'b'], [4, 3, 'c']).reduce(ArrowGraphSorted.reducer(someSource))\nresult.toArray()   // => [[1, 2, 'a'], [1, 3, 'b'], [4, 3, 'c'], [5]]\n"))),(0,r.kt)("admonition",u({},{title:"note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is a ValuedGraph in the same context, it will directly call ",(0,r.kt)("inlineCode",{parentName:"p"},".toBuilder()"),"."))))}C.isMDXComponent=!0}}]);