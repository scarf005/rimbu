"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[28103],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,s=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(s,i(i({ref:r},l),{},{components:t})):n.createElement(s,i({ref:r},l))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>x,frontMatter:()=>s,metadata:()=>b,toc:()=>v});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(p)for(var t of p(r))d.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>o(e,i(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const s={title:"OrderedMap.Context<UK>",slug:"/rimbu/ordered/map/OrderedMap/Context/interface"},y="interface OrderedMap.Context<UK>",b={unversionedId:"rimbu_ordered/map/OrderedMap/Context.interface",id:"rimbu_ordered/map/OrderedMap/Context.interface",title:"OrderedMap.Context<UK>",description:"A context instance for an OrderedMap that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_ordered/map/OrderedMap/Context.interface.mdx",sourceDirName:"rimbu_ordered/map/OrderedMap",slug:"/rimbu/ordered/map/OrderedMap/Context/interface",permalink:"/api/rimbu/ordered/map/OrderedMap/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedMap.Context<UK>",slug:"/rimbu/ordered/map/OrderedMap/Context/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedMap.Builder<K,V>",permalink:"/api/rimbu/ordered/map/OrderedMap/Builder/interface"},next:{title:"OrderedMap.NonEmpty<K,V>",permalink:"/api/rimbu/ordered/map/OrderedMap/NonEmpty/interface"}},O={},v=[{value:"Type parameters",id:"type-parameters",level:2}],g={toc:v},h="wrapper";function x(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(h,f(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-orderedmapcontextuk"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedMap.Context<UK>")),(0,n.kt)("p",null,"A context instance for an ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderedMap")," that acts as a factory for every instance of this type of collection."),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper key type bound for which the context can be used")))))}x.isMDXComponent=!0}}]);