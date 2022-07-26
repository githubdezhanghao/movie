<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff5f16" inactive-color="#000">
      <van-tabbar-item replace to="/film/nowPlaying">
        <template slot="icon">
          <span class="iconfont icon-dianying"></span></template
        >电影</van-tabbar-item
      >
      <van-tabbar-item replace to="/cinema">
        <template slot="icon"
          ><span class="iconfont icon-yingyuan"></span></template
        >影院</van-tabbar-item
      >
      <van-tabbar-item replace to="/news">
        <template slot="icon"
          ><span class="iconfont icon-zixun"></span></template
        >咨询</van-tabbar-item
      >
      <van-tabbar-item replace to="/ucenter">
        <template slot="icon"><span class="iconfont icon-wode"></span></template
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import "../assets/icon/iconfont.css";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  mounted() {
    switch (this.$route.path) {
      case "/":
        this.active = 0;
        break;
      case "/cinema":
        this.active = 1;
        break;
      case "/news":
        this.active = 2;
        break;
      case "/ucenter":
        this.active = 3;
        break;
    }
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar-item__icon {
  > span {
    font-size: 22px;
  }
}
</style>