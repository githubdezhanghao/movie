<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="item in cityList">
        <van-index-anchor :key="item.index" :index="item.index">{{
          item.index
        }}</van-index-anchor>
        <van-cell
          v-for="item1 in item.cities"
          :key="item1.cityId"
          :title="item1.name"
          @click="goFilm(item1)"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";

Vue.use(IndexBar);
Vue.use(Cell);
Vue.use(IndexAnchor);
import url from "@/config/url";
export default {
  data() {
    return {
      indexList: [],
      cityList: [],
    };
  },
  created() {
    this.$http.get(url.cityList).then((res) => {
      console.log(res);
      this.parseIndexList(res);
      this.parseCityList(res);
    });
  },
  methods: {
    parseIndexList(res) {
      let indexList = [];
      res.data.data.cities.forEach((item, index) => {
        let letter = item.pinyin.slice(0, 1).toUpperCase();
        if (!indexList.includes(letter)) {
          indexList.push(letter);
        }
      });
      this.indexList = indexList.sort();
    },
    parseCityList(res) {
      let cityList = [];
      this.indexList.forEach((item, index) => {
        let obj = { index: item };
        let cities = res.data.data.cities.filter((item1, index1) => {
          if (item1.pinyin.slice(0, 1).toUpperCase() === item) {
            return item1;
          }
        });
        obj.cities = cities;
        cityList.push(obj);
      });
      this.cityList = cityList;
    },
    goFilm(item1){
      // this.$router.push({path:this.$route.query.back,query:{cityId}})
      localStorage.setItem('cityId',item1.cityId)
      localStorage.setItem('cityName',item1.name)
      this.$router.push({path:this.$route.query.back})
    }
  },
};
</script>

<style lang="scss" scoped>
</style>