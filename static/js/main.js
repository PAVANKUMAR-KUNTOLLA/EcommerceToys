!function(e){function t(t){for(var n,i,c=t[0],l=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={1:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({2:"LoginView",3:"ProductView",4:"RegisterView",5:"ResetPasswordView",6:"cart.page",7:"checkout.page",8:"favourite.page",9:"home.page",10:"products.page",11:"profile.page"}[e]||e)+".js"}(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/js/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([0,0]),r()}({"+6Or":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=(r("vDqi"),r("z6Y5")),i=r("NZDO"),c=r("PQzt"),l=r("Gqia"),u=r("X78M"),s=(r("3/L5"),r("20nU"),r("V4z/"));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=Object(u.a)((function(e){var t;return{productCard:(t={width:"100%",height:"100%"},d(t,e.breakpoints.up("sm"),{width:"50%",height:"50%"}),d(t,e.breakpoints.up("md"),{width:"100%",height:"100%"}),d(t,e.breakpoints.up("lg"),{width:"80%",height:"80%"}),d(t,e.breakpoints.down("md"),{marginBottom:"10px",width:"100%",height:"auto"}),t),productImageBox:{position:"relative"},productImage:{height:"100%",width:"100%",objectFit:"cover",cursor:"pointer"},productCategory:d({width:"100%",textAlign:"center",justifyContent:"center",textTransform:"uppercase",lineHeight:"35px",fontSize:"21px",color:"#222222",fontWeight:"600"},e.breakpoints.down("md"),{lineHeight:"24px",fontSize:"19px",textAlign:"center"})}}));t.a=function(e){var t=e.product,r=f(),n=Object(s.p)();return a.a.createElement(o.a,{item:!0,className:r.productCard},a.a.createElement(i.a,{component:"a",className:r.productImageBox,sx:{textDecoration:"none"}},a.a.createElement(c.a,{variant:"square",src:"https://".concat(t.image_0),alt:t.title,className:r.productImage,onClick:function(){return e=t.category,void n("/app/products/categories/".concat(e));var e}}),a.a.createElement(l.a,{variant:"h3",className:r.productCategory},t.category)))}},0:function(e,t,r){r("201c"),e.exports=r("Kme2")},"20nU":function(e,t,r){"use strict";t.a={basename:"",defaultPath:"/app/home",defaultPathID:"home",fontFamily:"Roboto",textTransform:"uppercase",fontSize:15,color:"#474747",backgroundColor:"#fff",borderColor:"#ede6df",borderRadius:10,borderRadiusSmall:4,gridSpacing:3,gridSpacingSm:2}},"3/L5":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={paper:"#ffffff",darkPaper:"#000000",primaryLight:"#4c87df",primaryMain:"#2069D8",primaryDark:"#164997",primary200:"#91cfff",primary800:"#206ad8",secondaryLight:"#f7b74f",secondaryMain:"#F5A623",secondaryDark:"#ab7418",secondary200:"#fdf39b",secondary800:"#f5a523",successLight:"#81c784",successMain:"#2e7d32",successDark:"#1b5e20",success200:"#a5d6a7",success800:"#859303",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eeeeee",grey300:"#e0e0e0",grey400:"#bdbdbd",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey800:"#333333",grey900:"#212121"}},"7QZ+":function(e,t,r){"use strict";t.a={login:"/api/v1/login/",signup:"/api/v1/signup/",logout:"/api/v1/logout/",profile:"/api/v1/profile/",forgotPassword:"/api/v1/forgot-password/",resetPassword:"/api/v1/reset-password/",notification:"/api/v1/notification/",products:"/api/v1/products/",edit_product:"/api/v1/edit_product/",record_visit:"/api/v1/record_visit_history/",place_order:"/api/v1/place_order/"}},Kme2:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("EbEg"),i=r("V4z/"),c=r("4WJT"),l=r("X78M"),u=Object(l.a)((function(e){return{root:{position:"fixed",top:0,left:0,zIndex:1301,width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),s=function(){var e=u();return a.a.createElement("div",{className:e.root},a.a.createElement(c.a,{color:"primary"}))},p=function(e){return function(t){return a.a.createElement(n.Suspense,{fallback:a.a.createElement(s,null)},a.a.createElement(e,t))}},d=r("nxaZ"),f=r("gXYC"),m=r("NZDO"),g=r("QOiN"),b=r("Gqia"),h=r("WNlj"),y=r("5I82"),x=r("MGIy"),v=r("EfzM"),O=r("Nb3f"),j=r.n(O),S=r("OGDC"),E=r("OwGX"),w=r.n(E),k=r("6KpO"),P=r.n(k),C=r("kUWD"),z=r.n(C),M=r("6/87"),T=r.n(M),L=r("yGo1"),I=r.n(L),D=r("Vn7y"),A=r("UnQg"),W=r("6EZ2"),B=r("L9aa"),R=r("H9le"),N=r("A+QN"),_=r("ZvkB"),H=r("8lqF"),F=r("mkGA"),G=r("T4Ez"),Q=r("PQzt"),q=r("qoR1"),V=r.n(q),Z=r("SuCx"),U=r.n(Z),J=r("btJ3"),K=r.n(J),Y=r("7QZ+"),X=r("/MKj"),$=r("axfC");function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(this,arguments)}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==ee(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==ee(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===ee(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ce=240,le=Object(l.a)((function(e){return{title:ie({textTransform:"uppercase",color:"#3e4152",fontSize:"20px",fontWeight:"500",textAlign:"left",marginTop:"10px",letterSpacing:"1px",paddingLeft:"10px"},e.breakpoints.down("sm"),{fontSize:"16px",letterSpacing:"0.5px"}),logo:ie({height:"60px",width:"250px"},e.breakpoints.down("sm"),{height:"40px",width:"160px",marginLeft:"-20px"})}})),ue=(Object(D.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,r=e.open;return oe({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(ce,"px")},r&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),Object(D.a)(f.a,{shouldForwardProp:function(e){return"open"!==e&&"isfullwidth"!==e}})((function(e){var t=e.theme,r=e.open,n=e.isfullwidth;return oe({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},r&&{width:n?"100%":"calc(100% - ".concat(ce,"px)"),marginLeft:n?0:"".concat(ce,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})}))),se=Object(D.a)("div")((function(e){var t=e.theme;return oe(oe({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-start",paddingLeft:"20px",paddingTop:"20px",paddingBottom:"20px"})}));function pe(e){e.handleChange,Object(A.a)();var t,r=Object(i.r)(),o=re(a.a.useState(!1),2),c=o[0],l=o[1],u=re(a.a.useState(!1),2),s=u[0],p=u[1],f=re(Object(n.useState)(""),2),h=f[0],y=f[1],O=(Object(X.c)((function(e){return e.products.searchQuery})),Object(X.c)((function(e){return e.products.isSearchOn}))),E=(Object(X.c)((function(e){return e.products.isSearchLoading})),re(a.a.useState(!1),2)),k=E[0],C=E[1],M=Object(i.p)(),L=Object(X.b)(),I=re(Object(n.useState)({id:"",name:"",email:"",orderHistory:[],visitHistory:[]}),2),D=I[0],q=I[1],Z={Home:a.a.createElement(P.a,null),Products:a.a.createElement(K.a,null),Favourites:a.a.createElement(z.a,null),Cart:a.a.createElement(T.a,null)},J=le(),ee=function(e){M("/app/".concat(e.toLowerCase())),l(!1)},ne=function(){if(p(!1),C(!1),y(""),L(Object($.e)("")),L(Object($.d)(!1)),L(Object($.b)(!0)),r.category){var e={category:r.category};Object(d.c)(Y.a.products,e).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),L(Object($.c)(null==r?void 0:r.data)),L(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),L(Object($.b)(!1))}))}else Object(d.b)(Y.a.products).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),L(Object($.c)(null==r?void 0:r.data)),L(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),L(Object($.b)(!1))}))},ae=function(e){var t=document.getElementById("persistent-drawer");c&&t&&!t.contains(e.target)&&!e.target.closest("#menu-icon")&&l(!1)};return Object(n.useEffect)((function(){return L(Object($.b)(!0)),Object(d.b)(Y.a.profile).then((function(e){var t=e.status,r=e.data;if(200===t){console.log("data",r);var n=null==r?void 0:r.data;q((function(e){return oe(oe({},e),{},{id:n.id,name:n.name,email:n.email,orderHistory:n.orders,visitHistory:n.products})})),L(Object($.b)(!1))}})).catch((function(e){console.log("Error",e),L(Object($.b)(!1))})),document.addEventListener("mousedown",ae),function(){document.removeEventListener("mousedown",ae)}}),[c]),a.a.createElement(m.a,{sx:{display:"flex"}},a.a.createElement(B.a,null),a.a.createElement(ue,{position:"fixed",open:c,isfullwidth:k,sx:{backgroundColor:"dodgerblue"}},a.a.createElement(g.a,null,a.a.createElement(S.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",sx:oe({mr:2},c&&{display:"none"})},a.a.createElement(V.a,{id:"menu-icon"})),s?a.a.createElement(m.a,{sx:{flexGrow:1,width:"100%"}},a.a.createElement(x.a,{value:h,placeholder:"Search here",onChange:function(e){y(e.target.value),!e.target.value&&O&&ne()},InputProps:{startAdornment:a.a.createElement(v.a,{position:"start"},a.a.createElement(j.a,null)),endAdornment:a.a.createElement(v.a,{position:"end"},a.a.createElement(S.a,{color:"inherit",onClick:ne},a.a.createElement(w.a,null)))},fullWidth:!0,onKeyDown:function(e){"Enter"===e.key&&h&&function(){L(Object($.b)(!0)),L(Object($.d)(!0)),L(Object($.e)(h));var e={search:h};Object(d.c)(Y.a.products,e).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),L(Object($.c)(null==r?void 0:r.data)),L(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),L(Object($.b)(!1))}))}()}})):a.a.createElement(a.a.Fragment,null,a.a.createElement(Q.a,{className:J.logo,variant:"square",src:"/static/img/super-heros-logo.png"}),a.a.createElement(m.a,{sx:{flexGrow:1}}),a.a.createElement(m.a,{sx:{display:"flex",alignItems:"center"}},a.a.createElement(S.a,{color:"inherit","aria-label":"search",onClick:function(){p(!0),C(!0)},sx:{mx:.5}},a.a.createElement(j.a,null)),a.a.createElement(S.a,{color:"inherit",sx:{mx:.5},onClick:function(){return ee("favourites")}},a.a.createElement(z.a,null)),a.a.createElement(S.a,{color:"inherit",sx:{mx:.5},onClick:function(){return ee("cart")}},a.a.createElement(T.a,null)),a.a.createElement(S.a,{color:"inherit",sx:{mx:.5},onClick:function(){return ee("profile")}},a.a.createElement(U.a,null)))))),a.a.createElement(W.a,{sx:{width:ce,flexShrink:0,"& .MuiDrawer-paper":{width:ce,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:c,id:"persistent-drawer"},a.a.createElement(se,null,a.a.createElement(m.a,{className:J.account},D.name&&a.a.createElement(Q.a,te({},1===(t=D.name).split(" ").length?{children:"".concat(t.split(" ")[0][0])}:{children:"".concat(t.split(" ")[0][0]).concat(t.split(" ")[1][0])},{sx:{width:"75px",height:"75px",fontSize:"24px",color:"white",backgroundColor:"rgb(0,76,153,0.8)"},onClick:function(){return ee("profile")}})),a.a.createElement(b.a,{className:J.title},D.name))),a.a.createElement(N.a,null),a.a.createElement(R.a,null,["Home","Products","Favourites","Cart"].map((function(e){return a.a.createElement(_.a,{key:e,disablePadding:!0,onClick:function(){return ee(e)}},a.a.createElement(H.a,null,a.a.createElement(F.a,null,Z[e]),a.a.createElement(G.a,{primary:e})))})))))}var de=r("D3cv");r("+6Or");function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ge=Object(l.a)((function(e){return{inputLg:{"& input":{padding:"20px",fontSize:"18px",lineHeight:"27px"}},globalSearch:{marginTop:"10px",marginBottom:"10px",marginLeft:"30px",marginRight:"10px",paddingRight:0,width:300},searchIcon:{color:"rgba(52, 49, 76, 0.7)"}}})),be=Object(l.a)((function(e){return{button:{color:"white",marginRight:e.spacing(2)},typography:{marginLeft:e.spacing(1),color:"#ffffff"}}})),he=function(){var e=fe(Object(n.useState)(""),2),t=e[0],r=e[1],o=Object(X.c)((function(e){return e.products.searchQuery})),c=ge(),l=be(),u=Object(i.p)(),s=Object(X.b)(),p=Object(i.r)(),O=Object(A.a)(),E=Object(de.a)(O.breakpoints.down("md")),k=Object(X.c)((function(e){return e.products.isSearchOn})),C=(Object(X.c)((function(e){return e.products.isSearchLoading})),function(){if(r(""),s(Object($.e)("")),s(Object($.d)(!1)),s(Object($.b)(!0)),p.category){var e={category:p.category};Object(d.c)(Y.a.products,e).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),s(Object($.c)(null==r?void 0:r.data)),s(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),s(Object($.b)(!1))}))}else Object(d.b)(Y.a.products).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),s(Object($.c)(null==r?void 0:r.data)),s(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),s(Object($.b)(!1))}))});return a.a.createElement(f.a,{position:"static",sx:{backgroundColor:"dodgerblue"}},a.a.createElement(h.a,{maxWidth:"xl"},a.a.createElement(g.a,{disableGutters:!0},a.a.createElement(Q.a,{src:"/static/img/super-heros-logo.png",sx:{height:"60px",width:"250px"}}),E&&a.a.createElement(pe,null),!E&&a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{maxWidth:"sm",sx:{display:"flex",alignSelf:"end",marginLeft:"auto",marginRight:"0px"}},a.a.createElement(x.a,{className:c.globalSearch,name:"globalSearch",value:t,placeholder:"Search here",onChange:function(e){r(e.target.value),!e.target.value&&k&&C()},InputProps:{startAdornment:a.a.createElement(v.a,{position:"start"},a.a.createElement(j.a,{className:c.searchIcon})),endAdornment:a.a.createElement(v.a,{position:"end"},o&&a.a.createElement(S.a,{color:"inherit",onClick:C},a.a.createElement(w.a,null)))},onKeyDown:function(e){"Enter"===e.key&&t&&function(){s(Object($.b)(!0)),s(Object($.d)(!0)),s(Object($.e)(t));var e={search:t};Object(d.c)(Y.a.products,e).then((function(e){var t=e.status,r=e.data;200===t&&(console.log("data",r),s(Object($.c)(null==r?void 0:r.data)),s(Object($.b)(!1)))})).catch((function(e){console.log("Error",e),s(Object($.b)(!1))}))}()}}),[{icon:a.a.createElement(P.a,null),label:"Home"},{icon:a.a.createElement(z.a,null),label:"Favourites"},{icon:a.a.createElement(T.a,null),label:"Cart"},{icon:a.a.createElement(I.a,null),label:"Profile"}].map((function(e,t){return a.a.createElement(y.a,{key:t,className:l.button,onClick:function(){return t=e.label.toLowerCase(),r="/app/".concat(t),void u(r);var t,r}},e.icon,a.a.createElement(b.a,{variant:"body2",className:l.typography},e.label))})))))))};r("+YYp"),r("bg/w");var ye=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(he,null),a.a.createElement(i.b,null))},xe=r("20nU"),ve=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"JYAV"))}))),Oe=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"2j0d"))}))),je=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"CJPK"))}))),Se=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"3kTt"))}))),Ee=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"o1Vc"))}))),we=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"niUJ"))}))),ke=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"2C1f"))}))),Pe=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"1ZOe"))}))),Ce=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"SuzI"))}))),ze=p(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"ZF52"))}))),Me=function(){return a.a.createElement(i.e,null,a.a.createElement(i.c,{path:"/",element:a.a.createElement(i.a,{replace:!0,to:xe.a.defaultPath})}),a.a.createElement(i.c,{path:"app",element:a.a.createElement(d.a,null,a.a.createElement(ye,null))},a.a.createElement(i.c,{path:"home",element:a.a.createElement(ve,null)}),a.a.createElement(i.c,{path:"products",element:a.a.createElement(Oe,null)}),a.a.createElement(i.c,{path:"products/categories/:category",element:a.a.createElement(Oe,null)}),a.a.createElement(i.c,{path:"products/:id/:title",element:a.a.createElement(je,null)}),a.a.createElement(i.c,{path:"favourites",element:a.a.createElement(Se,null)}),a.a.createElement(i.c,{path:"checkout",element:a.a.createElement(we,null)}),a.a.createElement(i.c,{path:"cart",element:a.a.createElement(Ee,null)}),a.a.createElement(i.c,{path:"profile",element:a.a.createElement(ke,null)})),a.a.createElement(i.c,{path:"/login",element:a.a.createElement(Pe,null)}),a.a.createElement(i.c,{path:"/register",element:a.a.createElement(Ce,null)}),a.a.createElement(i.c,{path:"/reset-password/:uidb64/:token",element:a.a.createElement(ze,null)}))},Te=r("b4iY"),Le=r("WfXV"),Ie=r("sD0r"),De=function(e){return{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:e.customization.borderRadius+"px"}}},MuiButton:{styleOverrides:{sizeMedium:{paddingTop:"8px",paddingBottom:"9px"}}},MuiTableCell:{styleOverrides:{root:{borderColor:"#e7ddd1",padding:"18px 15px"}}},MuiTablePagination:{styleOverrides:{root:{borderTop:"1px solid ".concat(e.customization.borderColor)},selectLabel:{marginTop:0,marginBottom:0},displayedRows:{marginTop:0,marginBottom:0},toolbar:{paddingTop:"5px"}}},MuiAppBar:{styleOverrides:{root:{padding:"5px 0",boxShadow:"rgb(0 0 0 / 6%) 0px 3px 8px"}}},MuiCardHeader:{styleOverrides:{root:{color:e.colors.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary}}}},MuiOutlinedInput:{styleOverrides:{root:{background:e.colors.grey50,borderRadius:e.customization.borderRadius+"px","& .MuiOutlinedInput-notchedOutline":{borderColor:e.colors.grey400},"&:hover $notchedOutline":{borderColor:e.colors.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:e.colors.grey50,padding:"15.5px 14px",borderRadius:e.customization.borderRadius+"px","&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:e.customization.borderRadius+"px"}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:e.colors.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:e.colors.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:e.colors.primaryMain,background:e.colors.primary100}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:e.colors.grey700}}},MuiMenuItem:{styleOverrides:{root:{minHeight:"25px"}}},MuiDialogTitle:{styleOverrides:{root:{fontWeight:600,fontSize:"16px",lineHeight:"22px",color:e.colors.primaryMain}}},MuiAutocomplete:{styleOverrides:{root:{position:"relative"},tag:{maxWidth:"100px"}}}}},Ae=r("3/L5"),We=function(e){return{common:{black:e.colors.darkPaper,white:e.colors.paper},primary:{main:e.colors.primaryMain,light:e.colors.primaryLight,dark:e.colors.primaryDark},secondary:{main:e.colors.secondaryMain,light:e.colors.secondaryLight,dark:e.colors.secondaryDark},error:{main:e.colors.errorMain,light:e.colors.errorLight,dark:e.colors.errorDark},warning:{main:e.colors.warningMain,light:e.colors.warningLight,dark:e.colors.warningDark},success:{main:e.colors.successMain,light:e.colors.successLight,dark:e.colors.successDark},grey:{50:e.colors.grey50,100:e.colors.grey100,500:e.colors.grey500,600:e.colors.grey600,700:e.colors.grey700,800:e.colors.grey800,900:e.colors.grey900},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary},background:{paper:e.colors.paper,default:e.backgroundDefault},action:{hover:e.customization.backgroundColor,focus:e.colors.secondaryDark}}},Be=function(e){return{fontFamily:e.customization.fontFamily,fontSize:e.customization.fontSize,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem",letterSpacing:"0.2px"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500,letterSpacing:"0.2px"},h4:{fontSize:"1rem",color:e.heading,fontWeight:600,letterSpacing:"0.2px"},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600,letterSpacing:"0.2px"},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700,letterSpacing:"0.2px"},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700,letterSpacing:"0.2px"},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark,letterSpacing:"0.2px"},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary,letterSpacing:"0.2px"},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:8,marginBottom:8,"& > label":{top:"23px",left:0,color:e.grey500,'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:"#f7f6f6",width:"100%",minHeight:"calc(100vh - 88px)",flexGrow:1,padding:"20px",marginTop:"88px",marginRight:"20px",letterSpacing:"0.2px",borderRadius:e.customization.borderRadius+"px"},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}},Re=function(){var e={colors:Ae.a,heading:Ae.a.grey900,paper:Ae.a.paper,backgroundDefault:xe.a.backgroundColor,darkTextPrimary:Ae.a.grey800,darkTextSecondary:Ae.a.grey800,textDark:Ae.a.grey900,menuSelected:Ae.a.secondaryDark,menuSelectedBack:Ae.a.secondaryLight,divider:xe.a.borderColor,customization:xe.a};return Object(Ie.a)({direction:"ltr",breakpoints:{values:{xs:0,sm:768,md:1024,lg:1280,xl:1400}},components:De(e),palette:We(e),typography:Be(e),shadows:["rgba(99, 99, 99, 0.2) 0px 2px 8px 0px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(17, 17, 26, 0.09) 0px 4px 16px, rgba(17, 17, 26, 0.09) 0px 8px 32px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px"]})},Ne=function(){return a.a.createElement(Le.a,{injectFirst:!0},a.a.createElement(Te.a,{theme:Re()},a.a.createElement(B.a,null),a.a.createElement(Me,null)))},_e=(r("+eM2"),r("SOjZ")),He=r("i7Pf");var Fe=Object(He.b)({name:"app",initialState:{},reducers:{}});!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(Fe.actions);var Ge=Fe.reducer,Qe=Object(He.a)({reducer:{app:Ge,products:$.a},middleware:function(e){return e()}}),qe=document.getElementById("root");Object(o.createRoot)(qe).render(a.a.createElement(X.a,{store:Qe},a.a.createElement(_e.a,null,a.a.createElement(Ne,null))))},axfC:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r("i7Pf"),a=(r("LvDl"),Object(n.b)({name:"products",initialState:{products:[],favourites:[],cart:[],searchQuery:"",isSearchOn:!1,isLoadingSpin:!1},reducers:{setProducts:function(e,t){var r=t.payload;e.products=r,e.favourites=r.filter((function(e,t){return!0===e.is_favourite})),e.cart=r.filter((function(e,t){return!0===e.is_item_in_cart}))},setSearch:function(e,t){e.isSearchOn=t.payload},setSearchQuery:function(e,t){e.searchQuery=t.payload},setLoadingSpin:function(e,t){e.isLoadingSpin=t.payload}}})),o=a.actions,i=o.setProducts,c=o.setSearch,l=o.setSearchQuery,u=o.setLoadingSpin;t.a=a.reducer},nxaZ:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r("q1tI"),a=r.n(n),o=r("V4z/"),i=r("vDqi"),c=r.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=function(e){var t=e.children;return!!localStorage.getItem("token")?t:a.a.createElement(o.a,{to:"/login"})};var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=localStorage.getItem("token");return c()(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({method:"POST",url:e,headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)},data:t},r))},d=function(e){var t=localStorage.getItem("token");return c()({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Token ".concat(t)}})}}});
//# sourceMappingURL=main.js.map