<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="content">BMI体重指数</block>
		</cu-custom>
		<view class="cu-form-group">
			<view class="title">您的身高-厘米:</view>
			<input placeholder="请输入您的身高!" name="input" @input="setHeight"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">您的体重-公斤:</view>
			<input placeholder="请输入您的体重!" name="input" @input="setWeight"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">您的性别:</view>
			<view style="position: relative;width: 75%;">
				<switch class='switch-sex' @change="SwitchSex" :class="switchSex?'checked':''" :checked="switchSex?true:false"></switch>
			</view>
		</view>
		<view class="padding-xl">
			<button class="cu-btn block bg-green lg" @tap="searchSgWeight">
				<text class="cuIcon-my"></text> 计算结果</button>
		</view>
		<view class="cu-timeline" v-if="resultList.length>0">
			<view class="BMireusltTitle">标准体重计算详情</view>
			<view class="cu-item cur cuIcon-title" v-for="(item,index) in resultList" :key="item.text">
				<view class="content"><text>{{item.text}}</text>{{item.desc}}</view>
			</view>
		</view>
		<!-- <view class="cu-item text-red cuIcon-title">
			<view class="content"><text>危险性处于:</text> 【广州市】快件已到达地球</view>
	   	</view>
	   	<view class="cu-item text-grey cuIcon-title">
			<view class="content"><text>您的理想体重是:</text> 【广州市】快件已到达地球</view>
	   	</view>
	   	<view class="cu-item text-blue cuIcon-title">
			<view class="content"><text>BMI指数:</text> 【月球】快件已到达月球，准备发往地球</view>
	   	</view> -->
	</view>
	</view>

</template>

<script>
	var t = require("../../utils/weight.js");
	export default {
		data() {
			return {
				switchSex: false,
				inputValueWeight: "",
				inputValueHeight: "",
				resultList: [],
			}
		},
		methods: {
			SwitchSex(e) {
				this.switchSex = e.detail.value
			},
			setHeight(e) {
				this.inputValueHeight = e.detail.value
			},
			setWeight(e) {
				this.inputValueWeight = e.detail.value
			},
			searchSgWeight(a) {
				if (this.inputValueHeight == "") {
					uni.showToast({
						title: '请输入身高'
					})
				} else if (this.inputValueWeight == "") {
					uni.showToast({
						title: '请输入体重'
					})
				}
				let sex = this.switchSex == true ? 'W' : 'M'
				this.resultList = t.HealthMsg(this.inputValueWeight, this.inputValueHeight, sex)
				console.log(this.resultList)
			},
			onShareAppMessage(options) {

			}
		}
	}
</script>

<style scoped>
	.content {
		padding: 9rpx;
		-webkit-border-radius: 6rpx;
		border-radius: 6rpx;
		display: block;
		line-height: 1.6;

	}

	.BMireusltTitle {
		text-align: center;
		padding: 30rpx 30rpx;
		font-size: 26rpx;
		color: #888;
		display: flex;

	}
</style>
