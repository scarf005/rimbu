"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[53817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,c=u["".concat(m,".").concat(s)]||u[s]||k[s]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>g,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&d(e,a,t[a]);return e},k=(e,t)=>i(e,l(t)),s=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const c={title:"SortedMap.NonEmpty<K,V>",slug:"/rimbu/sorted/SortedMap/NonEmpty/interface"},N="interface SortedMap.NonEmpty<K,V>",y={unversionedId:"rimbu_sorted/SortedMap/NonEmpty.interface",id:"rimbu_sorted/SortedMap/NonEmpty.interface",title:"SortedMap.NonEmpty<K,V>",description:"A non-empty type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the SortedMap API documentation",source:"@site/api/rimbu_sorted/SortedMap/NonEmpty.interface.mdx",sourceDirName:"rimbu_sorted/SortedMap",slug:"/rimbu/sorted/SortedMap/NonEmpty/interface",permalink:"/api/rimbu/sorted/SortedMap/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMap.NonEmpty<K,V>",slug:"/rimbu/sorted/SortedMap/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMap.Context<UK>",permalink:"/api/rimbu/sorted/SortedMap/Context/interface"},next:{title:"SortedMap.Types",permalink:"/api/rimbu/sorted/SortedMap/Types/interface"}},f={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>max</code>",id:"max",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>maxKey</code>",id:"maxkey",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>maxValue</code>",id:"maxvalue",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>min</code>",id:"min",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>minKey</code>",id:"minkey",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>minValue</code>",id:"minvalue",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>streamKeys</code>",id:"streamkeys",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>streamValues</code>",id:"streamvalues",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>take</code>",id:"take",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4}],b={toc:h},v="wrapper";function g(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(v,k(u(u({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-sortedmapnonemptykv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedMap.NonEmpty<K,V>")),(0,n.kt)("p",null,"A non-empty type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/sorted/map/SortedMap/interface"}),"SortedMap API documentation"),"  "),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"SortedMap")," keeps the inserted keys in sorted order according to the context's ",(0,n.kt)("inlineCode",{parentName:"li"},"comp")," instance."))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m1 = SortedMap.empty<number, string>()\nconst m2 = SortedMap.of([1, 'a'], [2, 'b'])\n"))),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"max"}),(0,n.kt)("inlineCode",{parentName:"h3"},"max")),(0,n.kt)("p",null,"Returns the entry with the maximum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max(): readonly [K, V];"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.max())\n// => ['d', 4]\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"maxkey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maxKey")),(0,n.kt)("p",null,"Returns the maximum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"maxKey(): K;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.maxKey())\n// => 'a'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"maxvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maxValue")),(0,n.kt)("p",null,"Returns the value associated with the maximum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"maxValue(): V;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.maxValue())\n// => 4\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"min"}),(0,n.kt)("inlineCode",{parentName:"h3"},"min")),(0,n.kt)("p",null,"Returns the entry with the minimum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"min(): readonly [K, V];"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]);\nconsole.log(m.min())\n// => ['a', 1]\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"minkey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minKey")),(0,n.kt)("p",null,"Returns the minimum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"minKey(): K;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]);\nconsole.log(m.minKey())\n// => 'a'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"minvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minValue")),(0,n.kt)("p",null,"Returns the value associated with the minimum key of the SortedMap.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"minValue(): V;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedMap.of(['b', 2], ['d', 4], ['a', 1], ['c', 3]).asNormal();\nconsole.log(m.minValue())\n// => 1\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"stream"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stream")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream(reversed?: boolean): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;"))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"reversed")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"streamkeys"}),(0,n.kt)("inlineCode",{parentName:"h3"},"streamKeys")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"streamKeys(reversed?: boolean): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<K>;"))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"reversed")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"streamvalues"}),(0,n.kt)("inlineCode",{parentName:"h3"},"streamValues")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"streamValues(reversed?: boolean): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<V>;"))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"reversed")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"take"}),(0,n.kt)("inlineCode",{parentName:"h3"},"take")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"take<N extends number>(amount: N): 0 extends N ? "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V> : "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"N")),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))))}g.isMDXComponent=!0}}]);