<template>
  <div>
    <div class="header">
      <div class="header-top"></div>
      <div class="header-buttom">
        <div>
          <img class="pic" src="@/assets/1.png" alt @click="goback" />
        </div>
        <div class="wold">Cart</div>
        <div>
          <img class="pic" src="@/assets/2.png" alt @click="jumpto('placeorder')" />
        </div>
      </div>
    </div>
    <div class="mi"></div>
    <div class="countent">
      <div class="count">
        <div class="count-left">Books you Liked</div>
        <div class="count-right">
          <img src="@/assets/3.png" alt />
          <span>Filter</span>
          <img src="@/assets/4.png" alt />
        </div>
      </div>
      <div class="books">
        <book class="book" v-for="(item,index) in arr" :key="(item,index)" :seftinfo="item"></book>
      </div>
    </div>
    <div class="footer">
      <div class="footer-t">
        <div class="item">
          <img src="@/assets/home.png" alt />
        </div>
        <div class="item">
          <img src="@/assets/Path 1.png" alt />
        </div>
        <div class="item">
          <img src="@/assets/heart.png" alt />
        </div>
        <div class="item">
          <img src="@/assets/box.png" alt />
        </div>
      </div>
      <div class="footer-r">
        <div class="til"></div>
      </div>
    </div>
  </div>
</template>

<script>
import book from "./book";
export default {
  name: "HelloWorld",
  data() {
    return {
      arr: []
    };
  },
  beforeMount() {
    this.$axios({
      url: "/api/books",
      method: "get"
    }).then(res => {
      console.log(res, res.data.info);
      this.arr = res.data.info;
    });
  },
  methods: {
    jumpto(str) {
      this.$router.push({ name: str });
    },
    goback() {
      this.$router.go(-1);
    }
  },
  components: {
    book: book
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  // position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100vw;
}
.header-top {
  height: 11.7333vw;
}
.header-buttom {
  background-color: #fff;
  display: flex;
  margin-left: 6.4vw;
  margin-right: 6.4vw;
  height: 12.5333vw;
  align-items: center;
  justify-content: space-between;
  .pic {
    height: 5.3333vw;
    align-items: center;
  }
  .wold {
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.mi {
  height: 2.6667vw;
  background-color: #efeded;
}
.countent {
  margin-top: 2.6667vw;
  width: 100vw;
  height: 158.4vw;
  filter: drop-shadow(0px 2px 3.5px rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
  .count {
    display: flex;
    margin-left: 6.6667vw;
    margin-right: 6.4vw;
    justify-content: space-between;
    align-items: center;
    .count-left {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .count-right {
      width: 24.8vw;
      height: 6.4vw;
      border-radius: 0.8vw;
      background-color: #ffffff;
      border: 0.2667vw solid #b1b1b1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        margin-left: 1.6vw;
        margin-right: 1.6vw;
      }
      span {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
  .books {
    margin-top: 7.2vw;
    padding-left: 15.0943vw;
    padding-right: 15.0943vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    filter: drop-shadow(0px 2px 3.5px rgba(0, 0, 0, 0.03));
    .book {
      width: 26.9542vw;
      height: 38.0054vw;
      margin-bottom: 10.2426vw;
      filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
      .bookicon {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.footer {
  width: 100vw;
  height: 22.1333vw;
  position: fixed;
  bottom: 0;
  .footer-t {
    background: #f9f9f9;
    // position: fixed;
    // bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10.7817vw;
    padding-right: 10.7817vw;
    box-sizing: border-box;
    width: 100vw;
    height: 13.2075vw;
    filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
    background-color: #f9f9f9;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .footer-r {
    width: 100vw;
    height: 9.0667vw;
    background-color: #000000;
    .til {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 35.7333vw;
      height: 1.3333vw;
      border-radius: 0.8vw;
      background-color: #000000;
      margin-left: 32.2667vw;
      margin-top: 5.3333vw;
    }
  }
}
</style>


