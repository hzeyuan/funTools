<template>
	<view>
		<cu-custom  bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">四次元口袋</block>
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
						{{ item.Function }}
					</button>
				</view>
			</view>
		</scroll-view>
		<view class="cu-bar bg-white solid-bottom margin-top flex-direction">
			<view class="cu-progress radius striped" style="width:85%">
				<view class="bg-red" :style="[{ width:'10%'}]">10%</view>
			</view>
			<view class="action text-sm">
				<text class="cuIcon-title text-blue text-sm"></text><span class="text-sm">这是一个励志成为好工具的app的故事.群:1087851472</span>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	mounted() {

	},
	onLoad(){
		this.ToggleDelay();
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
					Function: '彩虹屁捧杀',
				},
				{
					animation: 'scale-up',
					color: 'orange',
					name:'duiren',
					Function: '怼人不带脏'
				},
				{
					animation: 'scale-down',
					color: 'olive',
					name:'chishenme',
					Function: '今天吃神马'
				},
				{
					animation: 'slide-top',
					color: 'green',
					name:'rmbZhuanHuan',
					Function: '人民币大写转换'
				},
				
				/*{
					animation: 'scale-down',
					color: 'purple',
					name:'sfzQuery',
					Function: '身份证查询'
				},
				{
					name: 'slide-right',
					color: 'blue',
					name:'iphonePlaceFfOwnershipQuery',
					Function: '手机号码归属地'
				},*/
				{
					name: 'shake',
					color: 'mauve',
					name:'goodNickName',
					Function: '炫酷昵称'
				},
				// #ifdef MP-WEIXIN
				{
					name: 'shake',
					color: 'pink',
					name:'screenTwinkle',
					Function: '屏幕闪烁'
				},
				// #endif
				{
					name: 'slide-right',
					color: 'brown',
					name:'bmiWeightIndex',
					Function: 'BMl指数'
				},{
					name: 'slide-right',
					color: 'grey',
					name:'ip2Locations',
					Function: 'ip定位'
				},{
					name: 'slide-right',
					color: 'gray',
					name:'zhinanzhen',
					Function: '指南针'
				},{
					name: 'slide-right',
					color: 'black',
					name:'relationship',
					Function: '亲戚计算器'
				},{
					name: 'slide-right',
					color: 'purple',
					name:'biaozhunsanwei',
					Function: '标准三围'
				},
				{
					name: 'slide-right',
					color: 'purple',
					name:'wannianli',
					Function: '万年历'
				},
				/* {
					animation: 'slide-bottom',
					color: 'cyan',
					Function: '图像文字识别'
				}, 
				{
					animation: 'slide-left',
					color: 'blue',
					Function: '语音文字互转'
				},*/
				{
					animation: 'slide-left',
					color: 'blue',
					name:'24jiemi',
					Function: '24点游戏'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					name:'yingwenyishuziti',
					Function: '英文艺术字体'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					name:'img2char',
					Function: '图片转字符画'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					name:'jianTi2FanTi',
					Function: '翻译'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					name:'img2char',
					Function: '敬请期待!'
				},
				{
					animation: 'slide-left',
					color: 'blue',
					name:'morseCode',
					Function: '摩斯电码'
				},
				
				
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
				//	#ifdef MP-WEIXIN
				case 'screenTwinkle':
					uni.navigateTo({
						url:'/pages/screenTwinkle/screenTwinkle'
					})
					break
				//	#endif 
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
						url:'/pagesComm/wannianli/wannianli'
					})
					break
				case '24jiemi':
					uni.navigateTo({
						url:'/pages/24jiemi/24jiemi'
					})
					break
				case 'yingwenyishuziti':
					uni.navigateTo({
						url:'/pagesComm/yingwenyishuziti/yingwenyishuziti'
					})
					break
				case 'img2char':
					uni.navigateTo({
						url:'/pagesComm/img2char/img2char'
					})
					break
				case 'jianTi2FanTi':
					uni.navigateTo({
						url:'/pages/jianTi2FanTi/jianTi2FanTi'
					})
					break
				case 'morseCode':
					uni.navigateTo({
						url:'/pages/morseCode/morseCode'
					})
					break
			}
			
		}
	}
};
</script>

<style>
@import '../../colorui/animation.css';
image[class*='gif-'] {
	border-radius: 6upx;
	display: block;
}
page {
		padding-top: 50px;
	}
</style>
