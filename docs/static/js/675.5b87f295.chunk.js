"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[675],{84121:function(e,t,n){var o=n(45987),r=n(47313),a=n(94622),i=n(73477),c=n(92229),l=n.n(c),s=n(13729),u=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.Z=function(e){var t=e.data,n=e.isDisabled,c=e.hoverMessage,d=e.feedbackMessage,m=e.Icon,p=void 0===m?a.Z:m,f=(0,o.Z)(e,u),v=(0,s.IR)().setToasterState;return r.createElement(i.Z,Object.assign({disabled:!t||n,title:null!==c&&void 0!==c?c:"Copy to clipboard",variant:"contained","data-testid":"copy-to-clipboard",color:"primary"},f,{onClick:function(){if(t){var e=null!==d&&void 0!==d?d:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");l()(t,{format:"text/plain"}),v({open:!0,message:e,type:"success",autoHideDuration:2e3})}}}),r.createElement(p,null))}},87591:function(e,t,n){var o=n(47313),r=n(42669),a=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,i=a();return o.createElement("div",{className:i.titleWithIcon},o.createElement(n,{className:i.icon}),o.createElement(r.Z,{variant:"h5",className:i.title},t))}},50872:function(e,t,n){n.r(t),n.d(t,{default:function(){return I},mapDispatchToProps:function(){return N},mapStateToProps:function(){return M}});var o=n(74165),r=n(15861),a=n(29439),i=n(47313),c=n(43187),l=n(47575),s=n(82937),u=n(67881),d=n(77449),m=n(70800),p=n(16157),f=n(73477),v=n(92484),Z=n(82821),g=n(48070),h=n(46316),b=n(90182),C=n(66135),x=n(58506),y=n(84121),w=n(87591),R=n(13729),E=n(63063),k={errorCorrectionLevel:"H",type:"image/png",width:200,quality:.3,margin:1,color:{dark:"#000000FF",light:"#FFFFFFFF"}},F=(0,g.Z)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0},qrOptions:{fontFamily:"monospace"},generatedQR:{padding:e.spacing(2)}}}));function M(e){return{inputText:e.textInputs.lastQRCodeTextValue,inputOptions:e.textInputs.lastQRCodeOptions}}function N(e){return{storeInputText:function(t,n){return e((0,x.j)(t,n))}}}var I=(0,C.$j)(M,N)((function(e){var t=e.inputText,n=e.inputOptions,g=e.storeInputText,C="QR Code generator",x=F(),M=(0,E.NR)("md"),N=i.useState(""),I=(0,a.Z)(N,2),S=I[0],T=I[1],Q=(0,R.IR)().setToasterState,D=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(S);case 3:return t=e.sent,e.next=6,t.blob();case 6:return n=e.sent,e.next=9,navigator.clipboard.write([new ClipboardItem({"image/png":n})]);case 9:Q({open:!0,message:"Image copied",type:"success",autoHideDuration:2e3}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),"Unexpected copy error, see detail on console",Q({open:!0,message:"Unexpected copy error, see detail on console",type:"warning",autoHideDuration:2e3});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return i.createElement(i.Fragment,null,i.createElement(b.q,{title:C}),i.createElement("div",{className:x.root},i.createElement(w.Z,{iconType:l.Z,title:C}),i.createElement("form",{noValidate:!0,autoComplete:"off"},i.createElement(s.ZP,{container:!0,spacing:1},i.createElement(s.ZP,{item:!0,md:6,sm:12,xs:12},i.createElement(u.Z,{autoFocus:M,label:"Text to store into QR Code",placeholder:"Paste or type the content here",multiline:!0,minRows:12,maxRows:M?20:12,variant:"outlined",margin:"normal",fullWidth:!0,value:t,onChange:function(e){return g("lastQRCodeTextValue",e.target.value)}})),i.createElement(s.ZP,{item:!0,md:6,sm:12,xs:12},i.createElement(u.Z,{label:"QR Code generation options",multiline:!0,minRows:12,maxRows:M?20:12,variant:"outlined",margin:"normal",fullWidth:!0,InputProps:{classes:{input:x.qrOptions}},value:n,onChange:function(e){return g("lastQRCodeOptions",e.target.value)},helperText:i.createElement(d.Z,{target:"_blank",rel:"noreferrer",href:"https://www.npmjs.com/package/qrcode#qr-code-options"},"Options documentation available here!")})))),i.createElement(m.Z,{className:x.toolbar},i.createElement(p.Z,{display:"flex",flexGrow:1}),i.createElement(y.Z,{hoverMessage:"Copy image data URL",data:S,sx:{mr:1}}),i.createElement(f.Z,{disabled:!S,variant:"contained",title:"Copy the QR Code image into the clipboard",color:"primary",onClick:D,endIcon:i.createElement(c.Z,null),sx:{mr:1}},"Copy Image"),i.createElement(f.Z,{variant:"contained",color:"primary",title:"Generate the QR code using the info and encoding parameters",onClick:function(){if(t){var e=n?JSON.parse(n):k;h.toDataURL(t,e,(function(t,n){if(t)throw t;T(n),g("lastQRCodeOptions",JSON.stringify(e,null,2))}))}},disabled:!t,endIcon:i.createElement(l.Z,null)},"Generate")),S&&i.createElement(v.Z,{className:x.generatedQR},i.createElement(p.Z,{display:"flex",alignItems:"center",justifyContent:"center",p:1},i.createElement("img",{id:"imgQrCode",src:S,alt:"QR Code"})),i.createElement(Z.Z,null,i.createElement(u.Z,{label:"Full img tag",fullWidth:!0,value:'<img alt="QR Code" src="'.concat(S,'"/>'),margin:"normal",variant:"outlined"}),i.createElement(u.Z,{label:"QR Code. Copy-paste into 'src' attribute",fullWidth:!0,value:S,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"})))))}))},43187:function(e,t,n){var o=n(64836);t.Z=void 0;var r=o(n(45045)),a=n(46417),i=(0,r.default)((0,a.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");t.Z=i},92484:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(87462),r=n(63366),a=n(47313),i=n(83061),c=n(21921),l=n(42379),s=n(53010),u=n(32415),d=n(77430),m=n(32298);function p(e){return(0,m.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var f=n(46417),v=["className","raised"],Z=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiCard"}),a=n.className,l=n.raised,u=void 0!==l&&l,d=(0,r.Z)(n,v),m=(0,o.Z)({},n,{raised:u}),g=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},p,t)}(m);return(0,f.jsx)(Z,(0,o.Z)({className:(0,i.Z)(g.root,a),elevation:u?8:void 0,ref:t,ownerState:m},d))}))},82821:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(87462),r=n(63366),a=n(47313),i=n(83061),c=n(21921),l=n(42379),s=n(53010),u=n(77430),d=n(32298);function m(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var p=n(46417),f=["className","component"],v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiCardContent"}),a=n.className,l=n.component,u=void 0===l?"div":l,d=(0,r.Z)(n,f),Z=(0,o.Z)({},n,{component:u}),g=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},m,t)}(Z);return(0,p.jsx)(v,(0,o.Z)({as:u,className:(0,i.Z)(g.root,a),ownerState:Z,ref:t},d))}))},77449:function(e,t,n){n.d(t,{Z:function(){return M}});var o=n(93433),r=n(29439),a=n(4942),i=n(63366),c=n(87462),l=n(47313),s=n(83061),u=n(21921),d=n(28170),m=n(42379),p=n(53010),f=n(45730),v=n(2995),Z=n(42669),g=n(77430),h=n(32298);function b(e){return(0,h.Z)("MuiLink",e)}var C=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=n(46428),y=n(17551),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=function(e){var t=e.theme,n=e.ownerState,o=function(e){return w[e]||e}(n.color),r=(0,x.D)(t,"palette.".concat(o),!1)||n.color,a=(0,x.D)(t,"palette.".concat(o,"Channel"));return"vars"in t&&a?"rgba(".concat(a," / 0.4)"):(0,y.Fq)(r,.4)},E=n(46417),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],F=(0,m.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,d.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,c.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:R({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(C.focusVisible),{outline:"auto"}))})),M=l.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiLink"}),a=n.className,m=n.color,Z=void 0===m?"primary":m,g=n.component,h=void 0===g?"a":g,C=n.onBlur,x=n.onFocus,y=n.TypographyClasses,R=n.underline,M=void 0===R?"always":R,N=n.variant,I=void 0===N?"inherit":N,S=n.sx,T=(0,i.Z)(n,k),Q=(0,f.Z)(),D=Q.isFocusVisibleRef,O=Q.onBlur,P=Q.onFocus,j=Q.ref,V=l.useState(!1),H=(0,r.Z)(V,2),L=H[0],W=H[1],q=(0,v.Z)(t,j),B=(0,c.Z)({},n,{color:Z,component:h,focusVisible:L,underline:M,variant:I}),A=function(e){var t=e.classes,n=e.component,o=e.focusVisible,r=e.underline,a={root:["root","underline".concat((0,d.Z)(r)),"button"===n&&"button",o&&"focusVisible"]};return(0,u.Z)(a,b,t)}(B);return(0,E.jsx)(F,(0,c.Z)({color:Z,className:(0,s.Z)(A.root,a),classes:y,component:h,onBlur:function(e){O(e),!1===D.current&&W(!1),C&&C(e)},onFocus:function(e){P(e),!0===D.current&&W(!0),x&&x(e)},ref:q,ownerState:B,variant:I,sx:[].concat((0,o.Z)(Object.keys(w).includes(Z)?[]:[{color:Z}]),(0,o.Z)(Array.isArray(S)?S:[S]))},T))}))}}]);