<template>
	<view class="bg-gray">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">添加货币</block>
		</cu-custom>
		<view class="wrapper">
			<view class="content">
				<view class="padding-left padding-tb-sm">
					<text class="text-gray">所有货币</text>
				</view>
				<view class="flex  bg-white padding-tb solids-bottom"  style="height: 100%;" v-for="(i, index) in b.length+1" :key='index'>
					<view class="flex padding-left align-center" style="width: 50%;">
						<image :src="imgUrl[index]" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
						<view class="flex justify-center align-center padding-left">
							<text class="text-bold text-xl">{{a[index]}}</text>
							<text class="cuIcon-playfill text-sm text-gray padding-left"></text>
						</view>
					</view>
					<view class="flex flex-direction align-end padding-right" style="width: 50%;" >
						<checkbox-group v-show='' name=""   @click="getIndex(index)" >
							<label>
								<checkbox :value="b[i]"  :checked="c[index]"/><text></text>
							</label>
						</checkbox-group>		            
					 </view>
				</view>
					<button class='footer' type="default" @click="confirm">确定</button>
			</view>
		</view>
	</view>
	
</template>
<script>
	export default {
		data(){
			return{
				 a : this.$store.state.CurrencyPick,
				 b : this.$store.state.CurrencyName,
				 c : this.$store.state.flag,
				 index : '',
				 
				 // status : [
					//  {state : true},
					//  {state : false},
				 // ],
				 
				 imgUrl : [],
				 
				 
			}
		},
		methods: {
			checkboxChange(e){
				this.status.state = !this.status.state
				var values = e.detail.value
				console.log(this.status.state)
				console.log(e.detail.value)	
				
				
				
		
			},
			// sendparent(){
			// 	this.$emit('parentFunction', this.name)
			// 	console.log('传递')
			// },
			confirm(){
				console.log('tiaozhuan')
				uni.redirectTo({
					url:'/pages/huilv/huilv'
				})
			},
			getIndex(index){
				this.c[index] = !this.c[index]
				console.log(index)
			},
			image(){
				// console.log(CurrencyName[index])
				for(var i = 0;i<23;i++){
				this.imgUrl.push(`../../static/country/${this.b[i]}.png`) 
				}
			
				
			},			
			
		},
		onLoad() {
			this.image()
			
		}
		
	}
	
</script>
<style scoped>
	.wrapper{
		
		min-height: 100%;
	}	
	.footer{     
	  position : fixed;
	  bottom : 0;
	  left : 0;
	  right : 0;
	  height: 50px;
	  
	}
</style>
