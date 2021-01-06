<template>
  <div class="book" >
      <div v-for="(item,index) in booksarr" :key="index">
      <div class="bleft"><img :src="item.imgUrl"></div>
      <div class="bright">
      <div class="rtitle">{{item.bookName}}</div>
      <div class="rname">by {{item.author}}</div>
      <div class="rfoot">
          <div class="rnumb">
              <div @click="sub">-</div>
              <div>{{booksnumber}}</div>
              <div @click="add">+</div>
          </div>
          <div class="rpric">$ {{item.price}}</div>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
           
        }
    },
    methods:{
        add(){
            this.booksnumber++
        },
        sub(){
            if(this.booksnumber<0){
                alert('数量不能再减了')
                this.booksnumber=0
            }else{
                this.booksnumber--
            }
        }
    },
    computed:{
        booksarr(){
            return this.$store.state.storearr
        },
        booksnumber(){
            return this.$store.state.storenumber
        }
    },
    watch:{
        booksnumber:function(newvalue){
            this.$emit('fix',newvalue);
        }
    },
    // props:['booksinfos']
}
</script>

<style >
 img{
    height: 14.4vw;
    width: 9.8667vw;
} 
.rfoot{
    border: 1px solid black;
    /* width: 50vw; */
    display: flex;

}
.rnumb{
    display: flex;
    width: 24vw;
    height: 6.4vw;
    border-radius: 3.2vw;
    background-color: #efeded;
}

.rprice{
    width: 15.2vw;
    height: 4.8vw;
    border-radius: 2.4vw;
    background-color: #efeded;
    font-size: 3.2vw;
} 
</style>