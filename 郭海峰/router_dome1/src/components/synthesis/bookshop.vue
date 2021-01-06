<template>
  <div class="main">
    <div class="top">
      <div class="top-left" @click="goback"><van-icon name="arrow-left" /></div>
      <div class="top-content">{{ title }}</div>
      <div class="top-right" @click="gomychat">
        <img src="../../assets/images/Iconionic-ios-cart.png" alt="" />
      </div>
    </div>
    <router-view class="content"></router-view>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "cart"
    };
  },
  methods: {
    goback() {
    this.$router.go(-1)
    },
    gomychat(){
      this.$router.push({name:'shopchat'})
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 12.5333vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  .top-left {
    .van-icon::before {
      font-size: 6.4vw;
    }
  }
  .top-content {
    width: 45.6667vw;
    text-align: center;
    height: 6.4vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    line-height: 6.4vw;
  }
}

</style>
