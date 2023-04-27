"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[46155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=i,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>a(e,o(t)),s=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"OrderedMap.Types",slug:"/rimbu/core/OrderedMap/Types/interface"},k="interface OrderedMap.Types",y={unversionedId:"rimbu_core/OrderedMap/Types.interface",id:"rimbu_core/OrderedMap/Types.interface",title:"OrderedMap.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/OrderedMap/Types.interface.mdx",sourceDirName:"rimbu_core/OrderedMap",slug:"/rimbu/core/OrderedMap/Types/interface",permalink:"/api/rimbu/core/OrderedMap/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedMap.Types",slug:"/rimbu/core/OrderedMap/Types/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedMap.NonEmpty<K,V>",permalink:"/api/rimbu/core/OrderedMap/NonEmpty/interface"},next:{title:"OrderedMap<K,V>",permalink:"/api/rimbu/core/OrderedMap/interface"}},h={},b=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>sourceContext</code>",id:"sourcecontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>sourceMap</code>",id:"sourcemap",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>sourceMapNonEmpty</code>",id:"sourcemapnonempty",level:3},{value:"Definition",id:"definition-6",level:4}],v={toc:b},O="wrapper";function N(e){var t=e,{components:n}=t,i=s(t,["components"]);return(0,r.kt)(O,m(u(u({},v),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-orderedmaptypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface OrderedMap.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedMap/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMap.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"context"}),(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedMap/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMap.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMap.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/OrderedMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMap")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"sourcecontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceContext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceContext: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/RMap/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"sourcemap"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceMap")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceMap: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/RMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RMap")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"sourcemapnonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceMapNonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceMapNonEmpty: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/RMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))))}N.isMDXComponent=!0}}]);