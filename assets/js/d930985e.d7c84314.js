(self.webpackChunkreact_native_datepicker_website=self.webpackChunkreact_native_datepicker_website||[]).push([[416],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),i=n(9443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9606:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var a=n(2122),i=n(9756),r=n(7294),o=n(3905),l=n(944),s=n(6010),c="tabItem_1uMI",p="tabItemActive_2DSg";var d=37,m=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,i=e.values,o=e.groupId,u=e.className,v=(0,l.Z)(),k=v.tabGroupChoices,h=v.setTabGroupChoices,f=(0,r.useState)(a),b=f[0],g=f[1],y=r.Children.toArray(e.children),w=[];if(null!=o){var N=k[o];null!=N&&N!==b&&i.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=i[n].value;g(a),null!=o&&(h(o,a),setTimeout((function(){var e,n,a,i,r,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&r<=s&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case m:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case d:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},u)},i.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var v=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},k=["components"],h={sidebar_position:1,title:"Installation",sidebar_label:"Installation"},f={unversionedId:"Getting-Started/installation",id:"Getting-Started/installation",isDocsHomePage:!1,title:"Installation",description:"Xcode >= 11.6",source:"@site/docs/Getting-Started/installation.mdx",sourceDirName:"Getting-Started",slug:"/Getting-Started/installation",permalink:"/rn-datepicker-website/docs/Getting-Started/installation",editUrl:"https://github.com/react-native-datetimepicker/datetimepicker/docs/Getting-Started/installation.mdx",version:"current",sidebar_label:"Installation",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",sidebar_label:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/rn-datepicker-website/docs/contributing"},next:{title:"Manual Installation",permalink:"/rn-datepicker-website/docs/Getting-Started/manual-installation"}},b=[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Windows",id:"windows",children:[]}],g={toc:b};function y(e){var t=e.components,n=(0,i.Z)(e,k);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Requirements")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Xcode >= 11.6"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Expo Users")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This module is part of Expo - ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/date-time-picker/"},"see docs"),". However, Expo SDK may not contain the latest version of the module and therefore, the newest features and bugfixes may not be available in Expo. Use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"expo install @react-native-community/datetimepicker")," (not ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),") to install this module - Expo will automatically install the latest version compatible with your Expo SDK (which may ",(0,o.kt)("em",{parentName:"p"},"not")," be the latest version of the module available)."))),(0,o.kt)(u,{defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(v,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-community/datetimepicker --save\n"))),(0,o.kt)(v,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-community/datetimepicker\n")))),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"If you are using RN >= 0.60, only run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pod-install"),". Then rebuild your project."),(0,o.kt)("p",null,"For RN < 0.60, you need to link the dependency using react-native link:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-native link @react-native-community/datetimepicker")," "),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx pod-install")," and rebuild your project."),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"No further steps required"),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("h4",{id:"add-the-datetimepickerwindows-project-to-your-solution"},"Add the DateTimePickerWindows project to your solution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the solution in Visual Studio 2019")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right-click solution icon in Solution Explorer > Add > Existing Project Select:  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"}," D:\\{pathToYourApp}\\node_modules\\@react-native-community\\datetimepicker\\windows\\DateTimePickerWindows\\DateTimePickerWindows.vcxproj")))),(0,o.kt)("h4",{id:"windowsmyappsln"},(0,o.kt)("strong",{parentName:"h4"},"windows/myapp.sln")),(0,o.kt)("p",null,"Add a reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTimePickerWindows")," to your main application project. From Visual Studio 2019:"),(0,o.kt)("p",null,"Right-click main application project > Add > Reference...\nCheck 'DateTimePickerWindows' from the 'Project > Solution' tab on the left."),(0,o.kt)("h4",{id:"pchh"},(0,o.kt)("strong",{parentName:"h4"},"pch.h")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},'#include "winrt/DateTimePicker.h"'),"."),(0,o.kt)("h4",{id:"appcpp"},(0,o.kt)("strong",{parentName:"h4"},"app.cpp")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageProviders().Append(winrt::DateTimePicker::ReactPackageProvider());")," before ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeComponent();"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Manual Instalation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check here for ",(0,o.kt)("a",{parentName:"p",href:"manual-installation"},"more")," information"))))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);