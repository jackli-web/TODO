<template>
  <div class="big-box">
    <div class="headd"></div>
    <div class="head">
      <img
        class="img1"
        @click="goback"
        src="../../img/Icon ionic-ios-arrow-back.png"
        alt=""
      />
      <span>Payment</span>
      <img class="img2" src="../../img/Path 3.png" alt="" />
    </div>
    <div class="body" :key="index" v-for="(item, index) in lk">
     
      <div class="cont">
        <div class="img"><img :src="item.imgUrl" alt="" /></div>
        <div class="big">
          <div>
            <div>{{ item.bookName}}</div>
          </div>
          <div class="zuozhe">{{ item.author }}</div>
          <div class="all">
            <div class="jisuan">
              <div class="img1" @click="sub">
                <img src="../../img/Path 7.png" alt="" />
              </div>
              <span>{{ mynum }}</span>
              <div class="img2" @click="add">
                <img src="../../img/Path 6.png" alt="" />
              </div>
            </div>
            <div class="cs">$ {{ item.price * mynum }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="bill">Billing Information</div>
      <div class="box1">
        Buy new <span>${{ show.price * mynum }}</span>
      </div>
      <div class="xian"></div>
      <div class="box1">Shipping <span>$3.00</span></div>
      <div class="xian"></div>
      <div class="box1">Only 6 left in stock (more on the way).</div>
      <div class="xian"></div>
      <div class="box2">
        <div>This item ships to 18 Wall St, Us.</div>
        <div>Get it by Thursday, April 16 - Friday, April 24</div>
        <div>Choose this date at checkout.</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-up"><div @click="tangchuan">Buy Now</div></div>
      <div class="footer-down"></div>
    </div>
   
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      lk: {},
     
    };
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.lk = this.$store.state.arrs
    },
    sub() {
      if (this.$store.state.num > 0) {
        this.$store.commit("sub");
      } else {
        alert("不能减了");
      }
    },
    add() {
      this.$store.commit("add");
    },
    tangchuan() {
      Dialog.alert({
        title: "标题",
        message: "支付成功",
      }).then(() => {
        // on close
      });
    },
    goback() {
      this.$router.go(-1);
    },
  },
  computed: {
    mynum() {
      return this.$store.state.num;
    },
    show: function () {
      return this.$store.state.mmy;
    },
  },
};
</script>

<style lang='less' scoped>
.headd {
  height: 11.7333vw;
  background-color: #ffffff;
}

.head {
  width: 100vw;
  height: 12.5333vw;
  background-color: #ffffff;
  span {
    float: left;
    margin-top: 3.4667vw;
    margin-left: 35.7333vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.head {
  .img1 {
    padding-left: 6.4vw;
    margin-top: 2.9333vw;
    float: left;
  }
}
.head {
  .img2 {
    padding-right: 6.4vw;
    margin-top: 2.9333vw;
    float: right;
  }
}
.big-box {
  height: 216.5333vw;
}
.body {
  padding-top: 3.7333vw;
  padding-left: 6.1333vw;
  background-color: #ffffff;
  margin-top: 2.6667vw;
  .cont {
    display: flex;
    .img {
      img {
        width: 19.7333vw;
        height: 29.0667vw;
      }
    }
    .big {
      margin-left: 4.8vw;
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      .zuozhe {
        margin-top: 3.7333vw;
        font-size: 3.2vw;
        color: #9b9b9b;
        font-family: "Open Sans";
      }
      .all {
        display: flex;
        .jisuan {
          margin-top: 4vw;
          display: inline-block;
          width: 24vw;
          height: 6.4vw;
          border-radius: 3.2vw;
          background-color: #efeded;
          border: 0.4vw solid #c4c4c4;
          .img1 {
            display: inline-block;
            margin-left: 3.7333vw;
            width: 2.9333vw;
          }
          .img2 {
            display: inline-block;

            margin-left: 2.6667vw;
            width: 2.9333vw;
            height: 2.9333vw;
          }
          span {
            margin-left: 4.8vw;
          }
        }
        .cs {
          padding-left: 2.1333vw;
          margin-left: 23.7333vw;
          margin-top: 4vw;
          width: 15.2vw;
          height: 4.8vw;
          border-radius: 2.4vw;
          background-color: #efeded;
        }
      }
    }
  }
}
.big-box {
  .content {
    padding-left: 6.6667vw;
    padding-right: 5.8667vw;
    width: 86.6667vw;
    height: 77.3333vw;
    margin-top: 2.6667vw;
    background-color: #ffffff;
    .bill {
      height: 11.4667vw;
      line-height: 11.4667vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .box1 {
      height: 8vw;
      line-height: 8vw;
      font-size: 3.7333vw;
      color: #c4c4c4;
      font-weight: bold;
      font-family: "Open Sans";
      span {
        float: right;
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
    .xian {
      margin-top: 3.7333vw;
      margin-bottom: 2.9333vw;
      width: 87.2vw;
      border: 0.1333vw solid #e3e1e1;
    }
    .box2 {
      height: 19.4667vw;
      font-size: 3.7333vw;
      color: #c4c4c4;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
}
.big-box {
  .footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 29.6vw;
    background-color: #000;
    .footer-up {
      width: 74.6667vw;
      height: 20.5333vw;
      padding-top: 5.0667vw;
      padding-left: 25.3333vw;
      background-color: #ffffff;
      div {
        text-align: center;
        line-height: 9.8667vw;
        width: 49.6vw;
        height: 9.8667vw;

        border-radius: 5.0667vw;
        filter: drop-shadow(0 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
        background-color: #060aff;
      }
    }
  }
}
</style>