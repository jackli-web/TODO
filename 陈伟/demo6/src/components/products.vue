<template>
  <div class="bigbox">
    <div class="head">
      <div class="icon" @click="jumpto">
        <a href="#"
          ><img class="pic" src="../assets/ionic-ios-arrow-back.png"
        /></a>
      </div>
      <div class="headtit"><span class="word">Products</span></div>
      <div class="icon">
        <a href="#"><img class="pic1" src="@/assets/Path 5.png" /></a>
      </div>
    </div>
    <div class="content">
      <div class="part1">
        <div class="word">{{ selfinfo.bookName }}</div>
        <div class="container"><span>New York Times Bestseller</span></div>
      </div>
      <div class="price">
        <div>${{ selfinfo.price }}</div>
      </div>
      <div class="part2">
        <div class="carouselbox">
          <div class="innerbox">
            <!-- <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in arr" :key="index">
              <img class="bookicon" :src="item.imgUrl" />
            </van-swipe-item>
          </van-swipe> -->
            <van-swipe
              class="my-swipe"
              :autoplay="3000"
              indicator-color="white"
            >
              <van-swipe-item
                ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
              /></van-swipe-item>
              <van-swipe-item
                ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
              /></van-swipe-item>
              <van-swipe-item
                ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
              /></van-swipe-item>
            </van-swipe>
          </div>
          <div class="icon">
            <img
              class="pic"
              src="../assets/feather-heart.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div class="otherinfo">
        <div class="smallbox">
          <div class="word">Formats and editions</div>
          <div class="business">
            <div
              class="anot"
              v-for="(item, index) in selfinfo.otherPrice"
              :key="index"
            >
              <div class="item">
                <div class="gt left">{{ item.platform }}</div>
                <div class="gt">{{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="smallbox">
          <div class="word">Quantity</div>
          <div class="quantity">
            <!-- <button @click="des">-</button>
            <span>{{ count }}</span>
            <button @click="add">+</button> -->
            <div class="count">
              <div @click="des">-</div>
              <span>{{ count }}</span>
              <div @click="add">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="content2">
      <div class="formats">
        <div class="tit"><span>Formats and editions</span></div>
        <div class="box">
          <div>
            <div class="Kindle">
              <div>Kindle</div>

              <div>$8.03</div>
            </div>
          </div>

          <div>
            <div class="Hardcover">
              <div>Hardcover</div>

              <div>$14.29</div>
            </div>
          </div>

          <div>
            <div class="Paperpack">
              <div>Paperpack</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quantity">
        <div class="tit"><span>Quantity</span></div>
        <div>
          <div class="count">
            <div>-</div>
            <span>1</span>
            <div>+</div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="des">
      <div>New York Times Bestseller</div>
      <div>Winner of the 2019 Goodreads Choice Award for</div>
      <div>Science & Technology</div>
    </div>
    <div class="footer">
      <div>
        <button class="btn1" @click="addtoca"><span>Add to cart</span></button>
      </div>
      <div>
        <button class="btn2" @click="jumpt"><span>Buy Now</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import payment from "./payment";
export default {
  data() {
    return {
      selfinfo: this.$route.query,
      count: 1,
    };
  },
  methods: {
    jumpto() {
      this.$router.push({ name: "HelloWorld" });
    },
    add() {
      this.count++;
    },
    des() {
      this.count--;
    },
    addtoca() {
      var obj = { ...this.selfinfo, count: this.count };
      this.$store.commit("addtocart", obj);
    },
    jumpt() {
      this.$router.push({ name: "payment" });
    },
  },
  computed: {
    storeorders: function () {
      return this.$store.state.orders;
    },
  },

  // beforeMount() {
  //   this.$axios({
  //     url: "/api/books",
  //     method: "get",
  //     data: {},
  //   }).then((res) => {
  //     console.log("res", res);
  //     this.arr = res.data.info;
  //   });
  // },
};
</script>

<style lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
.van-swipe-item {
  height: 68.2667vw;
}
.van-swipe__indicators {
  bottom: 0;
}
.van-swipe__indicator {
  display: inline-block;
  width: 8.8vw;
  border-radius: 0;
  height: 2px;
  background-color: rgb(163, 162, 162);
  &.van-swipe__indicator--active {
    background-color: black;
  }
}
</style>
<style lang='less' scoped>
* {
  margin: 0vw;
  padding: 0vw;
}
.bigbox {
  .head {
    position: fixed;
    top: 0;
    box-sizing: border-box;
    width: 100vw;
    padding-left: 6.469vw;
    padding-right: 6.469vw;
    height: 12.6685vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-bottom: 2.6954vw;
    .pic {
      width: 2.965vw;
    }
    .pic1 {
      width: 5.3908vw;
    }
    .word {
      font-size: 4.3127vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      position: relative;
      top: -1.0782vw;
    }
  }
  .content {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    padding-bottom: 8.0863vw;
    .part1 {
      padding-left: 6.7385vw;
      padding-right: 6.469vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      .word {
        font-size: 3.4667vw;
        color: #000000;
        font-family: "Open Sans";
      }
      .container {
        border: 1px solid #b1b1b1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 46.6667vw;
        height: 6.9333vw;
        border-radius: 1.0667vw;
        background-color: #000000;
        span {
          font-size: 3.4667vw;
          color: #ffffff;
          font-weight: bold;
          font-family: "Open Sans";
          text-align: center;
        }
      }
    }
    .part2 {
      .carouselbox {
        position: relative;
        //   border:1px solid red;
        .innerbox {
          //   height:60.5333vw;
          padding-bottom: 12vw;
          border-bottom: 1px solid #e3e3e3;
          .pic {
            height: 60.5333vw;
          }
        }
        .icon {
          position: absolute;
          right: 4.8vw;
          bottom: 12vw;
        }
      }
    }
    .otherinfo {
      padding-top: 4vw;
      .smallbox {
        padding-bottom: 5.0667vw;
        .quantity {
          .tit {
            font-size: 3.7333vw;
            color: #000000;
            font-weight: bold;
            font-family: "Open Sans";
          }
          .count {
            margin-top: 4vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 3.2vw;
            padding-right: 3.2vw;
            width: 31.2vw;
            height: 8.8vw;
            border-radius: 4.5333vw;
            background-color: #ffffff;
            border: 0.4vw solid #c4c4c4;
            span {
              font-size: 3.7333vw;
              color: #000000;
              font-weight: bold;
              font-family: "Open Sans";
            }
            div {
              font-size: 8vw;
            }
          }
        }
      }
      .word {
        font-size: 14px;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        margin-bottom: 4.5333vw;
      }
      .business {
        //   display:flex;
        white-space: nowrap;
        // overflow: hidden;
        overflow-x: scroll;
        .anot {
          display: inline-block;
          margin-right: 2.1333vw;
        }
        .item {
          border: 1.5px solid #c4c4c4;
          border-radius: 4.5333vw;
          padding: 2.4vw 2.6667vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .gt {
            &.left {
              margin-right: 5.3333vw;
            }
          }
        }
      }
    }

    .price div {
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-left: 6.4vw;
    }
  }

  .content2 {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    padding-bottom: 8.0863vw;
    .formats {
      .tit {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
    .box {
      margin-top: 4vw;
      margin-bottom: 4vw;
      display: flex;
      padding-left: 3.4vw;
      padding-right: 3.4vw;
      justify-content: space-between;
      align-items: center;
      .Kindle {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        width: 31.2vw;
        height: 8.8vw;
        border-radius: 4.5333vw;
        background-color: #ffffff;
        border: 0.4vw solid #c4c4c4;
      }
      .Hardcover {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        width: 40.5333vw;
        height: 8.8vw;
        margin: 1.0667vw;
        border-radius: 4.5333vw;
        background-color: #ffffff;
        border: 0.4vw solid #060aff;
      }
      .Paperpack {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        width: 40.5333vw;
        height: 8.8vw;
        border-radius: 4.5333vw;
        background-color: #ffffff;
        border: 0.4vw solid #c4c4c4;
      }
    }
  }
  .des {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    // position: fixed;
    // bottom: 16vw;
    display: flex;
    flex-direction: column;
    padding-left: 8.8vw;
    padding-right: 5.8vw;
    box-sizing: border-box;
    width: 102.2vw;
    height: 16vw;
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .footer {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    // position: fixed;
    // bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8.8vw;
    padding-right: 5.8vw;
    box-sizing: border-box;
    width: 100vw;
    height: 13.2075vw;
    border: 0.2667vw solid #ccc;
    .btn1 {
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      span {
        font-size: 3.7333vw;
        color: #818181;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
    .btn2 {
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      span {
        font-size: 16px;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
}
</style>
