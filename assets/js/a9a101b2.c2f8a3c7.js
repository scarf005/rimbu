"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[73528],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9603:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return O}});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(d)for(var t of d(r))l.call(r,t)&&c(e,t,r[t]);return e};const p={title:"OrderedHashSet.Builder<T>",slug:"/rimbu/ordered/set/OrderedHashSet/Builder/interface"},f="interface OrderedHashSet.Builder<T>",m={unversionedId:"rimbu_ordered/set/OrderedHashSet/Builder.interface",id:"rimbu_ordered/set/OrderedHashSet/Builder.interface",title:"OrderedHashSet.Builder<T>",description:"A mutable OrderedHashSet builder used to efficiently create new immutable instances. See the Set documentation and the OrderedHashSet.Builder API documentation",source:"@site/api/rimbu_ordered/set/OrderedHashSet/Builder.interface.mdx",sourceDirName:"rimbu_ordered/set/OrderedHashSet",slug:"/rimbu/ordered/set/OrderedHashSet/Builder/interface",permalink:"/api/rimbu/ordered/set/OrderedHashSet/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashSet.Builder<T>",slug:"/rimbu/ordered/set/OrderedHashSet/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedHashSet (namespace)",permalink:"/api/rimbu/ordered/set/OrderedHashSet/namespace"},next:{title:"OrderedHashSet.Context<UT>",permalink:"/api/rimbu/ordered/set/OrderedHashSet/Context/interface"}},b={},O=[{value:"Type parameters",id:"type-parameters",level:2}],h={toc:O};function y(e){var r,t=e,{components:a}=t,c=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&d)for(var n of d(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},h),c),i(r,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-orderedhashsetbuildert"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedHashSet.Builder<T>")),(0,n.kt)("p",null,"A mutable ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderedHashSet")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/set/OrderedHashSet/Builder/interface"}),"OrderedHashSet.Builder API documentation")),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))))}y.isMDXComponent=!0}}]);