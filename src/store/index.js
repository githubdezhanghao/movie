import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //初始化的状态
  state: {
    num: localStorage.getItem('num') ?  localStorage.getItem('num') :100
  },
  // 编写方法获取数据 并且对于数据进行处理
  //监控器  当数据发生改变时会触发
  getters: {
  },
  //同步修改方法
  mutations: {
    //传入State进行操作
    //payload 载荷  就是一个参数
    add(state,payload){
      //根据传入的参数payload 进行对num数的增加
      state.num += payload
      localStorage.setItem('num',state.num)
    }
  },
  //异步修改方法
  actions: {
  },
  modules: {
  }
})
