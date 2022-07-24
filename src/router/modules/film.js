import Film from '@/views/film/film.vue'
const routes = [
  {
    path:'/film',
    //渲染的组件对象
    component:Film,
  //嵌套路由
  children:[
    {
      path:'nowPlaying',
      component:()=>import('../../views/film/nowPlaying.vue')
    },
    {
      path:'comingSoon',
      component:()=>import('../../views/film/comingSoon.vue')
    }
  ]
  }
]

export default routes