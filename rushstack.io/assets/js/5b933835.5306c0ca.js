"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[73690],{50158:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return k}});var r=t(46393);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),l=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),k=n,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||s;return t?r.createElement(d,p(p({ref:a},c),{},{components:t})):r.createElement(d,p({ref:a},c))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,p=new Array(s);p[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<s;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56278:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=t(61731),n=t(70396),s=(t(46393),t(50158)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/api/node-core-library.packagenameparser",id:"pages/api/node-core-library.packagenameparser",title:"node-core-library.packagenameparser",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser",source:"@site/docs/pages/api/node-core-library.packagenameparser.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.packagenameparser",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"PackageNameParser class",id:"packagenameparser-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:c};function m(e){var a=e.components,t=(0,n.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.packagenameparser/"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser"},"PackageNameParser")),(0,s.kt)("h2",{id:"packagenameparser-class"},"PackageNameParser class"),(0,s.kt)("p",null,"A configurable parser for validating and manipulating NPM package names such as ",(0,s.kt)("inlineCode",{parentName:"p"},"my-package")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"@scope/my-package")," ."),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PackageNameParser \n")),(0,s.kt)("h2",{id:"remarks"},"Remarks"),(0,s.kt)("p",null,"If you do not need to customize the parser configuration, it is recommended to use ",(0,s.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagename"},"PackageName")," which exposes these operations as a simple static class."),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser._constructor_"},"(constructor)(options)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,s.kt)("code",null,"PackageNameParser")," class")))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.combineparts"},"combineParts(scope, unscopedName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Combines an optional package scope with an unscoped root name.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.getscope"},"getScope(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The parsed NPM scope, or an empty string if there was no scope. The scope value will always include the at-sign.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.getunscopedname"},"getUnscopedName(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"The parsed NPM package name without the scope.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.isvalidname"},"isValidName(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Returns true if the specified package name is valid, or false otherwise.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.parse"},"parse(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Same as ",(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagename.tryparse"},"PackageName.tryParse()")," , except this throws an exception if the input cannot be parsed.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.tryparse"},"tryParse(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"This attempts to parse a package name that may include a scope component. The packageName must not be an empty string.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.validate"},"validate(packageName)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Throws an exception if the specified name is not a valid package name. The packageName must not be an empty string.")))))}m.isMDXComponent=!0}}]);