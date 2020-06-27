<template>
	<view>
		<scroll-view scroll-y class="scrollPage">
			<view class="UCenter-bg">
				<image src="/static/logo.svg" class="png" mode="widthFix" style="filter: hue-rotate(20deg);"></image>
				<view class="text-xl">
					四次元口袋
					<text class="text-df">v1.0</text>
				</view>
				<view class="margin-top-sm"><text>By:hzy</text></view>
				<image src="https://wngj.oss-cn-shenzhen.aliyuncs.com/wave.gif" mode="scaleToFill" class="gif-wave"></image>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
				<view class="cu-item arrow">
					<navigator class="content" url="/pages/about/log/log" hover-class="none">
						<text class="cuIcon-formfill text-green"></text>
						<text class="text-grey">日志</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<view class="content" @tap="myWechartQrcode">
						<text class="cuIcon-appreciatefill text-red"></text>
						<text class="text-grey">赞赏支持</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="feedback">
						<text class="cuIcon-writefill text-cyan"></text>
						<text class="text-grey">意见反馈</text>
					</button>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visitTotal: 999
		};
	},
	methods: {
		myWechartQrcode() {
			uni.previewImage({
				urls: ['http://hzeyuan.cn/static/WechatIMG926.jpeg'],
				longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success: function(data) {},
					fail: function(err) {
						console.log(err.errMsg);
					}
				}
			});
		}
	}
};
</script>

<style>
</style>
