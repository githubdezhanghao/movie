<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <Card
        v-for="item in films"
        :key="item.filmId"
        text="预购"
        :isPresale="item.isPresale"
      >
        <template v-slot:left>
          <img :src="item.poster" />
        </template>
        <template v-slot:center>
          <div class="van-ellipsis">
            {{ item.name }}
            <span class="filmType">{{ item.filmType.name }}</span>
          </div>
          <div>
            <div class="van-ellipsis">
              主演：{{ item.actors | parseActors }}
            </div>
            <div>上映日期:{{ item.premiereAt | parseTime }}</div>
          </div>
        </template>
      </Card>
    </van-list>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import url from "@/config/url";
import moment from "moment";
import Vue from "vue";
import { List } from "vant";
Vue.use(List);
export default {
  components: { Card },
  data() {
    return {
      films: [],
      loading: false,
      finished: false,
      pageNum:1,
      total:0
    };
  },
  created() {
    this.$http.get(url.comingSoon).then((res) => {
      // console.log(res);
      this.films = res.data.data.films;
      this.total = res.data.data.total;
    });
  },
  methods: {
    onLoad() {
      if(this.pageNum === Math.ceil(this.total/10)){
        this.finished = true
        return
      }
      this.$http.get(url.comingSoon, { params: { pageNum:this.pageNum + 1 } }).then((res) => {
        // console.log(res);
        this.films = [...this.films,...res.data.data.films];
        this.pageNum += 1        
        this.total = res.data.data.total
        this.loading = false
      });
    },
    
  },
  filters: {
      parseTime(timestamp) {
        moment.locale("zh-cn");
        return moment(parseInt(timestamp * 1000)).format("ddd M月D日");
      },
    },
};
</script>

<style lang="scss" scoped>
</style>