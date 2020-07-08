<view class="{{['s-pull-scroll',customClass]}}"><scroll-view class="{{['s-pull-scroll-view',(fixed)?'is-fixed':'']}}" style="{{'padding-top:'+(padTop)+';'+('padding-bottom:'+(padBottom)+';')+('top:'+(fixedTop)+';')+('bottom:'+(fixedBottom)+';')}}" id="{{scrollId}}" scroll-top="{{scrollTop}}" scroll-with-animation="{{false}}" scroll-y="{{scrollAble}}" enable-back-to-top="{{true}}" data-event-opts="{{[['scroll',[['scroll',['$event']]]],['touchstart',[['touchstart',['$event']]]],['touchmove',[['touchmove',['$event']]]],['touchend',[['touchend',['$event']]]],['touchcancel',[['touchend',['$event']]]]]}}" bindscroll="__e" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e" bindtouchcancel="__e"><view style="{{'transform:'+(translateY)+';'+('transition:'+(transition)+';')}}"><view class="{{['s-pull-down-wrap',[(isShowDownTip&&isDownSuccess)?'is-success':''],[(isShowDownTip&&isDownError)?'is-error':'']]}}" style="{{'height:'+(downOffset+'rpx')+';'}}"><block qq:if="{{!isShowDownTip}}"><view class="{{['s-pull-loading-icon',(isDownLoading)?'s-pull-loading-rotate':'']}}" style="{{'transform:'+(downRotate)+';'}}"></view></block><view>{{downText}}</view></view><slot></slot><block qq:if="{{isUpLoading}}"><view class="s-pull-up-wrap"><view class="s-pull-loading-icon s-pull-loading-rotate"></view><view>{{upLoadingText}}</view></view></block><block qq:if="{{isEmpty&&showEmpty}}"><block qq:if="{{$slots.empty}}"><slot name="empty"></slot></block><block qq:else><block qq:if="{{emptyText}}"><view class="s-pull-tip-wrap">{{emptyText}}</view></block></block></block><block qq:else><block qq:if="{{isUpError&&showUpError}}"><block qq:if="{{$slots.up-error}}"><slot name="up-error"></slot></block><block qq:else><block qq:if="{{upErrorText}}"><view data-event-opts="{{[['tap',[['onUpErrorClick',['$event']]]]]}}" class="s-pull-tip-wrap" bindtap="__e">{{upErrorText}}</view></block></block></block><block qq:else><block qq:if="{{isUpFinish&&showUpFinish}}"><block qq:if="{{$slots.up-finish}}"><slot name="up-finish"></slot></block><block qq:else><block qq:if="{{upFinishText}}"><view class="s-pull-tip-wrap">{{upFinishText}}</view></block></block></block></block></block></view></scroll-view><block qq:if="{{backTop}}"><view data-event-opts="{{[['tap',[['onBackTop',['$event']]]]]}}" class="{{['s-pull-back-top',(isShowBackTop)?'is-show':'']}}" bindtap="__e"><block qq:if="{{$slots.backtop}}"><slot name="backtop"></slot></block><block qq:else><view class="default-back-top"><image src="{{$root.m0}}" class="_img"></image></view></block></view></block></view>