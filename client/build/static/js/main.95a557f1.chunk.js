(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){e.exports=n(57)},33:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),o=(n(33),n(10)),u=n(25),i=n.n(u),m=function(e){e.todos,e.deleteTodo;Object(a.useEffect)((function(){v()}),[]);var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),s=m[0],d=m[1],E=Object(a.useState)("Open"),f=Object(o.a)(E,2),p=f[0],h=f[1],v=function(){i.a.get("/api/test").then((function(e){e.data&&c(e.data)})).catch((function(e){return console.log(e)}))},y=function(){var e=r.filter((function(e){return-1!==e.title.indexOf(s)}));return"Closed"==p?e.filter((function(e){return-1!==e[b[g].day[1]].indexOf(p)})):e.filter((function(e){return-1==e[b[g].day[1]].indexOf(p)}))},b=[{day:["\u65e5","SUN"]},{day:["\u4e00","SUN"]},{day:["\u4e8c","SUN"]},{day:["\u4e09","SUN"]},{day:["\u56db","SUN"]},{day:["\u4e94","SUN"]},{day:["\u516d","SUN"]}],g=(new Date).getDay();return l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"\u67e5\u8a62\u5e97\u5bb6\u540d\u7a31",onChange:function(e){return t=e.target.value,void d(t);var t}}),l.a.createElement("select",{onChange:function(e){return t=e.target.value,void h(t);var t}},l.a.createElement("option",{value:"Open"},"Open"),l.a.createElement("option",{value:"Closed"},"Closed")),l.a.createElement("ul",{className:"list"},y()&&y().length>0?y().map((function(e){return l.a.createElement("li",{key:e._id},l.a.createElement("div",{style:{marginBottom:"10px",fontSize:"20px"}},e.title),l.a.createElement("div",null,"\u4eca\u65e5\u661f\u671f",b[g].day[0]," \u71df\u696d\u6642\u9593:",e[b[g].day[1]]))})):l.a.createElement("li",null,"No data(s)")))},s=(n(51),n(9)),d=n(6);function E(){return l.a.createElement("h2",null,"About")}function f(){return l.a.createElement("h2",null,"Users")}var p=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/users"},"Users")))),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/about"},l.a.createElement(E,null)),l.a.createElement(d.a,{path:"/users"},l.a.createElement(f,null)),l.a.createElement(d.a,{path:"/"},l.a.createElement(m,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.95a557f1.chunk.js.map