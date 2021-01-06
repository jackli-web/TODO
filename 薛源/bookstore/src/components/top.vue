<template>
  <div class="headert">
      <div @click="fanh"><img class="pic" src="@/assets/2.png" /></div>
      <div class="word"><slot></slot></div>
      <div  @click="goods"><img src="@/assets/goods.png" class="pic1"/></div>
  </div>
</template>

<script>
export default {
    methods:{
        fanh(){
            this.$router.go(-1)
        },
        goods(){
            this.$router.push({name:"payment"})
        }
    }
}
</script>

<style scoped lang='less'>
 .headert {
    position: fixed;
    top: 0;
    box-sizing: border-box;
    width: 100vw;
    padding-left: 6.469vw;
    padding-right: 6.469vw;
    height: 12.6685vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-bottom: 2.6954vw;
    .pic {
      width: 2.9333vw;
      height: 5vw;
    }
    .pic1 {
      width: 4.5vw;
      height: 4.2667vw;
    }
    .word {
      font-size: 4.3127vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      position: relative;
      top: -1.0782vw;
    }
 }
</style>