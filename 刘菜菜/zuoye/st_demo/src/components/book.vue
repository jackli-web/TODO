<template>
  <div class="book">
     
      <!-- {{selfInfo}} -->
      <img @click="jumpto" class="bookicon" :src="selfInfo.imgUrl" alt="" srcset="">
  </div>
</template>

<script>
export default {
    props:['selfInfo'],
    methods:{
        jumpto:function(){
            this.$router.push({name:'bookDetail',query:this.selfInfo})
        }
    }
}
</script>

<style lang="less" scoped>
     .book{
        border:1px solid black;
        width:26.9542vw;
        height:38.0054vw;
         margin-bottom:10.2426vw;
        .bookicon{
          width:100%;
          height:100%;
         
        }
      }
</style>