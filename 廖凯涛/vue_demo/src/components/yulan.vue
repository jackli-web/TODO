<template>
  <div>
      <headzj></headzj>
        <div class="box">
            <div class="box1">
                <div class="text1">Science & Technology</div>
                <div class="text2"><div class="text2-1">New York Times Bestseller</div></div>
                
            </div>
            <div class="text3">${{showitem.price}}</div>
            <div >
                <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
                    <van-swipe-item><img class="img1" :src="showitem.imgUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img class="img1" :src="showitem.imgUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img class="img1" :src="showitem.imgUrl" alt=""></van-swipe-item>
  
                </van-swipe>

            </div>
            <div class="xian"></div>
            <div class="text4">Formats and editions</div>
            <van-swipe :width="175" :loop="false"  :show-indicators="false" >
                    <van-swipe-item><div class="span1">{{showitem.otherPrice[0].platform}}${{showitem.otherPrice[0].price}}</div></van-swipe-item>
                    <van-swipe-item><div class="span2">{{showitem.otherPrice[1].platform}}${{showitem.otherPrice[1].price}}</div></van-swipe-item>
                    <van-swipe-item><div class="span3">{{showitem.otherPrice[2].platform}}${{showitem.otherPrice[2].price}}</div></van-swipe-item>
                    <van-swipe-item><div class="span3">{{showitem.otherPrice[3].platform}}${{showitem.otherPrice[3].price}}</div></van-swipe-item>              
            </van-swipe>
            
        </div>
        <div class="text5">Quantity</div>
    <div class="right3-left">
                    <div class="en" @click="des"><img class="img" src="../assets/减.png" alt=""></div>
                    <div class="en"><span class="text">{{count}}</span></div>
                    <div class="en" @click="add"><img class="img"  src="../assets/addadd.png" alt=""></div>
                </div>

        <div class="big-fin"> 
            <!-- <div class="xian"></div>  -->
             <div class="shang">
                <div class="shang-a">  New York Times Bestseller
                    Winner of the 2019 Goodreads Choice Award for Science & Technology</div>
                </div>   
                <div class="xian"></div>   
                <div class="fin">  
            <div class="fin-l"> <div class="text111"  @click="shops"> Add to cart</div></div>
            <div class="fin-r"> <div class="text112" @click="shop">Buy Now</div></div>
            </div> 
           
        </div>
  </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'vant';
import headzj from './headzj.vue'
export default {
   data(){
       return {
           booksList:[],
           count:1
       }
   },
  components: { headzj },
//   created(){
//       this.getinfo()
//   },
  methods:{
       add(){
            this.count++
        },
        des(){
            this.count--
        },
      shop(){
          this.$router.push('/shop')
      },
      shops(){
          this.$store.state.orders.push(this.$store.state.current)
        //   console.log(this.$store.state.orders);
      }
    //    addtoca(){
    //         var obj={...this.selfinfo,count:this.count}
    //         this.$store.commit('addtocart',obj)
    //     },
    //   getinfo(){
    //       this.$axios.get('api/books').then(res=>{
    //           this. booksList=res.data.info;
    //       })
       
    //   },
  },
  computed:{
      showitem(){
          return this.$store.state.current
        //   return this.$store.state.price
      }
  }

}
</script>

<style >

.van-swipe__indicator{ 
    margin-left: 2.6667vw;
    width: 9.3333vw;
    height: 0.0667vw;
    background-color: #ebedf0;
    border-radius: 0;
background-color: #000000;
border: 3px solid #000000;
}
/* .sp {
    line-height: 8.8vw;
    text-align: center;
} */
.xian {
    background-color: #000000;
border: 0.2667vw solid #e3e3e3;
}
.text {
    margin-left: 2.6667vw;;
    line-height:  8.8vw;
    font-size: 3.7333vw;
color: #000000;
font-weight: bold;
font-family: "Open Sans";
}
.img {
    margin-top: 1.8667vw;
    margin-left: 2.6667vw;
    width: 5.3333vw;
    height:  5.3333vw;
}
.right3-left {
    margin-left: 6.4vw;
display: flex;
width:31.2vw;
height: 8.8vw;
border-radius: 4.5333vw;
background-color: #ffffff;
border: 0.4vw solid #c4c4c4;
}
.en {
    width: 10.4vw;
}
.my-swipe .van-swipe-item {
    height: 88.8vw;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #fff;
  }

.box {
    margin-top: 2.6667vw;
    width: 100vw;

}
.box1 {
    display: flex;
}
.text1 {
    padding-top: 0.8vw;
    margin-left: 6.6667vw;
    font-size: 3.4667vw;
    color: #ccc;
    font-family: "Open Sans";
}
.text2 {
    
    margin-left: 4.5333vw;
    font-size: 3.4667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
    width: 46.6667vw;
    height: 6.9333vw;
    border-radius: 1.0667vw;
    background-color: #000000;
}
.text2-1 {
    line-height:  6.9333vw;
}
.text3 {
    margin-left: 6.1333vw;
font-size: 4.8vw;
color: #000000;
font-weight: bold;
font-family: "Open Sans";
}
.text4 {
    margin-bottom: 4.5333vw;
    margin-top: 4vw;
    margin-left: 6.6667vw;
font-size: 3.7333vw;
color: #000000;
font-weight: bold;
font-family: "Open Sans";
}
.text5 {
    margin-top: 5.3333vw;
    margin-bottom: 3.8667vw;
    margin-left: 6.4vw;
    font-size: 3.7333vw;
color: #000000;
font-weight: bold;
font-family: "Open Sans";
}
.img1 {
    margin-top: 7.7333vw;
    width: 40vw;
    height: 60.5333vw;
}
.span1 {
    margin-left: 6.4vw;
      line-height: 8.8vw;
    text-align: center;
    
    /* width: 31.2vw; */
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
}
.span2 {
    margin-left: 6.4vw;
      line-height: 8.8vw;
    text-align: center;
    
    /* width: 31.2vw; */
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
}
.span3 {
    margin-left: 6.4vw;
      line-height: 8.8vw;
    text-align: center;
    
    /* width: 31.2vw; */
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
}
.shang {
    height: 14.9333vw;
    width: 100vw;
}



.big-fin {
    position: absolute;
    bottom:0vw;
     background-color: #fff;
}
.fin {
    display: flex;
    width: 100vw;
    height: 13.0667vw;
    background-color: #fff;
}

.fin-l {
    margin-left: 8.8vw;
    margin-top: 2.6667vw;
     /* margin-top: 3.7333vw; */
    width: 28vw;
height: 9.8667vw;
border-radius: 5.0667vw;
background-color: #efeded;
}
.fin-r {
    margin-left: 4.8vw;
     margin-top: 2.6667vw;
     /* margin-top:3.7333vw ; */
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(6,10,255,0.28));
    background-color: #060aff;
}
.shang-a {
    margin-top: 2.4vw;
    margin-left: 6.4vw;
    font-size: 3.4667vw;
    width: 87.2vw;
   
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    
}

.text111 {
   
    text-align: center;
    line-height:  9.8667vw;
}
.text112 {
   
    text-align: center;
    line-height:  9.8667vw;
}
</style>