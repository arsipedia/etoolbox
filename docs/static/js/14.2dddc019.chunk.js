"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[14],{84121:function(e,t,n){var a=n(45987),r=n(47313),i=n(94622),l=n(73477),o=n(92229),c=n.n(o),s=n(13729),u=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.Z=function(e){var t=e.data,n=e.isDisabled,o=e.hoverMessage,d=e.feedbackMessage,m=e.Icon,f=void 0===m?i.Z:m,p=(0,a.Z)(e,u),g=(0,s.IR)().setToasterState;return r.createElement(l.Z,Object.assign({disabled:!t||n,title:null!==o&&void 0!==o?o:"Copy to clipboard",variant:"contained","data-testid":"copy-to-clipboard",color:"primary"},p,{onClick:function(){if(t){var e=null!==d&&void 0!==d?d:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");c()(t,{format:"text/plain"}),g({open:!0,message:e,type:"success",autoHideDuration:2e3})}}}),r.createElement(f,null))}},87591:function(e,t,n){var a=n(47313),r=n(42669),i=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,l=i();return a.createElement("div",{className:l.titleWithIcon},a.createElement(n,{className:l.icon}),a.createElement(r.Z,{variant:"h5",className:l.title},t))}},13470:function(e,t,n){n.d(t,{$:function(){return s}});var a=n(47313),r=n(48070),i=n(92145),l=n(8334),o=n.n(l),c=(0,r.Z)((function(){return{root:{"& .spinner_overlay":{background:"rgba(0, 0, 0, 0.3)"}}}})),s=function(e){var t=e.active,n=e.children,r=c();return a.createElement(i.Z,{classNamePrefix:"spinner_",className:r.root,active:t,spinner:a.createElement(o(),{color:"#bf3a2b"})},n)}},9014:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(93433),r=n(29439),i=n(47313),l=n(52535),o=n(92484),c=n(42669),s=n(16157),u=n(82821),d=n(67881),m=n(70800),f=n(87233),p=n(30161),g=n(85093),v=n(90182),E=n(84121),b=n(87591),Z=n(13470),h=n(1413),y=25e4;var x=n(48070),k={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},w=(0,x.Z)((function(e){return{root:{margin:e.spacing(1),flexGrow:1},header:{padding:"20px 0"},dropzone:{flex:"1",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},image:{width:"100%"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}})),z=function(){var e="Base64 file encoder",t=w(),n=(0,i.useState)([]),x=(0,r.Z)(n,2),z=x[0],I=x[1],C=(0,i.useState)([]),N=(0,r.Z)(C,2),D=N[0],F=N[1],R=(0,i.useCallback)((function(e,t){F(t.map((function(e){return{name:e.file.name,size:e.file.size,error:"Exceeds size limit: ".concat((0,f.Z)(y))}}))),I([]),e.forEach((function(e){return function(e){return new Promise((function(t,n){var a=new FileReader,r={name:e.name,size:e.size};a.addEventListener("abort",(function(e){return n("File upload aborted: ".concat(e))})),a.addEventListener("error",(function(e){return n("File upload error: ".concat(e))})),a.addEventListener("load",(function(){return t((0,h.Z)((0,h.Z)({},r),{},{encoded:a.result}))}),!1),a.readAsDataURL(e)}))}(e).then((function(e){return I((function(t){return[].concat((0,a.Z)(t),[e])}))})).catch((function(t){return F((function(n){return[].concat((0,a.Z)(n),[{name:e.name,size:e.size,error:t}])}))}))}))}),[]),W=(0,g.uI)({maxSize:y,multiple:!0,onDrop:R}),j=W.acceptedFiles,B=W.getRootProps,L=W.getInputProps,P=j.length!==z.length;return i.createElement(i.Fragment,null,i.createElement(v.q,{title:e}),i.createElement("div",{className:t.root},i.createElement(b.Z,{iconType:l.Z,title:e}),i.createElement(Z.$,{active:P},i.createElement(o.Z,B({className:t.dropzone}),i.createElement("input",L()),i.createElement(c.Z,{variant:"body1"},"Drag 'n' drop some files here"),i.createElement(c.Z,{variant:"body1"},"or just click to select files"))),i.createElement("div",null,D&&D.map((function(e,t){var n=(0,f.Z)(e.size);return i.createElement("div",{key:t},i.createElement(c.Z,{variant:"body1"},i.createElement("strong",null,e.name)," (",n," bytes): ",e.error))}))),i.createElement("div",null,P&&i.createElement(c.Z,{color:"secondary",variant:"h5"},"Processing ",j.length-z.length," file(s)")),z.map((function(e,n){return i.createElement("div",{key:n},i.createElement(o.Z,null,e.encoded.startsWith("data:image/")&&i.createElement(s.Z,{display:"flex",alignItems:"center",justifyContent:"center"},i.createElement(p.e,{style:k,defaultSize:{width:300,height:"100%"}},i.createElement("img",{src:e.encoded,alt:e.name,className:t.image}))),i.createElement(u.Z,null,i.createElement(c.Z,{gutterBottom:!0,align:"center",variant:"h5",component:"h2"},i.createElement("b",null,e.name)," (",(0,f.Z)(e.size),")"),e.encoded.startsWith("data:image/")&&i.createElement(d.Z,{label:"Full img tag",fullWidth:!0,value:'<img alt="'.concat(e.name,'" src="').concat(e.encoded,'"/>'),margin:"normal",variant:"outlined"}),i.createElement(d.Z,{label:"Base64 encoded. Copy-paste into 'src' attribute",fullWidth:!0,value:e.encoded,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"}),i.createElement(m.Z,{className:t.toolbar},i.createElement(s.Z,{display:"flex",flexGrow:1}),i.createElement(E.Z,{data:e.encoded})))))}))))}}}]);