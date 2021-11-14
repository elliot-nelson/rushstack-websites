"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[69120],{50158:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return g}});var t=a(46393);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?t.createElement(k,p(p({ref:r},l),{},{components:a})):t.createElement(k,p({ref:r},l))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20826:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var t=a(74834),n=a(28265),o=(a(46393),a(50158)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",id:"api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",isDocsHomePage:!1,title:"rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",description:"Home &gt; @microsoft/rush-lib &gt; ApprovedPackagesPolicy &gt; nonbrowserApprovedPackages",source:"@site/docs/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages.md",sourceDirName:"api",slug:"/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"ApprovedPackagesPolicy.nonbrowserApprovedPackages property",id:"approvedpackagespolicynonbrowserapprovedpackages-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:l};function d(e){var r=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages/"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages"},"nonbrowserApprovedPackages")),(0,o.kt)("h2",{id:"approvedpackagespolicynonbrowserapprovedpackages-property"},"ApprovedPackagesPolicy.nonbrowserApprovedPackages property"),(0,o.kt)("p",null,"Packages approved for usage everywhere ","*","except","*"," in a web browser."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get nonbrowserApprovedPackages(): ApprovedPackagesConfiguration;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This is part of an optional approval workflow, whose purpose is to review any new dependencies that are introduced (e.g. maybe a legal review is required, or maybe we are trying to minimize bloat). The intent is that the file will be stored in Git and tracked by a branch policy that notifies reviewers when a PR attempts to modify the file."),(0,o.kt)("p",null,"Example filename: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\config\\rush\\browser-approved-packages.json")))}d.isMDXComponent=!0}}]);