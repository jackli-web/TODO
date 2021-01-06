<template>

    <div class="small-box">
      <div class="zi1" @click="tui"><img class="img1" src="../assets/arrow-left-bold.png" alt=""></div>
      <div class="zi2">dududu</div>
      <div class="zi3" @click="shop"><img class="img2" src="../assets/购物车.png" alt=""></div>
      </div>

</template>

<script>
export default {
methods:{
  tui(){
     this.$router.go(-1)
  },
   shop(){
          this.$router.push('/shop')
      },
}
}
</script>

<style scoped>
  .small-box {
    display: flex;
    width: 100vw;
    height: 12.5333vw;
  }
 .zi1 {
   width: 33.3333vw;
   line-height: 12.5333vw;
 }
  .zi2 {
    line-height: 12.5333vw;
    text-align: center;
    width: 33.3333vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .zi3 {
    line-height: 12.5333vw;
    width: 33.3333vw;
    
  }
  .img1 {
    margin-top: 3.7333vw;
    margin-left:3.4vw;
    width: 6.9333vw;
    height: 5.8667vw;
  }
  .img2 {
     margin-top: 3.7333vw;
    margin-right: 7.2vw;
    float: right;
    width: 6.9333vw;
    height: 5.8667vw;
  }
</style>

