<template>
  <div class="box">
    <div class="img">
      <img :src="item.item.imgUrl" alt="" />
    </div>
    <div class="right">
      <div class="will">
        <p>
          {{ item.item.bookName }}
        </p>
      </div>
      <div class="byc">
        <p>{{ item.item.author }}</p>
      </div>
      <div class="num_count">
        <span class="fuh" @click="sub">–</span>
        <span>{{ ccount }}</span>
        <span class="fuh" @click="add">+</span>
      </div>
      <div class="allp">
        <p>${{ upcount.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      ccount: this.item.count,
    };
  },
  computed: {
    upcount() {
      return this.item.item.price * this.ccount;
    },
  },
  methods: {
    sub() {
      if (this.ccount <= 1) {
        return false;
      }
      this.item.count--;
      this.ccount--;
    },
    add() {
      this.item.count++;
      this.ccount++;
    },
  },
};
</script>

<style lang='less' scoped>
p {
  margin: 0;
  padding: 0;
}
.box {
  position: relative;
  width: 100vw;
  height: 37.6vw;
  overflow: hidden;
  background-color: #fff;
  .img {
    float: left;
    width: 19.7333vw;
    height: 29.0667vw;
    margin: 3.7333vw 0 0 6.1333vw;
    img {
      width: 19.7333vw;
      height: 29.0667vw;
    }
  }
  .right {
    float: right;
    width: 69.3333vw;
    height: 37.6vw;
    .will {
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-top: 3.7333vw;
      p {
        width: 47.4667vw;
        // height: 13.3333vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
    .byc {
      font-size: 3.2vw;
      color: #000000;
      font-family: "Open Sans";
      margin: 2.6667vw 0 0 0.2667vw;
    }
    .num_count {
      position: absolute;
      bottom: 4.2667vw;
      float: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 2.6667vw 0 0;
      width: 24vw;
      height: 6.4vw;
      border-radius: 3.2vw;
      background-color: #efeded;
      border: 0.4vw solid #c4c4c4;
      line-height: 6.4vw;
      .fuh {
        margin: -0.8vw 2.1333vw 2.6667vw;
        font-size: 7.4667vw;
      }
    }
    .allp {
      position: absolute;
      bottom: 5.3333vw;
      right: 0;
      margin: 4.8vw 6.4vw 0 0;
      padding: 0 2.6667vw 0 0;
      height: 4.8vw;
      border-radius: 2.4vw;
      background-color: #efeded;
      p {
        margin: 0 0 0 2.1333vw;
        font-size: 3.4667vw;
        color: #000000;
        font-family: "Open Sans";
      }
    }
  }
}
</style>