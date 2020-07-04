<template>
  <view class="s-pull-scroll" :class="customClass">
    <scroll-view
      :id="scrollId"
      class="s-pull-scroll-view"
      :class="{'is-fixed':fixed}"
      :style="{'padding-top':padTop,'padding-bottom':padBottom,'top':fixedTop,'bottom':fixedBottom}"
      :scroll-top="scrollTop"
      :scroll-with-animation="false"
      :scroll-y="scrollAble"
      :enable-back-to-top="true"
      @scroll="scroll"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      @touchcancel="touchend"
    >
      <view :style="{'transform': translateY, 'transition': transition}">
        <view
          class="s-pull-down-wrap"
          :class="[{'is-success': isShowDownTip && isDownSuccess},{'is-error': isShowDownTip && isDownError}]"
          :style="{'height':downOffset+'rpx'}"
        >
          <view
            class="s-pull-loading-icon"
            v-if="!isShowDownTip"
            :class="{'s-pull-loading-rotate':isDownLoading}"
            :style="{'transform':downRotate}"
          ></view>
          <view>{{downText}}</view>
        </view>

        <slot></slot>

        <view v-if="isUpLoading" class="s-pull-up-wrap">
          <view class="s-pull-loading-icon s-pull-loading-rotate"></view>
          <view>{{upLoadingText}}</view>
        </view>

        <slot name="empty" v-if="isEmpty && showEmpty">
          <view class="s-pull-tip-wrap" v-if="emptyText">{{emptyText}}</view>
        </slot>

        <slot name="up-error" v-else-if="isUpError && showUpError">
          <view class="s-pull-tip-wrap" v-if="upErrorText" @click="onUpErrorClick">{{upErrorText}}</view>
        </slot>
        <slot name="up-finish" v-else-if="isUpFinish && showUpFinish">
          <view class="s-pull-tip-wrap" v-if="upFinishText">{{upFinishText}}</view>
        </slot>
      </view>
    </scroll-view>
    <!-- 回到顶部按钮 (fixed元素,需写在scroll-view外面,防止滚动的时候抖动)-->
    <view
      class="s-pull-back-top"
      v-if="backTop"
      :class="{'is-show':isShowBackTop}"
      @click="onBackTop"
    >
      <slot name="backtop">
        <view class="default-back-top">
          <img src="./back-top.png" />
        </view>
      </slot>
    </view>
  </view>
</template>

<script>

