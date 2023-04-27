"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[54454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(r),s=a,f=m["".concat(l,".").concat(s)]||m[s]||u[s]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},33035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),s=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"EdgeGraphSorted.NonEmpty<N>",slug:"/rimbu/graph/EdgeGraphSorted/NonEmpty/interface"},h="interface EdgeGraphSorted.NonEmpty<N>",g={unversionedId:"rimbu_graph/EdgeGraphSorted/NonEmpty.interface",id:"rimbu_graph/EdgeGraphSorted/NonEmpty.interface",title:"EdgeGraphSorted.NonEmpty<N>",description:"A non-empty type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the Graph documentation and the EdgeGraphSorted API documentation",source:"@site/api/rimbu_graph/EdgeGraphSorted/NonEmpty.interface.mdx",sourceDirName:"rimbu_graph/EdgeGraphSorted",slug:"/rimbu/graph/EdgeGraphSorted/NonEmpty/interface",permalink:"/api/rimbu/graph/EdgeGraphSorted/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraphSorted.NonEmpty<N>",slug:"/rimbu/graph/EdgeGraphSorted/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraphSorted.Context<UN>",permalink:"/api/rimbu/graph/EdgeGraphSorted/Context/interface"},next:{title:"EdgeGraphSorted.Types",permalink:"/api/rimbu/graph/EdgeGraphSorted/Types/interface"}},y={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],E={toc:b},N="wrapper";function v(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(N,u(m(m({},E),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"interface-edgegraphsortednonemptyn"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraphSorted.NonEmpty<N>")),(0,n.kt)("p",null,"A non-empty type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraphSorted/interface"}),"EdgeGraphSorted API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraphSorted/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted<N>"))),(0,n.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the node type")))),(0,n.kt)("h2",m({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",m({},{id:"stream"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stream")),(0,n.kt)("p",null,"Returns a non-empty ",(0,n.kt)("inlineCode",{parentName:"p"},"Stream")," containing all graph elements of this collection as single tuples for isolated nodes and 2-valued tuples of nodes for connections.")),(0,n.kt)("h4",m({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream(): Stream.NonEmpty<GraphElement<N>>;"))),(0,n.kt)("admonition",m({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"EdgeGraphSorted.of([1], [2, 3]).stream().toArray()  // => [[1], [2, 3]]\n")))))}v.isMDXComponent=!0}}]);