"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[317],{87591:function(e,t,n){var r=n(47313),o=n(42669),a=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,i=a();return r.createElement("div",{className:i.titleWithIcon},r.createElement(n,{className:i.icon}),r.createElement(o.Z,{variant:"h5",className:i.title},t))}},91026:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(29439),o=n(47313),a=n(57983),i=n(10383),c=n(29266),l=n(47011),u=n(59017),s=n(18104),m=n(95486),d=(0,n(48070).Z)((function(e){return{root:{margin:e.spacing(1)}}})),p=function(e){var t=e.label,n=void 0===t?"Search":t,p=e.autofocus,f=void 0!==p&&p,h=e.fullWidth,g=void 0!==h&&h,Z=e.initialFilter,v=void 0===Z?"":Z,b=e.onFilterChange,E=o.useState(v),w=(0,r.Z)(E,2),y=w[0],x=w[1],P=d(),C=(0,m.y1)((function(e){return b(e)}),300);return o.useEffect((function(){return C(y)}),[y,C]),o.createElement(i.Z,{fullWidth:g,className:P.root},o.createElement(c.Z,{htmlFor:"searchField"},n),o.createElement(l.Z,{id:"searchField",autoFocus:f,type:"text",value:y,onChange:function(e){return x(e.target.value)},endAdornment:o.createElement(u.Z,{position:"end"},o.createElement(s.Z,null,o.createElement(a.Z,null)))}))}},39905:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(29439),o=n(47313),a=n(42669),i=n(69563),c=(0,n(48070).Z)((function(e){return{root:{margin:e.spacing(1)}}})),l=function(e){var t=e.count,n=e.searching,l=c(),u=o.useState(i.L),s=(0,r.Z)(u,2),m=s[0],d=s[1];return o.useEffect((function(){n?d("filtering\u2026"):setTimeout((function(){return d(i.L)}),800)}),[n]),o.createElement("div",{className:l.root},o.createElement(a.Z,{align:"right"},m),o.createElement(a.Z,{align:"right"},t))}},77317:function(e,t,n){n.r(t),n.d(t,{default:function(){return V},mapDispatchToProps:function(){return A},mapStateToProps:function(){return D}});var r=n(29439),o=n(47313),a=n(13241),i=n(10237),c=n(70800),l=n(16157),u=n(61359),s=n(39874),m=n(32415),d=n(44874),p=n(90495),f=n(59629),h=n(53805),g=n(77449),Z=n(90182),v=n(66135),b=n(43309),E=n(58506),w=n(87591),y=n(91026),x=n(39905),P=n(7049),C=n(64118),S=n(63063),k=n(37982),N=n(46241),j=n(48070),F=(0,N.Z)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(k.Z),R=(0,N.Z)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(f.Z),T=(0,j.Z)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}}}));function D(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function A(e){return{listGithubUserProjectsRequested:function(t){return e((0,b.Rl)(t))},storeInputText:function(t,n){return e((0,E.j)(t,n))}}}var V=(0,v.$j)(D,A)((function(e){var t=e.inputText,n=e.searching,v=e.projects,b=e.listGithubUserProjectsRequested,E=e.storeInputText,k="Github user projects",N=T(),j=(0,S.NR)("md"),D=o.useState(t),A=(0,r.Z)(D,2),V=A[0],L=A[1],U=(0,P.t_)().setGlobalSpinnerState,z=(0,C.h)(),B=z.page,G=z.setPage,M=z.rowsPerPage,W=z.handleChangeRowsPerPage,_=B*M;return o.useEffect((function(){n&&t?U({open:!0}):setTimeout((function(){return U({open:!1})}),500)}),[n,t,U]),o.createElement(o.Fragment,null,o.createElement(Z.q,{title:k}),o.createElement("div",{className:N.root},o.createElement(w.Z,{iconType:a.Z,title:k}),o.createElement(c.Z,{className:N.toolbar},o.createElement(y.Z,{autofocus:j,label:"Username",initialFilter:V,onFilterChange:function(e){L(e),b(e),E("lastGithubUsernameValue",e)}}),o.createElement(l.Z,{display:"flex",flexGrow:1}),o.createElement(x.Z,{count:v.length,searching:n})),o.createElement(u.Z,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:v.length,rowsPerPage:M,page:B,onPageChange:function(e,t){return G(t)},onRowsPerPageChange:W}),o.createElement(s.Z,{component:m.Z},o.createElement(d.Z,{size:j?"medium":"small"},o.createElement(p.Z,{className:N.tableHeader},o.createElement(f.Z,null,o.createElement(F,{component:"th",scope:"row"},"Project"),o.createElement(F,{component:"th",scope:"row"},"Description"),o.createElement(F,{component:"th",scope:"row",className:N.dateColumn},"Updated"),o.createElement(F,{component:"th",scope:"row"},o.createElement(i.Z,null)))),o.createElement(h.Z,null,v.slice(_,_+M).map((function(e){return o.createElement(R,{key:e.id},o.createElement(F,null,o.createElement(g.Z,{href:e.html_url,target:"_blank",rel:"noreferrer"},e.name)),o.createElement(F,null,e.description),o.createElement(F,{className:N.dateColumn},new Date(e.updated_at).toLocaleDateString()),o.createElement(F,{className:N.watchColumn},e.watchers_count))})))))))}))},64118:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(29439),o=n(47313),a=function(){var e=(0,o.useState)(0),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,o.useState)(10),c=(0,r.Z)(i,2),l=c[0],u=c[1];return{page:n,setPage:a,rowsPerPage:l,handleChangeRowsPerPage:function(e){u(+e.target.value),a(0)}}}},10237:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45045)),a=n(46417),i=(0,o.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=i},77449:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(93433),o=n(29439),a=n(4942),i=n(63366),c=n(87462),l=n(47313),u=n(83061),s=n(21921),m=n(28170),d=n(42379),p=n(53010),f=n(45730),h=n(2995),g=n(42669),Z=n(77430),v=n(32298);function b(e){return(0,v.Z)("MuiLink",e)}var E=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(46428),y=n(17551),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=function(e){var t=e.theme,n=e.ownerState,r=function(e){return x[e]||e}(n.color),o=(0,w.D)(t,"palette.".concat(r),!1)||n.color,a=(0,w.D)(t,"palette.".concat(r,"Channel"));return"vars"in t&&a?"rgba(".concat(a," / 0.4)"):(0,y.Fq)(o,.4)},C=n(46417),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,d.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,m.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,c.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:P({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(E.focusVisible),{outline:"auto"}))})),N=l.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiLink"}),a=n.className,d=n.color,g=void 0===d?"primary":d,Z=n.component,v=void 0===Z?"a":Z,E=n.onBlur,w=n.onFocus,y=n.TypographyClasses,P=n.underline,N=void 0===P?"always":P,j=n.variant,F=void 0===j?"inherit":j,R=n.sx,T=(0,i.Z)(n,S),D=(0,f.Z)(),A=D.isFocusVisibleRef,V=D.onBlur,L=D.onFocus,U=D.ref,z=l.useState(!1),B=(0,o.Z)(z,2),G=B[0],M=B[1],W=(0,h.Z)(t,U),_=(0,c.Z)({},n,{color:g,component:v,focusVisible:G,underline:N,variant:F}),I=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,m.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,b,t)}(_);return(0,C.jsx)(k,(0,c.Z)({color:g,className:(0,u.Z)(I.root,a),classes:y,component:v,onBlur:function(e){V(e),!1===A.current&&M(!1),E&&E(e)},onFocus:function(e){L(e),!0===A.current&&M(!0),w&&w(e)},ref:W,ownerState:_,variant:F,sx:[].concat((0,r.Z)(Object.keys(x).includes(g)?[]:[{color:g}]),(0,r.Z)(Array.isArray(R)?R:[R]))},T))}))}}]);