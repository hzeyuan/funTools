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
				<view class="flex  bg-white padding-tb solids-bottom"  style="height: 100%;" v-for="(i, index) in b.length+1" >
					<view class="flex padding-left align-center" style="width: 50%;">
						<image src="../../static/eur.png" mode="aspectFit" style="width:64rpx;height:64rpx;" ></image>
						<view class="flex justify-center align-center padding-left">
							<text class="text-bold text-xl">{{a[i]}}</text>
							<text class="cuIcon-playfill text-sm text-gray padding-left"></text>
						</view>
					</view>
					<view class="flex flex-direction align-end padding-right" style="width: 50%;" >
						<!-- <input class="text-xxl text-grey " type="text" value="" placeholder="100" style="text-align: end;" />
						<text>{{b[i]}}</text> -->	
						<checkbox-group v-show='' name=""  @click="sendparent" @tap="getIndex(index)" >
							<label>
								<checkbox :value="b[i]" :name="status" :checked="!c[index]"/><text></text>
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
				 
				 status : [
					 {state : true},
					 {state : false},
				 ],
				 name : 'hdh'
				 
				 
			}
		},
		methods: {
			checkboxChange(e){
				this.status.state = !this.status.state
				var values = e.detail.value
				console.log(this.status.state)
				console.log(e.detail.value)	
				
				
				
				
				// var values = e.detail.value;
			 //    for (var i = 0, lenI = this.a.length; i < lenI; ++i) {
				// 				const item = this.a[i]
				// 				if(values.includes(item.value)){
				// 					this.$set(item,'checked',true)
				// 				}else{
				// 					this.$set(item,'checked',false)
				// 				}
							
				// }
			},
			sendparent(){
				this.$emit('parentFunction', this.name)
				console.log('传递')
			},
			confirm(){
				uni.navigateTo({
					url:'/pages/huilv/huilv'
				})
			},
			getIndex(index){
				this.c[index] = !this.c[index]
				console.log(index)
				console.log(this.c)
			}
			
			
			
			
			
			
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
