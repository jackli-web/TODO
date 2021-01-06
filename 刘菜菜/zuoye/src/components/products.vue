<template>
  <div class="products-total">
    <div class="products-head">
      <div class="head-content">
        <div class="arrow" @click="jumpto('cart')">
          <img class="arrow-img" src="../assets/arrow.png" alt="" />
        </div>
        <div class="txt">Products</div>
        <div class="products">
          <img class="products-img" src="../assets/cart.png" alt="" />
        </div>
      </div>
    </div>
    <div class="products-content">
      <div class="content-top">
        <div class="top-left">
          <div class="top-detail">Science & Technology</div>
          <div class="top-price">${{ seilinfo.price }}</div>
        </div>
        <div class="top-right">New York Times Bestseller</div>
      </div>
      <div class="carouselbox">
        <div class="innerbox">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item
              ><img class="pic" :src="seilinfo.imgUrl" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="pic" :src="seilinfo.imgUrl" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="pic" :src="seilinfo.imgUrl" alt=""
            /></van-swipe-item>
            <van-swipe-item
              ><img class="pic" :src="seilinfo.imgUrl" alt=""
            /></van-swipe-item>
          </van-swipe>
        </div>
        <div class="heart">
          <img class="heart-img" src="../assets/heart.png" alt="" />
        </div>
      </div>

      <div class="line"></div>
      <div class="content-button">
        <div class="txt1">Formats&nbsp;and&nbsp;editions</div>
        <div class="business">
          <div
            class="solt-txt"
            v-for="(item, index) in seilinfo.otherPrice"
            :key="index"
          >
            <div class="solt">
              <div class="type">{{ item.platform }}</div>
              <div class="price">{{ item.price }}</div>
            </div>
          </div>
        </div>
        <div class="txt2">Quantity</div>
        <div class="solt-txt1">
          <div class="jian" @click="del">-</div>
          <div class="num">{{ count }}</div>
          <div class="jia" @click="add">+</div>
        </div>
      </div>
      <div class="content-info"></div>
    </div>
    <div class="products-bottom">
      <div class="instruction">
        <div class="instructions-content">New York Times Bestseller</div>
        <div class="instructions-content">
          Winner of the 2019 Goodreads Choice Award for
        </div>
        <div class="instructions-content">Science & Technology</div>
      </div>
      <div class="bottom">
        <div class="bottom-top">
          <div class="add" @click="addtocar">Add to cart</div>
          <div class="buy" @click="jumpto('payment')">Buy Now</div>
        </div>
        <div class="bottom-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      info: {},
      current: 0,
      count: 1,
      seilinfo: this.$route.query,
    };
  },
  methods: {
    jumpto(str) {
      this.$router.push({
        name: str,
      });
    },
    onChange(index) {
      this.current = index;
    },
    add() {
      this.count++;
    },
    del() {
      if (this.count === 0) {
        this.count = 0;
        alert("已经是最少数量了哦");
      } else {
        this.count--;
      }
    },
    addtocar(info) {
      var obj = { ...this.seilinfo, count: this.count };
      this.$store.commit("addtocart", obj);
    },
  },
};
</script>
<style lang="less">
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
<style lang="less" scoped>
.products-total {
  width: 100vw;
}
// 头部
.products-head {
  width: 100vw;
  height: 12.5333vw;
  background: #ffffff;
  margin-top: 11.7333vw;
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
}
.products {
  width: 5.8667vw;
  height: 4.8vw;
}
.arrow-img {
  width: 3.2vw;
  background-color: #000000;
}
.txt {
  font-size: 4.2667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
}
.products-img {
  width: 5.3333vw;
  height: 4.2667vw;
  background-color: #000000;
}
// 内容区
.products-content {
  background: #ffffff;
}
.content-top {
  display: flex;
  padding-left: 6.4vw;
  padding-right: 6.4vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.6667vw;
}
.top-detail {
  font-size: 3.4667vw;
  color: #000000;
  font-family: "Open Sans";
}
.top-price {
  font-size: 4.8vw;
  color: #000000;
  font-weight: bold;
  float: left;
  font-family: "Open Sans";
}
.top-right {
  font-size: 3.4667vw;
  color: #ffffff;
  font-weight: bold;
  font-family: "Open Sans";
  text-align: center;
  background: #000000;
  height: 7.2vw;
  line-height: 7.2vw;
}

