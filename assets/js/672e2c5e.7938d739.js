"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[16996],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>b});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,m=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=o(a),d=i,b=c["".concat(m,".").concat(d)]||c[d]||s[d]||n;return a?r.createElement(b,l(l({ref:e},p),{},{components:a})):r.createElement(b,l({ref:e},p))}));function b(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=d;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[c]="string"==typeof t?t:i,l[1]=u;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91837:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>f,default:()=>M,frontMatter:()=>b,metadata:()=>h,toc:()=>S});var r=a(3905),i=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))o.call(e,a)&&p(t,a,e[a]);return t},s=(t,e)=>n(t,l(e)),d=(t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&o.call(t,r)&&(a[r]=t[r]);return a};const b={title:"@rimbu/multiset",slug:"/rimbu/multiset"},f="package @rimbu/multiset",h={unversionedId:"rimbu_multiset/index",id:"rimbu_multiset/index",title:"@rimbu/multiset",description:"The @rimbu/multiset package provides implementations for various MultiSets.",source:"@site/api/rimbu_multiset/index.mdx",sourceDirName:"rimbu_multiset",slug:"/rimbu/multiset",permalink:"/api/rimbu/multiset",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/multiset",slug:"/rimbu/multiset"},sidebar:"defaultSidebar",previous:{title:"VariantMultiMapBase<K,V,Tp>",permalink:"/api/rimbu/multimap/custom/VariantMultiMapBase/interface"},next:{title:"HashMultiSet (namespace)",permalink:"/api/rimbu/multiset/HashMultiSet/namespace"}},k={},S=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2}],N={toc:S},y="wrapper";function M(t){var e=t,{components:a}=e,i=d(e,["components"]);return(0,r.kt)(y,s(c(c({},N),i),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"package-rimbumultiset"}),(0,r.kt)("inlineCode",{parentName:"h1"},"package @rimbu/multiset")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/multiset")," package provides implementations for various MultiSets."),(0,r.kt)("p",null," See the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/collections/multiset"}),"Rimbu docs MultiSet page")," for more information."),(0,r.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/HashMultiSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiSet<T>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/HashMultiSet/interface"}),"HashMultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/MultiSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSet<T>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/MultiSet/interface"}),"MultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/SortedMultiSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiSet<T>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/SortedMultiSet/interface"}),"SortedMultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/VariantMultiSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSet<T>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-variant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/VariantMultiSet/interface"}),"VariantMultiSet API documentation"))))),(0,r.kt)("h2",c({},{id:"namespaces"}),"Namespaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/HashMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiSet"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/HashMultiSet/interface"}),"HashMultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/MultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSet"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/MultiSet/interface"}),"MultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/SortedMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiSet"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/SortedMultiSet/interface"}),"SortedMultiSet API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multiset/VariantMultiSet/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSet"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A type-variant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multiset/VariantMultiSet/interface"}),"VariantMultiSet API documentation"))))))}M.isMDXComponent=!0}}]);