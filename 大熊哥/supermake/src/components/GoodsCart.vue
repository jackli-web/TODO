<template>
  <div class="goodscart">
    <goods-top><span slot="center">Payment</span></goods-top>
    <cart-conent></cart-conent>
    <cart-foot @showdialog="showdialog"></cart-foot>
    <van-dialog v-model="isShow" :show-confirm-button="false" ref="dialog">
      <div class="dialog-img">
        <img src="@/assets/img/success.png" alt="" />
      </div>
      <div class="dialog-t">Payment Success</div>
      <div class="dialog-btn" @click="close">Check Order</div>
    </van-dialog>
  </div>
</template>

<script>
import GoodsTop from "./goodsitem/GoodsTop.vue";
import CartConent from "./cartitem/CartConent.vue";
import cartFoot from "./cartitem/CartFoot.vue";
export default {
  data() {
    return {
      goodsList: [],
      isShow: false,
    };
  },
  components: {
    GoodsTop,
    CartConent,
    cartFoot,
  },
  methods: {
    showdialog() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
      this.$store.state.currentItem={}
      this.$store.state.currentinfo=[]
      window.sessionStorage.clear();
      this.$router.replace("goodslist");
    },
  },
};
</script>

<style lang="less" scoped>
.goodscart {
  background-color: #f6f7f9;
  height: 168.2667vw;
  .van-dialog {
    width: 327px;
    height: 88.5333vw;
    background-color: #fff;
    .dialog-img {
      margin: 18.6667vw 31.4667vw 6.9333vw;
      width: 24vw;
      height: 24vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dialog-t {
      margin: 0 21.7333vw 11.7333vw 24vw;
      width: 41.4667vw;
      height: 4.8vw;
      text-align: center;
      line-height: 4.8vw;
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
    }
    .dialog-btn {
      margin-left: 18.4667vw;
      width: 53.3333vw;
      height: 12vw;
      text-align: center;
      line-height: 12vw;
      border-radius: 6.1333vw;
      background-color: #efeded;
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
    }
  }
}
</style>