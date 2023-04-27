"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[88633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),b=a,s=c["".concat(p,".").concat(b)]||c[b]||d[b]||o;return r?n.createElement(s,l(l({ref:t},u),{},{components:r})):n.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},10903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>f,default:()=>v,frontMatter:()=>s,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),b=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const s={title:"SortedTableSortedColumn<R,C,V>",slug:"/rimbu/core/SortedTableSortedColumn/interface"},f="interface SortedTableSortedColumn<R,C,V>",y={unversionedId:"rimbu_core/SortedTableSortedColumn.interface",id:"rimbu_core/SortedTableSortedColumn.interface",title:"SortedTableSortedColumn<R,C,V>",description:"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the SortedTableSortedColumn API documentation",source:"@site/api/rimbu_core/SortedTableSortedColumn.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/SortedTableSortedColumn/interface",permalink:"/api/rimbu/core/SortedTableSortedColumn/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedTableSortedColumn<R,C,V>",slug:"/rimbu/core/SortedTableSortedColumn/interface"},sidebar:"defaultSidebar",previous:{title:"SortedTableSortedColumn.Types",permalink:"/api/rimbu/core/SortedTableSortedColumn/Types/interface"},next:{title:"SortedTableSortedColumn",permalink:"/api/rimbu/core/SortedTableSortedColumn/var"}},S={},k=[{value:"Type parameters",id:"type-parameters",level:2}],T={toc:k},C="wrapper";function v(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(C,d(c(c({},T),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-sortedtablesortedcolumnrcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedTableSortedColumn<R,C,V>")),(0,n.kt)("p",null,"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/sorted-row/SortedTableSortedColumn/interface"}),"SortedTableSortedColumn API documentation"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedTableSortedColumn/namespace"}),"SortedTableSortedColumn")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/SortedTableSortedColumn/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedTableSortedColumn.NonEmpty<R,C,V>"))),(0,n.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the row key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the column key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",c({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The SortedTableSortedColumn uses a SortedhMap to map row keys to column. - The SortedTableSortedColumn uses SortedMaps to map column keys to values."))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const t1 = SortedTableSortedColumn.empty<number, string, boolean>()\nconst t2 = SortedTableSortedColumn.of([1, 'a', true], [2, 'a', false])\n"))))}v.isMDXComponent=!0}}]);