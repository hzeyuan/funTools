<template>
<view class="">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">更换基准货币</block>
		</cu-custom>
		<!-- 头部 -->
		<view class="flex-direction">
			<view class="padding-tb-sm" style="text-align: center;">
				<text>当前基准货币</text>
			</view>
			<view class="" style="text-align: center;">
				<image src="../../static/eur.png" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
			</view>
			<view class="padding-tb-sm" style="text-align: center;">
				<text>{{name[index1]}} {{cname[index1]}}</text>
			</view>
		</view>
		<!-- 内容 -->
		<view class="bg-gray padding-left padding-tb-sm">
			<text class="text-gray">所有货币</text>
		</view>
		<view class="flex  bg-white padding-tb solids-bottom"  style="height: 100%;" v-for="(i,index) in name.length">
			<view class="flex padding-left align-center" style="width: 50%;">
				<image src="../../static/eur.png" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
				<view class="flex justify-center align-center padding-left">
					<text class="text-bold text-xl">{{name[index]}}</text>
					<text class="cuIcon-playfill text-sm text-gray padding-left"></text>
				</view>
			</view>
			<view class="flex flex-direction align-end padding-right" style="width: 50%;">				
			<checkbox-group @tap="pick(index)">
				<label>
					<checkbox  name="" :checked="flag[index]"  />
				</label>
			</checkbox-group>
			
			</view>		
		</view>	
		
</view>
</template>
<script>

export default {
	data(){
		return {
			name : this.$store.state.CurrencyName,
			cname : this.$store.state.CurrencyPick,
			index1 : '22',
			flag : this.$store.state.flag2
		}
	},
	methods:{
		pick(index){
			this.index1 = index
			this.$store.state.index = index
			console.log(this.$store.state.index)
			console.log(this.flag)
			uni.navigateTo({
				url:'/pages/huilv/huilv'
			})
		}
	},
	onLoad() {
		console.log(this.$store.state.index)
	}
 
}
</script>
