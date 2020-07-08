<template>
	<view class="bg-yellow light" style="height: 100%;">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">万年历</block>
		</cu-custom>
		<Calendar
			v-on:choseDay="clickDay"
			v-on:changeMonth="changeDate"
		    ></Calendar>
		<view class="calendarDetail bg-white cu-card align-center">
			<view class="flex justify-between  margin-sm">
				<view class="text-lg">{{year}}年{{month}}月{{day}}日</view>
				<view class="text-lg">{{lunarMonthName}}{{lunarDayName}}</view>
			</view>
			<view class="flex justify-center day solids-top">
				{{day}}
			</view>
			<view class="flex justify-center text-lg  margin-tb-sm">{{GanZhiYear}}年 {{GanZhiMonth}}月 {{GanZhiDay}}日</view>
			<view class="cu-list grid col-4 margin-lr-sm solids-top">
				<view class="cu-item" v-for="i in 8" :key="i">
					<view class="cuIcon-album"></view>
					<text>周公算命</text>
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import Calendar from  '../components/vue-calendar-component/vue-calendar-component.vue';
	var lc = require('../../utils/LunarCalendar.min.js');
	export default {
		components:{Calendar},
		onLoad(){
			var solarDate = new Date()
			this.clickDay(solarDate)
		},
		data() {
			return {
				year:'2020',
				month:'',
				day:'',
				lunarMonthName:'',
				lunarDayName:'',
				GanZhiYear:'',
				GanZhiMonth:'',
				GanZhiDay:'',
			}
		},
		methods: {
			clickDay(data) {
				  let date  = typeof data === 'string' ? new Date(data.replace(/\-/g, '/')) : data;
			      console.log(date)
				  this.year = date.getFullYear()
				  this.day = date.getDate()
				  this.month = date.getMonth()+1
				  let lunar = lc.solarToLunar(date.getFullYear(),date.getMonth()+1,date.getDate());
				  console.log(lunar)
					this.GanZhiYear = lunar.GanZhiYear
					this.GanZhiMonth = lunar.GanZhiMonth
					this.GanZhiDay = lunar.GanZhiDay
					this.lunarMonthName = lunar.lunarMonthName
					this.lunarDayName = lunar.lunarDayName
				},
			    changeDate(data) {
			      console.log(data); //左右点击切换月份
			    },
			    clickToday(data) {
			      console.log(data); // 跳到了本月
			    },
				onShareAppMessage(options){
					
				}
		}
	}
</script>

<style scoped>
.calendarDetail{
	margin: 2%;
}
.day{
	font-size: 84px;
	color: #F7982A;
}
</style>
