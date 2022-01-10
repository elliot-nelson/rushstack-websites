"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[80476],{50158:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(46393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),v=o,b=m["".concat(l,".").concat(v)]||m[v]||u[v]||a;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(61731),o=t(70396),a=(t(46393),t(50158)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/api/node-core-library.iexecutableresolveoptions.environmentmap",id:"pages/api/node-core-library.iexecutableresolveoptions.environmentmap",title:"node-core-library.iexecutableresolveoptions.environmentmap",description:"Home &gt; @rushstack/node-core-library &gt; IExecutableResolveOptions &gt; environmentMap",source:"@site/docs/pages/api/node-core-library.iexecutableresolveoptions.environmentmap.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.iexecutableresolveoptions.environmentmap",permalink:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iexecutableresolveoptions.environmentmap",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"IExecutableResolveOptions.environmentMap property",id:"iexecutableresolveoptionsenvironmentmap-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://rushstack.io/pages/pages/api/node-core-library.iexecutableresolveoptions.environmentmap/"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iexecutableresolveoptions"},"IExecutableResolveOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack-websites/rushstack.io/pages/api/node-core-library.iexecutableresolveoptions.environmentmap"},"environmentMap")),(0,a.kt)("h2",{id:"iexecutableresolveoptionsenvironmentmap-property"},"IExecutableResolveOptions.environmentMap property"),(0,a.kt)("p",null,"The environment variables for the child process."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"environmentMap?: EnvironmentMap;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"environmentMap")," are both omitted, then ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env")," will be used. If ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"environmentMap")," cannot both be specified."))}m.isMDXComponent=!0}}]);