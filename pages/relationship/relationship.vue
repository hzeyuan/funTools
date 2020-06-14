<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green"><block slot="content">亲戚计算器</block></cu-custom>
		<view class="container">
			<view class="cu-form-group">
				<view class="title">您的性别:</view>
				<view style="position: relative;width: 75%;">
					<switch class="switch-sex" @change="SwitchSex" :class="indexSix ? 'checked' : ''" :checked="indexSix ? true : false"></switch>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">称呼方式:</view>
				<view>{{ typeDc[indexType] }}</view>
				<button class="cu-btn bg-green shadow" @tap="changeTypeDc">转换</button>
			</view>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>输入:{{ infix }}
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>结果:{{ messageR }}
				</view>
			</view>
			<!-- <view class="screen">{{ infix }}</view>
			<view class="screen">{{ messageR }}</view> -->
			<view class="keyboard">
				<view class="key-rows">
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="爸爸">父</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="妈妈">母</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" :disabled="disabledlg" id="老公">夫</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" :disabled="disabledlp" id="老婆">妻</button></view>
				</view>
				<view class="key-rows">
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="儿子">子</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="女儿">女</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="哥哥">兄</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="弟弟">弟</button></view>
				</view>
				<view class="key-rows">
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="姐姐">姐</button></view>
					<view class="key"><button @tap="bindViewTapInput" class="btn-block btn-orange" id="妹妹">妹</button></view>
					<view class="key"><button @tap="bindViewTapOpt" class="btn-block btn-orange" id="ac">清空</button></view>
					<view class="key"><button @tap="bindViewTapOpt" class="btn-block btn-orange" id="=">计算</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// var t = require("../../utils/weight.js");
var rs = require('../../utils/relationship.min.js');
export default {
	onLoad() {
		let result = rs({ text: '爸爸的哥哥', sex: 1 });
		console.log('结果：' + result);
	},
	data() {
		return {
			indexSix: 0,
			inputValueSix: 1,
			typeDc: ['我称呼对方', '对方称呼我'],
			indexType: 0,
			inputValueType: !1,
			infix: '轻松搞定亲戚关系～',
			messageR: '逢年过节再不尴尬！',
			disabledlg: !0,
			disabledlp: !1
		};
	},
	methods: {
		SwitchSex(e){
			this.indexSix = e.detail.value?1:0
			this.computed()
		},
		changeTypeDc() {
			this.indexType = this.indexType == 0 ? 1 : 0;
			this.inputValueType = ! this.inputValueType
			this.computed()
		},
		bindViewTapInput(i) {
			var e = i.currentTarget.id,
				a = this.infix;
			'轻松搞定亲戚关系～' == a
				? this.infix = e
				: this.infix = a + '的' + e		  
			var t = '爸爸,老公,儿子,哥哥,弟弟'.indexOf(e) > -1;
			this.disabledlg = t
			this.disabledlp = !t
		},
		bindViewTapOpt(e) {
			var a = e.currentTarget.id.trim();
			if ('ac' == a) this.clearAll();
			else if ('=' == a) {
				this.computed()
			}
		},
		computed(){
			var t = {
				text: this.infix,
				sex: this.indexSix,
				type: 'default',
				reverse: this.inputValueType
			};
			let result = rs(t)
			console.log(result)
			if(result.length==0){
				this.messageR = '超出计算范围啦！'
			}else{
				this.messageR = result.length>0?result.join(','):result[0]
			}
		},
		clearAll() {
		        var i = 1 == this.inputValueSix;
		        this.setData({
		            disabledlg: i,
		            disabledlp: !i,
		            infix: "轻松搞定亲戚关系～",
		            messageR: ""
		        });
		    },
	}
};
</script>

<style scoped>
.keyboard {
	width: 100vw;
}

.key-rows {
	display: flex;
	width: 100vw;
}

.key {
	width: 25vw;
}

.key button {
	height: 10vh;
	line-height: 10vh;
	border-radius: 0px;
}
</style>
