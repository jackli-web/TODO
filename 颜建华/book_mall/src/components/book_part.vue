<template>
  <div id="book_part">
    <van-notify class="bell" v-model="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>加入购物车成功</span>
    </van-notify>
    <div class="top">
      <img @click="goback" class="back_img" src="@/assets/back.png" alt="" />
      <div class="txt_div">Cart</div>
      <img
        @click="jumpTo('shop_cart')"
        class="shop_img"
        src="@/assets/shopcar.png"
        alt=""
      />
    </div>
    <div class="content">
      <div class="title_div">
        <div class="title_left">Science & Technology</div>
        <div class="title_right">
          <div class="title_text">New York Times Bestseller</div>
        </div>
      </div>
      <div class="price_div">${{ item.price }}</div>
      <div class="swip">
        <van-swipe class="swipe">
          <van-swipe-item class="img_center">
            <img class="img_swi" :src="item.imgUrl" />
          </van-swipe-item>
          <van-swipe-item class="img_center">
            <img class="img_swi" :src="item.imgUrl" />
          </van-swipe-item>
          <van-swipe-item class="img_center">
            <img class="img_swi" :src="item.imgUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="form_edi">Formats and editions</div>
      <div class="price_bloc">
        <div
          class="first_bloc"
          v-for="(items, index) in item.otherPrice"
          :key="index"
        >
          <div class="nei">
            <div class="first_left">{{ items.platform }}</div>
            <div class="first_right">${{ items.price }}</div>
          </div>
        </div>
      </div>
      <div class="quantity">Quantity</div>
      <div class="btn_shopcar">
        <div class="sum_btn" @click="sum">
          <div :class="count == 1 ? 'sum_txt_ac' : 'sum_txt'" class="sum_txt">
            -
          </div>
        </div>
        <div class="count">
          <div class="count_txt">{{ count }}</div>
        </div>
        <div class="add_btn" @click="add">
          <div class="add_txt">+</div>
        </div>
      </div>
    </div>
    <div class="bottom_top">
      <div class="bottom_txt">
        New York Times Bestseller<br />
        Winner of the 2019 Goodreads Choice Awardfor<br />
        Science & Technology
      </div>
    </div>
    <div class="bottom_bottom">
      <div class="tocar" @click="add_info('shop_cart')">Add to cart</div>
      <div @click="jumpTo('shop_cart')" class="buy">Buy Now</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$route.query,
      count: 1,
      show: false,
    };
  },
  methods: {
    jumpTo(str, item, count) {
      this.$router.push({
        name: str,
      });
    },
    add_info() {
      var info1 = { ...this.item, count: this.count };
      var info2 = this.$store.state.state_info;
      this.$store.commit("add_info", info1);
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    goback() {
      this.$router.go(-1);
    },
    add() {
      this.count++;
    },
    sum() {
      if (this.count > 1) {
        this.count--;
      }
    },
  },
};
</script>

<style lang="less">
.van-swipe-item {
  text-align: center;
}
.van-swipe__indicators {
  bottom: 0;
}
.van-swipe-item {
  height: 68.8vw;
}
.van-swipe__indicator {
  width: 8.8vw;
  border-radius: 0;
  height: 2px;
}
.van-swipe__indicator--active {
  background-color: #000000;
}
</style>

