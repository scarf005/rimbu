"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[25966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(r),s=a,f=c["".concat(l,".").concat(s)]||c[s]||u[s]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},20639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>S,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),s=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"OrderedSet.NonEmpty<T>",slug:"/rimbu/core/OrderedSet/NonEmpty/interface"},y="interface OrderedSet.NonEmpty<T>",b={unversionedId:"rimbu_core/OrderedSet/NonEmpty.interface",id:"rimbu_core/OrderedSet/NonEmpty.interface",title:"OrderedSet.NonEmpty<T>",description:"A non-empty type-invariant immutable Ordered SortedSet of value type T. In the Set, there are no duplicate values. See the Set documentation and the OrderedSet API documentation",source:"@site/api/rimbu_core/OrderedSet/NonEmpty.interface.mdx",sourceDirName:"rimbu_core/OrderedSet",slug:"/rimbu/core/OrderedSet/NonEmpty/interface",permalink:"/api/rimbu/core/OrderedSet/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSet.NonEmpty<T>",slug:"/rimbu/core/OrderedSet/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSet.Context<UT>",permalink:"/api/rimbu/core/OrderedSet/Context/interface"},next:{title:"OrderedSet.Types",permalink:"/api/rimbu/core/OrderedSet/Types/interface"}},O={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],k={toc:h},v="wrapper";function S(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(v,u(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-orderedsetnonemptyt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSet.NonEmpty<T>")),(0,n.kt)("p",null,"A non-empty type-invariant immutable Ordered SortedSet of value type T. In the Set, there are no duplicate values. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/set/OrderedSet/interface"}),"OrderedSet API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/OrderedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSet<T>"))),(0,n.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",c({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The OrderedSet keeps the insertion order of values, thus iterators and stream will also reflect this order. - The OrderedSet wraps around an RSet instance, thus has the same time complexity as the source set. - The OrderedSet keeps the key insertion order in a List, thus its space complexity is higher than the source set."))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const s1 = OrderedSortedSet.empty<string>()\nconst s2 = OrderedSortedSet.of('a', 'b', 'c')\n"))),(0,n.kt)("h2",c({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"stream"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stream")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Stream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}S.isMDXComponent=!0}}]);