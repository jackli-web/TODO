<template>
  <div class="bigbox">
    <top>Cart</top>
    <div class="content">
      <div class="part1">
        <div class="word">Books you Likes</div>
        <div class="container">
          <div><img src="@/assets/loud.png" class="cpic1" /></div>
          <div class="cword">Filter</div>
          <div><img src="@/assets/down.png" class="cpic2" /></div>
        </div>
      </div>
      <div class="part2">
        <div v-for="(item, index) in booksimg" :key="index" class="book" @click="detail(item)">
          <img :src="item.imgUrl" class="bookicon" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div><img src="@/assets/home.png" /></div>
      <div><img src="@/assets/search.png" /></div>
      <div><img src="@/assets/like.png" /></div>
      <div><img src="@/assets/people.png" /></div>
    </div>
  </div>
</template>

<script>
import top from './top.vue';
export default {
  components: { top },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      payarr: [],
    };
  },
  methods: {
    detail(str) {
      this.$router.push({name:"products",query:str})
    },
    fanh() {
      this.$router.go(-1);
    },
  },
  beforeMount: function () {
    this.$axios({
      url: "/api/books",
      methos: "get",
    }).then((res) => {
      console.log("res", res);
      this.$store.commit("info", res.data.info);
    });
  },
  computed: {
    booksimg() {
      return this.$store.state.storeinfo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.bigbox {
  .content {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    padding-bottom: 8.0863vw;
    .part1 {
      padding-left: 6.7385vw;
      padding-right: 6.469vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
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
        .cword {
          font-size: 3.7333vw;
          color: #000000;
          font-weight: bold;
          font-family: "Open Sans";
          margin: 0 2vw;
        }
        .cpic1 {
          width: 3.2vw;
          height: 2.9333vw;
          border-radius: 1.6vw;
          background-color: #000000;
          vertical-align: middle;
        }
        .cpic2 {
          width: 2.6667vw;
          height: 1.6vw;
          background-color: #000000;
          vertical-align: middle;
        }
      }
    }
    .part2 {
      // border:1px solid red;
      padding-left: 15.0943vw;
      padding-right: 15.0943vw;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .book {
        border: 1px solid black;
        width: 26.9542vw;
        height: 38.0054vw;
        margin-bottom: 10.2426vw;
        .bookicon {
          width: 26.6667vw;
          height: 38.0054vw;
        }
      }
    }
  }
  .footer {
    background: #f9f9f9;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10.7817vw;
    padding-right: 10.7817vw;
    box-sizing: border-box;
    width: 100vw;
    height: 13.2075vw;
    border: 1px solid black;
    img {
      width: 5.3333vw;
      height: 5.3333vw;
    }
    // width:100vw;
  }
}
</style>
