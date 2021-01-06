<template>
  <div class="book" @click="xiangqing(bookData)">
    <img :src="bookData.imgUrl" alt="">
  </div>
</template>

<script>
export default {
name:'books',
props:['bookData'],
methods:{
  xiangqing(item){
    this.$router.push({name:'products',query:item})
  }
}
}
</script>
<style lang="less" scoped>
  .book{
    width: 26.6667vw;
    height: 37.6vw;
    background: antiquewhite;
    margin-bottom: 9.8667vw;
    img{
      width: 26.6667vw;
      height: 37.6vw;
    }
  }
</style>