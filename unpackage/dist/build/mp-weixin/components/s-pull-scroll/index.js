(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/s-pull-scroll/index"],{"245a":function(t,i,o){},"27a8":function(t,i,o){"use strict";var e=o("245a"),s=o.n(e);s.a},"28e4":function(t,i,o){"use strict";var e,s=function(){var t=this,i=t.$createElement,e=(t._self._c,o("6868"));t.$mp.data=Object.assign({},{$root:{m0:e}})},n=[];o.d(i,"b",(function(){return s})),o.d(i,"c",(function(){return n})),o.d(i,"a",(function(){return e}))},"32ec":function(t,i,o){"use strict";o.r(i);var e=o("8e2a"),s=o.n(e);for(var n in e)"default"!==n&&function(t){o.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"8a2b":function(t,i,o){"use strict";o.r(i);var e=o("28e4"),s=o("32ec");for(var n in s)"default"!==n&&function(t){o.d(i,t,(function(){return s[t]}))}(n);o("27a8");var h,r=o("f0c5"),l=Object(r["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],h);i["default"]=l.exports},"8e2a":function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"s-pull-scroll",data:function(){return Object.assign(this,{pullType:"",scrollRealTop:0,preScrollY:0,clientNum:0,isExec:!1,scrollHeight:0,clientHeight:0,bodyHeight:0,windowTop:0,windowBottom:0,page:0,startPoint:null,lastPoint:null,startTop:0,maxTouchmoveY:0,inTouchend:!1,moveTime:0,moveTimeDiff:0,movetype:0,isMoveDown:!1}),{scrollId:"s-pull-scroll-view-id-"+Math.random().toString(36).substr(2),downHight:0,downRotate:0,downText:"",isEmpty:!1,isShowDownTip:!1,isDownSuccess:!1,isDownError:!1,isDownReset:!1,isDownLoading:!1,isUpLoading:!1,isUpFinish:!1,isUpError:!1,isShowBackTop:!1,scrollAble:!0,scrollTop:0}},props:{customClass:{type:String,default:""},fixed:{type:Boolean,default:!0},headerHeight:{type:[Number,String],default:function(){return 0}},top:{type:[Number,Array,String],default:function(){return 0}},footerHeight:{type:[Number,String],default:function(){return 0}},bottom:{type:[Number,Array,String],default:function(){return 0}},preventTouchmove:{type:Boolean,default:!0},pullingText:{type:String,default:"下拉刷新"},loosingText:{type:String,default:"释放刷新"},downLoadingText:{type:String,default:"正在刷新 ..."},upLoadingText:{type:String,default:"加载中 ..."},showEmpty:{type:Boolean,default:!0},emptyText:{type:String,default:"暂无数据"},showDownSuccess:{type:Boolean,default:!1},downSuccessText:{type:String,default:"刷新成功"},showDownError:{type:Boolean,default:!1},downErrorText:{type:String,default:"刷新失败"},showUpError:{type:Boolean,default:!0},upErrorText:{type:String,default:"加载失败，点击重新加载"},showUpFinish:{type:Boolean,default:!0},upFinishText:{type:String,default:"暂无更多了"},pullDown:Function,enablePullDown:{type:Boolean,default:!0},downOffset:{type:Number,default:100},downFps:{type:Number,default:40},downMinAngle:{type:Number,default:45},downInOffsetRate:{type:Number,default:1},downOutOffsetRate:{type:Number,default:.4},downStartTop:{type:Number,default:100},downBottomOffset:{type:Number,default:20},pullUp:Function,enablePullUp:{type:Boolean,default:!0},upOffset:{type:Number,default:160},backTop:Boolean,backTopOffset:{type:Number,default:1e3}},watch:{top:function(){this.refreshClientHeight()},bottom:function(){this.refreshClientHeight()},headerHeight:function(){this.refreshClientHeight()},footerHeight:function(){this.refreshClientHeight()}},computed:{numTop:function(){return Number(this.headerHeight||0)+this.upx2px(this.top)},numBottom:function(){return Number(this.footerHeight||0)+this.upx2px(this.bottom)},numBackTopOffset:function(){return this.upx2px(this.backTopOffset)},numDownBottomOffset:function(){return this.upx2px(this.downBottomOffset)},numDownStartTop:function(){return this.upx2px(this.downStartTop)},numDownOffset:function(){return this.upx2px(this.downOffset)},numUpOffset:function(){return this.upx2px(this.upOffset)},fixedTop:function(){return this.fixed?this.numTop+this.windowTop+"px":0},padTop:function(){return this.fixed?0:this.numTop+"px"},fixedBottom:function(){return this.fixed?this.numBottom+this.windowBottom+"px":0},padBottom:function(){return this.fixed?0:this.numBottom+"px"},transition:function(){return this.isDownReset?"transform 300ms":""},translateY:function(){return this.downHight>0?"translateY("+this.downHight+"px)":""}},methods:{upx2px:function(i){return(Array.isArray(i)?i:[i]).map((function(i){return t.upx2px(Number(i||0))})).reduce((function(t,i){return t+i}))||0},scroll:function(t){t=t.detail,this.scrollRealTop=t.scrollTop,this.scrollHeight=t.scrollHeight;var i=t.scrollTop-this.preScrollY>0;this.preScrollY=t.scrollTop,i&&this.triggerPullUp(!0),this.backTop&&(t.scrollTop>=this.numBackTopOffset?this.isShowBackTop=!0:this.isShowBackTop=!1)},touchstart:function(t){this.pullDown&&this.enablePullDown&&(this.startPoint=this.getPoint(t),this.startTop=this.scrollRealTop,this.lastPoint=this.startPoint,this.maxTouchmoveY=this.bodyHeight-this.numDownBottomOffset,this.inTouchend=!1)},touchmove:function(t){if(this.pullDown&&this.enablePullDown&&this.startPoint){var i=Date.now();if(!(this.moveTime&&i-this.moveTime<this.moveTimeDiff)){this.moveTime=i,this.moveTimeDiff=1e3/this.downFps;var o=this.scrollRealTop,e=this.getPoint(t),s=e.y-this.startPoint.y;if(s>0&&(o<=0||o<=this.numDownStartTop&&o===this.startTop)&&this.pullDown&&this.enablePullDown&&!this.inTouchend&&!this.isDownLoading&&!this.isUpLoading){var n=Math.abs(this.lastPoint.x-e.x),h=Math.abs(this.lastPoint.y-e.y),r=Math.sqrt(n*n+h*h);if(0!==r){var l=Math.asin(h/r)/Math.PI*180;if(l<this.downMinAngle)return}if(this.maxTouchmoveY>0&&e.y>=this.maxTouchmoveY)return this.inTouchend=!0,void this.touchend();this.preventDefault(t);var u=e.y-this.lastPoint.y;this.downHight<this.numDownOffset?(1!==this.movetype&&(this.movetype=1,this.scrollAble=!1,this.isDownReset=!1,this.isDownLoading=!1,this.downText=this.pullingText,this.isMoveDown=!0),this.downHight+=u*this.downInOffsetRate):(2!==this.movetype&&(this.movetype=2,this.scrollAble=!1,this.isDownReset=!1,this.isDownLoading=!1,this.downText=this.loosingText,this.isMoveDown=!0),this.downHight+=u>0?Math.round(u*this.downOutOffsetRate):u),this.downRotate="rotate("+this.downHight/this.numDownOffset*360+"deg)"}this.lastPoint=e}}},touchend:function(t){if(this.pullDown&&this.enablePullDown)if(this.isMoveDown)this.downHight>=this.numDownOffset?this.triggerPullDown():(this.downHight=0,this.scrollAble=!0,this.isDownReset=!0,this.isDownLoading=!1),this.movetype=0,this.isMoveDown=!1;else if(this.scrollRealTop===this.startTop){var i=this.getPoint(t).y-this.startPoint.y<0;i&&this.triggerPullUp(!0)}},preventDefault:function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},onBackTop:function(){this.isShowBackTop=!1,this.scrollTo(0)},onUpErrorClick:function(){this.isUpError=!1,"down"===this.pullType?this.triggerPullDown():"up"===this.pullType&&this.triggerPullUp()},scrollTo:function(t){var i=this;this.scrollTop=this.scrollRealTop,this.$nextTick((function(){i.scrollTop=t}))},getPoint:function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}},getScrollBottom:function(){return this.scrollHeight-this.getClientHeight()-this.scrollRealTop},getClientHeight:function(t){var i=this.clientHeight||0;return 0===i&&!0!==t&&(i=this.bodyHeight),i},refreshClientHeight:function(){var i=this;this.isExec||(this.isExec=!0,this.$nextTick((function(){t.createSelectorQuery().in(i).select("#"+i.scrollId).boundingClientRect((function(t){i.isExec=!1,t?i.clientHeight=t.height:3!=i.clientNum&&(i.clientNum=0==i.clientNum?1:i.clientNum+1,setTimeout((function(){i.refreshClientHeight()}),100*i.clientNum))})).exec()})))},showDownLoading:function(){this.isEmpty=!1,this.isUpLoading=!1,this.isUpError=!1,this.isUpFinish=!1,this.isShowDownTip=!1,this.isDownSuccess=!1,this.isDownError=!1,this.isDownLoading=!0,this.downHight=this.numDownOffset,this.scrollAble=!0,this.isDownReset=!0,this.downText=this.downLoadingText},hideDownLoading:function(){var t=this;this.isDownLoading&&(this.isDownSuccess&&this.showDownSuccess?(this.downText=this.downSuccessText,this.isShowDownTip=!0):this.isDownError&&this.showDownError&&(this.downText=this.downErrorText,this.isShowDownTip=!0),this.isShowDownTip?setTimeout((function(){t.downHight=0,t.isDownReset=!0,t.scrollHeight=0,setTimeout((function(){t.scrollAble=!0,t.isDownLoading=!1,t.isShowDownTip=!1}),300)}),1e3):(this.downHight=0,this.isDownReset=!0,this.scrollHeight=0,this.scrollAble=!0,this.isDownLoading=!1,this.isShowDownTip=!1))},showUpLoading:function(){this.isEmpty=!1,this.isUpError=!1,this.isUpFinish=!1,this.isUpLoading=!0},hideUpLoading:function(){var t=this;this.isUpLoading&&this.$nextTick((function(){t.isUpLoading=!1}))},triggerPullDown:function(){this.pullDown&&this.enablePullDown&&!this.isDownLoading&&!this.isUpLoading&&(this.showDownLoading(),this.page=1,this.pullType="down",this.pullDown&&this.pullDown.call(this.$parent,this))},triggerPullUp:function(t){if(this.pullUp&&this.enablePullUp&&!this.isUpLoading&&!this.isDownLoading&&!this.isUpError&&!this.isUpFinish){if(t&&this.getScrollBottom()>this.numUpOffset)return;this.showUpLoading(),this.page++,this.pullType="up",this.pullUp&&this.pullUp.call(this.$parent,this),this.refreshClientHeight()}},refresh:function(){this.page=0,this.isEmpty=!1,this.isDownSuccess=!1,this.isDownError=!1,this.isShowDownTip=!1,this.isUpError=!1,this.isUpFinish=!1,this.isDownLoading=!1,this.isUpLoading=!1,this.scrollTo(0),this.pullDown&&this.enablePullDown?this.triggerPullDown():this.pullUp&&this.enablePullUp&&this.triggerPullUp()},success:function(){this.isDownLoading&&(this.isDownSuccess=!0),this.hideDownLoading(),this.hideUpLoading()},error:function(){this.page>0&&this.page--,this.isDownLoading?this.isDownError=!0:this.isUpLoading&&(this.isUpError=!0),this.hideDownLoading(),this.hideUpLoading()},empty:function(){this.isDownLoading&&(this.isDownSuccess=!0),this.isEmpty=!0,this.isUpFinish=!0,this.hideDownLoading(),this.hideUpLoading()},finish:function(){this.hideDownLoading(),this.hideUpLoading(),this.isUpFinish=!0}},created:function(){var i=this;t.getSystemInfo({success:function(t){t.windowTop&&(i.windowTop=t.windowTop),t.windowBottom&&(i.windowBottom=t.windowBottom),i.bodyHeight=t.windowHeight}})},mounted:function(){var i=this;this.refreshClientHeight=this.refreshClientHeight.bind(this),t.onWindowResize(this.refreshClientHeight),this.refreshClientHeight(),this.$el&&this.$el.addEventListener&&this.$el.addEventListener("touchmove",(function(t){i.preventTouchmove&&t.preventDefault()}))},beforeDestroy:function(){t.offWindowResize(this.refreshClientHeight)}};i.default=o}).call(this,o("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/s-pull-scroll/index-create-component',
    {
        'components/s-pull-scroll/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8a2b"))
        })
    },
    [['components/s-pull-scroll/index-create-component']]
]);
