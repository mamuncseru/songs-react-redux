(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(3),c=n.n(s),r=n(2),o=n(4),a=n(8),l=n(9),u=n(11),d=n(10),j=n(1),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"right floated content",children:Object(j.jsx)("button",{className:"ui button primary",onClick:function(){return e.props.selectSong(t)},children:"Select"})}),Object(j.jsx)("div",{className:"content",children:t.title})]},t.title)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"ui divided list",children:this.renderList()})}}]),n}(i.Component),h=Object(r.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(b),O=Object(r.b)((function(e){return{song:e.selectedSong}}))((function(e){var t=e.song;return t?Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Details for: "}),Object(j.jsxs)("p",{children:["Title: ",t.title,Object(j.jsx)("br",{}),"Duration: ",t.duration]})]}):Object(j.jsx)("div",{children:"Select a song"})})),m=function(){return Object(j.jsx)("div",{className:"ui container grid",children:Object(j.jsxs)("div",{className:"ui row",children:[Object(j.jsx)("div",{className:"column eight wide",children:Object(j.jsx)(h,{})}),Object(j.jsx)("div",{className:"column eight wide",children:Object(j.jsx)(O,{})})]})})},v=Object(o.a)({songs:function(){return[{title:"Amar moner sokol asha",duration:"4:50"},{title:"My Best Time",duration:"2:30"},{title:"Remember Me",duration:"3:15"},{title:"I am a believer",duration:"4:00"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});c.a.render(Object(j.jsx)(r.a,{store:Object(o.b)(v),children:Object(j.jsx)(m,{})}),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f646c5d5.chunk.js.map