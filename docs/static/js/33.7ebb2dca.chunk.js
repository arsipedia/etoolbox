(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[33],{1182:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(433),i=a(1194),c=a(408),s=a(461),l=a(409),o=a(332),u=a(325),j=a(161),d=a.n(j),b=a(0),m=a.n(b),x=a(137),f=a(545),h=a(361),v=a(358),O=a(411),p=a(1156),g=a(1124);function y(e,t){for(var a=1===e?p.a:g.a,n="",r=0;r<t;r++)n+="".concat(a(),"\n");return n.slice(0,-1)}var C=a(55),w=a(1),I=Object(u.a)((function(e){return{root:{margin:e.spacing(1)},form:{marginTop:e.spacing(2)},formControl:{margin:e.spacing(1)},toolbar:{}}}));t.default=function(){var e="UUID Generator",t=I(),a=Object(C.e)("md"),u=Object(f.b)({defaultValues:{version:4,quantity:5}}),j=u.handleSubmit,b=u.control,p=m.a.useState(y(4,1)),g=Object(n.a)(p,2),N=g[0],k=g[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.a,{title:e}),Object(w.jsxs)("div",{className:t.root,children:[Object(w.jsx)(v.a,{iconType:d.a,title:e}),Object(w.jsx)("div",{className:t.form,children:Object(w.jsxs)(r.a,{container:!0,spacing:1,children:[Object(w.jsx)(r.a,{item:!0,md:2,sm:3,xs:6,children:Object(w.jsxs)(i.a,{className:t.formControl,fullWidth:!0,children:[Object(w.jsx)(f.a,{control:b,name:"version",defaultValue:4,render:function(e){var t=e.field,n=t.value,r=t.name,i=t.onChange;return Object(w.jsxs)(c.a,{select:!0,name:r,value:n,label:"Version",autoFocus:a,onChange:function(e){return i(e.target.value)},children:[Object(w.jsx)(s.a,{value:1,children:"1"}),Object(w.jsx)(s.a,{value:4,children:"4"})]})},rules:{required:!0,min:1,max:5}}),Object(w.jsx)(l.a,{children:"RFC4122 version"})]})}),Object(w.jsx)(r.a,{item:!0,md:2,sm:3,xs:6,children:Object(w.jsxs)(i.a,{className:t.formControl,fullWidth:!0,children:[Object(w.jsx)(f.a,{name:"quantity",render:function(e){var t=e.field,a=t.value,n=t.name,r=t.onChange,i=e.fieldState,s=i.invalid;i.error;return Object(w.jsx)(c.a,{name:n,value:a,label:"Quantity",error:s,type:"number",onChange:function(e){return r(e.target.value)},helperText:s?"valid range: [1..9999]":null})},control:b,defaultValue:5,rules:{required:!0,min:1,max:9999}}),Object(w.jsx)(l.a,{children:"Number of UUIDs"})]})}),Object(w.jsx)(r.a,{item:!0,md:8,sm:6,xs:12,children:Object(w.jsxs)(r.a,{container:!0,justifyContent:"flex-end",className:t.toolbar,children:[Object(w.jsx)(h.a,{data:N,sx:{mr:1}}),Object(w.jsx)(o.a,{variant:"contained",color:"primary",title:"Generate the UUID elements",onClick:j((function(e){k(y(e.version,e.quantity))})),endIcon:Object(w.jsx)(d.a,{}),children:"Generate"})]})})]})}),Object(w.jsx)(O.a,{label:"Result",result:N})]})]})}},358:function(e,t,a){"use strict";var n=a(94),r=a(325),i=(a(0),a(1)),c=Object(r.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=c(),a=e.iconType;return Object(i.jsx)("div",{className:t.titleContainer,children:Object(i.jsxs)("div",{className:t.titleWithIcon,children:[Object(i.jsx)(a,{className:t.icon}),Object(i.jsx)(n.a,{variant:"h5",className:t.title,children:e.title})]})})}},361:function(e,t,a){"use strict";var n=a(27),r=a(369),i=a(332),c=a(374),s=a.n(c),l=a(367),o=a.n(l),u=(a(0),a(138)),j=a(1),d=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,a=e.isDisabled,c=e.hoverMessage,l=e.feedbackMessage,b=e.Icon,m=void 0===b?s.a:b,x=Object(r.a)(e,d),f=Object(u.c)().setToasterState;return Object(j.jsx)(i.a,Object(n.a)(Object(n.a)({},x),{},{onClick:function(){if(t){var e=null!==l&&void 0!==l?l:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");o.a(t,{format:"text/plain"}),f({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||a,title:null!==c&&void 0!==c?c:"Copy to clipboard",variant:"contained",color:"primary",children:Object(j.jsx)(m,{})}))}},411:function(e,t,a){"use strict";var n=a(408),r=a(325),i=(a(0),a(1)),c=Object(r.a)((function(){return{result:{fontFamily:"monospace",height:"auto"}}}));t.a=function(e){var t=e.label,a=e.result,r=e.rows,s=void 0===r?10:r,l=e.maxRows,o=void 0===l?15:l,u=c();return Object(i.jsx)(n.a,{multiline:!0,minRows:s,maxRows:o,label:t,variant:"outlined",margin:"normal",fullWidth:!0,value:a,InputProps:{classes:{input:u.result}}})}}}]);
//# sourceMappingURL=33.7ebb2dca.chunk.js.map