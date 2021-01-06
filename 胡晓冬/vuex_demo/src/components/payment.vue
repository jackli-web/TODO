<template>
  <div class="pay">
    <!-- <div v-for="(item, index) in arr" :key="index">{{ item }}</div> -->
    <div class="zujian" v-for="(item, index) in arr" :key="index">
      <paymentbook :arr="item" :i="index" @mycount="mycount" />
      <div class="book_xian"></div>
    </div>
    <div class="billing">
      <div class="billing_title">Billing information</div>
      <div class="billing_count">
        <div class="Buy">Buy new</div>
        <div class="count">${{ count }}</div>
      </div>
      <div class="book_xian1"></div>
      <div class="billing_count">
        <div class="Buy">Shipping</div>
        <div class="count">+$3.00</div>
      </div>
      <div class="book_xian1"></div>
      <div class="billing_count">
        <div class="Buy">Only 6 left in stock (more on the way).</div>
      </div>
      <div class="book_xian1"></div>
      <div class="billing_count">
        <div class="Buy">
          This item ships to 18 Wall St, Us. Get it by Thursday, April 16 -
          Friday, April 24 Choose this date at checkout.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paymentbook from "./paymentbook.vue";

export default {
  name: "products",
  data() {
    return {
      //   info: this.$route.query,
      num: 0,

      count: 0,
    };
  },
  //   beforeMount() {
  //     this.arr.push(this.info);
  //   },
  //   updated() {
  //     this.arr.push(this.info);
  //   },
  computed: {
    arr() {
      return this.$store.state.arr;
    },
  },
  methods: {
    mycount(countprice, i) {
      // if (countprice == 0) {
      //   this.count = 0;
      // } else {
        var ad = 0;
        //this.arr[i]["countprice"] = countprice;
        this.arr.forEach((element) => {
          ad += parseFloat(element.count*element.price);
          this.count = ad;
        });
      // }
    },
  },
  beforeMount() {
    var ad = 0;
        //this.arr[i]["countprice"] = countprice;
        this.arr.forEach((element) => {
          ad += parseFloat(element.count*element.price);
          this.count = ad;
        });
  },
  components: {
    paymentbook,
  },
};
</script>

<style lang="less" scoped>
.pay {
  .book_xian1 {
    width: 87.2vw;
    height: 0;
    background-color: #000000;
    border: 0.2667vw solid #e3e3e3;
  }
  .zujian {
    * {
      background-color: #ffffff;
    }
    background-color: #ffffff;
    position: relative;

    padding: 3.7333vw 6.4vw 5.6vw 6.4vw;
    .book_xian {
      position: absolute;
      bottom: 0;
      width: 87.2vw;
      height: 0;
      background-color: #000000;
      border: 0.2667vw solid #e3e3e3;
    }
  }
  .billing {
    * {
      background-color: #ffffff;
    }
    background-color: #ffffff;
    margin-top: 2.6667vw;
    width: 86.6667vw;
    padding: 3.7333vw 6.6667vw 3.7333vw 6.6667vw;
    .billing_title {
      height: 3.7333vw;
      font-size: 3.7333vw;
      line-height: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: left;
    }
    .billing_count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4vw;
      margin-bottom: 5.3333vw;
      height: 8vw;
      .Buy {
        height: 4vw;
        line-height: 4vw;
        font-size: 3.4667vw;
        color: #aaaaaa;
        font-weight: bold;
        font-family: "Open Sans";
        text-align: left;
      }
      .count {
        font-size: 3.7333vw;
        height: 3.7333vw;
        line-height: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
}
</style>