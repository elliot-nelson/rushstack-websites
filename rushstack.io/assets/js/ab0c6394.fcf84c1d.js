"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60250],{50158:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/api-documenter.iapidocumenterpluginmanifest",id:"pages/api/api-documenter.iapidocumenterpluginmanifest",title:"api-documenter.iapidocumenterpluginmanifest",description:"Home &gt; @microsoft/api-documenter &gt; IApiDocumenterPluginManifest",source:"@site/docs/pages/api/api-documenter.iapidocumenterpluginmanifest.md",sourceDirName:"pages/api",slug:"/pages/api/api-documenter.iapidocumenterpluginmanifest",permalink:"/rushstack-websites/rushstack.io/pages/api/api-documenter.iapidocumenterpluginmanifest",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"IApiDocumenterPluginManifest interface",id:"iapidocumenterpluginmanifest-interface",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/api-documenter.iapidocumenterpluginmanifest/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-documenter"},"@microsoft/api-documenter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/api-documenter.iapidocumenterpluginmanifest"},"IApiDocumenterPluginManifest")),(0,i.kt)("h2",{id:"iapidocumenterpluginmanifest-interface"},"IApiDocumenterPluginManifest interface"),(0,i.kt)("p",null,"The manifest for an API Documenter plugin."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IApiDocumenterPluginManifest \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"An API documenter plugin is an NPM package. By convention, the NPM package name should have the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"doc-plugin-")," . Its main entry point should export an object named ",(0,i.kt)("inlineCode",{parentName:"p"},"apiDocumenterPluginManifest")," which implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"IApiDocumenterPluginManifest")," interface."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MyMarkdownDocumenter extends MarkdownDocumenterFeature {\n  public onInitialized(): void {\n    console.log('MyMarkdownDocumenter: onInitialized()');\n  }\n}\n\nexport const apiDocumenterPluginManifest: IApiDocumenterPluginManifest = {\n  manifestVersion: 1000,\n  features: [\n    {\n      featureName: 'my-markdown-documenter',\n      kind: 'MarkdownDocumenterFeature',\n      subclass: MyMarkdownDocumenter\n    }\n  ]\n};\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/api-documenter.iapidocumenterpluginmanifest.features"},"features")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/api-documenter.ifeaturedefinition"},"IFeatureDefinition")," ","[","]"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of features provided by this plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/rushstack.io/pages/api/api-documenter.iapidocumenterpluginmanifest.manifestversion"},"manifestVersion")),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"The manifest version number. For now, this must always be ",(0,i.kt)("code",null,"1000"),".")))))}m.isMDXComponent=!0}}]);