<template>
  <div class="big">
    <div class="cartconent" v-for="(item, index) in show">
      <div class="cartconent-l">
        <img :src="item.item.imgUrl" alt="" />
      </div>
      <div class="cartconent-r">
        <div class="cartconent-r-t">{{ item.item.des }}</div>
        <div class="cartconent-r-b"></div>
        <div class="cartconent-r-f">
          <div class="btn-l">
            <span @click="sub(index)">-</span>
            <span>{{ item.count }}</span>
            <span @click="add(index)">+</span>
          </div>
          <div class="btn-r">${{ item.item.price }}</div>
        </div>
      </div>
      <div class="xian"></div>
    </div>
    <div class="conent-foot">
      <div class="cart-f-t">Billing Information</div>
      <div class="cart-f-z">
        <div class="cart-f-z-l">Buy new</div>
        <div class="cart-f-z-r">${{ total }}</div>
        <div class="xian1"></div>
      </div>
      <div class="cart-f-z a1">
        <div class="cart-f-z-l">Shipping</div>
        <div class="cart-f-z-r">+ $3.00</div>
        <div class="xian1"></div>
      </div>
      <div class="cart-f-z a1">
        <div class="cart-f-z-l">Only 6 left in stock (more on the way)</div>
        <div class="xian1"></div>
      </div>
      <div class="text">
        This item ships to 18 Wall St, Us. <br />
        Get it by Thursday, April 16 - Friday, April 24 <br />
        Choose this date at checkout.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get("api/books");
      console.log(res);
      this.goodsList = res.info;
    },
    add(index) {
      this.show[index].count++;
    },
    sub(index) {
      if (this.show[index].count <= 1) return;
      this.show[index].count--;
    },
  },
  computed: {
    show() {
      return this.$store.state.currentinfo;
    },
    total() {
      let tal = this.$store.state.currentinfo;
      return tal.reduce((s, d) => {
        return s + d.count * d.item.price;
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.big {
  margin-top: 4vw;
  .cartconent {
    position: relative;
    display: flex;
    padding: 3.7333vw 0 0 6.1333vw;
    height: 33.8667vw;
    background-color: #fff;
    .cartconent-l {
      width: 19.7333vw;
      height: 29.0667vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .cartconent-r {
      flex: 1;
      margin-left: 4.8vw;
      .cartconent-r-t {
        overflow: hidden;
        width: 47.4667vw;
        height: 11.2vw;
      }
      .cartconent-r-b {
        margin-top: 3.7333vw;
        width: 46.4vw;
        height: 3.4667vw;
      }
      .cartconent-r-f {
        margin-top: 3.7333vw;
        height: 6.4vw;
        display: flex;
        justify-content: space-between;
        .btn-l {
          width: 24vw;
          height: 6.4vw;
          line-height: 6.4vw;
          font-size: 6.4667vw;
          text-align: center;
          border-radius: 3.2vw;
          background-color: #efeded;
          span {
            margin-left: 2vw;
          }
        }
        .btn-r {
          margin-right: 6.4vw;
          text-align: center;
          line-height: 4.8vw;
          width: 15.2vw;
          height: 4.8vw;
          border-radius: 2.4vw;
          background-color: #efeded;
        }
      }
    }
    .xian {
      position: absolute;
      bottom: 0;
      width: 87.2vw;
      background-color: #000000;
      border: 0.2667vw solid #e3e3e3;
    }
  }
  .conent-foot {
    padding: 3.7333vw 6.1333vw 0 6.6667vw;
    height: 74.1333vw;
    background-color: #fff;
    .cart-f-t {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      margin-bottom: 4vw;
    }
    .cart-f-z {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 11.7333vw;
      font-size: 3.7333vw;
      .cart-f-z-r {
        font-weight: bold;
      }
      .xian1 {
        position: absolute;
        width: 100%;
        bottom: 0;
        background-color: #000000;
        border: 0.2667vw solid #e3e1e1;
      }
    }
    .a1 {
      margin-top: 2.9333vw;
    }
    .text {
      padding-top: 5.6vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
    }
  }
}
</style>