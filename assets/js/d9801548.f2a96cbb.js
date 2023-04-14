"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[10813],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),f=n,g=m["".concat(c,".").concat(f)]||m[f]||d[f]||p;return t?a.createElement(g,i(i({ref:r},u),{},{components:t})):a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>h,default:()=>E,frontMatter:()=>g,metadata:()=>s,toc:()=>y});var a=t(3905),n=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))l.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>p(e,i(r)),f=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};const g={title:"EdgeGraph<N>",slug:"/rimbu/graph/EdgeGraph/interface"},h="interface EdgeGraph<N>",s={unversionedId:"rimbu_graph/EdgeGraph.interface",id:"rimbu_graph/EdgeGraph.interface",title:"EdgeGraph<N>",description:"An type-invariant immutable edge (undirected) graph. See the Graph documentation and the EdgeGraph API documentation",source:"@site/api/rimbu_graph/EdgeGraph.interface.mdx",sourceDirName:"rimbu_graph",slug:"/rimbu/graph/EdgeGraph/interface",permalink:"/api/rimbu/graph/EdgeGraph/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraph<N>",slug:"/rimbu/graph/EdgeGraph/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraph.Types",permalink:"/api/rimbu/graph/EdgeGraph/Types/interface"},next:{title:"EdgeGraphHashed (namespace)",permalink:"/api/rimbu/graph/EdgeGraphHashed/namespace"}},b={},y=[{value:"Type parameters",id:"type-parameters",level:2}],O={toc:y},v="wrapper";function E(e){var r=e,{components:t}=r,n=f(r,["components"]);return(0,a.kt)(v,d(m(m({},O),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-edgegraphn"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraph<N>")),(0,a.kt)("p",null,"An type-invariant immutable edge (undirected) graph. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraph/interface"}),"EdgeGraph API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/namespace"}),"EdgeGraph")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty<N>"))),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the node type")))))}E.isMDXComponent=!0}}]);