<style lang="less" scoped>
#book_part {
  width: 100vw;
  background-color: #f4f5f7;
  padding-top: 12.5333vw;
  padding-bottom: 13.0667vw;
  .bell {
    position: fixed;
    top: 0;
  }
  .top {
    width: 100vw;
    height: 12.5333vw;
    background-color: #ffffff;
    display: flex;
    position: fixed;
    top: 0;
    .back_img {
      width: 3.2vw;
      height: 5.3333vw;
      margin: 2.6667vw 0 0 6.4vw;
    }
    .txt_div {
      width: 8.5333vw;
      height: 3.4667vw;
      font-size: 4.2667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 3.4667vw 0 0 36vw;
    }
    .shop_img {
      width: 5.8667vw;
      height: 5.3333vw;
      margin: 2.9333vw 0 0 33.8667vw;
    }
  }
  .content {
    background-color: #ffffff;
    margin-top: 2.6667vw;
    margin-bottom: 2.6667vw;
    padding: 3.7333vw;
    .title_div {
      display: flex;
      .title_left {
        // width: 35.4667vw;
        height: 3.4667vw;
        font-size: 3.4667vw;
        color: #b8b8b8;
        font-family: "Open Sans";
        margin: 3.7333vw 4.8vw 3.2vw 2.6667vw;
      }
      .title_right {
        // width: 46.9333vw;
        // height: 7.2vw;
        padding: 1.3333vw 1.3333vw;
        border-radius: 1.0667vw;
        background-color: #000000;
        margin: 2.6667vw 2.6667vw 0 0;
        text-align: center;
        // line-height: 7.2vw;
        .title_text {
          font-size: 2.9333vw;
          color: #ffffff;
          font-weight: bold;
          font-family: "Open Sans";
        }
      }
    }
    .price_div {
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-left: 2.6667vw;
      margin-bottom: 8.2667vw;
    }
    .swip {
      padding-bottom: 12vw;
      border-bottom: 1px solid #e3e3e3;
      .img_center {
        .img_swi {
          height: 60.5333vw;
        }
      }
    }
    .form_edi {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 4vw 0 4.5333vw 2.6667vw;
    }
    .price_bloc::-webkit-scrollbar {
      display: none;
    }
    .price_bloc {
      display: flex;
      white-space: nowrap;
      overflow: scroll;
      // padding-right: 3.7333vw;
      .first_bloc {
        // width: 31.2vw;
        // height: 8.8vw;
        border-radius: 5vw;
        background-color: #ffffff;
        border: 1.5px solid #c4c4c4;
        // margin: 4.5333vw 2.1333vw 0 2.6667vw;
        display: inline-block;
        margin-right: 2.1333vw;
        //  padding-right: 3.7333vw;
        .nei {
          padding: 1.5vw 2.6667vw;

          display: flex;
          .first_left {
            // margin: 2.1333vw 5.3333vw 0 2.4vw;
            font-size: 3.7333vw;
            color: #000000;
            font-family: "Open Sans";
            margin-right: 5.3333vw;
          }
          .first_right {
            font-size: 3.7333vw;
            color: #000000;
            font-family: "Open Sans";
            // margin-top: 2.1333vw;
          }
        }
      }
    }
    .quantity {
      font-size: 14px;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 5.3333vw 0 4vw 2.6667vw;
    }
    .btn_shopcar {
      display: flex;
      width: 31.2vw;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 1.5px solid #c4c4c4;
      margin-left: 2.6667vw;
      align-items: center;
      .sum_btn {
        flex: 1;
        text-align: center;
        .sum_txt {
          font-size: 4.2667vw;
        }
        .sum_txt_ac {
          font-size: 4.2667vw;
          color: #978787;
        }
      }
      .count {
        flex: 1;
        text-align: center;
        .count_txt {
          font-size: 3.7333vw;
        }
      }
      .add_btn {
        flex: 1;
        text-align: center;
        .add_txt {
          font-size: 4.2667vw;
        }
      }
    }
  }
  .bottom_top {
    background-color: #ffffff;
    padding-top: 2.4vw;
    .bottom_txt {
      width: 87.2vw;
      height: 13.6vw;
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-left: 6.4vw;
    }
  }
  .bottom_bottom {
    width: 100vw;
    height: 9.3334vw;
    background-color: #ffffff;
    display: flex;
    padding-top: 3.7333vw;
    position: fixed;
    bottom: 0;
    .tocar {
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      text-align: center;
      line-height: 9.8667vw;
      margin: 0 4.8vw 0 8.8vw;
    }
    .buy {
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
      background-color: #060aff;
      text-align: center;
      line-height: 9.8667vw;
    }
  }
}
</style>