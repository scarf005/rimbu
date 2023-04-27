"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[62473],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(t),s=n,f=u["".concat(l,".").concat(s)]||u[s]||c[s]||o;return t?a.createElement(f,i(i({ref:r},m),{},{components:t})):a.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},30742:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>h,toc:()=>N});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&m(e,t,r[t]);if(p)for(var t of p(r))d.call(r,t)&&m(e,t,r[t]);return e},c=(e,r)=>o(e,i(r)),s=(e,r)=>{var t={};for(var a in e)l.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const f={title:"ArrowValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface"},y="interface ArrowValuedGraphSorted.NonEmpty<N,V>",h={unversionedId:"rimbu_core/ArrowValuedGraphSorted/NonEmpty.interface",id:"rimbu_core/ArrowValuedGraphSorted/NonEmpty.interface",title:"ArrowValuedGraphSorted.NonEmpty<N,V>",description:"A non-empty type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using SortedMaps See the Graph documentation and the ArrowValuedGraphSorted API documentation",source:"@site/api/rimbu_core/ArrowValuedGraphSorted/NonEmpty.interface.mdx",sourceDirName:"rimbu_core/ArrowValuedGraphSorted",slug:"/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraphSorted.NonEmpty<N,V>",slug:"/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraphSorted.Context<UN>",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/Context/interface"},next:{title:"ArrowValuedGraphSorted.Types",permalink:"/api/rimbu/core/ArrowValuedGraphSorted/Types/interface"}},b={},N=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],k={toc:N},v="wrapper";function w(e){var r=e,{components:t}=r,n=s(r,["components"]);return(0,a.kt)(v,c(u(u({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"interface-arrowvaluedgraphsortednonemptynv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface ArrowValuedGraphSorted.NonEmpty<N,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using SortedMaps See the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/ArrowValuedGraphSorted/interface"}),"ArrowValuedGraphSorted API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted<N,V>"))),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the node type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the connection value type")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"Returns a non-empty Stream containing all entries of this collection as tuples of key and value.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>;"))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1, 2, 'a'], [2, 3, 'b']).stream().toArray()\n// => [[1, 2, 'a'], [2, 3, 'b']]\n"))),(0,a.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}w.isMDXComponent=!0}}]);