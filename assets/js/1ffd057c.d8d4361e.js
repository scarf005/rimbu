"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[68935],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),d=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||s[h]||o;return a?t.createElement(m,i(i({ref:r},u),{},{components:a})):t.createElement(m,i({ref:r},u))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},62554:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>y,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>w});var t=a(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,a)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,c=(e,r)=>{for(var a in r||(r={}))l.call(r,a)&&u(e,a,r[a]);if(p)for(var a of p(r))d.call(r,a)&&u(e,a,r[a]);return e},s=(e,r)=>o(e,i(r)),h=(e,r)=>{var a={};for(var t in e)l.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&p)for(var t of p(e))r.indexOf(t)<0&&d.call(e,t)&&(a[t]=e[t]);return a};const m={title:"ArrowValuedGraphHashed (namespace)",slug:"/rimbu/core/ArrowValuedGraphHashed/namespace"},f="namespace ArrowValuedGraphHashed",b={unversionedId:"rimbu_core/ArrowValuedGraphHashed/index",id:"rimbu_core/ArrowValuedGraphHashed/index",title:"ArrowValuedGraphHashed (namespace)",description:"An type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using HashMaps See the Graph documentation and the ArrowValuedGraphHashed API documentation",source:"@site/api/rimbu_core/ArrowValuedGraphHashed/index.mdx",sourceDirName:"rimbu_core/ArrowValuedGraphHashed",slug:"/rimbu/core/ArrowValuedGraphHashed/namespace",permalink:"/api/rimbu/core/ArrowValuedGraphHashed/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraphHashed (namespace)",slug:"/rimbu/core/ArrowValuedGraphHashed/namespace"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraph",permalink:"/api/rimbu/core/ArrowValuedGraph/var"},next:{title:"ArrowValuedGraphHashed.Builder<N,V>",permalink:"/api/rimbu/core/ArrowValuedGraphHashed/Builder/interface"}},y={},w=[{value:"Interfaces",id:"interfaces",level:2}],g={toc:w},k="wrapper";function N(e){var r=e,{components:a}=r,n=h(r,["components"]);return(0,t.kt)(k,s(c(c({},g),n),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",c({},{id:"namespace-arrowvaluedgraphhashed"}),(0,t.kt)("inlineCode",{parentName:"h1"},"namespace ArrowValuedGraphHashed")),(0,t.kt)("p",null,"An type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using HashMaps See the ",(0,t.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,t.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/ArrowValuedGraphHashed/interface"}),"ArrowValuedGraphHashed API documentation")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,t.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed<N,V>"))),(0,t.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,t.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",c({parentName:"tr"},{align:null}),(0,t.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.Builder<N,V>"))),(0,t.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,t.kt)("inlineCode",{parentName:"td"},"ArrowValuedGraphHashed")," builder used to efficiently create new immutable instances. See the ",(0,t.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,t.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/ArrowValuedGraphHashed/Builder/interface"}),"ArrowValuedGraphHashed.BuilderAPI documentation"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",c({parentName:"tr"},{align:null}),(0,t.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.Context<UN>"))),(0,t.kt)("td",c({parentName:"tr"},{align:null}),"The ArrowValuedGraphHashed's Context instance that serves as a factory for all related immutable instances and builders.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",c({parentName:"tr"},{align:null}),(0,t.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.NonEmpty<N,V>"))),(0,t.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable valued arrow (directed) graph. The nodes are internally maintained using HashMaps See the ",(0,t.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,t.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/ArrowValuedGraphHashed/interface"}),"ArrowValuedGraphHashed API documentation"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",c({parentName:"tr"},{align:null}),(0,t.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/Types/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.Types"))),(0,t.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}N.isMDXComponent=!0}}]);