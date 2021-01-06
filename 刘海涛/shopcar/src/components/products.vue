<template>
  <div>
    <top-bar><div class="good_c">Products</div></top-bar>
    <div class="cont">
      <div class="sci">Science & Technology</div>
      <div class="new">
        <div class="new_t">New York Times Bestseller</div>
      </div>
      <div class="money">${{ item.price }}</div>

      <!-- sdasdasda
sdasdasdasdad
sda -->

      <van-swipe class="my-swipe" :autoplay="100000" indicator-color="white">
        <van-swipe-item
          ><div class="tu"><img :src="item.imgUrl" alt="" /></div
        ></van-swipe-item>
        <van-swipe-item
          ><div class="tu"><img :src="item.imgUrl" alt="" /></div
        ></van-swipe-item>
        <van-swipe-item
          ><div class="tu"><img :src="item.imgUrl" alt="" /></div
        ></van-swipe-item>
      </van-swipe>

      <div class="xin iconfont icon-xin"></div>
      <div class="xian"></div>
      <div class="formats">Formats and editions</div>

      <van-swipe :width="130" :show-indicators="false" :loop="false">
        <div class="ul" v-for="item in item.otherPrice" :key="item.index">
          <van-swipe-item>
            <div class="li">
              <span>{{ item.platform }}</span>
              <span>${{ item.price }}</span>
            </div>
          </van-swipe-item>
        </div>
      </van-swipe>
      <div class="quantity">Quantity</div>
      <div class="num_count">
        <span class="fuh" @click="sub">–</span>
        <span>{{ count }}</span>
        <span class="fuh" @click="add">+</span>
      </div>
    </div>
    <div class="foot">
      <div class="ny">
        <p>New York Times Bestseller</p>
        <p>Winner of the 2019 Goodreads Choice Award for</p>
        <p>Science & Technology</p>
      </div>
      <div class="footer">
        <button class="btn1" @click="addbook_car(item.id)">
          <p>Add to cart</p>
        </button>
        <button class="btn2" @click="jumpTo"><p>Buy Now</p></button>
      </div>
      <div class="hei"></div>
    </div>
  </div>
</template>

<script>
import topBar from "./top_bar.vue";
export default {
  components: { topBar },
  data() {
    return {
      item: this.$store.state.item,
      index: "",
      count: 1,
    };
  },
  /* created() {
    this.getItem();
  }, */

  methods: {
    /* getItem() {
      this.item = this.$route.query.str;
      console.log(this.item);
    }, */
    sub() {
      if (this.count <= 1) {
        return false;
      }
      this.count--;
    },
    add() {
      this.count++;
    },
    addbook_car(id) {},
    jumpTo() {
      let obj = { count: this.count, item: this.item };
      this.$store.commit("updata", obj);
      // this.$store.state.arr.push(obj);
      this.$router.push({
        name: "shcar",
        query: {
          str: this.item,
          total: this.count,
        },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.cont {
  width: 100vw;
  height: 149.8667vw;
  background-color: #ffffff;
  overflow: hidden;
  .sci {
    padding: 3.7333vw 0 0 6.4vw;
    font-size: 3.4667vw;
    color: #b2b2b2;
    font-family: "Open Sans";
  }
  .new {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 6.4vw;
    top: 2.6667vw;
    width: 46.6667vw;
    height: 6.9333vw;
    border-radius: 1.0667vw;
    background-color: #000000;
    .new_t {
      font-size: 3.4667vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: center;
    }
  }
  .money {
    margin: 3.2vw 0 0 6.4vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 5.3333vw;
    line-height: 40vw;
    text-align: center;
    .tu {
      position: relative;
      width: 40vw;
      height: 60.5333vw;
      top: 8.2667vw;
      left: 30.1333vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .van-swipe__indicator {
      margin-left: 2.6667vw;
      width: 9.3333vw;
      height: 0.0667vw;
      background-color: #ebedf0;
      border-radius: 0;
      background-color: #000000;
      border: 0.8vw solid #000000;
    }
  }
  .xin {
    float: right;
    margin-right: 6.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.8vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #e7e7e7;
  }
  .xian {
    margin: 19.7333vw 3.7333vw 0;
    background-color: #000000;
    border: 0.2667vw solid #e3e3e3;
  }
  .formats {
    margin: 2.6667vw 0 0 6.6667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .ul {
    :first-child div {
      margin-left: 6.4vw;
    }
    .li {
      display: flex;
      align-items: center;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 0.4vw solid #c4c4c4;
      margin-right: 2.1333vw;
      span {
        // margin-left: 2.4vw;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: 3.7333vw;
        color: #000000;
        font-family: "Open Sans";
      }
      /* span:nth-child(2) {
        margin: 0 2.4vw 0 5.3333vw;
      } */
    }
  }
  .quantity {
    margin: 2.6667vw 0 0 6.4vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .num_count {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2.6667vw 0 0 6.4vw;
    width: 31.2vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 0.4vw solid #c4c4c4;
    line-height: 8.8vw;
    .fuh {
      margin: -0.8vw 2.1333vw 2.6667vw;
      font-size: 9.6vw;
    }
  }
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 37.3333vw;
  background-color: #ffffff;
  .ny {
    width: 87.2vw;
    height: 16vw;
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 2.4vw 0 0 6.4vw;
    p {
      margin: 0;
      padding: 0;
    }
  }
  .footer {
    width: 100vw;
    height: 22.4vw;
    filter: drop-shadow(0vw -0.5333vw 0.9333vw rgba(0, 0, 0, 0.24));
    background-color: #ffffff;
    .btn1 {
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      border: none;
      margin: 3.7333vw 0 0 8.8vw;
      line-height: 0vw;
      p {
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
      filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
      background-color: #060aff;
      border: none;
      margin: 3.7333vw 0 0 4.8vw;
      line-height: 0vw;
      p {
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
  .hei {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 5.3333vw;
    background-color: #000000;
  }
}
</style>