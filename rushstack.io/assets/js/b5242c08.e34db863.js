"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2056],{158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,m=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1777:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(4834),a=r(8265),o=(r(6393),r(158)),i=["components"],s={title:"rig.json"},c=void 0,l={unversionedId:"heft_configs/rig_json",id:"heft_configs/rig_json",isDocsHomePage:!1,title:"rig.json",description:"| | |",source:"@site/docs/heft_configs/rig_json.md",sourceDirName:"heft_configs",slug:"/heft_configs/rig_json",permalink:"/rushstack-websites/rushstack.io/pages/heft_configs/rig_json",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_configs/rig_json.md",tags:[],version:"current",frontMatter:{title:"rig.json"},sidebar:"docsSidebar",previous:{title:"node-service.json",permalink:"/rushstack-websites/rushstack.io/pages/heft_configs/node-service_json"},next:{title:"sass.json",permalink:"/rushstack-websites/rushstack.io/pages/heft_configs/sass_json"}},p=[{value:"Template",id:"template",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/rig.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../heft/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The "rig.json" file directs tools to look for their config files in an external package.\n// Documentation for this system: https://www.npmjs.com/package/@rushstack/rig-package\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",\n\n  /**\n   * (Required) The name of the rig package to inherit from.\n   * It should be an NPM package name with the "-rig" suffix.\n   */\n  "rigPackageName": "example-rig",\n  /**\n   * (Optional) Selects a config profile from the rig package.  The name must consist of\n   * lowercase alphanumeric words separated by hyphens, for example "sample-profile".\n   * If omitted, then the "default" profile will be used."\n   */\n  "rigProfile": "web-library"\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../heft/rig_packages"},"Using rig packages")," with Heft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation")))}f.isMDXComponent=!0}}]);