"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[62860],{50158:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return d}});var t=n(46393);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,g=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return n?t.createElement(g,l(l({ref:a},c),{},{components:n})):t.createElement(g,l({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40939:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var t=n(61731),r=n(70396),o=(n(46393),n(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/node-core-library.packagejsonlookup.loadownpackagejson",id:"pages/api/node-core-library.packagejsonlookup.loadownpackagejson",title:"node-core-library.packagejsonlookup.loadownpackagejson",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; loadOwnPackageJson",source:"@site/docs/pages/api/node-core-library.packagejsonlookup.loadownpackagejson.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.packagejsonlookup.loadownpackagejson",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagejsonlookup.loadownpackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"PackageJsonLookup.loadOwnPackageJson() method",id:"packagejsonlookuploadownpackagejson-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:c};function k(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.packagejsonlookup.loadownpackagejson/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.packagejsonlookup.loadownpackagejson"},"loadOwnPackageJson")),(0,o.kt)("h2",{id:"packagejsonlookuploadownpackagejson-method"},"PackageJsonLookup.loadOwnPackageJson() method"),(0,o.kt)("p",null,"A helper for loading the caller's own package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadOwnPackageJson(dirnameOfCaller: string): IPackageJson;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dirnameOfCaller"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The NodeJS ",(0,o.kt)("code",null,"__dirname")," macro for the caller.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.ipackagejson"},"IPackageJson")),(0,o.kt)("p",null,"This function always returns a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"IPackageJson")," object. If any problems are encountered during loading, an exception will be thrown instead."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This function provides a concise and efficient way for an NPM package to report metadata about itself. For example, a tool might want to report its version."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loadOwnPackageJson()")," probes upwards from the caller's folder, expecting to find a package.json file, which is assumed to be the caller's package. The result is cached, under the assumption that a tool's own package.json (and intermediary folders) will never change during the lifetime of the process."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Report the version of our NPM package\nconst myPackageVersion: string = PackageJsonLookup.loadOwnPackageJson(__dirname).version;\nconsole.log(`Cool Tool - Version ${myPackageVersion}`);\n")))}k.isMDXComponent=!0}}]);