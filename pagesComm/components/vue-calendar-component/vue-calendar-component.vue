<style scoped>
@media screen and (min-width: 460px) {
	.wh_item_date:hover {
		background: white;
		cursor: pointer;
	}
}
* {
	margin: 0;
	padding: 0;
}

.wh_container {
	/* max-width: 410px; */
	margin: auto;
}

li {
	list-style-type: none;
}

.wh_top_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2% 2%;
}
.wh_top_title button,
text {
	/* flex: 0.1; */
}

.wh_top_changge {
	display: flex;
	justify-content: center;
	flex: 4;
	/* position: absolute; */
	width: 100%;
}

.wh_top_changge li {
	cursor: pointer;
	display: flex;
	color: black;
	font-size: 18px;
	flex: 0;
	justify-content: center;
	align-items: center;
	height: 47px;
}

.wh_top_changge .wh_content_li {
	cursor: auto;
	flex: 0.4;
}
.wh_content_all {
	font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
	background-color: white;
	width: 100%;
	overflow: hidden;
	padding-bottom: 8px;
}

.wh_content {
	display: flex;
	flex-wrap: wrap;
	padding: 0 3% 0 3%;
	width: 100%;
}

.wh_content:first-child .wh_content_item_tag,
.wh_content:first-child .wh_content_item {
	color: black;
	font-size: 16px;
}

.wh_content_item,
wh_content_item_tag {
	font-size: 15px;
	width: 14.2%;
	text-align: center;
	color: black;
	position: relative;
}
.wh_content_item {
	height: 40px;
}

