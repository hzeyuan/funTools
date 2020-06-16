<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-green">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">万年历</block>
		</cu-custom>
		<Calendar
			v-on:choseDay="clickDay"
			v-on:changeMonth="changeDate"
		    ></Calendar>
	</view>
</template>

<script>
	import Calendar from '../../components/vue-calendar-component/vue-calendar-component.vue';
	var lc = require('../../utils/LunarCalendar.min.js');
	// import calendar from '../../components/calendar.vue'
	export default {
		components:{Calendar},
		onLoad(){
			var solarDate = new Date(2020, 6, 15)
			let r = lc.solarToLunar(solarDate.getFullYear(),solarDate.getMonth(),solarDate.getDate());
			console.log(r)
		},
		data() {
			return {
				
			}
		},
		methods: {
			clickDay(data) {
			      console.log(data); //选中某天
			    },
			    changeDate(data) {
			      console.log(data); //左右点击切换月份
			    },
			    clickToday(data) {
			      console.log(data); // 跳到了本月
			    }
		}
	}
</script>

<style>

</style>
