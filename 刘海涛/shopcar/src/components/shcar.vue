<template>
  <div>
    <top-bar><div class="good_c">Payment</div></top-bar>
    <div>
      <book
        v-for="item in info"
        :key="item.id"
        :item="item"
        :count="count"
      ></book>
    </div>
    <div class="nu"></div>
    <div class="box">
      <div class="bill">Billing Information</div>
      <div class="box_small">
        <span class="p_name">Buy new</span>
        <span class="p_price">${{ allprice.toFixed(2) }}</span>
      </div>
      <div class="box_small">
        <span class="p_name">Shipping</span>
        <span class="p_price">+ $3.00</span>
      </div>
      <div class="box_small">
        <span class="p_name">Only 6 left in stock (more on the way).</span>
      </div>
      <div class="thi">
        <p>This item ships to 18 Wall St, Us.</p>
        <p>Get it by Thursday, April 16 - Friday, April 24</p>
        <p>Choose this date at checkout.</p>
      </div>
    </div>
    <div class="foot">
      <div class="footer">
        <div class="btn">
          <van-cell is-link @click="showPopup">Buy Now</van-cell>
        </div>
      </div>
      <div class="hei"></div>
    </div>
    <van-popup :overlay="false" :closeable="true" v-model="show">
      <img src="../assets/tick.png" alt="" />
      <p>Payment Success</p>
      <div class="checko" @click="clearall">
        <p>Check Order</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import topBar from "./top_bar.vue";
import book from "./book.vue";
export default {
  components: { topBar, book },
  data() {
    return {
      // item: [],
      count: 1,
      info: [],
      show: false,
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    clearall() {
      this.$store.state.arr = [];
      this.show = false;
      this.getItem();
    },
    showPopup() {
      this.show = true;
    },
    getItem() {
      // this.item = this.$route.query.str;
      // console.log(this.item);
      this.info = this.$store.state.arr;
      this.count = this.$route.query.total;
      console.log(this.$store.state.arr);
    },
  },
  computed: {
    allprice() {
      return this.info.reduce((sum, p) => {
        return sum + p.count * p.item.price;
      }, 0);
    },
  },
};
</script>

<style  lang='less' scoped>
p {
  margin: 0;
  padding: 0;
}
.nu {
  height: 2.6667vw;
}
.box {
  width: 100vw;
  height: 77.3333vw;
  background-color: #ffffff;
  overflow: hidden;
  .bill {
    margin: 3.4667vw 0 2.6667vw 6.6667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .box_small {
    display: flex;
    justify-content: space-between;
    width: 87.2vw;
    margin: 0 auto;
    border-bottom: 0.2667vw solid #ccc;
    margin-bottom: 2.6667vw;
    .p_name {
      margin: 1.6vw 0 4vw;
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .p_price {
      margin: 1.6vw 0 4vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .thi {
    margin: 6.4vw 0 0 6.4vw;
    font-size: 3.7333vw;
    color: #7f7f7f;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 29.6vw;

  .footer {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 20.5333vw;
    background-color: #ffffff;
    overflow: hidden;
    .btn {
      .van-cell {
        margin: 5.0667vw 0 0;
        padding: 0;
        width: 49.6vw;
        height: 9.8667vw;
        line-height: 9.8667vw;
        border-radius: 5.0667vw;
        background-color: #060aff;
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
        .van-cell__value--alone {
          color: #fff;
          text-align: center;
        }
        .van-icon::before {
          display: none;
        }
      }
    }
  }
  .hei {
    width: 100vw;
    height: 9.0667vw;
    background-color: #000;
  }
}
.van-popup {
  position: absolute;
  top: 86.4vw;
  width: 87.2vw;
  height: 88.5333vw;
  border-radius: 7.2vw;
  background-color: #f6f7f9;
  img {
    width: 75.4667vw;
    height: 33.8667vw;
    margin: 13.6vw 0 0 4vw;
  }
  p {
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 2.1333vw 0 0 23.7333vw;
  }
  .checko {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53.3333vw;
    height: 12vw;
    border-radius: 6.1333vw;
    background-color: #efeded;
    margin: 11.7333vw 0 0 16.8vw;
    p {
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 0;
    }
  }
}
</style>