<template>
  <div class="goodslist">
    <goods-top></goods-top>
    <goods-conent></goods-conent>
    <goods-foot></goods-foot>
  </div>
</template>

<script>
import GoodsTop from "./goodsitem/GoodsTop.vue";
import GoodsConent from "./goodsitem/GoodsConent.vue";
import GoodsFoot from "./goodsitem/GoodsFoot.vue";

export default {
  methods:{
  },
  components: {
    GoodsTop,
    GoodsConent,
    GoodsFoot
  },
};
</script>

<style lang="less" scoped>
.goodslist {
  height: 216.5333vw;
}
</style>