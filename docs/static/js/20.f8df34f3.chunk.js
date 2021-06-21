(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[20],{1041:function(e,r,t){"use strict";t.r(r),t.d(r,"mapStateToProps",(function(){return T})),t.d(r,"mapDispatchToProps",(function(){return K}));var o=t(49),n=t(2),a=t(0),p=t.n(a),i=t(93),c=t(261),s=t(521),l=t(242),u=t(98),d=t.n(u),f=t(360),m=t.n(f),b=t(107),h=t.n(b),j=t(1018),y=t(94);function g(e,r){if(!e)return"";try{return r?btoa(e):atob(e)}catch(t){return t.toString()}}var v=t(250),x=t(317),O=t(274),w=t(278),C=t(91),P=Object(l.a)((function(e){return{root:{margin:e.spacing(1)},encodedResult:{padding:e.spacing(1),border:"1px solid grey",whiteSpace:"normal",wordBreak:"break-word"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}}));function T(e){return{inputText:e.textInputs.lastBase64EncoderValue}}function K(e){return{storeInputText:function(r,t){return e(Object(y.b)(r,t))}}}r.default=Object(i.b)(T,K)(Object(c.a)()((function(e){var r="Base64 Encoder / decoder",t=P(),a=e.inputText,i=e.storeInputText,l=p.a.useState(""),u=Object(o.a)(l,2),f=u[0],b=u[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C.a,{title:r}),Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(O.a,{iconType:h.a,title:r}),Object(n.jsx)(j.a,{autoFocus:Object(c.b)("md",e.width),label:"Content to Base64 encode/decode",placeholder:"Paste or type the content here",multiline:!0,rows:4,variant:"outlined",margin:"normal",fullWidth:!0,value:a,onChange:function(e){return i("lastBase64EncoderValue",e.target.value)}}),Object(n.jsxs)(v.a,{className:t.toolbar,children:[Object(n.jsx)(x.a,{display:"flex",flexGrow:1}),Object(n.jsx)(w.a,{data:f}),Object(n.jsx)(s.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(d.a,{children:"Encode"}),disabled:!a,onClick:function(){return b(g(a,!0))},children:"Enc."}),Object(n.jsx)(s.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(m.a,{children:"Decode"}),disabled:!a,onClick:function(){return b(g(a,!1))},children:"Dec."})]}),Object(n.jsx)("div",{className:t.encodedResult,children:f})]})]})})))},274:function(e,r,t){"use strict";var o=t(2),n=t(62),a=t(242),p=(t(0),Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}})));r.a=function(e){var r=p(),t=e.iconType;return Object(o.jsx)("div",{className:r.titleContainer,children:Object(o.jsxs)("div",{className:r.titleWithIcon,children:[Object(o.jsx)(t,{className:r.icon}),Object(o.jsx)(n.a,{variant:"h5",className:r.title,children:e.title})]})})}},278:function(e,r,t){"use strict";var o=t(2),n=(t(0),t(288)),a=t.n(n),p=t(521),i=t(287),c=t.n(i),s=t(92);r.a=function(e){var r=e.data,t=Object(s.c)().setToasterState;return Object(o.jsx)(p.a,{endIcon:Object(o.jsx)(a.a,{children:"Copy"}),onClick:function(){if(r){var e=r.substr(0,20),o="Content copied into clipboard: ".concat(e," \u2026");c.a(r,{format:"text/plain"}),t({open:!0,message:o,type:"success",autoHideDuration:2e3})}},disabled:!r,variant:"contained",color:"primary",children:"Copy"})}},317:function(e,r,t){"use strict";var o=t(43),n=t(1),a=(t(4),t(64));var p=function(e){var r=function(r){var t=e(r);return r.css?Object(n.a)({},Object(a.a)(t,e(Object(n.a)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(o.a)(e.filterProps)),r};var i=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(a.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},c=t(22),s=t(95);function l(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var u=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,a=e.transform,p=function(e){if(null==e[r])return null;var t=e[r],p=l(e.theme,n)||{};return Object(s.a)(e,t,(function(e){var r;return"function"===typeof p?r=p(e):Array.isArray(p)?r=p[e]||e:(r=l(p,e)||e,a&&(r=a(r))),!1===o?r:Object(c.a)({},o,r)}))};return p.propTypes={},p.filterProps=[r],p};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=i(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),m=i(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),b=i(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=i(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),j=i(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),y=i(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),g=u({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var x=u({prop:"width",transform:v}),O=u({prop:"maxWidth",transform:v}),w=u({prop:"minWidth",transform:v}),C=u({prop:"height",transform:v}),P=u({prop:"maxHeight",transform:v}),T=u({prop:"minHeight",transform:v}),K=(u({prop:"size",cssProperty:"width",transform:v}),u({prop:"size",cssProperty:"height",transform:v}),i(x,O,w,C,P,T,u({prop:"boxSizing"}))),N=t(262),k=i(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),S=t(5),I=t(0),E=t.n(I),R=t(7),z=t(30),A=t.n(z),B=t(210);function H(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var W=t(50),L=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.name,p=Object(S.a)(o,["name"]),i=a,c="function"===typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},s=Object(B.a)(c,Object(n.a)({Component:e,name:a||e.displayName,classNamePrefix:i},p));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=E.a.forwardRef((function(r,o){var a=r.children,p=r.className,i=r.clone,c=r.component,l=Object(S.a)(r,["children","className","clone","component"]),u=s(r),d=Object(R.a)(u.root,p),f=l;if(t&&(f=H(f,t)),i)return E.a.cloneElement(a,Object(n.a)({className:Object(R.a)(a.props.className,d)},f));if("function"===typeof a)return a(Object(n.a)({className:d},f));var m=c||e;return E.a.createElement(m,Object(n.a)({ref:o,className:d},f),a)}));return A()(l,e),l}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:W.a},t))}},D=p(i(f,m,b,h,j,y,g,K,N.b,k)),G=L("div")(D,{name:"MuiBox"});r.a=G},360:function(e,r,t){"use strict";var o=t(16),n=t(17);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(0)),p=(0,o(t(18)).default)(a.createElement("path",{d:"M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"}),"LinkOff");r.default=p}}]);
//# sourceMappingURL=20.f8df34f3.chunk.js.map