<template>
  <div class="goodstop">
    <div class="top-l" @click="goback()">
      <img src="@/assets/img/小于.png" alt="" />
    </div>
    <div class="top-m">
      <slot name="center"><span>Cart</span></slot>
    </div>
    <div class="top-r">
      <img src="@/assets/img/购物车.png" alt=""  @click="go"/>
    </div>
  </div>
</template>

<script>
export default {

methods:{
  goback(){
    this.$router.go(-1)
  },
  go(){
    this.$router.push('/goodscart')
  }
}


};
</script>

<style lang="less" scoped>
.goodstop {
  display: flex;
  box-sizing: border-box;
  padding: 14.9333vw 0 4vw 6.6667vw;
  width: 100vw;
  height: 24.2667vw;
  background-color: #ffffff;
  .top-l {
    width: 2.9333vw;
    height: 5.3333vw;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .top-m {
    margin-left: 35.7333vw;
    width: 8.5333vw;
    height: 3.4667vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .top-r {
    margin:0 5.8667vw 0 34.1333vw;
    width: 5.3333vw;
    height: 5.0667vw;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>