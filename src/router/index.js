import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmRoutes from './modules/film'
Vue.use(VueRouter)
const routes = [
  //重定向
  {
    path:'/',
    redirect:'film/nowPlaying'
  },
  ...FilmRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
