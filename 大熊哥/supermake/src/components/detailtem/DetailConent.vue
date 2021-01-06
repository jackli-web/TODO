<template>
  <div class="detail-conent">
    <div class="conent-t">
      <div class="conent-t-l">cience & Technology</div>
      <div class="conent-t-r">New York Times Bestseller</div>
    </div>
    <div class="conent-h">${{ showItem.price }}</div>
    <div class="conent-c">
      <van-swipe :loop="false" indicator-color="#000">
        <van-swipe-item>
          <img :src="showItem.imgUrl" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="showItem.imgUrl" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="showItem.imgUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="conent-ding"><van-icon name="like-o" /></div>
      <div class="conent-xian"></div>
      <div class="conent-c-f">
        <div class="conent-c-f-t">Formats and editions</div>
        <div class="conent-c-f-b">
          <div
            class="conent-c-f-b-b"
            v-for="(item1, index) in showItem.otherPrice"
          >
            <span>{{ item1.platform }}</span>
            <span>${{ item1.price }}</span>
          </div>
          <div class="conent-c-f-b-f">
            <div class="conent-c-f-b-f-t">Quantity</div>
            <div class="conent-c-f-b-f-b">
              <span @click="sub">-</span>
              <span>{{count}}</span>
              <span@click="add">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    add() {
      this.$emit("add");
    },
    sub() {
      this.$emit("sub");
    },
  },
  computed: {
    showItem() {
      return this.$store.state.currentItem;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-conent {
  margin-top: 3.2vw;
  background-color: #fff;
  .conent-t {
    display: flex;
    .conent-t-l {
      margin: 3.2vw 4.8vw 0 6.4vw;
      width: 37.3333vw;
      height: 4.2667vw;
      font-size: 3.4667vw;
      color: #000000;
    }
    .conent-t-r {
      margin-top: 2.1333vw;
      width: 46.6667vw;
      height: 6.9333vw;
      line-height: 6.9333vw;
      border-radius: 1.0667vw;
      background-color: #000000;
      font-size: 3.4667vw;
      color: #ffffff;
      font-weight: bold;
      text-align: center;
    }
  }
  .conent-h {
    margin: 3.2vw 0 0 6.4vw;
    width: 15.7333vw;
    height: 4.8vw;
    font-size: 4.8vw;
    color: #000000;
    font-weight: bold;
  }
  .conent-c {
    height: 135.2vw;
    background-color: #fff;
    .van-swipe {
      margin: 8.2667vw 30.1333vw 0 29.8667vw;
      width: 40vw;
      height: 60.5333vw;
      .van-swipe-item {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 80%;
        }
      }
    }
    .conent-ding {
      margin-right: 6.6667vw;
      float: right;
      width: 8.8vw;
      height: 8.8vw;
      font-size: 5.3333vw;
      text-align: center;
      border-radius: 4.5333vw;
      background-color: #e7e7e7;
      .van-icon {
        margin-top: 1.8667vw;
      }
    }
    .conent-xian {
      margin: 20.8vw 3.7333vw 4vw 3.7333vw;
      background-color: #000000;
      border: 0.1333vw solid #e3e3e3;
    }
  }
  .conent-c-f {
    margin-top: 4vw;
    height: 49.6vw;
    .conent-c-f-t {
      margin-left: 6.6667vw;
      width: 39.1333vw;
      height: 3.7333vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
    }
    .conent-c-f-b {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      margin-top: 4.5333vw;
      .conent-c-f-b-b {
        margin-left: 2.4vw;
        width: 21.2vw;
        height: 8.8vw;
        text-align: center;
        line-height: 8.8vw;
        border-radius: 4.5333vw;
        background-color: #ffffff;
        border: 0.4vw solid #c4c4c4;
        font-size: 3.7333vw;
        color: #000000;
        &:last-child {
          margin-left: 1.8667vw;
        }
      }
      .conent-c-f-b-f {
        margin-top: 5.0667vw;
        .conent-c-f-b-f-t {
          margin-left: 6.4vw;
          width: 15.7333vw;
          height: 3.7333vw;
          font-size: 3.7333vw;
          color: #000000;
          font-weight: bold;
        }
        .conent-c-f-b-f-b {
          margin: 8vw 0 4vw 6.4vw;
          width: 31.2vw;
          height: 8.8vw;
          font-size: 8.8vw;
          border-radius: 4.5333vw;
          background-color: #ffffff;
          border: 0.4vw solid #c4c4c4;
          span {
            margin-left: 2.6667vw;
          }
        }
      }
    }
  }
}
</style>