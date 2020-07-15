import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let r = [false,true,true,true,true]
for(var i=0;i<18;i++){
	r.push(false)
}
let f = []
for(var i=0;i<23;i++){
	f.push(false)
}


const store = new Vuex.Store({  
    state: {  
     CurrencyPick : [
    	'美元',
    	'欧元',
    	'港币',
    	'日元',
    	'英镑',
    	'澳大利元',
    	'加拿大元',
    	'泰国铢',
    	'新加坡元',
    	'瑞士法郎',
    	'丹麦克朗',
    	'澳门元',
    	'马来西亚林吉特',
    	'挪威克朗',
    	'新西兰元',
    	'菲律宾比索',
    	'卢布',
    	'瑞典克朗',
    	'新台币',
    	'巴西雷亚尔',
    	'韩国元',
    	'南非兰特',
    	'人民币'
    	],
		CurrencyName: [
			'USD',
			'EUR',
			'HKD',
			'JPY',
			'GBP',
			'ASP',
			'CND',
			'THB',
			'SPD',
			'SFC',
			'DKE',
			'PTA',
			'RGT',
			'NKE',
			'NZD',
			'PSO',
			'RBE',
			'SKA',
			'NTD',
			'BRL',
			'WON',
			'SAR',
			'RMB',
			
		],
		flag : r,
		flag2: f,
		index : '0',
		
		
    },  
     
})  
export default store