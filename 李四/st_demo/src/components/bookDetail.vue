<template>
  <div>
     <div class="headert">
      <div @click="$router.back()"><img class="pic" src="@/assets/2.png" alt="" srcset=""></div>
      <div class="word">product</div>
      <div><img class="pic1" src="@/assets/1.png" alt="" srcset=""></div>
    </div>
    <div class="content">
        <div class="bookname">{{selfinfo.bookName}}</div>
        <div class="price">${{selfinfo.price}}</div>
        <div class="carouselbox">
            <div class="innerbox">
                <van-swipe class="my-swipe"  indicator-color="white">
                <van-swipe-item><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""></van-swipe-item>
                <van-swipe-item><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""></van-swipe-item>
                <van-swipe-item><img class="pic" :src="selfinfo.imgUrl" alt="" srcset=""></van-swipe-item>
                
            </van-swipe>
            </div>
            
        </div>
        <div class="otherinfo">
            <div class='smallbox'>
                <div class="word">Formats and editions</div>
                <div class="business">


                    <div class="anot"  v-for="(item,index) in selfinfo.otherPrice" :key="index">

                        <div class="item">
                        
                        <div class="gt left">{{item.platform}}</div>
                        <div class="gt">{{item.price}}</div>

                        </div>

                    </div>
                    
                </div>
            </div>
            <div  class='smallbox'>
                <div>
                    <button  @click="des">-</button>
                    <span>{{count}}</span>
                    <button @click="add">+</button>
                </div>
            </div>
            <div>
                <div>
                    <button @click="addtoca">加入购物车</button>
                    <button @click="jumpt">立即购买（跳转购物车）</button>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>

export default {
    data:function(){
        return{
            selfinfo:this.$route.query,
            count:1
        }
    },
    methods: {
        add(){
            this.count++
        },
        des(){
            this.count--
        },
        addtoca(){
            var obj={...this.selfinfo,count:this.count}
            this.$store.commit('addtocart',obj)
        },
        jumpt(){
            this.$router.push({name:'shoppingcart'})
        }

    },
    computed:{
        storeorders:function(){
            return this.$store.state.orders
        }
    }
     
}
</script>

<style lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
  }
  .van-swipe-item{
      height:68.2667vw;
  }
  .van-swipe__indicators{
bottom:0;
  }
  .van-swipe__indicator{
      
      display:inline-block;
      width:8.8vw;
      border-radius: 0;
      height: 2px;
      background-color:rgb(163, 162, 162);
      &.van-swipe__indicator--active{
          background-color:black;
      }

  }
</style>
<style lang='less' scoped>
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
      margin-top:15.4vw;
      background-color: white;
      padding-left:24px;
      padding-right:24px;
      padding-top:14px;
      .bookname{
          font-size: 13px;
          color: #000000;
        font-family: "Open Sans";
        margin-bottom:2.6667vw;
      }
      .price{
          font-size: 18px;
        color: #000000;
        font-weight: bold;
        font-family: "Open Sans";
        margin-bottom:8.2667vw;
      }
      .carouselbox{
        //   border:1px solid red;
          .innerbox{
            //   height:60.5333vw;
            padding-bottom:12vw;
            border-bottom:1px solid #e3e3e3;
              .pic{
              height:60.5333vw;

              }
          }
      }
      .otherinfo{
          padding-top:4vw;
          .smallbox{
              padding-bottom:5.0667vw;
          }
          .word{
              font-size: 14px;
            color: #000000;
            font-weight: bold;
            font-family: "Open Sans";
            margin-bottom:4.5333vw;
          }
          .business{
            //   display:flex;
            white-space:nowrap;
            // overflow: hidden;
            overflow-x:scroll;
            .anot{
                display: inline-block;
                margin-right:2.1333vw;
            }
              .item{

                    border:1.5px solid  #c4c4c4;
                    border-radius:4.5333vw;
                    padding:2.4vw 2.6667vw;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    .gt{
                        &.left{
                            margin-right:5.3333vw
                        }
                    }
                  

              }
          }
      }
  }
</style>