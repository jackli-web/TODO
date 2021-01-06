<template>
  <div class="payment_box clearfix">
    <top :title="title"></top>
    <div class="payment_cart clearfix">
      <div class="w">
        <ul>
          <li v-for="(item, index) in Info" :key="index">
            <img :src="item.imgUrl" />
            <div class="des">
              <div class="des_top">
                {{ item.bookName }}
              </div>
              {{ item.author }}
            </div>
            <div class="number">
              <div class="number_left">
                <span
                  class="iconfont icon-jian left"
                  :class="item.num <= 1 ? 'disable' : ''"
                  @click="sub(item.num, index)"
                ></span>
                {{ item.num }}
                <span
                  class="iconfont icon-jia right"
                  @click="add(item.num, index)"
                ></span>
              </div>
              <div class="number_right right">＄{{ item.price }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy">
      <div class="w">
        <div class="buy_one">Billing Information</div>
        <div class="Buy_new">
          <div class="Buy_new_left">Buy new</div>
          <div class="Buy_new_right">＄{{ total }}</div>
        </div>
        <div class="Buy_new">
          <div class="Buy_new_left">shipping</div>
          <div class="Buy_new_right">+＄3.00</div>
        </div>
        <div class="Buy_new">
          <div class="Buy_new_left">Only 6 left in stock(more on the way)</div>
        </div>
        <div class="Buy_new dif">
          <div class="Buy_new_left">
            This item ships to 18 Wall St, Us.Get it by ThurSday,April 16 -
            Friday,April 24 Choose this date at checkout.
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_top">
        <div class="btn" @click="open">Buy Now</div>
      </div>
    </div>
    <div class="zhezhao" v-show = show>
      <div class="close" @click="close">×</div>
      <img src="../../assets/image/icon.png">
      <div class="close_title">Payment Success</div>
      <div class="check">Check Order</div>
    </div>
  </div>
</template>

<script>
import top from "../common/top";
export default {
  data() {
    return {
      title: "Payment",
      Info: [],
      num_one: "",
      total: 0,
      Info_one: {},
      sessionKeys: [],
      show: false
    };
  },
  components: {
    top,
  },
  created() {
    this.getInfo();
    this.getTotal();
  },
  methods: {
    close() {
      this.show = false
    },
    open() {
      this.show = true
    },
    getInfo() {
      var sessionKeys = Object.keys(sessionStorage);
      this.sessionKeys = sessionKeys;
      for (var i = 0; i < sessionKeys.length; i++) {
        if(sessionKeys[i] === 'username' || sessionKeys[i] === 'password') {
          continue
        }else {
          this.Info.push(JSON.parse(sessionStorage.getItem(sessionKeys[i])));
        }
      }
    },
    add(number, index) {
      this.num_one = number + 1;
      this.Info[index].num = this.num_one;
      window.sessionStorage.setItem(
        this.sessionKeys[index],
        JSON.stringify(this.Info[index])
      );
      this.getTotal();
    },
    sub(number, index) {
      this.num_one = number - 1;
      this.Info[index].num = this.num_one;
      window.sessionStorage.setItem(
        this.sessionKeys[index],
        JSON.stringify(this.Info[index])
      );
      this.getTotal();
    },
    getTotal() {
      var total = 0;
      this.Info.forEach((item) => {
        total += item.price * (item.num - 0);
      });
      this.total = total.toFixed(2);
    },
  },
};
</script>

<style lang="less" scoped>
.disable {
  pointer-events: none;
  cursor: default;
}
.payment_box {
  width: 100vw;
}
.payment_cart {
  width: 100vw;
  padding: 0;
  background-color: #fff;
  margin-top: 2.6667vw;
  margin-bottom: 2.6667vw;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
    list-style: none;
    float: left;
    width: 100%;
    padding: 3.7333vw 0;
    border-bottom: 0.2667vw solid #e3e3e3;
    img {
      width: 19.7333vw;
      height: 29.0667vw;
    }
    .des {
      position: absolute;
      top: 3.7333vw;
      left: 24.5333vw;
      width: 47.4667vw;
      height: 18.6667vw;
      font-size: 3.2vw;
      color: #9f9f9f;
      font-family: "Open Sans";
      .des_top {
        max-height: 11.2vw;
        min-height: 2.9333vw;
        overflow: hidden;
        font-size: 3.4667vw;
        color: #000;
        font-weight: bold;
        font-family: "Open Sans";
        margin-bottom: 2.6667vw;
      }
    }
  }
  ul li:last-child {
    border: none;
  }
  .number {
    position: absolute;
    bottom: 4.2667vw;
    left: 0;
    width: 100%;
    height: 6.4vw;
    .number_left {
      position: absolute;
      padding: 0 1.0667vw;
      left: calc(30.9333vw - 6.4vw);
      text-align: center;
      width: calc(24vw - 1.0667vw - 1.0667vw);
      height: 6.4vw;
      border-radius: 3.2vw;
      background-color: #efeded;
      line-height: 6.4vw;
      span {
        color: #000;
      }
    }
    .number_right {
      width: 15.2vw;
      height: 4.8vw;
      border-radius: 2.4vw;
      background-color: #efeded;
      text-align: center;
    }
  }
}
.buy {
  width: 100vw;
  height: 78.3333vw;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 29.6vw;
  .buy_one {
    margin-top: 3.7333vw;
    margin-bottom: 4.5333vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .Buy_new {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8vw;
    line-height: 8vw;
    padding: 3.7333vw 0;
    border-bottom: 1px solid #e3e1e1;
    .Buy_new_left {
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
    }
    .Buy_new_right {
      font-size: 3.7333vw;
      color: #000;
      font-weight: bold;
    }
  }
  .dif {
    border: none !important;
    line-height: 1.25 !important;
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 29.6vw;
  background-color: #000;
  .bottom_top {
    width: 100%;
    height: 20.2667vw;
    background-color: #fff;
    overflow: hidden;
    .btn {
      margin: auto;
      margin-top: 5.0667vw;
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      filter: drop-shadow(0px 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
      background-color: #060aff;
      text-align: center;
      line-height: 9.8667vw;
      font-size: 4.2667vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
}
.zhezhao {
  position: absolute;
  top: 43.4667vw;
  left: 6.4vw;
  width: 87.2vw;
  height: 88.5333vw;
  border-radius: 7.2vw;
  background-color: #ffffff;
  .close {
    position: absolute;
    top: 6.4vw;
    right: 6.4vw;
    font-size: 6.4vw;
    z-index: 3;
  }
  .close_title {
    position: absolute;
    top: 49.6vw;
    left: 24vw;
    width: 41.4667vw;
    height: 4.5333vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    z-index: 3;
  }
  img {
    width: 90%;
    position: absolute;
    left: 8vw;
    top: 5.3333vw;
    z-index: 1;
  }
  .check {
    position: absolute;
    text-align: center;
    line-height: 12vw;
    bottom: 10.6667vw;
    left: 17.0667vw;
    width: 53.3333vw;
    height: 12vw;
    border-radius: 6.1333vw;
    background-color: #efeded;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
</style>