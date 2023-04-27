"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[45441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),s=a,f=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&m(e,r,t[r]);return e},d=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"SortedMultiSet.NonEmpty<T>",slug:"/rimbu/core/SortedMultiSet/NonEmpty/interface"},y="interface SortedMultiSet.NonEmpty<T>",b={unversionedId:"rimbu_core/SortedMultiSet/NonEmpty.interface",id:"rimbu_core/SortedMultiSet/NonEmpty.interface",title:"SortedMultiSet.NonEmpty<T>",description:"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the MultiSet documentation and the SortedMultiSet API documentation",source:"@site/api/rimbu_core/SortedMultiSet/NonEmpty.interface.mdx",sourceDirName:"rimbu_core/SortedMultiSet",slug:"/rimbu/core/SortedMultiSet/NonEmpty/interface",permalink:"/api/rimbu/core/SortedMultiSet/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMultiSet.NonEmpty<T>",slug:"/rimbu/core/SortedMultiSet/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMultiSet.Context<UT>",permalink:"/api/rimbu/core/SortedMultiSet/Context/interface"},next:{title:"SortedMultiSet.Types",permalink:"/api/rimbu/core/SortedMultiSet/Types/interface"}},S={},k=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4}],v={toc:k},N="wrapper";function h(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(N,d(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-sortedmultisetnonemptyt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedMultiSet.NonEmpty<T>")),(0,n.kt)("p",null,"A type-invariant immutable MultiSet of value type T. In the MultiSet, each value can occur multiple times. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/multiset"}),"MultiSet documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multiset/SortedMultiSet/interface"}),"SortedMultiSet API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Streamable.NonEmpty<T>")),", ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedMultiSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiSet<T>"))),(0,n.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",c({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"SortedMultiSet")," uses the contexts' ",(0,n.kt)("inlineCode",{parentName:"li"},"SortedMap")," ",(0,n.kt)("inlineCode",{parentName:"li"},"mapContext")," to sort the values."))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const s1 = SortedMultiSet.empty<string>()\nconst s2 = SortedMultiSet.of('a', 'b', 'a', 'c')\n"))),(0,n.kt)("h2",c({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"stream"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stream")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Stream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/Streamable/NonEmpty/interface#stream"}),"NonEmpty.stream"))))}h.isMDXComponent=!0}}]);