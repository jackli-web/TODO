<template>
  <div class="main">
    <div class="mains">
      <div class="mains-top">
        <div class="mains-top-left">Books you Liked</div>
        <div class="mains-top-right">
          <div class="mains-top-right-left"><van-icon name="filter-o" /></div>
          <div class="mains-top-right-content">Filter</div>
          <div class="mains-top-right-right"><van-icon name="arrow-down" /></div>
        </div>
      </div>
      <div class="mains-content">
        <div v-for="(item,index) in booklist" :key="index">
          <img :src="item.imgUrl" @click="gomain(item)">
        </div>
      </div>
    </div>
    <div class="btn">
      <div @click="()=>{this.$router.push({name:'lists'})}"><img src="../../assets/images/Iconmaterial-home.png" alt="" /></div>
      <div><img src="../../assets/images/Iconfeather-search.png" alt="" /></div>
      <div><img src="../../assets/images/Iconfeather-heart.png" alt="" /></div>
      <div>
        <img src="../../assets/images/Iconmaterial-account-box.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklist: []
    };
  },
  methods: {
    gomain(item){
      this.$store.commit('changebooks',item)
      this.$router.push({name:'main'})
    }
  },
  created() {
    this.$axios.get("/api/books").then(res => {
      this.booklist = res.data.info;
    });
  }
};
</script>
<style lang="less" scoped>

.main {
  background-color: #f6f7f9;
}
.mains {
  position: absolute;
  top: 15.6667vw;
  width: 100vw;
  background-color: white;
  margin-bottom: 13.0667vw;
  .mains-top {
    height: 13.3333vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .mains-top-left {
      width: 45.3333vw;
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .mains-top-right {
      width: 24.8vw;
      height: 6.4vw;
      border-radius: 0.8vw;
      border: 0.2667vw solid #b1b1b1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .mains-top-right-content {
        font-size: 3.7333vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        
      }
      .mains-top-right-right{
        display: flex;
        align-items: center;
      }
      .mains-top-right-left{
        display: flex;
        align-items: center;
      }
    }
  }
  .mains-content{
    width: 83.4667vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    div{
      width: 41.7333vw;
      height: 47.7333vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 26.6667vw;
        height: 37.6vw;
      }
    }
  }
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 13.0667vw;
  border-top: 1px solid #cacaca;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
}
</style>
