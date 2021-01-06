<template>
  <div class="son">
    <van-nav-bar
      
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    <template #title>
        <span>Payment</span>
      </template>
      <template #right>
        <van-icon name="cart-o" color="#1989fa" size="18" />
      </template>
    </van-nav-bar>
    <van-card
      v-for="(item, index) in storeorders"
      :key="index"
      :num="item.count + '个'"
      :price="item.query.price"
      :desc="item.query.des"
      :thumb="item.query.imgUrl"
    >
      <template #title>
        <span>{{ item.query.bookName }}</span>
      </template>
      <template #tags>
        <span plain type="danger" class="dang">作者：</span>
        <span plain type="danger" class="dang">{{ item.query.author }}</span>
      </template>
      <template #footer>
        <span>总价：￥{{ item.sum }}</span>
      </template>
    </van-card>
    
    <!-- <div class="summ">${{ storeorders.sum }}</div>
    <div class="summ">${{ storeorders.count }}</div> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon_a" />

      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon_c" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { Card, Toast } from "vant";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    storeorders: function () {
      return this.$store.state.orders;
    },
  },
  methods: {
    onClickIcon_a() {
      Toast("没有客服");
    },
    onClickIcon_c() {
      this.$router.push({ path: "/" });
    },
    onClickButton() {
      Toast("购买成功");
    },

    onClickLeft() {
      this.$router.go(-1);
      return;
    },
    onClickRight() {
      alert("已经是购物页了");
      return;
    },
  },
};
</script>

<style lang='less' scoped>
.son {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 16.6667vw;
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

  .van-card {
    .van-card__header {
      .van-card__thumb {
        .van-image {
          img {
            width: vw;
          }
        }
      }
      .van-card__content {
        text-align: left;
        font-size: 4.3127vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        position: relative;
        top: -1.0782vw;
        div {
          span {
            font-size: 2.3127vw;
          }
          .van-card__desc {
            font-size: 2.3127vw;
          }
        }
        .van-card__bottom {
          .van-card__price-integer {
            font-size: 4.3127vw;
            color: #000000;
            font-weight: bold;
          }
          .van-card__num {
            font-size: 2.3127vw;
          }
        }
      }
    }
  }
  .dody {
    display: flex;
    .img {
      img {
        width: 40vw;
      }
    }
    .text {
      .title_name {
      }
      .title_aut {
      }
      .title_des {
        font-size: 0.3333rem;
        color: #a2a3a3;

        overflow: hidden;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .title_tm {
        display: flex;
        justify-content: space-between;

        .anj {
          width: 30vw;
          display: flex;
        }
        .pri {
        }
      }
    }
  }
}
</style>