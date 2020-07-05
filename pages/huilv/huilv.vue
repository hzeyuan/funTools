<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">汇率转换</block>
		</cu-custom>
		<uni-view class="flex">
			<uni-view class="flex-sub  padding-sm margin-sm radius" >
				<input type="text" name="" placeholder="输入" value="" @input="exchange">
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
		</uni-view>
		<uni-view class="flex">
			<uni-view class="flex-sub  padding-sm margin-sm radius">
				<input type="text" name="" id="" :value="value2" placeholder="输出">
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
		</uni-view>						
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
				];
				
				
			return {
				placeholderA: '输入',
				index1: '0',
				index2: '0',
				src: '',
				dst: '',
				value1:'',
				value2:'',
				pri:{},
				CurrencyPick:CurrencyPick,
				CurrencyRate: [
					'USD',
					'EUR',
					'HKD',
					'JPY',
					'GBP',
					'ASP',
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
					
				],
					
				
			}
		},
		methods: {
			PickerChange1(e) {
				console.log(e.detail.value)
				this.index1 = e.detail.value; 
			},
			PickerChange2(e) {
				console.log(e.detail.value)
				this.index2 = e.detail.value; 
			},
			exchange(e) {
				let src = this.CurrencyRate[this.index1];
				let dst = this.CurrencyRate[this.index2];
				this.value1 = e.detail.value
				console.log(this.value1);
				console.log(src);
				console.log(dst);
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
									
									console.log(r[0][0]);
									console.log(r);
									this.value2 = this.value1*(r[this.index1][0]/100)/(r[this.index2][0]/100)
									console.log(this.value1*(r[0][1]/100))
									console.log(this.index1)
									console.log(this.index2)
									console.log(this.value1)
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
</style>
