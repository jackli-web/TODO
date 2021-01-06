<template>
  <div class="hello">
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #title>
        <span>Cart</span>
      </template>

      <template #right>
        <van-icon name="cart-o" color="#1989fa" size="18" />
      </template>
    </van-nav-bar>
    <div class="part1">
      <div class="word">Books you Liked</div>
      <div class="container">filter</div>
    </div>
    <van-grid clickable :column-num="2">
      <van-grid-item v-for="(item, index) in arr" :key="index" to="/xiangqing">
        <img :src="item.imgUrl" @click="jumpto(index)" />
        <span>{{ item.bookName }}</span>
      </van-grid-item>
    </van-grid>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Grid, GridItem, Tabbar, TabbarItem, NavBar, Icon } from "vant";

export default {
  name: "HelloWorld",
  data() {
    return {
      arr: [],
      active: 0,
    };
  },
  beforeMount() {
    this.$axios({
      method: "get",
      url: "/api/books",
      data: {},
    }).then((res) => {
      this.arr = res.data.info;
      console.log("res", res);
      // console.log("info",res.data.info)
      // console.log("arr",this.arr)
    });
  },
  methods: {
    onClickLeft() {
      alert("已经是首页了");
    },
    onClickRight() {
      this.$router.push({ path: "/son" });
      return;
    },
    jumpto: function (src) {
      // console.log(111);
      // console.log(this.arr);
      // console.log(this.arr[src]);
      this.$router.push({ name: "xiangqing", query: this.arr[src] });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello {
  width: 100vw;
  .van-nav-bar {
    .van-nav-bar__content {
     
      .van-nav-bar__title {
        span {
          font-size: 4.3127vw;
          color: #000000;
          font-weight: bold;
          font-family: "Open Sans";
          position: relative;
          top: 0vw;
        }
      }
    }
  }

  .part1 {
    padding-left: 6.7385vw;
    padding-right: 6.469vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;
    .word {
      font-size: 3.7736vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .container {
      width: 25.0674vw;
      height: 6.469vw;
      border-radius: 3px;
      background-color: #ffffff;
      border: 1px solid #b1b1b1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .van-grid {
    margin-bottom: 20vw;
    .van-grid-item {
      .van-grid-item__content {
        height: 80vw;
        img {
          height: 60vw;
          width: 40vw;
          margin-bottom: 2vw;
        }
        span {
          width: 40vw;
          font-size: 5vw;
          text-align: center;
        }
      }
    }
  }
}
.van-tabbar {
  border-top: 1px solid red;
}
.title {
  text-align: center;
  margin: 1vw;
  .img {
    padding: 1rem;
    width: 40vw;
    img {
      width: 40vw;
    }
  }
}
</style>
