(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://bryletan.github.io/",j="BT.",b="Bryle Tan",h="Computer Scientist",u="Fourth-year computer science student at Rutgers University with a passion for problem-solving and technology. Throughout my studies, I have gained a strong foundation in computer science concepts and technologies, including data structures, algorithms, programming languages, and software engineering.",d="https://example.com",m={linkedin:"https://www.linkedin.com/in/bryle-tan-095b861b7/",github:"https://github.com/bryletan"},O=[{name:"BuyMe",description:"A full stack web application that operates as an online auction system, similar to eBay.",stack:["Java","JavaScript","HTML","MySQL","CSS","Git"],sourceCode:"https://github.com/jamescodestuff/ebayClone"},{name:"TrueFort API Repository Website",description:"A website that serves as a repository for the internal REST APIs of TrueFort Inc.",stack:["HTML","CSS","JavaScript","Postman"]},{name:"Photo Album",description:"Mobile application that allows users to manage and organize their photos on their Android device",stack:["Android","Java","Git"],sourceCode:"https://github.com/bryletan/Photo-Album-Android"}],x=["Java","Python","C","HTML","CSS","JavaScript","TypeScript","Git","MySQL","JDBC","Tomcat"],p="bryletan.cs@gmail.com",f=n(16),v=n.n(f),g=n(14),k=n.n(g),N=n(18),_=n.n(N),y=n(17),w=n.n(y),C=(n(28),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(s.a)(r,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,x.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,p?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(k.a,{}):Object(i.jsx)(v.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(w.a,{}):Object(i.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),T=n(11),A=n.n(T),P=n(19),J=n.n(P),L=(n(33),function(){var e=b,t=h,n=u,c=d,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(A.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(J.a,{})})]})]})]})}),E=n(7),M=n.n(E),I=n(20),B=n.n(I),F=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(A.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(B.a,{})})]})}),H=(n(36),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(F,{project:e},M()())}))})]}):null}),R=(n(37),function(){return x.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),G=n(21),z=n.n(G),Q=(n(38),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(z.a,{fontSize:"large"})})}):null}),D=(n(39),function(){return p?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(p),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/bryle-tan-095b861b7/",children:"Last updated April 27th, 2024"})})}),W=(n(41),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(S,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(H,{}),Object(i.jsx)(R,{}),Object(i.jsx)(D,{})]}),Object(i.jsx)(Q,{}),Object(i.jsx)(U,{})]})});n(42);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f3467f34.chunk.js.map