<template>
	<view class="bg-gray" style="height: 100%;">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">笑话大全</block>
		</cu-custom>
		<s-pull-scroll ref="pullScroll" :pullDown="pullDown" :pullUp="loadData" :headerHeight="StatusBar+CustomBar">
			<!-- <image class="bgImg" src="https://wngj.oss-cn-shenzhen.aliyuncs.com/bg/17e9375ddc620b58dae035e982012be5.jpg"></image> -->
			<view v-for="(jokeObj,index) in jokeList" class="flex flex-direction margin-sm padding-sm bg-white" @tap="copyText(jokeObj.joke)">
				<text>{{index+1}}. {{jokeObj.joke.substring(2)}}</text>
				<view class="text-gray text-sm text-right padding">
					<!-- <text class="cuIcon-attentionfill margin-lr-xs"></text> 10 -->
					<text class="cuIcon-appreciatefill margin-lr-xs"></text>{{jokeObj.zan}}
					<!-- <text class="cuIcon-messagefill margin-lr-xs"></text> 30 -->
				</view>
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
				randomStart: Math.floor(Math.random() * 8200),
				jokeList: []
			}
		},
		methods: {
			getJoke(success, fail) {
				uni.request({
					method: "GET",
					data: {
						start: this.randomStart,
					},
					url: 'https://wngj.hzeyuan.cn/api/v1/joke',
					success: (res) => {
						console.log(res.data.data)
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
				console.log(text)
			},
			refresh() {
				this.$nextTick(() => {
					this.$refs.pullScroll.refresh();
				});
			},
			pullDown(pullScroll) {
				this.jokeList = []
				this.randomStart = Math.floor(Math.random() * 8200)
				this.loadData(pullScroll);
			},
			loadData(pullScroll) {
				setTimeout(() => {
					this.getJoke((data) => {
						if (data.length <= 0) {
							pullScroll.finish();
						} else {
							pullScroll.success();
						}
					})
				}, 200);

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
