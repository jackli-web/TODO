<template>
  <div class="bigbox">
    <div class="head">
      <div class="icon">
        <a href="#"
          ><img class="pic" src="../assets/ionic-ios-arrow-back.png"
        /></a>
      </div>
      <div class="headtit"><span class="word">My Cart</span></div>
      <div class="icon">
        <a href="#"><img class="pic1" src="@/assets/Path 5.png" /></a>
      </div>
    </div>

    <div class="body">
      <div class="liked">
        <div class="likedtext"><span>Books you Liked</span></div>
        <div>
          <div class="filter">
            <img src="../assets/Icon feather-filter.png" />
            <span>Filter</span>
            <img src="../assets/Icon ionic-ios-arrow-back.png" />
          </div>
        </div>
      </div>
      <div>
        <!-- <goods
          :info="arr"
          :uitem="item"
          v-for="(item, index) in arr"
          :key="item.index"
        ></goods> -->
        <div class="part2">
          <!-- <div class="book" v-for="(item,index) in arr"  :key="item.index"><img class="bookicon" :src="item.imgUrl" alt="" srcset=""></div>
        </div> -->
<!-- @fix="jumpto(item)" -->
          <book

            v-for="(item, index) in arr"
            :key="item.index"
            :selfinfo="item"
          ></book>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <a href="#"
          ><img class="pic" src="../assets/Icon material-home.png"
        /></a>
      </div>
      <div>
        <a href="#"><img class="pic" src="../assets/Path 1.png" /></a>
      </div>
      <div>
        <a href="#"><img class="pic" src="../assets/feather-heart.png" /></a>
      </div>
      <div>
        <a href="#"
          ><img class="pic" src="../assets/Icon material-account-box.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import book from "./book";
import payment from "./payment";
import products from "./products";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: [],
    };
  },
  methods: {
    // jumpto(item) {
    //   this.$router.push({ name: "products", query: item });
    // },
  },
  beforeMount() {
    this.$axios({
      url: "/api/books",
      method: "get",
      data: {},
    }).then((res) => {
      console.log("res", res);
      this.arr = res.data.info;
    });
  },
  components: {
    payment: payment,
    products: products,
    book: book,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
* {
  margin: 0vw;
  padding: 0vw;
}
.bigbox {
  .head {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 12.5333vw;
    padding-left: 6.4vw;
    padding-right: 6.4vw;
    margin-bottom: 3.6667vw;
    top: 0;
    box-sizing: border-box;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    .pic {
      width: 2.9333vw;
    }
    .pic1 {
      width: 5.3333vw;
    }
    .word {
      font-size: 4.3127vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      position: relative;
      top: -1.0782vw;
    }
  }
  .liked {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 4.2667vw;
    padding-left: 6.4vw;
    padding-right: 6.4vw;
    width: 100vw;
    align-items: center;
    margin-bottom: 7.2vw;
  }
  .likedtext {
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .filter {
    border: 1px solid #ccc;
  }
  .filter span {
    padding: 1.3333vw;
  }
  .body {
    background-color: #ffffff;
    .part2 {
      // border:1px solid red;
      padding-left: 15.0943vw;
      padding-right: 15.0943vw;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

    }
  }
  .book {
    width: 100px;
    height: 141px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 38px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    // width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10.6667vw;
    padding-right: 10.6667vw;
    box-sizing: border-box;
    width: 100vw;
    height: 13.3333vw;
    border: 1px solid #ccc;
  }
}
</style>
