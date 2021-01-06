<template>
  <div class="box">
    <div class="top">
      <div class="dis">
        <div>
          <img class="left-jt" src="@/assets/Icon ionic-ios-arrow-back.png" />
        </div>
        <div class="world">cart</div>
        <div class="shop">
          <div><img class="shopcart" src="@/assets/Path 5.png" /></div>
          <div><img class="cir1" src="@/assets/Path 3.png" /></div>
          <div><img class="cir2" src="@/assets/Path 4.png" /></div>
        </div>
      </div>
    </div>

    <div class="books">
      <div class="book-top">
        <div class="world2">Books you Liked</div>
        <div class="filter">
          <div class="filtop">
            <img class="iconfilter" src="@/assets/Icon feather-filter.png" />
            Filter
            <img
              class="iconback"
              src="@/assets/Icon ionic-ios-arrow-back (1).png"
            />
          </div>
        </div>
      </div>
      <div class="allbook">
        <div class="wrap">
          <!-- <div v-for="(item, index) in arr" :key="(item, index)">
            <div @click="jumpto('products3')">
              <img class="bookimg" :src="item.imgUrl" />
            </div>
          </div> -->
           <book v-for="item in arr" :key="item.id" :selfinfo="item" class="bookimg"></book>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="botoom">
      <div class="bo1">
        <div><img src="@/assets/Icon material-home.png" /></div>
        <div>
          <img class="search" src="@/assets/Path 1.png" />
          <img class="ser" src="@/assets/Path 2.png" />
        </div>
        <div><img src="@/assets/Icon feather-heart.png" /></div>
        <div><img src="@/assets/Icon material-account-box.png" /></div>
      </div>
      <div class="bo2"></div>
    </div>
  </div>
</template>

<script>
import book from './book'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "",
      arr: [],
    };
  },
  methods: {
    jumpto(str) {
      this.$router.push({ name: str });
    },
  },
  beforeMount() {
    this.$axios({
      method: "get",
      url: "/api/books",
    }).then((res) => {
      console.log(res);
      this.arr = res.data.info;
      console.log(this.arr);
    });
  },
  components:{
    book:book
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f5f6f8;
}
.box {
  width: 100vw;
  position: relative;
}
.top {
  width: 100vw;
  height: 13.8667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 2px 3.5px rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
}
.left-jt {
  width: 2.9333vw;
  height: 5.3333vw;
  background-color: #000000;
  margin-left: 6.4vw;
}
.dis {
  display: flex;
  width: 100vw;
  justify-content: space-between;
}
.kong {
  width: 100vw;
  height: 22.1333vw;
  filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
  background-color: #f9f9f9;
}
.world {
  font-size: 4.2667vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
}
.shop {
  margin-right: 6.1333vw;
}
.shopcart {
  position: relative;
}
.cir2 {
  position: absolute;
  top: 4.2667vw;
  right: 9.8667vw;
}
.cir1 {
  position: absolute;
  top: 4.2667vw;
  right: 7.2667vw;
}
.world2 {
  font-size: 3.7333vw;
  color: #000000;
  font-weight: bold;
  font-family: "Open Sans";
  margin-left: 6.6667vw;
  margin-top: 7.2vw;
  position: absolute;
}
.books {
  width: 100vw;
  height: 158.4vw;
  background-color: #ffffff;
}
.book-top {
  background-color: #f5f6f8;
  height: 4.8vw;
}
.filter {
  width: 93px;
  height: 24px;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #b1b1b1;
  position: absolute;
  right: 6.4vw;
  margin-top: 5.3333vw;
  display: flex;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
}

.iconfilter {
  width: 3.2vw;
  height: 2.9333vw;
  /* border-radius: 6px; */
  background-color: #000000;
  /* border: 1px solid #000000; */
}
.iconback {
  width: 10px;
  height: 6px;
  background-color: #000000;
}
.allbook {
  padding-top: 10.1333vw;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.bookimg {
  width: 26.6667vw;
  height: 37.6vw;
  margin-left: 14.9333vw;
  margin-top: 10.1333vw;
  /* margin-right: 17.6vw; */
  filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(0, 0, 0, 0.16));
}
.botoom {
  width: 100vw;
  height: 22.1333vw;
  /*filter: drop-shadow(0vw --0.2667vw 0vw rgba(0, 0, 0, 0.3));*/
  background-color: #f9f9f9;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
}
.bo1 {
  display: flex;
  justify-content: space-between;
  padding-left: 10.6667vw;
  padding-right: 10.6667vw;
  height: 13.0667vw;
  align-items: center;
}

.ser {
  position: absolute;
  /* top: 144px; */
  bottom: 13.5333vw;
  left: 39.6vw;
}
.bo2 {
  width: 100vw;
  height: 9.0667vw;
  background-color: #000000;
}
</style>
