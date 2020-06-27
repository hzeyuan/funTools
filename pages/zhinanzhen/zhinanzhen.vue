<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">指南针</block>
		</cu-custom>
		<view class="container">
			<view class="text">
				<text>{{ direction }}</text>
				<text>{{ angle }}°</text>
			</view>
			<view class="picZnz"><image src="https://wngj.oss-accelerate.aliyuncs.com/znz.jpg" :style="[{ transform: 'rotate(' + rotate + 'deg);' }]"></image></view>
		</view>
	</view>
</template>

<script>
export default {
	onLoad(){
		        function t(t) {
		            return 15 <= t && t <= 75 ? "东北方" : 75 < t && t < 105 ? "正东方" : 105 <= t && t <= 165 ? "东南方" : 165 < t && t < 195 ? "正南方" : 195 <= t && t <= 255 ? "西南方" : 255 < t && t < 285 ? "正西方" : 285 <= t && t <= 345 ? "西北方" : "正北方";
		        }

		        uni.onCompassChange((res)=> {
		            var o = res.direction.toFixed(2), a = res.direction.toFixed(0);
					// console.log(o)
		            this.angle = o
					this.rotate = 360-a
					this.direction = t(a)
					console.log(a)
					console.log("zghuan"+this.rotate)
		        });
	},
	onUnload() {
		uni.stopCompass({
			success: () => {
				console.log('stop')
			}
		})
	},
	data() {
		return {
			direction: "--",
			angle: "--",
			rotate: ""
		}
	},
	methods: {

	}
}
</script>

<style scoped>
.container {
	height: 100%;
	background-color: #fff;
}

.text {
	text-align: center;
	color: #f7982a;
	font-size: 56rpx;
	padding-top: 50rpx;
}

.text text {
	display: block;
}

.picZnz {
	height: 650rpx;
	width: 650rpx;
	position: absolute;
	top: 50%;
	left: 50rpx;
	margin-top: -200rpx;
}

.picZnz image {
	width: 100%;
	height: 100%;
}
</style>
