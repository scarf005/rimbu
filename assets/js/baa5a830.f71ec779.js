"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[44229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||p;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>M,frontMatter:()=>h,metadata:()=>d,toc:()=>k});var r=a(3905),n=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&s(e,a,t[a]);return e},u=(e,t)=>p(e,i(t)),f=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const h={title:"HashMap<K,V>",slug:"/rimbu/core/HashMap/interface"},y="interface HashMap<K,V>",d={unversionedId:"rimbu_core/HashMap.interface",id:"rimbu_core/HashMap.interface",title:"HashMap<K,V>",description:"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys.",source:"@site/api/rimbu_core/HashMap.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/HashMap/interface",permalink:"/api/rimbu/core/HashMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMap<K,V>",slug:"/rimbu/core/HashMap/interface"},sidebar:"defaultSidebar",previous:{title:"HashMap.Types",permalink:"/api/rimbu/core/HashMap/Types/interface"},next:{title:"HashMap",permalink:"/api/rimbu/core/HashMap/var"}},b={},k=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:k},g="wrapper";function M(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(g,u(m(m({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"interface-hashmapkv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface HashMap<K,V>")),(0,r.kt)("p",null,"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMap")," uses the context's ",(0,r.kt)("inlineCode",{parentName:"li"},"hasher")," instance to hash keys for performance."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMap")," uses the context's ",(0,r.kt)("inlineCode",{parentName:"li"},"eq")," function to determine equivalence between keys.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/hashed/map/HashMap/interface"}),"HashMap API documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashMap/namespace"}),"HashMap")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty<K,V>"))),(0,r.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"the key type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))),(0,r.kt)("admonition",m({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const m1 = HashMap.empty<number, string>()\nconst m2 = HashMap.of([1, 'a'], [2, 'b'])\n"))))}M.isMDXComponent=!0}}]);