(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{C6no:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return u}));var a=o("q1tI"),r=o.n(a),l=o("Tool"),n=(o("f3/d"),o("a1Th"),o("Btvt"),o("XfO3"),o("HEwt"),o("rGqo"),o("rE2o"),o("ioFf"),o("dRSK"),o("KoGA")),s=o.n(n);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}var m=function(e){var t,o;function a(t){var o;return(o=e.call(this,t)||this).findClosedToolIndex=function(){return o.tools.indexOf(o.tools.find((function(e){return i(e.classList).indexOf(s.a.open)<0})))},o.state={stages:["start","blade","saw","corkscrew","open"],scale:1},o.scrolling=!1,o}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var l=a.prototype;return l.scrollFliptools=function(e){var t=this;if(e.preventDefault(),!1===this.scrolling){var o=this.findClosedToolIndex(),a=o>0?o-1:o;a>=0?e.deltaY<0?this.tools[a].classList.remove(s.a.open):this.tools[o].classList.add(s.a.open):e.deltaY<0&&this.tools[this.tools.length-1].classList.remove(s.a.open),this.scrolling=!0,setTimeout((function(){t.scrolling=!1}),750)}},l.clickFliptools=function(e){this.findClosedToolIndex()>=0?this.tools.forEach((function(e){return e.classList.add(s.a.open)})):this.tools.forEach((function(e){return e.classList.remove(s.a.open)}))},l.componentDidMount=function(){var e=this,t=document.querySelector("main");this.tools=i(document.querySelectorAll("."+s.a.fliptool)),t.addEventListener("wheel",(function(t){return e.scrollFliptools(t,e.state)}))},l.render=function(){var e=this;return r.a.createElement("section",{className:s.a.larger},r.a.createElement("div",{className:s.a.container},r.a.createElement("button",{type:"button",className:s.a.base,onClick:function(t){return e.clickFliptools(t)}}),r.a.createElement("div",{className:s.a.plus}),r.a.createElement("a",{href:"https://vuejs.org/",className:s.a.blade+" "+s.a.fliptool},r.a.createElement("img",{className:s.a.fliptoolImage+" "+s.a.fliptoolImageVue,src:"/vue-282497.png"})),r.a.createElement("a",{href:"https://reactjs.org/",className:s.a.saw+" "+s.a.fliptool},r.a.createElement("div",{className:s.a.sawTooth}),r.a.createElement("img",{className:s.a.fliptoolImage+" "+s.a.fliptoolImageReact,src:"/react.svg"})),r.a.createElement("a",{href:"https://graphql.org/",className:s.a.corkScrew+" "+s.a.fliptool},r.a.createElement("div",{className:s.a.corkScrewCurl}),r.a.createElement("div",{className:s.a.corkScrewTip}),r.a.createElement("img",{className:s.a.fliptoolImage+" "+s.a.fliptoolImageGraphQl,src:"/graphql.svg"}))))},a}(a.Component);function u(e){e.children;return r.a.createElement(l.a,null,r.a.createElement(m,null))}},KoGA:function(e,t,o){e.exports={container:"swiss-army-module--container--3syHQ",base:"swiss-army-module--base--nC9yc",plus:"swiss-army-module--plus--3cCBs",fliptool:"swiss-army-module--fliptool--2cYo_",fliptoolImage:"swiss-army-module--fliptoolImage--3YDDB",fliptoolImageVue:"swiss-army-module--fliptoolImageVue--29lx9",fliptoolImageReact:"swiss-army-module--fliptoolImageReact--cSUU1",fliptoolImageGraphQl:"swiss-army-module--fliptoolImageGraphQl--1MXPA",blade:"swiss-army-module--blade--A8DI2",saw:"swiss-army-module--saw--3e3AK",sawTooth:"swiss-army-module--sawTooth--3Bp9S",corkScrew:"swiss-army-module--corkScrew--2OKLp",corkScrewCurl:"swiss-army-module--corkScrewCurl--3OB60",corkScrewTip:"swiss-army-module--corkScrewTip--1XShv",open:"swiss-army-module--open--3jE_3"}},Tool:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o("q1tI"),r=o.n(a),l=o("LbRr"),n=o("W/9C"),s=o("qhky");function i(e){var t=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Rest for your weary web.")),r.a.createElement(l.a,null),r.a.createElement("main",null,t),r.a.createElement(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-swiss-army-developer-js-8ba185699f3f71821bd4.js.map