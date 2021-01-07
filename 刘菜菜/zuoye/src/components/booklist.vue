<template>
  <div>
    <div class="booklist">
      <img class="img" :src="booklist.imgUrl" alt="" @click="jumpto" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["booklist"],
  methods: {
    jumpto() {
      this.$router.push({
        name: "products",
        query: this.booklist,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.booklist {
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-bottom: 9.8667vw;
}
.img {
  width: 26.6667vw;
  height: 37.6vw;
  padding: 0;
  margin: 0;
}
</style>