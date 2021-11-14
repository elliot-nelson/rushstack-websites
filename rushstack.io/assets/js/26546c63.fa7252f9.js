"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[6886],{50158:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return k}});var t=a(46393);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),c=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},l=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||p;return a?t.createElement(d,i(i({ref:r},l),{},{components:a})):t.createElement(d,i({ref:r},l))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<p;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96331:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var t=a(74834),n=a(28265),p=(a(46393),a(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"api/node-core-library.packagenameparser.parse",id:"api/node-core-library.packagenameparser.parse",isDocsHomePage:!1,title:"node-core-library.packagenameparser.parse",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser &gt; parse",source:"@site/docs/api/node-core-library.packagenameparser.parse.md",sourceDirName:"api",slug:"/api/node-core-library.packagenameparser.parse",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.parse",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"PackageNameParser.parse() method",id:"packagenameparserparse-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:l};function m(e){var r=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("head",null,(0,p.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/node-core-library.packagenameparser.parse/"})),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser"},"PackageNameParser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagenameparser.parse"},"parse")),(0,p.kt)("h2",{id:"packagenameparserparse-method"},"PackageNameParser.parse() method"),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagename.tryparse"},"PackageName.tryParse()")," , except this throws an exception if the input cannot be parsed."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"parse(packageName: string): IParsedPackageName;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packageName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iparsedpackagename"},"IParsedPackageName")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The packageName must not be an empty string."))}m.isMDXComponent=!0}}]);