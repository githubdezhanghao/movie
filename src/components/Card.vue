<template>
  <div class="item van-hairline--bottom">
    <!-- 图片 -->
    <div>
      <slot name="left"></slot>
    </div>
    <!-- 信息 -->
    <div>
      <slot name="center"></slot>
    </div>
    <!-- 按钮 -->
    <div style="width:15%">
      <van-button v-if="isPresale" plain :color="color" >{{ text }}</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
    isPresale:{
     type:Boolean,
     default:true
    }
  },
  data() {
    return {
      color: this.text === '预购' ? '#ffb232' : '#ff5f16'
    }
  },
};
</script>

<style lang="scss" scoped>
.item {
  /* padding-top: 10px; */
  padding: 10px;
  display: flex;
  justify-content: space-around;
  /* nth-child(1) 选择子元素的第几个 */
  > div:nth-child(1) {
    > img {
      border-radius: 2px;
      width: 66px;
      height: 95px;
    }
  }
  > div:nth-child(2) {
    width: 50%;
    > div:nth-child(1) {
      font-size: 1.05em;
      font-weight: 500;
    }
    > div:nth-child(2) {
      margin-top: 5px;
      color: gray;
      font-size: 0.85em;
      > div:nth-child(2) {
        margin-top: 2.5px;
        margin-bottom: 2.5px;
        /* 一行显示 超出隐藏  ...代替 */
        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
      }
    }
  }
  > div:nth-child(3) {
    display: flex;
    align-items: center;
    > button {
      height: 25px;
      font-size: 0.8em;
      padding: 0 10px;
    }
  }
}
.filmType {
  color: white;
  background: #d2d6dc;
  border-radius: 2px;
  font-size: 0.7em;
  padding: 0 2px;
}
</style>