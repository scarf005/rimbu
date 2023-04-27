"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[28579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(a),u=n,h=c["".concat(d,".").concat(u)]||c[u]||s[u]||i;return a?r.createElement(h,p(p({ref:t},m),{},{components:a})):r.createElement(h,p({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>y});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&m(e,a,t[a]);return e},s=(e,t)=>i(e,p(t)),u=(e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};const h={title:"OrderedHashMap (namespace)",slug:"/rimbu/ordered/OrderedHashMap/namespace"},k="namespace OrderedHashMap",f={unversionedId:"rimbu_ordered/OrderedHashMap/index",id:"rimbu_ordered/OrderedHashMap/index",title:"OrderedHashMap (namespace)",description:"A type-invariant immutable Ordered HashMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the OrderedHashMap API documentation",source:"@site/api/rimbu_ordered/OrderedHashMap/index.mdx",sourceDirName:"rimbu_ordered/OrderedHashMap",slug:"/rimbu/ordered/OrderedHashMap/namespace",permalink:"/api/rimbu/ordered/OrderedHashMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashMap (namespace)",slug:"/rimbu/ordered/OrderedHashMap/namespace"},sidebar:"defaultSidebar",previous:{title:"@rimbu/ordered",permalink:"/api/rimbu/ordered"},next:{title:"OrderedHashMap.Builder<K,V>",permalink:"/api/rimbu/ordered/OrderedHashMap/Builder/interface"}},b={},y=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>defaultContext</code>",id:"defaultcontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4}],N={toc:y},O="wrapper";function g(e){var t=e,{components:a}=t,n=u(t,["components"]);return(0,r.kt)(O,s(c(c({},N),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"namespace-orderedhashmap"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace OrderedHashMap")),(0,r.kt)("p",null,"A type-invariant immutable Ordered HashMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedHashMap/interface"}),"OrderedHashMap API documentation"),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap<K,V>"))),(0,r.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/OrderedHashMap/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap.Builder<K,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderedHashMap")," builder used to efficiently create new immutable instances. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedHashMap/Builder/interface"}),"OrderedHashMap.Builder API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/OrderedHashMap/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap.Context<UK>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A context instance for an ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderedHashMap")," that acts as a factory for every instance of this type of collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/OrderedHashMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap.NonEmpty<K,V>"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable Ordered HashMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedHashMap/interface"}),"OrderedHashMap API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/OrderedHashMap/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap.Types"))),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,r.kt)("h2",c({},{id:"static-methods"}),"Static Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"createcontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,r.kt)("p",null,"Returns a new OrderedHashMap context instance based on the given ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createContext<UK>(options?: {"),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"listContext?: List.Context;"),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"mapContext?: HashMap.Context<UK>;"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"}): OrderedHashMap.Context<UK>;"))),(0,r.kt)("h4",c({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"UK"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")))),(0,r.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{"),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"listContext?: List.Context;"),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"mapContext?: HashMap.Context<UK>;"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"}")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"(optional) an object containing the following properties:",(0,r.kt)("br",null)," - listContext - (optional) the list context to use for key ordering",(0,r.kt)("br",null)," - mapContext - (optional) the map context to use for key value mapping"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"defaultcontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"defaultContext")),(0,r.kt)("p",null,"Returns the default context for OrderedHashMaps.")),(0,r.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defaultContext<UK>(): OrderedHashMap.Context<UK>;"))),(0,r.kt)("h4",c({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"UK"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances"))))))}g.isMDXComponent=!0}}]);