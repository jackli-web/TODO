<template>
  <div class="unit">
    <top>Products</top>
    <div class="title">
      <div class="tw1">Science & Technology</div>
      <div class="tbox"><div class="tw2">New York Times Bestseller</div></div>
    </div>
    <div class="prs">$ {{ info.price }}</div>
    <div class="swp">
      <van-swipe class="vswp" indicator-color="gray">
        <van-swipe-item v-for="item in 3" :key="item">
          <img v-lazy="info.imgUrl" class="swpimg" />
        </van-swipe-item>
      </van-swipe>
      <div class="swplove"><img src="@/assets/love.png" class="love" /></div>
    </div>
    <div class="other">
      <div class="oword">Formats and editions</div>
      <div class="op">
        <div
          v-for="(item, index) in info.otherPrice"
          :key="index"
          class="oprice"
        >
          <div class="spc">
            <div class="opword1">{{ item.platform }}</div>
            <div class="opword2">${{ item.price }}</div>
          </div>
        </div>
      </div>
      <div class="onword">Quantity</div>
      <div class="onumber">
        <div @click="add" class="fuh">+</div>
        <div class="changenum">{{ number }}</div>
        <div @click="sub" class="fuh">-</div>
      </div>
    </div>
    <div class="bookdes">
      <div class="desword">{{ info.des }}</div>
    </div>
    <div class="btn">
      <div class="bword1" @click="jumpcar">Add to cart</div>
      <div class="bword2" @click="jump">Buy Now</div>
    </div>
  </div>
</template>

<script>
import top from "./top";
import Vue from "vue";
import { Lazyload } from "vant";
import Son from "./son.vue";
import Top from "./top.vue";

Vue.use(Lazyload);
export default {
  data: function () {
    return {
      info: this.$route.query,
      number: 1,
    };
  },
  methods: {
    add() {
      this.number++;
    },
    sub() {
      if (this.number <= 0) {
        alert("数量已经最低了，不能再减了");
        this.number = 0;
      } else {
        this.number--;
      }
    },
    jumpcar() {
      // this.$router.push({ name: "payment", query: str });
      var obj={...this.info}
      this.$store.commit("bookarr", obj);
      alert('已加入购物车')
    },
    jump(){
      this.$router.push({name:"payment"})
    }
  },
  computed: {
    swpinfo() {
      return this.$store.state.storeinfo;
    },
  },
  watch: {
    number: function (newvalue) {
      this.$store.commit("pronumber", newvalue);
    },
  },
  components: {
    top: top,
  },
};
</script>

<style lang="less">
  .vswp .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    
  }
  .van-swipe-item{
      height:68.2667vw;
  }
  .van-swipe__indicators{
bottom:0;
  }
   .van-swipe__indicator{
      
      display:inline-block;
      width:8.8vw;
      border-radius: 0;
      height: 2px;
      background-color:rgb(163, 162, 162);
      &.van-swipe__indicator--active{
          background-color:black;
      }

  }
</style>

<style scoped lang="less">
.unit {
  .title {
    display: flex;
    margin-top: 20vw;
    .tw1 {
      font-size: 3.4667vw;
      color: #ccc;
      font-family: "Open Sans";
      margin: 2.6667vw 4vw;
    }
    .tbox {
      width: 46.6667vw;
      height: 6.9333vw;
      border-radius: 1.0667vw;
      background-color: #000000;
      margin: 2.6667vw;
      .tw2 {
        font-size: 3.4667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
        text-align: center;
        line-height: 6.9333vw;
      }
    }
  }
  .prs {
    font-size: 4.8vw;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 0 6.4vw;
  }
  .swp {
    width: 100vw;
    position: relative;
    padding-bottom: 5vw;
    border-bottom: 1px solid #999;
    .swpimg {
      width: 40vw;
      height: 60.5333vw;
      margin: 5vw 30.1333vw 5vw 29.8667vw;
    }
    .swplove {
      position: absolute;
      right: 8.5333vw;
      bottom: 2vw;
      width: 8.8vw;
      height: 8.8vw;
      border-radius: 17px;
      background-color: rgb(247, 243, 243);
      .love {
        position: absolute;
        top: 25%;
        right: 25%;
        width: 4.2667vw;
        height: 3.7333vw;
        align-items: center;
      }
    }
  }
  .other {
    margin-left: 5vw;
    .oword {
      font-size: 3.7333vw;
      font-weight: bold;
      font-family: "Open Sans";
      margin-bottom: 4.5333vw;
    }
    .op {
      // display: flex;
      white-space: nowrap; //不换行
      overflow: scroll; //超出滑动
      .oprice {
        display: inline-block;
        // width: 32vw;
        height: 8.8vw;
        border-radius: 4.5333vw;
        background-color: #ffffff;
        border: 1.5px solid #c4c4c4;
        // display: flex;
        margin-right: 3vw;
        .spc {
          display: flex;
          justify-content: space-between;
          align-content: center;
          height: 8.8vw;
        }
        // justify-content: space-between;
        .opword1 {
          font-size: 2.099vh;
          color: #000000;
          font-family: "Open Sans";
          align-items: center;
          margin: auto 2vw;
        }
        .opword2 {
          font-size: 14px;
          color: #000000;
          font-family: "Open Sans";
          align-items: center;
          margin: auto 2vw;
        }
      }
    }
    .onword {
      font-size: 14px;
      font-weight: bold;
      font-family: "Open Sans";
      margin-bottom: 4.5333vw;
    }
    .onumber {
      width: 117px;
      height: 33px;
      border-radius: 17px;
      background-color: #ffffff;
      border: 1.5px solid #c4c4c4;
      display: flex;
      padding: 0.1vw 3vw;
      align-items: center;
      margin-bottom: 2vw;
      .fuh {
        align-content: center;
        width: 3.2vw;
        margin-left: 2vw;
      }
      .changenum {
        font-size: 14px;
        font-weight: bold;
        font-family: "Open Sans";
        margin: 1.3333vw auto;
        width: 5.3333vw;
        padding-left: 3vw;
      }
    }
  }
  .bookdes {
    border-top: 2vw solid #ccc;
    margin-bottom: 15vw;
    margin-top: 3vw;
    .desword {
      margin-left: 3vw;
      margin-right: 3vw;
      font-size: 13px;
      font-weight: bold;
      word-wrap: break-word;
    }
  }
  .btn {
    align-items: center;
    height: 13.3333vw;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: #ffffff;
    width: 100vw;
    .bword1 {
      line-height: 37px;
      text-align: center;
      margin-left: 8.8vw;
      margin-right: 8.8vw;
      font-size: 14px;
      color: #818181;
      font-weight: bold;
      width: 105px;
      height: 37px;
      border-radius: 19px;
      background-color: #efeded;
    }
    .bword2 {
      line-height: 37px;
      text-align: center;
      margin-right: 8.8vw;
      font-size: 16px;
      color: #ffffff;
      font-weight: bold;
      width: 186px;
      height: 37px;
      border-radius: 19px;
      filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
      background-color: #060aff;
    }
  }
}
</style>