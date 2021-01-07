<template>
  <div class="box">
    <div class="top">
      <div class="dis">
        <div>
          <img
            @click="jumpto('HelloWorld')"
            class="left-jt"
            src="@/assets/Icon ionic-ios-arrow-back.png"
          />
        </div>
        <div class="world">cart</div>
        <div class="shop">
          <div><img class="shopcart" src="@/assets/Path 5.png" /></div>
          <div><img class="cir1" src="@/assets/Path 3.png" /></div>
          <div><img class="cir2" src="@/assets/Path 4.png" /></div>
        </div>
      </div>
    </div>
    <div class="book-top"></div>
    <div class="detail">
      <div class="book-t">
        <div class="lworld">Science & Technology</div>
        <div class="rworld">
          <div class="inworld">New York Times Bestseller</div>
        </div>
      </div>
      <!-- <div class="bookname">{{redat.bookName}}</div> -->
      <div class="price">${{redat.price}}</div>
      <div class="imgbox">
        <van-swipe @change="onChange" :autoplay="3000" indicator-color="white">
          <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="img1" v-lazy="image" />
          </van-swipe-item> -->
          <van-swipe-item><img class="img1" :src="redat.imgUrl" alt="" srcset=""></van-swipe-item>
          <van-swipe-item><img class="img1" :src="redat.imgUrl" alt="" srcset=""></van-swipe-item>
          <van-swipe-item><img class="img1" :src="redat.imgUrl" alt="" srcset=""></van-swipe-item>
        </van-swipe>
      </div>
      <div class="dis2">
        <div><img src="@/assets/Line 13.png" /></div>
        <div><img src="@/assets/Line 15.png" /></div>
        <div><img src="@/assets/Line 15.png" /></div>
        <div class="cicle"><img src="@/assets/Icon feather-heart.png" /></div>
      </div>
      <div class="line"></div>
      <div>
        <div class="format">Formats and editions</div>
        <div class="pri">
          <div class="otherprice1 c" v-for="(item,index) in redat.otherPrice" :key="index">
            <!-- <div>kindle</div>
            <div>$8.03</div> -->
            <div>{{item.platform}}</div>
            <div>{{item.price}}</div>
          </div>
          <!-- <div class="otherprice2 c">
            <div class="worl">Hardcover</div>
            <div>$14.29</div>
          </div>
          <div class="otherprice3 c">
            <div class="threeword">Paperpack</div>
          </div> -->
        </div>
        <div class="quan">Quantity</div>
        <div class="countbox c">
          <div @click="des"><img class="sub" src="@/assets/Path 7.png" /></div>
          <div class="counworld">{{ count }}</div>
          <div @click="add"><i class="add iconfont">&#xe627;</i></div>
        </div>
      </div>
      <div class="allnew">
        <div class="new">
          <div class="innew">New York Times Bestseller<br/>
            Winner of the 2019
            Goodreads Choice Award for Science & Technology</div>
        </div>
        <div class="buybtn">
          <div @click="addtoca" class="addcart c">add to cart</div>
          <div @click="jumpto('payment')" class="buynow c">Buy Now</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from "vant";
  export default {
    data() {
      return {
        name: "",
        count: 1,
        // self:this.$route.query,
        arr1:[]
      };
    },
    methods: {
      jumpto(str) {
        this.$router.push({ name: str });
      },
      onChange(index) {
        // Toast('当前 Swipe 索引：' + index);
        // console.log(index)
      },
      add(){
        this.count++
        // if(this.count<this.count){
        //   this.count=this.count
        // }
      },
      des(){
        this.count--
      },
      // $store 是挂载在 Vue 实例上的（即Vue.prototype）
      addtoca(){
        var obj={...this.redat,count:this.count}
        this.$store.commit('addtocart',obj)
        console.log('obj',obj)

      }

    },
    computed:{
      storeorders:function(){
        return this.$store.state.orders
      },
      redat:function(){
        return this.$store.state.receive
      }
    },
    beforeMount() {
      this.$axios({
        method: "get",
        url: "/api/books",
      }).then((res) => {
        // this.images=res.data.imgUrl
        console.log(res);
      });
    },
  };
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  /* .counbtn {
    width: 24vw;
    height: 6.4vw;
    border-radius: 3.2vw;
    background-color: #efeded;
    display: flex;
    margin-top: 3.7333vw;
    justify-content: space-between;
  } */
  .c {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add {
    width: 2.9333vw;
    height: 3.7333vw;
    margin-right: 3.7333vw;
    /* background-color: #000000;
  border: 2px solid #000000; */
  }

  .counworld {
    font-size: 3.4667vw;
    color: #000000;
    font-family: "Open Sans";
  }
  .sub {
    margin-left: 3.7333vw;
  }
  .buybtn{
    height: 13.6vw;
    display: flex;
    background-color: #ffffff;
  }
  .addcart{
    width: 105px;
    height: 37px;
    margin-left: 8.8vw;
    border-radius: 19px;
    background-color: #efeded;
    font-size: 14px;
    color: #818181;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .buynow{
    width: 186px;
    height: 37px;
    margin-left: 4.8vw;
    margin-right: 8.8vw;
    border-radius: 19px;
    filter: drop-shadow(0px 3px 3.5px rgba(6,10,255,0.28));
    background-color: #060aff;
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .box {
    width: 100vw;
    position: relative;
  }
  .top {
    width: 100vw;
    height: 13.8667vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
  }
  .left-jt {
    width: 2.9333vw;
    height: 5.3333vw;
    background-color: #000000;
    margin-left: 6.4vw;
  }
  .dis {
    display: flex;
    width: 100vw;
    justify-content: space-between;
  }
  .kong {
    width: 100vw;
    height: 22.1333vw;
    background-color: #f9f9f9;
  }
  .world {
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .shop {
    margin-right: 6.1333vw;
  }
  .shopcart {
    position: relative;
  }
  .cir2 {
    position: absolute;
    top: 8.2667vw;
    right: 9.8667vw;
  }
  .cir1 {
    position: absolute;
    top: 8.2667vw;
    right: 7.2667vw;
  }
  .detail {
    width: 100vw;
    height: 149.8667vw;
    background-color: #ffffff;
  }
  .book-top {
    background-color: #f5f6f8;
    height: 4.8vw;
    width: 100vw;
  }
  .book-t {
    display: flex;
  }
  .lworld {
    font-size: 3.4667vw;
    color: #000000;
    font-family: "Open Sans";
    margin-left: 5.6vw;
  }
  .rworld {
    width: 46.6667vw;
    height: 6.9333vw;
    border-radius: 1.0667vw;
    background-color: #000000;
    margin-left: 4.2667vw;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inworld {
    font-size: 3.4667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
  }
  .price {
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    position: absolute;
    margin-top: 3.2vw;
    margin-left: 6.9333vw;
  }
  .imgbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img1 {
    width: 40vw;
    height: 60.5333vw;
    margin-top: 13.6vw;
    /* border: 1px solid red; */
  }

  .sel {
    background-color: #000000;
  }
  .sel2 {
    background-color: #000000;
  }
  .dis2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7.7333vw;
  }
  .cicle {
    width: 8.8vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #e7e7e7;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    right: 6.6667vw;
  }
  .cicle img {
    width: 4.2667vw;
    height: 3.7333vw;
    background-color: #000000;
  }
  .line {
    background-color: #000000;
    border: 1px solid #e3e3e3;
    margin-top: 12vw;
  }
  .format {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-top: 4vw;
    margin-bottom: 4.5333vw;
    position: absolute;
    left: 6.6667vw;
  }
  .pri {
    display: flex;
    padding-top: 11.7333vw;
    margin-left: 6.6667vw;
    overflow-x:scroll;
  }
  .c {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .otherprice1 {
    width: 31.2vw;
    height: 8.8vw;
    display: flex;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 0.4vw solid #c4c4c4;
    margin-right: 1.3333vw;
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
    overflow-x:scroll;
    /* display: inline-block; */
  }
  .otherprice2 {
    width: 40.5333vw;
    height: 8.8vw;
    display: flex;
    margin-right: 2.6667vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 0.4vw solid #c4c4c4;
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
  }
  .otherprice3 {
    width: 40.5333vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
    /* margin-right: -62px; */
    display: flex;
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
  }
  .oneprice {
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
  }
  .worl {
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
    /* width: 3.2vw; */
    /* height: 3.2vw; */
  }
  .threeword {
    margin-left: -6.6667vw;
  }
  .quan {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-top: 5.3333vw;
    position: absolute;
    left: 6.4vw;
  }
  .countbox {
    width: 31.2vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
    margin-top: 13.0667vw;
    margin-left: 6.4vw;
    display: flex;
    /* width: 24vw;
   height: 6.4vw;
   border-radius: 3.2vw;
   display: flex;
   margin-top: 3.7333vw; */
    justify-content: space-between;
  }
  .sub {
    width: 3.7333vw;
    /* background-color: #000000;
  border: 2px solid #000000; */
  }
  .add {
    width: 3.7333vw;
    /* background-color: #000000; */
    /* border: 2px solid #000000; */
  }
  .allnew{
    background-color: #ffffff;
  }
  .new{
    width: 87.2vw;
    height: 16vw;
    font-size: 3.4667vw;
    margin-top: 4vw;
    /* padding-left: 5.6vw;
    padding-right: 12.2667vw; */
    text-align: left;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";

  }
  .innew{
    padding-left: 5.6vw;
    padding-right: 12.2667vw;
  }
</style>
