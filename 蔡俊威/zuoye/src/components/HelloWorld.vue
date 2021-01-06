<template>
  <div>
    <Head :uname="name"></Head>
    <div class="content">
      <div class="byl">Books you Liked</div>
      <div class="filter">
        <img class="zuo" src="../assets/filter.png" alt="" />
        <span class="middle">Filter</span>
        <img class="you" src="../assets/xia.png" alt="" />
      </div>
      <ul>
        <li v-for="item in info" :key="item.id" @click="go(item)">
          <img :src="item.imgUrl" />
        </li>
      </ul>
    </div>
    <div class="foot">
      <div class="footer">
        <div><img src="../assets/zhuye.png" /></div>
        <div><img src="../assets/Path 1.png" /></div>
        <div><img src="../assets/xin.png" /></div>
        <div><img src="../assets/user.png" /></div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Head from "./head";
import Foot from "./foot";
export default {
  components: {
    Head,
    Foot,
  },
  data() {
    return {
      info: [],
      name: "Cart",
    };
  },
  methods:{
    go(item){
      this.$store.state.current=item;
      this.$router.push('/book')
    }
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/api/books",
    }).then((res) => {
      this.info = res.data.info;
    });
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 158.4vw;
  background-color: #fff;
  .byl {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    display: inline-block;
    margin: 2.9333vw 0 0 6.6667vw;
  }
  .filter {
    float: right;
    width: 24.8vw;
    height: 6.4vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 1px solid #b1b1b1;
    margin: 2.6667vw 6.6667vw 0 0;
    .zuo {
      width: 3.2vw;
      height: 2.9333vw;
      margin: 1.6vw 0 0 1.6vw;
    }
    .middle {
      font-size: 3.7333vw;
      color: #b1b1b1;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 1.6vw 0 0 1.6vw;
    }
    .you {
      float: right;
      width: 2.6667vw;
      height: 1.6vw;
      margin: 2.4vw 1.6vw 0 0;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 26.6667vw;
      height: 37.6vw;
      filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
      margin: 7.2vw 2.1333vw 2.9333vw 14.9333vw;
      img {
        width: 100%;
      }
    }
  }
}
.foot {
  .footer {
    display: flex;
    position: fixed;
    bottom: 9.0667vw;
    width: 100vw;
    height: 13.0667vw;
    border-top: 2px solid #ccc;
    background-color: #f5f6f8;
    div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      img {
        width: 6.1333vw;
        height: 5.0667vw;
      }
    }
  }
}
</style>
