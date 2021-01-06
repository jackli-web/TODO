<template>
  
  <div>
      <top>Payment</top>
      <son @fix="shuliang" :booksinfos="infoarr"></son>
      <div>
          <div>
              <div>Billing Information</div>
              <div></div>
          </div>
          <div>
              <div>Shipping</div>
              <div></div>
          </div>
          <div>Shipping</div>
          <div>Only 6 left in stock (more on the way).</div>
          <div>This item ships to 18 Wall St, Us. Get it by Thursday, April 16 - Friday, April 24 Choose this date at checkout.</div>
      </div>

  </div>
</template>

<script>
import top from './top'
import son from './son'
export default {
     data:function(){
        return{
            
        }
    },
    components:{
        son:son,
        top:top
    },
    methods:{
        shuliang(str){
            
        }
    },
    computed:{
        infoarr(){
            this.$store.state.storearr
        }
    }
    
}
</script>

<style>

</style>