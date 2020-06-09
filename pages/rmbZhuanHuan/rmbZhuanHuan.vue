<template>
	<view>
		<cu-custom  :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">人民币大小写转换</block>
		</cu-custom>
		<view class="cu-form-group">
			<view class="title">需要转换的金额数字:</view>
			<input placeholder="例如:100" name="input" @input="setMoney"></input>
			<button class='cu-btn bg-green shadow' @tap="change(money)">转换</button>
		</view>
		<view class="cu-form-group">
			<view class="title">结果:</view>
			<input placeholder="例如:壹佰元整" name="input" :value="result"></input>
			<button class='cu-btn line-red shadow' @tap="utils.copyText(result)">复制</button>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>人民币金额用到的中文大写汉字如下：
			</view>
		</view>
		<view class="padding text-center">
			<view class="bg-white">
				<view class="text-sm">零、壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>人民币常识：
			</view>
		</view>
		<view class="padding">
			<view class="bg-white">
				<view>
					<text>人民币（缩写为RMB）是我国大陆地区的法定货币，尽管每个人几乎天天都要接触到人民币或者支票，但是人民币大写如何写是困扰很多人的问题。尽管生活中看起来极其熟悉而又简单的东西，但发现其实并不会写。人民币在ISO 4217简称为CNY（China Yuan），常用简写为RMB（Ren Min Bi）；人民币货币的符号是“ ￥”（'Y'+'='），读音为“YUAN”。人民币按照材料的自然属性划分，有金属币（亦称硬币）、 纸币（亦称钞票）。无论纸币、硬币均等价流通，至今已发行了五套人民币。
					</text>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>人民币大写规范详细介绍：
			</view>
		</view>
		<view class="padding">
			<view class="bg-white">
				<view>
					<text>银行、单位和个人填写的各种票据和结算凭证是办理支付结算和现金收付的重要依据，直接关系到支付结算的准确、及时和安全。票据和结算凭证是银行、单位和个人凭以记载账务的会计凭证，是记载经济业务和明确经济责任的一种书面证明。因此，填写票据和结算凭证必须做到标准化、规范化、要素齐全、数字正确、字迹清晰、不错漏、不潦草、防止涂改。 中文大写金额数字应用正楷或行书填写，如壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整(正)等字样，不得用一、二(两)、三、四、五、六、七、八、九、十、毛、另(或0)填写，不得自造简化字。如果金额数字书写中使用繁体字，如贰、陆、亿、万、圆的，也应受理。</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:100,
				result:'',
			}
		},
		methods: {
			setMoney(e){
					this.money = e.detail.value
			},
			change(){
				this.result =  this.utils.rmbDaXieZhuanHuan(this.money)
			}
		}
	}
</script>

<style>

</style>
