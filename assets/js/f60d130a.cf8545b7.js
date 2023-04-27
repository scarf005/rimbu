"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[12758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,y=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return a?r.createElement(y,l(l({ref:t},m),{},{components:a})):r.createElement(y,l({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>h,toc:()=>b});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>i(e,l(t)),d=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const y={title:"HashMultiMapSortedValue.NonEmpty<K,V>",slug:"/rimbu/multimap/HashMultiMapSortedValue/NonEmpty/interface"},f="interface HashMultiMapSortedValue.NonEmpty<K,V>",h={unversionedId:"rimbu_multimap/HashMultiMapSortedValue/NonEmpty.interface",id:"rimbu_multimap/HashMultiMapSortedValue/NonEmpty.interface",title:"HashMultiMapSortedValue.NonEmpty<K,V>",description:"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the MultiMap documentation and the HashMultiMapSortedValue API documentation",source:"@site/api/rimbu_multimap/HashMultiMapSortedValue/NonEmpty.interface.mdx",sourceDirName:"rimbu_multimap/HashMultiMapSortedValue",slug:"/rimbu/multimap/HashMultiMapSortedValue/NonEmpty/interface",permalink:"/api/rimbu/multimap/HashMultiMapSortedValue/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMultiMapSortedValue.NonEmpty<K,V>",slug:"/rimbu/multimap/HashMultiMapSortedValue/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"HashMultiMapSortedValue.Context<UK,UV>",permalink:"/api/rimbu/multimap/HashMultiMapSortedValue/Context/interface"},next:{title:"HashMultiMapSortedValue.Types",permalink:"/api/rimbu/multimap/HashMultiMapSortedValue/Types/interface"}},M={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],k={toc:b},v="wrapper";function N(e){var t=e,{components:a}=t,n=d(t,["components"]);return(0,r.kt)(v,c(s(s({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"interface-hashmultimapsortedvaluenonemptykv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface HashMultiMapSortedValue.NonEmpty<K,V>")),(0,r.kt)("p",null,"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/HashMultiMapSortedValue/interface"}),"HashMultiMapSortedValue API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapSortedValue/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiMapSortedValue<K,V>"))),(0,r.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"the key type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))),(0,r.kt)("admonition",s({},{title:"note",type:"note"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMultiMapSortedValue")," uses the contexts' ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMap")," ",(0,r.kt)("inlineCode",{parentName:"li"},"keyContext")," to hash the keys - The ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMultiMapSortedValue")," uses the contexts' ",(0,r.kt)("inlineCode",{parentName:"li"},"SortedSet")," ",(0,r.kt)("inlineCode",{parentName:"li"},"valueContext")," to collect the values for each key."))),(0,r.kt)("admonition",s({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m1 = HashMultiMapSortedValue.empty<number, string>()\nconst m2 = HashMultiMapSortedValue.of([1, 'a'], [1, 'b'], [2, 'a'])\n"))),(0,r.kt)("h2",s({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"stream"}),(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stream(): Stream.NonEmpty<[K, V]>;")))))}N.isMDXComponent=!0}}]);