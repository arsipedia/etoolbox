(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[36],{1058:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return te})),n.d(t,"mapDispatchToProps",(function(){return ne}));var a=n(12),c=n(349),r=n(1045),i=n(260),o=n(217),s=n(261),l=n(276),u=n(410),j=n(258),b=n(262),d=n(554),m=n(1026),O=n(67),h=n(256),f=n(332),p=n(336),x=n.n(p),g=n(905),v=n.n(g),k=n(906),P=n.n(k),y=n(411),N=n.n(y),C=n(907),S=n.n(C),I=n(0),w=n.n(I),U=n(93),W=n(95),T=n(8),D=n(1025),R=n(96),E=n(1050),H=n(1052),J=n(1051),M=n(1053),A=n(2),L=function(e){var t=e.title,n=e.children,a=e.isOpen,c=e.setIsOpen,r=e.onConfirm;return Object(A.jsxs)(E.a,{open:a,onClose:function(){return c(!1)},"aria-labelledby":"confirm-dialog",children:[Object(A.jsx)(M.a,{id:"confirm-dialog",children:t}),Object(A.jsx)(J.a,{children:n}),Object(A.jsxs)(H.a,{children:[Object(A.jsx)(h.a,{variant:"contained",onClick:function(){return c(!1)},color:"secondary",children:"No"}),Object(A.jsx)(h.a,{variant:"contained",onClick:function(){c(!1),r()},color:"default",children:"Yes"})]})]})},V=n(292),z=n(289),B=n(425),F=["?","0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","8","13","20","40","100"],G=new Map([[WebSocket.CLOSED,"close"],[WebSocket.OPEN,"open"],[WebSocket.CLOSING,"closing"],[WebSocket.CONNECTING,"connecting"]]),Y=n(37),q="".concat(70,"px"),K=function(e){var t=e.value,n=e.isDisabled,a=e.isSelected,c=e.onClick,r=Object(Y.a)();return Object(A.jsx)(h.a,{style:{maxWidth:q,maxHeight:q,minWidth:q,minHeight:q,margin:r.spacing(1)},variant:a?"contained":"outlined",disabled:n,title:"Estimate the current story point as: [".concat(t,"]"),color:"primary",onClick:function(){return c(t)},children:Object(A.jsx)(O.a,{variant:"h5",children:t})})},Q=n(11),X=n(257),Z=n(250),$=Object(Q.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(X.a),_=Object(Q.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(j.a),ee=Object(Z.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{height:"100%",margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},formControl:{marginRight:e.spacing(1)},submitEstimate:{marginTop:e.spacing(2),display:"flex",justifyContent:"center",flexWrap:"wrap"},estimatesVisibility:{alignItems:"center"},teamEstimates:{marginTop:e.spacing(4)},tableHeader:{backgroundColor:e.palette.primary.main}}}));function te(e){return{lastPockerPlanningHostName:e.textInputs.lastPockerPlanningHostName,lastPockerPlanningRoomUUID:e.textInputs.lastPockerPlanningRoomUUID,lastPockerPlanningRoomName:e.textInputs.lastPockerPlanningRoomName,lastPockerPlanningUsername:e.textInputs.lastPockerPlanningUsername}}function ne(e){return{storeInputText:function(t,n){return e(Object(R.b)(t,n))}}}t.default=Object(W.b)(te,ne)(Object(l.a)()((function(e){var t="Porker planning",n=ee(),p=Object(T.l)(),g=Object(T.n)(),k=g.hostName,y=g.roomUUID,C=g.roomName,W=e.lastPockerPlanningRoomUUID,R=e.lastPockerPlanningRoomName,E=e.lastPockerPlanningUsername,H=e.lastPockerPlanningHostName,J=e.storeInputText,M=Object(I.useRef)(),Y=Object(I.useState)(""),q=Object(a.a)(Y,2),Q=q[0],X=q[1],Z=Object(I.useState)(""),te=Object(a.a)(Z,2),ne=te[0],ae=te[1],ce=Object(I.useState)(!1),re=Object(a.a)(ce,2),ie=re[0],oe=re[1],se=Object(I.useState)(!1),le=Object(a.a)(se,2),ue=le[0],je=le[1],be=Object(I.useState)([]),de=Object(a.a)(be,2),me=de[0],Oe=de[1],he=function(e){var t=e.map((function(e){return e.estimate})).filter((function(e){return null!==e&&void 0!==e&&"?"!==e})).map((function(e){return Number(e)})),n=t.reduce((function(e,t){return e+Number(t)}),0),a=t.length>0?n/t.length:0;return{values:t,estimatesSum:n,estimatesAverage:Math.round(10*a+Number.EPSILON)/10}}(me),fe=he.estimatesAverage,pe=Object(B.b)(H)&&Object(B.b)(W)&&Object(B.b)(k)&&Object(B.b)(y),xe=Object(B.b)(H)&&Object(B.b)(W)&&Object(B.b)(R)&&Object(B.b)(E);Object(I.useEffect)((function(){C&&y&&k&&(J("lastPockerPlanningRoomName",C),J("lastPockerPlanningRoomUUID",y),J("lastPockerPlanningHostName",k))}),[y,C,k,J]),Object(I.useEffect)((function(){if(pe){var e="ws://".concat(H,"/ws?roomUUID=").concat(W),t=new WebSocket(e);t.onopen=function(){return ge(t.readyState)},t.onerror=function(){return ge(t.readyState)},t.onclose=function(){return ge(t.readyState)},t.onmessage=function(e){var t=JSON.parse(e.data);Oe(t.estimates)},M.current=t}}),[M,pe,H,W]);var ge=function(e){var t;return ae(null!==(t=G.get(e))&&void 0!==t?t:"")};Object(I.useEffect)((function(){return function(){var e;return null===(e=M.current)||void 0===e?void 0:e.close()}}),[]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(U.a,{title:t}),Object(A.jsxs)("div",{className:n.root,children:[Object(A.jsx)(z.a,{iconType:v.a,title:t}),Object(A.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(A.jsxs)(c.a,{container:!0,spacing:1,children:[Object(A.jsx)(c.a,{item:!0,md:3,sm:6,xs:12,children:Object(A.jsx)(r.a,{className:n.formControl,fullWidth:!0,children:Object(A.jsx)(f.a,{label:"Server (hostname)",placeholder:"Type the poker plannind hostname here",variant:"outlined",fullWidth:!0,margin:"normal",value:H,onChange:function(e){return J("lastPockerPlanningHostName",e.target.value)}})})}),Object(A.jsx)(c.a,{item:!0,md:3,sm:6,xs:12,children:Object(A.jsx)(r.a,{className:n.formControl,fullWidth:!0,children:Object(A.jsx)(f.a,{label:"Team name",placeholder:"Type the team name here",variant:"outlined",fullWidth:!0,margin:"normal",value:R,onChange:function(e){return J("lastPockerPlanningRoomName",e.target.value)}})})}),Object(A.jsx)(c.a,{item:!0,md:3,sm:6,xs:12,children:Object(A.jsx)(r.a,{className:n.formControl,fullWidth:!0,children:Object(A.jsx)(f.a,{label:"Your name",placeholder:"Type your name here",variant:"outlined",fullWidth:!0,margin:"normal",value:E,onChange:function(e){return J("lastPockerPlanningUsername",e.target.value)}})})}),Object(A.jsx)(c.a,{item:!0,md:3,sm:6,xs:12,children:Object(A.jsxs)(c.a,{container:!0,justifyContent:"flex-end",alignItems:"center",className:n.toolbar,children:[Object(A.jsxs)(h.a,{variant:"contained",title:"Register the team and start planning",color:"primary",onClick:function(){var e=Object(D.a)();p("/PokerPlanning/".concat(H,"/").concat(e,"/").concat(R),{replace:!0})},children:["Join [",ne,"]"]}),Object(A.jsx)(V.a,{data:window.location.href,Icon:P.a,hoverMessage:"Copy link to clipboard for sharing",feedbackMessage:"Link copied to clipboard, you can now share to all members"})]})})]})}),Object(A.jsx)("div",{className:n.submitEstimate,children:F.map((function(e){return Object(A.jsx)(w.a.Fragment,{children:Object(A.jsx)(K,{isDisabled:!xe,isSelected:Q===e,value:e,onClick:function(){return function(e){var t;X(e);var n={type:"vote",payload:{roomUUID:null!==W&&void 0!==W?W:"",username:null!==E&&void 0!==E?E:"",estimate:e,estimatedAt:new Date}};null===(t=M.current)||void 0===t||t.send(JSON.stringify(n))}(e)}},e)},e)}))}),Object(A.jsx)("div",{className:n.teamEstimates,children:Object(A.jsx)(i.a,{component:o.a,children:Object(A.jsxs)(s.a,{size:Object(l.c)("md",e.width)?"medium":"small",children:[Object(A.jsx)(u.a,{className:n.tableHeader,children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)($,{component:"th",scope:"row",children:"Team member"}),Object(A.jsx)($,{component:"th",scope:"row",align:"center",children:"Voted"}),Object(A.jsx)($,{component:"th",scope:"row",align:"center",children:Object(A.jsxs)(h.a,{variant:"text",onClick:function(){return oe(!0)},children:["Story points ",Object(A.jsx)(x.a,{})]})})]})}),Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(_,{children:[Object(A.jsx)($,{children:Object(A.jsx)(d.a,{control:Object(A.jsx)(m.a,{checked:ue,onChange:function(){return je((function(e){return!e}))}}),label:"story points visibility"})}),Object(A.jsx)($,{}),Object(A.jsx)($,{align:"center",onClick:function(){return je((function(e){return!e}))},children:ue?Object(A.jsx)(N.a,{}):Object(A.jsx)(S.a,{})})]},"estimatesVisibility"),me.map((function(e){var t=e.username,n=e.estimate,a=null!==n&&void 0!==n?n:"\u2026",c=n?Object(A.jsx)(S.a,{}):"\u2026";return Object(A.jsxs)(_,{children:[Object(A.jsx)($,{children:t}),Object(A.jsx)($,{align:"center",children:n?"\u2714":""}),Object(A.jsx)($,{align:"center",children:ue?a:c})]},t)})),Object(A.jsxs)(_,{children:[Object(A.jsx)($,{children:Object(A.jsx)(O.a,{variant:"h6",children:"Average"})}),Object(A.jsx)($,{}),Object(A.jsx)($,{align:"center",children:Object(A.jsx)(O.a,{variant:"h6",children:ue?fe:"\u2026"})})]},"average")]})]})})})]}),Object(A.jsx)(L,{title:"Confirmation",isOpen:ie,setIsOpen:oe,onConfirm:function(){var e;null===(e=M.current)||void 0===e||e.send(JSON.stringify({type:"reset"})),je(!1),X("")},children:"Are you sure you want to delete all votes?"})]})})))},289:function(e,t,n){"use strict";var a=n(67),c=n(250),r=(n(0),n(2)),i=Object(c.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=i(),n=e.iconType;return Object(r.jsx)("div",{className:t.titleContainer,children:Object(r.jsxs)("div",{className:t.titleWithIcon,children:[Object(r.jsx)(n,{className:t.icon}),Object(r.jsx)(a.a,{variant:"h5",className:t.title,children:e.title})]})})}},292:function(e,t,n){"use strict";var a=n(256),c=n(299),r=n.n(c),i=n(295),o=n.n(i),s=(n(0),n(94)),l=n(2);t.a=function(e){var t=e.data,n=e.hoverMessage,c=e.feedbackMessage,i=e.Icon,u=void 0===i?r.a:i,j=Object(s.c)().setToasterState;return Object(l.jsx)(a.a,{onClick:function(){if(t){var e=null!==c&&void 0!==c?c:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");o.a(t,{format:"text/plain"}),j({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t,title:null!==n&&void 0!==n?n:"Copy to clipboard",variant:"contained",color:"primary",children:Object(l.jsx)(u,{})})}},425:function(e,t,n){"use strict";function a(e){return!e||0===e.trim().length}function c(e){return!a(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}))}}]);
//# sourceMappingURL=36.101c5af3.chunk.js.map