<template>
  <div class="hello">
    <div class="top1">
      <div @click="img1" class="img1"><img src="@/assets/1.png" alt="" /></div>
      <div class="cart">Payment</div>
      <div class="img2"><img src="@/assets/gwc.png" alt="" /></div>
    </div>
    <div class="gang"></div>
    <div class="box">
      <div
        class="box1"
        v-for="(item, index) in list"
        :key="item.price"
        :index="index"
      >
        <div class="img1"><img :src="item.imgUrl" alt="" /></div>
        <div class="wenzi">
          <div class="zi">{{ item.des }}</div>
          <div class="author">{{ item.author }}</div>
          <div class="anniu">
            <div class="span">
              <span @click="sub(index)">-</span>{{ item.val}}<span @click="add(index)">+</span>
            </div>
            <div class="price">${{item.price*item.val}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="gang"></div>
    <div class="zongjia">
      <div class="ing">Billing information</div>
      <div class="buy">
        <div class="new">Buy new</div>
        <div class="zong">${{ zong }}</div>
      </div>
    </div>

    <div class="buy1">
      <div class="new1">Shipping</div>
      <div class="zong">+${{ zong3 }}</div>
    </div>

    <div class="buy3">Only 6 left in stock(more on the way)</div>
    <div @click="button" class="last">Buy Now</div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      sum:0,
      zong: 0,
      zong3:3,
      zong1:0,
      zong2:0,
      list: this.$store.state.count,
      val: 1,
    };
  },
  methods: {
    add(e) {
      this.list[e].val++;
      if(e==0){
        this.zong1=this.list[e].val*this.list[e].price
      }else if(e==1){
         this.zong2=this.list[e].val*this.list[e].price
      }
      this.zong=this.zong1+this.zong2

    console.log(this.zong[e])
    this.$router.push({jqu:e})

    },
    sub(e) {
      this.list[e].val--;
      if(e==e){
      this.zong[e]=this.list[e].val*this.list[e].price
      console.log('this.zong',this.zong)
   }
    console.log('this.zong1',this.zong)
  //  this.zong.forEach((i,v)=>{
  //    this.sum=i
  //  })
    },
    img1() {
      this.$router.push({ name: "HelloWorld" });
    },
    list() {
      return this.$store.state.count;
    },
    button() {
      // Dialog({ message: "提示" });
      Dialog.alert({
        message: "提示",
      });
    },
  
  },

  mounted() {
    // console.log(this.list[0].item.imgUrl);
  },
};
</script>

<style lang="less" scoped>
.hello {
  .top1 {
    margin-top: 10vw;
    margin-bottom: 3.6667vw;
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

  .zongjia {
    margin-left: 6.6667vw;
    margin-right: 6.6667vw;
    margin-top: 2.6667vw;
    border-bottom: 0.8vw solid #f6f6f6;
    padding-bottom: 2.6667vw;
    .ing {
      font-size: 4vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .buy {
      display: flex;
      justify-content: space-between;
      margin-top: 2.6667vw;
      .new {
        font-size: 3.7333vw;
        color: gray;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
  .box {
    padding: 0 6.1333vw;
    // height: 76.2667vw;
    overflow: hidden;

    .box1 {
      display: flex;
    }
    .img1 {
      border-bottom: 0.8vw solid #f6f6f6;
      width: 19.7333vw;
      height: 29.0667vw;
    }
    img {
      width: 19.7333vw;
      height: 29.0667vw;
      margin-top: 5.3333vw;
    }
    .wenzi {
      margin-left: 3.5vw;
      margin-top: 5.3333vw;
      .zi {
        font-size: 3.4667vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        width: 47.4667vw;
        height: 14vw;
        overflow: hidden;
      }
      .author {
        font-size: 3.2vw;
        color: gray;
        font-family: "Open Sans";
        width: 30vw;
        margin: 2.6667vw 0;
      }
      .anniu {
        display: flex;
        justify-content: space-between;
        .span {
          padding: 0.4vw 1.3333vw;
          border: 1px solid #efeded;
          border-radius: 8vw;
          background-color: #efeded;
          // display: flex;
          span {
            margin: 2vw;
          }
        }
        .price {
          border: 1px solid #efeded;
          border-radius: 8vw;
          padding: 0vw 3vw;
          background-color: #efeded;
          margin-right: -14vw;
        }
      }
    }
  }
  .buy1 {
    display: flex;
    justify-content: space-between;
    margin-top: 2.6667vw;
    margin: 3vw 6.6667vw 0 6.6667vw;
    border-bottom: 0.8vw solid #f6f6f6;
    padding-bottom: 2.6667vw;
    .new1 {
      font-size: 3.7333vw;
      color: gray;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }

  .buy3 {
    font-size: 3.7333vw;
    color: gray;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 3vw 6.6667vw;
    border-bottom: 0.8vw solid #f6f6f6;
    padding-bottom: 2.6667vw;
  }

  .last {
    width: 49.6vw;
    height: 9.8667vw;
    border-radius: 5.0667vw;
    filter: drop-shadow(0px 3px 3.5px rgba(6, 10, 255, 0.28));
    background-color: #060aff;
    text-align: center;
    line-height: 9.8vw;
    margin: 5.3333vw auto;
    font-size: 4.2667vw;
    color: #ffffff;
    font-weight: bold;
    font-family: "Open Sans";
  }
}
</style>