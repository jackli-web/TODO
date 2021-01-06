<template>
  <div id="app">
     <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar> -->
    
    <router-view/>
    
    <!-- <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar> -->
  </div>
</template>

<script>
// import {NavBar  } from 'vant';

export default {
  name: 'App',
  data() {
    return {
      // active: 0,
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
}
</script>

<style  lang='less' scoped>
#app{
.van-nav-bar {
    .van-nav-bar__content {
      margin: 10vw 0; 
    }
  }
  }
</style>
