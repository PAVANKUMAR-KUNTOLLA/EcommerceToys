(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2C1f":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("uVCN"),o=n("WNlj"),l=n("NZDO"),c=n("PQzt"),u=n("Gqia"),m=n("X78M"),s=n("V4z/"),f=n("GOrD"),p=n("J1WE"),b=n("xqzF"),g=n("ZrSb"),d=n("PjUp"),y=n("VMHA"),h=n("G43+"),x=n("7QZ+"),E=n("nxaZ"),O=n("axfC"),j=n("/MKj"),v=n("cuOD"),w=n.n(v);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===S(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=Object(m.a)((function(e){return{mainBlock:{marginTop:"50px",justifyContent:"center",alignItems:"center",alignSelf:"center",textAlign:"center",width:"100%"},account:H({justifyContent:"center"},e.breakpoints.down("md"),{maxWidth:"100%",marginBottom:"10px"}),title:H({textTransform:"uppercase",color:"#3e4152",fontSize:"28px",fontWeight:"700",marginTop:"34px",marginBottom:"10px",letterSpacing:"1.5px"},e.breakpoints.down("sm"),{marginTop:"0",fontSize:"20px",letterSpacing:"0.5px"}),subTitle:H({textTransform:"uppercase",color:"#3e4152",fontSize:"20px",fontWeight:"500",textAlign:"left",marginTop:"24px",letterSpacing:"1px"},e.breakpoints.down("sm"),{fontSize:"16px",letterSpacing:"0.5px"})}}));t.default=function(){var e,t=Object(s.p)(),n=A(Object(r.useState)(),2),m=n[0],v=n[1],S=W(),P=Object(j.b)(),C=A(Object(r.useState)({id:"",name:"",email:"",orderHistory:[],visitHistory:[]}),2),H=C[0],z=C[1],N=function(e,n){console.log(n);t("/app/products/".concat(e,"/").concat(n.replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"")))};return Object(r.useEffect)((function(){m&&(m.scrollTop=100)}),[m]),Object(r.useEffect)((function(){P(Object(O.b)(!0)),Object(E.b)(x.a.profile).then((function(e){var t=e.status,n=e.data;if(200===t){console.log("data",n);var r=null==n?void 0:n.data;z((function(e){return k(k({},e),{},{id:r.id,name:r.name,email:r.email,orderHistory:r.order_history,visitHistory:r.history})}))}})).catch((function(e){console.log("Error",e)}))}),[]),a.a.createElement(i.a,{title:"Profile"},a.a.createElement(o.a,{maxWidth:"md",className:S.mainBlock},a.a.createElement(l.a,{className:S.account},H.name&&a.a.createElement(c.a,T({},1==(e=H.name).split(" ").length?{children:"".concat(e.split(" ")[0][0])}:{children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])},{sx:{width:"100px",height:"100px",fontSize:"48px",color:"white",backgroundColor:"rgb(0,76,153,0.8)",marginLeft:"auto",marginRight:"auto"}})),a.a.createElement(u.a,{className:S.title},H.name)),a.a.createElement(l.a,{maxWidth:"sm",sx:{marginLeft:"auto",marginRight:"auto"}},a.a.createElement(u.a,{className:S.subTitle},"Order History"),a.a.createElement(g.a,{component:h.a,sx:{marginTop:"35px",maxHeight:"350px"}},a.a.createElement(w.a,{containerRef:function(e){v(e)}},a.a.createElement(f.a,{sx:{maxWidth:"sm"},"aria-label":"simple table"},a.a.createElement(d.a,null,a.a.createElement(y.a,null,a.a.createElement(b.a,{align:"left"},"Title"),a.a.createElement(b.a,{align:"left"},"Quantity"),a.a.createElement(b.a,{align:"left"},"Date"))),a.a.createElement(p.a,null,H.orderHistory.map((function(e){return a.a.createElement(y.a,{key:e.id,sx:{"&:last-child td, &:last-child th":{border:0},cursor:"pointer"},onClick:function(){return N(e.id,e.title)}},a.a.createElement(b.a,{component:"th",scope:"row"},e.title),a.a.createElement(b.a,{align:"left"},e.quantity),a.a.createElement(b.a,{align:"left"},e.order_date))}))))))),a.a.createElement(l.a,{maxWidth:"sm",sx:{marginLeft:"auto",marginRight:"auto"}},a.a.createElement(u.a,{className:S.subTitle},"Recently Visited"),a.a.createElement(g.a,{component:h.a,sx:{marginTop:"20px",maxHeight:"350px"}},a.a.createElement(w.a,{containerRef:function(e){v(e)}},a.a.createElement(f.a,{sx:{maxWidth:"md"},"aria-label":"simple table"},a.a.createElement(d.a,null,a.a.createElement(y.a,null,a.a.createElement(b.a,{align:"left"},"Title"),a.a.createElement(b.a,{align:"left"},"Count"),a.a.createElement(b.a,{align:"left"},"Viewed_at"))),a.a.createElement(p.a,null,H.visitHistory.map((function(e){return a.a.createElement(y.a,{key:e.id,sx:{"&:last-child td, &:last-child th":{border:0},cursor:"pointer"},onClick:function(){return N(e.id,e.title)}},a.a.createElement(b.a,{component:"th",scope:"row"},e.title),a.a.createElement(b.a,{align:"left"},e.view_count),a.a.createElement(b.a,{align:"left"},e.visited_at))})))))))))}}}]);
//# sourceMappingURL=profile.page.js.map