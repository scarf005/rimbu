"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[53482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"OrderedSetBase.NonEmpty<T,Tp>",slug:"/rimbu/ordered/set-custom/OrderedSetBase/NonEmpty/interface"},y="interface OrderedSetBase.NonEmpty<T,Tp>",k={unversionedId:"rimbu_ordered/set-custom/OrderedSetBase/NonEmpty.interface",id:"rimbu_ordered/set-custom/OrderedSetBase/NonEmpty.interface",title:"OrderedSetBase.NonEmpty<T,Tp>",description:"undocumented",source:"@site/api/rimbu_ordered/set-custom/OrderedSetBase/NonEmpty.interface.mdx",sourceDirName:"rimbu_ordered/set-custom/OrderedSetBase",slug:"/rimbu/ordered/set-custom/OrderedSetBase/NonEmpty/interface",permalink:"/api/rimbu/ordered/set-custom/OrderedSetBase/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSetBase.NonEmpty<T,Tp>",slug:"/rimbu/ordered/set-custom/OrderedSetBase/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSetBase.Context<UT,Tp>",permalink:"/api/rimbu/ordered/set-custom/OrderedSetBase/Context/interface"},next:{title:"OrderedSetBase.Types",permalink:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface"}},b={},O=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>order</code>",id:"order",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>sourceSet</code>",id:"sourceset",level:3},{value:"Definition",id:"definition-1",level:4}],N={toc:O},g="wrapper";function v(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(g,m(c(c({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-orderedsetbasenonemptyttp"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSetBase.NonEmpty<T,Tp>")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetNonEmpty/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSetNonEmpty<T,Tp,TpG>"))),(0,n.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"undocumented")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Tp"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.Types"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.Types"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",c({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"order"}),(0,n.kt)("inlineCode",{parentName:"h3"},"order")),(0,n.kt)("p",null,"Returns a non-empty ",(0,n.kt)("inlineCode",{parentName:"p"},"List")," instance containing the order of the elements.")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly order: List.NonEmpty<T>;"))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const s = OrderedHashSet.of('b', 'a', 'c')\nconsole.log(s.order.toArray())\n// => ['b', 'a', 'c']\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"sourceset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceSet")),(0,n.kt)("p",null,"Returns the contained non-empty ",(0,n.kt)("inlineCode",{parentName:"p"},"Set")," instance.")),(0,n.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceSet: WithElem<Tp, T>['sourceSetNonEmpty'];"))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const s = OrderedHashSet.of('b', 'a', 'c')\nconsole.log(m.sourceSet.toString())\n// => HashSet('a', 'b', 'c')\n")))))}v.isMDXComponent=!0}}]);