'use strict';
// import etl from 'etl-collections'
const utf8 = require('utf8');
const etl = require('etl-collections');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let result = etl.mobile.query(event.tel)
	console.log('11111')
	console.log('result' + result)
	const url = "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel="+event.tel;
	if (JSON.stringify(result) === '{}') {
		const res = await uniCloud.httpclient.request(url, {
		    method: 'GET',
		    dataType: 'text'
		  })
		  console.log(res.data)
		var telStringReg = /telString:'(\d+)'/g;
		let tel = telStringReg.exec(res.data);
		var telProvinceReg = /province:'(.+?)'/g;
		let telProvince = telProvinceReg.exec(res.data);
		var telCatNameReg = /carrier:'(.+?)'/g;
		let telCatName = telCatNameReg.exec(res.data);
		var telAreaVidReg = /areaVid:'(.+?)'/g;
		let telArea = telAreaVidReg.exec(res.data);
		result = {
			city:'',
			telNumber: tel[1],
			province: telProvince[1],
			type: telCatName[1],
		}
	}
	return result
};
