"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{5643:function(e,a,s){s.r(a);var r=s(885),t=s(2791),n=s(5048),o=s(5822),i=s(323),c=s(2677),l=s(4292),m=s(3360),d=s(7981),u=s(7022),h=s(4289),f=s(7145),p=s(184);a.default=function(){var e=(0,n.I0)(),a=(0,t.useState)(""),s=(0,r.Z)(a,2),g=s[0],Z=s[1],v=(0,t.useState)(""),j=(0,r.Z)(v,2),x=j[0],b=j[1],w=(0,t.useState)(""),k=(0,r.Z)(w,2),N=k[0],y=k[1],C=(0,n.v9)(h.Z.getIsError),E=(0,n.v9)(h.Z.getIsLoggedIn),P=(0,n.v9)((function(e){return e.auth.isTryEnter})),I=function(e){var a=e.target,s=a.name,r=a.value;switch(s){case"name":Z(r);break;case"email":b(r);break;case"password":y(r);break;default:return}};(0,t.useEffect)((function(){!C&&E?((0,f.Qm)("You have successfully logged into your account."),Z(""),b(""),y("")):C&&!P&&(0,f.Jc)("You entered the wrong username or password, please try again.")}),[C,E,P]);return(0,p.jsxs)(u.Z,{className:"mt-5 justify-content-md-center",children:[(0,p.jsx)("h1",{children:"Register"}),(0,p.jsxs)(d.Z,{onSubmit:function(a){a.preventDefault(),e(o.Z.register({name:g,email:x,password:N}))},children:[(0,p.jsxs)(i.Z,{className:"mb-3",controlId:"formHorizontalName",children:[(0,p.jsx)(c.Z,{sm:2,children:"Name"}),(0,p.jsx)(c.Z,{sm:10,className:"justify-content-md-center",children:(0,p.jsx)(l.Z,{type:"text",name:"name",value:g,placeholder:"Enter name",onChange:I})})]}),(0,p.jsxs)(i.Z,{className:"mb-3",controlId:"formHorizontalEmail",children:[(0,p.jsx)(c.Z,{sm:2,children:"Email"}),(0,p.jsx)(c.Z,{sm:10,className:"justify-content-md-center",children:(0,p.jsx)(l.Z,{value:x,type:"email",placeholder:"Enter email",name:"email",onChange:I})})]}),(0,p.jsxs)(i.Z,{className:"mb-3",controlId:"formHorizontalPassword",children:[(0,p.jsx)(c.Z,{sm:2,children:"Password"}),(0,p.jsx)(c.Z,{sm:10,children:(0,p.jsx)(l.Z,{onChange:I,value:N,name:"password",type:"password",placeholder:"Enter password"})})]}),(0,p.jsx)(i.Z,{children:(0,p.jsx)(c.Z,{sm:10,children:(0,p.jsx)(m.Z,{disabled:!g||!x||!N,type:"submit",children:"Register"})})})]})]})}},7145:function(e,a,s){s.d(a,{Co:function(){return o},Jc:function(){return n},Qm:function(){return t}});var r=s(9085),t=function(e){r.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},n=function(e){r.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},o=function(e){r.Am.warn(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},3360:function(e,a,s){var r=s(1413),t=s(885),n=s(5987),o=s(1694),i=s.n(o),c=s(2791),l=s(5341),m=s(162),d=s(184),u=["as","bsPrefix","variant","size","active","className"],h=c.forwardRef((function(e,a){var s=e.as,o=e.bsPrefix,c=e.variant,h=e.size,f=e.active,p=e.className,g=(0,n.Z)(e,u),Z=(0,m.vE)(o,"btn"),v=(0,l.FT)((0,r.Z)({tagName:s},g)),j=(0,t.Z)(v,2),x=j[0],b=j[1].tagName;return(0,d.jsx)(b,(0,r.Z)((0,r.Z)((0,r.Z)({},x),g),{},{ref:a,className:i()(p,Z,f&&"active",c&&"".concat(Z,"-").concat(c),h&&"".concat(Z,"-").concat(h),g.href&&g.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=h}}]);
//# sourceMappingURL=643.80b09789.chunk.js.map