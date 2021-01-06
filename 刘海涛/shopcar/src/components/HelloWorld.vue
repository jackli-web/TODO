<template>
  <div class="hello">
    <top-bar><div class="good_c">Cart</div></top-bar>
    <div class="cont">
      <div>
        <div class="goods_b">Books you Liked</div>
        <div class="box_ss">
          <span class="imgs_f"
            ><img src="../assets/Icon feather-filter.png" alt=""
          /></span>
          <span class="goods_f">Filter</span>
          <span class="imgs_fone"
            ><img src="../assets/Icon ionic-ios-arrow-back (1).png" alt=""
          /></span>
        </div>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in info" :key="item.id">
            <img @click="jumpTo(index)" :src="item.imgUrl" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="imgss">
        <div><img src="../assets/Icon material-home.png" alt="" /></div>
        <div><img src="../assets/Path 1.png" alt="" /></div>
        <div><img src="../assets/Icon feather-heart.png" alt="" /></div>
        <div><img src="../assets/Icon material-account-box.png" alt="" /></div>
      </div>
      <div class="hei"></div>
    </div>
  </div>
</template>


<script>
import topBar from "./top_bar.vue";
export default {
  components: { topBar },
  name: "HelloWorld",
  data() {
    return {
      info: [],
    };
  },
  beforeMount() {
    this.$axios({
      method: "get",
      url: "/api/books",
    }).then((res) => {
      console.log(res.data.info);
      this.info = res.data.info;
    });
  },
  methods: {
    jumpTo(index) {
      this.$store.state.item = this.info[index];
      this.$router.push({
        name: "products",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.cont {
  width: 100vw;
  filter: drop-shadow(0vw 0.5333vw 0.9333vw rgba(0, 0, 0, 0.03));
  background-color: #ffffff;
  .goods_b {
    padding: 4.5333vw 0 0 5.8667vw;
    font-size: 3.7333vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .box_ss {
    position: absolute;
    top: 2.6667vw;
    right: 6.4vw;
    width: 24.8vw;
    height: 6.4vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 0.2667vw solid #b1b1b1;
    .imgs_f {
      position: absolute;
      top: 0.8vw;
      left: 1.6vw;
    }
    .goods_f {
      position: absolute;
      top: 0.8vw;
      left: 8vw;
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
    }
    .imgs_fone {
      position: absolute;
      right: 1.6vw;
      top: -0.2667vw;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 7.2vw;
    li {
      margin: 0 2.1333vw 10.1333vw 14.6667vw;
      width: 26.6667vw;
      height: 37.6vw;
      background-color: purple;
      filter: drop-shadow(0vw 0.8vw 0.9333vw rgba(0, 0, 0, 0.16));
      img {
        width: 100%;
      }
    }
  }
}
.footer {
  .imgss {
    border-top: 0.2667vw solid #ccc;
    position: fixed;
    width: 100vw;
    height: 13.0667vw;
    display: flex;
    bottom: 9.0667vw;
    background-color: #fff;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      img {
        width: 5.8667vw;
        height: 5.0667vw;
      }
    }
  }
  .hei {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 9.0667vw;
    background-color: #000000;
  }
}
</style>
