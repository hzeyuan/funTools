<template>
	<view class="bg-gray">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue" delta="99">
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
				<image :src="imgUrl[index3]"  mode="aspectFit"  style="width:64rpx;height:64rpx;" ></image>
				<view class="flex justify-center align-center padding-left"><text class="text-bold text-xl" value=''>{{CurrencyName[index3]}}</text></view>
			</view>
			<view class="flex flex-direction align-end padding-right" style="width: 50%;">
				<input class="text-xxl text-grey " type="text"  :value="value1" placeholder="100" @input="inputValue" style="text-align: end;" />
				<text>{{CurrencyPick[index3]}}</text>				
			</view>
		</view>
		<view class="flex padding-left padding-tb-sm">
			<text class=" flex justify-start  text-gray align-center" style="width: 50%;" >货币换算</text>
			<view class="flex justify-end" style="width: 50%;">	
			<button type="default" class="margin-right-sm " style="font-size: x-small;" @tap="exchange" ><text class="text-gray">换算</text></button>
			</view>
			
		</view>
		<!-- 货币换算 -->
		<view class="flex  bg-white padding-tb solids-bottom"  style="height: 100%;" v-if='flag[index]' v-for="(i,index) in CurrencyName.length" :key="index">
			<view class="flex padding-left align-center" style="width: 50%;">
				<image :src="imgUrl[index]"  mode="aspectFit"  style="width:64rpx;height:64rpx;" ></image>
				<view class="flex justify-center align-center padding-left">
					<text class="text-bold text-xl">{{CurrencyName[index]}}</text>
					<text class="cuIcon-playfill text-sm text-gray padding-left"></text>
				</view>
			</view>
			<view class="flex flex-direction align-end padding-right" style="width: 50%;">
				<input class="text-xxl text-grey " type="text" :value="value2[index]" placeholder="100" @input="inputValue2($event, index)" style="text-align: end;" />
				<text>{{CurrencyPick[index]}}</text>
			</view>
			
		</view>	
		<!-- <users  @parentFunction='hello'></users> -->
		<view class="padding-tb flex justify-center align-center bg-white">
			<text class="text-xl" @tap="AddCurreny">+添加货币</text>
		</view>
	<!-- 	<button type="default" @click="test">test</button> -->
	
	
	
			
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
				
				name: 'hdh',
				index1: '0',
				index2: '',
				src: '',
				dst: '',
				value1:'',
				value2:[],
				CurrencyPick:CurrencyPick,
				CurrencyName: [
					'USD',//1
					'EUR',//2
					'HKD',//3
					'JPY',//4
					'GBP',//5
					'AUD',//6
					'CAD',//7
					'THB',//8
					'SGD',//9
					'CHF',//10
					'DKE',//11  0
					'MOP',//12
					'MYR',//13
					'NWD',//14 0
					'NZD',//15 
					'PSO',//16 0
					'RUB',//17
					'SEK',//18 
					'TWD',//19
					'BRL',//20 0
					'KRD',//21
					'SAR',//22 0
					'CNY',//23 
					
				],
				isShow : false,
				flag : this.$store.state.flag,
				//更换基准货币获取的index
				index3 : this.$store.state.index,
				imgUrl : []
				
			}
		},
		methods: {
			
			ChangeCurent(){
				this.$store.state.index = this.index3
				uni.navigateTo({
					url:'/pages/huilv/huilvChange',
				})
				console.log('更换')
			},
			AddCurreny(){				
				uni.navigateTo({
					url:'/pages/huilv/huilvAdd'
				})
				console.log('更换')
			},
			hello(msg){
				console.log('子传父', msg)
			},
			//非基准货币输入
			inputValue2(e, index){
					console.log(index)
					console.log(e.target.value)
					this.flag[this.index3] = true
					this.index3 = index
					this.value1 = e.target.value
			},
			inputValue(e){
				console.log(e.target.value)
				this.value1 = e.target.value
				
			},
			image(){
				for(var i = 0;i<23;i++){
				this.imgUrl.push(`../../static/country/${this.CurrencyName[i]}.png`) 
				}
			
				
			},
			getIndex(index){
				console.log(index)
			},
			
			exchange() {
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
								this.value2 = []
								console.log(res);
								if(res.data.error_code === 0){					
									let r = [];
									let dic = res.data.result[0];
									console.log('dic',dic)
									for(var key in dic){
										// console.log('dic[key]',dic[key])
										// console.log('dic[key]bankConversionPri',dic[key]['bankConversionPri'])	
										r.push(dic[key]['bankConversionPri'])			
									}
									// 人民币为基准转换
									if(this.index3 == 22 ){	
										for(var i = 0;i<22;i++ ){
										this.value2.push((this.value1*1/(r[i]/100)).toFixed(2))	
										}
									}
									//其他币为基准
									else{
									for(var i = 0;i<22;i++ ){
										this.value2.push((this.value1*(r[this.index3]/100)/(r[i]/100)).toFixed(2))
									}
									}console.log(this.value2)
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
			
		},
		onLoad() {
			this.image()
			
		},
		components: {
			
			
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
