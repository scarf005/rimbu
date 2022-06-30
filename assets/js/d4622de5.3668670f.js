"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[17267],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93346:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return h}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&m(e,a,t[a]);return e};const u={title:"OrderedHashSet.Context<UT>",slug:"/rimbu/ordered/OrderedHashSet/Context/interface"},c="interface OrderedHashSet.Context<UT>",k={unversionedId:"rimbu_ordered/OrderedHashSet/Context.interface",id:"rimbu_ordered/OrderedHashSet/Context.interface",title:"OrderedHashSet.Context<UT>",description:"A context instance for an OrderedHashSet that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_ordered/OrderedHashSet/Context.interface.mdx",sourceDirName:"rimbu_ordered/OrderedHashSet",slug:"/rimbu/ordered/OrderedHashSet/Context/interface",permalink:"/api/rimbu/ordered/OrderedHashSet/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashSet.Context<UT>",slug:"/rimbu/ordered/OrderedHashSet/Context/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedHashSet.Builder<T>",permalink:"/api/rimbu/ordered/OrderedHashSet/Builder/interface"},next:{title:"OrderedHashSet.NonEmpty<T>",permalink:"/api/rimbu/ordered/OrderedHashSet/NonEmpty/interface"}},N={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>_fixedElementType</code>",id:"_fixedelementtype",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_types</code>",id:"_types",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>listContext</code>",id:"listcontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>setContext</code>",id:"setcontext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>isValidValue</code>",id:"isvalidvalue",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-10",level:4}],v={toc:h};function y(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),m),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-orderedhashsetcontextut"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedHashSet.Context<UT>")),(0,n.kt)("p",null,"A context instance for an ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderedHashSet")," that acts as a factory for every instance of this type of collection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.Context<UT,Tp>"))),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"UT"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",s({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"_fixedelementtype"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_fixedElementType")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _fixedElementType: (element: UT) => never;"))),(0,n.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Context/interface#_fixedElementType"}),"Context._fixedElementType"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"_types"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_types")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _types: Tp;"))),(0,n.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Context/interface#_types"}),"Context._types"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"listcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"listContext")),(0,n.kt)("p",null,"The List context used create Lists to keep value insertion order.")),(0,n.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly listContext: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.Context")),(0,n.kt)("inlineCode",{parentName:"p"},";"))),(0,n.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Context/interface#listContext"}),"Context.listContext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"setcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setContext")),(0,n.kt)("p",null,"The wrapped Set context type.")),(0,n.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly setContext: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, UT>['sourceContext'];"))),(0,n.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Context/interface#setContext"}),"Context.setContext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"typetag"}),(0,n.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,n.kt)("p",null,"A string tag defining the specific collection type")),(0,n.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'OrderedSet';"))),(0,n.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Context/interface#typeTag"}),"Context.typeTag"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Context/interface#typeTag"}),"Context.typeTag"))),(0,n.kt)("h2",s({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance for this type of collection and context.")),(0,n.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<T extends UT>(): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['builder'];"))),(0,n.kt)("h4",s({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UT")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"HashSet.builder<number>()     // => HashSet.Builder<number>\n")))),(0,n.kt)("h4",s({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Factory/interface#builder"}),"Factory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given value type.")),(0,n.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<T extends UT>(): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['normal'];"))),(0,n.kt)("h4",s({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UT")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"HashSet.empty<number>()    // => HashSet<number>\nHashSet.empty<string>()    // => HashSet<string>\n")))),(0,n.kt)("h4",s({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Factory/interface#empty"}),"Factory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable set of this collection type and context, containing the given values in ",(0,n.kt)("inlineCode",{parentName:"p"},"source"),".")),(0,n.kt)("h4",s({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<T extends UT>(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<T extends UT>(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['normal'];"))),(0,n.kt)("h4",s({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UT")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing values")))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"HashSet.from([1, 2, 3], [4, 5])   // => HashSet.NonEmpty<number>\n")))),(0,n.kt)("h4",s({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Factory/interface#from"}),"Factory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"isvalidvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isValidValue")),(0,n.kt)("p",null,"Returns true if given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," could be a valid value in this Context.")),(0,n.kt)("h4",s({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"isValidValue(value: any): value is UT;"))),(0,n.kt)("h4",s({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"any")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the object to check")))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"HashSet.defaultContext().isValidValue(1)   // => true\n")))),(0,n.kt)("h4",s({},{id:"overrides-8"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Context/interface#isValidValue"}),"Context.isValidValue"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable set of this type and context, containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"values"),".")),(0,n.kt)("h4",s({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<T extends UT>(...values: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['nonEmpty'];"))),(0,n.kt)("h4",s({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UT")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",s({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a non-empty array of values")))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"HashSet.of(1, 2, 3).toArray()   // => [1, 2, 3]\n")))),(0,n.kt)("h4",s({},{id:"overrides-9"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Factory/interface#of"}),"Factory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that appends received items to an RSet and returns the RSet as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create an RSet from the source, and then append elements to it.")),(0,n.kt)("h4",s({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<T extends UT>(source?: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/WithElem/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithElem")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, T>['normal']>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UT")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",s({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"(optional) an initial source of elements to append to")))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const someList = SortedSet.of(1, 2, 3);\nconst result = Stream.range({ start: 20, amount: 5 }).reduce(SortedSet.reducer(someList))\nresult.toArray()   // => [1, 2, 3, 20, 21, 22, 23, 24]\n")))),(0,n.kt)("div",s({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"uses an RSet builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a RSet in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),"."))),(0,n.kt)("h4",s({},{id:"overrides-10"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Factory/interface#reducer"}),"Factory.reducer"))))}y.isMDXComponent=!0}}]);