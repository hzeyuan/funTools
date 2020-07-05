<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">免费公共图床</block>
		</cu-custom>
		<!-- <view class="flex justify-center align-center text-xxl">已经托管100图片啦</view> -->
		<view class="flex justify-center align-center flex-direction" :style="[{height:windowHeight*0.15+'px'}]">
			<button class="shadow cu-btn bg-gradual-orange" @tap="cI">开始上传</button>
			<view class="cu-progress margin-tb-sm  radius striped" style="width:90%">
				<view class="bg-red" :style="[{ width:percent+'%'}]">{{percent+'%'}}</view>
			</view>
		</view>
		<view class="flex justify-center align-center" >
			<image :style="[{height:windowHeight*0.35+'px'}]" :src="img"
			 mode="aspectFit"></image>
		</view>
		<view class="cu-form-group">
			<view class="padding-right-xs">
				<view class='cu-tag line-blue'>原图</view>
			</view>
			<input placeholder="..." name="input" :value="img"></input>
			<button class='cu-btn bg-green shadow' @tap="utils.copyText(img)">复制</button>
		</view>
		<view class="cu-form-group">
			<view class="padding-right-xs">
				<view class='cu-tag line-blue'>原图HTML</view>
			</view>
			<input placeholder="..." name="input" :value="imgHTML"></input>
			<button class='cu-btn bg-green shadow' @tap="utils.copyText(imgHTML)">复制</button>
		</view>
		<view class="cu-form-group">
			<view class="padding-right-xs">
				<view class='cu-tag line-blue'>原图Markdown</view>
			</view>
			<input placeholder="..." name="input" :value="imgMarkDown"></input>
			<button class='cu-btn bg-green shadow' @tap="utils.copyText(imgMarkDown)">复制</button>
		</view>
		<view class="cu-form-group ">
			<view class="padding-right-xs">
				<view class='cu-tag line-orange'>缩略图</view>
			</view>
			<input placeholder="..." name="input" :value="imgTh"></input>
			<button class='cu-btn bg-green shadow' @tap="utils.copyText(imgTh)">复制</button>
		</view>
		<view class="cu-form-group">
			<view class="padding-right-xs">
				<view class='cu-tag line-orange'>缩略图HTML</view>
			</view>
			<input placeholder="..." name="input" :value="imgThHTML"></input>
			<button class='cu-btn bg-green shadow'@tap="utils.copyText(imgThHTML)">复制</button>
		</view>
		<view class="cu-form-group">
			<view class="padding-right-xs">
				<view class='cu-tag line-orange'>缩略图Markdown</view>
			</view>
			<input placeholder="..." name="input" :value="imgThMarkDown"></input>
			<button class='cu-btn bg-green shadow' @tap="utils.copyText(imgThMarkDown)">复制</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: this.windowHeight,
				percent:0,
				img:'https://wngj.oss-cn-shenzhen.aliyuncs.com/dlam.jpg',
				imgHTML:'',
				imgMarkDown:'',
				imgTh:'',
				imgThHTML:'',
				imgThMarkDown:'',
			}
		},
		methods: {
			cI() {
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success:(res)=> {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						var imgFiles = res.tempFilePaths[0]
						console.log(imgFiles)
						// 上传图片
						// 做成一个上传对象
						var uper = uni.uploadFile({
							// 需要上传的地址
							
							url: 'https://wngj.hzeyuan.cn/api/v1/upload',
							// filePath  需要上传的文件
							filePath: imgFiles,
							name: 'file',
							success:(uploadFileRes)=> {
								// 显示上传信息
								let res = JSON.parse(uploadFileRes.data)
								let data = res.data
								console.log(data['img'])
								this.setData({
									img:data['img'],
									imgHTML:data['img_html'],
									imgMarkDown:data['img_markdown'],
									imgTh:data['th_img'],
									imgThHTML:data['th_img_html'],
									imgThMarkDown:data['th_img_markdown']
								})
							}
						});
						uper.onProgressUpdate((res)=> {
							// 进度条等于 上传到的进度
							this.percent = res.progress
							// console.log('上传进度' + res.progress)
							// console.log('已经上传的数据长度' + res.totalBytesSent)
							// console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend)
						})
					}
				})
			},
			onShareAppMessage(options){
				
			}
		}
	}
</script>

<style>

</style>
