<view class="data-v-01439496"><cu-custom vue-id="7869a030-1" isBack="{{true}}" bgColor="bg-gradual-blue" class="data-v-01439496" bind:__l="__l" vue-slots="{{['content']}}"><view slot="content" class="data-v-01439496">标准三围</view></cu-custom><view class="cu-form-group margin-tb-sm  solids-top solids-bottom padding flex align-center data-v-01439496"><view class="title data-v-01439496">您的身高-厘米:</view><input placeholder="请输入您的身高!" name="input" data-event-opts="{{[['input',[['setHeight',['$event']]]]]}}" bindinput="__e" class="data-v-01439496"/><view class="cu-tag line-blue data-v-01439496">cm</view></view><view class="margin-tb-sm padding-lr-xl data-v-01439496"><button data-event-opts="{{[['tap',[['getReuslt',['$event']]]]]}}" class="bg-green data-v-01439496" bindtap="__e">查询</button></view><block qq:if="{{result.length>0}}"><view class="cu-timeline data-v-01439496"><view class="BMireusltTitle data-v-01439496">标准三维-女性</view><block qq:for="{{result}}" qq:for-item="item" qq:for-index="__i0__" qq:key="text"><view class="cu-item cur cuIcon-title data-v-01439496"><view class="content data-v-01439496"><text class="data-v-01439496">{{item.text}}</text>{{item.desc}}</view></view></block></view></block></view>