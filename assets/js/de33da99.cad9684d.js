"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[44010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),s=i,b=c["".concat(o,".").concat(s)]||c[s]||d[s]||n;return a?r.createElement(b,p(p({ref:t},m),{},{components:a})):r.createElement(b,p({ref:t},m))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,p[1]=l;for(var u=2;u<n;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},99078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>b,metadata:()=>M,toc:()=>h});var r=a(3905),i=Object.defineProperty,n=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&m(e,a,t[a]);return e},d=(e,t)=>n(e,p(t)),s=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const b={title:"BiMultiMap (namespace)",slug:"/rimbu/core/BiMultiMap/namespace"},f="namespace BiMultiMap",M={unversionedId:"rimbu_core/BiMultiMap/index",id:"rimbu_core/BiMultiMap/index",title:"BiMultiMap (namespace)",description:"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the BiMultiMap documentation and the BiMultiMap API documentation",source:"@site/api/rimbu_core/BiMultiMap/index.mdx",sourceDirName:"rimbu_core/BiMultiMap",slug:"/rimbu/core/BiMultiMap/namespace",permalink:"/api/rimbu/core/BiMultiMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMultiMap (namespace)",slug:"/rimbu/core/BiMultiMap/namespace"},sidebar:"defaultSidebar",previous:{title:"BiMap",permalink:"/api/rimbu/core/BiMap/var"},next:{title:"BiMultiMap.Builder<K,V>",permalink:"/api/rimbu/core/BiMultiMap/Builder/interface"}},y={},h=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:h},g="wrapper";function v(e){var t=e,{components:a}=t,i=s(t,["components"]);return(0,r.kt)(g,d(c(c({},k),i),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"namespace-bimultimap"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace BiMultiMap")),(0,r.kt)("p",null,"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/interface"}),"BiMultiMap API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/BiMultiMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap<K,V>"))),(0,r.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/BiMultiMap/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Builder<K,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,r.kt)("inlineCode",{parentName:"td"},"BiMultiMap")," builder used to efficiently create new immutable instances. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/Builder/interface"}),"BiMultiMap.Builder API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/BiMultiMap/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Context<UK,UV>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The BiMultiMap's Context instance that serves as a factory for all related immutable instances and builders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/BiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.NonEmpty<K,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/interface"}),"BiMultiMap API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/core/BiMultiMap/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Types"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}v.isMDXComponent=!0}}]);