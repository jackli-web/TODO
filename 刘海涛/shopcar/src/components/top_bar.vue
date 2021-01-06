<template>
  <div class="hello">
    <div class="top">
      <div class="img_j" @click="jumpTo">
        <img src="../assets/Icon ionic-ios-arrow-back.png" alt="" />
      </div>
      <slot class="good_c"></slot>

      <div class="img_s"><img src="../assets/Path 3.png" alt="" /></div>
    </div>
    <div class="nu"></div>
  </div>
</template>

<script>
export default {
  name: "top_bar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    jumpTo() {
      this.$router.push({
        name: "HelloWorld",
        /* query: {
          str: this.info[index],
        }, */
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100vw;
  height: 24.2667vw;
  background-color: #ffffff;
  .img_j {
    margin: 14.4vw 0 0 6.4vw;
    width: 2.9333vw;
    height: 5.3333vw;
    background-color: #000000;
  }
  .good_c {
    margin-top: 14.6667vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .img_s {
    margin: 14.6667vw 6.1333vw 0 0;
    width: 5.3333vw;
    height: 5.0667vw;
    background-color: #000000;
  }
}
.nu {
  height: 2.6667vw;
}
</style>
