<template>
	<view style="width: 100%;">
		<!-- 		<cu-custom :isBack="true" bgColor="bg-gradual-green" >
			<block slot="content">屏幕闪烁</block>
		</cu-custom> -->
		<view :class="bgColor == 1 ? 'bg-white' : 'bg-' + styleBgList[StyleIdx]" :style="[{ height: windowHeight + CustomBar + 'px',width:windowWidth+'px'}]">
			<view @click="startOrStopGame" class="text-white flex  justify-center align-center" style="height: 100%;width: 100%;font-size: 60rpx;">
				<h1 class="animation-reverse " :class="[animation!=''?animation:'']">点击屏幕开始/停止</h1>
			</view>
		</view>
		<!-- <cover-view bindtap="onShowMenu" class="light {{!ShowMenu?'':StyleList[StyleIdx]+'-stop'}}" style="opacity:{{ShowCamera?0.4:1}}; animation: {{!ShowMenu?StyleList[StyleIdx]+' '+SpeedList[SpeedIdx]+'s infinite':''}};"></cover-view> -->
		<!-- <view>·1312312312</view> -->
		<!-- style="animation: {{ShowMenu?'rise':'fall'}} 0.5s;" -->
		<cover-view  class="menu flex" style="animation-fill-mode: forwards;">
			
			<block v-if="switchBgMenuColor[StyleIdx] == 1">
				<cover-view @tap="onChangeStyle" class="item">
					<cover-view class="value">{{ StyleIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/style.png"></cover-image>
					<cover-view class="title">样式</cover-view>
				</cover-view>
				<cover-view @tap="onChangeSpeed" class="item">
					<cover-view class="value">{{ SpeedIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/speed.png"></cover-image>
					<cover-view class="title">速度</cover-view>
				</cover-view>
				<cover-view @tap="playMusic" class="item">
					<cover-view class="value" v-if="MusicIdx !== -1">{{ MusicIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/music.png"></cover-image>
					<cover-view class="title">音乐</cover-view>
				</cover-view>
			</block>
			<block v-else>
				<cover-view @tap="onChangeStyle" class="item">
					<cover-view class="value-black">{{ StyleIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/style_black.png"></cover-image>
					<cover-view class="title-black">样式</cover-view>
				</cover-view>
				<cover-view @tap="onChangeSpeed" class="item">
					<cover-view class="value-black">{{ SpeedIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/speed_black.png"></cover-image>
					<cover-view class="title-black">速度</cover-view>
				</cover-view>
				<cover-view @tap="playMusic" class="item">
					<cover-view class="value-black" v-if="MusicIdx !== -1">{{ MusicIdx + 1 }}</cover-view>
					<cover-image class="style" src="../../static/music_black.png"></cover-image>
					<cover-view class="title-black">音乐</cover-view>
				</cover-view>
			</block>
		</cover-view>
		<!-- <view class="xf" v-if="ShowMenu">
		    <navigator class="xf2" openType="redirect" style="background:#eef9bf" url="/pages/home/home">首页</navigator>
		    <button class="xf2" openType="share" style="background:#a7e9af">分享</button>
		</view> -->
	</view>
</template>

<script>
export default {
	onLoad() {
		console.log(this.windowHeight)
		console.log(this.windowWidth)
		setTimeout(()=>{
			this.animation ='animation-fade'
			console.log('quchu')
		}, 4000)
		this.startOrStopGame()
	},
	onUnload() {
		if(this.bgIntervalId){
			clearInterval(this.bgIntervalId)
		}
	},
	data() {
		return {
			innerAudioContext: uni.createInnerAudioContext(),
			animation:'',
			styleBgList: ['black', 'yellow', 'red'], //样式颜色
			speedList: [300, 250, 200, 150, 100, 80, 50], //速度列表
			windowHeight: this.windowHeight,
			CustomBar: this.CustomBar,
			windowWidth:this.windowWidth,
			switchStartOrStop: 0, //闪烁动画开关
			switchBgMenuColor: [0, 1, 1], // 菜单颜色切换
			showBgMenu: 1, // 显示菜单
			bgColor: 1, // 1:为白色，0:为其他颜色。
			bgIntervalId: '',
			SpeedIdx: 0,
			StyleIdx: 0,
			MusicIdx: -1
		};
	},
	methods: {
		startOrStopGame() {
			//开始闪烁游戏
			this.switchStartOrStop = !this.switchStartOrStop;
			if (this.switchStartOrStop == 1) {
				this.showBgMenu = 0; //隐藏菜单
				this.startInterval(this.speedList[this.SpeedIdx]);
			} else if (this.switchStartOrStop == 0) {
				this.bgColor =  this.StyleIdx==0?1:0//如果背景是黑色就改成白色
				// if(this.StyleIdx==0){ 
				// 	this.bgColor =1
				// }else{
				// 	this.bgColor = 0; //背景颜色
				// }
				this.showBgMenu = 1; //显示菜单
				
				this.stopInterval();
			}
		},
		startInterval(speed) { //开启定时器
			this.bgIntervalId = setInterval(() => {
				this.bgColor = !this.bgColor;
				this.switchStartOrStop =1
				//console.log(this.bgColor);
			}, this.speedList[this.SpeedIdx]);
		},
		stopInterval() {
			this.animation ='animation-fade' //隐藏字体
			if (this.bgIntervalId) {
				this.switchStartOrStop = 0
				clearInterval(this.bgIntervalId);
			}
		},
		playMusic() {
			//开始播放音乐
			this.MusicIdx += 1;
			this.innerAudioContext.autoplay = true;
			this.innerAudioContext.loop = true;
			this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
			this.innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			this.innerAudioContext.onError(res => {
				console.log(res.errMsg);
				console.log(res.errCode);
			});
		},
		stopMusic() {
			// 停止音乐
			this.innerAudioContext.stop();
		},
		onChangeStyle() {
			// 修改背景样式
			// this.stopInterval();
			this.StyleIdx = (this.StyleIdx + 1) % this.styleBgList.length;
			this.bgColor =  this.StyleIdx==0?1:0//如果背景是黑色就改成白色
		},
		onChangeSpeed() {
			//修改速度
			this.bgColor = 0;
			this.SpeedIdx = (this.SpeedIdx + 1) % this.speedList.length;
			this.stopInterval();
			this.startInterval(this.SpeedIdx);
		},
		onShareAppMessage(options){
			
		}
	}
};
</script>

<style scoped>
@import '../../colorui/animation.css';
.menu {
	margin: 60rpx 40rpx;
	position: fixed;
	width: 670rpx;
	z-index: 999;
	bottom: 0;
	left: 0;
}
.menu .item {
	margin: 0 auto;
	position: relative;
}

.menu .value {
	width: 24rpx;
	height: 24rpx;
	border-radius: 100%;
	border: 2rpx #fff solid;
	text-align: center;
	color: #fff;
	font-size: 24rpx;
	font-weight: bold;
	position: absolute;
	top: 0;
	right: 0;
}

.menu .value-black {
	width: 24rpx;
	height: 24rpx;
	border-radius: 100%;
	border: 2rpx #000 solid;
	text-align: center;
	color: #000;
	font-size: 24rpx;
	font-weight: bold;
	position: absolute;
	top: 0;
	right: 0;
}

.menu .title {
	text-align: center;
	width: 90rpx;
	height: 34rpx;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 1);
	line-height: 34rpx;
}

.menu .title-black {
	text-align: center;
	width: 90rpx;
	height: 34rpx;
	font-size: 24rpx;
	color: rgba(0, 0, 0, 1);
	line-height: 34rpx;
}

.menu cover-image {
	padding: 10rpx;
	width: 70rpx;
	height: 60rpx;
}
</style>
