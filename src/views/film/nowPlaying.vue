<template>
  <div>
    正在热映
    <van-button type="primary">按钮</van-button>
    <hr />
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
import url from "../../config/url";
//引入vant组件
import Vue from "vue";
import { Button,Calendar,Cell } from "vant";
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Cell);
export default {
  data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
  created() {
    this.$http.get(url.nowPlaying).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>