(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sfzQuery/sfzQuery"],{"21c0":function(t,e,n){"use strict";(function(t){n("06f0"),n("921b");r(n("66fd"));var e=r(n("a2ce"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},2837:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.sfzInfo,(function(e,n){var r=t.chineseFmt(n);return{$orig:t.__get_orig(e),m0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}))},a2ce:function(t,e,n){"use strict";n.r(e);var r=n("2837"),a=n("b382");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var i,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=u.exports},b382:function(t,e,n){"use strict";n.r(e);var r=n("ca1b"),a=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=a.a},ca1b:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{showSfzInfo:!1,sfz:"",sfzInfo:{city:"...",age:"...",sex:"男",birth:"1999-01-01",shengxiao:"兔",xingzuo:"天蝎"}}},methods:{setSfz:function(t){this.sfz=t.detail.value},sfzQuery:function(){var e=new this.IDCard;e.check(this.sfz)?(t.showLoading({title:"加载中"}),this.sfzInfo.birth=e.year+"-"+e.month+"-"+e.day,this.sfzInfo.age=this.getAge(this.sfzInfo.birth),this.sfzInfo.shengxiao=this.getShengxiao(e.year),this.sfzInfo.sex=e.sex,this.sfzInfo.xingzuo=this.getXingZuo(e.month,e.day),this.getLocation(),t.hideLoading(),this.showSfzInfo=!0):t.showToast({title:"身份证格式不正确"})},chineseFmt:function(t){return"city"==t?"城市":"age"==t?"年龄":"sex"==t?"性别":"birth"==t?"生日":"shengxiao"==t?"生肖":"xingzuo"==t?"星座":void 0},IDCard:function(t){var e=this;function n(t){var e=/^[0]*([0-9]*)$/;return t.match(e),parseInt(RegExp.$1,10)}function r(){var t=/^[0-9x]{15,18}$/i;if(!t.test(e.ID))return e.errNum=7,!1;if(15==e.ID.length||18==e.ID.length){var r=0;18==e.ID.length&&(r=2);var a=parseInt(e.ID.substr(6,2+r),10),s=n(e.ID.substr(8+r,2)),i=parseInt(e.ID.substr(10+r,2),10),o=parseInt(e.ID.substr(14+r,1),10)%2===0?"女":"男";return 4==a.length&&(a<1900||a>2050)&&(e.errNum=4),(s<1||s>12)&&(e.errNum=5),(i<1||i>31)&&(e.errNum=6),e.year=a,e.month=s,e.day=i,e.sex=o,0===e.errNum}return e.errNum=3,!1}this.checkCode=new Array(1,0,"X",9,8,7,6,5,4,3,2),this.ID,this.errNum=0,this.year=0,this.month=0,this.day=0,this.sex="",this.city="",this.err={1:"身份证校验不符合求和模11=1这个等式",2:"身份证最后一位校验位有误",3:"身份证位数不正确",4:"年份错误",5:"月份错误",6:"日错误"},this.err_msg=function(){return 0!==this.errNum?this.err[this.errNum]:null},this.check=function(t){return console.log("xiaoyan"),this.errNum=0,this.ID=t,console.log(t),!!r()&&0===a()};var a=function(){for(var t=0,n=1;n<=e.ID.length;n++){var r=e.ID.substr(e.ID.length-n,1);r="x"==r.toLowerCase()?10:r;var a=Math.pow(2,n-1)%11;t+=parseInt(r,10)*a}1!==t%11&&(e.errNum=1),t-=parseInt(e.ID.substr[0],10);var s=t%11,i=e.ID.substr(e.ID.length-1,1);return i==e.checkCode[s]&&(e.errNum=2),e.errNum}},getAge:function(t){var e=t.split("-"),n=e[0],r=e[1],a=e[2];f=new Date;var s,i=f.getFullYear(),o=f.getMonth()+1,u=f.getDate();if(null==e)return!1;var f=new Date(n,r-1,a);if(f.getFullYear()==n&&f.getMonth()+1==r&&f.getDate()==a){if(i==n)s=0;else{var c=i-n;if(!(c>0))return"出生日期晚于今天，数据有误";if(o==r){var h=u-a;s=h<0?c-1:c}else{var l=o-r;s=l<0?c-1:c}}return s}return"输入的日期格式错误！"},getShengxiao:function(t){var e=["子鼠","丑牛","寅虎","卯兔","辰龙","巳蛇","午马","未羊","申猴","酉鸡","戌狗","亥猪"],n=(parseInt(t,10)-1984)%12;return console.log(e[n]),e[n]},getXingZuo:function(t,e){var n=[{Start:121,End:220,Name:"水平座"},{Start:221,End:320,Name:"双鱼座"},{Start:321,End:420,Name:"白羊座"},{Start:421,End:520,Name:"金牛座"},{Start:521,End:620,Name:"双子座"},{Start:621,End:720,Name:"巨蟹座"},{Start:721,End:820,Name:"狮子座"},{Start:821,End:920,Name:"处女座"},{Start:921,End:1020,Name:"天秤座"},{Start:1021,End:1120,Name:"天蝎座"}],r=100*t+e;for(var a in n)if(r>=n[a].Start&&r<=n[a].End)return n[a].Name},getLocation:function(){var t=this,e=this.sfz.substr(0,2)+"0000",r=this.sfz.substr(0,4)+"00",a=this.sfz.substr(0,6),s="";return n.callFunction({name:"getLocations",data:{province:e,city:r,area:a}}).then((function(e){console.log(s),t.sfzInfo.city=e.result})),s},onShareAppMessage:function(t){}}};e.default=r}).call(this,n("543d")["default"],n("a9ff")["default"])}},[["21c0","common/runtime","common/vendor"]]]);