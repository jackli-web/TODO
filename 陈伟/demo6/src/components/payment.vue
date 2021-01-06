<template>
  <div class="bigbox">
    <div class="head">
      <div class="icon" @click="$router.back()">
        <a href="#"
          ><img class="pic" src="../assets/ionic-ios-arrow-back.png"
        /></a>
      </div>
      <div class="headtit"><span class="word">Payment</span></div>
      <div class="icon">
        <a href="#"><img class="pic1" src="@/assets/Path 5.png" /></a>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="unit" v-for="(item, index) in storeorders" :key="index">
          <div>{{ item.bookName }}</div>
          <div>{{ item.count }}</div>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="bi"><span>Billing Information</span></div>
      <div class="buyn"><div>Buy new</div><div></div>　<hr size="1px" width="80%" noshade=true /></div>
      <div class="ship">
        <div>Shipping</div>
        <div>+S3.00</div>
        　<hr size="1px" width="80%" noshade=true />
      </div>
      <div class="text">Only 6 left in stock (more on the way).</div>
      <div class="text">This item ships to 18 Wall St, Us</div>
      <div class="text">Get it by Thursday,April 16 - Friday,April 24</div>
      <div class="text">Choose this date at checkout</div>
    </div>
    <div class="footer">
      <div>
        <button class="btnbuy"><span>Buy Now</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    storeorders: function () {
      return this.$store.state.orders;
    },
  },
};
</script>

<style lang='less' scoped>
* {
  margin: 0vw;
  padding: 0vw;
}
.bigbox {
  .head {
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
      width: 2.965vw;
    }
    .pic1 {
      width: 5.3908vw;
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
  .content {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    padding-bottom: 8.0863vw;
    .unit {
      border: 1px solid red;
      padding: 20px;
    }
  }
  .content2 {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    margin-left: 6.4vw;
    background-color: white;
    padding-bottom: 8.0863vw;
    display: flex;
    flex-direction: column;
    .bi {
      font-size: 3.7333vw;
      color: #000000;
      font-weight: bold;
      font-family: "Open Sans";
      margin-bottom: 26px;
    }
    .buyn{
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
       margin-bottom: 26px;
    }
    .ship{
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
       margin-bottom: 26px;
    }
    .text {
      font-size: 3.7333vw;
      color: #7f7f7f;
      font-weight: bold;
      font-family: "Open Sans";
    }
  }
  .footer {
    margin-top: 14.6685vw;
    padding-top: 4.5822vw;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10.7817vw;
    padding-right: 10.7817vw;
    box-sizing: border-box;
    width: 100vw;
    height: 13.2075vw;
    border: 1px solid black;

    .btnbuy {
      width: 49.6vw;
      height: 9.8667vw;
      border-radius: 5.0667vw;
      background-color: #060aff;
      span {
        font-size: 4.2667vw;
        color: #ffffff;
        font-weight: bold;
        font-family: "Open Sans";
      }
    }
  }
}
</style>
