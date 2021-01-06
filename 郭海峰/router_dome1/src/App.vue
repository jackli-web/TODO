<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      flag: true
    };
  },
  methods: {},
  watch:{
    '$route':function(newvalue,oldvulue){
      // console.log('路由发生了变化',newvalue);
    }
  }
};
</script>

<style lang="less" scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
