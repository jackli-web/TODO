<template>
  <div class="list">
    <top :title="title"></top>
    <div class="list_content clearfix">
      <div class="w w_dif clearfix">
        <div class="list_content_top clearfix">
          <div class="list_content_left left">Books you Liked</div>
          <div class="list_content_right right">
            <div class="iconfont icon-funnel left_dif"></div>
            Filter
            <div class="iconfont icon-xiajiantou right_dif"></div>
          </div>
        </div>
        <ul>
          <li v-for="(item, index) in Info" :key="index" @click="details(index)">
            <img :src="item.imgUrl" />
          </li>
        </ul>
      </div>
        <!-- <div class="bottom">
          <ul>
            <li v-for="(item,index) in tarbar" :key="index" @click="jumpTo(index)">
              <span :class="item"></span>
            </li>
          </ul>
        </div> -->
        <tab></tab>
    </div>
  </div>
</template>

<script>
import top from "../common/top";
import tab from '../common/tab'
export default {
  data() {
    return {
      Info: "",
      title: "Cart",
      tarbar: ['iconfont icon-zhuye', 'iconfont icon-sousuo','iconfont icon-aixin','iconfont icon-yonghu']
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
     details(index) {
      this.$router.push({
        name: 'product',
        query: {
          id: index
        }
      })
    },
    getInfo() {
      this.$http.get("http://192.168.1.104/video/list.json").then((res) => {
        this.Info = res.data.info;
      });
    }
  },
  components: {
    top,
    tab
  },
};
</script>

<style lang="less" scoped>
.list {
  width: 100vw;
  height: 216.5333vw;
}
.list_content {
  width: 100vw;
  margin-top: 2.6667vw;
  background-color: #fff;
  overflow: hidden;
  .list_content_left {
    font-size: 3.7333vw;
    font-weight: bold;
    font-family: "Open Sans";
    margin-top: 4vw;
  }
  .list_content_right {
    position: relative;
    margin-top: 2.6667vw;
    width: 24.2667vw;
    height: 5.8667vw;
    border-radius: 0.8vw;
    background-color: #ffffff;
    border: 0.2667vw solid #b1b1b1;
    text-align: center;
    color: #7f7f7f;
    font-weight: 700;
    font-size: 3.7333vw;
    font-family: "Open Sans";
    line-height: 5.8667vw;
    .left_dif {
      position: absolute;
      left: 1.6vw;
      width: 3.2vw;
      height: 3.2vw;
    }
    .right_dif {
      position: absolute;
      right: 1.6vw;
      top: 0;
      width: 3.2vw;
      height: 3.2vw;
    }
  }
  ul {
    margin-top: 7.7333vw;
    padding: 0;
  }
  ul li {
    float: left;
    list-style: none;
    width: 26.6667vw;
    height: 37.6vw;
    filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
    margin-bottom: 9.8667vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul li:nth-child(odd) {
    margin: 0 17.0667vw 0 8.5333vw;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 22.1333vw;
    filter: drop-shadow(0px -1px 0px rgba(0, 0, 0, 0.3));
    background-color: #000;
    ul{
      display: flex;
      padding: 0;
      margin: 0;
      height: calc( 22.1333vw - 9.0667vw);
      background-color: #f9f9f9;
    }
    li {
      position: relative;
      flex: 1;
      height: 100%;
      list-style: none;
      float: left;
      margin: 0!important;
      span {
        position: absolute;
        left: 10.6667vw;
        top: 5.0667vw;
        display: block;
        width: 5.8667vw;
        height: 5.8667vw;
        font-size: 5.8667vw;
      }
    }
  }
}
</style>