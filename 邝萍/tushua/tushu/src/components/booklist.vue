<template>
  <div class="booklistbox">
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
        />
        <div class="booktoptext">Cart</div>
        <img class="booktopright" src="../assets/tushuimg/Path 5.png" alt="" />
      </div>
    </div>

    <div class="blcenter">
      <div class="blcenterbox">
        <div class="bookcentertop">
          <div class="bookctleft">Books you Liked</div>
          <div class="bookctright">
            <img
              class="bookctrimg"
              src="../assets/tushuimg/Icon feather-filter.png"
              alt=""
            />
            <div class="bookctrtext">filter</div>
            <img
              class="bookctrimg"
              src="../assets/tushuimg/Icon ionic-ios-arrow-down.png"
              alt=""
            />
          </div>
        </div>
        <div class="bookcc">
          <div class="bookimg">
            <img
              v-for="(item, index) in booklist"
              :key="index"
              class="bimg"
              :src="item.imgUrl"
              alt=""
              @click="gotod('bookdetail',item)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="tarbar">
      <div class="bai">
        <i class="iconfont item">&#xe6ce;</i>
        <i class="iconfont item">&#xe621;</i>
        <i class="iconfont item">&#xe65c;</i>
        <i class="iconfont item">&#xe600;</i>
      </div>
      <div class="hei"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      // booklist: this.$store.state.info,
    };
  },
  watch: {},
  computed: {
    booklist(){
      return this.$store.state.info
    }
  },
  methods: {
    gotod(name,e){
      this.$router.push({
        name:name
      });
      this.$store.commit('adddetail',e)

    }
  },
  beforeCreate() {},
  created() {
    this.$axios({
      method: "get",
      url: "/api/books",
    }).then((res) => {
      // console.log(res)
      this.$store.state.info = res.data.info;
      console.log('data',this.$store.state.info)
    });
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
@import "./css/booklist.less";
</style>
<style scoped>

</style>