<template>
  <div class="book">
      <img class="bookicon" :src="seftinfo.imgUrl" alt @click="jumpto(seftinfo.str)" />

  </div>
</template>

<script>
export default {
    props:['seftinfo'],
    methods:{
     jumpto(str) {
      this.$router.push({ name: 'bookpage', query:this.seftinfo});
    },
    }
}
</script>

<style lang="less" scoped>
.book {
      width: 26.9542vw;
      height: 38.0054vw;
      margin-bottom: 10.2426vw;
      filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
      .bookicon {
        width: 100%;
        height: 100%;
      }
    }
</style>

