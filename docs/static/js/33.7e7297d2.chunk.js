(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[33],{1074:function(t,e,n){"use strict";n.r(e),n.d(e,"mapStateToProps",(function(){return k})),n.d(e,"mapDispatchToProps",(function(){return T}));var a=n(12),i=n(0),o=n.n(i),c=n(95),r=n(254),s=n(341),l=n(276),u=n(256),d=n(250),b=n(104),j=n.n(b),p=n(519),x=n.n(p),m=n(332),f=n(520),h=n.n(f),O=n(96);function v(t,e){return t?e?decodeURIComponent(t):encodeURIComponent(t):""}var g=n(289),w=n(292),y=n(93),C=n(334),I=n(2),R=Object(d.a)((function(t){return{root:{margin:t.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:t.spacing(1)}}}}));function k(t){return{inputText:t.textInputs.lastUrlEncoderValue}}function T(t){return{storeInputText:function(e,n){return t(Object(O.b)(e,n))}}}e.default=Object(c.b)(k,T)(Object(l.a)()((function(t){var e="URL Encoder / decoder",n=R(),i=t.inputText,c=t.storeInputText,d=o.a.useState(v(i,!1)),b=Object(a.a)(d,2),p=b[0],f=b[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(y.a,{title:e}),Object(I.jsxs)("div",{className:n.root,children:[Object(I.jsx)(g.a,{iconType:x.a,title:e}),Object(I.jsx)(m.a,{autoFocus:Object(l.c)("md",t.width),label:"Content to encode/decode",placeholder:"Paste or type the content here",multiline:!0,minRows:4,maxRows:Object(l.c)("md",t.width)?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:i,onChange:function(t){return c("lastUrlEncoderValue",t.target.value)}}),Object(I.jsxs)(r.a,{className:n.toolbar,children:[Object(I.jsx)(u.a,{variant:"contained",component:"span",color:"primary",disabled:!p,onClick:function(){c("lastUrlEncoderValue",p),f("")},children:Object(I.jsx)(h.a,{})}),Object(I.jsx)(s.a,{display:"flex",flexGrow:1}),Object(I.jsx)(w.a,{data:p}),Object(I.jsx)(u.a,{variant:"contained",color:"primary",disabled:!i,onClick:function(){return f(v(i,!1))},children:Object(I.jsx)(j.a,{})}),Object(I.jsx)(u.a,{variant:"contained",color:"primary",disabled:!i,onClick:function(){return f(v(i,!0))},children:Object(I.jsx)(x.a,{})})]}),Object(I.jsx)(C.a,{label:"Result",result:p})]})]})})))},289:function(t,e,n){"use strict";var a=n(67),i=n(250),o=(n(0),n(2)),c=Object(i.a)((function(t){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:t.spacing(1)}}}));e.a=function(t){var e=c(),n=t.iconType;return Object(o.jsx)("div",{className:e.titleContainer,children:Object(o.jsxs)("div",{className:e.titleWithIcon,children:[Object(o.jsx)(n,{className:e.icon}),Object(o.jsx)(a.a,{variant:"h5",className:e.title,children:t.title})]})})}},292:function(t,e,n){"use strict";var a=n(256),i=n(299),o=n.n(i),c=n(295),r=n.n(c),s=(n(0),n(94)),l=n(2);e.a=function(t){var e=t.data,n=t.hoverMessage,i=t.feedbackMessage,c=t.Icon,u=void 0===c?o.a:c,d=Object(s.c)().setToasterState;return Object(l.jsx)(a.a,{onClick:function(){if(e){var t=null!==i&&void 0!==i?i:"Content copied into clipboard: ".concat(e.substring(0,25)," \u2026");r.a(e,{format:"text/plain"}),d({open:!0,message:t,type:"success",autoHideDuration:2e3})}},disabled:!e,title:null!==n&&void 0!==n?n:"Copy to clipboard",variant:"contained",color:"primary",children:Object(l.jsx)(u,{})})}},334:function(t,e,n){"use strict";var a=n(332),i=n(250),o=(n(0),n(2)),c=Object(i.a)((function(t){return{result:{fontFamily:"monospace",height:"auto"}}}));e.a=function(t){var e=t.label,n=t.result,i=t.rows,r=void 0===i?10:i,s=t.maxRows,l=void 0===s?15:s,u=c();return Object(o.jsx)(a.a,{multiline:!0,minRows:r,maxRows:l,label:e,variant:"outlined",margin:"normal",fullWidth:!0,value:n,InputProps:{classes:{input:u.result}}})}}}]);
//# sourceMappingURL=33.7e7297d2.chunk.js.map