<template>
  <div class="product">
    <top :title="title"></top>
    <div class="detail">
      <div class="w">
        <div class="detail_top clearfix">
          <div class="left detail_left">Science & Technology</div>
          <div class="right detail_right">New York Times Bestsell</div>
        </div>
        <div class="money">${{ infomoney }}</div>
        <div class="swi">
          <van-swipe class="my-swipe" indicator-color="black" :loop="false">
            <van-swipe-item><img :src="infoImg" /></van-swipe-item>
            <van-swipe-item><img :src="infoImg" /></van-swipe-item>
            <van-swipe-item><img :src="infoImg" /></van-swipe-item>
          </van-swipe>
          <div class="like">
            <span class="iconfont icon-aixin"></span>
          </div>
        </div>
        <div class="swi_name clearfix">
          <div class="swi_name_title w">Formats and editions</div>
          <div class="swi_other">
            <van-swipe
              class="my-swipe"
              indicator-color="black"
              :loop="false"
              :width="131"
            >
              <van-swipe-item v-for="(item, index) in otherPrice" :key="index">
                <span class="left" style="font-size: 3.7333vw">
                  {{ item.platform }}
                </span>
                <span class="right" style="font-size: 3.7333vw">
                  ＄{{ item.price }}
                </span>
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="swi_name_title w">Quantity</div>
          <div class="cart" style="font-size: 3.7333vw">
            <span
              class="left"
              :class="num <= 1 ? 'disable' : ''"
              @click="subnum(index)"
              >-</span
            >
            {{ num }}
            <span class="right" @click="addsum(index)">+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        {{des}}
      </div>
      <div class="btns">
        <div class="btn_one left" @click="set">Add to cart</div>
        <div class="btn_two right">Buy Now</div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../common/top";
export default {
  data() {
    return {
      title: "Products",
      index: "",
      info: "",
      infosome: "",
      infomoney: "",
      infoImg: "",
      otherPrice: "",
      num: 1,
      num_two: 0,
      id: "",
      des: ''
    };
  },
  components: {
    top,
  },
  methods: {
    getInfo() {
      if (this.$route.query.id !== undefined) {
        this.$http.get("http://192.168.1.104/video/list.json").then((res) => {
          this.info = res.data.info;
          this.index = this.$route.query.id;
          this.id = this.info[this.index].id;
          this.infosome = this.info[this.index];
          this.infomoney = this.infosome.price;
          this.infoImg = this.infosome.imgUrl;
          this.des = this.infosome.des
          this.otherPrice = this.infosome.otherPrice;
          if (window.sessionStorage.getItem(this.index)) {
            this.num_two = JSON.parse(
              window.sessionStorage.getItem(this.index)
            ).num;
          }
        });
      } else {
        this.$router.push({
          name: "list",
        });
      }
    },
    addsum(index) {
      this.num = this.num + 1;
    },
    subnum(index) {
      this.num = this.num - 1;
    },
    set() {
      var sessionKeys = Object.keys(sessionStorage);
      if (sessionKeys.indexOf(this.index.toString()) == -1) {
        this.$set(this.info[this.index], "num", this.num);
        window.sessionStorage.setItem(
          this.index,
          JSON.stringify(this.info[this.index])
        );
      } else {
        this.num = this.num + this.num_two;
        this.$set(this.info[this.index], "num", this.num);
        window.sessionStorage.setItem(
          this.index,
          JSON.stringify(this.info[this.index])
        );
      }
      this.num = 1
      this.getInfo()
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style lang="less" scoped>
.product {
  width: 100vw;
  height: 216.5333vw;
}
.detail {
  margin-top: 2.6667vw;
  overflow: hidden;
  width: 100vw;
  height: 149.8667vw;
  background-color: #fff;
  .detail_top {
    margin-top: 2.6667vw;
  }
  .detail_left {
    font-size: 3.4667vw;
    color: #b2b2b2;
    font-family: "Open Sans";
  }
  .detail_right {
    width: 46.6667vw;
    height: 6.9333vw;
    line-height: 6.9333vw;
    border-radius: 1.0667vw;
    background-color: #000000;
    font-size: 3.4667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
  }
  .money {
    margin-top: 3.2vw;
    height: 4.8vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .swi {
    position: relative;
    width: 100%;
    height: 88.5333vw;
    overflow: hidden;
    margin: auto;
    border-bottom: 1px solid #e3e3e3;
    .van-swipe {
      width: 100%;
      height: 100%;
      img {
        width: 40vw;
        height: 60.5333vw;
        margin: 8.2667vw calc(30.1333vw - 6.4vw);
      }
    }
  }
}
.like {
  position: absolute;
  right: 0;
  bottom: 10.4vw;
  width: 8.8vw;
  height: 8.8vw;
  border-radius: 4.5333vw;
  background-color: #e7e7e7;
  span {
    display: block;
    font-size: 4.8vw;
    text-align: center;
    line-height: 8.8vw;
    margin: auto;
  }
}
.swi_name {
  width: 100vw;
  overflow: hidden;
  .swi_name_title {
    width: 100%;
    font-size: 3.7333vw;
    height: 4.2333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin-top: 2.6667vw;
  }
  .van-swipe {
    width: 100vw !important;
    overflow: hidden;
    margin-top: 4.5333vw;
    margin-bottom: 5.0667vw;
  }

  .van-swipe-item {
    display: inline !important;
    width: 29.3333vw !important;
    height: 5.3333vw !important;
    padding: 1.0667vw !important;
    border: 1px solid #b2b2b2;
    margin-right: 2.1333vw;
    border-radius: 4.5333vw;
    line-height: 5.3333vw;
  }
  .cart {
    margin-top: 4vw;
    padding: 0 2.1333vw;
    width: calc(31.2vw - 0.5333vw - 2.1333vw - 2.1333vw);
    height: calc(8.8vw - 0.5333vw);
    border: 1px solid #e3e3e3;
    border-radius: 4.5333vw;
    text-align: center;
    line-height: 8.8vw;
    span {
      font-size: 7.8vw;
      line-height: 7.8vw;
    }
  }
}
.disable {
  pointer-events: none;
  cursor: default;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 37.0667vw;
  background-color: #000;
  .title {
    width: calc(100vw - 6.4vw - 6.4vw);
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    background-color: #fff;
    padding: 2.4vw 6.4vw 0.4vw 6.4vw;
  }
  .btns {
    width: calc(100vw - 8.8vw - 8.8vw);
    padding: 3.5333vw 8.8vw 0 8.8vw;
    height: calc(13.0667vw - 3.2333vw);
    background-color: #fff;
    filter: drop-shadow(0px -0.5333vw 0.9333vw rgba(0, 0, 0, 0.24));
  }
  .btn_one {
    width: 28vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    background-color: #efeded;
    margin-right: 4.8vw;
    text-align: center;
    line-height: 9.8667vw;
    font-size: 3.7333vw;
    color: #818181;
  }
  .btn_two {
    width: 49.6vw;
    height: 9.8667vw;
    text-align: center;
    line-height: 9.8667vw;
    border-radius: 5.0667vw;
    filter: drop-shadow(0px 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    color: #fff;
    font-size: 4.2667vw;
  }
}
</style>