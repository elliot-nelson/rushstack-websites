"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[16752],{50158:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(d,".").concat(u)]||c[u]||o[u]||i;return a?n.createElement(g,m(m({ref:t},s),{},{components:a})):n.createElement(g,m({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var p=2;p<i;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},64762:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=a(74834),r=a(28265),i=(a(46393),a(50158)),m=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},d=void 0,p={unversionedId:"api/ts-command-line.commandlineparameterprovider",id:"api/ts-command-line.commandlineparameterprovider",isDocsHomePage:!1,title:"ts-command-line.commandlineparameterprovider",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider",source:"@site/docs/api/ts-command-line.commandlineparameterprovider.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparameterprovider",permalink:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"CommandLineParameterProvider class",id:"commandlineparameterprovider-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],o={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")),(0,i.kt)("h2",{id:"commandlineparameterprovider-class"},"CommandLineParameterProvider class"),(0,i.kt)("p",null,"This is the common base class for CommandLineAction and CommandLineParser that provides functionality for defining command-line parameters."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class CommandLineParameterProvider \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommandLineParameterProvider")," class."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.parameters"},"parameters")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameter"},"CommandLineParameter")," ",">"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns a collection of the parameters that were defined for this object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.parametersprocessed"},"parametersProcessed")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Informs the caller if the argparse data has been processed into parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.remainder"},"remainder")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineremainder"},"CommandLineRemainder")," ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"CommandLineParameterProvider.defineCommandLineRemainder()")," was called, this object captures any remaining command line arguments after the recognized portion.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"defineChoiceListParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum). The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"defineChoiceParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"defineCommandLineRemainder(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a rule that captures any remaining command line arguments after the recognized portion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.defineflagparameter"},"defineFlagParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line switch whose boolean value is true if the switch is provided, and false otherwise.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.defineintegerlistparameter"},"defineIntegerListParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is an integer. The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.defineintegerparameter"},"defineIntegerParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is an integer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definestringlistparameter"},"defineStringListParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is a single text string. The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.definestringparameter"},"defineStringParameter(definition)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is a single text string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getchoicelistparameter"},"getChoiceListParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineChoiceListParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getchoiceparameter"},"getChoiceParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineChoiceParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getflagparameter"},"getFlagParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineFlagParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getintegerlistparameter"},"getIntegerListParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineIntegerParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getintegerparameter"},"getIntegerParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineIntegerParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getparameterstringmap"},"getParameterStringMap()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns a object which maps the long name of each parameter in this.parameters to the stringified form of its value. This is useful for logging telemetry, but it is not the proper way of accessing parameters or their values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getstringlistparameter"},"getStringListParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineStringListParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.getstringparameter"},"getStringParameter(parameterLongName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineStringParameter with the specified long name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.ondefineparameters"},"onDefineParameters()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its command-line parameters, e.g. by calling defineFlagParameter().")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack-websites/undefined/pages/api/ts-command-line.commandlineparameterprovider.renderhelptext"},"renderHelpText()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Generates the command-line help text.")))))}c.isMDXComponent=!0}}]);