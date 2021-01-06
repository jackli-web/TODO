<template>
  <div>
    <div class="bottom">
          <ul>
            <li v-for="(item,index) in tarbar" :key="index" @click="jumpTo(index)">
              <span :class="item"></span>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    tarbar: ['iconfont icon-zhuye', 'iconfont icon-sousuo','iconfont icon-aixin','iconfont icon-yonghu']
    }
  },
  methods: {
   jumpTo(index) {
      if(index == 3) {
        this.$router.push(
          {
            name: 'use'
          }
        )
      }
    },
  }
}
</script>

<style lang="less" scoped>
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
</style>