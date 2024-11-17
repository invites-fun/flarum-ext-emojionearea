module.exports=function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=5)}([function(e,o){e.exports=flarum.core.compat["forum/app"]},,function(e,o){e.exports=flarum.core.compat["common/components/TextEditor"]},function(e,o){e.exports=flarum.core.compat["common/extend"]},function(e,o){e.exports=flarum.core.compat["common/components/Button"]},function(e,o,t){"use strict";t.r(o);var n=t(3),r=t(0),i=t.n(r),a=t(4),c=t.n(a),s=t(2),u=t.n(s),l="clarkwinkelmann-emojionearea.forum.",d=!1;i.a.initializers.add("clarkwinkelmann-emojionearea",(function(){u.a.prototype.emojioneAreaClickedOutside=function(e){if(this.emojioneArea&&this.emojioneArea.isReady){var o=$(e.target);o.is(".emojionearea")||o.parents(".emojionearea").length||o.parents(".Button-emojionearea").length||this.emojioneArea.hidePicker()}},u.a.prototype.configureEmojioneArea=function(){var e=this;if(this.emojioneArea)return Promise.resolve();var o=$('<div class="ComposerBody-emojioneareaContainer"/>');return this.$(".TextEditor-controls").before(o),new Promise((function(t){var n=$("<div />").emojioneArea({standalone:!0,search:i.a.forum.attribute("emojioneAreaEnableSearch"),searchPlaceholder:i.a.translator.trans(l+"search_placeholder"),buttonTitle:i.a.translator.trans(l+"picker_button"),recentEmojis:i.a.forum.attribute("emojioneAreaEnableRecent"),filtersPosition:i.a.forum.attribute("emojioneAreaFiltersPositionBottom")?"bottom":"top",searchPosition:i.a.forum.attribute("emojioneAreaSearchPositionBottom")?"bottom":"top",container:o,tones:i.a.forum.attribute("emojioneAreaEnableTones"),autocomplete:!1,sprite:!1,events:{emojibtn_click:function(){e.attrs.composer.editor.insertAtCursor(e.emojioneArea.getText())},ready:t}});e.emojioneArea=n.data("emojioneArea")}))},Object(n.extend)(u.a.prototype,"oncreate",(function(){this.emojioneArea=null,this.emojioneAreaLoading=!1,document.addEventListener("click",this.emojioneAreaClickedOutside.bind(this))})),Object(n.extend)(u.a.prototype,"onremove",(function(){document.removeEventListener("click",this.emojioneAreaClickedOutside)})),Object(n.extend)(u.a.prototype,"toolbarItems",(function(e){var o=this;e.add("clarkwinkelmann-emojionearea",c.a.component({onclick:function(){o.emojioneAreaLoading||(o.emojioneArea&&o.emojioneArea.button.is(".active")?o.emojioneArea.hidePicker():(o.emojioneAreaLoading=!0,(d?Promise.resolve():(d=!0,new Promise((function(e){var o=document.createElement("link");o.rel="stylesheet",o.crossOrigin="anonymous",o.integrity="sha512-vEia6TQGr3FqC6h55/NdU3QSM5XR6HSl5fW71QTKrgeER98LIMGwymBVM867C1XHIkYD9nMTfWK2A0xcodKHNA==",o.href="https://s4.zstatic.net/ajax/libs/emojionearea/3.4.2/emojionearea.min.css",document.head.appendChild(o);var t=document.createElement("script");t.crossOrigin="anonymous",t.integrity="sha512-hkvXFLlESjeYENO4CNi69z3A1puvONQV5Uh+G4TUDayZxSLyic5Kba9hhuiNLbHqdnKNMk2PxXKm0v7KDnWkYA==",t.src="https://s4.zstatic.net/ajax/libs/emojionearea/3.4.2/emojionearea.min.js",t.onload=e,document.body.appendChild(t)})))).then((function(){o.configureEmojioneArea().then((function(){var e=o.$(".Button-emojionearea").position();o.$(".emojionearea-picker").css("left",e.left-290),o.emojioneArea.showPicker(),$(".emojionearea-search input").focus(),o.emojioneAreaLoading=!1,m.redraw()}))}))))},className:"Button Button--icon Button--link Button-emojionearea",icon:this.emojioneAreaLoading?"fas fa-spinner fa-pulse":"far fa-smile-beam",title:i.a.translator.trans(l+"picker_button")}))}))})),i.a.initializers.add("clarkwinkelmann-emojionearea-after",(function(){Object(n.extend)(u.a.prototype,"toolbarItems",(function(e){i.a.forum.attribute("emojioneAreaHideFlarumButton")&&e.has("emoji")&&e.remove("emoji")}))}),-100)}]);
//# sourceMappingURL=forum.js.map