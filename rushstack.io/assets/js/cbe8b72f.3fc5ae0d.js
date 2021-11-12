"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[62575],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78425:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"api/heft.metricscollectorhooks",id:"api/heft.metricscollectorhooks",isDocsHomePage:!1,title:"heft.metricscollectorhooks",description:"Home &gt; @rushstack/heft &gt; MetricsCollectorHooks",source:"@site/docs/api/heft.metricscollectorhooks.md",sourceDirName:"api",slug:"/api/heft.metricscollectorhooks",permalink:"/rushstack-websites/undefined/pages/api/heft.metricscollectorhooks",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"MetricsCollectorHooks class",id:"metricscollectorhooks-class",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/heft.metricscollectorhooks"},"MetricsCollectorHooks")),(0,o.kt)("h2",{id:"metricscollectorhooks-class"},"MetricsCollectorHooks class"),(0,o.kt)("p",null,"Tap these hooks to record build metrics, to a file, for example."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class MetricsCollectorHooks \n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/heft.metricscollectorhooks.flush"},"flush")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,o.kt)("td",{parentName:"tr",align:null},"This hook is called when collected metrics should be flushed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/heft.metricscollectorhooks.flushandteardown"},"flushAndTeardown")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,o.kt)("td",{parentName:"tr",align:null},"This hook is called when collected metrics should be flushed and no more metrics will be collected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/heft.metricscollectorhooks.recordmetric"},"recordMetric")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"SyncHook","<","string, ",(0,o.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/heft.imetricsdata"},"IMetricsData")," ",">"),(0,o.kt)("td",{parentName:"tr",align:null},"This hook is called when a metric is recorded.")))))}d.isMDXComponent=!0}}]);