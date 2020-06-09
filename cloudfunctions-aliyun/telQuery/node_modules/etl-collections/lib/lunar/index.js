var config = require('../../conf/Lunar');
var utils = require('../../utils');
var minYear = config.minYear,
    maxYear = config.maxYear,
    DATA = config.DATA,
    worktime = config.worktime,
    solarFestival = config.solarFestival,
    lunarFestival = config.lunarFestival,
    lunarInfo = config.lunarInfo,
    termInfo = config.termInfo;
var Lunar = {};

var formateDayD4 = function(month, day) {
    month = month + 1;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return 'd' + month + day;
};

/*
 * 统一日期输入参数（输入月份从1开始，内部月份统一从0开始）
 */
var formateDate = function(year, month, day, _minYear) {
    var argsLen = arguments.length;
    var now = new Date();
    year = argsLen ? parseInt(year, 10) : now.getFullYear();
    month = argsLen ? parseInt(month - 1, 10) : now.getMonth();
    day = argsLen ? parseInt(day, 10) || now.getDate() : now.getDate();
    if (year < (_minYear ? _minYear : minYear + 1) || year > maxYear) return {
        error: 100,
        msg: errorCode[100]
    };
    return {
        year: year,
        month: month,
        day: day
    };
};

var creatLenArr = function(year, month, len, start) {
    var arr = [];
    start = start || 0;
    if (len < 1) return arr;
    var k = start;
    for (var i = 0; i < len; i++) {
        arr.push({
            year: year,
            month: month,
            day: k
        });
        k++;
    }
    return arr;
};

var cache = null; //某年相同计算进行cache，以加速计算速度
var cacheUtil = { //cache管理工具
    current: '',
    setCurrent: function(year) {
        if (this.current != year) {
            this.current = year;
            this.clear();
        }
    },
    set: function(key, value) {
        if (!cache) cache = {};
        cache[key] = value;
        return cache[key];
    },
    get: function(key) {
        if (!cache) cache = {};
        return cache[key];
    },
    clear: function() {
        cache = null;
    }
};
/** ------------------------ */

/**
 * 判断农历年闰月数
 * @param {Number} year 农历年
 * return 闰月数 （月份从1开始）
 */
Lunar.getLunarLeapYear = function(year) {
    var yearData = lunarInfo[year - minYear];
    return yearData[0];
};

/**
 * 获取农历年份一年的每月的天数及一年的总天数
 * @param {Number} year 农历年
 */
Lunar.getLunarYearDays = function(year) {
    var yearData = lunarInfo[year - minYear];
    var leapMonth = yearData[0]; //闰月
    var monthData = yearData[3].toString(2);
    var monthDataArr = monthData.split('');

    //还原数据至16位,少于16位的在前面插入0（二进制存储时前面的0被忽略）
    for (var i = 0; i < 16 - monthDataArr.length; i++) {
        monthDataArr.unshift(0);
    }

    var len = leapMonth ? 13 : 12; //该年有几个月
    var yearDays = 0;
    var monthDays = [];
    for (var i = 0; i < len; i++) {
        if (monthDataArr[i] == 0) {
            yearDays += 29;
            monthDays.push(29);
        } else {
            yearDays += 30;
            monthDays.push(30);
        }
    }
    return {
        yearDays: yearDays,
        monthDays: monthDays
    };
};

/**
 * 通过间隔天数查找农历日期
 * @param {Number} year,between 农历年，间隔天数
 */
Lunar.getLunarDateByBetween = function(year, between) {
    var lunarYearDays = Lunar.getLunarYearDays(year);
    var end = between > 0 ? between : lunarYearDays.yearDays - Math.abs(between);
    var monthDays = lunarYearDays.monthDays;
    var tempDays = 0;
    var month = 0;
    for (var i = 0; i < monthDays.length; i++) {
        tempDays += monthDays[i];
        if (tempDays > end) {
            month = i;
            tempDays = tempDays - monthDays[i];
            break;
        }
    }
    return [year, month, end - tempDays + 1];
};

