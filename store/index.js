import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let r = [false,true,true,true,true]
let r1 = new  Array(18).fill(false)
r = [...r,...r1]

let f = []
for(var i=0;i<23;i++){
	f.push(false)
}


const store = new Vuex.Store({  
    state: {  
     CurrencyPick : [
    	'美元',//1
    	'欧元',//2
    	'港币',//3
    	'日元',//4
    	'英镑',//5
    	'澳大利元',//6
    	'加拿大元',//7
    	'泰国铢',//8
    	'新加坡元',//9
    	'瑞士法郎',//10
    	'丹麦克朗',//11  
    	'澳门元',//12
    	'马来西亚林吉特',//13
    	'挪威克朗',//14
    	'新西兰元',//15
    	'菲律宾比索',//16  
    	'卢布',//17
    	'瑞典克朗',//18 
    	'新台币',//19
    	'巴西雷亚尔',//20 
    	'韩国元',//21
    	'南非兰特',//22 
    	'人民币'//23
    	],
		CurrencyName: [
			'USD',//1
			'EUR',//2
			'HKD',//3
			'JPY',//4
			'GBP',//5
			'AUD',//6
			'CAD',//7
			'THB',//8
			'SGD',//9
			'CHF',//10
			'DKE',//11  0
			'MOP',//12
			'MYR',//13
			'NWD',//14 0
			'NZD',//15 
			'PSO',//16 0
			'RUB',//17
			'SEK',//18 
			'TWD',//19
			'BRL',//20 0
			'KRD',//21
			'SAR',//22 0
			'CNY',//23 
			
		],
		flag : r,
		flag2: f,
		index : '0',
		
		
    },  
     
})  
export default store