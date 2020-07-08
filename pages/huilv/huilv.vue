<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">汇率转换</block>
		</cu-custom>
		<view class="flex justify-around ">
		<view class="flex justify-start padding-left" style="width: 50%;">基准货币</view>			
		<view class="flex justify-end padding-right" style="width: 50%;">更换</view>	
		</view>
		<view class="flex justify-around" style="height: 50px;">
			<view class="flex justify-center align-center  justify-start">
				<image src="" mode="" style="width: 50px;height: 50px;"></image>		
				<text class="text-bold text-xl ">EUR</text>
			</view>
			<view class="flex flex-direction justify-end ">
				<text>100</text>
				<text>欧元</text>
			</view>
		</view>
		<!-- <uni-view class="flex">
			<uni-view class="flex-sub  padding-sm margin-sm radius" >
				<input type="text" name="" placeholder="基准货币" value="" @input="exchange">
			</uni-view>
			<uni-view class="flex-sub  padding-sm margin-sm radius  " style='text-align: left;'>
				<view class="picker" style="width: 80%;display: inline-block;margin-left: 10rpx;">
					<picker @change="PickerChange1" value="index1" :range="CurrencyPick">
						<view style="width:50%;color: #888888;">{{CurrencyPick[index1]}}</view>
					</picker>
				</view>
					<uni-view class="cu-item " style="width:10rpx;display: inline-block;">
						<uni-text  class="lg text-gray cuIcon-unfold" style=''><span></span></uni-text>
					</uni-view>
			</uni-view>
		</uni-view> -->
		<!-- <hr> -->
		<!-- <uni-view class="flex">
			<uni-view class="flex-sub  padding-sm margin-sm radius">
				<input type="text" name="" id="" :value="value2" placeholder="货币换算">
			</uni-view>
			<uni-view class="flex-sub  padding-sm margin-sm radius" style='text-align: left;'>
				<view class="picker" style="width: 80%;display: inline-block;margin-left: 10rpx;">
					<picker @change="PickerChange2" value="index2" :range="CurrencyPick">
						<view style="width:50%;color: #888888;">{{CurrencyPick[index2]}}</view>
					</picker>
				</view>
				<uni-view class="cu-item " style="width:10rpx;display: inline-block;">
					<uni-text  class="lg text-gray cuIcon-unfold" style=''><span></span></uni-text>
				</uni-view>
			</uni-view>
		</uni-view> -->
		<view class="add">
			<text>+ 添加货币</text>
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
				// CurrencyRate: [
				// 	'USD',
				// 	'EUR',
				// 	'HKD',
				// 	'JPY',
				// 	'GBP',
				// 	'ASP',
				// 	'SPD',
				// 	'SFC',
				// 	'DKE',
				// 	'PTA',
				// 	'RGT',
				// 	'NKE',
				// 	'NZD',
				// 	'PSO',
				// 	'RBE',
				// 	'SKA',
				// 	'NTD',
				// 	'BRL',
				// 	'WON',
				// 	'SAR',
					
				// ],
					
				
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
							url: 'http://web.juhe.cn:8080/finance/exchange/rmbquot?key=ccb02207097d84ac2bfdd45f73233184',
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
