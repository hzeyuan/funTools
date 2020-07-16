import Vue from 'vue'
import App from './App'
import utils from 'utils/index.js'


import cuCustom from './colorui/components/cu-custom.vue'
import store from './store'  
Vue.prototype.$store = store  
Vue.component('cu-custom',cuCustom)
Vue.prototype.utils = utils
Vue.config.productionTip = false
//使用微信的setData
Vue.prototype.setData = function(obj){
                let that = this;
                let keys = [];
                let val,data;
                Object.keys(obj).forEach(function(key){
                    keys = key.split('.');
                    val = obj[key];
                    data = that.$data;
                    keys.forEach(function(key2,index){
                        if(index+1 == keys.length){
                            that.$set(data,key2,val);
                        }else{
                            if(!data[key2]){
                                that.$set(data,key2,{});
                            }
                        }
                        data = data[key2];
                    })
                });
            }
App.mpType = 'app'

const app = new Vue({

	...App
})
app.$mount()

 



