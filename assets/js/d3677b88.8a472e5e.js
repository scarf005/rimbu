"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[78232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,b=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>x,frontMatter:()=>b,metadata:()=>d,toc:()=>v});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,o(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const b={title:"MultiSet.Context<UT>",slug:"/rimbu/multiset/MultiSet/Context/interface"},y="interface MultiSet.Context<UT>",d={unversionedId:"rimbu_multiset/MultiSet/Context.interface",id:"rimbu_multiset/MultiSet/Context.interface",title:"MultiSet.Context<UT>",description:"A context instance for MultiSet implementations that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_multiset/MultiSet/Context.interface.mdx",sourceDirName:"rimbu_multiset/MultiSet",slug:"/rimbu/multiset/MultiSet/Context/interface",permalink:"/api/rimbu/multiset/MultiSet/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"MultiSet.Context<UT>",slug:"/rimbu/multiset/MultiSet/Context/interface"},sidebar:"defaultSidebar",previous:{title:"MultiSet.Builder<T>",permalink:"/api/rimbu/multiset/MultiSet/Builder/interface"},next:{title:"MultiSet.NonEmpty<T>",permalink:"/api/rimbu/multiset/MultiSet/NonEmpty/interface"}},O={},v=[{value:"Type parameters",id:"type-parameters",level:2}],g={toc:v},h="wrapper";function x(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(h,f(s(s({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"interface-multisetcontextut"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface MultiSet.Context<UT>")),(0,n.kt)("p",null,"A context instance for ",(0,n.kt)("inlineCode",{parentName:"p"},"MultiSet")," implementations that acts as a factory for every instance of this type of collection."),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"UT"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the upper value type bound for which the context can be used")))))}x.isMDXComponent=!0}}]);