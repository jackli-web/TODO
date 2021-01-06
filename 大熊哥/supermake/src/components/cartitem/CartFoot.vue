<template>
  <div class="cartfoot">
    <div class="cartfoot-h" @click="showdialog">Buy Now</div>
    <div class="cartfoot-b"></div>
  </div>
</template>

<script>
export default {
  methods:{
    showdialog(){
      this.$emit('showdialog')
    }
  }
};
</script>

<style lang="less" scoped>
.cartfoot {
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  padding-top: 3.7333vw;
  height: 29.6vw;
  background-color: #fff;
  .cartfoot-h {
    margin: 0 25.3333vw 0 25.0667vw;
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    background-color: #060aff;
    text-align: center;
    line-height:9.8667vw ;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
  }
  .cartfoot-b {
    margin-top: 6.6667vw;
    height: 9.0667vw;
    background-color: #000000;
  }
}
</style>