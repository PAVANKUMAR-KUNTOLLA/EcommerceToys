!function(e){function r(r){for(var o,i,l=r[0],c=r[1],p=r[2],d=0,s=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&s.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(r);s.length;)s.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],o=!0,l=1;l<t.length;l++){var c=t[l];0!==n[c]&&(o=!1)}o&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var o={},n={1:0},a=[];function i(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var r=[],t=n[e];if(0!==t)if(t)r.push(t[2]);else{var o=new Promise((function(r,o){t=n[e]=[r,o]}));r.push(t[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({2:"LoginView",3:"ProductView",4:"RegisterView",5:"ResetPasswordView",6:"cart.page",7:"checkOutPage",8:"favourite.page",9:"home.page",10:"products.page"}[e]||e)+".js"}(e);var c=new Error;a=function(r){l.onerror=l.onload=null,clearTimeout(p);var t=n[e];if(0!==t){if(t){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}n[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(r)},i.m=e,i.c=o,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)i.d(t,o,function(r){return e[r]}.bind(null,o));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/static/js/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=r,l=l.slice();for(var p=0;p<l.length;p++)r(l[p]);var u=c;a.push([0,0]),t()}({0:function(e,r,t){t("201c"),e.exports=t("Kme2")},"20nU":function(e,r,t){"use strict";r.a={basename:"",defaultPath:"/app/home",defaultPathID:"home",fontFamily:"Oswald sans-serif",textTransform:"uppercase",fontSize:15,color:"#404040",backgroundColor:"#ffffff",borderColor:"#ede6df",borderRadius:10,borderRadiusSmall:4,gridSpacing:3,gridSpacingSm:2}},"3/L5":function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var o={paper:"#ffffff",darkPaper:"#000000",primaryLight:"#4c87df",primaryMain:"#2069D8",primaryDark:"#164997",primary200:"#91cfff",primary800:"#206ad8",secondaryLight:"#f7b74f",secondaryMain:"#F5A623",secondaryDark:"#ab7418",secondary200:"#fdf39b",secondary800:"#f5a523",successLight:"#81c784",successMain:"#2e7d32",successDark:"#1b5e20",success200:"#a5d6a7",success800:"#859303",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eeeeee",grey300:"#e0e0e0",grey400:"#bdbdbd",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey800:"#333333",grey900:"#212121"}},Kme2:function(e,r,t){"use strict";t.r(r);var o=t("q1tI"),n=t.n(o),a=t("EbEg"),i=t("V4z/"),l=t("4WJT"),c=t("X78M"),p=Object(c.a)((function(e){return{root:{position:"fixed",top:0,left:0,zIndex:1301,width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),u=function(){var e=p();return n.a.createElement("div",{className:e.root},n.a.createElement(l.a,{color:"primary"}))},d=function(e){return function(r){return n.a.createElement(o.Suspense,{fallback:n.a.createElement(u,null)},n.a.createElement(e,r))}},s=t("nxaZ"),g=t("20nU"),m=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"JYAV"))}))),f=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"2j0d"))}))),x=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"CJPK"))}))),b=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"3kTt"))}))),y=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"o1Vc"))}))),h=d(Object(o.lazy)((function(){return t.e(7).then(t.bind(null,"z/q+"))}))),v=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"1ZOe"))}))),S=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"SuzI"))}))),k=d(Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"ZF52"))}))),O=function(){return n.a.createElement(i.e,null,n.a.createElement(i.c,{path:"/",element:n.a.createElement(i.a,{replace:!0,to:g.a.defaultPath})}),n.a.createElement(i.c,{path:"app",element:n.a.createElement(s.a,null,n.a.createElement(i.b,null))},n.a.createElement(i.c,{path:"home",element:n.a.createElement(m,null)}),n.a.createElement(i.c,{path:"products",element:n.a.createElement(f,null)}),n.a.createElement(i.c,{path:"products/:title",element:n.a.createElement(x,null)}),n.a.createElement(i.c,{path:"favourites",element:n.a.createElement(b,null)}),n.a.createElement(i.c,{path:"checkout",element:n.a.createElement(h,null)}),n.a.createElement(i.c,{path:"cart",element:n.a.createElement(y,null)})),n.a.createElement(i.c,{path:"/login",element:n.a.createElement(v,null)}),n.a.createElement(i.c,{path:"/register",element:n.a.createElement(S,null)}),n.a.createElement(i.c,{path:"/reset-password/:uidb64/:token",element:n.a.createElement(k,null)}))},M=t("b4iY"),z=t("WfXV"),w=t("L9aa"),E=t("sD0r"),P=function(e){return{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:e.customization.borderRadius+"px"}}},MuiButton:{styleOverrides:{sizeMedium:{paddingTop:"8px",paddingBottom:"9px"}}},MuiTableCell:{styleOverrides:{root:{borderColor:"#e7ddd1",padding:"18px 15px"}}},MuiTablePagination:{styleOverrides:{root:{borderTop:"1px solid ".concat(e.customization.borderColor)},selectLabel:{marginTop:0,marginBottom:0},displayedRows:{marginTop:0,marginBottom:0},toolbar:{paddingTop:"5px"}}},MuiAppBar:{styleOverrides:{root:{padding:"5px 0",boxShadow:"rgb(0 0 0 / 6%) 0px 3px 8px"}}},MuiCardHeader:{styleOverrides:{root:{color:e.colors.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary}}}},MuiOutlinedInput:{styleOverrides:{root:{background:e.colors.grey50,borderRadius:e.customization.borderRadius+"px","& .MuiOutlinedInput-notchedOutline":{borderColor:e.colors.grey400},"&:hover $notchedOutline":{borderColor:e.colors.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:e.colors.grey50,padding:"15.5px 14px",borderRadius:e.customization.borderRadius+"px","&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:e.customization.borderRadius+"px"}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:e.colors.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:e.colors.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:e.colors.primaryMain,background:e.colors.primary100}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:e.colors.grey700}}},MuiMenuItem:{styleOverrides:{root:{minHeight:"25px"}}},MuiDialogTitle:{styleOverrides:{root:{fontWeight:600,fontSize:"16px",lineHeight:"22px",color:e.colors.primaryMain}}},MuiAutocomplete:{styleOverrides:{root:{position:"relative"},tag:{maxWidth:"100px"}}}}},j=t("3/L5"),T=function(e){return{common:{black:e.colors.darkPaper,white:e.colors.paper},primary:{main:e.colors.primaryMain,light:e.colors.primaryLight,dark:e.colors.primaryDark},secondary:{main:e.colors.secondaryMain,light:e.colors.secondaryLight,dark:e.colors.secondaryDark},error:{main:e.colors.errorMain,light:e.colors.errorLight,dark:e.colors.errorDark},warning:{main:e.colors.warningMain,light:e.colors.warningLight,dark:e.colors.warningDark},success:{main:e.colors.successMain,light:e.colors.successLight,dark:e.colors.successDark},grey:{50:e.colors.grey50,100:e.colors.grey100,500:e.colors.grey500,600:e.colors.grey600,700:e.colors.grey700,800:e.colors.grey800,900:e.colors.grey900},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary},background:{paper:e.colors.paper,default:e.backgroundDefault},action:{hover:e.customization.backgroundColor,focus:e.colors.secondaryDark}}},C=function(e){return{fontFamily:e.customization.fontFamily,fontSize:e.customization.fontSize,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem",letterSpacing:"0.2px"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500,letterSpacing:"0.2px"},h4:{fontSize:"1rem",color:e.heading,fontWeight:600,letterSpacing:"0.2px"},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600,letterSpacing:"0.2px"},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700,letterSpacing:"0.2px"},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700,letterSpacing:"0.2px"},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark,letterSpacing:"0.2px"},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary,letterSpacing:"0.2px"},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:8,marginBottom:8,"& > label":{top:"23px",left:0,color:e.grey500,'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:"#f7f6f6",width:"100%",minHeight:"calc(100vh - 88px)",flexGrow:1,padding:"20px",marginTop:"88px",marginRight:"20px",letterSpacing:"0.2px",borderRadius:e.customization.borderRadius+"px"},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}},D=function(){var e={colors:j.a,heading:j.a.grey900,paper:j.a.paper,backgroundDefault:g.a.backgroundColor,darkTextPrimary:j.a.grey800,darkTextSecondary:j.a.grey800,textDark:j.a.grey900,menuSelected:j.a.secondaryDark,menuSelectedBack:j.a.secondaryLight,divider:g.a.borderColor,customization:g.a};return Object(E.a)({direction:"ltr",breakpoints:{values:{xs:0,sm:768,md:1024,lg:1280,xl:1400}},components:P(e),palette:T(e),typography:C(e),shadows:["rgba(99, 99, 99, 0.2) 0px 2px 8px 0px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(17, 17, 26, 0.09) 0px 4px 16px, rgba(17, 17, 26, 0.09) 0px 8px 32px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px","rgba(0, 0, 0, 0.2) 0px 3px 9px"]})},L=function(){return n.a.createElement(z.a,{injectFirst:!0},n.a.createElement(M.a,{theme:D()},n.a.createElement(w.a,null),n.a.createElement(O,null)))},I=(t("+eM2"),t("SOjZ")),W=t("/MKj"),R=t("i7Pf"),B=Object(R.b)({name:"app",initialState:{name:"pavan",value:20},reducers:{changeName:function(e,r){e.name=r.payload}}}),A=(B.actions.changeName,B.reducer),V=Object(R.a)({reducer:{app:A},middleware:function(e){return e()}}),F=document.getElementById("root");Object(a.createRoot)(F).render(n.a.createElement(W.a,{store:V},n.a.createElement(I.a,null,n.a.createElement(L,null))))},nxaZ:function(e,r,t){"use strict";t.d(r,"c",(function(){return d})),t.d(r,"b",(function(){return s}));var o=t("q1tI"),n=t.n(o),a=t("V4z/"),i=t("vDqi"),l=t.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==c(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===c(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r.a=function(e){var r=e.children;return!!localStorage.getItem("token")?r:n.a.createElement(a.a,{to:"/login"})};var d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=localStorage.getItem("token");return l()(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({method:"POST",url:e,headers:{"Content-Type":"application/json",Authorization:"Token ".concat(o)},data:r},t))},s=function(e){var r=localStorage.getItem("token");return l()({method:"GET",url:e,headers:{"Content-Type":"application/json",Authorization:"Token ".concat(r)}})}}});
//# sourceMappingURL=main.js.map