<template>
  <div id="orderform">
    <div class="book_img">
      <img class="img_books" :src="hinfo.imgUrl" alt="" />
    </div>
    <div class="books_message">
      <div class="top">
        Will My Cat EatMy Eyeballs?<br />
        Big Questions from Tiny<br />
        Mortals About Death
      </div>
      <div class="center">by Caitlin Doughty,Dianne Ruz</div>
      <div class="bottom">
        <div class="add_sum">
          <div class="sum">
            <div
              @click="sum"
              :class="selfcount == 1 ? 'sum_btn_ac' : 'sum_btn'"
            >
              -
            </div>
          </div>
          <div class="count_div">
            <div class="count">{{ selfcount }}</div>
          </div>
          <div class="add">
            <div @click="add" class="add_btn">+</div>
          </div>
        </div>
        <div class="price_title">
          <div class="price_txt">${{ hinfo.price * selfcount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hinfo", "hindex"],
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("add_count", this.hindex);
    },
    sum() {
      this.$store.commit("sum_count", this.hindex);
    },
  },
  computed: {
    selfcount() {
      return this.$store.state.state_info[this.hindex].count;
    },
  },
};
</script>

<style lang="less" scoped>
#orderform {
  width: 87.2vw;
  height: 36.5333vw;
  display: flex;
  align-items: center;
  padding-bottom: 1.0667vw;
  border-bottom: 1px solid #e3e3e3;
  .book_img {
    margin-right: 4.8vw;
    .img_books {
      width: 19.7333vw;
      height: 29.0667vw;
    }
  }
  .books_message {
    .top {
      font-size: 3.4667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .center {
    font-size: 3.2vw;
    color: #000000;
    font-family: "Open Sans";
    margin: 3.7333vw 0 4vw 0;
  }
  .bottom {
    display: flex;
    .add_sum {
      display: flex;
      width: 24vw;
      height: 6.4vw;
      border-radius: 3.2vw;
      background-color: #efeded;
      margin-right: 25.8667vw;
      align-items: center;
      .sum {
        flex: 1;
        text-align: center;
        .sum_btn {
          font-size: 4.2667vw;
        }
        .sum_btn_ac {
          font-size: 4.2667vw;
          color: #978787;
        }
      }
      .count_div {
        flex: 1;
        text-align: center;
        .count {
          font-size: 3.4667vw;
          color: #000000;
          font-family: "Open Sans";
        }
      }
      .add {
        flex: 1;
        text-align: center;
        .add_btn {
          font-size: 4.2667vw;
        }
      }
    }
    .price_title {
      width: 15.2vw;
      height: 4.8vw;
      border-radius: 2.4vw;
      background-color: #efeded;
      text-align: center;
      line-height: 4.8vw;
      margin-top: 1.3333vw;
      .price_txt {
        font-size: 3.4667vw;
        color: #000000;
        font-family: "Open Sans";
      }
    }
  }
}
</style>
