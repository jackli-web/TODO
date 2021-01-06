<template>
  <div>
      <div>购物车</div>
      <div class="unit" v-for="(item,index) in storeorders" :key="index">
          <div>{{item.bookName}}</div>
          <div>{{item.count}}</div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
         storeorders:function(){
            return this.$store.state.orders
        }
    }
}
</script>

<style scoped lang="less">
.unit{
    border:1px solid red;
    padding: 20px;
}
</style>