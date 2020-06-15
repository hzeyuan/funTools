<template>
	<view>
		<cu-custom  :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">真·万能工具</block>
		</cu-custom>
		<scroll-view scroll-y class="scrollPage">
			<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索工具" confirm-type="search"></input>
				</view>
			</view>
			<view class="padding-sm">
				<view class="flex flex-wrap justify-around">
					<button @tap="useFunction(item.name)"
						class="margin-sm  basis-sm shadow cu-btn"
						:class="['bg-' + item.color, toggleDelay ? 'animation-slide-bottom' : '']"
						:style="[{ animationDelay: (index + 1) * 0.1 + 's' }]"
						style="width: 25%;"
						v-for="(item, index) in list"
						:key="index"
					>
						{{ item.function }}
					</button>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
export default {
	mounted() {
		this.ToggleDelay();
		console.log("ceshi")
		let r = this.utils.rmbDaXieZhuanHuan(10120.521)
		console.log(r)
	},
	data() {
		return {
			CustomBar: this.CustomBar,
			animation: '',
			list: [
				{
					animation: 'fade',
					color: 'red',
					name:'chp',
					function: '彩虹屁捧杀',
				},
				{
					animation: 'scale-up',
					color: 'orange',
					name:'duiren',
					function: '怼人不带脏'
				},
				{
					animation: 'scale-down',
					color: 'olive',
					name:'chishenme',
					function: '今天吃神马'
				},
				{
					animation: 'slide-top',
					color: 'green',
					name:'rmbZhuanHuan',
					function: '人民币大写转换'
				},
				
				{
					animation: 'scale-down',
					color: 'purple',
					name:'sfzQuery',
					function: '身份证查询'
				},
				{
					name: 'slide-right',
					color: 'blue',
					name:'iphonePlaceFfOwnershipQuery',
					function: '手机号码归属地'
				},
				{
					name: 'shake',
					color: 'mauve',
					name:'goodNickName',
					function: '炫酷昵称'
				},
				{
					name: 'shake',
					color: 'pink',
					name:'screenTwinkle',
					function: '屏幕闪烁'
				},
				{
					name: 'slide-right',
					color: 'brown',
					name:'bmiWeightIndex',
					function: 'BMl指数'
				},{
					name: 'slide-right',
					color: 'grey',
					name:'ip2Locations',
					function: 'ip定位'
				},{
					name: 'slide-right',
					color: 'gray',
					name:'zhinanzhen',
					function: '指南针'
				},{
					name: 'slide-right',
					color: 'black',
					name:'relationship',
					function: '亲戚计算器'
				},{
					name: 'slide-right',
					color: 'purple',
					name:'biaozhunsanwei',
					function: '标准三围'
				},
				{
					name: 'slide-right',
					color: 'purple',
					name:'wannianli',
					function: '万年历'
				},
				{
					animation: 'slide-bottom',
					color: 'cyan',
					function: '图像文字识别'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					function: '语音文字互转'
				}
				
			],
			toggleDelay: false
		};
	},
	methods: {
		Toggle(e) {
			var anmiaton = e.currentTarget.dataset.class;
			this.animation = anmiaton;
			setTimeout(() => {
				this.animation = '';
			}, 1000);
		},
		ToggleDelay() {
			this.toggleDelay = true;
			/*setTimeout(() => {
				this.toggleDelay = false;
			}, 1000);*/
		},
		useFunction(name){
			console.log("dsa"+name)
			switch(name){
				case 'chp':
					console.log("12312312312")
					wx.navigateToMiniProgram({
					  appId: 'wx23c230a07932c6ef',
					  path: 'pages/home/home',
					  envVersion: 'develop',
					  success(res) {
					    // 打开成功
						console.log("成功打开chp")
					  }
					})
					break
				case 'duiren':
					console.log('duiren')
					uni.navigateTo({
				    url: '/pages/duiren/duiren'
					})
					break
				case 'chishenme':
					uni.navigateTo({
					url: '/pages/chishenme/chishenme'
					})
					break
				case 'rmbZhuanHuan':
					uni.navigateTo({
					url: '/pages/rmbZhuanHuan/rmbZhuanHuan'
					})
					break
				case 'sfzQuery':
					uni.navigateTo({
					url: '/pages/sfzQuery/sfzQuery'
					})
					break
					
				case 'iphonePlaceFfOwnershipQuery':
					uni.navigateTo({
					url: '/pages/iphonePlaceFfOwnershipQuery/iphonePlaceFfOwnershipQuery'
					})
					break
				case 'goodNickName':
					uni.navigateTo({
					url: '/pages/goodNickName/goodNickName'
					})
					break
				case 'screenTwinkle':
					uni.navigateTo({
						url:'/pages/screenTwinkle/screenTwinkle'
					})
					break
				case 'bmiWeightIndex':
					uni.navigateTo({
						url:'/pages/bmiWeightIndex/bmiWeightIndex'
					})
					break
				case 'ip2Locations':
					uni.navigateTo({
						url:'/pages/ip2Locations/ip2Locations'
					})
					break
				case 'zhinanzhen':
					uni.navigateTo({
						url:'/pages/zhinanzhen/zhinanzhen'
					})
					break
				case 'relationship':
					uni.navigateTo({
						url:'/pages/relationship/relationship'
					})
					break
				case 'biaozhunsanwei':
					uni.navigateTo({
						url:'/pages/biaozhunsanwei/biaozhunsanwei'
					})
					break
				case 'wannianli':
					uni.navigateTo({
						url:'/pages/wannianli/wannianli'
					})
					break
			}
			
		}
	}
};
</script>

<style>
@import '../../colorui/animation.css'
image[class*='gif-'] {
	border-radius: 6upx;
	display: block;
}
page {
		padding-top: 50px;
	}
</style>
