<view><cu-custom vue-id="80af3bf4-1" isBack="{{true}}" bgColor="bg-gradual-blue" bind:__l="__l" vue-slots="{{['content']}}"><view slot="content">今天吃什么</view></cu-custom><view class="randomPosition" style="position:relative;"><block qq:for="{{foodList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="animation-reverse animation-scale-up" style="{{'position:absolute;'+('top:'+(item.top)+';')+('left:'+(item.left)+';')}}"><label class="text-xxxxl text-bold text-shadow _span">{{item.name}}</label></view></block></view><view class="flex flex-direction justify-center align-center bg" style="{{'height:'+(windowHeight+'px')+';'}}"><view class="text-xxxl padding-bottom-xs">今天吃<label class="text-xxxxl text-bold text-shadow _span">{{food}}</label></view><block qq:if="{{!start}}"><button data-event-opts="{{[['tap',[['startRunFood',['$event']]]]]}}" class="bg-yellow cu-btn text-white round size" bindtap="__e">开始</button></block><block qq:else><button data-event-opts="{{[['tap',[['stopRunFood',['$event']]]]]}}" class="bg-yellow cu-btn text-white round size" bindtap="__e">停</button></block></view></view>