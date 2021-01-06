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
      <span> Products</span>
      <img class="img2" @click="tiao" src="../../img/Path 3.png" alt="" />
    </div>
    <div class="body">
      <div class="float-left">Science & Technology</div>
      <div class="float-right">New York Times Bestseller</div>
      <div class="many">${{ show.price }}</div>
      <van-swipe class="my" indicator-color="white">
        <van-swipe-item> <img :src="show.imgUrl" alt="" /></van-swipe-item>
        <van-swipe-item><img :src="show.imgUrl" alt="" /></van-swipe-item>
        <van-swipe-item><img :src="show.imgUrl" alt="" /></van-swipe-item>
      </van-swipe>
      <div class="xian"></div>
      <div class="font">Formats and editions</div>
      <van-swipe
        class="my-swipe"
        indicator-color="white"
        :width="117"
        :loop="false"
        :show-indicators="false"
      >
        <van-swipe-item>
          <div class="rot">
            {{ show.otherPrice[0].platform }}
            <span>${{ show.otherPrice[0].price }}</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="rot">
            {{ show.otherPrice[1].platform }}
            <span>${{ show.otherPrice[1].price }}</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="rot">
            {{ show.otherPrice[2].platform }}
            <span>${{ show.otherPrice[2].price }}</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="rot">
            {{ show.otherPrice[3].platform }}
            <span>${{ show.otherPrice[3].price }}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="qu">Quantity</div>
      <div class="jisuan">
        <div class="img1" @click="sub">
          <img src="../../img/Path 7.png" alt="" />
        </div>
        <span>{{ mynum }}</span>
        <div class="img2" @click="add">
          <img src="../../img/Path 6.png" alt="" />
        </div>
      </div>
      <div class="count">
        {{ show.des }}
      </div>
      <div class="footer">
        <div class="footer-up">
          <div class="footer-left" @click="gouwuche(show)">Add to car</div>
          <div class="footer-right">Buy Now</div>
        </div>
        <div footer-down></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     newnum:0
    };
  },
  computed: {
    show: function () {
      return this.$store.state.mmy;
    },
    mynum() {
      return this.$store.state.num;
    },
  },
  methods: {
    sub() {
      if (this.$store.state.num > 0) {
        this.$store.commit("sub");
      } else {
        alert("不能减了");
      }
    },
    add() {
      this.$store.commit("add");
        this.newnum = this.$store.state.num 
    },

    tiao() {
      this.$router.push("/car");
    },
    goback() {
      this.$router.go(-1);
    },
    gouwuche(item) {
     
      this.$store.state.arrs.push(item);
     
     
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
  margin-top: 2.6667vw;
  background-color: #ffffff;
  .float-left {
    display: inline-block;
    margin-left: 6.4vw;
    font-size: 3.4667vw;
    color: #a3a3a3;
    font-family: "Open Sans";
  }
  .float-right {
    border-radius: 1.0667vw;
    display: inline-block;
    margin-top: 2.6667vw;
    height: 6.9333vw;
    width: 46.6667vw;
    line-height: 7.2vw;
    color: #ffffff;
    background-color: #000000;
    font-size: 3.4667vw;
    margin-left: 6.4vw;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
  }
  .many {
    margin-top: 3.2vw;
    margin-left: 6.4vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .my {
    img {
      width: 40vw;
      height: 60.5333vw;
      margin-top: 8.2667vw;
      margin-left: 30.1333vw;
      text-align: center;
    }
  }
  .xian {
    width: 92.5333vw;
    margin-top: 19.7333vw;
    border: 0.1333vw solid #e3e3e3;
  }
  .font {
    margin-top: 4vw;
    margin-left: 6.6667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .my-swipe .van-swipe-item {
    margin-top: 4.5333vw;
    .rot {
      width: 26.6667vw;
      margin-left: 6.4vw;
      padding-left: 2.4vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 0.1333vw solid #c4c4c4;
    }
    span {
      margin-right: 2.9333vw;
    }
  }
  .qu {
    margin-left: 6.4vw;
    margin-top: 5.0667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .jisuan {
    margin-top: 4vw;
    margin-left: 6.4vw;
    display: inline-block;
    width: 31.2vw;
    height: 8.8vw;
    padding-top: 2.4vw;
    margin-bottom: 4vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 0.4vw solid #c4c4c4;
    .img1 {
      display: inline-block;
      margin-left: 3.4667vw;
      width: 3.7333vw;
    }
    .img2 {
      display: inline-block;

      margin-left: 5.3333vw;
      width: 3.7333vw;
      height: 3.7333vw;
    }
    span {
      margin-left: 7.7333vw;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 22.4vw;
    background-color: #000000;
    .footer-up {
      text-align: center;
      display: flex;
      padding-top: 3.7333vw;
      width: 100vw;
      height: 13.0667vw;
      background-color: #ffffff;
      .footer-left {
        margin-left: 8.8vw;
        width: 28vw;
        height: 9.8667vw;
        border-radius: 5.0667vw;
        background-color: #efeded;
        font-size: 3.7333vw;
        color: #818181;
        font-weight: bold;
        font-family: "Open Sans";
        line-height: 9.8667vw;
      }
      .footer-right {
        margin-left: 4.8vw;
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
        width: 49.6vw;
        height: 9.8667vw;
        border-radius: 5.0667vw;
        line-height: 9.8667vw;
        filter: drop-shadow(0px 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
        background-color: #060aff;
      }
    }
  }
  .count {
    margin-top: 2.6667vw;
    padding-left: 6.9333vw;
    background-color: #ffffff;
    height: 53.3333vw;
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
</style>