<template>
  <div>
    <div class="bookpage">
      <div class="box1">
        <div class="bookname">{{ info.bookName }}</div>
        <div class="author">{{ info.author }}</div>
      </div>
      <div class="price">${{ info.price }}</div>
      <div class="swipe">
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
          indicator
          @change="tochange"
        >
          <van-swipe-item v-for="(image, index) in 3" :key="index"
            ><img :src="info.imgUrl"
          /></van-swipe-item>
          <div class="custom-indicators" slot="indicator">
            <div
              :class="index === num ? 'aa' : 'custom-indicator'"
              v-for="(item, index) in 3"
              :key="index"
            ></div>
          </div>
        </van-swipe>
      </div>
      <div class="like"><img src="@/assets/like.png" alt="" /></div>
      <div class="xian"></div>
      <div class="box2">otherPrice</div>
      <div>
        <van-swipe class="box3" :loop="false" :width="250" :show-indicators=false>
          <van-swipe-item v-for="(item, index) in info1" :key="index"
            ><other :infoi="item"
          /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="quantity">Quantity</div>
      <div class="box4">
        <div :class="count>1?'jian':'jian1'" @click="jian" ></div>
        <div class="count">{{count}}</div>
        <div class="add" @click="add">+</div>
      </div>
    </div>
    <div class="book_">
    <div class="book_name">{{ info.bookName }}</div>
    <div class="xian"></div>
    <div class="book_des">{{info.des}}</div>
    </div>

  </div>
</template>

<script>
import other from "./other.vue";

export default {
  name: "products",
  data() {
    return {
      info: this.$route.query,
      num: 0,
      info1: [],
      count:1
    };
  },
  methods: {
    tochange(index) {
      this.num = index;
    },
    add(){
      this.count++
    },
    jian(){
      if(this.count>1){
      this.count--
      }
    }
  },
  watch:{
    count(newv,oldv){
      this.$route.query.count = newv
    }
  },
  beforeMount() {
    this.$route.query['count'] = this.count
    //这里有问题
    //这里有问题
    //这里有问题
    
    this.info.otherPrice.forEach(element => {
      this.info1.push(element)
    });
  },
    updated() {
        console.log(this);

    },
  components: {
    other,
  },
};
</script>

<style lang="less" scoped>
.bookpage {
  * {
    background-color: #ffffff;
  }
  position: relative;
  width: 100vw;
  height: 149.8667vw;
  background-color: #ffffff;
  .box1 {
    padding: 2.6667vw 7.7333vw 0.5333vw 6.4vw;
    display: flex;
    justify-content: space-between;
    .bookname {
      font-size: 3.4667vw;
      color: #000000;
      font-family: "Open Sans";
      line-height: 6.9333vw;
     
    }
    .author {
      width: 46.6667vw;
      height: 6.9333vw;
      border-radius: 1.0667vw;
      background-color: #000000;
      font-size: 3.4667vw;
      color: #ffffff;
      font-weight: bold;
      font-family: "Open Sans";
      text-align: center;
      line-height: 6.9333vw;
    }
  }
  .price {
    width: 87.2vw;
    font-size: 4.8vw;
    height: 4.8vw;
    line-height: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 0 6.4vw 8.2667vw 6.4vw;
    text-align: left;
  }
  .swipe {
    width: 40vw;
    margin-left: 30.1333vw;
    .my-swipe {
      .van-swipe-item {
        // width: 50vw;
        height: 60.5333vw;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        img {
          width: 40vw;
          height: 60.5333vw;
        }
      }
      .custom-indicators {
        margin-top: 7.2vw;
        display: flex;
        justify-content: space-between;
        .custom-indicator {
          width: 8.8vw;
          height: 0;
          background-color: #aaa;
          border: 0.8vw solid #aaa;
        }
        .aa {
          width: 8.8vw;
          height: 0;
          background-color: #000000;
          border: 0.8vw solid #000000;
        }
      }
    }
  }
  .like {
    position: absolute;
    top: 83.2vw;
    right: 6.4vw;
    img {
      width: 8.8vw;
      height: 8.8vw;
    }
  }
  .xian {
    margin-left: 3.7333vw;
    margin-top: 11.4667vw;
    width: 92.5333vw;
    height: 0;
    background-color: #000000;
    border: 0.2667vw solid #e3e3e3;
  }
  .box2 {
    width: 87.2vw;
    height: 3.7333vw;
    font-size: 3.7333vw;
    line-height: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 4vw 6.4vw 4vw 6.4vw;
    text-align: left;
  }
  .box3 {
    display: flex;
  }
  .quantity {
    width: 87.2vw;
    height: 3.7333vw;
    font-size: 3.7333vw;
    line-height: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    margin: 4vw 6.4vw 4vw 6.4vw;
    text-align: left;
  }
  .box4 {
    width: 31.2vw;
    height: 8.8vw;
    border-radius: 4.5333vw;
    background-color: #ffffff;
    border: 1.5px solid #c4c4c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 6.4vw;
    .jian {
      width: 3.7333vw;
      height: 0;
      background-color: #000000;
      border: 0.5333vw solid #000000;
      margin-left: 3.2vw;
    }
    .jian1{
      width: 3.7333vw;
      height: 0;
      background-color: #ffffff;
      border: 0.5333vw solid #ffffff;
      margin-left: 3.2vw;
    }
    .count {
      font-size: 3.7333vw;
      height: 3.7333vw;
      line-height: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .add {
      font-size: 8.3333vw;
      height: 2.7333vw;
      line-height: 0;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-right: 3.2vw;
    }
  }
}
.book_{
  * {
    background-color: #ffffff;
  }
  margin-top: 2.6667vw;
  width: 100vw;
  
  background-color: #ffffff;

  .book_name{
    width: 87.2vw;
    font-size: 4.8vw;
    height: 4.8vw;
    line-height: 4.8vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    padding: 3.2vw 6.4vw 0 6.4vw;
    text-align: left;
  }
  .xian{
        margin-left: 6.4vw;
    margin-top: 5.3333vw;
    width: 87.2vw;
    height: 0;
    background-color: #000000;
    border: 0.2667vw solid #e3e3e3;
  }
  .book_des{
    padding: 4vw 7.7333vw 9.0667vw 6.4vw;
    width: 85.8667vw;
    text-align: left;
    font-size: 2.6667vw;
color: #000000;
font-family: "Open Sans";
    
  }
}
</style>