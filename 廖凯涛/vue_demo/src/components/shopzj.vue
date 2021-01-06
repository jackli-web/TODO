<template>
<div>
  <div class="box">
      <div class="left">
          <img class="img1" :src="item.imgUrl" alt="">
      </div>
      <div class="right">
          <div class="right1">Will My Cat Eat My Eyeballs? 
                                Big Questions from Tiny 
                                    Mortals About Death</div>
          <div class="right2">by Caitlin Doughty, Dianné Ruz</div>
          <div class="right3">
                <div class="right3-left">
                    <div class="en" @click="del(index)"><img src="../assets/del.png" alt=""></div>
                    <div class="en"><span class="text">{{item.count}}</span></div>
                    <div class="en" @click="add(index)"><img class="img2" src="../assets/jia.png" alt=""></div>
                </div>
              <div class="right3-right"><span class="span">${{item.price*item.count}}</span></div>
          </div>
      </div>
     
  </div>
   <div class="xian"></div>
  </div>
</template>

<script>
export default {
props:['info','item','index'],
 methods:{
     add(index) {
         this.$emit("addclick",index)
        // this.info[index].count++;
     },
     del(index){
         this.$emit("delclick",index)
     }
 },
 computed:{
     allprice(){
         item.count*item.price
     }
 }
}
</script>

<style scoped>
.box {
    display: flex;
    width: 100vw;
}
.left {
    width: 25.8667vw;
}
.right {
    width: 74.1333vw;
}
.right1 {
    width: 50.4667vw;
    font-size: 3.4667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
}
.right2 {
    
    width: 48.4vw;
font-size: 3.2vw;
color: #000000;
font-family: "Open Sans";
}
.right3 {
    justify-content: space-between;
    display: flex;
    width: 62.9333vw;
}
.right3-left {
display: flex;
width: 24vw;
height: 6.4vw;
border-radius: 3.2vw;
background-color: #efeded;
}
.right3-right {

width: 15.2vw;
height: 4.8vw;
border-radius: 2.4vw;
background-color: #efeded;
}
.img1{
    width:19.7333vw ;
    height: 29.0667vw;
}
.span {
    font-size: 3.4667vw;
color: #000000;
font-family: "Open Sans";
}
.en {
    width: 8vw;
    /* line-height: 100%; */
 
}
.text {
    padding-top: 0px;
}
.img2 {
    vertical-align: middle;
}
.xian {
background-color: #000000;
border: 0.2667vw solid #e3e3e3;
}



</style>