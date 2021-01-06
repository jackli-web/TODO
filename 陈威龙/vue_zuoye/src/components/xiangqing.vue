<template>
  <div class="xq">
    <van-nav-bar
      
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    <template #title>
        <span>Products</span>
      </template>

      <template #right>
        <van-icon name="cart-o" color="#1989fa" size="18" />
      </template>
    </van-nav-bar>

    <div class="content">
      <div class="bookname">{{ selfinfo.bookName }}</div>
      <div class="price">${{ selfinfo.price }}</div>
    </div>
    <div class="img">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
        /></van-swipe-item>
        <van-swipe-item
          ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
        /></van-swipe-item>
        <van-swipe-item
          ><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="otherinfo">
      <div class="smallbox">
        <div class="word">Formats and editions</div>
        <div class="business">
          <div
            class="anot"
            v-for="(item, index) in selfinfo.otherPrice"
            :key="index"
          >
            <div class="item">
              <div class="gt left">{{ item.platform }}</div>
              <div class="gt">{{ item.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="smallbox">
        <div>
          <button @click="des">-</button>
          <span>{{ count }}</span>
          <button @click="add">+</button>
        </div>
      </div>
      <!-- <div>
        <div>
          <button @click="addtoca">加入购物车</button>
          <button @click="jumpt">立即购买（跳转购物车）</button>
        </div>
      </div> -->
    </div>
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon_a"/>
  <van-goods-action-icon icon="shop-o" text="店铺" to='/' />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addtoca" />
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买" to='/son' />
</van-goods-action>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload,Toast } from "vant";
export default {
  data() {
    return {
      selfinfo: this.$route.query,
      count:1,
      sum:this.$route.query.price
    };
  },
  
  methods: {
    onClickIcon_a() {
      Toast('没有客服');
    },
    
    onClickButton() {
      Toast('点击按钮');
    },

    onClickLeft() {
      this.$router.go(-1);
      return;
    },
    onClickRight() {
      this.$router.push({ path: "/son" });
      return;
    },

    add() {
      this.count++;
      console.log(this.count);
      this.sum=this.count*this.selfinfo.price;
      console.log(this.sum);

      // this.sum = this.counta * this.info.price;
      // console.log(this.sum);
      // this.$emit("sumb", this.info.price);
    },
    des() {
      if (this.count > 0) {
        this.count--;
        // this.sum = this.sum - this.info.price;
        // this.$emit("sumb", -this.info.price);
        this.sum=this.sum-this.selfinfo.price;
      console.log(this.sum);
      } else {
        alert("数量不能小0");
        return;
      }
    },
    addtoca() {
      var obj = { query:this.selfinfo, count: this.count,sum:this.sum };
      this.$store.commit("addtocart", obj);
      // this.$router.push({name:'son',query:this.selfinfo,count: this.count})
      // console.log(111)
      console.log(obj)
      
    },
    jumpt() {
      this.$router.push({name:'son',query:this.selfinfo,count: this.count})
      console.log(222)
      console.log(this.selfinfo)
      console.log(333)
      console.log(this.count)
      // this.$router.push({ name: "son" });
    },
  },
  computed: {
    storeorders: function () {
      return this.$store.state.orders;
    },
  },
};
</script>

<style  lang='less' scoped>
.xq {
  .van-nav-bar {
    .van-nav-bar__content {
      margin: 10vw 0;
      .van-nav-bar__title {
        span {
          font-size: 4.3127vw;
          color: #000000;
          font-weight: bold;
          font-family: "Open Sans";
          position: relative;
          top: 0vw;
        }
      }
    }
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-swipe {
      width: 60vw;
      .van-swipe-item {
        img {
          width: 60vw;
        }
      }
    }
  }

  .otherinfo {
    padding-top: 4vw;
    .smallbox {
      padding-bottom: 5.0667vw;
    }
    .word {
      font-size: 14px;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-bottom: 4.5333vw;
    }
    .business {
      //   display:flex;
      white-space: nowrap;
      // overflow: hidden;
      overflow-x: scroll;
      .anot {
        display: inline-block;
        margin-right: 2.1333vw;
      }
      .item {
        border: 1.5px solid #c4c4c4;
        border-radius: 4.5333vw;
        padding: 2.4vw 2.6667vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .gt {
          &.left {
            margin-right: 5.3333vw;
          }
        }
      }
    }
  }
}
</style>