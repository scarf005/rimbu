"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[16197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),h=r,s=m["".concat(o,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(s,p(p({ref:t},u),{},{components:a})):n.createElement(s,p({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>C,frontMatter:()=>s,metadata:()=>k,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>i(e,p(t)),h=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const s={title:"EdgeValuedGraph (namespace)",slug:"/rimbu/graph/EdgeValuedGraph/namespace"},g="namespace EdgeValuedGraph",k={unversionedId:"rimbu_graph/EdgeValuedGraph/index",id:"rimbu_graph/EdgeValuedGraph/index",title:"EdgeValuedGraph (namespace)",description:"An type-invariant immutable valued edge (undirected) graph. See the Graph documentation and the EdgeValuedGraph API documentation",source:"@site/api/rimbu_graph/EdgeValuedGraph/index.mdx",sourceDirName:"rimbu_graph/EdgeValuedGraph",slug:"/rimbu/graph/EdgeValuedGraph/namespace",permalink:"/api/rimbu/graph/EdgeValuedGraph/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeValuedGraph (namespace)",slug:"/rimbu/graph/EdgeValuedGraph/namespace"},sidebar:"defaultSidebar",previous:{title:"EdgeGraphSorted<N>",permalink:"/api/rimbu/graph/EdgeGraphSorted/interface"},next:{title:"EdgeValuedGraph.Builder<N,V>",permalink:"/api/rimbu/graph/EdgeValuedGraph/Builder/interface"}},f={},b=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],N={toc:b},y="wrapper";function C(e){var t=e,{components:a}=t,r=h(t,["components"]);return(0,n.kt)(y,c(m(m({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"namespace-edgevaluedgraph"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace EdgeValuedGraph")),(0,n.kt)("p",null,"An type-invariant immutable valued edge (undirected) graph. See the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraph/interface"}),"EdgeValuedGraph API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraph/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph<N,V>"))),(0,n.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/EdgeValuedGraph/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.Builder<N,V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"EdgeValuedGraph")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraph/Builder/interface"}),"EdgeValuedGraph.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/EdgeValuedGraph/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.Context<UN>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The EdgeValuedGraph's Context instance that serves as a factory for all related immutable instances and builders.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/EdgeValuedGraph/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.NonEmpty<N,V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable valued edge (undirected) graph. See the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraph/interface"}),"EdgeValuedGraph API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/EdgeValuedGraph/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.Types"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",m({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",m({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new EdgeValuedGraph context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",m({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UN>(options: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkMapContext: "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkConnectionsContext: "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): EdgeValuedGraph.Context<UN>;"))),(0,n.kt)("h4",m({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"UN"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the upper node type for which the context can create instances")))),(0,n.kt)("h4",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkMapContext: "),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkConnectionsContext: "),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,n.kt)("br",null)," - linkMapContext - the map context to use to maintain link maps",(0,n.kt)("br",null)," - linkConnectionsContext - the map context to use to maintain link connection maps"))))))}C.isMDXComponent=!0}}]);