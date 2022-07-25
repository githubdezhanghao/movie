<template>
  <div>
    <!-- movie2202 -->
    <!-- 将路由加载到的组件 渲染出来 -->
    <!-- 渲染容器 -->
    <router-view></router-view>
    <!-- 引入显示底部导航菜单 -->
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
  export default {
  components: { Footer },
    
  }
</script>

<style lang="scss" scoped>

</style>