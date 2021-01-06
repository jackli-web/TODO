<template>
  <div class="goodsconent">
    <div class="conent-l">Books you Liked</div>
    <div class="conent-r">
      <van-icon name="filter-o" class="filter-o" />
      <span>Filter</span>
      <van-icon name="arrow-down" class="arrow-down" />
    </div>
    <div class="conent-m">
      <ul>
        <li v-for="(item, index) in goodsList">
          <img :src="item.imgUrl" alt=""  @click="godetail(item)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get("api/books");
      console.log(res);
      this.goodsList = res.info;
    },
    godetail(item){
      this.$store.commit('showItem',item)
      this.$router.push('/goodsdetail')
    }
  },
};
</script>

<style lang="less" scoped>
.goodsconent {
  margin-top: 2.6667vw;
  height: 158.4vw;
  background-color: #ffffff;
   margin-bottom: 9.0667vw;
  .conent-l {
    float: left;
    margin: 4.5333vw 0 0 6.6667vw;
    width: 29.3333vw;
    height: 3.7333vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .conent-r {
    float: left;
    margin: 2.6667vw 6.4vw 0 29.0667vw;
    padding: 1.6vw 1.6vw 0 1.6vw;
    width: 24.8vw;
    height: 6.4vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 0.2667vw solid #b1b1b1;
    .filter-o,
    .arrow-down {
      font-size: 3.2vw;
      color: #000000;
    }
     span {
      display: inline-block;
      margin: 0 3.2vw;
      width: 9.0667vw;
      height: 3.2vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
   
  }
  .conent-m {
    clear: both;
    //box-sizing:border-box;
    height: 150.1333vw;
    padding: 7.2vw 14.6667vw 0 14.9333vw;
    li {           
      float: left;
      margin-right: 17.0667vw;
      width: 26.6667vw;
      height: 37.6vw;
      background-color: purple;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:nth-child(n + 3) {
        margin-top: 10.1333vw;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>