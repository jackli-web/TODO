<template>
  <div>
    <div class="payment-head">
      <div class="head-content">
        <div class="arrow" @click="jumpto('products')">
          <img class="arrow-img" src="../assets/arrow.png" alt="" />
        </div>
        <div class="txt">Payment</div>
        <div class="payment">
          <img class="payment-img" src="../assets/cart.png" alt="" />
        </div>
      </div>
    </div>
    <div class="payment-content">
      <div class="books" v-for="(item, index) in storeorders" :key="index">
        <div class="books-img">
          <img class="img" :src="item.imgUrl" alt="" />
        </div>
        <div class="books-info">
          <div class="title">
            {{ item.des }}
          </div>
          <div class="describe">by Caitlin Doughty, Dianné Ruz</div>
          <div class="books-button">
            <div class="button-left">
              <div class="jian" @click="del(item)">-</div>
              <div class="num">{{ item.count }}</div>
              <div class="jia" @click="add(item)">+</div>
            </div>
            <div class="button-right">${{ item.count * item.price }}</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="payment-bottom">
      <div class="bottom-top">
        <div class="top-total">
          <div class="total-title">Billing Information</div>
          <div class="prices-list">
            <div class="price-tip">Buy new</div>
            <div class="total-price">$40.67</div>
          </div>
        </div>
        <div class="top-shipping">
          <div class="shipping-tip">Shipping</div>
          <div class="shipping-price">+ $3.00</div>
        </div>
        <div class="top-only">Only 6 left in stock (more on the way).</div>
        <div class="top-info">
          This item ships to 18 Wall St, Us. Get it by Thursday, April 16 -
          Friday, April 24 Choose this date at checkout.
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-button">
          <div class="button">Buy Now</div>
        </div>
        <div class="bottom-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    storeorders: function () {
      return this.$store.state.arr;
    },
    // total(count, price) {
    //   return price * count;
    // },
  },
  methods: {
    jumpto(str) {
      this.$router.push({
        name: str,
      });
    },
    add(item) {
      this.$store.commit("increment", item);
    },
    del(item) {
      this.$store.commit("outcrement", item);
    },
  },
};
</script>

<style lang="less" scoped>
// 头部
.payment-head {
  width: 100vw;
  height: 12.5333vw;
  // background: greenyellow;
  background: #ffffff;
  margin-top: 11.7333vw;
  // position: fixed;
}
.head-content {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 6.1333vw 0 6.4vw;
}
.arrow {
  width: 3.2vw;
  height: 5.3333vw;
  // margin-left: 6.4vw;
  // margin-right: 36vw;
}
.payment {
  width: 5.8667vw;
  height: 4.8vw;
}
.arrow-img {
  width: 3.2vw;
  // height: 5.3333vw;
  background-color: #000000;
}
.txt {
  font-size: 4.2667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  // margin-right: 33.8667vw;
}
.payment-img {
  width: 5.3333vw;
  height: 4.2667vw;
  background-color: #000000;
}
// 内容区
.books {
  display: flex;
  padding-left: 5.8667vw;
  padding-right: 6.4vw;
  margin-top: 2.6667vw;
}
.img,
.books-img {
  width: 19.7333vw;
  height: 29.0667vw;
}
.books-info {
  margin-left: 5.3333vw;
  width: 62.9333vw;
}
.title {
  font-size: 3.4667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  width: 47.4667vw;
  // height: 11.2vw;
  display: flex;
  flex-wrap: wrap;
  // justify-content: flex-start;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.describe {
  font-size: 3.2vw;
  color: #000000;
  font-family: "Open Sans";
  margin-top: 3.7333vw;
  text-align: left;
}
.books-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: blueviolet;
  margin-top: 3.7333vw;
}
.button-left {
  display: flex;
  // width: 24vw;
  height: 6.4vw;
  border-radius: 3.2vw;
  background-color: #efeded;
  padding-left: 5.3333vw;
  padding-right: 5.3333vw;
  justify-content: space-between;
  align-items: center;
}
.button-right {
  // width: 15.2vw;
  height: 4.8vw;
  border-radius: 2.4vw;
  background-color: #efeded;
  font-size: 3.4667vw;
  color: #000000;
  font-family: "Open Sans";
}
.jian {
  margin-right: 4.8vw;
  font-size: 6.6667vw;
}
.jia {
  font-size: 6.6667vw;
  margin-left: 4.8vw;
}
.num {
  font-size: 3.4667vw;
  color: #000000;
  font-family: "Open Sans";
}
.line {
  width: 87.2vw;
  margin: auto;
  margin-top: 4.2667vw;
  background-color: #000000;
  border: 0.2667vw solid #e3e3e3;
}
// 底部
.payment-bottom {
  margin-top: 2.6667vw;
  background: #ffffff;
  margin-bottom: 2.6667vw;
}
.bottom-top {
  margin: 0 6.1333vw 6.4vw 6.4vw;
  // border: 0.2667vw solid #e3e1e1;
  // background: blueviolet;
  text-align: left;
  padding-top: 3.7333vw;
}
.total-title {
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  margin-bottom: 4vw;
}
.top-total {
  padding-bottom: 3.7333vw;
  border-bottom: 0.2667vw solid #e3e1e1;
}
.prices-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vw;
}
.price-tip {
  font-size: 3.7333vw;
  color: #7f7f7f;
  font-weight: bold;
  font-family: "Open Sans";
}
.total-price {
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
}
.top-shipping {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vw;
  padding-top: 2.9333vw;
  border-bottom: 0.2667vw solid #e3e1e1;
  padding-bottom: 3.7333vw;
}
.shipping-tip {
  color: #7f7f7f;
  font-size: 3.7333vw;
  font-weight: bold;
  font-family: "Open Sans";
}
.shipping-price {
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
}
.top-only {
  font-size: 3.7333vw;
  height: 3.7333vw;
  line-height: 3.7333vw;
  color: #7f7f7f;
  font-weight: bold;
  font-family: "Open Sans";
  padding-top: 5.3333vw;
  padding-bottom: 5.6vw;
  border-bottom: 0.2667vw solid #e3e1e1;
}
.top-info {
  height: 12.2667vw;
  // line-height: 12.2667vw;
  padding-top: 6.1333vw;
  padding-bottom: 6.4vw;
  font-size: 3.7333vw;
  color: #7f7f7f;
  font-weight: bold;
  font-family: "Open Sans";
}
.bottom {
  height: 29.6vw;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #ffffff;
}
.bottom-black {
  background: #000000;
  height: 9.0667vw;
}
.bottom-button {
  height: 20.5333vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 49.6vw;
  height: 9.8667vw;
  line-height: 9.8667vw;
  border-radius: 5.0667vw;
  filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
  background-color: #060aff;
  text-align: center;
  font-size: 4.2667vw;
  color: #ffffff;
  font-weight: bold;
  font-family: "Open Sans";
}
</style>