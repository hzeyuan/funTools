<view><cu-custom vue-id="ec1caac8-1" isBack="{{true}}" bgColor="bg-gradual-blue" bind:__l="__l" vue-slots="{{['content']}}"><view slot="content">英文艺术字体</view></cu-custom><view style="{{'display:block;font-family:monospace;white-space:pre;margin:10em 0px;text-align:center;'+('font-size:'+(fontSize+'px;')+';')}}">{{artText}}</view><view class="cu-form-group margin-lr-xl  shadow line-gradual-orange  solids light"><view class="cuIcon-search padding-right _i"></view><input placeholder="例:I Love China" name="input" data-event-opts="{{[['input',[['setLetter',['$event']]]]]}}" bindinput="__e"/><button data-event-opts="{{[['tap',[['copyArtText',['$event']]]]]}}" class="cu-btn line-red shadow margin-right-sm" bindtap="__e">复制</button><button data-event-opts="{{[['tap',[['genArtText',['$event']]]]]}}" class="cu-btn bg-green shadow" bindtap="__e">生成</button></view><view class="padding-sm"><view class="flex flex-wrap justify-around"><button data-event-opts="{{[['tap',[['changefontSize',[-1]]]]]}}" class="margin-sm  basis-sm shadow cu-btn line-red" style="width:25%;" bindtap="__e">缩小</button><button data-event-opts="{{[['tap',[['changefontSize',[1]]]]]}}" class="margin-sm  basis-sm shadow cu-btn line-blue" style="width:25%;" bindtap="__e">放大</button></view></view><picker-view class="mpvue-picker-view" indicator-style="{{indicatorStyle}}" value="{{[0]}}" data-event-opts="{{[['change',[['changeTextStype',['$event']]]]]}}" bindchange="__e"><picker-view-column style="width:100%;height:200px;"><block qq:for="{{styleList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="item">{{"样式:"+item}}</view></block></picker-view-column></picker-view></view>