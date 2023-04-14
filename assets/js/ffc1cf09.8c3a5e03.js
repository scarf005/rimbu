"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[46446],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26540:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=t(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&l(e,t,r[t]);return e},s=(e,r)=>a(e,o(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"first",slug:"/rimbu/common/AsyncReducer/first/var"},y="type first",b={unversionedId:"rimbu_common/AsyncReducer/first.var",id:"rimbu_common/AsyncReducer/first.var",title:"first",description:"Returns an AsyncReducer that remembers the first input value.",source:"@site/api/rimbu_common/AsyncReducer/first.var.mdx",sourceDirName:"rimbu_common/AsyncReducer",slug:"/rimbu/common/AsyncReducer/first/var",permalink:"/api/rimbu/common/AsyncReducer/first/var",draft:!1,tags:[],version:"current",frontMatter:{title:"first",slug:"/rimbu/common/AsyncReducer/first/var"},sidebar:"defaultSidebar",previous:{title:"count",permalink:"/api/rimbu/common/AsyncReducer/count/var"},next:{title:"firstWhere",permalink:"/api/rimbu/common/AsyncReducer/firstWhere/var"}},v={},O=[{value:"Definition",id:"definition",level:2}],k={toc:O},g="wrapper";function h(e){var r=e,{components:t}=r,i=f(r,["components"]);return(0,n.kt)(g,s(m(m({},k),i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"type-first"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type first")),(0,n.kt)("p",null,"Returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," that remembers the first input value."),(0,n.kt)("admonition",m({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"await AsyncStream.from(Stream.range{ amount: 10 })).reduce(AsyncReducer.first())\n// => 0\n"))),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"first: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T>(): "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T, O>(otherwise: AsyncOptLazy<O>): "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}")))}h.isMDXComponent=!0}}]);