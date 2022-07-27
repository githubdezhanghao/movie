<template>
  <div>
    <van-sticky @scroll="changeStatus">
      <van-nav-bar title="电影" :border="false" v-show="navBarStatus">
        <template slot="left">
          <span
            @click="
              $router.push({ path: '/city' ,  query: { back: $route.path } })
            "
            >{{ cityName }}</span
          >
          <van-icon name="arrow-down" />
        </template>
      </van-nav-bar>
      <van-tabs
        v-model="active"
        title-active-color="#ff5f16"
        :line-height="2"
        :line-width="55"
      >
        <van-tab title="正在热映" replace to="/film/nowPlaying"></van-tab>
        <van-tab title="即将上映" replace to="/film/comingSoon"></van-tab>
      </van-tabs>
    </van-sticky>
    <router-view></router-view>
    <div style="height: 50px"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, NavBar, Icon, Sticky } from "vant";
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
export default {
  data() {
    return {
      //导航栏显示状态
      navBarStatus: false,
      active: window.location.pathname === "/film/comingSoon" ? 1 : 0,
      cityName: localStorage.getItem("cityName")
        ? localStorage.getItem("cityName")
        : "北京",
    };
  },
  methods: {
    changeStatus(event) {
      this.navBarStatus = event.scrollTop > 300;
    },
  },
};
</script>
<style lang="scss" scoped>
// 样式穿透 ::v-deep
/* 新版里 样式穿透写法  :deep(选择器) */
:deep(.van-tabs__line) {
  background-color: #ff5f16;
}
:deep(.van-nav-bar__text) {
  color: black;
}
:deep(.van-icon-arrow-down) {
  color: black;
}
:deep(.van-sticky) {
  background-color: #fff;
}
</style>