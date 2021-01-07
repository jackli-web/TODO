<template>
  <div class="base">
    <div class="main">
      <div class="main-ts"></div>
      <div v-show="order.length==0?!booksshow:booksshow" class="tishiwenzi">
        <div>哎呀！你的购物车空空的，快去选购你想要的书籍叭！</div>
        <img src="../../assets/images/remocart.png" alt="" />
      </div>
      <div
        v-for="(item, index) in order"
        :key="index"
        :class="['main-book', index == 0 ? 'ts1' : '']"
      >
        <div class="book-left">
          <img :src="item.imgUrl" />
        </div>
        <div class="book-content">
          <div class="content-a">{{ item.bookName }}</div>
          <div class="content-b">作者：{{ item.author }}</div>
          <div class="content-c">
            <div class="content-c-left">
              <div class="sub" @click="subshuliang(index)">-</div>
              <div class="set">{{ order[index].shuliang }}</div>
              <div class="add" @click="addshuliang(index)">+</div>
            </div>
            <div class="content-c-right">
              ${{ order[index].price | getprice() }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sumprice">
      <div class="sumprice-title">Billing information</div>
      <div class="sumprice-content">
        <div class="title">Buy New</div>
        <div class="sumprice-price">${{ sunprice }}</div>
      </div>
      <div class="sumprice-content">
        <div class="title">Shipping</div>
        <div class="sumprice-price">$3.00</div>
      </div>
      <div class="sumprice-content">
        <div class="title">Only 6 left in stock (more on the way).</div>
      </div>
      <div class="sumprice-content ts2">
        <div class="title">
          This item ships to 18 Wall St, Us. Get it by Thursday, April 16 -
          Friday, April 24 Choose this date at checkout.
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="btn-b" @click="sumbit">Buy Now</div>
    </div>
    <van-popup v-model="show" round closeable @close="closevanpopup">
      <div class="tck">
        <img src="../../assets/images/tick.png" alt="" />
        <div class="tck-a">Payment Success</div>
        <div class="tck-b" @click="closediang">Check order</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: [],
      sum: 0,
      show: false,
      booksshow: false
    };
  },
  methods: {
    subshuliang(val) {
      if (this.order[val].shuliang !== 1) {
        this.order[val].shuliang--;
        this.$store.commit("addOrder2", this.order[val]);
      }
    },
    closediang() {
      this.show = false;
    },
    addshuliang(val) {
      this.order[val].shuliang++;
      this.$store.commit("addOrder2", this.order[val]);
    },
    closevanpopup() {
      this.bookList = [];
      this.order = [];
      this.$store.commit("closeOrder");
    },
    async sumbit() {
      if(this.order.length==0){
        return this.$notify({ type: "warning", message: "购物车里没有选购的书籍！" });
      }
      const { data: res } = await this.$axios({
        method: "post",
        url: "/api/buy",
        data: {
          order: this.order
        }
      });
      console.log(res);
      if (res.code !== "Y") {
        return this.$notify({ type: "danger", message: "购买失败" });
      } else {
        this.show = true;
        return 
      }
    }
  },
  computed: {
    sunprice() {
      var sum = 0;
      this.order.forEach(item => {
        sum += item.price * item.shuliang;
      });
      this.sum = sum;
      return sum;
    }
  },
  filters: {
    getprice(val) {
      var x = val + "";
      if (x.length < 4) {
        if (x.includes(".")) {
          return x + "00";
        }
        return x + ".00";
      } else {
        return x;
      }
    }
  },
  created() {
    this.order = this.$store.state.Order;  
  }
};
</script>
<style lang="less" scoped>
.base {
  width: 100vw;
  height: 100%;
  background-color: #f6f7f9;
}
.tishiwenzi {
  width: 100vw;
  height: 27.7333vw;
  font-size: 3.7333vw;
  position: relative;
  div {
    width: 100vw;
    height: 10.6667vw;
    text-align: center;
    line-height: 10.6667vw;
  }
  img {
    width: 13.3333vw;
    height: 13.3333vw;
    position: relative;
    left: 43vw;
  }
}
.van-popup {
  border: 1px solid #1a80ff;
}
.tck {
  width: 87.2vw;
  height: 88.5333vw;
  position: relative;
  background-color: #f6f7f9;
  img {
    position: absolute;
    top: 18.6667vw;
    left: 31.7333vw;
  }
  .tck-a {
    position: absolute;
    top: 49.6vw;
    left: 24vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .tck-b {
    position: absolute;
    top: 65.8667vw;
    left: 17.0667vw;
    width: 53.3333vw;
    height: 12vw;
    border-radius: 6vw;
    background-color: #efeded;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
    line-height: 12vw;
  }
}
.main {
  width: 100vw;
  min-height: 81.6vw;
  background-color: white;
  margin-top: 12.8666vw;
  .main-book {
    width: 87.7333vw;
    height: 37.0667vw;
    border-top: 1px solid #e3e3e3;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .book-left {
      width: 19.7333vw;
      height: 29.0667vw;
      img {
        width: 19.7333vw;
        height: 29.0667vw;
      }
    }
    .book-content {
      width: 60.4vw;
      height: 29.0667vw;
      .content-a {
        font-size: 4.4667vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
      .content-b {
        font-size: 3.2vw;
        color: #000000;
        font-family: "Open Sans";
        margin: 5.3333vw 0vw;
      }
      .content-c {
        width: 60.4vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content-c-left {
          width: 24vw;
          height: 6.4vw;
          border-radius: 3.2vw;
          background-color: #efeded;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 2.6667vw;
        }
        .content-c-right {
          width: 15.2vw;
          height: 6.4vw;
          border-radius: 3.2vw;
          background-color: #efeded;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 2.6667vw;
          font-size: 3.4667vw;
          color: #000000;
          font-family: "Open Sans";
        }
      }
    }
  }
  .ts1 {
    border: none;
  }
  .main-ts {
    width: 100vw;
    height: 5.3333vw;
    background-color: #f6f7f9;
  }
}
.sumprice {
  width: 100vw;
  background-color: white;
  margin-top: 2.6667vw;
  .sumprice-title {
    width: 100vw;
    height: 11.2vw;
    padding-left: 6.6667vw;
    line-height: 11.2vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .sumprice-content {
    width: 86.6667vw;
    height: 14.1333vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    .title {
      font-size: 3.7333vw;
      color: #b4b4b4;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .sumprice-price {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .ts2 {
    border: none;
    height: 24.5333vw;
  }
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 13.0667vw;
  border-top: 1px solid #cacaca;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  .btn-b {
    width: 49.6vw;
    height: 8.8vw;
    border-radius: 4.4vw;
    filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
