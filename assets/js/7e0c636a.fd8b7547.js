"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[26936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>a(e,o(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"VariantMultiSet.Types",slug:"/rimbu/core/VariantMultiSet/Types/interface"},y="interface VariantMultiSet.Types",b={unversionedId:"rimbu_core/VariantMultiSet/Types.interface",id:"rimbu_core/VariantMultiSet/Types.interface",title:"VariantMultiSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/VariantMultiSet/Types.interface.mdx",sourceDirName:"rimbu_core/VariantMultiSet",slug:"/rimbu/core/VariantMultiSet/Types/interface",permalink:"/api/rimbu/core/VariantMultiSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMultiSet.Types",slug:"/rimbu/core/VariantMultiSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"VariantMultiSet.NonEmpty<T>",permalink:"/api/rimbu/core/VariantMultiSet/NonEmpty/interface"},next:{title:"VariantMultiSet<T>",permalink:"/api/rimbu/core/VariantMultiSet/interface"}},v={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-1",level:4}],O={toc:k},h="wrapper";function g(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(h,s(f(f({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"interface-variantmultisettypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface VariantMultiSet.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("h2",f({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",f({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",f({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",f({parentName:"p"},{href:"/api/rimbu/core/VariantMultiSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMultiSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",f({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",f({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",f({parentName:"p"},{href:"/api/rimbu/core/VariantMultiSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMultiSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}g.isMDXComponent=!0}}]);