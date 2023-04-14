"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[67024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,f=m["".concat(c,".").concat(y)]||m[y]||s[y]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>d,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>i(e,a(t)),y=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"AsyncCollectFun",slug:"/rimbu/common/AsyncCollectFun/type"},b="type AsyncCollectFun<T,R>",d={unversionedId:"rimbu_common/AsyncCollectFun.type",id:"rimbu_common/AsyncCollectFun.type",title:"AsyncCollectFun",description:"A potentially asynchronous function used in collect methods to collect values from a collection. This is basically a single-pass map and filter.",source:"@site/api/rimbu_common/AsyncCollectFun.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/AsyncCollectFun/type",permalink:"/api/rimbu/common/AsyncCollectFun/type",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncCollectFun",slug:"/rimbu/common/AsyncCollectFun/type"},sidebar:"defaultSidebar",previous:{title:"ArrayNonEmpty",permalink:"/api/rimbu/common/ArrayNonEmpty/type"},next:{title:"AsyncOptLazy (namespace)",permalink:"/api/rimbu/common/AsyncOptLazy/namespace"}},O={},v=[{value:"Definition",id:"definition",level:2}],k={toc:v},C="wrapper";function g(e){var t=e,{components:n}=t,o=y(t,["components"]);return(0,r.kt)(C,s(m(m({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"type-asynccollectfuntr"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type AsyncCollectFun<T,R>")),(0,r.kt)("p",null,"A potentially asynchronous function used in ",(0,r.kt)("inlineCode",{parentName:"p"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter."),(0,r.kt)("h2",m({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export type AsyncCollectFun<T, R> = (value: T, index: number, skip: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},", halt: () => void) => "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,r.kt)("inlineCode",{parentName:"p"},"<R "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},">;")))}g.isMDXComponent=!0}}]);