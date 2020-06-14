'use strict';
exports.main = async (event, context) => {
  //event为客户端上传的参数
	if(event.ip=='127.0.0.1'){
		return context.CLIENTIP
	}else{
		let url ='http://api.map.baidu.com/location/ip?ak=fepE9S7tmruLPt5Z6vqNCNzRk1n9EGe8&ip='+event.ip+'&coor=bd09ll'
	const res = await uniCloud.httpclient.request(url, {
	    method: 'GET',
	    dataType: 'json'
	  })
	return res.data
	}
	
};