export default {
  name: 's-pull-scroll',
  data () {
    Object.assign(this, {
      pullType: '',
      scrollRealTop: 0, // 滚动条的位置
      preScrollY: 0,
      clientNum: 0,
      isExec: false,
      scrollHeight: 0,
      clientHeight: 0,
      bodyHeight: 0,
      windowTop: 0, // 可使用窗口的顶部位置
      windowBottom: 0, // 可使用窗口的底部位置
      page: 0,
      startPoint: null,
      lastPoint: null,
      startTop: 0,
      maxTouchmoveY: 0,
      inTouchend: false,
      moveTime: 0,
      moveTimeDiff: 0,
      movetype: 0,
      isMoveDown: false
    });
    return {
      scrollId: 's-pull-scroll-view-id-' + Math.random().toString(36).substr(2), // 随机生成mescroll的id(不能数字开头,否则找不到元素)
      downHight: 0, // 下拉刷新: 容器高度
      downRotate: 0, // 下拉刷新: 圆形进度条旋转的角度
      downText: '', // 下拉刷新: 提示的文本
      isEmpty: false, // 是否显示空布局
      isShowDownTip: false, // 下拉刷新提示结果
      isDownSuccess: false, // 下拉刷新成功
      isDownError: false, // 下拉刷新失败
      isDownReset: false, // 下拉刷新: 是否显示重置的过渡动画
      isDownLoading: false, // 下拉刷新: 是否显示加载中
      isUpLoading: false, // 上拉加载: 是否显示 "加载中..."
      isUpFinish: false, // 是否加载完毕
      isUpError: false, // 是否上拉加载出错
      isShowBackTop: false, // 是否显示回到顶部按钮
      scrollAble: true, // 是否禁止下滑 (下拉时禁止,避免抖动)
      scrollTop: 0 // 滚动条的位置
    };
  },
  props: {
    // class
    customClass: {
      type: String,
      default: ''
    },
    // 是否通过fixed固定高度, 默认true
    fixed: {
      type: Boolean,
      default: true
    },
    // 自定义头部时，头部高度(px)
    headerHeight: {
      type: [Number, String],
      default () {
        return 0;
      }
    },
    // 距顶部(rpx)
    top: {
      type: [Number, Array, String],
      default () {
        return 0;
      }
    },
    // 自定义底部时，底部高度(px)
    footerHeight: {
      type: [Number, String],
      default () {
        return 0;
      }
    },
    // 距底部(rpx)
    bottom: {
      type: [Number, Array, String],
      default () {
        return 0;
      }
    },
    // 是否阻止默认滚动
    preventTouchmove: {
      type: Boolean,
      default: true
    },
    // 下拉时文案
    pullingText: {
      type: String,
      default: '下拉刷新'
    },
    // 下拉释放时文案
    loosingText: {
      type: String,
      default: '释放刷新'
    },
    // 下拉释放后文案
    downLoadingText: {
      type: String,
      default: '正在刷新 ...'
    },
    // 上拉加载时文案
    upLoadingText: {
      type: String,
      default: '加载中 ...'
    },
    // 是否显示空布局
    showEmpty: {
      type: Boolean,
      default: true
    },
    // 刷新或加载数据为空时文案
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    // 是否显示下拉刷新成功
    showDownSuccess: {
      type: Boolean,
      default: false
    },
    // 下拉刷新成功文案
    downSuccessText: {
      type: String,
      default: '刷新成功'
    },
    // 是否显示下拉刷新失败
    showDownError: {
      type: Boolean,
      default: false
    },
    // 下拉刷新失败文案
    downErrorText: {
      type: String,
      default: '刷新失败'
    },
    // 是否显示上拉加载时失败
    showUpError: {
      type: Boolean,
      default: true
    },
    // 上拉加载失败文案
    upErrorText: {
      type: String,
      default: '加载失败，点击重新加载'
    },
    // 是否显示上拉加载数据全部完成
    showUpFinish: {
      type: Boolean,
      default: true
    },
    // 上拉加载完毕文案
    upFinishText: {
      type: String,
      default: '暂无更多了'
    },
    // 下拉配置
    // 下拉回掉，参数为vm
    pullDown: Function,
    // 是否允许下拉刷新
    enablePullDown: {
      type: Boolean,
      default: true
    },
    downOffset: {
      type: Number,
      default: 100
    },
    downFps: {
      type: Number,
      default: 40
    },
    downMinAngle: {
      type: Number,
      default: 45
    },
    downInOffsetRate: {
      type: Number,
      default: 1
    },
    downOutOffsetRate: {
      type: Number,
      default: 0.4
    },
    downStartTop: {
      type: Number,
      default: 100
    },
    downBottomOffset: {
      type: Number,
      default: 20
    },
    // 上拉配置
    // 上拉回掉，参数为vm
    pullUp: Function,
    // 是否允许上拉加载
    enablePullUp: {
      type: Boolean,
      default: true
    },
    upOffset: {
      type: Number,
      default: 160
    },
    // 回到顶部
    backTop: Boolean,
    // 滚动距离大于多少rpx时触发
    backTopOffset: {
      type: Number,
      default: 1000
    }
  },
  watch: {
    top () {
      this.refreshClientHeight();
    },
    bottom () {
      this.refreshClientHeight();
    },
    headerHeight () {
      this.refreshClientHeight();
    },
    footerHeight () {
      this.refreshClientHeight();
    }
  },
  computed: {
    numTop () {
      return Number(this.headerHeight || 0) + this.upx2px(this.top);
    },
    numBottom () {
      return Number(this.footerHeight || 0) + this.upx2px(this.bottom);
    },
    numBackTopOffset () {
      return this.upx2px(this.backTopOffset);
    },
    numDownBottomOffset () {
      return this.upx2px(this.downBottomOffset);
    },
    numDownStartTop () {
      return this.upx2px(this.downStartTop);
    },
    numDownOffset () {
      return this.upx2px(this.downOffset);
    },
    numUpOffset () {
      return this.upx2px(this.upOffset);
    },
    fixedTop () {
      return this.fixed ? (this.numTop + this.windowTop) + 'px' : 0;
    },
    padTop () {
      return !this.fixed ? this.numTop + 'px' : 0;
    },
    fixedBottom () {
      return this.fixed ? (this.numBottom + this.windowBottom) + 'px' : 0;
    },
    padBottom () {
      return !this.fixed ? this.numBottom + 'px' : 0;
    },
    transition () {
      return this.isDownReset ? 'transform 300ms' : '';
    },
    translateY () {
      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : '';
    }
  },
  methods: {
    upx2px (value) {
      return (Array.isArray(value) ? value : [value]).map(num => uni.upx2px(Number(num || 0))).reduce((a, b) => a + b) || 0;
    },
    // 注册列表滚动事件,用于下拉刷新
    scroll (e) {
      e = e.detail;
      // 更新滚动条的位置
      this.scrollRealTop = e.scrollTop;
      // 更新滚动内容高度
      this.scrollHeight = e.scrollHeight;
      // 向上滑还是向下滑动
      const isScrollUp = e.scrollTop - this.preScrollY > 0;
      this.preScrollY = e.scrollTop;
      // 上滑 && 检查并触发上拉
      isScrollUp && this.triggerPullUp(true);
      // 回到顶部功能
      if (this.backTop) {
        // 返回顶部按钮的显示隐藏
        if (e.scrollTop >= this.numBackTopOffset) {
          this.isShowBackTop = true;
        } else {
          this.isShowBackTop = false;
        }
      }
    },
    // 注册列表touchstart事件,用于下拉刷新
    touchstart (e) {
      if (!this.pullDown || !this.enablePullDown) return;
      this.startPoint = this.getPoint(e); // 记录起点
      this.startTop = this.scrollRealTop; // 记录此时的滚动条位置
      this.lastPoint = this.startPoint; // 重置上次move的点
      this.maxTouchmoveY = this.bodyHeight - this.numDownBottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)
      this.inTouchend = false; // 标记不是touchend
    },
    // 注册列表touchmove事件,用于下拉刷新
    touchmove (e) {
      if (!this.pullDown || !this.enablePullDown) return;
      if (!this.startPoint) return;
      // 节流
      const t = Date.now();
      if (this.moveTime && t - this.moveTime < this.moveTimeDiff) { // 小于节流时间,则不处理
        return;
      } else {
        this.moveTime = t;
        this.moveTimeDiff = 1000 / this.downFps;
      }

      let scrollRealTop = this.scrollRealTop; // 当前滚动条的距离
      let curPoint = this.getPoint(e); // 当前点

      let moveY = curPoint.y - this.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉

      // (向下拉&&在顶部) scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove
      // scroll-view滚动到顶部时,scrollTop不一定为0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等
      if (moveY > 0 && (scrollRealTop <= 0 || (scrollRealTop <= this.numDownStartTop && scrollRealTop === this.startTop))) {
        // 可下拉的条件
        if (this.pullDown && this.enablePullDown && !this.inTouchend && !this.isDownLoading && !this.isUpLoading) {
          // 下拉的角度是否在配置的范围内
          let x = Math.abs(this.lastPoint.x - curPoint.x);
          let y = Math.abs(this.lastPoint.y - curPoint.y);
          let z = Math.sqrt(x * x + y * y);
          if (z !== 0) {
            let angle = Math.asin(y / z) / Math.PI * 180; // 两点之间的角度,区间 [0,90]
            if (angle < this.downMinAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新
          }

          // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
          if (this.maxTouchmoveY > 0 && curPoint.y >= this.maxTouchmoveY) {
            this.inTouchend = true; // 标记执行touchend
            this.touchend(); // 提前触发touchend
            return;
          }

          this.preventDefault(e); // 阻止默认事件

          let diff = curPoint.y - this.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)

          // 下拉距离  < 指定距离
          if (this.downHight < this.numDownOffset) {
            if (this.movetype !== 1) {
              this.movetype = 1; // 加入标记,保证只执行一次
              // 下拉的距离进入offset范围内那一刻的回调
              this.scrollAble = false; // 禁止下拉,避免抖动
              this.isDownReset = false; // 不重置高度
              this.isDownLoading = false; // 不显示加载中
              this.downText = this.pullingText; // 设置文本
              this.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
            }
            this.downHight += diff * this.downInOffsetRate; // 越往下,高度变化越小
            // 指定距离  <= 下拉距离
          } else {
            if (this.movetype !== 2) {
              this.movetype = 2; // 加入标记,保证只执行一次
              // 下拉的距离大于offset那一刻的回调
              this.scrollAble = false; // 禁止下拉,避免抖动
              this.isDownReset = false; // 不重置高度
              this.isDownLoading = false; // 不显示加载中
              this.downText = this.loosingText; // 设置文本
              this.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
            }
            if (diff > 0) { // 向下拉
              this.downHight += Math.round(diff * this.downOutOffsetRate); // 越往下,高度变化越小
            } else { // 向上收
              this.downHight += diff; // 向上收回高度,则向上滑多少收多少高度
            }
          }
          // 设置旋转角度
          this.downRotate = 'rotate(' + 360 * (this.downHight / this.numDownOffset) + 'deg)';
        }
      }
      // 记录本次移动的点
      this.lastPoint = curPoint;
    },
    // 注册列表touchend事件,用于下拉刷新
    touchend (e) {
      if (!this.pullDown || !this.enablePullDown) return;
      // 如果下拉区域高度已改变,则需重置回来
      if (this.isMoveDown) {
        if (this.downHight >= this.numDownOffset) {
          // 符合触发刷新的条件
          this.triggerPullDown();
        } else {
          // 不符合的话 则重置
          this.downHight = 0;
          this.scrollAble = true; // 开启下拉
          this.isDownReset = true; // 重置高度
          this.isDownLoading = false; // 不显示加载中
        }
        this.movetype = 0;
        this.isMoveDown = false;
      } else if (this.scrollRealTop === this.startTop) { // 到顶/左/右/底的滑动事件
        const isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉
        // 上滑 && 检查并触发上拉
        isScrollUp && this.triggerPullUp(true);
      }
    },
    preventDefault (e) {
      // 小程序不支持e.preventDefault
      // app的bounce只能通过配置pages.json的style.app-plus.bounce为"none"来禁止
      // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
      if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();
    },
    // 点击回到顶部的按钮回调
    onBackTop () {
      this.isShowBackTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
      this.scrollTo(0); // 执行回到顶部
    },
    // 点击失败重新加载
    onUpErrorClick () {
      this.isUpError = false;
      if (this.pullType === 'down') {
        this.triggerPullDown();
      } else if (this.pullType === 'up') {
        this.triggerPullUp();
      }
    },
    scrollTo (y) {
      this.scrollTop = this.scrollRealTop;
      this.$nextTick(() => {
        this.scrollTop = y;
      });
    },
    /* 根据点击滑动事件获取第一个手指的坐标 */
    getPoint (e) {
      if (!e) {
        return {
          x: 0,
          y: 0
        };
      }
      if (e.touches && e.touches[0]) {
        return {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      } else if (e.changedTouches && e.changedTouches[0]) {
        return {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        };
      } else {
        return {
          x: e.clientX,
          y: e.clientY
        };
      }
    },
    /* 滚动条到底部的距离 */
    getScrollBottom () {
      return this.scrollHeight - this.getClientHeight() - this.scrollRealTop;
    },
    /* 滚动容器的高度 */
    getClientHeight (isReal) {
      let h = this.clientHeight || 0;
      if (h === 0 && isReal !== true) { // 未获取到容器的高度,可临时取body的高度 (可能会有误差)
        h = this.bodyHeight;
      }
      return h;
    },
    /* 更新滚动区域的高度 (使内容不满屏和到底,都可继续翻页) */
    refreshClientHeight () {
      if (!this.isExec) {
        this.isExec = true; // 避免多次获取
        this.$nextTick(() => { // 确保dom已渲染
          uni.createSelectorQuery().in(this).select('#' + this.scrollId).boundingClientRect(data => {
            this.isExec = false;
            if (data) {
              this.clientHeight = data.height;
            } else if (this.clientNum != 3) { // 极少部分情况,可能dom还未渲染完毕,递归获取,最多重试3次
              this.clientNum = this.clientNum == 0 ? 1 : this.clientNum + 1;
              setTimeout(() => {
                this.refreshClientHeight();
              }, this.clientNum * 100);
            }
          }).exec();
        });
      }
    },
    /* 显示下拉进度布局 */
    showDownLoading () {
      this.isEmpty = false;

      this.isUpLoading = false;
      this.isUpError = false;
      this.isUpFinish = false;

      this.isShowDownTip = false;
      this.isDownSuccess = false;
      this.isDownError = false;
      this.isDownLoading = true; // 显示加载中
      this.downHight = this.numDownOffset; // 更新下拉区域高度
      this.scrollAble = true; // 开启下拉
      this.isDownReset = true; // 重置高度
      this.downText = this.downLoadingText; // 设置文本
    },
    /* 结束下拉刷新 */
    hideDownLoading () {
      if (this.isDownLoading) {
        if (this.isDownSuccess && this.showDownSuccess) {
          this.downText = this.downSuccessText;
          this.isShowDownTip = true;
        } else if (this.isDownError && this.showDownError) {
          this.downText = this.downErrorText;
          this.isShowDownTip = true;
        }
        if (this.isShowDownTip) {
          setTimeout(() => {
            this.downHight = 0;
            this.isDownReset = true; // 重置高度
            this.scrollHeight = 0;// 重置滚动区域,使数据不满屏时仍可检查触发翻页
            setTimeout(() => {
              this.scrollAble = true; // 开启下拉
              this.isDownLoading = false; // 不显示加载中
              this.isShowDownTip = false;
            }, 300);
          }, 1000);
        } else {
          this.downHight = 0;
          this.isDownReset = true; // 重置高度
          this.scrollHeight = 0;// 重置滚动区域,使数据不满屏时仍可检查触发翻页
          this.scrollAble = true; // 开启下拉
          this.isDownLoading = false; // 不显示加载中
          this.isShowDownTip = false;
        }
      }
    },
    /* 显示上拉加载中 */
    showUpLoading () {
      this.isEmpty = false;
      this.isUpError = false;
      this.isUpFinish = false;
      this.isUpLoading = true;
    },
    /* 结束上拉加载 */
    hideUpLoading () {
      if (this.isUpLoading) {
        this.$nextTick(() => {
          this.isUpLoading = false;
        });
      }
    },
    /* 触发下拉刷新 */
    triggerPullDown () {
      if (this.pullDown && this.enablePullDown && !this.isDownLoading && !this.isUpLoading) {
        // 下拉加载中...
        this.showDownLoading(); // 下拉刷新中...
        this.page = 1; // 预先加一页
        this.pullType = 'down';
        this.pullDown && this.pullDown.call(this.$parent, this);
      }
    },
    /* 触发上拉加载 */
    triggerPullUp (isCheck) {
      if (this.pullUp && this.enablePullUp && !this.isUpLoading && !this.isDownLoading && !this.isUpError && !this.isUpFinish) {
        // 是否校验在底部; 默认不校验
        if (isCheck && this.getScrollBottom() > this.numUpOffset) return;
        // 上拉加载中...
        this.showUpLoading();
        this.page++;
        this.pullType = 'up';
        this.pullUp && this.pullUp.call(this.$parent, this);
        // 更新容器的高度
        this.refreshClientHeight();
      }
    },
    refresh () {
      this.page = 0;
      this.isEmpty = false;
      this.isDownSuccess = false;
      this.isDownError = false;
      this.isShowDownTip = false;
      this.isUpError = false;
      this.isUpFinish = false;
      this.isDownLoading = false;
      this.isUpLoading = false;
      this.scrollTo(0);
      if (this.pullDown && this.enablePullDown) {
        this.triggerPullDown();
      } else if (this.pullUp && this.enablePullUp) {
        this.triggerPullUp();
      }
    },
    /* 正常加载成功 */
    success () {
      if (this.isDownLoading) {
        this.isDownSuccess = true;
      }
      this.hideDownLoading();
      this.hideUpLoading();
    },
    /* 加载失败 */
    error () {
      if (this.page > 0) {
        this.page--;
      }
      if (this.isDownLoading) {
        this.isDownError = true;
      } else if (this.isUpLoading) {
        this.isUpError = true;
      }
      this.hideDownLoading();
      this.hideUpLoading();
    },
    /* 没有数据 */
    empty () {
      if (this.isDownLoading) {
        this.isDownSuccess = true;
      }
      this.isEmpty = true;
      this.isUpFinish = true;
      this.hideDownLoading();
      this.hideUpLoading();
    },
    /* 全部数据加载完毕 */
    finish () {
      this.hideDownLoading();
      this.hideUpLoading();
      this.isUpFinish = true;
    }
  },
  created () {
    // 设置高度
    uni.getSystemInfo({
      success: (res) => {
        if (res.windowTop) this.windowTop = res.windowTop; // 修正app和H5的top值
        if (res.windowBottom) this.windowBottom = res.windowBottom; // 修正app和H5的bottom值
        this.bodyHeight = res.windowHeight;// 使down的bottomOffset生效
      }
    });
  },
  mounted () {
    // 设置容器的高度
    this.refreshClientHeight = this.refreshClientHeight.bind(this);
    uni.onWindowResize(this.refreshClientHeight);
    this.refreshClientHeight();

    this.$el && this.$el.addEventListener && this.$el.addEventListener('touchmove', e => {
      this.preventTouchmove && e.preventDefault();
    });
  },
  beforeDestroy () {
    uni.offWindowResize(this.refreshClientHeight);
  }
};
</script>

