<template>
  <div>
    <div class="topbox">
      <div class="sj">
        <span class="sjleft">9:41</span>
        <div class="sjright">
          <img src="../assets/tushuimg/Cellular Connection.png" alt="" />
          <img src="../assets/tushuimg/Wifi.png" alt="" />
        </div>
      </div>
      <div class="bltop">
        <img
          class="booktopleft"
          src="../assets/tushuimg/Icon ionic-ios-arrow-back.png"
          alt=""
          @click="gotod('booklist')"
        />
        <div class="booktoptext">Payment</div>
        <img class="booktopright" src="../assets/tushuimg/Path 5.png" alt="" />
      </div>
    </div>
    <div class="orderlist">
      <orderitem
        v-for="item in show"
        :key="item.id"
        :item="item"
       
      ></orderitem>
      <div class="totalprice">
        <div class="bi">Billing Information</div>
        <div class="buynew">
          <div class="text">Buy New</div>
          <div class="sum">{{ aa }}</div>
        </div>
        <div class="buynew">
          <div class="text">Shipping</div>
          <div class="sum">+$3.00</div>
        </div>
        <div class="buynew">Only 6 left in stock (more on the way).</div>
        <div class="note">
          This item ships to 18 Wall St, Us. Get it by Thursday, April 16-
          Friday, April 24 Choose this date at checkout.
        </div>
      </div>
    </div>
    <div class="buttom">
      <div class="bei">
        <div class="by" @click="tip">Buy Now</div>
      </div>
      <div class="hei"></div>
      
    </div>
  </div>
</template>

<script>
import orderitem from "../components/orderitem";
import { Dialog } from "vant";
export default {
  data() {
    return {
      count: 1,
      orderlist: this.$store.state.orders,
      totalsprice: [],
    };
  },
  methods: {
    gotod(e) {
      this.$router.push({ name: e });
    },
    
    tip() {
      
       var url = require('@/assets/tushuimg/tick.png');
      Dialog.alert({
      message: `<img src='${url}' >\n Payment Success`,
      confirmButtonText:'Check Order',
       
      }).then(() => {
        // on close
        // Dialog.close()
      });
    },
  },
  computed: {
    show() {
      return this.$store.state.orders;
    },
    aa() {
     
      return this.$store.getters.total.toFixed(2);
    },
  },
  components: {
    orderitem: orderitem,
  },
};
</script>

<style lang='less'>
@import "../components/css/order.less";
</style>
<style>
.van-dialog__content--isolated{
  margin-top: 18.6667vw;
  margin-bottom: 11.7333vw;
}
.van-dialog{
width: 87.2vw;
height: 88.5333vw;
border-radius: 7.2vw;
background-color: #ffffff;
}
.van-button{
width: 53.3333vw;
height: 12vw;
border-radius: 6.1333vw;
background-color: #efeded;
color: black;
font-weight: bold;

}
.van-dialog__message{
  font-size: 4.8vw;
color: #000000;
font-weight: bold;


}
</style>
