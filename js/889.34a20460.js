(self["webpackChunkfor_the_andraste"]=self["webpackChunkfor_the_andraste"]||[]).push([[889],{889:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"topImage chantry"}),e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"content-buttonBox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",placeholder:"여기에 입력해주세요."},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkInputValue.apply(null,arguments)},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])]),e("div",{staticClass:"bottomImage"})])},n=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"content-text mt26"},[t._v(" 평범해 보이는 중갑옷에게 자리를 내어준 템플러 갑옷은 창고라고 부르기에도 민망한 천막에 보관하게 되었다. "),e("br"),t._v("천막을 나서자 아까 인사를 건넸던 템플러가 알아보고 먼저 인사를 건넸다. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-dialog"},[e("ul",[e("li",[e("div",{staticClass:"content-dialog-portrait templarB"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 수고가 많으십니다. 도움이 필요하신 부분이 있으면 언제든지 말씀해주십시오. ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 혹시 호크나 앤더스에 대해 잘 아십니까? ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait templarB"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 앤더스는... 직접 본 적은 없습니다. 호크도 이번 사태 때 얼핏 본게 다 입니다. ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 음, 그럼 혹시 둘에 대해 더 자세히 알고 있는 분이 있으십니까? ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait templarB"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 기사단장님이라면 알고 계실 겁니다. ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 아까 말씀하셨던, 치료 중이신...? ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait templarB"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 네. 컬렌 러더포드 사령관님입니다. ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait"}),e("div",{staticClass:"content-dialog-text"},[t._v("지금 어디에 계십니까?")])]),e("li",[e("div",{staticClass:"content-dialog-portrait"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 행드맨에 계실겁니다. 원래는 주점인데, 상황이 이렇다보니 부상자 수용도 하고 있습니다. ")])])])])}],r=(i(7658),{data(){return{inputValue:""}},methods:{checkInputValue(){this.$store.dispatch("terminateAudio"),this.$store.dispatch("setAudioSource","/forTheAndraste/assets/sound/떠드는 소리.flac"),this.$store.dispatch("playAudio"),setTimeout((()=>{this.$store.dispatch("fadeOutAudio")}),1e4),this.$router.push({name:"/TT-03-1-MM-03-2"})}}}),s=r,o=i(1001),l=(0,o.Z)(s,a,n,!1,null,null,null),c=l.exports},3658:function(t,e,i){"use strict";var a=i(9781),n=i(3157),r=TypeError,s=Object.getOwnPropertyDescriptor,o=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=o?function(t,e){if(n(t)&&!s(t,"length").writable)throw r("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7207:function(t){var e=TypeError,i=9007199254740991;t.exports=function(t){if(t>i)throw e("Maximum allowed index exceeded");return t}},3157:function(t,e,i){var a=i(4326);t.exports=Array.isArray||function(t){return"Array"==a(t)}},7658:function(t,e,i){"use strict";var a=i(2109),n=i(7908),r=i(6244),s=i(3658),o=i(7207),l=i(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},d=c||!u();a({target:"Array",proto:!0,arity:1,forced:d},{push:function(t){var e=n(this),i=r(e),a=arguments.length;o(i+a);for(var l=0;l<a;l++)e[i]=arguments[l],i++;return s(e,i),i}})}}]);
//# sourceMappingURL=889.34a20460.js.map