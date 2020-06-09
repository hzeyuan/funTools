### Lunar Calendar util lib

整合农历与公历之间相互转换，含有二十四节气，天干地支纪年纪月纪日，生肖属相，公历节假日及农历传统节假日信息等功能模块。<br>
[参考](https://github.com/zzyss86/LunarCalendar.git)

#### getLunarLeapYear

+ @param {Number} year 农历年
+ @desc 判断农历年闰月数
+ @return 闰月数 （月份从1开始）
+ @example

```js
etl.lunar.getLunarLeapYear(2017) => 6
```

#### getLunarYearDays

+ @param {Number} year 农历年
+ @desc 获取农历年份一年的每月的天数及一年的总天数
+ @return {}
    - yearDays 该年的天数
    - monthDays 该年每月的天数
+ @example

```js
etl.lunar.getLunarYearDays(2017)
=>
{ yearDays: 384,
  monthDays: [ 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 30, 30 ] }
```

#### getLunarByBetween

+ @param 公历年月日
    - {Number} year
    - {Number} month
    - {Number} day
+ @desc 根据距离正月初一的天数计算农历日期
+ @return []
+ @example

```js
etl.lunar.getLunarByBetween(2017,1,22)
=>
[ 2017, 0, 26 ]
```

#### getDaysBetweenSolar

+ @param 公历年月日
    - {Number} year
    - {Number} month
    - {Number} day
    - {Number} year1
    - {Number} month1
    - {Number} day1
+ @desc 两个公历日期之间的天数
+ @return {Number}
+ @example

```js
etl.lunar.getDaysBetweenSolar(2017,1,22,2017,4,12) => 79
```
#### getDaysBetweenZheng

+ @param 农年，月(0-12，有闰月)，日
    - {Number} year
    - {Number} month
    - {Number} day
+ @desc 计算农历日期离正月初一有多少天
+ @return {Number}
+ @example

```js
etl.lunar.getDaysBetweenZheng(2017,1,22) => 50
```

#### getTerm

+ @param
    - {Number} y 公历年
    - {Number} n 第几个节气，从0小寒起算
+ @desc 某年的第n个节气为几日
    - 31556925974.7为地球公转周期，是毫秒
    - 1890年的正小寒点：01-05 16:02:31，1890年为基准点
    - 由于农历24节气交节时刻采用近似算法，可能存在少量误差(30分钟内)
+ @return {Number}
+ @example

```js
etl.lunar.getTerm(2017,5) => 20
```

#### getYearTerm

+ @param {Number} y 公历年
+ @desc 获取公历年一年的二十四节气
+ @return {}
+ @example

```js
etl.lunar.getYearTerm(2017)
=>
{ d0105: '小寒',
  d0120: '大寒',
  ...
  d1207: '大雪',
  d1221: '冬至' }
  ```

#### getYearZodiac

+ @param {Number} year 干支所在年（默认以立春前的公历年作为基数）
+ @desc 获取生肖
+ @return {String}
+ @example

```js
etl.lunar.getYearZodiac(2017) => 猴
```

#### cyclical

+ @param {Number} num 60进制中的位置(把60个天干地支，当成一个60进制的数)
+ @desc 计算天干地支
+ @return {String}
+ @example

```js
etl.lunar.cyclical(2017) => 辛丑
```
#### getLunarYearName

+ @param
    - {Number} year 干支所在年
    - {Number} offset 偏移量，默认为0，便于查询一个年跨两个干支纪年（以立春为分界线）
+ @desc 获取干支纪年
+ @return {String}
+ @example

```js
etl.lunar.getLunarYearName(2017,10) => 丙午
```
#### getLunarDayName

+ @param {Number} year,month,day 公历年，月，日
+ @desc 获取干支纪日
+ @return {String}
+ @example

```js
etl.lunar.getLunarDayName(2017,1,12) => 庚午
```

#### getSolarMonthDays

+ @param
    - {Number} year 公历年
    - {Number} month 公历月
+ @desc 获取公历月份的天数
+ @return {Number}
+ @example

```js
etl.lunar.getSolarMonthDays(2017,1) => 28
```

#### isLeapYear

+ @param {Number} year 公历年
+ @desc 判断公历年是否是闰年
+ @return {Boolean}
+ @example

```js
etl.lunar.isLeapYear(2017) => false
```

#### lunarToSolar

+ @param {Number} year,month,day 农历年，月(1-13，有闰月)，日
+ @desc 将农历转换为公历
+ @return {}
    - year 公历年
    - month 公历月
    - day 公历日
+ @example

```js
etl.lunar.lunarToSolar(2016,12,23)
=>
{ year: 2017, month: 1, day: 20 }
```

#### solarToLunar

+ @param {Number} year,month,day 公历年，月，日
+ @desc 将公历转换为农历
+ @return {}
+ @example

```js
etl.lunar.solarToLunar(2017,1,20)
=>
{ zodiac: '猴',
  GanZhiYear: '丙申',
  GanZhiMonth: '辛丑',
  GanZhiDay: '丁未',
  worktime: 0,
  term: '大寒',
  lunarYear: 2016,
  lunarMonth: 12,
  lunarDay: 23,
  lunarMonthName: '十二月',
  lunarDayName: '廿三',
  lunarLeapMonth: 0,
  solarFestival: undefined,
  lunarFestival: '小年' }
```

#### calendar

+ @param
    - {Number} year,month 公历年，月
    - {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始
+ @desc 获取指定公历月份的农历数据
+ @return {}
+ @example

```js
etl.lunar.calendar(2017,1,false)
=>
{
  firstDay: 0,
  monthDays: 31,
  monthData:
   [{ year: 2017,
       month: 1,
       day: 1,
       zodiac: '猴',
       GanZhiYear: '丙申',
       GanZhiMonth: '庚子',
       GanZhiDay: '戊子',
       worktime: 0,
       term: undefined,
       lunarYear: 2016,
       lunarMonth: 12,
       lunarDay: 4,
       lunarMonthName: '十二月',
       lunarDayName: '初四',
       lunarLeapMonth: 0,
       solarFestival: '元旦节',
       lunarFestival: undefined
   },...]
}
```

#### solarCalendar

+ @param
    - {Number} year,month 公历年，月
    - {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始
+ @desc 获取指定公历月份的农历数据
+ @return {}
+ @example

```js
etl.lunar.solarCalendar(2017,1,false)
=>
{ firstDay: 0,
  monthDays: 31,
  monthData:
   [ { year: 2017, month: 1, day: 1 },
     { year: 2017, month: 1, day: 2 },
     ...
     { year: 2017, month: 1, day: 31 } ] }
```