<style lang="scss">
.s-pull-scroll {
  height: 100%;
  -webkit-overflow-scrolling: touch;

  .s-pull-scroll-view {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
  }
  /* 定位的方式固定高度 */
  .is-fixed {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
  }
  .s-pull-down-wrap,
  .s-pull-up-wrap,
  .s-pull-tip-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    color: #969799;
  }
  .s-pull-down-wrap {
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateY(-100%);
  }
  .s-pull-up-wrap,
  .s-pull-tip-wrap {
    height: 100rpx;
  }
  /* 旋转loading */
  .s-pull-loading-icon {
    width: 30rpx;
    height: 30rpx;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    border: 2rpx solid #969799;
    border-bottom-color: transparent;
    box-sizing: border-box;
    &:first-child {
      margin-right: 16rpx;
    }
  }
  /* 旋转动画 */
  .s-pull-loading-rotate {
    animation: s-pull-loading-rotate 0.6s linear infinite;
  }

  @keyframes s-pull-loading-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* 回到顶部的按钮 */
  .s-pull-back-top {
    position: relative;
    z-index: 99;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s linear;
    &.is-show {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .default-back-top {
    position: fixed;
    right: 20rpx;
    bottom: calc(var(--window-bottom) + 25rpx);

    img {
      width: 72rpx;
      height: 72rpx;
      border-radius: 50%;
    }
  }
}
</style>
