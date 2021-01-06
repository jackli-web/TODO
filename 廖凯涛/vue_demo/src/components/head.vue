<template>
  <div>
      <headzj></headzj>
      <div class="cont">
      <div>
        <div class="goods_b">Books you Liked</div>
        <div class="box_ss">
          <span class="imgs_f"><img src="../assets/loudou.png" alt=""/></span>
          <span class="goods_f">Filter</span>
          <span class="imgs_fone"><img src="../assets/xia.png" alt=""/></span>
        </div>
      </div>
      <div>
          <ul>
              <li v-for="item in show" :key="item.index" @click="jinru(item)">
                  <img  :src="item.imgUrl" alt="">
              </li>
          </ul>
      </div>
      
    </div>
      <tabbarzj></tabbarzj>
  </div>
</template>

<script>

import headzj from './headzj.vue'
import Tabbarzj from './tabbarzj.vue'
export default {
   // ptops:['info','item','index'],
   data(){
       return {
        booksList:[]
       }
   },
  components: { headzj, Tabbarzj },
  created(){
      this.getinfo()
  },
  methods:{
      getinfo(){
          this.$axios.get('api/books').then(res=>{
            this.$store.state.current=res.data.info;
          })
      },
      jinru(item){
        this.$store.state.current=item;
     
        this.$router.push('/yulan')
      }
  },
  computed:{
    show(){
      return this.$store.state.current
    }
  }
  

}
</script>

<style lang="less" scoped>

.cont {
  width: 100vw;
  filter: drop-shadow(0vw 0.5333vw 0.9333vw rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
}
  .goods_b {
    padding: 4.5333vw 0 0 5.8667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .box_ss {
    position: absolute;
    top: 2.6667vw;
    right: 6.4vw;
    width: 24.8vw;
    height: 6.4vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 0.2667vw solid #b1b1b1;
  }
    .imgs_f {
      position: absolute;
      top: 0.8vw;
      left: 1.6vw;
    }
    .goods_f {
      position: absolute;
      top: 0.8vw;
      left: 8vw;
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .imgs_fone {
      position: absolute;
      right: 1.6vw;
      top: -0.2667vw;
    }
  
  ul{
    margin-top: 6.1333vw;
    display: flex;
    flex-wrap: wrap;
    // margin-left: 14.9333vw;
    li {
        list-style: none;
      // margin: 7.2vw 2.1333vw 2.9333vw 14.6667vw;
      width: 26.6667vw;
      height: 37.6vw;
      background-color: purple;
      filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(0, 0, 0, 0.16));
    
      img {
        width: 100%;
      }
  }
  li:nth-child(2n) {
    margin-left: 17.0667vw;
    margin-bottom: 10.1333vw;
  }
   li:nth-child(2n+1) {
    margin-left:14.9333vw;
  }
  }
</style>