/**
 * 根据距离正月初一的天数计算农历日期
 * @param {Number} year 公历年，月，日
 */
Lunar.getLunarByBetween = function(year, month, day) {
    var yearData = lunarInfo[year - minYear];
    var zenMonth = yearData[1];
    var zenDay = yearData[2];
    var between = Lunar.getDaysBetweenSolar(year, zenMonth - 1, zenDay, year, month, day);
    if (between == 0) { //正月初一
        return [year, 0, 1];
    } else {
        var lunarYear = between > 0 ? year : year - 1;
        return Lunar.getLunarDateByBetween(lunarYear, between);
    }
};

/**
 * 两个公历日期之间的天数
 */
Lunar.getDaysBetweenSolar = function(year, month, day, year1, month1, day1) {
    var date = new Date(year, month, day).getTime();
    var date1 = new Date(year1, month1, day1).getTime();
    return (date1 - date) / 86400000;
};

/**
 * 计算农历日期离正月初一有多少天
 * @param {Number} year,month,day 农年，月(0-12，有闰月)，日
 */
Lunar.getDaysBetweenZheng = function(year, month, day) {
    var lunarYearDays = Lunar.getLunarYearDays(year);
    var monthDays = lunarYearDays.monthDays;
    var days = 0;
    for (var i = 0; i < monthDays.length; i++) {
        if (i < month) {
            days += monthDays[i];
        } else {
            break;
        }
    };
    return days + day - 1;
};

/**
 * 某年的第n个节气为几日
 * 31556925974.7为地球公转周期，是毫秒
 * 1890年的正小寒点：01-05 16:02:31，1890年为基准点
 * @param {Number} y 公历年
 * @param {Number} n 第几个节气，从0小寒起算
 * 由于农历24节气交节时刻采用近似算法，可能存在少量误差(30分钟内)
 */
Lunar.getTerm = function(y, n) {
    var offDate = new Date((31556925974.7 * (y - 1890) + termInfo[n] * 60000) + Date.UTC(1890, 0, 5, 16, 2, 31));
    return (offDate.getUTCDate());
};

/**
 * 获取公历年一年的二十四节气
 * 返回key:日期，value:节气中文名
 */
Lunar.getYearTerm = function(year) {
    var res = {};
    var month = 0;
    for (var i = 0; i < 24; i++) {
        var day = Lunar.getTerm(year, i);
        if (i % 2 == 0) month++
            res[formateDayD4(month - 1, day)] = DATA.solarTerm[i];
    }
    return res;
};

/**
 * 获取生肖
 * @param {Number} year 干支所在年（默认以立春前的公历年作为基数）
 */
Lunar.getYearZodiac = function(year) {
    var num = year - 1890 + 25; //参考干支纪年的计算，生肖对应地支
    return DATA.zodiac[num % 12];
};

/**
 * 计算天干地支
 * @param {Number} num 60进制中的位置(把60个天干地支，当成一个60进制的数)
 */
Lunar.cyclical = function(num) {
    return (DATA.heavenlyStems[num % 10] + DATA.earthlyBranches[num % 12]);
};

/**
 * 获取干支纪年
 * @param {Number} year 干支所在年
 * @param {Number} offset 偏移量，默认为0，便于查询一个年跨两个干支纪年（以立春为分界线）
 */
Lunar.getLunarYearName = function(year, offset) {
    offset = offset || 0;
    //1890年1月小寒（小寒一般是1月5或6日）以前为己丑年，在60进制中排25
    return Lunar.cyclical(year - 1890 + 25 + offset);
};

/**
 * 获取干支纪月
 * @param {Number} year,month 公历年，干支所在月
 * @param {Number} offset 偏移量，默认为0，便于查询一个月跨两个干支纪月（有立春的2月）
 */
