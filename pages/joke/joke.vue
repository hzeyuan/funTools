<template>
	<view class="bg-gray" style="height: 100%;">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">笑话大全</block>
		</cu-custom>
		<scroll-view scroll-y  :style="[{ height: windowHeight-20 + 'px' }]">
			<view v-for="i in 100" class="flex flex-direction margin-sm padding-sm bg-white">
				<text>
					{{i}}
					小时候看到大人们抽烟，很想抽，偷偷打开老爸烟盒，还没点上就被发现了，狠狠的打了我一顿。\n那顿打丝毫没消掉我抽烟的念头，反而更强烈了，这天看到隔壁二大爷用纸卷烟，完了还用口水把口封上，划根火柴点燃，美美的抽了一口，看到二大爷陶醉的表情，我更加想要抽烟了。\n回家猴急的把作业本撕下来，笨拙的卷成筒，把厨房的打火机拿出来一按，闭上眼睛使命一吸，我去！火一下子从纸团中间穿到嘴巴里。。。\n第二天捂着香肠嘴去找二大爷算账才发现，人家纸里面卷的是香烟叶。。。
				</text>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
					<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view>
			</view>

		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: this.windowHeight,
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
