<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<block slot="content">标准三围</block>
		</cu-custom>
		<view class="cu-form-group margin-tb-sm  solids-top solids-bottom padding flex align-center">
			<view class="title">您的身高-厘米:</view>
			<input placeholder="请输入您的身高!" name="input" @input="setHeight"></input>
			<view class="cu-tag line-blue">
				cm
			</view>
		</view>
		<view class="margin-tb-sm padding-lr-xl"><button class="bg-green" @tap="getReuslt">查询</button></view>
		<view class="cu-timeline" v-if="result.length>0">
				<view class="BMireusltTitle">标准三维-女性</view>
				<view class="cu-item cur cuIcon-title" v-for="item in result" :key="item.text">
					<view class="content"><text>{{item.text}}</text>{{item.desc}}</view>
				</view>
		</view>
	</view>
</template>

<script>
	var sanwei = require("../../utils/sanwei.js");
	export default {
		data() {
			return {
				height:'',
				result:[]
			}
		},
		methods: {
			setHeight(e){
				this.height = e.detail.value
			},
			getReuslt(){
				this.result=sanwei.SanweiResult(this.height)
			}
		}
	}
</script>

<style scoped>

</style>