Lunar.getLunarMonthName = function(year, month, offset) {
    offset = offset || 0;
    //1890年1月小寒以前为丙子月，在60进制中排12
    return Lunar.cyclical((year - 1890) * 12 + month + 12 + offset);
};

/**
 * 获取干支纪日
 * @param {Number} year,month,day 公历年，月，日
 */
Lunar.getLunarDayName = function(year, month, day) {
    //当日与1890/1/1 相差天数
    //1890/1/1与 1970/1/1 相差29219日, 1890/1/1 日柱为壬午日(60进制18)
    var dayCyclical = Date.UTC(year, month, day) / 86400000 + 29219 + 18;
    return Lunar.cyclical(dayCyclical);
};

/**
 * 获取公历月份的天数
 * @param {Number} year 公历年
 * @param {Number} month 公历月
 */
Lunar.getSolarMonthDays = function(year, month) {
    var monthDays = [31, Lunar.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[month];
};

/**
 * 判断公历年是否是闰年
 * @param {Number} year 公历年
 */
Lunar.isLeapYear = function(year) {
    return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
};

/**
 * 将农历转换为公历
 * @param {Number} year,month,day 农历年，月(1-13，有闰月)，日
 */
Lunar.lunarToSolar = function(_year, _month, _day) {
    var inputDate = formateDate(_year, _month, _day);
    if (inputDate.error) return inputDate;
    var year = inputDate.year;
    var month = inputDate.month;
    var day = inputDate.day;

    var between = Lunar.getDaysBetweenZheng(year, month, day); //离正月初一的天数
    var yearData = lunarInfo[year - minYear];
    var zenMonth = yearData[1];
    var zenDay = yearData[2];

    var offDate = new Date(year, zenMonth - 1, zenDay).getTime() + between * 86400000;
    offDate = new Date(offDate);
    return {
        year: offDate.getFullYear(),
        month: offDate.getMonth() + 1,
        day: offDate.getDate()
    };
};

/**
 * 将公历转换为农历
 * @param {Number} year,month,day 公历年，月，日
 */
Lunar.solarToLunar = function(_year, _month, _day) {
    var inputDate = formateDate(_year, _month, _day, minYear);
    if (inputDate.error) return inputDate;
    var year = inputDate.year;
    var month = inputDate.month;
    var day = inputDate.day;

    cacheUtil.setCurrent(year);
    //立春日期
    var term2 = cacheUtil.get('term2') ? cacheUtil.get('term2') : cacheUtil.set('term2', Lunar.getTerm(year, 2));
    //二十四节气
    var termList = cacheUtil.get('termList') ? cacheUtil.get('termList') : cacheUtil.set('termList', Lunar.getYearTerm(year));

    var firstTerm = Lunar.getTerm(year, month * 2); //某月第一个节气开始日期
    var GanZhiYear = (month > 1 || month == 1 && day >= term2) ? year + 1 : year; //干支所在年份
    var GanZhiMonth = day >= firstTerm ? month + 1 : month; //干支所在月份（以节气为界）

    var lunarDate = Lunar.getLunarByBetween(year, month, day);
    var lunarLeapMonth = Lunar.getLunarLeapYear(lunarDate[0]);
    var lunarMonthName = '';
    if (lunarLeapMonth > 0 && lunarLeapMonth == lunarDate[1]) {
        lunarMonthName = '闰' + DATA.monthCn[lunarDate[1] - 1] + '月';
    } else if (lunarLeapMonth > 0 && lunarDate[1] > lunarLeapMonth) {
        lunarMonthName = DATA.monthCn[lunarDate[1] - 1] + '月';
    } else {
        lunarMonthName = DATA.monthCn[lunarDate[1]] + '月';
    }

    //农历节日判断
    var lunarFtv = '';
    var lunarMonthDays = Lunar.getLunarYearDays(lunarDate[0]).monthDays;
    //除夕
    if (lunarDate[1] == lunarMonthDays.length - 1 && lunarDate[2] == lunarMonthDays[lunarMonthDays.length - 1]) {
        lunarFtv = lunarFestival['d0100'];
    } else if (lunarLeapMonth > 0 && lunarDate[1] > lunarLeapMonth) {
        lunarFtv = lunarFestival[formateDayD4(lunarDate[1] - 1, lunarDate[2])];
    } else {
        lunarFtv = lunarFestival[formateDayD4(lunarDate[1], lunarDate[2])];
    }

    var res = {
        zodiac: Lunar.getYearZodiac(GanZhiYear),
        GanZhiYear: Lunar.getLunarYearName(GanZhiYear),
        GanZhiMonth: Lunar.getLunarMonthName(year, GanZhiMonth),
        GanZhiDay: Lunar.getLunarDayName(year, month, day),
        //放假安排：0无特殊安排，1工作，2放假
        worktime: worktime['y' + year] && worktime['y' + year][formateDayD4(month, day)] ? worktime['y' + year][formateDayD4(month, day)] : 0,
        term: termList[formateDayD4(month, day)],

        lunarYear: lunarDate[0],
        lunarMonth: lunarDate[1] + 1,
        lunarDay: lunarDate[2],
        lunarMonthName: lunarMonthName,
        lunarDayName: DATA.dateCn[lunarDate[2] - 1],
        lunarLeapMonth: lunarLeapMonth,

        solarFestival: solarFestival[formateDayD4(month, day)],
        lunarFestival: lunarFtv
    };

    return res;
};

/**
 * 获取指定公历月份的农历数据
 * return res{Object}
 * @param {Number} year,month 公历年，月
 * @param {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始
 */
Lunar.calendar = function(_year, _month, fill) {
    var inputDate = formateDate(_year, _month);
    if (inputDate.error) return inputDate;
    var year = inputDate.year;
    var month = inputDate.month;

    var calendarData = Lunar.solarCalendar(year, month + 1, fill);
    for (var i = 0; i < calendarData.monthData.length; i++) {
        var cData = calendarData.monthData[i];
        var lunarData = Lunar.solarToLunar(cData.year, cData.month, cData.day);
        utils.extend(calendarData.monthData[i], lunarData);
    }
    return calendarData;
};

/**
 * 公历某月日历
 * return res{Object}
 * @param {Number} year,month 公历年，月
 * @param {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始 (7*6阵列)
 */
Lunar.solarCalendar =function(_year, _month, fill) {
    var inputDate = formateDate(_year, _month);
    if (inputDate.error) return inputDate;
    var year = inputDate.year;
    var month = inputDate.month;

    var firstDate = new Date(year, month, 1);
    var preMonthDays, preMonthData, nextMonthData;

    var res = {
        firstDay: firstDate.getDay(), //该月1号星期几
        monthDays: Lunar.getSolarMonthDays(year, month), //该月天数
        monthData: []
    };
    res.monthData = creatLenArr(year, month + 1, res.monthDays, 1);

    if (fill) {
        if (res.firstDay > 0) { //前补
            var preYear = month - 1 < 0 ? year - 1 : year;
            var preMonth = month - 1 < 0 ? 11 : month - 1;
            preMonthDays = Lunar.getSolarMonthDays(preYear, preMonth);
            preMonthData = creatLenArr(preYear, preMonth + 1, res.firstDay, preMonthDays - res.firstDay + 1);
            res.monthData = preMonthData.concat(res.monthData);
        }

        if (7 * 6 - res.monthData.length != 0) { //后补
            var nextYear = month + 1 > 11 ? year + 1 : year;
            var nextMonth = month + 1 > 11 ? 0 : month + 1;
            var fillLen = 7 * 6 - res.monthData.length;
            nextMonthData = creatLenArr(nextYear, nextMonth + 1, fillLen, 1);
            res.monthData = res.monthData.concat(nextMonthData);
        }
    }
    return res;
};

module.exports = Lunar;
