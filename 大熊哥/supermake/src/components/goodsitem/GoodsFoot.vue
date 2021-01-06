<template>
  <div class="goodsfoot">
    <div class="foot-t">
      <van-icon name="wap-home-o" />
      <van-icon name="search" />
      <van-icon name="like-o" />
      <van-icon name="contact" />
    </div>
    <div class="foot-f"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goodsfoot {
   position: fixed;
   margin-top:9.6vw ;
   bottom:0;
  padding-top: 4.2667vw;
  width: 100vw;
  height: 22.1333vw;
  .foot-t {
    padding-top: 4vw;
    height: 13.0667vw;
    background-color: #fff;
    .van-icon{
      font-size: 6.4vw;
      &:nth-child(1){
        margin-left: 10.6667vw;
      }
       &:nth-child(2){
        margin-left: 17.4667vw
      }
       &:nth-child(3){
        margin-left: 18vw
      }
      &:nth-child(4){
        margin: 0 10.6667vw 0 13.95vw
      }
    }
  }
  .foot-f{
    height: 9.0667vw;
    background-color: #000;
  }
}
</style>