// 轮播图
.carouselbox {
  // border: 1px solid red;
  position: relative;
  margin-top: 8.2667vw;
  .innerbox {
    padding-bottom: 12vw;
    border-bottom: 1px solid #e3e3e3;
    .pic {
      height: 60.5333vw;
    }
  }
}
.heart {
  position: absolute;
  bottom: 0;
  right: 0;
}
.content-imgs {
  display: flex;
  padding-left: 30.1333vw;
  padding-right: 6.4vw;
  padding-bottom: 12vw;
  padding-top: 8.2667vw;
  align-items: flex-end;
  justify-content: space-between;
  height: 68.2667vw;
}
.heart {
  width: 8.8vw;
  height: 8.8vw;
  border-radius: 4.5333vw;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 92.5333vw;
  height: 0;
  margin: auto;
  background-color: #000000;
  border: 0.2667vw solid #e3e3e3;
}
.content-button {
  padding-left: 6.4vw;
  padding-top: 4vw;
}
.txt1,
.txt2 {
  width: 100%;
  height: 3.2vw;
  line-height: 3.2vw;
  font-size: 14px;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  padding: 0;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4.5333vw;
}
.txt2 {
  margin-bottom: 4vw;
  margin-top: 5.0667vw;
}
.solt {
  display: flex;
  height: 8.8vw;
  border-radius: 4.5333vw;
  background-color: #ffffff;
  border: 0.4vw solid #c4c4c4;
  justify-content: space-between;
  align-items: center;
  margin-right: 2.1333vw;
  padding-left: 3.2vw;
  padding-right: 2.9333vw;
}
.type {
  font-size: 3.7333vw;
  color: #000000;
  font-family: "Open Sans";
  margin-right: 5.3333vw;
}
.price {
  font-size: 3.7333vw;
  color: #000000;
  font-family: "Open Sans";
}
.solt-txt {
  display: inline-block;
}
.business {
  white-space: nowrap;
  overflow-x: scroll;
}
.solt-txt1 {
  display: flex;
  width: 31.2vw;
  height: 8.8vw;
  border-radius: 4.5333vw;
  background-color: #ffffff;
  border: 0.4vw solid #c4c4c4;
  justify-content: space-between;
  align-items: center;
}

.jia,
.jian {
  width: 3.2vw;
  font-size: 6.6667vw;
}
.jian {
  margin-left: 3.2vw;
}
.jia {
  margin-right: 3.2vw;
}
.num {
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
}
// 底部
.products-bottom {
  background: #ffffff;
}
.instructions-content {
  width: 100%;
  text-align: left;
}
.instruction {
  margin-left: 6.4vw;
  width: 87.2vw;
  height: 16vw;
  font-size: 3.4667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  margin-bottom: 22.4vw;
  margin-top: 2.4vw;
}
.bottom {
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: 22.4vw;
  background: #ffffff;
  filter: drop-shadow(0px -2px 3.5px rgba(0, 0, 0, 0.24));
}
.bottom-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13.0667vw;
  padding-left: 8.8vw;
  padding-right: 8.8vw;
}
.bottom-black {
  background: #000000;
  height: 9.0667vw;
}
.add {
  font-size: 3.7333vw;
  color: #818181;
  font-weight: bold;
  font-family: "Open Sans";
  height: 9.8667vw;
  line-height: 9.8667vw;
  border-radius: 5.0667vw;
  background-color: #efeded;
  padding-left: 4vw;
  padding-right: 3.7333vw;
}
.buy {
  font-size: 4.2667vw;
  color: #ffffff;
  font-weight: bold;
  font-family: "Open Sans";
  height: 9.8667vw;
  line-height: 9.8667vw;
  border-radius: 5.0667vw;
  filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
  background-color: #060aff;
  padding-left: 16vw;
  padding-right: 15.2vw;
}
</style>