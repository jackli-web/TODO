<template>
  <div class="other">
    <div class="platform">{{ infoi.platform }}</div>
    <div class="price" >${{ infoi.price }}</div>
    <!-- <button @click="add">ddd</button> -->
  </div>
</template>

<script>
export default {
  name: "other",
  props: ['infoi'],
  methods:{
    // add(){
    //   console.log(this.infoi);
    // }
  }
};
</script>
<style lang="less" scoped>
.other {
  height: 8.8vw;
  border-radius: 4.5333vw;
  background-color: #ffffff;
  border: 0.4vw solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  margin-left: 6.4vw;
  .platform {
    background-color: #ffffff;

    margin-left: 2.4vw;
    margin-right: 5.3333vw;
    height: 8.8vw;
    line-height: 8.8vw;
    font-size: 3.7333vw;
    color: #000000;
    font-family: "Open Sans";
  }
  .price {
    background-color: #ffffff;
    font-size: 3.7333vw;
    height: 8.8vw;
    margin-right: 2.9333vw;
    line-height: 8.8vw;
    color: #000000;
    font-family: "Open Sans";
  }
}
</style>