<template>
  <div v-if="films.length > 0">
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <Card v-for="item in films" :key="item.filmId">
        <template v-slot:left>
          <img :src="item.poster" />
        </template>
        <template v-slot:center>
          <div class="van-ellipsis">
            {{ item.name }}
            <span class="filmType">{{ item.filmType.name }}</span>
          </div>
          <div>
            <div v-if="item.grade">
              观众评分<span style="color: #ffb232">{{ item.grade }}</span>
            </div>
            <div v-else>暂无评分</div>
            <div class="van-ellipsis">
              主演：{{ item.actors | parseActors }}
            </div>
            <div>{{ item.nation }}|{{ item.runtime }}分钟</div>
          </div>
        </template>
      </Card>
    </van-list>
    <div style="height:50px"></div>
  </div>
</template>

<script>
import url from "../../config/url";
//引入vant组件
import Vue from "vue";
import { Button, Calendar, Cell, List } from "vant";
import Card from "@/components/Card.vue";
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(List);
export default {
  components: { Card },
  data() {
    return {
      films: [],
      loading: false,
      finished: false,
      page: 1,
      total: 0,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData(page = 1) {
      this.$http
        .get(url.nowPlaying, { params: { pageNum: page } })
        .then((res) => {
          console.log(res);
          this.films = [...this.films, ...res.data.data.films];
          this.page += 1;
          this.total = res.data.data.total;
          this.loading = false;
        });
    },
    onLoad() {
      console.log("加载数据");
      if (this.page > Math.ceil(this.total / 10)) {
        this.finished = true;
        return;
      }
      this.loadData(this.page);
    },
  },
  filters: {
    parseActors(actors) {
      let actors_str = "";
      if(actors != null){
        actors.forEach((item) => {
        actors_str += item.name + " "
      });
      }
      return actors_str;
    },
  },
};
</script>

<style lang="scss" scoped>
.filmType {
  color: white;
  background: #d2d6dc;
  border-radius: 2px;
  font-size: 0.8em;
  padding: 0 2px;
}
</style>