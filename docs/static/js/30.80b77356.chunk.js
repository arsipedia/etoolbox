(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[30],{1181:function(e,t,a){"use strict";a.r(t),a.d(t,"mapStateToProps",(function(){return k})),a.d(t,"mapDispatchToProps",(function(){return I}));var n=a(13),r=a(0),s=a.n(r),i=a(139),o=a(338),l=a(347),c=a(325),u=a(160),b=a.n(u),d=a(408),p=a(853),j=a.n(p),x=a(412),f=a(140),g=a(23),h=a(890),m=a.n(h);function O(e,t){return"<span>".concat(e,"</span>")}var v=a(358),y=a(361),w=a(137),R=a(411),S=a(55),C=a(1),T=Object(c.a)((function(e){return{root:{margin:e.spacing(1)},matches:{padding:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,"& span":{backgroundColor:"yellow",fontWeight:"bold",color:"black"}},toolbar:{margin:0,padding:0}}}));function k(e){return{regularExpression:e.textInputs.lastRegEx,inputText:e.textInputs.lastRegExTextSample}}function I(e){return{storeInputText:function(t,a){return e(Object(f.b)(t,a))}}}t.default=Object(i.b)(k,I)((function(e){var t="Regular expressions tester",a=T(),r=Object(S.e)("md"),i=e.regularExpression,c=e.inputText,u=e.storeInputText,p=s.a.useState(""),f=Object(n.a)(p,2),h=f[0],k=f[1],I=s.a.useState(""),N=Object(n.a)(I,2),E=N[0],W=N[1],F=Object(x.a)((function(e,t){k(function(e,t){if(!e||!t)return"";var a=t.replaceAll("\n","<br />");try{var n=m()(e);return n.global?a.replaceAll(n,O):a.replace(n,O)}catch(r){return JSON.stringify(r)}}(e,t)),W(function(e,t){var a=[];if(!e||!t)return"";try{var n,r=m()(e);if(!r.global)return"";for(;null!==(n=r.exec(t));)a.push(n[0]);var s=new Set(a);return console.log("Sorted set of unique ".concat(s.size," entries:"),Object(g.a)(s).sort().join(", ")),a.join(", ")}catch(i){return JSON.stringify(i)}}(e,t))}),300);return s.a.useEffect((function(){return F(i,c)}),[i,c,F]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w.a,{title:t}),Object(C.jsxs)("div",{className:a.root,children:[Object(C.jsx)(v.a,{iconType:b.a,title:t}),Object(C.jsx)(d.a,{autoFocus:r,id:"regex",label:"Regular expression",placeholder:"Type the regular expression. Example: /example/g",variant:"outlined",margin:"normal",fullWidth:!0,value:i,onChange:function(e){return u("lastRegEx",e.target.value)}}),Object(C.jsxs)(o.a,{className:a.toolbar,children:[Object(C.jsx)(l.a,{display:"flex",flexGrow:1}),Object(C.jsx)(y.a,{data:i})]}),Object(C.jsx)(d.a,{id:"content",label:"Content to test the regular expression against",placeholder:"Paste or type the content here",multiline:!0,minRows:6,maxRows:r?20:6,variant:"outlined",margin:"normal",fullWidth:!0,value:c,onChange:function(e){return u("lastRegExTextSample",e.target.value)}}),Object(C.jsx)("div",{className:a.matches,children:j()(h)}),Object(C.jsxs)("p",{children:["Collection of values. Could be usefull for Jira tickets numbers with expressions like:",Object(C.jsx)("br",{}),Object(C.jsx)("strong",{children:"issueKey in (FS-3456, WS-3213, FS-9988)"})]}),Object(C.jsx)(R.a,{result:E}),Object(C.jsxs)(o.a,{className:a.toolbar,children:[Object(C.jsx)(l.a,{display:"flex",flexGrow:1}),Object(C.jsx)(y.a,{data:E})]})]})]})}))},358:function(e,t,a){"use strict";var n=a(94),r=a(325),s=(a(0),a(1)),i=Object(r.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=i(),a=e.iconType;return Object(s.jsx)("div",{className:t.titleContainer,children:Object(s.jsxs)("div",{className:t.titleWithIcon,children:[Object(s.jsx)(a,{className:t.icon}),Object(s.jsx)(n.a,{variant:"h5",className:t.title,children:e.title})]})})}},361:function(e,t,a){"use strict";var n=a(27),r=a(369),s=a(332),i=a(374),o=a.n(i),l=a(367),c=a.n(l),u=(a(0),a(138)),b=a(1),d=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,a=e.isDisabled,i=e.hoverMessage,l=e.feedbackMessage,p=e.Icon,j=void 0===p?o.a:p,x=Object(r.a)(e,d),f=Object(u.c)().setToasterState;return Object(b.jsx)(s.a,Object(n.a)(Object(n.a)({},x),{},{onClick:function(){if(t){var e=null!==l&&void 0!==l?l:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");c.a(t,{format:"text/plain"}),f({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||a,title:null!==i&&void 0!==i?i:"Copy to clipboard",variant:"contained",color:"primary",children:Object(b.jsx)(j,{})}))}},411:function(e,t,a){"use strict";var n=a(408),r=a(325),s=(a(0),a(1)),i=Object(r.a)((function(){return{result:{fontFamily:"monospace",height:"auto"}}}));t.a=function(e){var t=e.label,a=e.result,r=e.rows,o=void 0===r?10:r,l=e.maxRows,c=void 0===l?15:l,u=i();return Object(s.jsx)(n.a,{multiline:!0,minRows:o,maxRows:c,label:t,variant:"outlined",margin:"normal",fullWidth:!0,value:a,InputProps:{classes:{input:u.result}}})}},877:function(e,t){}}]);
//# sourceMappingURL=30.80b77356.chunk.js.map