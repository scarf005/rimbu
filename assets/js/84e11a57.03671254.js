"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[22435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>T,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"HashSet.Types",slug:"/rimbu/hashed/set/HashSet/Types/interface"},h="interface HashSet.Types",y={unversionedId:"rimbu_hashed/set/HashSet/Types.interface",id:"rimbu_hashed/set/HashSet/Types.interface",title:"HashSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_hashed/set/HashSet/Types.interface.mdx",sourceDirName:"rimbu_hashed/set/HashSet",slug:"/rimbu/hashed/set/HashSet/Types/interface",permalink:"/api/rimbu/hashed/set/HashSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashSet.Types",slug:"/rimbu/hashed/set/HashSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"HashSet.NonEmpty<T>",permalink:"/api/rimbu/hashed/set/HashSet/NonEmpty/interface"},next:{title:"HashSet<T>",permalink:"/api/rimbu/hashed/set/HashSet/interface"}},k={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4}],b={toc:v},O="wrapper";function T(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(O,c(u(u({},b),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-hashsettypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface HashSet.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase.Types"))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"_t"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_T")),(0,r.kt)("p",null,"The element type.")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,r.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Elem/interface#_T"}),"Elem._T"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface#builder"}),"Types.builder"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"context"}),(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface#context"}),"Types.context"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface#normal"}),"Types.normal"))))}T.isMDXComponent=!0}}]);