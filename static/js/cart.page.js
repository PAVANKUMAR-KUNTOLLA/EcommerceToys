(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{"5JSG":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("17x9"),i=n.n(o),c=n("NZDO"),l=n("Gqia"),u=n("6mjn"),s=function(e){var t=e.message;return a.a.createElement(c.a,{textAlign:"center",sx:{display:"flex",alignItems:"center",height:"100%",flexDirection:"column",justifyContent:"center"}},a.a.createElement(u.a,{strokeWidth:.5,width:80,height:80,color:"#cdcdcd"}),a.a.createElement(l.a,{variant:"h5",textAlign:"center",color:"inherit",sx:{fontWeight:500,mt:2,color:"#808594"}},t))};s.propTypes={message:i.a.string},s.defaultProps={message:"No data matching the selected search criteria"},t.a=s},"7Qib":function(e,t,n){"use strict";function r(e){if(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}return e}n.d(t,"a",(function(){return r}))},JMMV:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("vDqi"),n("V4z/")),i=n("kUWD"),c=n.n(i),l=n("DPzK"),u=n.n(l),s=n("z6Y5"),p=n("NZDO"),m=n("PQzt"),f=n("OGDC"),d=n("Gqia"),g=n("X78M"),b=(n("3/L5"),n("20nU"),n("7QZ+")),h=n("nxaZ"),x=n("/MKj"),y=n("axfC"),v=n("7Qib");function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===w(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(g.a)((function(e){var t;return{productCard:(t={width:"100%",height:"100%"},E(t,e.breakpoints.up("sm"),{width:"50%",height:"50%"}),E(t,e.breakpoints.up("md"),{width:"100%",height:"100%"}),E(t,e.breakpoints.up("lg"),{width:"80%",height:"80%"}),E(t,e.breakpoints.down("md"),{marginBottom:"10px",width:"100%",height:"auto"}),t),productImageBox:{position:"relative"},productImage:{height:"100%",width:"100%",objectFit:"cover",borderRadius:"10px",cursor:"pointer"},favouriteIcon:E({position:"absolute",top:"0px",right:"0px",fontSize:"30px",justifyContent:"center",display:"flex",alignItems:"center",minWidth:"48px",minHeight:"48px",padding:"0",border:"0"},e.breakpoints.down("md"),{fontSize:"26px"}),productTitle:E({width:"100%",lineHeight:"27px",fontSize:"14px",fontWeight:"400",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",color:"#222222"},e.breakpoints.down("md"),{lineHeight:"24px"}),productPrice:E({width:"100%",lineHeight:"21px",fontSize:"16px",color:"#222222",fontWeight:"700"},e.breakpoints.down("md"),{lineHeight:"19px"})}}));t.a=function(e){var t=e.product,n=S(),r=Object(o.p)(),i=Object(x.b)();return a.a.createElement(s.a,{item:!0,sx:{padding:"0px 6px"},className:n.productCard},a.a.createElement(p.a,{className:n.productImageBox},a.a.createElement(m.a,{variant:"square",src:"https://".concat(t.image_0),alt:t.title,className:n.productImage,onClick:function(){return e=t.id,n=t.title,console.log(n),void r("/app/products/".concat(e,"/").concat(n.replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"")));var e,n}}),a.a.createElement(f.a,{className:n.favouriteIcon,onClick:function(){!function(e){var t=e;Object(h.c)(b.a.edit_product,t).then((function(e){var t=e.status,n=e.data;200===t&&(console.log("data",n),i(Object(y.c)(null==n?void 0:n.data)))})).catch((function(e){console.log("Error",e)}))}({id:t.id,title:t.title,is_favourite:!t.is_favourite})}},t.is_favourite?a.a.createElement(c.a,{sx:{color:"red",fontSize:"24px"}}):a.a.createElement(u.a,{sx:{fontSize:"24px"}}))),a.a.createElement(d.a,{className:n.productTitle},t.title),a.a.createElement(d.a,{className:n.productPrice},"Rs. ",Object(v.a)(t.price)))}},JYAV:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return P}));var r=n("q1tI"),a=n.n(r),o=n("uVCN"),i=(n("JMMV"),n("+6Or")),c=n("f27O"),l=n("WNlj"),u=n("z6Y5"),s=n("Gqia"),p=n("NZDO"),m=n("X78M"),f=n("7QZ+"),d=n("nxaZ"),g=n("/MKj"),b=n("axfC"),h=n("Yv0D"),x=n("PQzt"),y=n("17x9"),v=n.n(y),w=n("SOjZ");function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=Object(m.a)((function(e){var t;return{mainBox:(t={display:"flex",flexDirection:"row",marginTop:"100px",marginBottom:"50px",marginLeft:"auto",marginRight:"auto"},k(t,e.breakpoints.up("sm"),{borderRadius:"4px",boxShadow:"0 1px 6px rgba(0,0,0, 0.095389)",backgroundColor:"rgba(255,255,255, 1)",borderTop:"1px solid #E5E5E5"}),k(t,e.breakpoints.down("sm"),{flexDirection:"column",marginTop:"30px",marginBottom:"30px"}),t),profileBlock:k({margin:"50px",width:"40vw"},e.breakpoints.down("sm"),{justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginTop:"0",marginBottom:"30px"}),profile:k({width:"100%",height:"40vh",marginLeft:"auto"},e.breakpoints.down("sm"),{}),title:k({textTransform:"uppercase",color:"#3e4152",fontSize:"28px",fontWeight:"700",marginTop:"34px",marginBottom:"10px",letterSpacing:"1.5px"},e.breakpoints.down("sm"),{marginTop:"0"}),paragraph:k({fontSize:"16px",fontWeight:"400",lineHeight:"20px",fontFamily:"Poppins",fontStyle:"italic",justifyContent:"center",letterSpacing:"0.5px"},e.breakpoints.down("sm"),{fontSize:"14px",lineHeight:"18px"}),contact:k({width:"80vw",marginRight:"auto",marginLeft:"auto",paddingTop:"100px"},e.breakpoints.down("sm"),{paddingTop:"10px"}),subTitle:k({fontSize:"18px",fontWeight:"500",lineHeight:"21px"},e.breakpoints.down("sm"),{fontSize:"16px",lineHeight:"19px"})}}));v.a.node,v.a.number.isRequired,v.a.number.isRequired;var I=function(){var e=O(),t=S(a.a.useState(0),2);t[0],t[1];return a.a.createElement(u.a,{item:!0,maxWidth:"md",className:e.mainBox},a.a.createElement(u.a,{item:!0,className:e.profileBlock},a.a.createElement(x.a,{variant:"square",src:"/static/img/[removal.ai]_5a159d06-b0c9-41a2-b86d-7b606275dc50-passport_size_photo.png",className:e.profile})),a.a.createElement(u.a,{item:!0,className:e.contact},a.a.createElement(s.a,{className:e.paragraph},"Hi, I'm"," ",a.a.createElement(p.a,{component:"span",sx:{fontSize:"21px",fontWeight:"600"}},"kuntolla pavan kumar"),". I'm a B.Tech student with a deep passion for software engineering and full stack development. I love creating innovative solutions and building applications that make a positive impact. Constantly striving to learn and grow in the tech world, I'm excited about the endless possibilities that lie ahead in my journey as a software engineer."),a.a.createElement(p.a,{sx:{alignText:"center",paddingTop:"24px",paddingBottom:"16px"}},a.a.createElement(s.a,{className:e.subTitle},"Explore my profiles and stay up-to-date with my latest projects")),a.a.createElement(p.a,{display:"flex",sx:{justifyContent:"center"}},a.a.createElement(w.b,{to:"https://www.linkedin.com/in/pavan-kumar-kuntolla-454b84245/"},a.a.createElement(x.a,{variant:"square",src:"/static/img/linkedin-app-icon.svg",sx:{marginLeft:"20px",marginRight:"20px"}})),a.a.createElement(w.b,{to:"https://discordapp.com/users/1123274161184309368"},a.a.createElement(x.a,{variant:"square",src:"/static/img/discord-square-color-icon.svg",sx:{marginLeft:"20px",marginRight:"20px"}})),a.a.createElement(w.b,{to:"https://github.com/PAVANKUMAR-KUNTOLLA?tab=overview&from=2023-05-01&to=2023-05-01"},a.a.createElement(x.a,{variant:"square",src:"/static/img/github-icon.svg",sx:{marginLeft:"20px",marginRight:"20px"}})),a.a.createElement(w.b,{to:"https://leetcode.com/kuntollapavankumar/"},a.a.createElement(x.a,{variant:"square",src:"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",sx:{marginLeft:"20px",marginRight:"20px"}})))))};function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=Object(m.a)((function(e){return{largeImage:{position:"relative",marginTop:"20px"},mainImage:T({position:"relative",width:"100%",height:"70vh",objectFit:"cover",alignContent:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{height:"50vh"}),prevSvgIcon:T({position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",cursor:"pointer",zIndex:1},e.breakpoints.down("sm"),{display:"none"}),nextSvgIcon:T({position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",cursor:"pointer",zIndex:1},e.breakpoints.down("sm"),{display:"none"})}})),W=function(){var e=B(),t=N(Object(r.useState)(0),2),n=t[0],o=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){o((function(e){return(e+1+6)%6}))}),3e3);return function(){return clearInterval(e)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{maxWidth:"100%"},a.a.createElement(p.a,{className:e.largeImage},a.a.createElement(p.a,{sx:{position:"relative"}},a.a.createElement(x.a,{className:e.mainImage,variant:"square",src:["/static/img/one_piece.jpg","/static/img/Spiderman.jpg","/static/img/My_Hero.jpg","/static/img/Avengers.jpg","/static/img/Batman.jpg","/static/img/Captain_america.jpg"][n],alt:"Slide ".concat(n+1)}),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(e.prevSvgIcon," icon icon-tabler icon-tabler-chevron-left"),width:"84",height:"84",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){o((function(e){return(e-1+6)%6}))}},a.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M15 6l-6 6l6 6"})),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(e.nextSvgIcon," icon icon-tabler icon-tabler-chevron-right"),width:"84",height:"84",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#2c3e50",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){o((function(e){return(e+1+6)%6}))}},a.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M9 6l6 6l-6 6"}))))))},A=n("uoOq");function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function M(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===q(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=Object(m.a)((function(e){var t;return{container:(t={},M(t,e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),M(t,e.breakpoints.down("md"),{maxWidth:e.breakpoints.values.sm}),t),title:M({textTransform:"uppercase",color:"#3e4152",fontSize:"28px",fontWeight:"700",marginTop:"34px",marginBottom:"10px",letterSpacing:"1.5px"},e.breakpoints.down("sm"),{marginTop:"0",fontSize:"20px",letterSpacing:"0.5px"})}}));t.default=function(){var e=P(),t=Object(g.b)(),n=Object(g.c)((function(e){return e.products.products})),m=Object(g.c)((function(e){return e.products.favourites})),x=Object(g.c)((function(e){return e.products.isLoadingSpin})),y=Object(g.c)((function(e){return e.products.isSearchOn})),v=new Set,w=n?n.filter((function(e){return!v.has(e.category)&&"accessories"!=e.category&&(v.add(e.category),!0)})):[];return Object(r.useEffect)((function(){t(Object(b.b)(!0)),Object(d.b)(f.a.products).then((function(e){var n=e.status,r=e.data;200===n&&(console.log("data",r),t(Object(b.c)(null==r?void 0:r.data)),t(Object(b.b)(!1)))})).catch((function(e){console.log("Error",e),t(Object(b.b)(!1))})),t(Object(b.d)(!1))}),[]),a.a.createElement(o.a,{title:"home"},!y&&a.a.createElement(W,null),x||y?x?a.a.createElement(h.a,{isBackdrop:!0}):y?a.a.createElement(A.a,{customStyles:e}):null:a.a.createElement(l.a,{maxWidth:"md",className:e.container},m.length>0&&a.a.createElement(u.a,{container:!0,spacing:2,mt:3},a.a.createElement(u.a,{item:!0,xs:12},a.a.createElement(s.a,{className:e.title},"Favourites")),a.a.createElement(c.a,{products:m})),a.a.createElement(u.a,{container:!0,spacing:2,mt:2},a.a.createElement(u.a,{item:!0,xs:12},a.a.createElement(s.a,{className:e.title},"Categories")),a.a.createElement(u.a,{container:!0,spacing:2,mt:2},w.map((function(e){return a.a.createElement(u.a,{item:!0,key:e.id,xs:6,md:3,lg:3},a.a.createElement(i.a,{product:e}))})))),a.a.createElement(u.a,{container:!0,spacing:2,mt:3,sx:{display:y?"none":"flex"}},a.a.createElement(u.a,{item:!0,xs:12},a.a.createElement(s.a,{className:e.title},"you may also like")),a.a.createElement(c.a,{products:n}))),!x&&a.a.createElement(I,null),a.a.createElement(p.a,{sx:{textAlign:"center",marginRight:"auto",marginLeft:"auto",paddingTop:"24px",paddingBottom:"24px"}},"Copyright 2023 © @kuntollapavankumar"))}},Yv0D:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Sk+A"),i=n("yXLF"),c=n("X78M"),l=n("17x9"),u=n.n(l),s=n("NZDO"),p=Object(c.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1}}})),m=function(e){var t=e.isBackdrop,n=p();return a.a.createElement("div",null,a.a.createElement(o.a,{className:n.backdrop,open:t},a.a.createElement(s.a,{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",sx:{position:"absolute",zIndex:"10",left:0,top:0}},a.a.createElement(i.a,{color:"inherit",size:40}))))};m.prototype={isBackdrop:u.a.bool},t.a=m},f27O:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JMMV"),i=n("X78M"),c=n("WNlj"),l=n("z6Y5");function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=Object(i.a)((function(e){var t;return{container:(t={position:"relative",paddingLeft:"0",paddingRight:"0"},m(t,e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg,overflowX:"hidden"}),m(t,e.breakpoints.down("md"),{maxWidth:e.breakpoints.values.md}),m(t,e.breakpoints.down("sm"),{maxWidth:e.breakpoints.values.sm}),m(t,"overflowX","scroll"),m(t,"scrollbarWidth","none"),m(t,"msOverflowStyle","none"),m(t,"scrollbarColor","transparent"),m(t,"&::-webkit-scrollbar",{width:"0px"}),m(t,e.breakpoints.up("sm"),{"&:hover $sliderControls":{display:"flex"}}),t),sliderControls:{display:"none",justifyContent:"space-between",alignItems:"center",position:"absolute",width:"100%",top:"50%",left:"10px",transform:"translateY(-50%)",zIndex:1,pointerEvents:"none"},prevSvgIcon:{cursor:"pointer",marginLeft:"-30px",pointerEvents:"auto"},nextSvgIcon:{cursor:"pointer",marginRight:"50px",pointerEvents:"auto"},sliderWrapper:{display:"flex",transition:"transform 1.5 ease"},sliderPage:{marginLeft:"auto",marginRight:"auto",width:"100%",flex:"0 0 100%",padding:e.spacing(0,1)},sliderPageVisible:{opacity:1}}}));t.a=function(e){var t=e.products,n=(e.handlechange,f()),i=s(Object(r.useState)(0),2),u=i[0],p=i[1],m=window.innerWidth>=1024?4:2;return a.a.createElement(c.a,{maxWidth:"lg",className:n.container},t.length>=4&&a.a.createElement(l.a,{className:n.sliderControls},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:n.prevSvgIcon,width:"68",height:"68",viewBox:"0 0 24 24",strokeWidth:"0.5",stroke:"#000000",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){p((function(e){return Math.max(e-1,0)}))}},a.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M15 6l-6 6l6 6"})),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:n.nextSvgIcon,width:"68",height:"68",viewBox:"0 0 24 24",strokeWidth:"0.5",stroke:"#000000",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",onClick:function(){p((function(e){return Math.min(e+1,Math.ceil(t.length/m)-1)}))}},a.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M9 6l6 6l-6 6"}))),a.a.createElement(l.a,{className:n.sliderWrapper,style:{transform:"translateX(-".concat(100*u,"%)")}},Array.from({length:Math.ceil(t.length/m)}).map((function(e,r){return a.a.createElement(l.a,{key:r,className:"".concat(n.sliderPage," ").concat(u===r?n.sliderPageVisible:"")},a.a.createElement(l.a,{container:!0,spacing:2,mt:3},t.slice(r*m,(r+1)*m).map((function(e){return a.a.createElement(l.a,{item:!0,key:e.id,xs:6,md:3,lg:3},a.a.createElement(o.a,{product:e}))}))))}))))}},o1Vc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("uVCN"),i=n("w+1Z"),c=n("nm24"),l=n("SOjZ");function u(){return r.createElement(c.a,{sx:{width:"100%"},spacing:2},r.createElement(i.a,{severity:"info"},"Your cart is empty. ",r.createElement(l.b,{to:"/"},"Go Back")))}var s=n("D3cv"),p=n("NZDO"),m=n("WNlj"),f=n("z6Y5"),d=n("PQzt"),g=n("Gqia"),b=n("OGDC"),h=n("MGIy"),x=n("5I82"),y=n("X78M"),v=n("/MKj"),w=n("nxaZ"),E=n("7QZ+"),S=n("axfC"),j=n("V4z/"),k=n("Yv0D"),O=n("uoOq"),I=n("wLez"),C=n.n(I),N=n("kUWD"),z=n.n(N),T=n("DPzK"),B=n.n(T),W=n("7Qib"),A=n("umvS"),q=n("b7jQ"),M=n("GVSF"),P=n("yXLF"),L=n("H6AK"),R=n.n(L);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function D(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===H(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(y.a)((function(e){var t;return{dialogBox:D({borderRadius:"10px"},e.breakpoints.down("sm"),{borderRadius:"20px 20px 0px 0px",border:"1px solid rgba(151,151,151, 1)",boxShadow:"0px -3px 8px rgba(0,0,0, 0.1)"}),quantityRow:D({margin:"32px auto 50px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",textAlign:"left",maxWidth:"230px"},e.breakpoints.down("sm"),{margin:"24px 20px 40px"}),boldText:{fontSize:"18px",fontWeight:"600",lineHeight:"24px",marginBottom:"7px"},normalText:{fontSize:"16px",fontWeight:"400",lineHeight:"22px"},mainText:D({opacity:1,color:"rgba(71,71,71,1)",fontSize:"24px",fontWeight:"400",textAlign:"center",lineHeight:"33px"},e.breakpoints.down("sm"),{fontSize:"20px",lineHeight:"27px",marginLeft:"8px",marginRight:"7px"}),paper:{overflowY:"unset"},customizedButton:(t={position:"absolute",left:"97.5%",top:"-4%",color:e.palette.grey[800],backgroundColor:e.palette.common.white},D(t,e.breakpoints.down("sm"),{left:"93%",top:"-5%"}),D(t,"&:hover",{backgroundColor:e.palette.common.white}),t),confirmButton:{fontSize:"16px",fontWeight:"600",lineHeight:"24px",padding:"10px 40px 9px",marginBottom:"4px",opacity:.8}}})),V=function(e){var t=e.type,n=e.open,r=e.handleClose,o=e.handleConfirm,i=(e.quantity,e.isLoadingSpin),c=e.productId,l=_(),u=Object(v.c)((function(e){return e.products.products})).find((function(e){return e.id===c}));return a.a.createElement(A.a,{open:n,onClose:r,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",classes:{paper:l.paper},className:l.dialogBox},a.a.createElement(q.a,{id:"scroll-dialog-title"}),a.a.createElement(M.a,{dividers:!1},a.a.createElement(b.a,{"aria-label":"close",onClick:r,className:l.customizedButton},a.a.createElement(R.a,null)),"placeOrder"===t?a.a.createElement(p.a,null,a.a.createElement(p.a,{sx:{margin:{xs:"0",sm:"16px 152px 32px"}}},a.a.createElement(g.a,{className:l.mainText},"Confirm Investment in SGB Scheme 2021-22 Series IV"))):a.a.createElement(p.a,{sx:{textAlign:"center",padding:"20px"}},a.a.createElement(d.a,{variant:"square",alt:u.title,src:"https://".concat(u.image_0),sx:{height:180,width:130,position:"relative",margin:"8px auto"}}),a.a.createElement(g.a,{className:l.boldText},u.title),a.a.createElement(g.a,{className:l.normalText},"Are you sure you want to delete the item from your cart?"),a.a.createElement(x.a,{sx:{display:"block",margin:"16px auto"},disabled:i,variant:"contained",color:"primary",className:l.confirmButton,onClick:function(){var e={id:u.id,title:u.id,quantity:0,is_item_in_cart:!1,is_favourite:!1};o(e)}},"Yes",i&&a.a.createElement(P.a,{size:15,color:"primary",sx:{marginLeft:"15px"}})))))};function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=Object(y.a)((function(e){return{mainBlock:Q({display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row",marginLeft:"auto",marginRight:"auto"}),cartBlock:{display:"flex",alignItems:"center",flexDirection:"row",position:"relative"},imageBlock:{width:"50%",height:"100%"},contentBlock:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0 16px",marginTop:"2rem"},image:{width:"100%",height:"auto",cursor:"pointer"},title:{fontSize:"16px",fontWeight:"500",lineHeight:"21px",marginBottom:"5px"},price:{fontWeight:"700",fontSize:"18px",lineHeight:"24px",marginBottom:"16px"},quantity:Q({maxWidth:"110px",maxHeight:"50px","& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:"0"}}},e.breakpoints.down("sm"),{height:"40px",width:"90px","& .MuiInputBase-input":{padding:"10px"}}),favIcon:Q({width:"100px",height:"40px",borderColor:"1px solid black",borderRadius:"0 !important","&:hover":{backgroundColor:"rgba(255, 255, 255, 1)"}},e.breakpoints.down("sm"),{height:"40px",width:"70px",padding:"1px"}),favQuantity:Q({display:"flex"},e.breakpoints.down("sm"),{alignItems:"center",justifyContent:"space-between",height:"60px"}),rightBlock:Q({display:"flex",flexDirection:"column",justifyContent:"flex-start",marginTop:"16px"},e.breakpoints.up("sm"),{marginTop:"50px",marginBottom:"auto",marginLeft:"16px",marginRight:"16px"})}}));t.default=function(){var e=Object(v.c)((function(e){return e.products.cart})),t=(Object(s.a)((function(e){return e.breakpoints.down("sm")})),Object(v.c)((function(e){return e.products.isLoadingSpin}))),n=Object(v.c)((function(e){return e.products.isSearchOn})),i=Z(Object(r.useState)(!1),2),c=(i[0],i[1],Z(Object(r.useState)(!1),2)),l=c[0],y=c[1],I=Z(Object(r.useState)(null),2),N=I[0],T=I[1],A=Z(Object(r.useState)("placeOrder"),2),q=A[0],M=A[1],P=J(),L=Object(j.p)(),R=Object(v.b)(),H=function(e){var t=e;Object(w.c)(E.a.edit_product,t).then((function(e){var t=e.status,n=e.data;200===t&&(console.log("data",n),R(Object(S.c)(null==n?void 0:n.data)),y(!1),T(""),M("placeOrder"))})).catch((function(e){console.log("Error",e),y(!1),T(""),M("placeOrder")}))},D=function(e){var t="/app/".concat(e);L(t)};return Object(r.useEffect)((function(){R(Object(S.d)(!1)),R(Object(S.b)(!0)),Object(w.b)(E.a.products).then((function(e){var t=e.status,n=e.data;200===t&&(console.log("data",n),R(Object(S.c)(null==n?void 0:n.data)),R(Object(S.b)(!1)))})).catch((function(e){console.log("Error",e),R(Object(S.b)(!1))}))}),[]),a.a.createElement(o.a,{title:"Cart"},t||n?t?a.a.createElement(k.a,{isBackdrop:!0}):n&&!t?a.a.createElement(O.a,null):null:a.a.createElement(p.a,{className:P.mainBlock,maxWidth:"lg"},a.a.createElement(m.a,{maxWidth:"sm"},e&&e.length>0?e.map((function(e,t){return a.a.createElement(f.a,{container:!0,key:t,className:P.cartBlock,sx:{borderRadius:"4px",boxShadow:"0 1px 6px rgba(0,0,0, 0.095389)",backgroundColor:"rgba(255,255,255, 1)",borderTop:"1px solid #E5E5E5",marginTop:"10px",marginBottom:"10px"}},a.a.createElement(f.a,{item:!0,xs:4,className:P.imageBlock},a.a.createElement(d.a,{variant:"square",src:"https://".concat(e.image_0),alt:e.title,className:P.image,key:e.id,onClick:function(){return function(e,t){console.log(t),L("/app/products/".concat(e,"/").concat(t))}(e.id,e.title)}})),a.a.createElement(f.a,{item:!0,xs:7,className:P.contentBlock},a.a.createElement(g.a,{className:P.title},e.title),a.a.createElement(g.a,{className:P.price},"Rs. ",Object(W.a)(e.price)),a.a.createElement(p.a,{className:P.favQuantity},a.a.createElement(p.a,{sx:{border:"0.1px solid #bdbdbd",marginRight:"10px"}},a.a.createElement(b.a,{className:P.favIcon,onClick:function(){return function(e,t,n){H({id:e,title:t,is_favourite:!n})}(e.id,e.title,e.is_favourite)}},e.is_favourite?a.a.createElement(z.a,{sx:{color:"red",fontSize:"35px",padding:"1px"}}):a.a.createElement(B.a,{sx:{fontSize:"35px",padding:"1px"}}))),a.a.createElement(h.a,{type:"number",color:"secondary",value:e.quantity,pattern:"[0-9]",className:P.quantity,onChange:function(t){return function(e,t,n){if(n>=1&&n<=20){var r={id:e,title:t,quantity:Math.floor(n)};H(r)}}(e.id,e.title,t.target.value)}}))),a.a.createElement(f.a,{item:!0,xs:1},a.a.createElement(b.a,{sx:{position:"absolute",right:"0",top:"35px"},onClick:function(){return function(e){T(e),M("deleteOrder"),y(!0)}(e.id)}},a.a.createElement(C.a,{sx:{color:"#474747"}}))))})):a.a.createElement(u,null,"No items in cart.")),a.a.createElement(m.a,{maxWidth:"sm",className:P.rightBlock,sx:{borderRadius:"4px",boxShadow:"0 1px 6px rgba(0,0,0, 0.095389)",backgroundColor:"rgba(255,255,255, 1)",borderTop:"1px solid #E5E5E5",padding:"30px"}},a.a.createElement(p.a,{sx:{display:"flex",justifyContent:"space-between",marginBottom:"16px"}},a.a.createElement(g.a,{sx:{fontSize:"24px",fontWeight:"600",lineHeight:"27px"}},"Total"),a.a.createElement(g.a,{sx:{fontSize:"21px",fontWeight:"500",lineHeight:"27px"}},"Rs."," ",Object(W.a)(e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)))),a.a.createElement(g.a,{marginBottom:"16px"},"Tax included and shipping calculated at checkout"),a.a.createElement(g.a,{marginBottom:"16px"},"Orders will be processed in INR."),a.a.createElement(p.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:{xs:"12px"}}},a.a.createElement(x.a,{variant:"outlined",onClick:function(){return D("products")}},"shop more"),e.length>0?a.a.createElement(x.a,{variant:"contained",onClick:function(){return D("checkout")}},"proceed to checkout"):a.a.createElement(x.a,{disabled:!0},"CHECKOUT")))),a.a.createElement(V,{open:l,handleClose:function(){y(!1),"deleteOrder"===q&&(M("placeOrder"),T(""))},handleConfirm:function(e){"deleteOrder"===q&&H(e)},type:q,isLoadingSpin:t,productId:N}))}},uVCN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("17x9"),c=n.n(i),l=["children","title"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=Object(r.forwardRef)((function(e,t){var n=e.children,r=e.title,i=void 0===r?"":r,c=s(e,l);return a.a.createElement("div",u({ref:t},c),a.a.createElement(o.a,null,a.a.createElement("title",null,i)),n)}));p.propTypes={children:c.a.node.isRequired,title:c.a.string},t.a=p},uoOq:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JMMV"),i=n("/MKj"),c=n("5JSG"),l=n("WNlj"),u=n("z6Y5"),s=n("Gqia"),p=n("JYAV");t.a=function(e){var t=e.customStyles;t||(t=Object(p.useStyles)());var n=Object(i.c)((function(e){return e.products.products})),r=Object(i.c)((function(e){return e.products.searchQuery})),m=Object(i.c)((function(e){return e.products.isSearchOn}));return a.a.createElement(l.a,{maxWidth:"md",className:t.container},m&&n.length>0?a.a.createElement(u.a,{container:!0,spacing:2,mt:2},a.a.createElement(u.a,{item:!0,xs:12},a.a.createElement(s.a,{variant:"h1",sx:{alignItems:"center",marginTop:"50px",marginLeft:"auto",marginRight:"auto",textTransform:"capitalize"}},r),a.a.createElement("hr",{sx:{borderTop:"2px solid black",fontWeight:"bold",marginLeft:"auto",marginRight:"auto"}})),n.map((function(e){return a.a.createElement(u.a,{item:!0,key:e.id,xs:6,md:3,lg:3},a.a.createElement(o.a,{product:e}))}))):m&&0===n.length?a.a.createElement(c.a,null):null)}}}]);
//# sourceMappingURL=cart.page.js.map