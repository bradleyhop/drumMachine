(function(e){function t(t){for(var n,u,c=t[0],o=t[1],i=t[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&d.push(s[u][0]),s[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var o=r[c];0!==s[o]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},s={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/drumMachine/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5175:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"focus-visible",attrs:{id:"drum-machine",role:"main"}},[e._m(0),r("DrumPads"),e._m(1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper-display"},[r("span",{staticClass:"power-light"}),r("span",{attrs:{id:"display","aria-hidden":"true"}},[e._v("Game Boy Drum Machine")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"speaker-grill"},[r("span",{staticClass:"speaker-holes sh1"}),r("span",{staticClass:"speaker-holes sh2"}),r("span",{staticClass:"speaker-holes sh3"})])}],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"button-box"}},e._l(e.drumpad,(function(t){return r("div",{key:t.id},[r("button",{staticClass:"drum-pad",attrs:{type:"button",id:t.desc,"aria-label":"press "+t.letter+" for "+t.desc},on:{click:function(r){return e.hitDrum(t.letter)}}},[r("audio",{staticClass:"clip",attrs:{preload:"auto",src:t.source,id:t.letter,type:"audio/mp3"}}),e._v(" "+e._s(t.letter)+" ")])])})),0)},c=[],o=(r("7db0"),r("c975"),r("96cf"),r("1da1")),i=[{desc:"ARP",letter:"Q",source:"./assets/gbDrums/arp2.mp3"},{desc:"SFX",letter:"W",source:"./assets/gbDrums/sfx1.mp3"},{desc:"OPENHAT",letter:"E",source:"./assets/gbDrums/openhat1.mp3"},{desc:"SNARE 1",letter:"A",source:"./assets/gbDrums/snare5.mp3"},{desc:"HIGH HAT 1",letter:"S",source:"./assets/gbDrums/hihat1.mp3"},{desc:"HIGH HAT 2",letter:"D",source:"./assets/gbDrums/hihat5.mp3"},{desc:"KICK DRUM 1",letter:"Z",source:"./assets/gbDrums/kick3.mp3"},{desc:"KICK DRUM 2",letter:"X",source:"./assets/gbDrums/kick7.mp3"},{desc:"SNARE 2",letter:"C",source:"./assets/gbDrums/snare1.mp3"}],l=i,p={name:"DrumPads",data:function(){return{drumpad:l}},methods:{hitDrum:function(e){var t=e.toUpperCase();["Q","W","E","A","S","D","Z","X","C"].indexOf(t)>=0&&(this.playAudio(document.getElementById(t)),this.styleDrumHit(t))},styleDrumHit:function(e){var t=l.find((function(t){return t.letter===e})).desc;document.getElementById(t).classList.add("pressed-drum-pad"),setTimeout((function(){return document.getElementById(t).classList.remove("pressed-drum-pad")}),150),document.getElementById("display").innerText=t},playAudio:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,e.prev=1,r.currentTime=0,e.next=5,r.play();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error("Playback error! ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=this;window.addEventListener("keyup",(function(t){return e.hitDrum(t.key)}))},beforeDestroy:function(){var e=this;window.removeEventListener("keyup",(function(t){return e.hitDrum(t.key)}))}},d=p,f=(r("9e5b"),r("2877")),m=Object(f["a"])(d,u,c,!1,null,null,null),h=m.exports,b={name:"app",components:{DrumPads:h}},v=b,y=(r("5c0b"),Object(f["a"])(v,s,a,!1,null,null,null)),g=y.exports;r("7f4d"),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},"9c0c":function(e,t,r){},"9e5b":function(e,t,r){"use strict";var n=r("5175"),s=r.n(n);s.a}});
//# sourceMappingURL=app.3472bba3.js.map