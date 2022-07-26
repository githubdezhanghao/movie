import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入封装后的axios
import  axios from './http/req'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
