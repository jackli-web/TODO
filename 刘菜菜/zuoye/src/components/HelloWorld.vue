<template>
  <div>
    <div>这是hello首页</div>
    <div><button @click="jumpto('cart')">点击进入商品列表页</button></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    jumpto(str) {
      this.$router.push({
        name: str,
      });
    },
  },
};
</script>

<style scoped>
</style>