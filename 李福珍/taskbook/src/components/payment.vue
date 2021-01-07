<template>
  <div class="box">
    <div class="top">
      <div class="dis">
        <div>
          <img
            @click="jumpto('products3')"
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
    <div class="paydetail">
      <div class="bookbox" v-for="(item, index) in storeorders" :key="index">
        <img class="bookimg" :src="item.imgUrl" />
        <div class="r-top">
          <div class="title">
            {{ item.bookName }}
          </div>
          <div class="tdetail">{{ item.author }}{{ item.des }}</div>
          <div class="bopay">
            <div class="counbtn c">
              <div @click="des(index)">
                <img class="sub" src="@/assets/Path 7.png" />
              </div>
              <div class="counworld">{{ item.count }}</div>
              <div @click="add(index)"><i class="add iconfont">&#xe627;</i></div>
            </div>
            <div class="paybtn c">${{ item.price*item.count}}</div>
            <!-- <div class="paybtn c">${{payone}}</div> -->
          </div>
        </div>
      </div>
      <div class="border"></div>
    </div>
    <div class="bil">
      <div class="bilinfo">
        <div class="buynew">Billing Information</div>
        <div class="buy1">
          <div class="by col">Buy new</div>
          <div class="money">${{payall}}</div>
        </div>
        <div class="border2"></div>
        <div class="buy2">
          <div class="by col">Shipping</div>
          <div class="money">+$3.00</div>
        </div>
        <div class="border2"></div>
        <div class="by pb col">Only 6 left in stock (more on the way).</div>
        <div class="border2"></div>
        <div class="biltitle col">
          This item ships to 18 Wall St, Us. Get it by Thursday, April 16 -
          Friday, April 24 Choose this date at checkout.
        </div>
      </div>
    </div>
    <div class="boo c">
      <div @click="ifbuy" class="allpay c">Buy Now</div>
    </div>
  </div>
</template>
<script>
  import { Dialog } from 'vant';
  export default {
    data() {
      return {
        name: "",
        payall:0,
        // payall1:0,
        // payall2:0,
        count:1,

      };
    },
    methods: {
      jumpto(str) {
        this.$router.push({ name: str });

      },
      add(str) {
        this.storeorders[str].count++;
        console.log(str)
        // if(str==0){
        // this.payall1=this.storeorders[str].price*this.storeorders[str].count
        // }else{
        //   this.payall2=this.storeorders[str].price*this.storeorders[str].count
        // }
        if(str===str){
          this.payall+=this.storeorders[str].price*this.storeorders[str].count
        }
        // this.payall=this.payall1+this.payall2
      },
      des(str) {
        this.storeorders[str].count--;
        console.log(str)
        if(str===str){
          this.payall+=this.storeorders[str].price*this.storeorders[str].count
        }
      },
      ifbuy() {
        Dialog.alert({
          // title: "标题",
          message: "Payment Success",
          confirmButtonText:"Check Order",
          confirmButtonTextColor:"#000000",
          // confirmButtonColor:"#f5f6f8",
          theme: "round-button",
        }).then(() => {
          // on close
        });
      },
    },
    beforeMount(){
      // add(index)
    },
    computed: {
      //  payall(str){
      //    var t=this.storeorders.count*this.storeorders.price;
      //    return t
      //  },
      // payone(str){
      //   return this.item.price*this.item.count
      // },
      storeorders: function () {
        return this.$store.state.orders;
      },

    },
  };
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f5f6f8;
  }
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
  .l-btn {
    margin-bottom: 1.8667vw;
  }
  .box {
    width: 100vw;
    height: 206.6667vw;
    position: relative;
  }
  .top {
    width: 100vw;
    height: 13.8667vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0px 2px 3.5px rgba(0, 0, 0, 0.03));
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
    filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
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
  .bookbox {
    margin-left: 6.1333vw;
    display: flex;
  }
  .bookimg {
    /* margin-left: 6.1333vw; */
    width: 19.7333vw;
    height: 29.0667vw;
    display: flex;
    margin-top: 4vw;
  }
  .paydetail {
    /* height: 76.2667vw; */
    background-color: #ffffff;
    margin-top: 2.6667vw;
  }
  .title {
    width: 47.4667vw;
    height: 11.2vw;
    text-align: left;
    font-size: 3.2vw;
    color: #000000;
    font-family: "Open Sans";
    /* margin-left: 4.8vw; */
  }
  .tdetail {
    font-size: 3.2vw;
    /* margin-left: 4.8vw; */
    color: #000000;
    font-family: "Open Sans";
  }
  .bopay {
    display: flex;
    margin-left: 5.0667vw;
    margin-top: 3.7333vw;
  }
  .counbtn {
    width: 24vw;
    height: 6.4vw;
    border-radius: 3.2vw;
    background-color: #efeded;
    display: flex;
    margin-top: 3.7333vw;
    justify-content: space-between;
  }
  .paybtn {
    width: 15.2vw;
    height: 4.8vw;
    border-radius: 2.4vw;
    background-color: #efeded;
    font-size: 13px;
    color: #000000;
    font-family: "Open Sans";
    margin-top: 4.8vw;
    margin-right: 6.6667vw;
    margin-left: 23.4667vw;
  }
  .border {
    background-color: #000000;
    border: 1px solid #e3e3e3;
    margin-top: 4.8vw;
    margin-left: 6.4vw;
  }
  .r-top {
    margin-top: 5.0667vw;
  }
  .border2 {
    background-color: #000000;
    border: 1px solid #e3e1e1;
  }
  .boo {
    height: 20.5333vw;
    margin-top: 2.6667vw;
    background: #ffffff;
  }
  .allpay {
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    margin-top: 4.8vw;
    margin-bottom: 6.6667vw;
    filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .bil {
    height: 77.3333vw;
    background-color: #ffffff;
  }
  .bilinfo {
    margin-left: 6.6667vw;
    margin-top: 2.6667vw;
  }
  .biltitle {
    width: 79.7333vw;
    height: 124.2667vw;
    margin-top: 5.8667vw;
    margin-bottom: 6.4vw;
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: left;
  }
  .buynew {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: left;
    padding-top: 3.7333vw;
    /* margin-bottom: 5.3333vw; */
  }
  .by {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: left;
    /* padding-top: 3.7333vw; */
  }
  .pb {
    margin-top: 5.6vw;
    margin-bottom: 5.3333vw;
  }
  .buy1,
  .buy2 {
    display: flex;
    margin-top: 6.4vw;
    margin-bottom: 5.6vw;
  }
  .money {
    font-size: 14px;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    position: absolute;
    right: 6.1333vw;
  }
  .col {
    color: #dfdfdf;
  }
  .r-top {
    margin-left: 4.8vw;
  }
  /* .bottombox{

  } */
</style>
