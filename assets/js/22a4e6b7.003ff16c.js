"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[40895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=i,y=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,o(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={title:"WithResult",slug:"/rimbu/deep/Match/WithResult/type"},m="type WithResult<T,P,R,S>",b={unversionedId:"rimbu_deep/Match/WithResult.type",id:"rimbu_deep/Match/WithResult.type",title:"WithResult",description:"A type that either directly results in result type S or is a function taking the value, parent, and root values, and returns a value of type S.",source:"@site/api/rimbu_deep/Match/WithResult.type.mdx",sourceDirName:"rimbu_deep/Match",slug:"/rimbu/deep/Match/WithResult/type",permalink:"/api/rimbu/deep/Match/WithResult/type",draft:!1,tags:[],version:"current",frontMatter:{title:"WithResult",slug:"/rimbu/deep/Match/WithResult/type"},sidebar:"defaultSidebar",previous:{title:"TupIndices",permalink:"/api/rimbu/deep/Match/TupIndices/type"},next:{title:"Match",permalink:"/api/rimbu/deep/Match/type"}},h={},v=[{value:"Definition",id:"definition",level:2}],O={toc:v},g="wrapper";function k(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(g,f(s(s({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"type-withresulttprs"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type WithResult<T,P,R,S>")),(0,n.kt)("p",null,"A type that either directly results in result type ",(0,n.kt)("inlineCode",{parentName:"p"},"S")," or is a function taking the value, parent, and root values, and returns a value of type ",(0,n.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type WithResult<T, P, R, S> = S "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Match/Func/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.Func")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, P, R, S>;")))}k.isMDXComponent=!0}}]);