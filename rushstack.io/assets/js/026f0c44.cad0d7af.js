"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[77557],{50158:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(46393);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88511:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/rush-lib.pnpmoptionsconfiguration",id:"pages/api/rush-lib.pnpmoptionsconfiguration",title:"rush-lib.pnpmoptionsconfiguration",description:"Home &gt; @microsoft/rush-lib &gt; PnpmOptionsConfiguration",source:"@site/docs/pages/api/rush-lib.pnpmoptionsconfiguration.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.pnpmoptionsconfiguration",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"PnpmOptionsConfiguration class",id:"pnpmoptionsconfiguration-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/rush-lib.pnpmoptionsconfiguration/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")),(0,i.kt)("h2",{id:"pnpmoptionsconfiguration-class"},"PnpmOptionsConfiguration class"),(0,i.kt)("p",null,"Options that are only used when the PNPM package manager is selected."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PnpmOptionsConfiguration extends PackageManagerOptionsConfigurationBase \n")),(0,i.kt)("b",null,"Extends:")," [PackageManagerOptionsConfigurationBase](/rushstack-websites/rushstack.io/pages/api/rush-lib.packagemanageroptionsconfigurationbase)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"It is valid to define these options in rush.json even if the PNPM package manager is not being used."),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"PnpmOptionsConfiguration")," class."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.pnpmstore"},"pnpmStore")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmstoreoptions"},"PnpmStoreOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"The method used to resolve the store used by PNPM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.pnpmstorepath"},"pnpmStorePath")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The path for PNPM to use as the store directory. Will be overridden by environment variable RUSH","_","PNPM","_","STORE","_","PATH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges"},"preventManualShrinkwrapChanges")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, then ",(0,i.kt)("code",null,"rush install")," will report an error if manual modifications were made to the PNPM shrinkwrap file without running ",(0,i.kt)("code",null,"rush update")," afterwards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies"},"strictPeerDependencies")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},'If true, then Rush will add the "--strict-peer-dependencies" option when invoking PNPM.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.useworkspaces"},"useWorkspaces")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, then Rush will use the workspaces feature to install and link packages when invoking PNPM.")))))}m.isMDXComponent=!0}}]);