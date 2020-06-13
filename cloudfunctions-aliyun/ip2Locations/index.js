'use strict';
exports.main = async (event, context) => {
  //event为客户端上传的参数
	if(event.ip=='127.0.0.1'){
		return context.CLIENTIP
	}else{
		let url ='https://restapi.amap.com/v3/ip?ip='+event.ip+'&output=json&key=0789bfd05dd62c4c94f4c9b73d8baa88'
	const res = await uniCloud.httpclient.request(url, {
	    method: 'GET',
	    dataType: 'json'
	  })
	if(res.data.status==0){
		return {}
	}
	return res.data
	}
	
};
