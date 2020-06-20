<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<block slot="content">24点解密游戏</block>
		</cu-custom>
		<view class="margin bg-gradual-blue light text-center">
			<view class="solid-bottom padding">
				<text>数字A,B,C,D如何使用(+,-,*,/)计算得到24？</text>
			</view>
			
		</view>
		<view class="grid col-4  padding-sm">
			<view class="padding-sm">
				<view class="padding radius text-center light line-blue shadow">
					<view class="text-xl"><input type="text" @input="setX1" placeholder="A"></view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="padding radius text-center light line-blue shadow">
					<view class="text-xl"><input type="text" @input="setX2" placeholder="B"></view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="padding radius text-center light line-blue shadow">
					<view class="text-xl"><input type="text" @input="setX3" placeholder="C"></view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="padding radius text-center light line-blue shadow">
					<view class="text-xl"><input type="text" @input="setX4" placeholder="D"></view>
				</view>
			</view>
		</view>
		<view class="margin-tb-sm padding-lr-xl"><button class="bg-gradual-blue" @tap="getReuslt">计算！</button></view>
		<view class="cu-list menu card-menu margin-top">
			<view class="cu-item menuArrow " v-for="(item,index) in reusltList" :key="index">
				<view class="content ">
					<text class="text-orange padding-lr">{{index+1}}.</text>
					<text class="text-grey">24={{item}}</text>
				</view>
				<view class="action">
					<button class="cu-btn line-red shadow" @tap="copyText(item)">复制</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x1:'',
				x2:'',
				x3:'',
				x4:'',
				reusltList:[],
			}
		},
		methods: {
			setX1(e){
				this.x1 = e.detail.value
			},
			setX2(e){
				this.x2 = e.detail.value
			},
			setX3(e){
				this.x3 = e.detail.value
			},
			setX4(e){
				this.x4 = e.detail.value
			},
			getReuslt(){
				var game24 = require("../../utils/game24.js");
				this.reusltList = game24.game24([this.x1,this.x2,this.x3,this.x4])		
			},
			copyText(text) {
				uni.setClipboardData({
					data: text
				});
			},
		}
	}
</script>

<style scoped>
.category{

    width:18%;
	line-height: 18%;
    padding:9% 0 9% 0;

}
</style>
