<template>
  <div>
    <van-nav-bar
      title="电影"
       :border="false"
       v-show='navBarStatus'
       >
      <template slot="left">
        <span>北京</span>
        <van-icon name="arrow-down" />
        </template>
        </van-nav-bar>
    <van-tabs title-active-color="#ff5f16" :line-height="2" :line-width="55">
      <van-tab title="正在热映" replace to="/film/nowPlaying"></van-tab>
      <van-tab title="即将上映" replace to="/film/comingSoon"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, NavBar,Icon } from "vant";
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      //导航栏显示状态
      navBarStatus: false
    }
  },
};
</script>
<style lang="scss" scoped>
// 样式穿透 ::v-deep
::v-deep .van-tabs__line {
  background-color: #ff5f16;
}
::v-deep .van-nav-bar__text,.van-icon-arrow-down{
  color:black
}
</style>