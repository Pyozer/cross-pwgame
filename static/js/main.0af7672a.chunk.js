(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,a){e.exports=a(84)},77:function(e,t){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(40),r=a.n(o),s=a(4),i=a(7),l=a(6),m=a(41),u=a.n(m),d=Object(n.createContext)({}),f=function(){var e=Object(n.useContext)(d).player;return c.a.createElement("div",{className:"box"},c.a.createElement("h1",{className:"title is-1"},"Hello ",e.nickname," !"),c.a.createElement("h3",{className:"title is-3"},"Waiting for another player..."),c.a.createElement("progress",{className:"progress is-large is-info",max:"100"}))},g=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("header",{className:"card-header"},c.a.createElement("p",{className:"card-header-title"},e.title)),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"content"},e.desc)),c.a.createElement("footer",{className:"card-footer"},c.a.createElement(i.b,{to:e.pathGame,className:"card-footer-item"},"Play")))},b=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],o=a[1],r=function(e){o(e.target.value)};return{input:c,setInput:o,onInputChange:r}}(),t=e.input,a=e.onInputChange,o=Object(n.useContext)(d).io;return c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",placeholder:"Write your nickname",onChange:a,value:t})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-info",onClick:function(){o.emit("Game::sendNickname",t)}},"Send")))},h=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),m=l[0],u=l[1],g=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1];return{message:a,setSuccessMsg:function(e){c({msg:e,isSuccess:!0})},setErrorMsg:function(e){c({msg:e,isSuccess:!1})}}}(),b=g.message,h=g.setSuccessMsg,E=g.setErrorMsg,v=Object(n.useState)(!1),p=Object(s.a)(v,2),N=p[0],w=p[1],y=Object(n.useContext)(d),j=y.io,O=y.player;Object(n.useEffect)((function(){j.on("magicnumber::gameStart",(function(){console.log("game started"),o(!0)})),j.emit("Game::join","magicnumber"),j.on("magicnumber::winPoint",(function(){h("You win a point !"),u("")})),j.on("magicnumber::losePoint",(function(e){E("You lose this round :/ ".concat(e.playerName," win a point.")),u("")})),j.on("magicnumber::gameEnd",(function(e){"win"===e?h("You win !"):E("You lose !"),u(""),w(!0)})),j.on("magicnumber::gameForceEnd",(function(){E("Game stopped ! Due to player disconnection"),u(""),w(!0)}))}),[]),Object(n.useEffect)((function(){j.once("magicnumber::numberIsLess",(function(){E("Number is less than ".concat(m,"!"))})),j.once("magicnumber::numberIsMore",(function(){E("Number is more than ".concat(m,"!"))}))}),[m]);return a?c.a.createElement("div",{className:"box"},function(e){return e?c.a.createElement("div",{className:"notification is-".concat(e.isSuccess?"success":"danger")},e.msg):c.a.createElement(c.a.Fragment,null)}(b),!N&&c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",placeholder:"Guess the number (from 0 to 1337)",onChange:function(e){u(e.target.value)},value:"".concat(m)})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-info",onClick:function(){console.log(m),m&&j.emit("magicnumber::tryNumber",{id:O.id,number:parseInt(m)})}},"Send"))),c.a.createElement("h5",null,"You have ",null===O||void 0===O?void 0:O.points," points"),N&&c.a.createElement(i.b,{to:"/games"},"Back to games")):c.a.createElement(f,null)},E=function(){return c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement(g,{title:"MagicNumber",desc:"You have to find the random MagicNumber generated, by trying some numbers.",pathGame:"/magicnumber"})),c.a.createElement("div",{className:"column"},c.a.createElement(g,{title:"MagicNumber",desc:"You have to find the random MagicNumber generated, by trying some numbers.",pathGame:"/magicnumber"})),c.a.createElement("div",{className:"column"},c.a.createElement(g,{title:"MagicNumber",desc:"You have to find the random MagicNumber generated, by trying some numbers.",pathGame:"/magicnumber"})))},v=u()("https://crosspwagame.herokuapp.com/"),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement((function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){v.on("Game::playerInfo",(function(e){console.log("On playerInfo",e),r(e)}))}),[]);var r=function(e){o(e)};return c.a.createElement(i.a,{basename:"/CrossPWAGame"},c.a.createElement(d.Provider,{value:{io:v,player:a,updatePlayer:r}},c.a.createElement("section",{className:"hero is-fullheight is-light"},c.a.createElement("div",{className:"hero-head"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tabs is-centered"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"PWA Games")))))),c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"bd-index-header"},a?c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/"},c.a.createElement(E,null)),c.a.createElement(l.a,{path:"/magicnumber"},c.a.createElement(h,null))):c.a.createElement(b,null)))),c.a.createElement("div",{className:"hero-foot"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tabs is-centered"},c.a.createElement("ul",null,c.a.createElement("li",null,"Let's Rock!"))))))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/CrossPWAGame",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/CrossPWAGame","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.0af7672a.chunk.js.map