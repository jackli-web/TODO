<template>
  <div>
    <div class="header">
      <div class="header-top"></div>
      <div class="header-buttom">
        <div>
          <img class="pic" src="@/assets/1.png" alt @click="goback" />
        </div>
        <div class="wold">Products</div>
        <div>
          <img class="pic" src="@/assets/2.png" alt @click="jumpto('placeorder')" />
        </div>
      </div>
    </div>
    <div class="mi"></div>
    <div class="countent">
      <div class="count">
        <div class="count-left">{{seftinfo.bookName}}</div>
        <div class="count-right">New York Times Bestseller</div>
      </div>
      <div class="pice">${{seftinfo.price}}</div>
      <div class="books">
        <div class="book">
          <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item>
              <img class="bookicon" :src="seftinfo.imgUrl" />
            </van-swipe-item>
            <van-swipe-item>
              <img class="bookicon" :src="seftinfo.imgUrl" />
            </van-swipe-item>
            <van-swipe-item>
              <img class="bookicon" :src="seftinfo.imgUrl" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="icon">
          <span>♡</span>
        </div>
      </div>
    </div>
    <div class="lis">
      <hr />
    </div>
    <div class="conter">
      <div class="word">Formats and editions</div>
      <div class="part">
        <div class="innerbox" v-for="(item,index) in seftinfo.otherPrice" :key="(item,index)">
          <div class="part1">
            <div class="worde">{{item.platform}}</div>
            <div class="text">${{item.price}}</div>
          </div>
        </div>
      </div>
      <div class="words">Quantity</div>
      <div class="compt">
        <div class="jian" @click="adds"></div>
        <div class="count">{{storeor}}</div>
        <div class="jia" @click="add">+</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-t">
        <div class="btn-l" @click="addtoca">Add to cart</div>
        <div class="btn-r" @click="jumpto">Buy Now</div>
      </div>
      <div class="footer-r">
        <div class="til"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      count:this.$store.state.count,
      seftinfo: this.$route.query
    };
  },

  methods: {
    jumpto() {
      this.$router.push({ name: "placeorder" });
    },
    adds() {
     this.$store.commit('increment1')
    },
    add() {
      this.$store.commit('increment')
    },
    goback() {
      this.$router.go(-1);
    },
    addtoca() {
      var obj = { ...this.seftinfo, count: this.count };
      this.$store.commit("addtocart", obj);
    }
  },
  computed: {
    storeorders: function() {
      return this.$store.state.orders;
    },
     storeor: function() {
      return this.$store.state.count;
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
.countent {
  height: 89.8667vw;
  margin-top: 2.6667vw;
  width: 100vw;
  filter: drop-shadow(0px 0px 3.5px rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
  .count {
    display: flex;
    padding-left: 6.4vw;
    padding-right: 6.4vw;
    justify-content: space-between;
    align-items: center;
    .count-left {
      font-size: 3.4667vw;
      color: #000000;
      font-family: "Open Sans";
    }
    .count-right {
      font-size: 3.4667vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: center;
      width: 46.6667vw;
      height: 6.9333vw;
      border-radius: 1.0667vw;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .pice {
    margin-left: 6.4vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .books {
    height: 76.5333vw;
    .book {
      margin-top: 8.2667vw;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 5.3333vw;
        text-align: center;
        .bookicon {
          width: 40vw;
          height: 60.5333vw;
        }
      }
    }
    .icon {
      width: 8.8vw;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #e7e7e7;
      float: right;
      margin-right: 6.1333vw;
      position: relative;
      bottom: 1.0667vw;
      span {
        font-size: 6vw;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
  }
}
.lis {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92.5333vw;
  margin-left: 3.7333vw;
  margin-top: 12vw;
  hr {
    width: 92.5333vw;
    color: #e3e3e3;
  }
}
.conter {
  height: 46.1333vw;
  margin-left: 6.4vw;

  .word {
    margin-top: 4vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .part {
    position: relative;
    cursor: grab;
    user-select: none;
    overflow-x: scroll;
    white-space: nowrap;
    //css中强制不换行，文本不会换行
    .innerbox {
      display: inline-block;
    }
    .part1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4.5333vw;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 0.4vw solid #c4c4c4;
      margin-right: 2.1333vw;

      .worde {
        margin-left: 2.4vw;
        font-size: 3.7333vw;
        color: #000000;
        font-family: "Open Sans";
      }
      .text {
        margin-left: 5.3333vw;
        margin-right: 2.9333vw;
        font-size: 3.7333vw;
        color: #000000;
        font-family: "Open Sans";
      }
    }
  }
  .words {
    margin-top: 5.0667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .compt {
    margin-top: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 31.2vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 0.4vw solid #c4c4c4;

    .jian {
      margin-left: 3.4667vw;
      width: 3.7333vw;
      background-color: #000000;
      border: 0.5333vw solid #000000;
    }
    .count {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .jia {
      font-size: 9.4vw;
      margin-right: 3.2vw;
    }
  }
}
.footer {
  width: 100vw;
  height: 22.4vw;
  position: fixed;
  bottom: 0;
  .footer-t {
    background: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100vw;
    height: 13.0667vw;
    filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
    background-color: #f9f9f9;
    .btn-l {
      margin-left: 8.8vw;
      margin-top: 3.7333vw;
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.7333vw;
      color: #818181;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .btn-r {
      margin-right: 8.8vw;
      margin-top: 3.7333vw;
      margin-left: 4.8vw;
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
.van-swipe {
  overflow: hidden;
  opacity: 2;
}
.van-swipe__indicators {
  position: fixed;
  bottom: 0;
}
.van-swipe__indicator {
  width: 8.8vw;
  height: 0.8vw;
  border-radius: 0;
  background-color: black;
}
.van-swipe__indicator--active {
  background-color: black;
}
</style>