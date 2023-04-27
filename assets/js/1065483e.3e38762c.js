"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[62695],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),s=n,h=m["".concat(l,".").concat(s)]||m[s]||c[s]||o;return t?a.createElement(h,p(p({ref:r},u),{},{components:t})):a.createElement(h,p({ref:r},u))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var d=2;d<o;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},18476:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>g});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))d.call(r,t)&&u(e,t,r[t]);return e},c=(e,r)=>o(e,p(r)),s=(e,r)=>{var t={};for(var a in e)l.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const h={title:"ArrowValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/graph/ArrowValuedGraphSorted/NonEmpty/interface"},f="interface ArrowValuedGraphSorted.NonEmpty<N,V>",y={unversionedId:"rimbu_graph/ArrowValuedGraphSorted/NonEmpty.interface",id:"rimbu_graph/ArrowValuedGraphSorted/NonEmpty.interface",title:"ArrowValuedGraphSorted.NonEmpty<N,V>",description:"A non-empty type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using SortedMaps See the Graph documentation and the ArrowValuedGraphSorted API documentation",source:"@site/api/rimbu_graph/ArrowValuedGraphSorted/NonEmpty.interface.mdx",sourceDirName:"rimbu_graph/ArrowValuedGraphSorted",slug:"/rimbu/graph/ArrowValuedGraphSorted/NonEmpty/interface",permalink:"/api/rimbu/graph/ArrowValuedGraphSorted/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/graph/ArrowValuedGraphSorted/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraphSorted.Context<UN>",permalink:"/api/rimbu/graph/ArrowValuedGraphSorted/Context/interface"},next:{title:"ArrowValuedGraphSorted.Types",permalink:"/api/rimbu/graph/ArrowValuedGraphSorted/Types/interface"}},b={},g=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],N={toc:g},v="wrapper";function k(e){var r=e,{components:t}=r,n=s(r,["components"]);return(0,a.kt)(v,c(m(m({},N),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-arrowvaluedgraphsortednonemptynv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface ArrowValuedGraphSorted.NonEmpty<N,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using SortedMaps See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/ArrowValuedGraphSorted/interface"}),"ArrowValuedGraphSorted API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/ArrowValuedGraphSorted/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted<N,V>"))),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the node type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the connection value type")))),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"Returns a non-empty Stream containing all entries of this collection as tuples of key and value.")),(0,a.kt)("h4",m({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): Stream.NonEmpty<ValuedGraphElement<N, V>>;"))),(0,a.kt)("admonition",m({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1, 2, 'a'], [2, 3, 'b']).stream().toArray()\n// => [[1, 2, 'a'], [2, 3, 'b']]\n")))))}k.isMDXComponent=!0}}]);