"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[75832],{50158:function(e,r,a){a.d(r,{Zo:function(){return s},kt:function(){return k}});var t=a(46393);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),c=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,f=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return a?t.createElement(f,l(l({ref:r},s),{},{components:a})):t.createElement(f,l({ref:r},s))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96077:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var t=a(74834),n=a(28265),o=(a(46393),a(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/node-core-library.packagejsonlookup.tryloadpackagejsonfor",id:"api/node-core-library.packagejsonlookup.tryloadpackagejsonfor",isDocsHomePage:!1,title:"node-core-library.packagejsonlookup.tryloadpackagejsonfor",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; tryLoadPackageJsonFor",source:"@site/docs/api/node-core-library.packagejsonlookup.tryloadpackagejsonfor.md",sourceDirName:"api",slug:"/api/node-core-library.packagejsonlookup.tryloadpackagejsonfor",permalink:"/rushstack-websites/undefined/pages/api/node-core-library.packagejsonlookup.tryloadpackagejsonfor",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageJsonLookup.tryLoadPackageJsonFor() method",id:"packagejsonlookuptryloadpackagejsonfor-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function d(e){var r=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagejsonlookup.tryloadpackagejsonfor"},"tryLoadPackageJsonFor")),(0,o.kt)("h2",{id:"packagejsonlookuptryloadpackagejsonfor-method"},"PackageJsonLookup.tryLoadPackageJsonFor() method"),(0,o.kt)("p",null,"If the specified file or folder is part of a package, this loads and returns the associated package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tryLoadPackageJsonFor(fileOrFolderPath: string): IPackageJson | undefined;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fileOrFolderPath"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a source file or folder that may be part of a package")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.ipackagejson"},"IPackageJson")," ","|"," undefined"),(0,o.kt)("p",null,"an IPackageJson object, or undefined if the fileOrFolderPath does not belong to a package"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The package folder is determined using the same algorithm as ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor"},"PackageJsonLookup.tryGetPackageFolderFor()")," ."))}d.isMDXComponent=!0}}]);