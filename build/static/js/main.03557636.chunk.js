(this.webpackJsonpblogappreact=this.webpackJsonpblogappreact||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},90:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,c=n(4),s=n(0),r=n.n(s),i=n(29),o=n.n(i),l=(n(83),n(84),n(12)),j=n(19),d=n(9),b=(n(85),n(112)),u=n(106),O=n(115),h=n(110),p=n(111),x=n(2),m=Object(b.a)(a||(a=Object(j.a)(["\n  mutation CreatePost($title: String!, $content: String!) {\n  postCreate(post: {\n    title: $title,\n    content:  $content\n  }) {\n    userErrors {\n      message\n    }\n    post {\n      title\n      content\n      createdAt\n      user {\n        name\n      }\n    }\n  }\n}\n"])));function g(e){var t=e.refetch,n=Object(s.useState)(!1),a=Object(d.a)(n,2),c=a[0],r=a[1],i=Object(u.a)(m),o=Object(d.a)(i,2),l=o[0],j=o[1],b=j.data,g=(j.loading,function(){return r(!1)}),f=Object(s.useState)(""),v=Object(d.a)(f,2),C=v[0],S=v[1],N=Object(s.useState)(""),w=Object(d.a)(N,2),k=w[0],y=w[1],I=Object(s.useState)(null),E=Object(d.a)(I,2),$=E[0],P=E[1];return Object(s.useEffect)((function(){b&&(b.postCreate.userErrors.length&&P(b.postCreate.userErrors[0].message),b.postCreate.token&&localStorage.setItem("token",b.postCreate.token))}),[b]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.a,{variant:"success",onClick:function(){return r(!0)},children:"Add Post"}),Object(x.jsxs)(h.a,{show:c,onHide:g,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(h.a.Header,{closeButton:!0,children:Object(x.jsx)(h.a.Title,{children:"Add Post"})}),Object(x.jsx)(h.a.Body,{children:Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(p.a.Label,{children:"Title"}),Object(x.jsx)(p.a.Control,{type:"text",placeholder:"",value:k,onChange:function(e){return y(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(x.jsx)(p.a.Label,{children:"Content"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,value:C,onChange:function(e){return S(e.target.value)}})]})]})}),Object(x.jsxs)(h.a.Footer,{children:[$&&Object(x.jsxs)("p",{children:[" ",$," "]}),Object(x.jsx)(O.a,{variant:"secondary",onClick:g,children:"Close"}),Object(x.jsx)(O.a,{variant:"success",onClick:function(){C&&k&&(l({variables:{title:k,content:C}}),g(),setTimeout((function(){t()}),700))},children:"Add"})]})]})]})}var f,v=n(108),C=(n(90),Object(b.a)(f||(f=Object(j.a)(["\n  query GetProfile($userId: ID!){\n  profile(userId: $userId){\n    bio\n    isMyProfile\n    user {\n      id\n      name\n      posts {\n        id\n        title\n        content\n        createdAt\n      }\n    }\n  }\n}\n"]))));function S(){var e=Object(l.f)().id,t=Object(v.a)(C,{variables:{userId:e}}),n=t.data,a=t.error,c=t.loading,s=t.refetch;if(a)return Object(x.jsx)("div",{children:" Error getting profile "});if(c)return Object(x.jsx)("div",{children:" Loading profile... "});var r=n.profile;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:{marginBottom:"2rem",display:"flex ",justifyContent:"space-between"},children:Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("h1",{children:r.user.name}),Object(x.jsx)("p",{children:r.bio})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"add-button",children:r.isMyProfile?Object(x.jsx)(g,{refetch:s}):null}),r.user.posts.map((function(e){return Object(x.jsx)("div",{className:"card",children:Object(x.jsx)(y,{title:e.title,content:e.content,date:e.createdAt,id:e.id,isMyProfile:r.isMyProfile,refetch:s},e.id)})}))]})]})}var N,w=n(30),k=Object(b.a)(N||(N=Object(j.a)(["\n  mutation deletePost($postId: ID!) {\n    postDelete(postId: $postId) {\n      userErrors {\n        message\n      }\n    post {\n      title\n    }\n    }\n}\n"])));function y(e){var t=e.title,n=e.content,a=e.date,c=e.user,s=e.id,r=e.userId,i=e.isMyProfile,o=e.refetch,l=Object(u.a)(k),j=Object(d.a)(l,2),b=j[0],O=j[1],h=(O.data,O.loading,new Date(Number(a)));return Object(x.jsxs)("div",{className:"Post",children:[!0===i&&Object(x.jsx)("p",{className:"deleteBtn",onClick:function(){b({variables:{postId:s}}),setTimeout((function(){o()}),700)},children:"Delete Post"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"post-title",children:t}),Object(x.jsx)("p",{className:"post-content",children:n}),Object(x.jsx)("h4",{className:"post-date",children:"".concat(h).split(" ").splice(0,3).join(" ")}),Object(x.jsxs)(w.b,{className:"post-user",to:"/profile/".concat(r),children:[" ",c," "]})]})]})}n(93);var I,E=Object(b.a)(I||(I=Object(j.a)(["\n  query {\n  posts {\n    id\n    title\n    content\n    createdAt\n    user {\n      id\n      name\n    }\n  }\n}\n"])));function $(){var e=Object(v.a)(E),t=e.data,n=e.error,a=e.loading;if(n)return Object(x.jsx)("div",{children:" Error loading posts "});if(a)return Object(x.jsx)("div",{children:" Loading posts..."});console.log({data:t,error:n,loading:a});var c=t.posts;return Object(x.jsx)("div",{className:"container",children:c.map((function(e){return Object(x.jsx)("div",{className:"card",children:Object(x.jsx)(y,{title:e.title,content:e.content,date:e.createdAt,id:e.id,userId:e.user.id,user:e.user.name},e.id)})}))})}n(94),n(95);var P,L=Object(b.a)(P||(P=Object(j.a)(["\n  mutation Signup(\n    $email: String!\n    $password: String!\n    $name: String!\n    $bio: String!\n  ) {\n    signup(\n      credentials: { email: $email, password: $password }\n      name: $name\n      bio: $bio\n    ) {\n      userErrors {\n        message\n      }\n      token\n    }\n  }\n"])));function A(){var e=Object(u.a)(L),t=Object(d.a)(e,2),n=t[0],a=t[1],c=a.data,r=(a.loading,Object(s.useState)("")),i=Object(d.a)(r,2),o=i[0],l=i[1],j=Object(s.useState)(""),b=Object(d.a)(j,2),h=b[0],m=b[1],g=Object(s.useState)(""),f=Object(d.a)(g,2),v=f[0],C=f[1],S=Object(s.useState)(""),N=Object(d.a)(S,2),w=N[0],k=N[1],y=Object(s.useState)(null),I=Object(d.a)(y,2),E=I[0],$=I[1];return Object(s.useEffect)((function(){c&&(c.signup.userErrors.length&&$(c.signup.userErrors[0].message),c.signup.token&&(localStorage.setItem("token",c.signup.token),window.location="/posts"))}),[c]),console.log(c),Object(x.jsx)("div",{children:Object(x.jsxs)(p.a,{className:"signup-form",children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",children:[Object(x.jsx)(p.a.Label,{children:"Name"}),Object(x.jsx)(p.a.Control,{type:"text",placeholder:"",value:v,onChange:function(e){return C(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",children:[Object(x.jsx)(p.a.Label,{children:"Email"}),Object(x.jsx)(p.a.Control,{type:"text",placeholder:"",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",children:[Object(x.jsx)(p.a.Label,{children:"Password"}),Object(x.jsx)(p.a.Control,{type:"password",placeholder:"",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(x.jsx)(p.a.Label,{children:"Bio"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,value:w,onChange:function(e){return k(e.target.value)}})]}),E&&Object(x.jsx)("p",{children:E}),Object(x.jsx)(O.a,{onClick:function(){n({variables:{email:o,password:h,name:v,bio:w}})},children:"Signup"})]})})}n(96);var G,B=Object(b.a)(G||(G=Object(j.a)(["\nmutation Signin($email: String!, $password: String!) {\n  signin(credentials: {\n    email: $email,\n    password: $password\n  }){\n    userErrors {\n      message\n    }\n    token\n\n  }\n}\n"])));function F(){var e=Object(u.a)(B),t=Object(d.a)(e,2),n=t[0],a=t[1],c=a.data;a.loading;console.log(c);var r=Object(s.useState)(""),i=Object(d.a)(r,2),o=i[0],l=i[1],j=Object(s.useState)(""),b=Object(d.a)(j,2),h=b[0],m=b[1],g=Object(s.useState)(null),f=Object(d.a)(g,2),v=f[0],C=f[1];return Object(s.useEffect)((function(){c&&(c.signin.userErrors.length&&C(c.signin.userErrors[0].message),c.signin.token&&(localStorage.setItem("token",c.signin.token),window.location="/posts"))}),[c]),Object(x.jsx)("div",{children:Object(x.jsxs)(p.a,{className:"signin-form",children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",children:[Object(x.jsx)(p.a.Label,{children:"Email"}),Object(x.jsx)(p.a.Control,{type:"text",placeholder:"",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",children:[Object(x.jsx)(p.a.Label,{children:"Password"}),Object(x.jsx)(p.a.Control,{type:"password",placeholder:"",value:h,onChange:function(e){return m(e.target.value)}})]}),v&&Object(x.jsx)("p",{children:v}),Object(x.jsx)(O.a,{onClick:function(){n({variables:{email:o,password:h}})},children:"Signin"})]})})}n(97);var M,T=Object(b.a)(M||(M=Object(j.a)(["\n    query GetMe {\n    me {\n        id\n        name\n    }\n}\n"])));function D(){var e=Object(v.a)(T),t=e.data,n=e.error;if(e.loading)return Object(x.jsx)("div",{children:" Loading... "});if(n)return Object(x.jsx)("div",{children:" Error "});var a=t.me;return Object(x.jsx)("div",{className:"navbar",children:Object(x.jsxs)("nav",{children:[Object(x.jsx)(w.b,{to:"/posts",className:"brand",children:Object(x.jsx)("h1",{children:" Blog App "})}),a?Object(x.jsx)(w.b,{to:"/profile/".concat(a.id),className:"nav-items",children:Object(x.jsx)("h6",{children:" My Profile "})}):null,a?Object(x.jsx)("div",{onClick:function(){localStorage.removeItem("token"),window.location.reload(!1)},className:"nav-items",children:Object(x.jsx)("h6",{children:" Logout "})}):null,a?null:Object(x.jsx)(w.b,{to:"/signin",className:"nav-items",children:Object(x.jsx)("h6",{children:" Sign in"})}),a?null:Object(x.jsx)(w.b,{to:"/signup",className:"nav-items",children:Object(x.jsx)("h6",{children:" Sign up"})})]})})}var q=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(D,{}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{strict:!0,exact:!0,path:"/posts",component:$}),Object(x.jsx)(l.a,{strict:!0,exact:!0,path:"/signup",component:A}),Object(x.jsx)(l.a,{strict:!0,exact:!0,path:"/signin",component:F}),Object(x.jsx)(l.a,{strict:!0,exact:!0,path:"/profile/:id",component:S})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},J=n(73),z=n(76),K=n(113),Q=n(109),R=n(72),U=Object(J.a)({uri:"http://localhost:4000/"}),V=Object(R.a)((function(e,t){var n=t.headers,a=localStorage.getItem("token");return{headers:Object(c.a)(Object(c.a)({},n),{},{authorization:a})}})),W=new z.a({link:V.concat(U),cache:new K.a});o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w.a,{children:Object(x.jsx)(Q.a,{client:W,children:Object(x.jsx)(q,{})})})}),document.getElementById("root")),H()}},[[98,1,2]]]);
//# sourceMappingURL=main.03557636.chunk.js.map