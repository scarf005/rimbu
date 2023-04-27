"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[77483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(a),f=n,h=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:n,l[1]=u;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},14947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>h,metadata:()=>b,toc:()=>M});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>i(e,l(t)),f=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const h={title:"HashMultiMapHashValue.Builder<K,V>",slug:"/rimbu/core/HashMultiMapHashValue/Builder/interface"},d="interface HashMultiMapHashValue.Builder<K,V>",b={unversionedId:"rimbu_core/HashMultiMapHashValue/Builder.interface",id:"rimbu_core/HashMultiMapHashValue/Builder.interface",title:"HashMultiMapHashValue.Builder<K,V>",description:"A mutable HashMultiMapHashValue builder used to efficiently create new immutable instances. See the MultiMap documentation and the HashMultiMapHashValue.Builder API documentation",source:"@site/api/rimbu_core/HashMultiMapHashValue/Builder.interface.mdx",sourceDirName:"rimbu_core/HashMultiMapHashValue",slug:"/rimbu/core/HashMultiMapHashValue/Builder/interface",permalink:"/api/rimbu/core/HashMultiMapHashValue/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMultiMapHashValue.Builder<K,V>",slug:"/rimbu/core/HashMultiMapHashValue/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"HashMultiMapHashValue (namespace)",permalink:"/api/rimbu/core/HashMultiMapHashValue/namespace"},next:{title:"HashMultiMapHashValue.Context<UK,UV>",permalink:"/api/rimbu/core/HashMultiMapHashValue/Context/interface"}},y={},M=[{value:"Type parameters",id:"type-parameters",level:2}],H={toc:M},O="wrapper";function v(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(O,m(s(s({},H),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"interface-hashmultimaphashvaluebuilderkv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface HashMultiMapHashValue.Builder<K,V>")),(0,r.kt)("p",null,"A mutable ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMultiMapHashValue")," builder used to efficiently create new immutable instances. See the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapHashValue/Builder/interface"}),"HashMultiMapHashValue.Builder API documentation")),(0,r.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"the key type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))))}v.isMDXComponent=!0}}]);