"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[26211],{50158:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=u(t),m=a,f=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59524:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return h}});var r=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",id:"api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",isDocsHomePage:!1,title:"rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",description:"Home &gt; @microsoft/rush-lib &gt; PnpmOptionsConfiguration &gt; preventManualShrinkwrapChanges",source:"@site/docs/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges.md",sourceDirName:"api",slug:"/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",permalink:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"PnpmOptionsConfiguration.preventManualShrinkwrapChanges property",id:"pnpmoptionsconfigurationpreventmanualshrinkwrapchanges-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:l};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges/"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges"},"preventManualShrinkwrapChanges")),(0,i.kt)("h2",{id:"pnpmoptionsconfigurationpreventmanualshrinkwrapchanges-property"},"PnpmOptionsConfiguration.preventManualShrinkwrapChanges property"),(0,i.kt)("p",null,"If true, then ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," will report an error if manual modifications were made to the PNPM shrinkwrap file without running ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," afterwards."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly preventManualShrinkwrapChanges: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This feature protects against accidental inconsistencies that may be introduced if the PNPM shrinkwrap file (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ) is manually edited. When this feature is enabled, ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," will write a hash of the shrinkwrap contents to repo-state.json, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," will validate the hash. Note that this does not prohibit manual modifications, but merely requires ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," be run afterwards, ensuring that PNPM can report or repair any potential inconsistencies."),(0,i.kt)("p",null,"To temporarily disable this validation when invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," , use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--bypass-policy")," command-line parameter."),(0,i.kt)("p",null,"The default value is false."))}h.isMDXComponent=!0}}]);