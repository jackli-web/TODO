<template>
  <div class="user_box">
    <top :title="title"></top>
    <div class="information">
      <div class="head w">
        <div class="left">
          <img src="../../assets/image/header.jpg" alt="" />
          <span class="name_one">{{ name }}</span>
          <span class="name_two">Reader</span>
        </div>
        <div class="right">
          <span class="iconfont icon-huabi"></span>
        </div>
      </div>
      <div class="w">
        <div class="purchace left">
          <span>23</span>
          <br />
          <span>purchaced books</span>
        </div>
        <div class="want_read right">
          <span>13</span>
          <br />
          <span>want to read</span>
        </div>
      </div>
    </div>
    <div class="other_information">
      <div
        class="other w"
        v-for="(item, index) in userInfo"
        :key="index"
        :class="index !== 0 ? 'current' : ''"
      >
        <div
          class="icont left"
          :class="item.icon"
          style="margin-right: 1.8667vw"
        ></div>
        <div class="left">{{ item.title }}</div>
        <div class="right">{{ item.content }}＞</div>
      </div>
    </div>
    <div class="log_out" @click="out">Log out</div>
    <tab></tab>
  </div>
</template>

<script>
import top from "../common/top";
import tab from '../common/tab'
export default {
  data() {
    return {
      title: "Profile",
      name: "",
      userInfo: [
        {
          icon: "iconfont icon-address",
          title: "Address",
          content: "Edit the address",
        },
        {
          icon: "iconfont icon-historyrecord",
          title: "Purchase history",
          content: "See more",
        },
        {
          icon: "iconfont icon-diqiu",
          title: "Purchase history",
          content: "See more",
        },
        {
          icon: "iconfont icon-wenhao",
          title: "Address",
          content: "Edit the address",
        },
      ],
    };
  },
  components: {
    top,
    tab
  },
  methods: {
    getUsername() {
      this.name = window.sessionStorage.getItem("username");
    },
    out() {
      window.sessionStorage.clear();
      this.$router.push(
        {
          name: 'login'
        }
      )
    }
  },
  created() {
    this.getUsername();
  },
};
</script>

<style lang="less" scoped>
.user_box {
  width: 100vw;
  height: 216.5333vw;
}
.information {
  width: 100vw;
  height: 47.2vw;
  background-color: #fff;
  margin-top: 2.6667vw;
  .head {
    height: calc(24.2667vw - 5.3333vw);
    padding-top: 5.3333vw;
    .left {
      position: relative;
      width: calc(100vw / 2);
      img {
        width: 13.6vw;
        height: 13.6vw;
        border-radius: 6.9333vw;
        margin-right: 3.7333vw;
        vertical-align: middle;
      }
      .name_one {
        display: block;
        position: absolute;
        left: calc(13.6vw + 3.7333vw);
        top: 2.7vw;
        font-size: 4.2667vw;
        font-weight: bold;
        font-family: "Open Sans";
      }
      .name_two {
        display: block;
        position: absolute;
        left: calc(13.6vw + 3.7333vw);
        top: calc(3.7vw + 4.6vw);
        font-size: 3.7333vw;
      }
    }
  }
  .purchace {
    text-align: center;
    width: 48%;
    height: calc(47.2vw - 24.2667vw - 5.3333vw - 2.6667vw);
    background-color: #f7f7f7;
    padding-top: 2.6667vw;
    margin-right: 4%;
    span:nth-child(1) {
      font-size: 3.7333vw;
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: 3.7333vw;
      font-weight: bold;
    }
  }
  .want_read {
    width: 48%;
    height: calc(47.2vw - 24.2667vw - 5.3333vw - 2.6667vw);
    text-align: center;
    padding-top: 2.6667vw;
    background-color: #f7f7f7;
    span:nth-child(1) {
      font-size: 3.7333vw;
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: 3.7333vw;
      font-weight: bold;
    }
  }
}
.other_information {
  width: 100vw;
  height: 67.4667vw;
  margin-top: 2.6667vw;
  background-color: #fff;
  margin-bottom: 7.4667vw;
  .other {
    height: 8vw;
    line-height: 8vw;
    padding-top: 3.7333vw;
    margin-bottom: 3.7333vw;
  }
  .current {
    border-top: 1px solid #e3e1e1;
  }
}
.log_out {
  margin: auto;
  width: 49.6vw;
  height: 9.8667vw;
  border-radius: 5.0667vw;
  background-color: #e3e1e1;
  font-size: 4.2667vw;
  font-weight: bold;
  font-family: "Open Sans";
  text-align: center;
  line-height: 9.866vw;
}
</style>