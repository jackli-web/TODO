<template>
  <div id="app">
    <!-- <div class="kong"></div> -->
    <div class="title">
      <div class="fanhui" @click="goback">
        <img src="@/assets/Icon ionic-ios-arrow-back.png" alt="" />
      </div>
      <div class="text">{{ name }}</div>
      <div class="gouwuche" @click="gouwuche">
        <img src="@/assets/Path 5.png" alt="" />
      </div>
    </div>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive> -->
    <router-view />
    <div class="tab" v-if="this.$route.name == 'cart'">
      <div class="home"><img src="@/assets/Icon material-home.png" /></div>
      <div class="serch"><img src="@/assets/Path 1.png" /></div>
      <div class="like"><img src="@/assets/Icon feather-heart.png" /></div>
      <div class="my"><img src="@/assets/Icon material-account-box.png" /></div>
    </div>
    <div class="tab" v-if="name == 'products'">
      <div class="jiagou" @click="jiagou(item)">add to cart</div>
      <div class="goumai">Buy Now</div>
    </div>
    <div class="buynow" v-if="name == 'payment'">
      <div class="goumai">Buy Now</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.commit("info");
  },
  updated() {
    this.name = this.$route.name;
    this.item = this.$route.query;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    jiagou(item) {
      this.$store.commit("arr", item);
      this.$router.push({ name: "payment" });
    },
    gouwuche() {
      this.$router.push({ name: "payment" });
    },
  },
  data() {
    return {
      name: this.$route.name,
      item: this.$route.query,
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  background-color: #f4f5f7;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15.2vw;
  margin-bottom: 22.1333vw;
}
.kong {
  width: 100vw;
  height: 11.7333vw;
  z-index: 999;
  position: fixed;
  background-color: #ffffff;
  top: 0;
}
.title {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 12.5333vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .text {
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    background-color: #ffffff;
  }
  .fanhui {
    background-color: #ffffff;
    margin-left: 6.4vw;
    img {
      width: 2.9333vw;
      height: 5.3333vw;
      background-color: #ffffff;
    }
  }
  .gouwuche {
    margin-right: 6.4vw;
    background-color: #ffffff;
    img {
      background-color: #ffffff;
      width: 5.3333vw;
      height: 4.2667vw;
    }
  }
}
.tab {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 13.0667vw;
  background-color: #f9f9f9;
  filter: drop-shadow(0px -0.2667vw 0px rgba(0, 0, 0, 0.3));
  border-top: 0.2667vw solid rgba(0, 0, 0, 0.3);
  .home {
    margin-left: 10.6667vw;
    img {
      width: 5.8667vw;
      height: 5.0667vw;
    }
  }
  .serch {
    img {
      width: 4.5333vw;
      height: 4.5333vw;
    }
  }
  .like {
    img {
      width: 4.8vw;
      height: 4.2667vw;
    }
  }
  .my {
    margin-right: 10.6667vw;
    img {
      width: 4.5333vw;
      height: 4.5333vw;
    }
  }
  .jiagou {
    width: 28vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    background-color: #efeded;
    margin-left: 8.8vw;
    margin-top: 1.6vw;
    font-size: 3.7333vw;
    color: #818181;
    font-weight: bold;
    font-family: "Open Sans";
    line-height: 9.8667vw;
  }
  .goumai {
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    margin-top: 1.6vw;
    margin-right: 8.8vw;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    line-height: 9.8667vw;
    font-family: "Open Sans";
  }
}
.buynow {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 20.5333vw;
  background-color: #f9f9f9;
  filter: drop-shadow(0vw 0.5333vw 0.9333vw rgba(0, 0, 0, 0.03));
  display: flex;
  justify-content: center;
  align-items: center;
  .goumai {
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    margin-top: 1.6vw;
    margin-right: 8.8vw;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    line-height: 9.8667vw;
    font-family: "Open Sans";
  }
}
</style>
