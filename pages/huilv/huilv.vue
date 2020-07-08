<template>
	<view class="bg-gray">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">汇率转换</block>
		</cu-custom>
		<view class="flex bg-white ">
			<view class="flex  justify-start padding-left padding-top-xs" style="width: 50%;">
				<text class="text-gray">基准货币</text>
			</view>
			<view class="flex justify-end align-center padding-right-xs padding-top-xs" style="width: 50%;">
				<text class="text-gray" @tap="ChangeCurent">更换</text>
				<text class="cuIcon-playfill text-sm text-gray "></text>
			</view>
		</view>
		
		<view class="flex  bg-white padding-tb" style="height: 100%;">	
			<view class="flex padding-left align-center" style="width: 50%;">
				<image src="../../static/eur.png" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
				<view class="flex justify-center align-center padding-left"><text class="text-bold text-xl" value=''>{{CurrencyName[index1]}}</text></view>
			</view>
			<view class="flex flex-direction align-end padding-right" style="width: 50%;">
				<input class="text-xxl text-grey " type="text" :value='value1' placeholder="100" style="text-align: end;" />
				<text>{{CurrencyPick[index1]}}</text>
			</view>
		</view>
		<view class="padding-left padding-tb-sm">
			<text class="text-gray">货币换算</text>
		</view>
		
		<view class="flex  bg-white padding-tb solids-bottom" v-for="i in 5" style="height: 100%;">
			<view class="flex padding-left align-center" style="width: 50%;">
				<image src="../../static/eur.png" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
				<view class="flex justify-center align-center padding-left">
					<text class="text-bold text-xl">{{CurrencyName[index2]}}</text>
					<text class="cuIcon-playfill text-sm text-gray padding-left"></text>
				</view>
			</view>
			<view class="flex flex-direction align-end padding-right" style="width: 50%;">
				<input class="text-xxl text-grey " type="text" :value="value2" placeholder="100" style="text-align: end;" />
				<text>{{CurrencyPick[index2]}}</text>
			</view>
		</view>
		<view class="padding-tb flex justify-center align-center bg-white">
			<text class="text-xl" @tap="AddCurreny">+添加货币</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			const CurrencyPick = [
				'美元',
				'欧元',
				'港币',
				'日元',
				'英镑',
				'澳大利元',
				'加拿大元',
				'泰国铢',
				'新加坡元',
				'瑞士法郎',
				'丹麦克朗',
				'澳门元',
				'马来西亚林吉特',
				'挪威克朗',
				'新西兰元',
				'菲律宾比索',
				'卢布',
				'瑞典克朗',
				'新台币',
				'巴西雷亚尔',
				'韩国元',
				'南非兰特',
				'人民币'
				];
				
				
			return {
				index1: '0',
				index2: '22',
				src: '',
				dst: '',
				value1:'',
				value2:'',
				pri:{},
				CurrencyPick:CurrencyPick,
				CurrencyName: [
					'USD',
					'EUR',
					'HKD',
					'JPY',
					'GBP',
					'ASP',
					'CND',
					'THB',
					'SPD',
					'SFC',
					'DKE',
					'PTA',
					'RGT',
					'NKE',
					'NZD',
					'PSO',
					'RBE',
					'SKA',
					'NTD',
					'BRL',
					'WON',
					'SAR',
					'RMB',
					
				],
					
				
			}
		},
		methods: {
			PickerChange1(e) {
				// console.log(e.detail.value)
				this.index1 = e.detail.value; 
			},
			PickerChange2(e) {
				// console.log(e.detail.value)
				this.index2 = e.detail.value; 
			},
			ChangeCurent(){
				uni.navigateTo({
					url:'/pages/huilv/huilvChange'
				})
				console.log('更换')
			},
			AddCurreny(){
				uni.navigateTo({
					url:'/pages/huilv/huilvAdd'
				})
				console.log('更换')
			},
			
			exchange(e) {
				// let src = this.CurrencyRate[this.index1];
				// let dst = this.CurrencyRate[this.index2];
				this.value1 = e.detail.value
				console.log(this.value1);
			
				uni.showLoading({
					title: "兑换中",
					success: () => {
						uni.request({
							method: 'POST',
							header: {
								'Content-Type' : 'application/json'
							},
							// url: 'http://web.juhe.cn:8080/finance/exchange/rmbquot?key=ccb02207097d84ac2bfdd45f73233184',
							data:{
								
							},
							success: res => {
								console.log(res);
								
								if(res.data.error_code === 0){					
									let r = [];
									let dic = res.data.result[0];
									for(var key in dic){				
									r.push(Object.values(dic[key]))			
									}									
									// console.log(r[0][0]);
									// console.log(r);
									// == 等于 ===严格等于
									if(this.index1 == 22 && this.index2 !== 22){										
										this.value2 = this.value1*1/(r[this.index2][0]/100)
									}else if(this.index2 == 22 && this.index1 !==22){									
										this.value2 = this.value1*(r[this.index1][0]/100)
									}
									else{
									this.value2 = this.value1*(r[this.index1][0]/100)/(r[this.index2][0]/100)
									}
									// console.log(this.index1)
									// console.log(this.index2)
									// console.log(this.value1)
								}
							},
							fail: err => {
								console.log('出错');
							}
						})
					},
					complete: () => {
						console.log('complete');
						uni.hideLoading()
					}
					
				})
			},	
			
		}
	}
</script>

<style scoped>
	.flex-sub {
		
		border-radius: 10px;
		border-style: solid; 
		border-width: 1upx;
		border-color: #888888;
		
	}
	.cu-item{
			margin-right: 10rpx;
	}
	.text-title {
		color: #333333;
		margin-top: 10upx;
		margin-left: 10upx;
		display: inline-block;
	}
	.text-right {

		color: #333333;
		display: inline-block;
		text-align: right;
	}
	.add {
		text-align: center;
		
	}
</style>
