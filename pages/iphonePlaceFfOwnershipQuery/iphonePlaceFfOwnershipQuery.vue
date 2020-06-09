<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">手机号码归属地查询</block>
		</cu-custom>
		<view class="cu-form-group">
			<i class="cuIcon-search padding-right"></i>
			<input placeholder="需要查询的手机号:" name="input" @input="setIphone" />
			<button class="cu-btn bg-green shadow" @tap="telQuery">查询</button>
		</view>
		<view class="cu-dialog margin-top" v-if="show">
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item">
					<view class="content">
						<text>手机号:{{ telInfo.telNumber }}</text>
					</view>
				</view>
				<view class="cu-item" v-if="telInfo.city">
					<view class="content">
						<text>城市:{{ telInfo.city }}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text>省份:{{ telInfo.province }}</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text>运营商:{{ telInfo.catName }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	onLoad() {
	},
	data() {
		return {
			tel: '',
			telInfo: {
				'telNumber':'',
				'city':'',
				'province':'',
				'catName':'',
			},
			show: false
		};
	},
	methods: {
		setIphone(e) {
			this.tel = e.detail.value;
		},
		telQuery() {
			uniCloud.callFunction({
			    name: 'telQuery',
				data:{
					"tel":this.tel
				}
			  })
			  .then(res => {
					console.log(res.result)
					let result = res.result
					if(result){
						this.show=true
						this.telInfo = {
							telNumber: this.tel,
							city:result.city,
							province: result.province,
							catName: result.type,
						};
					}
					
			  })
			  .catch(err=>{
				  uni.showToast({
				  	title:'手机号码错误'
				  })
				  console.log('fail');
			  })
		}
	}
};
</script>

<style></style>
