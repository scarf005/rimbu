"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[28115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,b=u["".concat(p,".").concat(s)]||u[s]||f[s]||i;return r?a.createElement(b,o(o({ref:t},m),{},{components:r})):a.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&m(e,r,t[r]);return e},f=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const b={title:"Streamable<T>",slug:"/rimbu/core/Streamable/interface"},d="interface Streamable<T>",y={unversionedId:"rimbu_core/Streamable.interface",id:"rimbu_core/Streamable.interface",title:"Streamable<T>",description:"An object that can create a Stream of elements of type T.",source:"@site/api/rimbu_core/Streamable.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/Streamable/interface",permalink:"/api/rimbu/core/Streamable/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Streamable<T>",slug:"/rimbu/core/Streamable/interface"},sidebar:"defaultSidebar",previous:{title:"Streamable.NonEmpty<T>",permalink:"/api/rimbu/core/Streamable/NonEmpty/interface"},next:{title:"Table (namespace)",permalink:"/api/rimbu/core/Table/namespace"}},k={},v=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],O={toc:v},h="wrapper";function g(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(h,f(u(u({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"interface-streamablet"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface Streamable<T>")),(0,a.kt)("p",null,"An object that can create a Stream of elements of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Streamable/namespace"}),"Streamable")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream<T>"))),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream")," containing the elements in this collection.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))))}g.isMDXComponent=!0}}]);