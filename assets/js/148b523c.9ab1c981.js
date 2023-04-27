"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[40901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=a,y=s["".concat(l,".").concat(b)]||s[b]||u[b]||c;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},15109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>f,default:()=>S,frontMatter:()=>y,metadata:()=>d,toc:()=>v});var n=r(3905),a=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>c(e,o(t)),b=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={title:"AsyncStreamable (namespace)",slug:"/rimbu/core/AsyncStreamable/namespace"},f="namespace AsyncStreamable",d={unversionedId:"rimbu_core/AsyncStreamable/index",id:"rimbu_core/AsyncStreamable/index",title:"AsyncStreamable (namespace)",description:"undocumented",source:"@site/api/rimbu_core/AsyncStreamable/index.mdx",sourceDirName:"rimbu_core/AsyncStreamable",slug:"/rimbu/core/AsyncStreamable/namespace",permalink:"/api/rimbu/core/AsyncStreamable/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncStreamable (namespace)",slug:"/rimbu/core/AsyncStreamable/namespace"},sidebar:"defaultSidebar",previous:{title:"AsyncStreamSource",permalink:"/api/rimbu/core/AsyncStreamSource/type"},next:{title:"AsyncStreamable.NonEmpty<T>",permalink:"/api/rimbu/core/AsyncStreamable/NonEmpty/interface"}},O={},v=[{value:"Interfaces",id:"interfaces",level:2}],g={toc:v},k="wrapper";function S(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(k,u(s(s({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"namespace-asyncstreamable"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace AsyncStreamable")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/AsyncStreamable/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStreamable<T>"))),(0,n.kt)("h2",s({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/core/AsyncStreamable/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStreamable.NonEmpty<T>"))),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")))))}S.isMDXComponent=!0}}]);