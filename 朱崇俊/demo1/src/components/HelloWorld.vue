<template>
  <div class="big-box">
    <div class="headd"></div>
    <div class="head">
      <img class="img1" src="../../img/Icon ionic-ios-arrow-back.png" alt="" />
      <span> Car</span>
      <img class="img2" src="../../img/Path 3.png" alt="" />
    </div>
    <div class="body">
      <div class="head-left">Books you Liked</div>
      <div class="head-right">
        <img class="img1" src="../../img/Icon feather-filter.png" alt="" />
        Filter <img class="img2" src="../../img/down.png" alt="" />
      </div>
      <ul>
        <li :key="index" v-for="(item, index) in info" @click="handle('xq',item)">
          <img :src="item.imgUrl"  alt="" />
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footer-up">
        <div><img src="../../img/index.png" alt="" /></div>
        <div><img src="../../img/serch.png" alt="" /></div>
        <div><img src="../../img/xin.png" alt="" /></div>
        <div><img src="../../img/my.png" alt="" /></div>
      </div>
      <div class="footer-down"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      info: [],
    };
  },
  beforeMount() {
    this.$axios({
      method: "get",
      url: "/api/books",
    }).then((res) => {
      console.log(res);
      this.info = res.data.info;
      
    });
  },
  methods: {
    handle: function (item,str) {
      this.$store.state.mmy = str;
      this.$router.push({
        name:item
      });
    },
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.headd {
  height: 11.7333vw;
  background-color: #ffffff;
}

.head {
  width: 100vw;
  height: 12.5333vw;
  background-color: #ffffff;
  span {
    float: left;
    margin-top: 3.4667vw;
    margin-left: 35.7333vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.head {
  .img1 {
    padding-left: 6.4vw;
    margin-top: 2.9333vw;
    float: left;
  }
}
.head {
  .img2 {
    padding-right: 6.4vw;
    margin-top: 2.9333vw;
    float: right;
  }
}
.big-box {
  height: 216.5333vw;
}

.body {
  height: 158.4vw;
  margin-top: 2.1333vw;
  background-color: #ffffff;
}
.body {
  .head-left {
    display: inline-block;
    margin-top: 5.0667vw;
    margin-left: 6.4vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
.body {
  .head-right {
    float: right;
    margin-right: 6.1333vw;
    width: 24.8vw;
    height: 6.4vw;
    line-height: 6.4vw;
    margin-top: 2.6667vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 1px solid #b1b1b1;
    font-size: 3.7333vw;
    font-weight: bold;
    font-family: "Open Sans";
    color: #a3a3a3;
  }
}
.body {
  .head-right {
    .img1 {
      margin-left: 1.6vw;
    }
  }
}
.body {
  .head-right {
    .img2 {
      margin-left: 3.2vw;
    }
  }
}

ul {
  margin-left:12vw;
  display: flex;
  flex-wrap: wrap;
}
li {

  margin-right: 17.0667vw;
  margin-top: 7.2vw;
  list-style: none;
}
li {
  img {
  
    width: 26.6667vw;
    height: 37.6vw;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 18.6667vw;
  border-top: 1px solid #ccc;
  margin-top: 12.2667vw;
  background-color: #000;
}
.footer-up {
  display: flex;

  height: 12.8vw;
  background-color: #f4f5f7;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
