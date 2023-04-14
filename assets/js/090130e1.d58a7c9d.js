"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[50073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>C,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>a(e,l(t)),f=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"CollectFun (namespace)",slug:"/rimbu/common/CollectFun/namespace"},b="namespace CollectFun",y={unversionedId:"rimbu_common/CollectFun/index",id:"rimbu_common/CollectFun/index",title:"CollectFun (namespace)",description:"A function used in collect methods to collect values from a collection. This is basically a single-pass map and filter.",source:"@site/api/rimbu_common/CollectFun/index.mdx",sourceDirName:"rimbu_common/CollectFun",slug:"/rimbu/common/CollectFun/namespace",permalink:"/api/rimbu/common/CollectFun/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"CollectFun (namespace)",slug:"/rimbu/common/CollectFun/namespace"},sidebar:"defaultSidebar",previous:{title:"AsyncReducer",permalink:"/api/rimbu/common/AsyncReducer/type"},next:{title:"Skip",permalink:"/api/rimbu/common/CollectFun/Skip/type"}},O={},v=[{value:"Constants",id:"constants",level:2}],g={toc:v},k="wrapper";function C(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,s(m(m({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"namespace-collectfun"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace CollectFun")),(0,r.kt)("p",null,"A function used in ",(0,r.kt)("inlineCode",{parentName:"p"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion type:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun<T,R>"))),(0,r.kt)("h2",m({},{id:"constants"}),"Constants"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Skip"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Indicates, when returned from a collect function, to skip the value.")))))}C.isMDXComponent=!0}}]);