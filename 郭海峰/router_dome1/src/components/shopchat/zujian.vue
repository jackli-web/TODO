<template>
  <div class="item">
    <div class="item-left">
      <img :src="info.src[0]"  @click="onChange"/>
      <van-image-preview v-model="show" :images="info.src">
      </van-image-preview>
    </div>
    <div class="item-center">
      <div class="item-center-title">{{ info.title }}</div>
      <div class="item-center-content">
        <span>{{ info.des }}</span>
      </div>
      <div class="item-center-pripe">${{ info.price }}</div>
    </div>
    <div class="item-right">
      <div @click="add">+</div>
      <div class="input">{{ quantity }}</div>
      <div @click="reduce">-</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      quantity: this.info.quantity,
      show:false
    };
  },
  methods: {
    onChange(){
      this.show=true;
    },
    add() {
      this.quantity++;
      this.$emit("changequantity", this.info.id, this.quantity);
    },
    reduce() {
      if (this.quantity !== 1) {
        this.quantity--;
      }
      this.$emit("changequantity", this.info.id, this.quantity);
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.item {
  width: 100vw;
  height: 30.7407vw;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.item-left {
  margin-left: 4.537vw;
  width: 27.1296vw;
  height: 27.1296vw;
  img {
    width: 27.1296vw;
    height: 27.1296vw;
  }
}
.item-center {
  width: 46.9444vw;
  height: 27.1296vw;
  margin-left: 4.1667vw;
  .item-center-title {
    font-size: 4.4444vw;
    color: #333333;
    font-weight: bold;
    font-family: "Arsenal";
  }
  .item-center-content {
    height: 15.8889vw;
    font-size: 3.3333vw;
    color: #a2a3a3;
    font-weight: 400;
    font-family: "Roboto";
    display: flex;
    align-items: center;
    span {
      height: 9.1296vw;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .item-center-pripe {
    font-size: 3.8889vw;
    line-height: 3.4259vw;
    color: #e93731;
    font-weight: 700;
    font-family: "Roboto";
  }
}
.item-right {
  margin-left: 8.3333vw;
  div {
    width: 5.8704vw;
    height: 5.8704vw;
    color: #c1c1c1;
    font-size: 6.4444vw;
    line-height: 5.4259vw;
    font-family: "Roboto";
    text-align: center;
  }
  .input {
    font-size: 4.4444vw;
    line-height: 3.4259vw;
    margin: 3.1296vw 0px 2.5296vw 0px;
    color: #333333;
    font-weight: 700;
  }
}
</style>
