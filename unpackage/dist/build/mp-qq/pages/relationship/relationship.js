(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/relationship/relationship"],{"0e80":function(e,t,i){"use strict";i.r(t);var n=i("586b"),a=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},"260d":function(e,t,i){"use strict";i.r(t);var n=i("36cf"),a=i("0e80");for(var u in a)"default"!==u&&function(e){i.d(t,e,(function(){return a[e]}))}(u);i("f2f3");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2d00c844",null,!1,n["a"],s);t["default"]=r.exports},"36cf":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return n}))},"586b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("4295"),a={onLoad:function(){var e=n({text:"爸爸的哥哥",sex:1});console.log("结果："+e)},data:function(){return{indexSix:0,inputValueSix:1,typeDc:["我称呼对方","对方称呼我"],indexType:0,inputValueType:!1,infix:"轻松搞定亲戚关系～",messageR:"逢年过节再不尴尬！",disabledlg:!0,disabledlp:!1}},methods:{SwitchSex:function(e){this.indexSix=e.detail.value?1:0,this.computed()},changeTypeDc:function(){this.indexType=0==this.indexType?1:0,this.inputValueType=!this.inputValueType,this.computed()},bindViewTapInput:function(e){var t=e.currentTarget.id,i=this.infix;this.infix="轻松搞定亲戚关系～"==i?t:i+"的"+t;var n="爸爸,老公,儿子,哥哥,弟弟".indexOf(t)>-1;this.disabledlg=n,this.disabledlp=!n},bindViewTapOpt:function(e){var t=e.currentTarget.id.trim();"ac"==t?this.clearAll():"="==t&&this.computed()},computed:function(){var e={text:this.infix,sex:this.indexSix,type:"default",reverse:this.inputValueType},t=n(e);console.log(t),0==t.length?this.messageR="超出计算范围啦！":this.messageR=t.length>0?t.join(","):t[0]},clearAll:function(){var e=1==this.inputValueSix;this.setData({disabledlg:e,disabledlp:!e,infix:"轻松搞定亲戚关系～",messageR:""})},onShareAppMessage:function(e){}}};t.default=a},"7d6d":function(e,t,i){},c5a6:function(e,t,i){"use strict";(function(e){i("06f0");n(i("66fd"));var t=n(i("260d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("a821")["createPage"])},f2f3:function(e,t,i){"use strict";var n=i("7d6d"),a=i.n(n);a.a}},[["c5a6","common/runtime","common/vendor"]]]);