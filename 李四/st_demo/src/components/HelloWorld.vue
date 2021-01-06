<template>
  <div class="bigbox">
   
    <div class="headert">
      <div><img class="pic" src="@/assets/2.png" alt="" srcset=""></div>
      <div class="word">cart</div>
      <div><img class="pic1" src="@/assets/1.png" alt="" srcset=""></div>
    </div>
    <div class="content">
        <div class="part1">
            <div class="word">Books you Liked</div>
            <div class="container">filter</div>
        </div>
        <div class="part2">
          <!-- <div class="book" v-for="item in info" :key="item.id"><img class="bookicon" :src="item.imgUrl" alt="" srcset=""></div> -->
          <book v-for="item in info" :key="item.id" :selfInfo="item"></book>
        </div>
    </div>
    <div class="footer">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
  </div>
</template>

<script>
import book from './book'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info:[],
    }
  },
  beforeMount(){
    this.$axios({
      method:'get',
      url:'/api/books'
    }).then((res)=>{
      console.log('res',res)
      this.info=res.data.info;
    })
  },
  components:{
    book:book
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.bigbox{
  .headert{
    position:fixed;
    top:0;
    box-sizing: border-box;
    width:100vw;
    padding-left:6.469vw;
    padding-right:6.469vw;
    height: 12.6685vw;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color:white;
    margin-bottom:2.6954vw;
    .pic{
      width:2.965vw;
    }
    .pic1{
      width:5.3908vw;
    }
    .word{
      font-size: 4.3127vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    position:relative;
    top:-1.0782vw;
    }

  }
  .content{
    margin-top:14.6685vw;
    padding-top:4.5822vw;
    background-color:white;
    padding-bottom:8.0863vw;
    .part1{
      padding-left:6.7385vw;
      padding-right:6.469vw;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:24px;
      .word{
        font-size: 3.7736vw;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
      }
      .container{
        width:25.0674vw;
        height:6.469vw;
        border-radius: 3px;
        background-color: #ffffff;
        border: 1px solid #b1b1b1;
        display:flex;
        justify-content: center;
        align-items: center;
      }
    }
    .part2{
      // border:1px solid red;
      padding-left:15.0943vw;
      padding-right:15.0943vw;
      display:flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .book{
        border:1px solid black;
        width:26.9542vw;
        height:38.0054vw;
         margin-bottom:10.2426vw;
        .bookicon{
          width:100%;
          height:100%;
         
        }
      }
    }
  }
  .footer{
    background: #f9f9f9;
    position:fixed;
    bottom:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:10.7817vw;
    padding-right:10.7817vw;
    box-sizing: border-box;
    width:100vw;
    height:13.2075vw;
    border:1px solid black;
    .item{
      border:1px solid black;
    }
    // width:100vw;
  }
}
</style>
