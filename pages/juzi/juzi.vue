<template>
	<view class="bg-gray" style="height: 100%;">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">句子大全</block>
		</cu-custom>
		<s-pull-scroll ref="pullScroll" :pullDown="pullDown" :pullUp="loadData" :headerHeight="StatusBar+CustomBar">
			<!-- <image class="bgImg" src="https://wngj.oss-cn-shenzhen.aliyuncs.com/bg/17e9375ddc620b58dae035e982012be5.jpg"></image> -->
			<view v-for="(jokeObj,index) in jokeList" :key="index" class="flex cu-card article flex-direction margin-sm padding-sm bg-white" @tap="copyText(jokeObj.joke)">
				<view class="cu-item shadow">
					<view class="content">
						<view class="desc">
							<view class=""> {{jokeObj.src}}</view>
							<!-- <view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view> -->
						</view>
					</view>
				</view>
				<!-- <text>{{index+1}}. {{jokeObj.joke}}</text> -->
				<!-- <view class="text-gray text-sm text-right padding-lr text-xl"> -->
					<!-- <text class="cuIcon-attentionfill margin-lr-xs"></text> 10 -->
					<!-- <text class="cuIcon-appreciatefill margin-lr-xs " :class="jokeObj.zan>=1?'text-red':''" @tap.stop="zan(index)"></text>{{jokeObj.zan}} -->
					<!-- <text class="cuIcon-forwardfill margin-lr-xs text-green" @tap.stop="shareJoke(jokeObj.joke)"></text> -->
				<!-- </view> -->
			</view>
			<!-- 使用插槽自定义空白布局 -->
			<div slot="empty">
				...
			</div>
		</s-pull-scroll>


	</view>
</template>

<script>
	import sPullScroll from '@/components/s-pull-scroll';
	export default {
		components: {
			sPullScroll
		},
		onLoad() {
			// this.getJoke()
			this.refresh();
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				windowHeight: this.windowHeight,
				randomStart: Math.floor(Math.random() * 7500),
				jokeList: [],
				zanList: []
			}
		},
		methods: {
			getJoke(success, fail) {
				uni.request({
					method: "GET",
					data: {
						start: this.randomStart,
					},
					url: 'https://wngj.hzeyuan.cn/api/v1/juzi',
					success: (res) => {
						// console.log(res.data.data)
						this.jokeList.splice(this.jokeList.length, 0, ...res.data.data)
						this.randomStart += 20
						success(res.data.data)
					},
					fail: (err) => {
						console.log(err)
						fail(err)
					}
				})
			},
			copyText(text) {
				this.utils.copyText(text)
				// console.log(text)
			},
			refresh() {
				this.$nextTick(() => {
					this.$refs.pullScroll.refresh();
				});
			},
			pullDown(pullScroll) {
				this.jokeList = []
				this.randomStart = Math.floor(Math.random() * 7500)
				this.loadData(pullScroll);
			},
			loadData(pullScroll) {
				this.getJoke((data) => {
					if (data.length <= 0) {
						pullScroll.finish();
					} else {
						pullScroll.success();
					}
				})
			},
			onShareAppMessage(options) {

			},
			zan(index){
				console.log("zan")
				for(let i=0;i<this.zanList.length;i++){
					if(index ===this.zanList[i]){
						return 
					}
				}
				this.jokeList[index].zan +=1
				this.zanList.push(index)
			},
			shareJoke(text){
				console.log('123')
			}
			
		}
	}
</script>

<style scoped>
	.bgImg {
		/* height: 100%; */
		width: 100%;
		height: 100%;
		position: absolute;

		/* position: absolute;
	z-index: 0; */
	}
</style>
