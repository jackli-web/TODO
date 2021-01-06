<template>
  <div>
    <Head :uname="name"></Head>
    <div class="content">
      <div class="st">Science & Technology</div>
      <div class="ny"><span>New York Times Bestseller</span></div>
      <div class="danjia">${{ showitem.price }}</div>
      <van-swipe class="my-swipe" indicator-color="black">
        <van-swipe-item>
          <div class="tu"><img :src="showitem.imgUrl" /></div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="tu"><img :src="showitem.imgUrl" /></div>
        </van-swipe-item>
      </van-swipe>
      <div class="xin">
        <img src="../assets/xin2.png" />
      </div>
      <div class="size">
        <div class="fae">Formats and editions</div>
        <van-swipe :width="130" :show-indicators="false" :loop="false">
          <div v-for="item in showitem.otherPrice" :key="item.id">
            <van-swipe-item>
              <div class="kd">
                <div>{{ item.platform }}</div>
                <div>${{ item.price }}</div>
              </div>
            </van-swipe-item>
          </div>
        </van-swipe>
        <div class="qt">Quantity</div>
        <div class="shu">
          <div @click="sub"><img src="../assets/Path 7.png" alt="" /></div>
          <div>{{ mystatecount }}</div>
          <div @click="add"><img src="../assets/Path 6.png" alt="" /></div>
        </div>
      </div>
      <div class="introduce">
        <div class="font">
          {{showitem.des}}
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="footer">
        <div class="atc" @click="tobuy(showitem)"><span>Add to cart</span></div>
        <div class="bn" ><span>Buy Now</span></div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Head from "./head";
import Foot from "./foot";
export default {
  components: { Head, Foot },
  data() {
    return {
      name: "Products",
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      if (this.mystatecount <= 1) return;
      this.$store.commit("increment1");
    },
    tobuy(item) {
      this.$store.state.arrs.push(item)
    },
  },
  computed: {
    mystatecount() {
      return this.$store.state.count;
    },
    showitem() {
      return this.$store.state.current;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 149.8667vw;
  background-color: #fff;
  .st {
    display: inline-block;
    font-size: 3.4667vw;
    color: #c5c5c5;
    font-family: "Open Sans";
    margin: 3.7333vw 0 0 6.4vw;
  }
  .ny {
    float: right;
    width: 46.6667vw;
    height: 6.9333vw;
    border-radius: 1.0667vw;
    background-color: #000000;
    margin: 2.6667vw 6.4vw 0 0;
    span {
      font-size: 3.2vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: center;
      margin-left: 1.3333vw;
    }
  }
  .danjia {
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 3.2vw 0 0 6.4vw;
  }
  .my-swipe i {
    position: absolute;
    top: 5.3333vw;
    width: 9.3333vw;
    height: 1.6vw;
    opacity: 0.3;
    transition: opacity 0.2s, background-color 0.2s;
  }
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
  .xin {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    width: 8.8vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #f5f5f5;
    margin-right: 5.3333vw;
  }
  .size {
    width: 92.5333vw;
    height: 46.1333vw;
    margin: 24.7333vw 0 0 3.7333vw;
    border-top: 1px solid #ccc;
    .fae {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 3.4667vw 0 0 2.9333vw;
    }
    .kd {
      display: flex;
      align-items: center;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 1.5px solid #c4c4c4;
      margin: 3.4667vw 0 0 2.6667vw;
      div {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-size: 3.7333vw;
        color: #000000;
        font-family: "Open Sans";
      }
    }
    .qt {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 4vw 0 0 2.9333vw;
    }
    .shu {
      display: flex;
      width: 31.2vw;
      height: 8.8vw;
      border-radius: 4.5333vw;
      background-color: #ffffff;
      border: 1.5px solid #c4c4c4;
      margin: 3.4667vw 0 0 2.6667vw;
      div {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        img {
          width: 3.7333vw;
        }
      }
    }
  }
  .introduce {
    width: 100vw;
    height: 14.9333vw;
    background-color: #fff;
    margin-top: 2.6667vw;
    .font {
      width: 87.2vw;
      height: 16vw;
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 3.9vw 0 0 6.4vw;
      overflow: hidden;
    }
  }
}
.foot {
  .footer {
    position: fixed;
    bottom: 9.0667vw;
    width: 100vw;
    height: 13.0667vw;
    background-color: #fff;
    .atc {
      float: left;
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      margin: 3.7333vw 0 0 8.8vw;
      span {
        display: block;
        font-size: 3.7333vw;
        color: #818181;
        font-weight: bold;
        font-family: "Open Sans";
        margin: 2.4667vw 0 0 3vw;
      }
    }
    .bn {
      float: right;
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      margin: 3.7333vw 8.8vw 0 0;
      span {
        display: block;
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
        margin: 1.4667vw 0 0 15vw;
      }
    }
  }
}
</style>