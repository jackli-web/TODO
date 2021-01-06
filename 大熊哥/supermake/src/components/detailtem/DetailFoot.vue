<template>
  <div class="detail-foot">
    <div class="detail-foot-h">
      <div class="detail-foot-h-b">
        New York Times Bestseller<br />
        Winner of the 2019 Goodreads Choice Award for<br />
        Science & Technology
      </div>
    </div>
    <div class="detail-foot-b">
      <div class="detail-foot-b-l" @click="addcart(count)">Add to cart</div>
      <div class="detail-foot-b-r" @click="gocart">Buy Now</div>
    </div>
    <div class="hei"></div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
    },
  },
  methods: {
    addcart(count) {
     let obj={id:this.$store.state.currentItem.id,count:count,item:this.$store.state.currentItem}
     this.$store.commit('showinfo',obj) 
    },
    gocart(){
      this.$router.push('/goodscart')
    }
  },
};
</script>

<style lang="less" scoped>
.detail-foot {
  height: 37.3333vw;
  .detail-foot-h {
    margin-top: 2.6667vw;
    box-sizing: border-box;
    padding: 2.4vw 12.5333vw 0 6.4vw;
    height: 14.9333vw;
    background-color: #fff;
    .detail-foot-h-b {
      width: 81.0667vw;
      height: 11.7333vw;
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
    }
  }
  .detail-foot-b {
    display: flex;
    box-sizing: border-box;
    padding: 3.7333vw 8.8vw 0 8.8vw;
    text-align: center;
    .detail-foot-b-l {
      width: 28vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #efeded;
      line-height: 9.8667vw;
      font-size: 3.7333vw;
      color: #818181;
      font-weight: bold;
    }
    .detail-foot-b-r {
      margin-left: 4.8vw;
      width: 49.6vw;
      height: 9.8667vw;
      line-height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      font-size: 4.2667vw;
      color: #ffffff;
      font-weight: bold;
    }
  }
  .hei {
    width: 100vw;
    height: 9.0667vw;
    background-color: #000;
  }
}
</style>