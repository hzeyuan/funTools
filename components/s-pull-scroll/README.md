# 提示
后续将不在插件市场更新，组件包和示例请访问github中[s-ui地址](https://github.com/sldt/s-ui)下载

# s-pull-scroll

## 参数说明

``` js
{
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
}
```

## 组件vm实例属性，方法说明

``` js

// 分页加载时，当前页数
pullScroll.page

// 当加载完数据后，可以吊以下4个方法去实现视图对应显示逻辑

pullScroll.success(); // 表示加载成功

pullScroll.error(); // 表示加载失败，显示失败布局，page会减1

pullScroll.empty(); // 表示暂无数据

pullScroll.finish(); // 表示全部加载完毕

// 初始化刷新，page从1开始
pullScroll.refresh(); // 如有pullDown，则自动触发下拉刷新，如有pullUp，则自动触发pullUp，page从1开始
```

## 使用方式

#### template
``` html
<s-pull-scroll ref="pullScroll" :pullDown="pullDown" :pullUp="loadData">
  <ul>
    <li
      v-for="(item,index) of list"
      :key="index"
      style="font-size:30rpx;padding:40rpx;text-align:center;border-bottom:1px solid #aaa"
    >{{item}}</li>
  </ul>
</s-pull-scroll>
```

#### script
``` js
import sPullScroll from '@/s-ui/s-pull-scroll';
export default {
  components: {
    sPullScroll
  },
  data () {
    return {
      list: []
    };
  },
  methods: {
    refresh () {
      this.$nextTick(() => {
        this.$refs.pullScroll.refresh();
      });
    },
    pullDown (pullScroll) {
      setTimeout(() => {
        this.loadData(pullScroll);
      }, 200);
    },
    loadData (pullScroll) {
      setTimeout(() => {
        if (pullScroll.page == 1) {
          this.list = [];
        }
        const curList = [];
        for (let i = this.list.length; i < this.list.length + 20; i++) {
          curList.push(i);
        }
        this.list = this.list.concat(curList);
        if (this.list.length > 60) {
          pullScroll.finish();
        } else {
          pullScroll.success();
        }
      }, 500);
    }
  },
  onLoad () {
    this.refresh();
  }
};
```