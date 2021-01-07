<template>
  <div class="hello">
    <div class="top1">
      <div class="img1"><img src="@/assets/1.png" alt="" /></div>
      <div class="cart">Products</div>
      <div class="img2"><img src="@/assets/gwc.png" alt="" /></div>
    </div>
    <div class="gang"></div>
    <div class="box1">
      <div class="science">Science $ Technology</div>
      <div class="jia">${{ item.price }}</div>
      <div class="boxx">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img :src="item.imgUrl" alt="" /></van-swipe-item>
          <van-swipe-item><img :src="item.imgUrl" alt="" /></van-swipe-item>
          <van-swipe-item><img :src="item.imgUrl" alt="" /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="and">Formats and editiongs</div>
      <div class="taobao">
        <div
          class="haha"
          v-for="item1 in item.otherPrice"
          :key="item1.price"
          :item1="item1"
        >
          <div class="haha-xia">
            <span>{{ item1.platform }}</span
            ><span>{{ item1.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="top">Quantity</div>
    <div class="jisuan">
      <span @click="sub">-</span>
      <span>{{ val }}</span>
      <span @click="add">+</span>
    </div>
    <!-- <div class="box2">
      New York Times Bestseller winner of the 2019 Goodreads choice Award for
      science $ Technology
    </div> -->
    <div class="box3">
      <div @click="dian" class="top22">加入购物车</div>
      <div @click="mai" class="top2">购买</div>
    </div>
    <div class="hei"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0,
      item: this.$route.query,
    };
  },
  methods: {
    sub() {
      this.val--;
    },
    add() {
      this.val++;
    },
    dian() {
      var str = {...this.item, val:this.val };
      this.$store.commit("storecount", str);
      console.log('dian',str)

    },
    mai() {
      this.$router.push({ name: "sun" });
      console.log(222)
    },
  },

  beforeMount() {
    console.log(this.item);
  },
};
</script>

<style lang="less">
.boxx {
  margin-top: 4vw;
  border-bottom: 0.4vw solid gray;
  padding-bottom: 10vw;

  .van-swipe {
    margin-right: -3vw;
    .van-swipe-item {
      width: 40vw;
      height: 60.5333vw;
      text-align: center;
      img {
        width: 40vw;
        height: 60vw;
      }
    }
  }
}
</style>
<style scoped lang="less">
.hello {
  .top1 {
    margin-top: 10vw;
    margin-bottom: 3.6667vw;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .cart {
      font-size: 4.2667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .img1 img {
      width: 2.9333vw;
      height: 5.3333vw;
      background-color: #000000;
      margin-left: 6.4vw;
    }
    .img2 img {
      width: 5.3333vw;
      height: 4.2667vw;
      background-color: #000000;
      margin-right: 6.1333vw;
    }
  }
  .gang {
    height: 2.6667vw;
    background-color: #f6f6f6;
  }
  .science {
    font-size: 3.4667vw;
    color: gray;
    font-family: "Open Sans";
    margin-left: 6.4vw;
    margin-top: 4vw;
  }
  .jia {
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-left: 6.4vw;
    margin-top: 2.6667vw;
  }
  .and {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-left: 6.4vw;
    margin-top: 4vw;
  }
  .taobao {
    display: flex;
    margin-left: 6.4vw;
    margin-top: 4vw;
    .haha {
      border: 2px solid gray;
      margin: 2.6667vw;
      border-radius: 8vw;
    }
  }
  .top {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-left: 6.4vw;
    margin-top: 2vw;
  }
  .jisuan {
    margin-left: 6.4vw;
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin-top: 3vw;
    border: 0.5333vw solid gray;
    border-radius: 8vw;
    padding: 1.3333vw;
  }
  .box1 {
    overflow: hidden;
    .boxx {
      width: 120vw;
    }
  }
  .box3 {
    display: flex;
    justify-content: space-between;
    margin: 5.3333vw;
    width: 100vw;
    box-sizing: border-box;
    height: 9.8vw;
    .top22 {
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      text-align: center;
      margin-top: 0vw;
      position: fixed;
      bottom: 9vw;
      line-height: 9.8669vw;
    }
    .top2 {
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
      background-color: #060aff;
      text-align: center;
      line-height: 9.8667vw;
      position: fixed;
      bottom: 8vw;
      left: 41.6vw;
      //     position: fixed;
      // bottom: 0;
    }
  }
  .hei {
    height: 8vw;
    background-color: #000;
    position: relative;
    bottom: -7vw;
  }
}
</style>