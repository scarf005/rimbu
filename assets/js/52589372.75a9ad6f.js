"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[4125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(r),s=n,f=m["".concat(l,".").concat(s)]||m[s]||c[s]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>h,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,i(t)),s=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const f={title:"EdgeValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/core/EdgeValuedGraphSorted/NonEmpty/interface"},y="interface EdgeValuedGraphSorted.NonEmpty<N,V>",h={unversionedId:"rimbu_core/EdgeValuedGraphSorted/NonEmpty.interface",id:"rimbu_core/EdgeValuedGraphSorted/NonEmpty.interface",title:"EdgeValuedGraphSorted.NonEmpty<N,V>",description:"A non-empty type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using SortedMaps See the Graph documentation and the EdgeValuedGraphSorted API documentation",source:"@site/api/rimbu_core/EdgeValuedGraphSorted/NonEmpty.interface.mdx",sourceDirName:"rimbu_core/EdgeValuedGraphSorted",slug:"/rimbu/core/EdgeValuedGraphSorted/NonEmpty/interface",permalink:"/api/rimbu/core/EdgeValuedGraphSorted/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/core/EdgeValuedGraphSorted/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeValuedGraphSorted.Context<UN>",permalink:"/api/rimbu/core/EdgeValuedGraphSorted/Context/interface"},next:{title:"EdgeValuedGraphSorted.Types",permalink:"/api/rimbu/core/EdgeValuedGraphSorted/Types/interface"}},b={},g=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],N={toc:g},k="wrapper";function v(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(k,c(m(m({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-edgevaluedgraphsortednonemptynv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface EdgeValuedGraphSorted.NonEmpty<N,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using SortedMaps See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraphSorted/interface"}),"EdgeValuedGraphSorted API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/EdgeValuedGraphSorted/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphSorted<N,V>"))),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the node type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the connection value type")))),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"Returns a non-empty Stream containing all entries of this collection as tuples of key and value.")),(0,a.kt)("h4",m({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>;"))),(0,a.kt)("admonition",m({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"EdgeValuedGraphHashed.of([1, 2, 'a'], [2, 3, 'b']).stream().toArray()\n// => [[1, 2, 'a'], [2, 3, 'b']]\n"))),(0,a.kt)("h4",m({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}v.isMDXComponent=!0}}]);