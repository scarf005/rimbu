"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[10160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(a),b=r,y=s["".concat(p,".").concat(b)]||s[b]||c[b]||o;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>v,frontMatter:()=>y,metadata:()=>f,toc:()=>H});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>o(e,l(t)),b=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const y={title:"HashTableHashColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/HashTableHashColumn/NonEmpty/interface"},h="interface HashTableHashColumn.NonEmpty<R,C,V>",f={unversionedId:"rimbu_table/HashTableHashColumn/NonEmpty.interface",id:"rimbu_table/HashTableHashColumn/NonEmpty.interface",title:"HashTableHashColumn.NonEmpty<R,C,V>",description:"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the HashTableHashColumn API documentation",source:"@site/api/rimbu_table/HashTableHashColumn/NonEmpty.interface.mdx",sourceDirName:"rimbu_table/HashTableHashColumn",slug:"/rimbu/table/HashTableHashColumn/NonEmpty/interface",permalink:"/api/rimbu/table/HashTableHashColumn/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashTableHashColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/HashTableHashColumn/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"HashTableHashColumn.Context<UR,UC>",permalink:"/api/rimbu/table/HashTableHashColumn/Context/interface"},next:{title:"HashTableHashColumn.Types",permalink:"/api/rimbu/table/HashTableHashColumn/Types/interface"}},d={},H=[{value:"Type parameters",id:"type-parameters",level:2}],k={toc:H},T="wrapper";function v(e){var t=e,{components:a}=t,r=b(t,["components"]);return(0,n.kt)(T,c(s(s({},k),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"interface-hashtablehashcolumnnonemptyrcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface HashTableHashColumn.NonEmpty<R,C,V>")),(0,n.kt)("p",null,"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),"HashTableHashColumn API documentation"),"  "),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the row key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the column key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",s({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The HashTableHashColumn uses a HashMap to map row keys to column. - The HashTableHashColumn uses HashMaps to map column keys to values."))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const t1 = HashTableHashColumn.empty<number, string, boolean>()\nconst t2 = HashTableHashColumn.of([1, 'a', true], [2, 'a', false])\n"))))}v.isMDXComponent=!0}}]);