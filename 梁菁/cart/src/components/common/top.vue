<template>
  <div class="top">
    <div class="top_left">
      <span class="iconfont icon-zuojiantou" @click="jump"></span>
    </div>
    <div class="top_center">
      <span>{{ title }}</span>
    </div>
    <div class="top_right" @click="jumpto">
      <span class="iconfont icon-tianchongxing-"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    jumpto() {
      this.$router.push({
        name: 'payment'
      })
    },
    jump() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  width: 100vw;
  height: 24.2667vw;
  background-color: #fff;
  .top_left {
    width: 9vw;
    height: 100%;
    margin-top: 11.7333vw;
    span {
      display: block;
      width: 5.3333vw;
      height: 5.3333vw;
      float: right;
      text-align: right;
      font-size: 5.3333vw;
      line-height: 12.5333vw;
    }
  }
  .top_center {
    width: calc(100vw - 9vw - 9vw);
    text-align: center;
    line-height: 12.5333vw;
    font-size: 4.2667vw;
    font-weight: bold;
    font-family: "Open Sans";
    span {
      display: block;
      width: calc(100vw - 9vw - 9vw);
      height: 5.3333vw;
      margin-top: 11.7333vw;
      text-align: center;
      line-height: 12.5333vw;
      font-size: 4.2667vw;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .top_right {
    width: 9vw;
    height: 100%;
    margin-top: 11.7333vw;
    span {
      display: block;
      width: 5.3333vw;
      height: 5.3333vw;
      float: left;
      text-align: left;
      font-size: 5.3333vw;
      line-height: 12.5333vw;
    }
  }
}
</style>