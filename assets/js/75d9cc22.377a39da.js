"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[56226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,b=s["".concat(m,".").concat(f)]||s[f]||u[f]||i;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const b={title:"Streamable<T>",slug:"/rimbu/stream/Streamable/interface"},d="interface Streamable<T>",y={unversionedId:"rimbu_stream/Streamable.interface",id:"rimbu_stream/Streamable.interface",title:"Streamable<T>",description:"An object that can create a Stream of elements of type T.",source:"@site/api/rimbu_stream/Streamable.interface.mdx",sourceDirName:"rimbu_stream",slug:"/rimbu/stream/Streamable/interface",permalink:"/api/rimbu/stream/Streamable/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Streamable<T>",slug:"/rimbu/stream/Streamable/interface"},sidebar:"defaultSidebar",previous:{title:"Streamable.NonEmpty<T>",permalink:"/api/rimbu/stream/Streamable/NonEmpty/interface"},next:{title:"Transformer_2 (namespace)",permalink:"/api/rimbu/stream/Transformer_2/namespace"}},k={},v=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],O={toc:v},h="wrapper";function g(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(h,u(s(s({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"interface-streamablet"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface Streamable<T>")),(0,a.kt)("p",null,"An object that can create a Stream of elements of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Streamable/namespace"}),"Streamable")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream<T>"))),(0,a.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,a.kt)("h2",s({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream")," containing the elements in this collection.")),(0,a.kt)("h4",s({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))))}g.isMDXComponent=!0}}]);