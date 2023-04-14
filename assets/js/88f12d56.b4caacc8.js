"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[50080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||p;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<p;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},38520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>p(e,i(t)),c=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"For",slug:"/rimbu/deep/Deep/Path/Result/For/type"},y="type For<T,Tokens,Maybe>",b={unversionedId:"rimbu_deep/Deep/Path/Result/For.type",id:"rimbu_deep/Deep/Path/Result/For.type",title:"For",description:"Determines the result type for an array of tokens representing subpaths in type T.",source:"@site/api/rimbu_deep/Deep/Path/Result/For.type.mdx",sourceDirName:"rimbu_deep/Deep/Path/Result",slug:"/rimbu/deep/Deep/Path/Result/For/type",permalink:"/api/rimbu/deep/Deep/Path/Result/For/type",draft:!1,tags:[],version:"current",frontMatter:{title:"For",slug:"/rimbu/deep/Deep/Path/Result/For/type"},sidebar:"defaultSidebar",previous:{title:"Result (namespace)",permalink:"/api/rimbu/deep/Deep/Path/Result/namespace"},next:{title:"Part",permalink:"/api/rimbu/deep/Deep/Path/Result/Part/type"}},h={},k=[{value:"Definition",id:"definition",level:2}],P={toc:k},O="wrapper";function N(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(O,d(m(m({},P),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"type-forttokensmaybe"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type For<T,Tokens,Maybe>")),(0,n.kt)("p",null,"Determines the result type for an array of tokens representing subpaths in type ",(0,n.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type For<T, Tokens, Maybe extends boolean = "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/IsOptional/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Internal.IsOptional")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>> = Tokens extends [] ? "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/MaybeValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Internal.MaybeValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, Maybe> : "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/IsOptional/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Internal.IsOptional")),(0,n.kt)("inlineCode",{parentName:"p"},"<T> extends true ? "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/For/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.For")),(0,n.kt)("inlineCode",{parentName:"p"},"<Exclude<T, undefined "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"},"null>, Tokens, Maybe> : Tokens extends ['?.', infer Key, ...infer Rest] ?"),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/For/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.For")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Part/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.Part")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, Key, Maybe>, Rest, true> : Tokens extends ['.', infer Key, ...infer Rest] ? "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/For/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.For")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Part/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.Part")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, Key, false>, Rest, Maybe> : Tokens extends [infer Key, ...infer Rest] ? "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/For/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.For")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Part/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result.Part")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, Key, false>, Rest, Maybe> : never;")))}N.isMDXComponent=!0}}]);