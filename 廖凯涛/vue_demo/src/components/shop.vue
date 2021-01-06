<template>
 <div>
  <headzj></headzj>
 
      <div>购物车</div>
      <div class="unit" v-for="(item,index) in arr" :key="index">
          <div>{{item.bookName}}</div>
          <div>{{item.count}}</div>
      </div>
  </div>

</template>

<script>
import headzj from './headzj.vue'
export default {
  components: { headzj },
  data(){
      return{
          arr:this.$store.state.orders
      }
  },
   computed:{
         storeorders:function(){
            return this.$store.state.current
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