.wh_top_tag {
	width: 40px;
	height: 40px;
	line-height: 40px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.wh_item_date {
	width: 40px;
	height: 25px;
	line-height: 40px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wh_item_lunar {
	width: 40px;
	height: 15px;
	line-height: 40px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
}

.wh_jiantou1 {
	width: 12px;
	height: 12px;
	border-top: 2px solid #8799a3;
	border-left: 2px solid #8799a3;
	transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
	border-color: #f13265;
}

.wh_jiantou2 {
	width: 12px;
	height: 12px;
	border-top: 2px solid #8799a3;
	border-right: 2px solid #8799a3;
	transform: rotate(45deg);
}
.wh_content_item > .wh_isMark {
	margin: auto;
	border-radius: 100px;
	background: blue;
	z-index: 2;
}
.wh_content_item .wh_other_dayhide {
	color: #bfbfbf;
}
.wh_content_item .wh_want_dayhide {
	color: #bfbfbf;
}
.wh_content_item .wh_isToday1 {
	background: #ff8c00;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	color: white;
}
.wh_content_item .wh_isToday2 {
	background: #ff8c00;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	color: white;
}
.wh_content_item .wh_chose_day1 {
	background: red;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	color: white;
}
.wh_content_item .wh_chose_day2 {
	background: red;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	color: white;
}
</style>
<template>
	<section class="screen">
		<div class="wh_content_all">
			<div class="wh_top_title">
				<button class="cu-btn" style="margin: 0;z-index: 100;" @click="goToToday()">今天</button>
				<div class="wh_top_changge">
					<li @click="PreMonth(myDate, false)"><div class="wh_jiantou1"></div></li>
					<li class="wh_content_li">{{ dateTop }}</li>
					<li @click="NextMonth(myDate, false)"><div class="wh_jiantou2"></div></li>
				</div>
				<text class=" text-gray cuIcon-vipcard" style="font-size: 36px;z-index: 100;"></text>
			</div>
			<div class="wh_content">
				<div class="wh_content_item" v-for="tag in textTop" :key="tag">
					<div class="wh_top_tag">{{ tag }}</div>
				</div>
			</div>
			<div class="wh_content">
				<div class="wh_content_item" v-for="(item, index) in list" :key="item.isToday" @click="clickDay(item, index)">
					<div
						class="wh_item_date"
						v-bind:class="[
							{ wh_isMark: item.isMark },
							{ wh_other_dayhide: item.otherMonth !== 'nowMonth' },
							{ wh_want_dayhide: item.dayHide },
							{ wh_isToday1: item.isToday },
							{ wh_chose_day1: item.chooseDay },
							setClass(item)
						]"
					>
						{{ item.id }}
					</div>
					<div class="wh_item_lunar text-grey" :class="[{ wh_chose_day2: item.chooseDay }, { wh_isToday2: item.isToday }]">{{ getLunar(item.date) }}</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import timeUtil from './calendar';

export default {
	data() {
		return {
			myDate: [],
			list: [],
			historyChose: [],
			dateTop: ''
		};
	},
	props: {
		markDate: {
			type: Array,
			default: () => []
		},
		markDateMore: {
			type: Array,
			default: () => []
		},
		textTop: {
			type: Array,
			default: () => ['一', '二', '三', '四', '五', '六', '日']
		},
		sundayStart: {
			type: Boolean,
			default: () => false
		},
		agoDayHide: {
			type: String,
			default: `0`
		},
		futureDayHide: {
			type: String,
			default: `2554387200`
		}
	},
	created() {
		this.intStart();
		this.myDate = new Date();
	},
	methods: {
		intStart() {
			timeUtil.sundayStart = this.sundayStart;
		},
		setClass(data) {
			let obj = {};
			obj[data.markClassName] = data.markClassName;
			return obj;
		},
		clickDay: function(item, index) {
			console.log(item);
			if (item.otherMonth === 'nowMonth' && !item.dayHide) {
				this.getList(this.myDate, item.date);
			}
			if (item.otherMonth !== 'nowMonth') {
				item.otherMonth === 'preMonth' ? this.PreMonth(item.date) : this.NextMonth(item.date);
			}
		},
		ChoseMonth: function(date, isChosedDay = true) {
			date = timeUtil.dateFormat(date);
			this.myDate = new Date(date);
			this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
			if (isChosedDay) {
				this.getList(this.myDate, date, isChosedDay);
			} else {
				this.getList(this.myDate);
			}
		},
		PreMonth: function(date, isChosedDay = true) {
			date = timeUtil.dateFormat(date);
			this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
			this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
			if (isChosedDay) {
				this.getList(this.myDate, date, isChosedDay);
			} else {
				this.getList(this.myDate);
			}
		},
		NextMonth: function(date, isChosedDay = true) {
			date = timeUtil.dateFormat(date);
			this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
			this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
			if (isChosedDay) {
				this.getList(this.myDate, date, isChosedDay);
			} else {
				this.getList(this.myDate);
			}
		},
		forMatArgs: function() {
			let markDate = this.markDate;
			let markDateMore = this.markDateMore;
			markDate = markDate.map(k => {
				return timeUtil.dateFormat(k);
			});
			markDateMore = markDateMore.map(k => {
				k.date = timeUtil.dateFormat(k.date);
				return k;
			});
			return [markDate, markDateMore];
		},
		getList: function(date, chooseDay, isChosedDay = true) {
			const [markDate, markDateMore] = this.forMatArgs();
			this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
			let arr = timeUtil.getMonthList(this.myDate);
			for (let i = 0; i < arr.length; i++) {
				let markClassName = '';
				let k = arr[i];
				k.chooseDay = false;
				const nowTime = k.date;
				const t = new Date(nowTime).getTime() / 1000;
				//看每一天的class
				for (const c of markDateMore) {
					if (c.date === nowTime) {
						markClassName = c.className || '';
					}
				}
				//标记选中某些天 设置class
				k.markClassName = markClassName;
				k.isMark = markDate.indexOf(nowTime) > -1;
				//无法选中某天
				k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
				if (k.isToday) {
					this.$emit('isToday', nowTime);
				}
				let flag = !k.dayHide && k.otherMonth === 'nowMonth';
				if (chooseDay && chooseDay === nowTime && flag) {
					this.$emit('choseDay', nowTime);
					this.historyChose.push(nowTime);
					k.chooseDay = true;
				} else if (this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag) {
					k.chooseDay = true;
				}
			}
			this.list = arr;
		},
		getLunar(date) {
			let l = date.split('/');
			let lc = require('../../../utils/LunarCalendar.min.js');
			let lunar = lc.solarToLunar(l[0], l[1], l[2]);
			return lunar.lunarDayName;
		},
		goToToday(){
			let date = new Date()
			this.ChoseMonth(date)
		}
	},
	mounted() {
		this.getList(this.myDate);
	},
	watch: {
		markDate: {
			handler(val, oldVal) {
				this.getList(this.myDate);
			},
			deep: true
		},
		markDateMore: {
			handler(val, oldVal) {
				this.getList(this.myDate);
			},
			deep: true
		},
		agoDayHide: {
			handler(val, oldVal) {
				this.getList(this.myDate);
			},
			deep: true
		},
		futureDayHide: {
			handler(val, oldVal) {
				this.getList(this.myDate);
			},
			deep: true
		},
		sundayStart: {
			handler(val, oldVal) {
				this.intStart();
				this.getList(this.myDate);
			},
			deep: true
		}
	}
};
</script>
