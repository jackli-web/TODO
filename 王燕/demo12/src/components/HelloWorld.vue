<template>
  <div class="hello">
    <div class="top">
      <div class="img1"><img src="@/assets/1.png" alt="" /></div>
      <div class="cart">Cart</div>
      <div class="img2"><img src="@/assets/gwc.png" alt="" /></div>
    </div>
    <div class="gang"></div>
    <div class="top-x">Books you Liked</div>
    <div class="botton">
      <div v-for="(item,index) in list" :index="index" :key="item.bookName" class="xia">
        <img @click="image(item)" class="img3" :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="foot">
      <img src="@/assets/2.png" alt="" />
      <img src="@/assets/3.png" alt="" />
      <img src="@/assets/4.png" alt="" />
      <img src="@/assets/5.png" alt="" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    image(e){
      this.$router.push({name:'sun1',query:e})
      console.log(e)
    }
  },
  beforeMount() {
    this.$axios({
      url: "/api/books",
      method: "get",
      data: {},
    }).then((res) => {
      this.list = res.data.info;
      console.log(res);
    });
  },
};
</script>
<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.hello {
  // background-color: gray;
  .top {
    margin-bottom: 3.6667vw;
    margin-top: 10vw;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .cart {
      font-size: 4.2667vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .img1 img {
      width: 2.9333vw;
      height: 5.3333vw;
      background-color: #000000;
      margin-left: 6.4vw;
    }
    .img2 img {
      width: 5.3333vw;
      height: 4.2667vw;
      background-color: #000000;
      margin-right: 6.1333vw;
    }
  }
  .gang {
    height: 2.6667vw;
    background-color: #f6f6f6;
 
  }
  .top-x {
    margin-top: 6.5333vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    width: 42.3333vw;
    margin-left: 6.6667vw;
  }
  .botton {
    background-color: #fff;
    // margin-top: 9.3333vw;
    display: flex;
    height: 133.3333vw;
    width: 100vw;
    flex-wrap: wrap;
    margin-left: 10vw;
    .xia {
      height: 37.6vw;
      width: 50vw;
      margin-top: 8.5333vw;
      .img3 {
        width: 26.6667vw;
        height: 37.6vw;
        padding-left: 2.6667vw;
      }
    }
  }

  .foot {
    height: 15vw;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    padding-left: 10.6667vw;
    padding-right: 10.6667vw;
    width: 100vw;

    img {
      margin-left: 8vw;
      margin-right: 5vw;
      width: 5vw;
      height: 5.0667vw;
      // margin-left: 5.3333vw;
      margin-top: 4.6667vw;
    }
  }


}
</style>
