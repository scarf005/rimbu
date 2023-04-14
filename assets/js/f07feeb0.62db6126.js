"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[37410],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(t),s=a,m=f["".concat(l,".").concat(s)]||f[s]||y[s]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73243:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&u(e,t,r[t]);return e},y=(e,r)=>i(e,o(r)),s=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={title:"Arr",slug:"/rimbu/deep/Path/Internal/Arr/type"},d="type Arr<T>",b={unversionedId:"rimbu_deep/Path/Internal/Arr.type",id:"rimbu_deep/Path/Internal/Arr.type",title:"Arr",description:"Determines the allowed paths for an array.",source:"@site/api/rimbu_deep/Path/Internal/Arr.type.mdx",sourceDirName:"rimbu_deep/Path/Internal",slug:"/rimbu/deep/Path/Internal/Arr/type",permalink:"/api/rimbu/deep/Path/Internal/Arr/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Arr",slug:"/rimbu/deep/Path/Internal/Arr/type"},sidebar:"defaultSidebar",previous:{title:"AppendIfNotEmpty",permalink:"/api/rimbu/deep/Path/Internal/AppendIfNotEmpty/type"},next:{title:"Generic",permalink:"/api/rimbu/deep/Path/Internal/Generic/type"}},O={},v=[{value:"Definition",id:"definition",level:2}],h={toc:v},P="wrapper";function g(e){var r=e,{components:t}=r,a=s(r,["components"]);return(0,n.kt)(P,y(f(f({},h),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"type-arrt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Arr<T>")),(0,n.kt)("p",null,"Determines the allowed paths for an array."),(0,n.kt)("h2",f({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type Arr<T extends readonly any[]> = ````[${number}]${``["),"Path.Internal.Generic",(0,n.kt)("inlineCode",{parentName:"p"},"](/api/rimbu/deep/Path/Internal/Generic/type)``<T[number], false, true>}````;")))}g.isMDXComponent=!0}}]);