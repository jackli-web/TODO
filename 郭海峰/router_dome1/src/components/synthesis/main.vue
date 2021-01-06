<template>
  <div class="main">
    <div class="mains">
      <div class="mains-padding"></div>
      <div class="mains-top">
        <div class="mains-top-title">{{ books.bookName }}</div>
        <div class="mains-top-parice">${{ books.price | getprice() }}</div>
      </div>
      <div class="mains-main">
        <div class="mains-main-swripe">
          <el-carousel height="60.5333vw" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in images" :key="index">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="love">
          <img src="../../assets/images/love.png" alt="" />
        </div>
        <div class="mains-main-content"></div>
        <div class="item-a">
          Formats and editions
        </div>
        <div class="item-b">
          <van-swipe
            class="my-swipe"
            :width="140"
            :loop="false"
            :show-indicators="false"
          >
            <van-swipe-item
              v-for="(item, index) in books.otherPrice"
              :key="index"
              ><div
                :class="['swipe-item-a', index == suoyin && flag ? 'ts1' : '']"
                @click="xuanzebianhua(index)"
              >
                <span>{{ item.platform }}</span
                ><span>${{ item.price | getprice() }}</span>
              </div></van-swipe-item
            >
          </van-swipe>
        </div>
        <div class="item-a">
          Quantity
        </div>
        <div class="item-b">
          <div class="swipe-item-a">
            <div @click="subshuliang">-</div>
            <div>{{ shuliang }}</div>
            <div @click="addshuliang">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-dev">
      <div class="dev-a">{{ books.des }}</div>
      <div class="dev-b">{{ books.des }}</div>
    </div>
    <div class="btn">
      <div class="btn-a" @click="addbooks">Add to cart</div>
      <div class="btn-b" @click="gomychat">Buy Now</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookName: "",
      books: {},
      images: [],
      flag: false,
      suoyin: 0,
      shuliang: 1
    };
  },
  methods: {
    xuanzebianhua(index) {
      this.suoyin = index;
      this.flag = true;
    },
    addshuliang() {
      this.shuliang++;
    },
    addbooks() {
      var obj = {
        id: this.books.id,
        shuliang: this.shuliang,
        price: this.books.price,
        author:this.books.author,
        imgUrl:this.books.imgUrl,
        bookName:this.books.bookName
      };
      this.$store.commit("addOrder", obj);
      this.$notify({
        type: "success",
        message: "添加购物车成功！快去看看吧！",
        duration: 2000
      });
    },
    subshuliang() {
      if (this.shuliang > 1) {
        this.shuliang--;
      }
    },
    gomychat() {
      this.$router.push({ name: "shopchat" });
    }
  },
  created() {
    this.books = this.$store.state.boosks;
    for (var i = 0; i < 3; i++) {
      this.images.push(this.books.imgUrl);
    }
  },
  computed: {
    changeX() {
      return this.position.x;
    }
  },
  filters: {
    getprice(val) {
      var x = val + "";
      if (x.length < 4) {
        if (x.includes(".")) {
          return x + "00";
        }
        return x + ".00";
      } else {
        return x;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  background-color: #f6f7f9;
}
.mains {
  width: 100vw;
  background-color: white;
  margin-top: 12.8666vw;
  .mains-padding {
    width: 100vw;
    height: 5.3333vw;
    background-color: #f6f7f9;
  }
  .mains-top {
    height: 16.3333vw;
    font-size: 3.4667vw;
    color: #000000;
    font-family: "Open Sans";
    position: relative;
    .mains-top-title {
      position: absolute;
      top: 3.7333vw;
      left: 6.4vw;
    }
    .mains-top-parice {
      position: absolute;
      top: 10.4vw;
      left: 6.4vw;
      font-size: 4.8vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .mains-main {
    width: 100%;
    height: 134.2vw;
    position: relative;
    .mains-main-swripe {
      width: 37.6vw;
      height: 60.5333vw;
      margin: 5.3333vw auto;
      img {
        width: 37.6vw;
        height: 60.5333vw;
      }
    }
    .love {
      position: absolute;
      top: 56vw;
      left: 84.8vw;
      width: 8.8vw;
      height: 8.8vw;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 8.8vw;
        height: 8.8vw;
      }
    }
    .mains-main-content {
      width: 92.5333vw;
      border: 1px solid #e3e3e3;
      margin: 0 auto;
      margin-top: 16vw;
    }
    .item-a {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin: 4vw 0 0 4.0667vw;
    }
    .item-b {
      width: 100vw;
      height: 8.8vw;
      overflow: hidden;
      margin: 5.3333vw 0vw;
      .van-swipe-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .ts1 {
        border: 1px solid #060aff !important;
      }
      .swipe-item-a {
        width: 32vw;
        border: 1px solid #c4c4c4;
        height: 8.8vw;
        border-radius: 4.4vw;
        margin-left: 5.3333vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 8.8vw;
        span {
          font-size: 3.7333vw;
          color: #000000;
          font-family: "Open Sans";
        }
      }
    }
  }
}
.item-dev {
  width: 100vw;
  height: auto;
  background-color: white;
  margin: 5.0667vw 0;
  .dev-a {
    width: 81.0667vw;
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 0 auto;
    padding-top: 5.3333vw;
    text-indent: 2em;
  }
  .dev-b {
    width: 81.0667vw;
    font-size: 3.4667vw;
    font-size: 2.6667vw;
    color: #000000;
    font-family: "Open Sans";
    margin: 15.4667vw auto;
    text-indent: 2em;
  }
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 13.0667vw;
  border-top: 1px solid #cacaca;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .btn-a {
    width: 28vw;
    height: 8.8vw;
    border-radius: 4.4vw;
    background-color: #efeded;
    font-size: 3.7333vw;
    color: #818181;
    font-weight: bold;
    font-family: "Open Sans";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-b {
    width: 49.6vw;
    height: 8.8vw;
    border-radius: 4.4vw;
    filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
