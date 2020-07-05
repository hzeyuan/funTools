<template>
	<view class="margin-sm">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">简繁体转换</block>
		</cu-custom>
		<view class="cu-form-group solids align-start line-blue">
			<textarea maxlength="-1" @input="textareaInput" style="height: 15em;" :placeholder="placeholderA"></textarea>
		</view>

		<view class="cu-form-group margin-top" style="border:none">
			<view class="">
				<picker @change="PickerChange1" :value="index1" :range="LanguagePicker">
					<view>{{ LanguagePicker[index1] }}</view>
				</picker>
			</view>
			<view class="cuIcon-right"></view>
			<view class=" ">
				<picker @change="PickerChange2" :value="index2" :range="LanguagePicker.slice(1)">
					<view>{{ LanguagePicker[index2 + 1] }}</view>
				</picker>
			</view>
			<button class="cu-btn bg-green shadow" @tap="translate">转换</button>
		</view>
		<view class="cu-form-group align-start solids line-blue">
			<textarea maxlength="-1" style="height: 15em;" readonly :value="dst" :placeholder="placeholderB"></textarea>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		var LanguagePicker = [
			'自动检测',
			'🇨🇳中文(简体)',
			'🇬🇧英语',
			'🇨🇳粤语',
			'🇨🇳文言文',
			'🇯🇵日语',
			'🇰🇷韩语',
			'🇫🇷法语',
			'🇪🇸西班牙语',
			'🇹🇭泰语',
			'阿拉伯语',
			'🇷🇺俄语',
			'🇵🇹葡萄牙语',
			'🇩🇪德语',
			'🇮🇹意大利语',
			'🇬🇷希腊语',
			'🇳🇱荷兰语',
			'🇵🇱波兰语',
			'🇧🇬保加利亚语',
			'🇪🇪爱沙尼亚语',
			'🇩🇰丹麦语',
			'🇫🇮芬兰语',
			'🇨🇿捷克语',
			'🇷🇴罗马尼亚语',
			'🇸🇮斯洛文尼亚语',
			'🇸🇪瑞典',
			'🇨🇳中文(繁体)',
			'🇻🇳越南'
		];
		return {
			placeholderA: '需要转换的文本',
			placeholderB: '转换后的文本',
			src: '',
			dst: '',
			index1: 0,
			index2: 1,
			LanguagePicker: LanguagePicker,
			LanguageVaule: [
				'auto',
				'zh',
				'en',
				'yue',
				'wyw',
				'jp',
				'kor',
				'fra',
				'spa',
				'th',
				'ara',
				'ru',
				'pt',
				'de',
				'it',
				'el',
				'nl',
				'pl',
				'bul',
				'est',
				'dan',
				'fin',
				'cs',
				'rom',
				'slo',
				'swe',
				'hu',
				'cht',
				'vie'
			]
		};
	},
	methods: {
		PickerChange1(e) {
			this.index1 = Number(e.detail.value);
		},
		PickerChange2(e) {
			this.index2 = Number(e.detail.value);
		},
		translate() {
			let src = this.LanguageVaule[this.index1];
			let dst = this.LanguageVaule[this.index2 + 1];
			let content = this.src;
			uni.showLoading({
				title: '翻译中',
				success: () => {
					uni.request({
						method: 'POST',
						header: {
							'Content-Type': 'applicatoin/json'
						},
						url: 'https://wngj.hzeyuan.cn/api/v1/translate',
						data: {
							src: src,
							dst: dst,
							content: content
						},
						success: res => {
							//console.log(res);
							if (res.data.code === 0) {
								this.dst = res.data.data;
							} else {
								uni.showToast({
									icon: 'none',
									title: '抱歉,翻译出错'
								});
								console.log('查询失败');
							}
						},
						fail: err => {
							uni.showToast({
								icon: 'none',
								title: '抱歉,翻译出错'
							});
							console.log('查询失败');
						}
					});
				},
				complete: () => {
					uni.hideLoading()
				}
			});
		},
		textareaInput(e) {
			this.src = e.detail.value;
		},
		onShareAppMessage(options){
			
		}
	}
};
</script>

<style></style>
