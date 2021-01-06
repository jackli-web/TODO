<template>
  <div>
    <div class="head">
      <div class="kong"></div>
      <div class="cart">
        <div @click="back"><img class="tu1"  src="../assets/zuo.png" alt="" /></div>
        <span class="font">{{ uname }}</span>
        <div @click="car"><img class="tu2" src="../assets/Path 3.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["uname"],
  methods:{
    back(){
      this.$router.push('/')
    },
    car(){
      this.$router.push('/buy')
    }
  }
};
</script>

<style lang="less" scoped>
.kong {
  width: 100vw;
  height: 11.7333vw;
  background-color: #fff;
}
.cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 12.5333vw;
  background-color: #fff;
  margin-bottom: 2.6667vw;
  .tu1 {
    width: 2.9333vw;
    height: 5.3333vw;
    margin-left: 6.4vw;
  }
  .font {
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .tu2 {
    width: 5.3333vw;
    height: 5.0667vw;
    margin-right: 6.4vw;
  }
}
</style>