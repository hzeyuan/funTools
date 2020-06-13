<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">ip定位</block>
		</cu-custom>
		<view class="cu-form-group">
			<view class="title">本机ip:</view>
			<view class="localIP"><span>{{localIp}}</span></view>
			<button class='cu-btn line-red shadow' @tap="copyText">复制</button>
		</view>
		<view class="cu-form-group">
			<view class="title">ip地址:</view>
			<input placeholder="请输入ip" name="input" @input="setIp"></input>
			<button class='cu-btn bg-green shadow' @tap="searchIPLocations">定位</button>
		</view>
		<view class="cu-dialog" style="width: 100%;" v-if="locations">
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item">
					<view class="content">
						<text>省份: {{locations.province}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text>城市: {{locations.city}}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text>adcode: {{locations.adcode}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			uniCloud.callFunction({
			    name: 'ip2Locations',
				data:{'ip':'127.0.0.1'}
			  })
			  .then(res => {
					console.log(res.result)
					this.localIp = res.result
			  });
		},
		data() {
			return {
				localIp:'',
				ip:'',
				locations:'',
			}
		},
		methods: {
			copyText(){
				uni.setClipboardData({
					data: this.localIp
				});
			},
			setIp(e){
				this.ip = e.detail.value
			},
			searchIPLocations(){
				if(this.ip==''){
					uni.showToast({
						title:'请输入ip!'
					})
					return 
				}
				uniCloud.callFunction({
				    name: 'ip2Locations',
					data:{'ip':this.ip}
				  })
				  .then(res => {
					  console.log('jieguo ')
						console.log(res.result)
						this.locations = res.result
				  });
			}
		}
	}
</script>

<style scoped>
.localIP{
	width: 65%;
	font-size: 36rpx;
}
</style>
