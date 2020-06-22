(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(11),a=(r(0),r(183)),i={id:"odp-service-catalog",title:"ODP Service Catalog"},c={id:"archive/odp-service-catalog",isDocsHomePage:!1,title:"ODP Service Catalog",description:"Background and requirements",source:"@site/../docs/archive/odp-service-catalog.md",permalink:"/docs/archive/odp-service-catalog",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/archive/odp-service-catalog.md"},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"background-and-requirements"},"Background and requirements"),Object(a.b)("p",null,"The Open Developer Platform (ODP) is - as it stands today - a loose collection of services and tools that enable collaborative open source software development across FINOS members (and the financial services industry at large)."),Object(a.b)("p",null,"The ODP Working Group allows build automation vendors to contribute services to ODP, assuming that:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The ODP Working Group identifies a need/requirement for FINOS members"),Object(a.b)("li",{parentName:"ol"},"One or more FINOS members confirm their interest to use the service via ODP and have access to it"),Object(a.b)("li",{parentName:"ol"},"A vendor representative joins the ODP Working Group, to help deploying and integrating the service with the existing ODP platform")),Object(a.b)("p",null,"Using a containerised architecture for the ODP hosted services could be a good technical track to investigate, given that:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Red Hat - one of FDX Program sponsors - provides Open Shift as runtime environment for ODP and has a lot of experience advocating containerised architectures"),Object(a.b)("li",{parentName:"ol"},"Drastically lowers the effort of service consumption and deployment, making FINOS operations easier and simplifying collaboration with vendors"),Object(a.b)("li",{parentName:"ol"},"Allows reusability of vendors services beyond ODP, adding value to consumers (who can use the same developer workflow also for proprietary or inner source code) and vendors (for their marketing activities)"),Object(a.b)("li",{parentName:"ol"},"Allows to track consumption, by ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.brianchristner.io/how-to-track-docker-hub-metrics/"}),"simply pulling data from Docker Hub"),"; this is an extremely valuable metric, which would be otherwise impossible to track effectively (across all platforms/eco-systems)")),Object(a.b)("p",null,"The ODP Service Catalog is basically the Docker Image repository that hosts all services used by ODP; OpenShift will provide a dashboard to all ODP users (this relates to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos-fdx/odp-wiki/wiki/%5Bepic%5D-finos-developer-identity"}),"FINOS Developer Identity epic"),") which will allow them to spin up services against the FINOS hosted repositories."),Object(a.b)("p",null,"This epic may be strictly related with the activity of the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/154534026/Containerized+Architectures+Working+Group"}),"Containerised Architectures Working Group"),"."))}p.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);