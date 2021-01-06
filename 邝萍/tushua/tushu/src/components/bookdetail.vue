<template>
  <div>
    <div class="topbox">
      <div class="sj">
        <span class="sjleft">9:41</span>
        <div class="sjright">
          <img src="../assets/tushuimg/Cellular Connection.png" alt="" />
          <img src="../assets/tushuimg/Wifi.png" alt="" />
        </div>
      </div>
      <div class="bltop">
        <img
          class="booktopleft"
          src="../assets/tushuimg/Icon ionic-ios-arrow-back.png"
          alt=""
          @click="gotod('booklist')"
        />
        <div class="booktoptext">Products</div>
        <img class="booktopright" src="../assets/tushuimg/Path 5.png" alt="" />
      </div>
    </div>
    <div class="detailcenter">
      <div class="dcbox">
        <div class="dctop">
          <div class="dctleft">Science & Technology</div>
          <div class="dctright">New York Times Bestseller</div>
        </div>
        <div class="price">{{ item.price | price }}</div>
        <div class="bookimg">
          <div class="bimgitem">
            <van-swipe>
               <van-swipe-item>
                 <img class="bdimg" :src="item.imgUrl" alt="" />
               </van-swipe-item>
               <van-swipe-item>
                 <img class="bdimg" :src="item.imgUrl" alt="" />
               </van-swipe-item>
               <van-swipe-item>
                 <img class="bdimg" :src="item.imgUrl" alt="" />
               </van-swipe-item>
            </van-swipe>
          </div>
          <!-- <img class="bdimg" :src="item.imgUrl" alt="" /> -->
          <div class="tar">
            <div class="heitar"></div>
            <div class="huitar"></div>
            <div class="huitar"></div>
          </div>
          <div class="like">
            <i class="iconfont aixin">&#xe65c;</i>
          </div>
        </div>
        <div class="other">
          <div class="xian"></div>
          <div class="otherbox">
            <div class="format">Formats and editions</div>

            <div class="opbox">
              <div
                class="anot"
                v-for="(item, index) in item.otherPrice"
                :key="index"
              >
                <div class="op">
                  <div class="opl">{{ item.platform }}</div>
                  <div class="opr">{{ item.price | price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="quantity">
          <div class="qtext">quantity</div>
          <div class="count">
            <div @click="add" class="jia">+</div>
            <div>{{ count }}</div>
            <div @click="dec" class="jian">-</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detaildes">
      <div class="des">
        {{ item.des }}
      </div>
    </div>
    <div class="bottombox">
      <div class="bottom">
        <div class="addc" @click="addcart">add to cart</div>
        <div class="buy" @click="gotod('order')">Buy Now</div>
      </div>
      <div class="hei"></div>
      <!-- {{show}} -->
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
// import  { Swiper, SwiperItem } from 'swiper'
export default {
  components: {
    // Swiper,
    // SwiperItem
  },
  props: {},
  data() {
    return {
      count: 1,
      // item: this.$route.query,
    };
  },
  watch: {},
  filters: {
    price(e) {
      return "￥" + e;
    },
  },
  computed: {
    item(){
      return this.$store.state.bookitem
    },
    show(){
      return this.$store.state.orders
    }
  },
  methods: {
    add() {
      this.count++;
    },
    dec() {
      if (this.count == 1) {
      } else {
        this.count--;
      }
    },
    gotod(e) {
      this.$router.push({name:e});
    },
    addcart(){

      var obj ={...this.item,count:this.count}
      this.$store.commit('add',obj)
    },
  },
  beforeCreate() {},
  created() {},
  mounted() {},
};
</script>
<style lang='less'>
@import "../components/css/bookdetail.less";
</style>

<style>
.van-swipe__indicators{
  bottom: -33px;
  border-radius: 0;
  width: 8.8vw;
  background-color: rebeccapurple;
  z-index: 10;
}
</style>