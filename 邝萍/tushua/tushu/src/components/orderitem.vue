<template>
  <div>
    <div class="itembox">
      <div class="orderitem">
        <img class="oiimg" :src="item.imgUrl" alt="" />
        <div class="oitext">
          <div class="title">{{ item.bookName }}</div>
          <div class="author">{{ item.author }}</div>
          <div class="countprice">
            <div class="cpcount">
              <div @click="dec">-</div>
              <div>{{ item.count }}</div>
              <div @click="add">+</div>
            </div>
            <div class="cpprice">{{ sum | fu }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:this.item.count,
      s: 0,
    };
  },
  props: ["item"],
  methods: {
    add() {
      // console.log(this.item.count)
      this.item.count++;
      let obj={
        id:this.item.id,
        count:this.item.count
      }
      this.$store.commit('addcount',obj)
    },
    dec() {
      if (this.item.count == 1) {
      } else {
        // console.log(this.item.count)
        this.item.count--;
         let obj={
        id:this.item.id,
        count:this.item.count
      }
      this.$store.commit('addcount',obj)
        
      }
    },
  },
  created() {
    this.sum;
  },
  computed: {
    sum() {
      let a = this.item.count * this.item.price;
      // this.$store.state.orders
      this.s = a;
      return a;
    },
  },
  watch: {
    
  },
  filters: {
    fu(e) {
      return "￥" + e;
    },
  },
};
</script>

<style lang='less' scoped>
.itembox {
  background-color: white;

  padding: 4vw 6.6667vw 0vw 6.1333vw;
}
.orderitem {
  display: flex;
  background-color: white;
  // padding: 4vw 6.6667vw 4.8vw 6.1333vw;
  padding-bottom: 4.8vw;
  border-bottom: 0.2667vw solid #aaa;
  .oiimg {
    width: 19.7333vw;
    height: 29.0667vw;
  }

  .oitext {
    margin-left: 4.8vw;

    .title {
      font-size: 3.4667vw;
      font-weight: bold;
      margin-bottom: 3.7333vw;
    }

    .author {
      font-size: 3.2vw;
      color: #aaa;
      margin-bottom: 3.7333vw;
    }

    .countprice {
      display: flex;
      justify-content: space-between;

      .cpcount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 24vw;
        height: 6.4vw;
        padding-left: 3.7333vw;
        padding-right: 3.7333vw;
        box-sizing: border-box;
        border-radius: 3.2vw;
        background-color: #efeded;
        font-size: 3.4667vw;
        margin-right: 23.4667vw;
      }

      .cpprice {
        width: 15.2vw;
        height: 4.8vw;
        line-height: 4.8vw;
        border-radius: 2.4vw;
        background-color: #efeded;
        font-size: 3.4667vw;
        text-align: center;
      }
    }
  }
}
</style>
