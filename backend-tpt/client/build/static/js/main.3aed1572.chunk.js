(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=(n(20),n(2)),s=(n(21),n(22),n(13)),l=n.n(s),d=n(14),m=n.n(d),u="asd",b={int:"init"};var p=function(){var e=o.a.useState(b),t=Object(i.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),c=Object(i.a)(r,2),s=c[0],d=c[1];return n===b&&setTimeout((function(){(u=new l.a({elementId:"cfd",width:700,height:500})).setLineWidth(7),u.setStrokeColor([0,0,0]),u.on({event:"redraw"},(function(){})),a({notInitState:!0})}),1e3),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{className:"text-xl px-40"},"For best results write your numbers and symbols in a font like this (the AI is very picky)"),o.a.createElement("img",{src:"./font.png",alt:"fonts",className:"mt-1",style:{width:"30rem"}}),n.apiAns?n.apiAns:"No input yet",o.a.createElement("div",{className:"m-1"},o.a.createElement("button",{className:"inline-block mx-2 text-xl p-1 rounded bg-blue-800 border border-blue-600",onClick:function(){u.clear()}},"Clear"),o.a.createElement("button",{className:"inline-block mx-2 text-xl p-1 rounded bg-blue-800 border border-blue-600",onClick:function(){u.undo()}},"Undo")),o.a.createElement("div",{className:"border-2 border-green-100-500 rounded-lg"},o.a.createElement("canvas",{id:"cfd"})),o.a.createElement("button",{onClick:function(){d(!0),m.a.post("https://6fq1iharw4.execute-api.us-east-1.amazonaws.com/dev/image",u.save(),{headers:{"content-type":"text/plain"}}).then((function(e){a({notInitState:!0,apiAns:e.data.text}),d(!1)})).catch((function(e){console.log(e)}))},className:"p-2 border-2 w-48 mt-2 border-gray-100 rounded-md bg-gray-700 hover:border-gray-300"},s?"Loading":"Get img")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3aed1572.chunk.js.map