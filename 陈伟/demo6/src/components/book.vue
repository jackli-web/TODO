<template>
<div class="book">
  <!-- {{selfinfo}} -->
  <!-- @click="dosome" -->
  <img  @click="jumpto" class="bookicon" :src="selfinfo.imgUrl">
</div>

</template>

<script>
export default {
props:["selfinfo"],
methods: {
  // dosome(){
  //   this.$emit("fix");
  // }
 jumpto:function(){
            this.$router.push({name:'products',query:this.selfinfo})
        }

},
}
</script>

<style lang='less' scoped>

 .book {
        border: 1px solid black;
        width: 26.9542vw;
        height: 38.0054vw;
        margin-bottom: 10.2426vw;
        .bookicon {
          width: 100%;
          height: 100%;
        }
      }
</style>
