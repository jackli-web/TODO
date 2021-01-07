<template>
  <div class="sst1">
    <div class="top">
      <div class="top-item">
        <div class="top-item-left">
          <img src="../../assets/images/Rectangle18copy3.png" alt="" />
        </div>
        <div class="top-item-content">
          My Cart
        </div>
        <div class="top-item-right">
          <img src="../../assets/images/ic_notifications_36pt_2x.png" alt="" />
        </div>
      </div>
    </div>
    <zujian
      v-for="(item, index) in info"
      :key="index"
      :info="item"
      @changequantity="changesum"
    ></zujian>
    <div class="but">
      <div class="but-left">
        <div class="but-left-total">TOTAL</div>
        <div class="but-left-content">${{ total }}</div>
        <div class="but-left-up"><van-icon name="arrow-up" /></div>
      </div>
      <div class="but-right">Slide to place order</div>
    </div>
  </div>
</template>

<script>
import zujian from "./zujian";
export default {
  data() {
    return {
      info: [
        {
          id: 0,
          title: "Mega San Sushi",
          des:
            "1 Wrap, 1 Rice, 5 Essentials, 1  Sprinkle, 1 Special and 1 Hous",
          price: 9.9,
          src: [require("../../assets/images/Layer1.png")],
          quantity: 1
        },
        {
          id: 1,
          title: "Little San Sushi",
          des:
            "1 Wrap, 1 Rice, 5 Essentials, 1  Sprinkle, 1 Special and 1 Hous",
          price: 7.9,
          src: [require("../../assets/images/Layer2.png")],
          quantity: 2
        },
        {
          id: 2,
          title: "Ikura Sushi",
          des: "Salmon Roe",
          price: 12.5,
          src: [require("../../assets/images/Layer3.png")],
          quantity: 3
        }
      ]
    };
  },
  methods: {
    changesum(id, quantity) {
      this.info.forEach(item => {
        if (item.id == id) {
          item.quantity = quantity;
        }
      });
    }
  },
  computed: {
    total: function() {
      var sum = 0;
      this.info.forEach(item => {
        sum += item.price * item.quantity;
      });
      sum = sum.toFixed(2);
      return sum;
    }
  },
  created() {},
  components: {
    zujian
  }
};
</script>
<style lang="less" scoped>
.top {
  width: 100vw;
  height: 22.2222vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #129f57;
  .top-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90.9259vw;
    height: 5.1852vw;

    .top-item-left {
      width: 5.7407vw;
      height: 4.3519vw;
      img {
        width: 5.7407vw;
        height: 4.3519vw;
      }
    }
    .top-item-content {
      width: 62vw;
      height: 5.1852vw;
      font-size: 5.1852vw;
      line-height: 5.1852vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Arsenal";
    }
    .top-item-right {
      width: 4.4444vw;
      height: 5.1852vw;
      img {
        width: 4.4444vw;
        height: 5.1852vw;
      }
    }
  }
}
.sst1{
  width: 100vw;
  height: 100vh;
}
.but {
  width: 100vw;
  height: 16.7593vw;
  position: fixed;
  bottom: 0px;
  display: flex;
  .but-left {
    width: 33.3333vw;
    height: 16.7593vw;
    background-color: white;
    position: relative;
    .but-left-total {
      position: absolute;
      left: 4.6296vw;
      top: 3.1481vw;
      width: 9.4444vw;
      height: auto;
      font-size: 3.1481vw;
      line-height: 1.1111vw;
      color: #000000;
      font-weight: 400;
      font-family: "Roboto";
    }
    .but-left-content {
      position: absolute;
      top: 9.6111vw;
      left: 4.6296vw;
      font-size: 4.6296vw;
      line-height: 1.1111vw;
      color: #000000;
      font-weight: 700;
      font-family: "Roboto";
    }
    .but-left-up {
      position: absolute;
      left: 25.3704vw;
      top: 5.4074vw;
      width: 3.3333vw;
      height: 3.3333vw;
    }
  }
  .but-left::after {
    content: "";
    position: absolute;
    left: 33.15vw;
    width: 0;
    height: 0;
    border-top: 8.6296vw solid transparent;
    border-right: 8.6296vw solid transparent;
    border-bottom: 8.6296vw solid transparent;
    border-left: 8.6296vw solid white;
  }
  .but-right {
    width: 66.7593vw;
    height: 16.7593vw;
    background-color: #e93731;
    color: white;
    text-align: center;
    font-size: 5vw;
    line-height: 16.7593vw;
    font-weight: 400;
    font-family: "Roboto";
  }
}
</style>
