<template>
  <div id="shop_cart">
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block">
          <img class="img1" src="@/assets/img1.png" alt="" />
          <img class="img2" src="@/assets/img2.png" alt="" />
          <img class="img3" src="@/assets/img3.png" alt="" />
          <img class="img4" src="@/assets/img4.png" alt="" />
          <img class="img5" src="@/assets/img5.png" alt="" />
          <img class="img6" src="@/assets/img6.png" alt="" />
          <img class="img7" src="@/assets/img7.png" alt="" />
          <img class="img8" src="@/assets/img8.png" alt="" />
          <div class="txt">Payment Success</div>
          <div class="check_div">
            <div @click="show = false" class="check_btn">Check Order</div>
          </div>
        </div>
      </div>
    </van-overlay>
    <div class="top">
      <img @click="goback" class="back_img" src="@/assets/back.png" alt="" />
      <div class="txt_div">Cart</div>
      <img class="shop_img" src="@/assets/shopcar.png" alt="" />
    </div>
    <div class="content">
      <div class="order_form">
        <Order_form
          v-for="(item, index) in info"
          :key="index"
          :hinfo="item"
          :hindex="index"
        ></Order_form>
      </div>
    </div>
    <div class="buy_message">
      <div class="title">Billing information</div>
      <div class="buy_new">
        <div class="buynew_left">Buy new</div>
        <div class="buynew_price">${{ total }}</div>
      </div>
      <div class="buy_new">
        <div class="buynew_left">Shipping</div>
        <div class="buynew_price">+$3.00</div>
      </div>
      <div class="buy_new">
        <div class="buynew_left">Only 6 left in stock (more on the way).</div>
      </div>
      <div class="mess">
        This item ships to 18 Wall St,Us.<br />
        Get it by Thursday ,April 16 - Friday,April 24<br />
        Choose this date at checkout
      </div>
    </div>
    <div class="buy_div">
      <div></div>
      <div @click="show = true" class="buy_btn">Buy Now</div>
    </div>
  </div>
</template>

<script>
import Order_form from "./order_form";
export default {
  components: { Order_form },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    jumpTo(str, item, count) {
      this.$router.push({
        name: str,
      });
    },
    goback() {
      this.$router.go(-1);
    },
    add() {
      this.count++;
    },
    sum() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
  computed: {
    info() {
      return this.$store.state.state_info;
    },
    total() {
      var tota = 0;
      var info = this.$store.state.state_info;
      info.forEach((element) => {
        tota += element.price * element.count;
      });
      return tota;
    },
  },
};
</script>

<style lang="less" scoped>
#shop_cart {
  width: 100vw;
  background-color: #f4f5f7;
  padding-top: 12.5333vw;
  padding-bottom: 24.2667vw;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 87.2vw;
    height: 88.5333vw;
    border-radius: 7.2vw;
    background-color: #ffffff;
    position: absolute;
    .img1 {
      height: 6.6667vw;
      position: absolute;
      top: 4.5333vw;
      left: 7.2vw;
    }
    .img2 {
      height: 6.9333vw;
      position: absolute;
      top: 3.4667vw;
      left: 51.4667vw;
    }
    .img3 {
      height: 8vw;
      position: absolute;
      top: -8vw;
      left: 57.3333vw;
    }
    .img4 {
      height: 6.4vw;
      position: absolute;
      top: 13.6vw;
      left: 24.2667vw;
    }
    .img5 {
      height: 8.5333vw;
      position: absolute;
      top: 14.6667vw;
      left: 72.5333vw;
    }
    .img6 {
      height: 8.5333vw;
      position: absolute;
      top: 29.6vw;
      left: 4.2667vw;
    }
    .img7 {
      height: 24vw;
      position: absolute;
      top: 18.6667vw;
      left: 31.7333vw;
    }
    .img8 {
      height: 6.1333vw;
      position: absolute;
      top: 41.6vw;
      left: 65.6vw;
    }
    .txt {
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 49.6vw 0 0 24vw;
    }
    .check_div {
      margin: 11.7333vw auto;
      width: 53.3333vw;
      height: 12vw;
      border-radius: 6.1333vw;
      background-color: #efeded;
      display: flex;
      justify-content: center;
      align-items: center;
      .check_btn {
        font-size: 4.8vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
  .top {
    width: 100vw;
    height: 12.5333vw;
    background-color: #ffffff;
    display: flex;
    position: fixed;
    top: 0;

    .back_img {
      width: 3.2vw;
      height: 5.3333vw;
      margin: 2.6667vw 0 0 6.4vw;
    }
    .txt_div {
      width: 8.5333vw;
      height: 3.4667vw;
      font-size: 4.2667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 3.4667vw 0 0 36vw;
    }
    .shop_img {
      width: 5.8667vw;
      height: 5.3333vw;
      margin: 2.9333vw 0 0 33.8667vw;
    }
  }
  .content {
    margin-top: 2.9333vw;
    margin-bottom: 2.4vw;
    .order_form {
      padding: 0 6.4vw 0 6.4vw;
      background-color: #ffffff;
    }
  }
  .buy_message {
    padding: 3.7333vw 6.4vw 6.9333vw;
    background-color: #ffffff;
    .title {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .buy_new {
      width: 87.2vw;
      height: 14.9333vw;
      line-height: 14.9333vw;
      border-bottom: 1px solid #e3e1e1;
      display: flex;
      .buynew_left {
        font-size: 3.7333vw;
        color: #8c8c8c;
        font-weight: bold;
        font-family: "Open Sans";
      }
      .buynew_price {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        position: absolute;
        right: 6.4vw;
      }
    }
    .mess {
      font-size: 3.7333vw;
      color: #8c8c8c;
      font-weight: bold;
      font-family: "Open Sans";
      margin-top: 5.6vw;
    }
  }
  .buy_div {
    width: 74.6667vw;
    height: 16.5333vw;
    background-color: #ffffff;
    text-align: center;
    line-height: 21.6vw;
    margin-top: 2.6667vw;
    padding: 5.0667vw 0 0 25.3333vw;
    position: fixed;
    bottom: 0;
    .buy_btn {
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      text-align: center;
      line-height: 9.8667vw;
    }
  }
}
</style>