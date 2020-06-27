<template>
	<view>
		<cu-custom  :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">怼人不带脏字</block>
		</cu-custom>
		<view class="container solids shadow">
			<view class="main">
				<text >{{duirenInstance}}</text>
			</view>
		</view>
		<view class="container flex-direction">
			<button type="warn" class="margin-tb" plain @tap="copy">复制</button>
			<button type="primary" @tap="duiren">下一条</button>
		</view>
		
			
		</view>
	
</template>

<script>
export default {
	onLoad(){
		this.loadDuirenData()
	},
	onShow() {
	},
	data() {
		return {
			duirenInstance :'',
			duirenInstanceList:[]
		};
	},
	methods: {
		copy(){
			uni.setClipboardData({
							data: this.duirenInstance
						});
		},
		duiren(){
			let number = Math.ceil(Math.random()*this.duirenInstanceList.length-1)
			this.duirenInstance = this.duirenInstanceList[number]
		},
		loadDuirenData(){
			
			uniCloud.callFunction({
			    name: 'duiren',
			  })
			  .then(res => {
					console.log(res)
				   this.duirenInstanceList = res.result
				   this.duiren()
			  });
		}
	}
};
</script>

<style scoped>
	.container {
	    height: 530rpx;
	    display: flex;
	    align-items: center;
	    justify-content: center;
		margin: 4%;
	}
	.main {
	    margin: 0rpx 40rpx 0rpx 40rpx;
	    padding-bottom: 20rpx;
	    border-bottom: 1rpx solid rgba(0,0,0,0.3);
	}
	
	.main text {
	    flex: 1;
	    color: #616161;
	    word-break: break-all;
	}
	
	
</style>
