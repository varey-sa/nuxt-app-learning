(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{480:function(e,t,r){"use strict";r.r(t);r(9),r(13),r(19),r(21);var n=r(2),o=(r(5),r(37),r(12),r(33),r(57),r(436),r(49),r(437),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(50),r(62),r(11),r(66),r(275),r(0)),c=r(87),l=r(1);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],j=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=O.reduce((function(e,t){return e["offset"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),y=O.reduce((function(e,t){return e["order"+Object(l.r)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(y)};function h(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map,S=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=h(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}}),P=r(475),k={name:"InspirePage"},N=r(89),component=Object(N.a)(k,(function(){var e=this,t=e._self._c;return t(P.a,[t(S,{staticClass:"text-center"},[t("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),e._v(" "),t("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),t("footer",[t("small",[t("em",[e._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);