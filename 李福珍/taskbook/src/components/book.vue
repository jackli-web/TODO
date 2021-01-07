<template>
  <div class="book">
    <img @click="jumpto(selfinfo.str)" class="bookicon"  :src="selfinfo.imgUrl" alt="">
  </div>
</template>

<script>
  export default {
    props:['selfinfo'],
    methods:{
      jumpto:function(str){
        this.$store.commit('self',this.selfinfo)
        this.$router.push({name:'products3'})
      }
    }

  }
</script>
<style lang="less" scoped>
  .book{
    border:1px solid black;
    width:26.9542vw;
    height:38.0054vw;
    //  margin-bottom:10.2426vw;

    .bookicon{
      width:100%;
      height:100%;
    }
  }

</style>
