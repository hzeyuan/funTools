<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="content">2048</block>
		</cu-custom>
		<web-view :webview-styles="webviewStyles" src="https://wngj.hzeyuan.cn/drugBeauty" allow="autoplay"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
