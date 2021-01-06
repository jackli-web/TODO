<template>
  <div class="cart">
    <div class="books">
      <div class="books_text">Books you Liked</div>
      <div class="books_Fiter">
        <div class="books_Fiter_img1">
          <img src="@/assets/Icon feather-filter.png" alt="" />
        </div>
        <div class="books_Fiter_text">Fiter</div>
        <div class="books_Fiter_img2">
          <img src="@/assets/Icon ionic-ios-arrow-back (1).png" alt="" />
        </div>
      </div>
    </div>
    <div class="books_img">
      <books v-for="(item, index) in info" :key="index" :bookData="item" />
    </div>
  </div>
</template>

<script>
import books from "./books.vue";

export default {
  components: {
    books,
  },
  computed:{
    info(){
      return this.$store.state.info;
    }
  },
  
};
</script>
<style lang="less" scoped>
* {
  background-color: #ffffff;
}
.cart {
  margin-top: 2.6667vw;
  width: 100vw;
  height: 158.4vw;
  .books {
    display: flex;
    justify-content: space-between;
    padding: 4.5333vw 6.6667vw 0 6.6667vw;
    .books_Fiter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 24.8vw;
      height: 6.4vw;
      border-radius: 0.8vw;
      border: 0.2667vw solid #b1b1b1;
      .books_Fiter_img1 {
        margin: 1.6vw 0 1.6vw 1.6vw;
        img {
          width: 3.2vw;
          height: 2.9333vw;
        }
      }
      .books_Fiter_text {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }

      .books_Fiter_img2 {
        margin: 2.4vw 1.6vw 2.4vw 0;
        img {
          width: 2.6667vw;
          height: 1.6vw;
        }
      }
    }
    .books_text {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .books_img {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 7.2vw 14.6667vw 0 14.6667vw;
  }
}
</style>