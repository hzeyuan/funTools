import Vue from 'vue'
import App from './App'
import utils from 'utils/index.js'




import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.prototype.utils = utils
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



