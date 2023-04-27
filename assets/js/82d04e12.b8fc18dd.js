"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[75304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,s=f["".concat(c,".").concat(m)]||f[m]||b[m]||o;return r?n.createElement(s,i(i({ref:t},u),{},{components:r})):n.createElement(s,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},b=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const s={title:"Table.Context<UR,UC>",slug:"/rimbu/core/Table/Context/interface"},y="interface Table.Context<UR,UC>",d={unversionedId:"rimbu_core/Table/Context.interface",id:"rimbu_core/Table/Context.interface",title:"Table.Context<UR,UC>",description:"A context instance for Table implementations that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_core/Table/Context.interface.mdx",sourceDirName:"rimbu_core/Table",slug:"/rimbu/core/Table/Context/interface",permalink:"/api/rimbu/core/Table/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Table.Context<UR,UC>",slug:"/rimbu/core/Table/Context/interface"},sidebar:"defaultSidebar",previous:{title:"Table.Builder<R,C,V>",permalink:"/api/rimbu/core/Table/Builder/interface"},next:{title:"Table.NonEmpty<R,C,V>",permalink:"/api/rimbu/core/Table/NonEmpty/interface"}},O={},v=[{value:"Type parameters",id:"type-parameters",level:2}],h={toc:v},g="wrapper";function x(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,b(f(f({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"interface-tablecontexturuc"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface Table.Context<UR,UC>")),(0,n.kt)("p",null,"A context instance for Table implementations that acts as a factory for every instance of this type of collection."),(0,n.kt)("h2",f({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"UR"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the upper row key type bound for which the context can be used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"UC"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the upper column key type bound for which the context can be used")))))}x.isMDXComponent=!0}}]);