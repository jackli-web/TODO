<template>
  <div>
    <Head :uname="name"></Head>
    <div class="content" v-for="(item, index) in list" :key="item.id">
      <div class="cat">
        <div class="tu">
          <img :src="item.imgUrl" />
        </div>
        <div class="wbm">
          <div>{{ item.bookName }}</div>
        </div>
        <div class="bc">
          <div>{{ item.author }}</div>
        </div>
        <div class="shu">
          <div @click="sub(index)">
            <img src="../assets/Path 7.png" alt="" />
          </div>
          <div>{{ mystatecount }}</div>
          <div @click="add(index)">
            <img src="../assets/Path 6.png" alt="" />
          </div>
        </div>
        <div class="total">${{ item.price * mystatecount }}</div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-a">
        <div class="bi">Billing Information</div>
        <div class="zongjia">
          <div>Buy new</div>
          <div>${{ mystatecount }}</div>
        </div>
        <div class="zongjia">
          <div>Shipping</div>
          <div>+${{ mystatecount }}</div>
        </div>
        <div class="zongjia">
          <div>Only 6 left in stock (more on the way).</div>
        </div>
        <div class="zui">
          <div>
            This item ships to 18 Wall St, Us. Get it by Thursday, April 16 -
            Friday, April 24 Choose this date at checkout.
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="footer">
        <div class="bn" @click="success">
          <span>Buy Now</span>
        </div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Head from "./head";
import Foot from "./foot";
import { Dialog } from "vant";
export default {
  components: { Head, Foot, [Dialog.Component.name]: Dialog.Component },
  data() {
    return {
      name: "Payment",
      count: this.$store.state.count,
      list: {},
      count: 1,
    };
  },
  created() {
    this.addti();
  },
  methods: {
    addti() {
      this.list = this.$store.state.arrs;
    },
    add(index) {
      this.$store.commit("increment",index);
    },
    sub(index) {
      if (this.mystatecount <= 1) return;
      this.$store.commit("increment1",index);
    },
    success() {
      Dialog.alert({
        title: "标题",
        message: "Payment Success",
      }).then(() => {
        // on close
      });
    },
  },
  computed: {
    mystatecount() {
      return this.$store.state.count;
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  background-color: #fff;
  .cat {
    width: 87.2vw;
    height: 37.6vw;
    margin-left: 6.4vw;
    border-bottom: 1px solid #ccc;
    .tu {
      float: left;
      width: 19.7333vw;
      height: 29.0667vw;
      margin-top: 3.7333vw;
      img {
        width: 100%;
      }
    }
    .wbm {
      float: left;
      width: 47.4667vw;
      margin: 3.5vw 0 0 4.8vw;
      div {
        font-size: 3.2vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
    .bc {
      float: left;
      width: 47.4667vw;
      div {
        font-size: 3.2vw;
        color: #7f7f7f;
        font-family: "Open Sans";
        margin: 3.7333vw 0 0 4.8vw;
      }
    }
    .shu {
      float: left;
      display: flex;
      width: 24vw;
      height: 6.4vw;
      border-radius: 3.2vw;
      background-color: #efeded;
      border: 1.5px solid #c4c4c4;
      margin: 8vw 0 0 4.8vw;
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
    .total {
      float: right;
      width: 15.2vw;
      height: 4.8vw;
      border-radius: 2.4vw;
      background-color: #efeded;
      text-align: center;
      margin-top: 8.8vw;
      font-size: 3.4667vw;
      color: #000000;
      font-family: "Open Sans";
    }
  }
}
.middle {
  width: 100vw;
  height: 77.3333vw;
  background-color: #fff;
  margin-top: 2.6667vw;
  .middle-a {
    width: 86.6667vw;
    height: 77.3333vw;
    margin-left: 6.6667vw;
    .bi {
      display: inline-block;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-top: 3.2vw;
    }
    .zongjia {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 16vw;
      border-bottom: 1px solid #ccc;
      div {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
      :first-child {
        color: #959595;
      }
    }
    .zui {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 22.1333vw;
      div {
        font-size: 3.7333vw;
        color: #959595;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
}
.foot {
  .footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 9.0667vw;
    width: 100vw;
    height: 20.5333vw;
    background-color: #fff;
    .bn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      span {
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
}
</style>