"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[94837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),s=n,g=c["".concat(l,".").concat(s)]||c[s]||m[s]||p;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<p;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},54145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>h,toc:()=>y});var a=r(3905),n=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>p(e,o(t)),s=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const g={title:"EdgeValuedGraphSorted<N,V>",slug:"/rimbu/graph/EdgeValuedGraphSorted/interface"},f="interface EdgeValuedGraphSorted<N,V>",h={unversionedId:"rimbu_graph/EdgeValuedGraphSorted.interface",id:"rimbu_graph/EdgeValuedGraphSorted.interface",title:"EdgeValuedGraphSorted<N,V>",description:"An type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using SortedMaps See the Graph documentation and the EdgeValuedGraphSorted API documentation",source:"@site/api/rimbu_graph/EdgeValuedGraphSorted.interface.mdx",sourceDirName:"rimbu_graph",slug:"/rimbu/graph/EdgeValuedGraphSorted/interface",permalink:"/api/rimbu/graph/EdgeValuedGraphSorted/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeValuedGraphSorted<N,V>",slug:"/rimbu/graph/EdgeValuedGraphSorted/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeValuedGraphSorted.Types",permalink:"/api/rimbu/graph/EdgeValuedGraphSorted/Types/interface"},next:{title:"Graph (namespace)",permalink:"/api/rimbu/graph/Graph/namespace"}},b={},y=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(k,m(c(c({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"interface-edgevaluedgraphsortednv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface EdgeValuedGraphSorted<N,V>")),(0,a.kt)("p",null,"An type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using SortedMaps See the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraphSorted/interface"}),"EdgeValuedGraphSorted API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraphSorted/namespace"}),"EdgeValuedGraphSorted")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraphSorted/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphSorted.NonEmpty<N,V>"))),(0,a.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the node type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the connection value type")))),(0,a.kt)("admonition",c({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const g1 = EdgeValuedGraphSorted.empty<number, string>()\nconst g2 = EdgeValuedGraphSorted.of([1], [2, 3, 'a'], [2, 4, 'b'])\n"))))}O.isMDXComponent=!0}}]);