var etl = require('..');

// idcard
console.log(etl.idcard.query('371501199112025093'));
console.log(etl.idcard.getArea('371501199112025093'));
console.log(etl.idcard.getBirthday('371501199112025093'));
console.log(etl.idcard.getGender('371501199112025093'));
console.log(etl.idcard.isIdcard('371501199112025093'));

// mobile
console.log(etl.mobile.query('15101332143'));
console.log(etl.mobile.getCountry('+8615101332143'));
console.log(etl.mobile.getInfo('CN'));

// lunar
console.log(etl.lunar.getLunarLeapYear(2017));
console.log(etl.lunar.getLunarYearDays(2017));
console.log(etl.lunar.getLunarByBetween(2017,1,22));
console.log(etl.lunar.getDaysBetweenSolar(2017,1,22,2017,4,12));
console.log(etl.lunar.getDaysBetweenZheng(2017,1,22));
console.log(etl.lunar.getTerm(2017,5));
console.log(etl.lunar.getYearTerm(2017));
console.log(etl.lunar.getYearZodiac(2017));
console.log(etl.lunar.cyclical(2017));
console.log(etl.lunar.getLunarYearName(2017,10));
console.log(etl.lunar.getLunarDayName(2017,1,12));
console.log(etl.lunar.getSolarMonthDays(2017,1));
console.log(etl.lunar.isLeapYear(2017));
console.log(etl.lunar.lunarToSolar(2016,12,23));
console.log(etl.lunar.solarToLunar(2017,1,20));
console.log(etl.lunar.calendar(2017,1,true));
console.log(etl.lunar.solarCalendar(2017,1,false));
