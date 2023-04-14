"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[97837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,f=u["".concat(l,".").concat(s)]||u[s]||y[s]||p;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>d,toc:()=>h});var r=n(3905),a=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&m(e,n,t[n]);return e},y=(e,t)=>p(e,o(t)),s=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"RMap.NonEmpty<K,V>",slug:"/rimbu/collection-types/map/RMap/NonEmpty/interface"},b="interface RMap.NonEmpty<K,V>",d={unversionedId:"rimbu_collection-types/map/RMap/NonEmpty.interface",id:"rimbu_collection-types/map/RMap/NonEmpty.interface",title:"RMap.NonEmpty<K,V>",description:"A non-empty type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the RMap API documentation",source:"@site/api/rimbu_collection-types/map/RMap/NonEmpty.interface.mdx",sourceDirName:"rimbu_collection-types/map/RMap",slug:"/rimbu/collection-types/map/RMap/NonEmpty/interface",permalink:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"RMap.NonEmpty<K,V>",slug:"/rimbu/collection-types/map/RMap/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"RMap.Context<UK>",permalink:"/api/rimbu/collection-types/map/RMap/Context/interface"},next:{title:"RMap.Types",permalink:"/api/rimbu/collection-types/map/RMap/Types/interface"}},v={},h=[{value:"Type parameters",id:"type-parameters",level:2}],O={toc:h},k="wrapper";function g(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(k,y(u(u({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-rmapnonemptykv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface RMap.NonEmpty<K,V>")),(0,r.kt)("p",null,"A non-empty type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/collection-types/map/RMap/interface"}),"RMap API documentation")),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"the key type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))))}g.isMDXComponent=!0}}]);