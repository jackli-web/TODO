<template>
  <div class="goodsdetail">
    <goods-top>
      <slot slot="center"><span>Products</span></slot>
    </goods-top>
    <detail-conent  @add="add" @sub="sub" :count="count"></detail-conent>
    <detail-foot :count="count"></detail-foot>
  </div>
</template>

<script>
import GoodsTop from "./goodsitem/GoodsTop.vue";
import DetailConent from "./detailtem/DetailConent.vue";
import DetailFoot from "./detailtem/DetailFoot.vue";
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    add(){
      this.count++
    },
    sub(){
     if(this.count==1)return
      this.count--
    }
  },
  components: {
    GoodsTop,
    DetailConent,
    DetailFoot,
  },
};
</script>

<style>
</style>