<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">身份证查询</block>
		</cu-custom>
		<view class="cu-form-group">
			<i class="cuIcon-search padding-right"></i>
			<input placeholder="请输入正确的身份证号" name="input" @input="setSfz" />
			<button class="cu-btn bg-green shadow" @tap="sfzQuery">查询</button>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top" v-if="showSfzInfo">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>
				身份证信息
			</view>
		</view>
		<view class="cu-dialog" v-if="showSfzInfo">
			<view class="cu-list menu text-left solid-top">
				<view class="cu-item" v-for="(item, index) in sfzInfo">
					<view class="content">
						<text>{{ chineseFmt(index) }}:{{ item }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>身份证号码的编码规则：
			</view>
		</view>
		<view class="padding">
			<view class="bg-white">
				<view style="padding-bottom: 0.5%;"><span>1. 前6位是地址码，表示登记户口时所在地的行政区划代码，依照《中华人民共和国行政区划代码》国家标准（GB/T2260）的规定执行</span></view>
				<view style="padding-bottom: 0.5%;"><span>2. 7到14位是出生年月日，采用YYYYMMDD格式</span></view>
				<view style="padding-bottom: 0.5%;"><span>3. 15到17位是顺序码，表示在同一地址码所标识的区域范围内，对同年、同月、同日出生的人编订的顺序号，顺序码的奇数分配给男性，偶数分配给女性，即第17位奇数表示男性，偶数表示女性</span></view>
				<view style="padding-bottom: 0.5%;"><span>4. 第18位是校验码，采用ISO 7064:1983, MOD 11-2校验字符系统</span></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSfzInfo: false,
			sfz: '',
			sfzInfo: {
				city: '...',
				age: '...',
				sex: '男',
				birth: '1999-01-01',
				shengxiao: '兔',
				xingzuo: '天蝎'
			}
		};
	},
	methods: {
		setSfz(e) {
			this.sfz = e.detail.value;
		},
		sfzQuery() {
			//效验身份证
			let ck = new this.IDCard();
			if (!ck.check(this.sfz)) {
				uni.showToast({
					title: '身份证格式不正确'
				});
				return;
			} else {
				uni.showLoading({title:'加载中',})
				this.sfzInfo.birth = ck.year + '-' + ck.month + '-' + ck.day;
				this.sfzInfo.age = this.getAge(this.sfzInfo.birth);
				this.sfzInfo.shengxiao = this.getShengxiao(ck.year);
				this.sfzInfo.sex = ck.sex
				this.sfzInfo.xingzuo = this.getXingZuo(ck.month, ck.day);
				this.getLocation()
			}
			uni.hideLoading()
			this.showSfzInfo = true;
		},
		chineseFmt(name) {
			if (name == 'city') {
				return '城市';
			} else if (name == 'age') {
				return '年龄';
			} else if (name == 'sex') {
				return '性别';
			} else if (name == 'birth') {
				return '生日';
			} else if (name == 'shengxiao') {
				return '生肖';
			} else if (name == 'xingzuo') {
				return '星座';
			}
		},
		IDCard(ID) {
			var me = this;
			this.checkCode = new Array(1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2);
			this.ID;
			this.errNum = 0;
			this.year = 0; //年
			this.month = 0; // 月
			this.day = 0; //日
			this.sex = ''; //性别
			this.city = ''; //城市

			this.err = {
				1: '身份证校验不符合求和模11=1这个等式',
				2: '身份证最后一位校验位有误',
				3: '身份证位数不正确',
				4: '年份错误',
				5: '月份错误',
				6: '日错误'
			};
			this.err_msg = function() {
				return 0 !== this.errNum ? this.err[this.errNum] : null;
			};
			this.check = function(ID) {
				console.log('xiaoyan');
				this.errNum = 0;
				this.ID = ID;
				console.log(ID);
				if (cardValidate()) {
					return 0 === aiCheck() ? true : false;
				} else {
					return false;
				}
			};
			function getNum(str) {
				var re = /^[0]*([0-9]*)$/;
				str.match(re);
				return parseInt(RegExp.$1, 10);
			}
			//对身份证位数，出生日期，初步验证
			function cardValidate() {
				var re = /^[0-9x]{15,18}$/i;
				if (!re.test(me.ID)) {
					me.errNum = 7;
					return false;
				}
				if (15 == me.ID.length || 18 == me.ID.length) {
					var realLen = 0;
					if (18 == me.ID.length) realLen = 2;
					var year = parseInt(me.ID.substr(6, 2 + realLen), 10);
					var month = getNum(me.ID.substr(8 + realLen, 2));
					var day = parseInt(me.ID.substr(10 + realLen, 2), 10);
					var sex = parseInt(me.ID.substr(14 + realLen, 1), 10) % 2 === 0 ? '女' : '男';
					if (4 == year.length) if (year < 1900 || year > 2050) me.errNum = 4;
					if (month < 1 || month > 12) me.errNum = 5;
					if (day < 1 || day > 31) me.errNum = 6;
					me.year = year;
					me.month = month;
					me.day = day;
					me.sex = sex;
					return 0 === me.errNum;
				} else {
					me.errNum = 3;
					return false;
				}
			}
			var aiCheck = function() {
				var sum = 0;
				for (var i = 1; i <= me.ID.length; i++) {
					var ai = me.ID.substr(me.ID.length - i, 1);
					ai = ai.toLowerCase() == 'x' ? 10 : ai;
					var wi = Math.pow(2, i - 1) % 11;
					sum += parseInt(ai, 10) * wi;
				}
				if (1 !== sum % 11) me.errNum = 1; //总和模11应该等于1
				sum = sum - parseInt(me.ID.substr[0], 10);
				var checkCodeIndex = sum % 11;
				let c = me.ID.substr(me.ID.length - 1, 1); //最后一位数字
				if (c == me.checkCode[checkCodeIndex]) me.errNum = 2; //最后一位校验
				return me.errNum;
			};
		},
		getAge(strAge) {
			var birArr = strAge.split('-');
			var birYear = birArr[0];
			var birMonth = birArr[1];
			var birDay = birArr[2];

			d = new Date();
			var nowYear = d.getFullYear();
			var nowMonth = d.getMonth() + 1; //记得加1
			var nowDay = d.getDate();
			var returnAge;

			if (birArr == null) {
				return false;
			}
			var d = new Date(birYear, birMonth - 1, birDay);
			if (d.getFullYear() == birYear && d.getMonth() + 1 == birMonth && d.getDate() == birDay) {
				if (nowYear == birYear) {
					returnAge = 0; //
				} else {
					var ageDiff = nowYear - birYear; //
					if (ageDiff > 0) {
						if (nowMonth == birMonth) {
							var dayDiff = nowDay - birDay; //
							if (dayDiff < 0) {
								returnAge = ageDiff - 1;
							} else {
								returnAge = ageDiff;
							}
						} else {
							var monthDiff = nowMonth - birMonth; //
							if (monthDiff < 0) {
								returnAge = ageDiff - 1;
							} else {
								returnAge = ageDiff;
							}
						}
					} else {
						return '出生日期晚于今天，数据有误'; //返回-1 表示出生日期输入错误 晚于今天
					}
				}
				return returnAge;
			} else {
				return '输入的日期格式错误！';
			}
		},
		getShengxiao(year) {
			let ssyear = ['子鼠', '丑牛', '寅虎', '卯兔', '辰龙', '巳蛇', '午马', '未羊', '申猴', '酉鸡', '戌狗', '亥猪'];
			let index = (parseInt(year, 10) - 1984) % 12;
			console.log(ssyear[index]);
			return ssyear[index];
		},
		getXingZuo(month, day) {
			var constellations = [
				{ Start: 121, End: 220, Name: '水平座' },
				{ Start: 221, End: 320, Name: '双鱼座' },
				{ Start: 321, End: 420, Name: '白羊座' },
				{ Start: 421, End: 520, Name: '金牛座' },
				{ Start: 521, End: 620, Name: '双子座' },
				{ Start: 621, End: 720, Name: '巨蟹座' },
				{ Start: 721, End: 820, Name: '狮子座' },
				{ Start: 821, End: 920, Name: '处女座' },
				{ Start: 921, End: 1020, Name: '天秤座' },
				{ Start: 1021, End: 1120, Name: '天蝎座' }
			];
			let pos = month * 100 + day;
			for (var i in constellations) {
				if (pos >= constellations[i].Start && pos <= constellations[i].End) {
					return constellations[i].Name;
				}
			}
		},
		getLocation() {	
			let province = this.sfz.substr(0, 2) + '0000'
			let city = this.sfz.substr(0, 4) + '00';
			let area = this.sfz.substr(0, 6);
			let result = ''
			uniCloud.callFunction({
			    name: 'getLocations',
				data:{
					"province":province,
					"city":city,
					"area":area,
				}
			  })
			  .then(res => {
				  console.log(result)
				 this.sfzInfo.city= res.result
			  })
			return result
		}
	}
};
</script>

<style></style>
