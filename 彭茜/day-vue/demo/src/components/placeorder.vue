<template>
  <div>
    <div class="header">
      <div class="header-top"></div>
      <div class="header-buttom">
        <div>
          <img class="pic" src="@/assets/1.png" alt @click="goback" />
        </div>
        <div class="wold">Payment</div>
        <div>
          <img class="pic" src="@/assets/2.png" alt @click="jumpto('placeorder')" />
        </div>
      </div>
    </div>
    <div class="mi"></div>
    <div class="contet">
      <div class="part" v-for="(item,index) in storeorders" :key="(item,index)">
        <div>
          <img class="pic" :src="item.imgUrl" alt />
        </div>
        <div class="row">
          <div class="title">{{item.des}}</div>
          <div class="text">{{item.author}}</div>
          <div class="btn">
            <div class="btn-l">
              <div class="jian" @click="adds">-</div>
              <div class="count">{{storeor}}</div>
              <div class="jia" @click="add">+</div>
            </div>
            <div class="btn-r">${{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hold">
      <div class="holds">
        <div class="nav">Billing Information</div>
        <div class="allpri">
          <div>Buy new</div>
          <div>$</div>
        </div>
        <hr />
        <div class="newpicre">
          <div>Shipping</div>
          <div>$</div>
        </div>
        <hr />
        <div class="only">Only 6 left in stock (more on th</div>
        <hr />
        <div
          class="sers"
        >This item ships to 18 Wall St, Us. Get it by Thursday, April 16 - Friday, April 24 Choose this date at checkout.</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-t">
        <div class="btn-r" @click="massge">Buy Now</div>
      </div>
      <div class="footer-r">
        <div class="til"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      count: this.$store.state.orders.count
    };
  },
  computed: {
    storeorders: function() {
      return this.$store.state.orders;
    },
    storeor: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    jumpto(str) {
      this.$router.push({ name: str });
    },
    goback() {
      this.$router.go(-1);
    },
    adds() {
      this.$store.commit("increment1");
    },
    add() {
      this.$store.commit("increment");
    },
    massge() {
    
      Dialog.alert({
        
        message: "Payment Success",
        theme: "round-button"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  // position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100vw;
}
.header-top {
  height: 11.7333vw;
}
.header-buttom {
  background-color: #fff;
  display: flex;
  margin-left: 6.4vw;
  margin-right: 6.4vw;
  height: 12.5333vw;
  align-items: center;
  justify-content: space-between;
  .pic {
    height: 5.3333vw;
    align-items: center;
  }
  .wold {
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.mi {
  height: 2.6667vw;
  background-color: #efeded;
}
.contet {
  .part {
    display: flex;
    margin-left: 6.1333vw;
    margin-right: 6.133vw;
    border-bottom: 0.2667vw solid #e3e3e3;
    .pic {
      margin-top: 4vw;
      width: 19.7333vw;
      height: 29.0667vw;
      margin-bottom: 4.8vw;
    }
    .row {
      margin-left: 4.8vw;
      .title {
        margin-top: 4.8vw;
        width: 47.4667vw;
        height: 9.4vw;
        font-size: 3.4667vw;
        display: inline-block;
        overflow-x: scroll;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
      .text {
        margin-top: 2.4vw;
        font-size: 3.2vw;
        color: #000000;
        font-family: "Open Sans";
      }
      .btn {
        margin-top: 3.7333vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-l {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 24vw;
          height: 6.4vw;
          border-radius: 3.2vw;
          background-color: #efeded;
          .jian {
            margin-left: 3.4667vw;
            font-size: 8.4vw;
          }
          .count {
            font-size: 3.7333vw;
            color: #000000;
            font-weight: bold;
            font-family: "Open Sans";
          }
          .jia {
            font-size: 6.4vw;
            margin-right: 3.2vw;
          }
        }
        .btn-r {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3.4667vw;
          color: #000000;
          font-family: "Open Sans";
          width: 15.2vw;
          height: 4.8vw;
          border-radius: 2.4vw;
          background-color: #efeded;
        }
      }
    }
  }
}
.holds {
  padding-left: 6.6667vw;
  padding-right: 6.6667vw;
  hr {
    border: 0.2667vw solid #e3e1e1;
  }
  .nav {
    height: 3.7333vw;
    width: 33.6vw;
    padding-top: 3.7333vw;
    margin-bottom: 4vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .allpri {
    height: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-bottom: 3.7333vw;
  }
  .newpicre {
    height: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-bottom: 3.7333vw;
    margin-top: 2.9333vw;
  }
  .only {
    height: 8vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-bottom: 3.7333vw;
    margin-top: 2.9333vw;
  }
  .sers {
    height: 19.4667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-top: 2.9333vw;
  }
}
.footer {
  width: 100vw;
  height: 29.6vw;
  position: fixed;
  bottom: 0;
  .footer-t {
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100vw;
    height: 20.5333vw;
    filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
    background-color: #f9f9f9;
    .btn-r {
      margin-top: 3.7333vw;
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
      background-color: #060aff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4.2667vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .footer-r {
    width: 100vw;
    height: 9.0667vw;
    background-color: #000000;
    position: relative;
    .til {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35.7333vw;
      height: 1.3333vw;
      border-radius: 0.8vw;
      background-color: #000000;
      margin-left: 32.2667vw;
      margin-top: 5.3333vw;
    }
  }
}
</style>
<style>
.van-dialog {
  width: 87.2vw;
  height: 88.5333vw;
}
.van-dialog__content--isolated {
  height: 54.1333vw;
  margin-bottom: 11.7333vw;
}
.van-dialog--round-button .van-dialog__footer {
  padding: 0 16.9333vw;
}
.van-dialog--round-button .van-dialog__confirm {
  height: 12vw;
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0);
}
.van-dialog--round-button .van-dialog__message{
  margin-top: 50.4vw;
  font-size: 4.8vw;
color: #000000;
font-weight: bold;
font-family: "Open Sans";
}
</style>