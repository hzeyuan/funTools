<template>
	<view>
		<cu-custom  :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">炫酷昵称</block>
		</cu-custom>
		<view style="height: 120px;">
			<view class="cu-form-group pading-tr text-lg">
				<input class="weui-text-bar__input" type="text" placeholder="请输入昵称" name="input" @input="setName"></input>
			</view>
			<view class="text-center padding-lr bg-white">
				<view class="solid-bottom padding text-lg">
					<text class="">{{result}}</text>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-y :style="[{height: windowHeight-120 + 'px'}]">
			<view class='nickNameType' v-for="(item, index) in list" :key="item.class">
				<view class="flex justify-center">
					{{item.class}}
				</view>
				<view class="padding-sm">
					<view class="flex flex-wrap justify-around">
						<button @tap="genNickName(nickName)"  :index="index" :value11="nickName" class="margin-sm  shadow cu-btn bg-white" style="font-size: 23rpx;flex-basis: 44%;" v-for="(nickName, index) in item.datalist" :key="index">
							{{ nickName }}
						</button>
					</view>
				</view>
			</view>
		</scroll-view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:this.windowHeight,
				name:'',
				result:'生成效果图预览',
				list:[ {
		    class: "翅膀",
		    datalist: [ "꧁꫞꯭昵称꯭꫞꧂", "꧁༺昵称༻꧂", "꧁❀昵称❀꧂", "꧁༺༽༾ཊ昵称ཏ༿༼༻꧂", "꧁༺❀ൢ昵称ൢ❀༻꧂", "꧁༺ཌ༈昵称༈ད༻꧂", "༺ཌ༈昵称༈ད༻", "༺ཌༀൢ昵称ༀད༻", "༺ཌༀཉི昵称༃ༀད༻", "༺࿈昵称࿈༻", "༺❀ൢ昵称❀ൢ༻", "❀༒昵称༒❀", "༺༽༾ཊ昵称ཏ༿༼༻", "༺ཌ༈昵称༈ད༻", "༺昵称༻", "╰︶⋛⋋⊱๑昵称๑⊰⋌⋚︶╯", "╰︶﹉๑昵称๑﹉︶╯", "╰⋛⋋⊱⋋昵称⋌⊰⋌⋚╯", "╰⋛⋋⊱๑昵称๑⊰⋌⋚╯", "╰⊱⋛⋋昵称⋌⋚⊰╯", "⊹⊱⋛⋋昵称⋌⋚⊰⊹", "︶﹌⋛昵称⋚﹌︶", "࿐ཉི༗࿆昵称 ༗࿆ཉི࿐", "༺།༼࿄࿆昵称࿅࿆༽།༻", "௸྄ིོུ昵称คิดถ", "☜☞昵称☜☞", "⋛⊱昵称⊰⋚", "◥昵称◤", "☜昵称☞", "ε昵称з", "༺昵称༻", "ʚ昵称ɞ" ]
		}, {
		    class: "情侣",
		    datalist: [ "✎ℳ๓昵称✾", "ัζั͡昵称ั͡ั͡ั✾", "✎ℳ₯㎕.dear昵称℡", "じ★ve゛昵称℘", "じ☆ve↘昵称う", "じòぴé↘ 昵称๓", "ζั͡ޓއއއ๓昵称€。", "✎﹏ℳ๓₯㎕❦昵称う", "Alone°昵称ご", "✐﹌℘ℳ₨、昵称๓", "ノunique丶昵称ャ", "、♡†ฅr昵称๓`♡", "♡.†ฅr̶昵称ั͡℡", "◆◇昵称╯ ", "︶￣昵称♀", "︶￣昵称♂", "╯昵称♚", "╯昵称♛" ]
		}, {
		    class: "战队公会",
		    datalist: [ "丿艹巅峰丨丶昵称", "丶巛全F最嗨o灬昵称", "彡kiss丿灬昵称", "广东Win丨灬昵称", "丿A名牌货灬昵称", "昵称灬家族", "丿TK丶灬丨昵称。", "丿super丶昵称灬", "Spurt丶昵称ご", "丨Sky灬丨昵称", "丿Star丨昵称", "◥▇▇▇╋【战灬昵称", "昵称ㄣ▄︻┳═一", "◆◇昵称·вοοS", "昵称Culb°", "昵称__Home", "▄︻┳═一★昵称", "v1p丶★昵称", "◢▂昵称▂◣", "丿TK丶灬丨昵称" ]
		}, {
		    class: "个性符号",
		    datalist: [ "ㄨ℉昵称℅`", "★·°昵称;︶︵︶", "?昵称ヽ。", "≒昵称/／.ら", "︶ㄣ昵称ㄣ", "─━═昵称ζ", "〆昵称ゾ", "㊣昵称㊣", "づ昵称╄→", "︻◣_昵称り~", "←￠昵称☆", "╃昵称メ", "ㄗs:昵称︶ㄣ", "╭ァ昵称℅", "圝◤昵称◥圝", "oo-┈→昵称℡~", "ゞ↘o昵称:", "﹎ゞ昵称/╱°", "￡昵称☆★", "ご昵称ミ↗", "ぺ昵称ぺ", "ヤ^昵称íΟо." ]
		}, {
		    class: "箭头",
		    datalist: [ "➶➶➶➶➶昵称➷➷➷➷➷", "↤↤↤↤↤昵称↦↦↦↦↦", "↫↫↫↫↫昵称↬↬↬↬↬", "–--´¯`----»昵称«----´¯`–--", "‹—•°º¤°(昵称)°¤º°•—›", "⇇⇇⇇昵称⇉⇉⇉", "⇉⇉⇉昵称⇇⇇⇇", "]|I{•------» [昵称] «------•}I|["]
		}
		 ]
			}
		},
		methods: {
			setName(e){
				this.name = e.detail.value
			},
			genNickName(nickNameType){
				
				console.log(nickNameType)
				this.result = nickNameType.replace(/昵称/, this.name);
				uni.setClipboardData({
								data: this.result
							});
				// uni.showToast({
				// 	title:'复制成功'
				// })
			},
			onShareAppMessage(options){
				
			}
		}
	}
</script>

<style>

.weui-text-bar__input {
    height: 80rpx;
    line-height: 80rpx;
	font-size: 32rpx;
    text-align: center;
}
</style>
