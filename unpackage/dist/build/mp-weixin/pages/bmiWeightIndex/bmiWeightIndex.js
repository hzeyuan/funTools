(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bmiWeightIndex/bmiWeightIndex"],{1446:function(t,e,i){"use strict";(function(t){i("06f0"),i("921b");n(i("66fd"));var e=n(i("f026"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},2891:function(t,e,i){},"2fdf":function(t,e,i){"use strict";var n=i("2891"),u=i.n(n);u.a},3147:function(t,e,i){"use strict";i.r(e);var n=i("ca85"),u=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=u.a},"3c3b":function(t,e,i){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},ca85:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("4b28"),u={data:function(){return{switchSex:!1,inputValueWeight:"",inputValueHeight:"",resultList:[]}},methods:{SwitchSex:function(t){this.switchSex=t.detail.value},setHeight:function(t){this.inputValueHeight=t.detail.value},setWeight:function(t){this.inputValueWeight=t.detail.value},searchSgWeight:function(e){""==this.inputValueHeight?t.showToast({title:"请输入身高"}):""==this.inputValueWeight&&t.showToast({title:"请输入体重"});var i=1==this.switchSex?"W":"M";this.resultList=n.HealthMsg(this.inputValueWeight,this.inputValueHeight,i),console.log(this.resultList)},onShareAppMessage:function(t){}}};e.default=u}).call(this,i("543d")["default"])},f026:function(t,e,i){"use strict";i.r(e);var n=i("3c3b"),u=i("3147");for(var a in u)"default"!==a&&function(t){i.d(e,t,(function(){return u[t]}))}(a);i("2fdf");var c,s=i("f0c5"),l=Object(s["a"])(u["default"],n["b"],n["c"],!1,null,"3d142924",null,!1,n["a"],c);e["default"]=l.exports}},[["1446","common/runtime","common/vendor"]]]);