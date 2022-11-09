"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[545],{87591:function(e,t,n){var a=n(47313),r=n(42669),i=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,o=i();return a.createElement("div",{className:o.titleWithIcon},a.createElement(n,{className:o.icon}),a.createElement(r.Z,{variant:"h5",className:o.title},t))}},74545:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(29439),r=n(47313),i=n(51997),o=n(12622),l=n(92029),c=n(16157),u=n(42669),s=n(73477),d=n(92229),m=n.n(d),g=n(30161),f=n(48861),p=n(90182),v=n(87591),h=n(13729);function E(e){if(e<0||e>1)throw new Error("Invalid opacity value");return Math.round(255*e).toString(16)}function b(e,t){var n,a,r,i=function(e){var t=e.target,n=t.getBoundingClientRect(),a=n.left,r=n.top,i=e.pageX-a,o=e.pageY-r,l=t.clientWidth,c=t.clientHeight,u=t.naturalWidth,s=t.naturalHeight,d=Math.round(i/l*u),m=Math.round(o/c*s);return{px:d,py:m,width:u,height:s}}(e),o=document.createElement("canvas"),l=o.getContext("2d");if(!l)return{r:0,g:0,b:0,a:1};o.width=i.width,o.height=i.height,l.drawImage(t,0,0);var c=l.getImageData(i.px,i.py,1,1).data;return{r:null!==(n=+c[0])&&void 0!==n?n:0,g:null!==(a=+c[1])&&void 0!==a?a:0,b:null!==(r=+c[2])&&void 0!==r?r:0,a:1}}var y=function(e){return"#"+("000000"+function(e,t,n){if(e>255||t>255||n>255)throw new Error("Invalid color component");return(e<<16|t<<8|n).toString(16)}(e.r,e.g,e.b)).slice(-6)};var C=n(48070),x={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},Z=(0,C.Z)((function(e){return{root:{margin:e.spacing(1)},image:{width:"100%",margin:5,border:"dashed 1px grey"},imageSelector:{margin:e.spacing(2),textAlign:"center"},toolbar:{margin:e.spacing(2)},sample:{cursor:"pointer",width:"100%",height:50,marginBottom:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,textAlign:"center",fontSize:16,fontFamily:"monospace",textShadow:"1px 1px lightgrey"},colorPicker:{marginTop:e.spacing(2)}}})),k="",w=function(){var e,t,n,d="Color picker",C=Z(),w=(0,h.IR)().setToasterState,I=r.useState(""),S=(0,a.Z)(I,2),N=S[0],D=S[1],R=r.useState(),j=(0,a.Z)(R,2),B=j[0],F=j[1],W=r.useState(k),A=(0,a.Z)(W,2),T=A[0],L=A[1],H=r.useState(k),M=(0,a.Z)(H,2),z=M[0],P=M[1],U=r.useState(k),_=(0,a.Z)(U,2),q=_[0],O=_[1],X=r.useState(k),Y=(0,a.Z)(X,2),G=Y[0],J=Y[1];function K(e){!function(e,t){if(e)for(var n=0;n<e.length;n++){var a=e[n];if(a.type.startsWith("image")){var r=new FileReader;r.onload=t,r.readAsDataURL(a.getAsFile());break}}}((e.clipboardData||e.originalEvent.clipboardData||e.originalEvent.clipboard).items,(function(e){var t;return D(null===(t=e.target)||void 0===t?void 0:t.result)}))}function Q(e){var t=document.getElementById("image");if(t){var n=b(e,t);F(n)}}(0,r.useEffect)((function(){var e,t;B?(L(y(B)),P(y(B)+E(null!==(e=B.a)&&void 0!==e?e:1)),O("rgb(".concat(B.r,", ").concat(B.g,", ").concat(B.b,")")),J("rgba(".concat(B.r,", ").concat(B.g,", ").concat(B.b,", ").concat(null!==(t=B.a)&&void 0!==t?t:1,")"))):(L(k),P(k),O(k),J(k))}),[B]),r.useEffect((function(){return document.onpaste=K,function(){document.removeEventListener("onpaste",K)}}),[]),r.useEffect((function(){if(N){var e=document.getElementById("image");e&&e.addEventListener("click",Q)}}),[N]);var V=function(e){var t=e.substring(0,20),n="Content copied into clipboard: ".concat(t," \u2026");m()(e,{format:"text/plain"}),w({open:!0,message:n,type:"success",autoHideDuration:2e3})};return r.createElement(r.Fragment,null,r.createElement(p.q,{title:d}),r.createElement("div",{className:C.root},r.createElement(v.Z,{iconType:o.Z,title:d}),r.createElement(c.Z,{display:"flex",alignItems:"center",justifyContent:"center",className:C.imageSelector},!N&&r.createElement("div",null,r.createElement(u.Z,{variant:"body2"},"paste image or select a file:"," ",r.createElement("input",{type:"file",color:"primary",accept:"image/*",onChange:function(e){var t,n;return function(e){if(e){var t=new FileReader;t.onload=function(e){var t;return D(null===(t=e.target)||void 0===t?void 0:t.result)},t.readAsDataURL(e)}}(null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0])},id:"files-selector-action",style:{display:"none"}}),r.createElement("label",{htmlFor:"files-selector-action"},r.createElement(s.Z,{variant:"contained",component:"span",color:"primary"},r.createElement(l.Z,null))))),N&&r.createElement(g.e,{style:x,defaultSize:{width:300,height:"100%"}},r.createElement("img",{id:"image",src:N,alt:"Clipboard content",className:C.image}))),r.createElement(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",className:C.colorPicker},r.createElement(u.Z,{variant:"body2"},"or just pick a color:"),r.createElement(f.xS,{color:B,onChangeComplete:function(e){return F(e.rgb)}}),r.createElement("pre",null,"Opacity to hexa: ",100*(null!==(e=null===B||void 0===B?void 0:B.a)&&void 0!==e?e:1),"% = ",null!==(t=null===B||void 0===B?void 0:B.a)&&void 0!==t?t:1," = ",E(null!==(n=null===B||void 0===B?void 0:B.a)&&void 0!==n?n:1))),N&&r.createElement(c.Z,{display:"flex",alignItems:"center",justifyContent:"center"},r.createElement(s.Z,{endIcon:r.createElement(i.Z,null),variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),D(""),F(void 0)}},"Clear")),r.createElement(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.createElement("div",{className:C.sample,style:{backgroundColor:T},onClick:function(){return V(T)}},T),r.createElement("div",{className:C.sample,style:{backgroundColor:z},onClick:function(){return V(z)}},z),r.createElement("div",{className:C.sample,style:{backgroundColor:q},onClick:function(){return V(q)}},q),r.createElement("div",{className:C.sample,style:{backgroundColor:G},onClick:function(){return V(G)}},G))))}}}]);