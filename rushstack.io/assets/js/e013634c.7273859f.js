"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[55884],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(r),d=a,h=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},59449:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var n=r(61731),a=r(70396),l=(r(46393),r(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/api/rush-lib.lockstepversionpolicy",id:"pages/api/rush-lib.lockstepversionpolicy",title:"rush-lib.lockstepversionpolicy",description:"Home &gt; @microsoft/rush-lib &gt; LockStepVersionPolicy",source:"@site/docs/pages/api/rush-lib.lockstepversionpolicy.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.lockstepversionpolicy",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"LockStepVersionPolicy class",id:"lockstepversionpolicy-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],u={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/rush-lib.lockstepversionpolicy/"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy"},"LockStepVersionPolicy")),(0,l.kt)("h2",{id:"lockstepversionpolicy-class"},"LockStepVersionPolicy class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"This policy indicates all related projects should use the same version."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class LockStepVersionPolicy extends VersionPolicy \n")),(0,l.kt)("b",null,"Extends:")," [VersionPolicy](/rushstack-websites/rushstack.io/pages/api/rush-lib.versionpolicy)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"LockStepVersionPolicy")," class."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.mainproject"},"mainProject")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The main project for the version policy. If the value is provided, change logs will only be generated in that project. If the value is not provided, change logs will be hosted in each project associated with the policy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.nextbump"},"nextBump")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.bumptype"},"BumpType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The type of bump for next bump.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.version"},"version")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The value of the lockstep version")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.bump"},"bump(bumpType, identifier)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Bumps the version of the lockstep policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.ensure"},"ensure(project, force)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Returns an updated package json that satisfies the version policy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.update"},"update(newVersionString)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Updates the version of the policy directly with a new value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.lockstepversionpolicy.validate"},"validate(versionString, packageName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Validates the specified version and throws if the version does not satisfy lockstep version.")))))}k.isMDXComponent=!0}}]);