<template>
  <div class="cart-total">
    <div class="cart-head">
      <div class="head-content">
        <div class="arrow">
          <img class="arrow-img" src="../assets/arrow.png" alt="" />
        </div>
        <div class="txt">Cart</div>
        <div class="cart">
          <img class="cart-img" src="../assets/cart.png" alt="" />
        </div>
      </div>
    </div>
    <div class="cart-content">
      <div>
        <div class="content-top">
          <div class="select-txt">Books&nbsp;you&nbsp;Liked</div>
          <div class="filter">
            <div class="filter-icon">
              <img class="filter-img" src="../assets/filter.png" alt="" />
            </div>
            <div class="filter-txt">Filter</div>
            <div class="filter-arrow">
              <img class="arrow-img1" src="../assets/arrow-back.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="fix_container">
          <booklist
            v-for="(item, index) in info"
            :key="index"
            :booklist="item"
            :index="index"
          ></booklist>
        </div>
      </div>
    </div>
    <div class="cart-bottom">
      <div class="bottom-bar">
        <div><img src="../assets/home.png" alt="" /></div>
        <div><img src="../assets/search.png" alt="" /></div>
        <div><img src="../assets/like.png" alt="" /></div>
        <div><img src="../assets/people.png" alt="" /></div>
      </div>
      <div class="bottom-black"></div>
    </div>
    <!-- <div><button @click="jumpto('products')">进入products页面</button></div> -->
  </div>
</template>

<script>
import booklist from "./booklist";
export default {
  name: "cart",
  data() {
    return {
      info: [],
    };
  },
  beforeMount() {
    this.$axios({
      url: "/api/books",
      method: "get",
    }).then((res) => {
      this.info = res.data.info;
      console.log(res);
      console.log(this.info);
    });
  },
  methods: {
    // jumpto(str) {
    //   this.$router.push({
    //     name: str,
    //   });
    // },
  },
  components: {
    booklist: booklist,
  },
};
</script>

<style lang="less" scoped>
.content-bottom {
  // display:flex;
  margin-left: 14.6667vw;
  margin-right: 14.6667vw;
  // justify-content: center;
  .fix_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 6.4vw;
  }
}
.cart-total {
  width: 100vw;
  // height: 216.5333vw;
}
/* 头部 */
.cart-head {
  width: 100vw;
  height: 12.5333vw;
  // background: greenyellow;
  background: #ffffff;
  margin-top: 11.7333vw;
  // position: fixed;
}
.head-content {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 6.1333vw 0 6.4vw;
}
.arrow {
  width: 3.2vw;
  height: 5.3333vw;
  // margin-left: 6.4vw;
  // margin-right: 36vw;
}
.cart {
  width: 5.8667vw;
  height: 4.8vw;
}
.arrow-img {
  width: 3.2vw;
  // height: 5.3333vw;
  background-color: #000000;
}
.txt {
  font-size: 4.2667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  // margin-right: 33.8667vw;
}
.cart-img {
  width: 5.3333vw;
  height: 4.2667vw;
  background-color: #000000;
}
/* 内容区 */
.cart-content {
  width: 100vw;
  height: 161.0667vw;
  filter: drop-shadow(0px 2px 3.5px rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
  margin: 2.6667vw 0 0 0;
  // background-color: goldenrod;
  // margin-bottom: 9.0667vw;
  margin-bottom: 16vw;
}
.content-top {
  display: flex;
  //  background-color: gray;
  justify-content: space-between;
  align-items: center;
  margin: 0 6.4vw 0 6.6667vw;
}
.filter {
  display: flex;
  align-items: center;
  width: 24.8vw;
  height: 6.4vw;
  border-radius: 0.8vw;
  background-color: #ffffff;

  border: 0.2667vw solid #b1b1b1;
  // margin: 2.6667vw 6.4vw 0 0;
}
.select-txt {
  width: 29.0667vw;
  // height: 3.7333vw;
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  // margin: 4.5333vw 33.0667vw 0 6.6667vw;
}
.filter-img {
  width: 3.2vw;
  height: 2.9333vw;
  border-radius: 6xx;
  background-color: #000000;
  // border: 0.2667vw solid #ffffff;
  margin: 0 3.2vw 0 1.6vw;
}
.arrow-img1 {
  width: 2.6667vw;
  height: 1.6vw;
  background-color: #000000;
}
.filter-txt {
  width: 9.0667vw;
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  margin-right: 3.2vw;
}
// 底部
.cart-bottom {
  position: fixed;
  height: 21.6vw;
  bottom: 0;
  width: 100vw;
  filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
  background-color: #f9f9f9;
  // background: blueviolet;
}
.bottom-bar {
  display: flex;
  height: 13.0667vw;
  align-items: center;
  // background: brown;
  padding-left: 10.6667vw;
  padding-right: 10.6667vw;
  justify-content: space-between;
}
.bottom-black {
  background: #000000;
  height: 9.0667vw;
}
</style>