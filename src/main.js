import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入封装后的axios
import  axios from './http/req'
import parseActors from './filters/parseActors'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.filter('parseActors',parseActors) 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
