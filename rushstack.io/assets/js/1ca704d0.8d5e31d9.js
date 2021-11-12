"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[28056],{50158:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return h}});var t=n(46393);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,f=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?t.createElement(f,a(a({ref:r},l),{},{components:n})):t.createElement(f,a({ref:r},l))}));function h(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67258:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var t=n(74834),i=n(28265),o=(n(46393),n(50158)),a=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges",id:"api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges",isDocsHomePage:!1,title:"rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges",description:"Home &gt; @microsoft/rush-lib &gt; IExperimentsJson &gt; omitImportersFromPreventManualShrinkwrapChanges",source:"@site/docs/api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges.md",sourceDirName:"api",slug:"/api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges",permalink:"/rushstack-websites/undefined/pages/api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"IExperimentsJson.omitImportersFromPreventManualShrinkwrapChanges property",id:"iexperimentsjsonomitimportersfrompreventmanualshrinkwrapchanges-property",children:[],level:2}],c={toc:l};function m(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.iexperimentsjson"},"IExperimentsJson")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/rush-lib.iexperimentsjson.omitimportersfrompreventmanualshrinkwrapchanges"},"omitImportersFromPreventManualShrinkwrapChanges")),(0,o.kt)("h2",{id:"iexperimentsjsonomitimportersfrompreventmanualshrinkwrapchanges-property"},"IExperimentsJson.omitImportersFromPreventManualShrinkwrapChanges property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"If using the 'preventManualShrinkwrapChanges' option, restricts the hash to only include the layout of external dependencies. Used to allow links between workspace projects or the addition/removal of references to existing dependency versions to not cause hash changes."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"omitImportersFromPreventManualShrinkwrapChanges?: boolean;\n")))}m.isMDXComponent=!0}}]);