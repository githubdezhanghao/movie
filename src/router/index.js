import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmRoutes from './modules/film'
import CinemaRoutes from './modules/cinema'
import NewsRoutes from './modules/news'
import UcenterRoutes from './modules/ucenter'
Vue.use(VueRouter)
const routes = [
  //重定向
  {
    path:'/',
    redirect:'/film/nowPlaying'
  },
  {
    path:'/city',
    component:()=>import('@/views/city.vue')
  },
  {
    path:'/vuex',
    component:()=>import('@/vuex.vue')
  },
  //将数组元素一个一个放进来
  ...FilmRoutes,
  ...CinemaRoutes,
  ...NewsRoutes,
  ...UcenterRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
