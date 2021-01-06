<template>
  <div id="book_list">
    <div class="top">
      <img @click="goback" class="back_img" src="@/assets/back.png" alt="" />
      <div class="txt_div">Cart</div>
      <img
        @click="jumpTo('shop_cart')"
        class="shop_img"
        src="@/assets/shopcar.png"
        alt=""
      />
    </div>
    <div class="content">
      <div class="content_top">
        <div class="text_booklist">Books you Liked</div>
        <div class="filter">
          <div class="screen_div">
            <img class="screen_icon" src="@/assets/filter-icon.png" alt="" />
          </div>
          <div class="text_filter">filter</div>
          <div class="screenbottem_div">
            <img
              class="screenbottom_icon"
              src="@/assets/filter-bottom.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="content_book">
        <div class="imgbook_box" v-for="(item, index) in info" :key="index">
          <img
            @click="jumpTo('book_part', item)"
            class="img_book"
            :src="item.imgUrl"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="home">
        <img class="home_img" src="@/assets/home-icon.png" alt="" />
      </div>
      <div class="find">
        <img class="find_img" src="@/assets/find-icon.png" alt="" />
      </div>
      <div class="like">
        <img class="like_img" src="@/assets/like-icon.png" alt="" />
      </div>
      <div class="my">
        <img class="my_img" src="@/assets/my-icon.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
    };
  },
  beforeMount() {
    this.$axios({
      url: "/api/books",
    }).then((res) => {
      this.info = res.data.info;
    });
  },
  methods: {
    jumpTo(str, val) {
      this.$router.push({
        name: str,
        query: val,
      });
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
#book_list {
  width: 100vw;
  background-color: #f4f5f7;
  padding-top: 12.5333vw;
  .top {
    width: 100vw;
    height: 12.5333vw;
    background-color: #ffffff;
    display: flex;
    position: fixed;
    top: 0;
    .back_img {
      width: 3.2vw;
      height: 5.3333vw;
      margin: 2.6667vw 0 0 6.4vw;
    }
    .txt_div {
      width: 8.5333vw;
      height: 3.4667vw;
      font-size: 4.2667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 3.4667vw 0 0 36vw;
    }
    .shop_img {
      width: 5.8667vw;
      height: 5.3333vw;
      margin: 2.9333vw 0 0 33.8667vw;
    }
  }
  .content {
    background-color: #ffffff;
    margin-top: 2.1333vw;
    width: 100vw;
    height: 158.4vw;
    .content_top {
      display: flex;
      width: 100vw;
      height: 6.4vw;
      padding-top: 3.2vw;
      .text_booklist {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        margin-left: 6.6667vw;
      }
      .filter {
        display: flex;
        width: 24.8vw;
        height: 6.4vw;
        border-radius: 0.8vw;
        background-color: #ffffff;
        border: 1px solid #b1b1b1;
        margin-left: 33.0667vw;
        align-items: center;
        .screen_div {
          text-align: center;
          flex: 1;
          .screen_icon {
            width: 3.2vw;
            height: 3.2vw;
          }
        }
        .text_filter {
          text-align: center;
          flex: 1;
          font-size: 3.7333vw;
          color: #808080;
          font-weight: bold;
          font-family: "Open Sans";
        }
        .screenbottem_div {
          text-align: center;
          flex: 1;
          .screenbottom_icon {
            width: 2.9333vw;
            height: 1.6vw;
            margin-bottom: 0.8vw;
          }
        }
      }
    }
    .content_book {
      padding: 2.1333vw 6.1333vw 0.5333vw 6.4vw;
      width: 87.4667vw;
      display: flex;
      flex-wrap: wrap;
      .imgbook_box {
        width: 43.7333vw;
        height: 47.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .img_book {
          width: 26.6667vw;
          height: 37.6vw;
        }
      }
    }
  }
  .bottom {
    width: 100vw;
    height: 13.0667vw;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    .home {
      flex: 1;
      text-align: center;
      .home_img {
        width: 6.1333vw;
        height: 5.0667vw;
      }
    }
    .find {
      flex: 1;
      text-align: center;
      .find_img {
        width: 5.0667vw;
        height: 5.0667vw;
      }
    }
    .like {
      flex: 1;
      text-align: center;
      .like_img {
        width: 5.0667vw;
        height: 4.8vw;
      }
    }
    .my {
      text-align: center;
      flex: 1;
      .homemy_img {
        width: 4.8vw;
        height: 4.5333vw;
      }
    }
  }
  padding-bottom: 22.4vw;
}
</style>