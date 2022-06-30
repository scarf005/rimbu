"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[1585],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,b=u["".concat(m,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21284:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return b},toc:function(){return f}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={title:"SortedTableSortedColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/sorted-row/SortedTableSortedColumn/NonEmpty/interface"},s="interface SortedTableSortedColumn.NonEmpty<R,C,V>",b={unversionedId:"rimbu_table/sorted-row/SortedTableSortedColumn/NonEmpty.interface",id:"rimbu_table/sorted-row/SortedTableSortedColumn/NonEmpty.interface",title:"SortedTableSortedColumn.NonEmpty<R,C,V>",description:"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the SortedTableSortedColumn API documentation",source:"@site/api/rimbu_table/sorted-row/SortedTableSortedColumn/NonEmpty.interface.mdx",sourceDirName:"rimbu_table/sorted-row/SortedTableSortedColumn",slug:"/rimbu/table/sorted-row/SortedTableSortedColumn/NonEmpty/interface",permalink:"/api/rimbu/table/sorted-row/SortedTableSortedColumn/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedTableSortedColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/sorted-row/SortedTableSortedColumn/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"SortedTableSortedColumn.Context<UR,UC>",permalink:"/api/rimbu/table/sorted-row/SortedTableSortedColumn/Context/interface"},next:{title:"SortedTableSortedColumn.Types",permalink:"/api/rimbu/table/sorted-row/SortedTableSortedColumn/Types/interface"}},y={},f=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:f};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"interface-sortedtablesortedcolumnnonemptyrcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedTableSortedColumn.NonEmpty<R,C,V>")),(0,n.kt)("p",null,"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/sorted-row/SortedTableSortedColumn/interface"}),"SortedTableSortedColumn API documentation"),"  "),(0,n.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the row key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the column key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"The SortedTableSortedColumn uses a SortedMap to map row keys to column. - The SortedTableSortedColumn uses SortedMaps to map column keys to values.")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"const t1 = SortedTableSortedColumn.empty<number, string, boolean>()\nconst t2 = SortedTableSortedColumn.of([1, 'a', true], [2, 'a', false])\n")))))}k.isMDXComponent=!0}}]);