"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[74083],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),s=a,y=d["".concat(l,".").concat(s)]||d[s]||m[s]||p;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var n=t(3905),a=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))c.call(r,t)&&u(e,t,r[t]);return e};const d={title:"Arr",slug:"/rimbu/deep/Match/Arr/type"},s="type Arr<T,C,P,R>",y={unversionedId:"rimbu_deep/Match/Arr.type",id:"rimbu_deep/Match/Arr.type",title:"Arr",description:"The type that determines allowed matchers for arrays/tuples.",source:"@site/api/rimbu_deep/Match/Arr.type.mdx",sourceDirName:"rimbu_deep/Match",slug:"/rimbu/deep/Match/Arr/type",permalink:"/api/rimbu/deep/Match/Arr/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Arr",slug:"/rimbu/deep/Match/Arr/type"},sidebar:"defaultSidebar",previous:{title:"Match (namespace)",permalink:"/api/rimbu/deep/Match/namespace"},next:{title:"ArrayTraversalType",permalink:"/api/rimbu/deep/Match/ArrayTraversalType/type"}},f={},b=[{value:"Definition",id:"definition",level:2}],h={toc:b};function k(e){var r,t=e,{components:a}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=m(m({},h),u),p(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"type-arrtcpr"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Arr<T,C,P,R>")),(0,n.kt)("p",null,"The type that determines allowed matchers for arrays/tuples."),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type Arr<T, C, P, R> = C "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/CompoundForArr/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.CompoundForArr")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, C, P, R> "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/TraversalForArr/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.TraversalForArr")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, C, R> "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," ("),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/TupIndices/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.TupIndices")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, C, R> & {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/CompoundType/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.CompoundType")),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/ArrayTraversalType/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.ArrayTraversalType")),(0,n.kt)("inlineCode",{parentName:"p"},"]?: never;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"});")))}k.isMDXComponent=!0}}]);