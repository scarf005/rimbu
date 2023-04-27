"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[28305],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,s=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(s,i(i({ref:r},c),{},{components:t})):n.createElement(s,i({ref:r},c))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41654:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>s,metadata:()=>O,toc:()=>v});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(d)for(var t of d(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>o(e,i(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&d)for(var n of d(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const s={title:"OrderedSortedMap.Builder<K,V>",slug:"/rimbu/core/OrderedSortedMap/Builder/interface"},b="interface OrderedSortedMap.Builder<K,V>",O={unversionedId:"rimbu_core/OrderedSortedMap/Builder.interface",id:"rimbu_core/OrderedSortedMap/Builder.interface",title:"OrderedSortedMap.Builder<K,V>",description:"A mutable OrderedSortedMap builder used to efficiently create new immutable instances. See the Map documentation and the OrderedSortedMap.Builder API documentation",source:"@site/api/rimbu_core/OrderedSortedMap/Builder.interface.mdx",sourceDirName:"rimbu_core/OrderedSortedMap",slug:"/rimbu/core/OrderedSortedMap/Builder/interface",permalink:"/api/rimbu/core/OrderedSortedMap/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSortedMap.Builder<K,V>",slug:"/rimbu/core/OrderedSortedMap/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedMap (namespace)",permalink:"/api/rimbu/core/OrderedSortedMap/namespace"},next:{title:"OrderedSortedMap.Context<UK>",permalink:"/api/rimbu/core/OrderedSortedMap/Context/interface"}},y={},v=[{value:"Type parameters",id:"type-parameters",level:2}],g={toc:v},k="wrapper";function h(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(k,m(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-orderedsortedmapbuilderkv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSortedMap.Builder<K,V>")),(0,n.kt)("p",null,"A mutable ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderedSortedMap")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedSortedMap/Builder/interface"}),"OrderedSortedMap.Builder API documentation")),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))))}h.isMDXComponent=!0}}]);