<template>
  <div class="che_book">
    <div class="che_book_left"><img :src="arr.imgUrl" alt="" /></div>
    <div class="che_book_rigth">
      <div class="book_name">{{ arr.bookName }}</div>
      <div class="book_author">{{ arr.author }}</div>
      <div class="book_box1">
        <div class="book_box2">
          <div class="jian" @click="jian"></div>
          <div class="count">{{ count }}</div>
          <div class="add" @click="add">+</div>
        </div>
        <div class="book_price">${{ countprice }}</div>
      </div>
    </div>
    <!-- <div class="book_xian"></div> -->
  </div>
</template>

<script>
export default {
  name: "paymentbook", 
  props: ["arr", "i"],
  data() {
    return {
      count: this.arr.count,
      countprice: this.arr.count * this.arr.price,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    jian() {
      this.count--;
    },
  },
  updated() {
    this.$emit("mycount", this.countprice, this.i);
    this.count = this.arr.count;
    this.countprice= this.arr.count * this.arr.price;
  },
  watch: {
    count(newv, oldv) {
      // if (newv < 0) {
      //   console.log(this.arr);
      //   this.$store.commit("jianarr", this.arr);
      //   // this.$emit("mycount", this.countprice, this.i);
      // } else {
        console.log(this.arr);
        // this.countprice = newv * this.arr.price;
        let obj={item:this.arr,num:newv}
        this.$store.commit("changearr",obj);

        // this.$emit("mycount", this.countprice, this.i);
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.che_book {
  display: flex;
  position: relative;
  * {
    background-color: #ffffff;
  }
  .che_book_left {
    width: 19.7333vw;
    height: 29.0667vw;
    margin-right: 4.8vw;
    background-color: antiquewhite;

    img {
      width: 19.7333vw;
      height: 29.0667vw;
    }
  }
  .che_book_rigth {
    .book_name {
      width: 47.4667vw;
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: left;
    }
    .book_author {
      margin-top: 3.7333vw;
      width: 47.4667vw;
      font-size: 3.2vw;
      color: #000000;
      text-align: left;
      font-family: "Open Sans";
    }
    .book_box1 {
      width: 62.9333vw;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .book_box2 {
        width: 24vw;
        height: 6.4vw;
        border-radius: 3.2vw;
        background-color: #efeded;
        border: 1.5px solid #c4c4c4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .jian {
          width: 2.9333vw;
          height: 0;
          background-color: #000000;
          border: 0.2667vw solid #000000;
          margin-left: 3.7333vw;
        }
        .jian1 {
          width: 2.9333vw;
          height: 0;
          background-color: #ffffff;
          border: 0.5333vw solid #ffffff;
          margin-left: 3.7333vw;
        }
        .count {
          font-size: 3.4667vw;
          height: 3.4667vw;
          line-height: 3.4667vw;
          color: #000000;
          font-weight: bold;
          font-family: "Open Sans";
        }
        .add {
          font-size: 6.4vw;
          height: 1.6vw;
          line-height: 0;
          color: #000000;
          font-weight: bold;
          font-family: "Open Sans";
          margin-right: 3.2vw;
        }
      }
      .book_price {
        width: 15.2vw;
        height: 4.8vw;
        border-radius: 2.4vw;
        background-color: #efeded;
        font-size: 3.4667vw;
        color: #000000;
        font-family: "Open Sans";
        line-height: 4.8vw;
      }
    }
  }
  //   .book_xian{
  //       width: 87.2vw;
  //       height: 0;
  //       background-color: #000000;
  // border: 0.2667vw solid #e3e3e3;
  //   }
}
</style>