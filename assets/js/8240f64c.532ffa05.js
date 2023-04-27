"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[33982],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),o=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(t),h=n,m=c["".concat(l,".").concat(h)]||c[h]||s[h]||d;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var d=t.length,i=new Array(d);i[0]=h;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<d;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88014:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var r=t(3905),n=Object.defineProperty,d=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&u(e,t,a[t]);if(p)for(var t of p(a))o.call(a,t)&&u(e,t,a[t]);return e},s=(e,a)=>d(e,i(a)),h=(e,a)=>{var t={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))a.indexOf(r)<0&&o.call(e,r)&&(t[r]=e[r]);return t};const m={title:"EdgeValuedGraphHashed (namespace)",slug:"/rimbu/core/EdgeValuedGraphHashed/namespace"},g="namespace EdgeValuedGraphHashed",f={unversionedId:"rimbu_core/EdgeValuedGraphHashed/index",id:"rimbu_core/EdgeValuedGraphHashed/index",title:"EdgeValuedGraphHashed (namespace)",description:"An type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using HashMaps See the Graph documentation and the EdgeValuedGraphHashed API documentation",source:"@site/api/rimbu_core/EdgeValuedGraphHashed/index.mdx",sourceDirName:"rimbu_core/EdgeValuedGraphHashed",slug:"/rimbu/core/EdgeValuedGraphHashed/namespace",permalink:"/api/rimbu/core/EdgeValuedGraphHashed/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeValuedGraphHashed (namespace)",slug:"/rimbu/core/EdgeValuedGraphHashed/namespace"},sidebar:"defaultSidebar",previous:{title:"EdgeValuedGraph",permalink:"/api/rimbu/core/EdgeValuedGraph/var"},next:{title:"EdgeValuedGraphHashed.Builder<N,V>",permalink:"/api/rimbu/core/EdgeValuedGraphHashed/Builder/interface"}},b={},y=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:y},E="wrapper";function N(e){var a=e,{components:t}=a,n=h(a,["components"]);return(0,r.kt)(E,s(c(c({},k),n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"namespace-edgevaluedgraphhashed"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace EdgeValuedGraphHashed")),(0,r.kt)("p",null,"An type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using HashMaps See the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraphHashed/interface"}),"EdgeValuedGraphHashed API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed<N,V>"))),(0,r.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.Builder<N,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,r.kt)("inlineCode",{parentName:"td"},"EdgeValuedGraphHashed")," builder used to efficiently create new immutable instances. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraphHashed/Builder/interface"}),"EdgeValuedGraphHashed.Builder API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.Context<UN>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The EdgeValuedGraphHashed's Context instance that serves as a factory for all related immutable instances and builders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.NonEmpty<N,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable valued edge (undirected) graph. The nodes are internally maintained using HashMaps See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeValuedGraphHashed/interface"}),"EdgeValuedGraphHashed API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.Types"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}N.isMDXComponent=!0}}]);