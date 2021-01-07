<template>
  <div class="sst">
    <div class="login">
      <div class="title">Welcome</div>
      <div class="login-a">
        <img src="../assets/images/undraw_welcome_3gvl.png" />
      </div>
      <div class="login-b">
        <img src="../assets/images/Path 17.png" />
      </div>
      <div class="content">
        <div class="content-top">Login Or Sign Up</div>
        <div class="content-btn">to</div>
      </div>
      <div class="content-gologin" @click="gologin">
        <span>
          Get Started
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gologin(){
      this.$router.push({name:'login'});
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.sst {
  width: 100vm;
  height: 100%;
}
.login {
  position: absolute;
  top: 72px;
  width: 100vw;
  height: 596px;
  .title {
    position: absolute;
    left: 36.2667vw;
    top: 0;
    font-size: 25px;
    line-height: 30px;
    color: #434343;
    font-weight: 500;
    font-family: "Roboto";
  }
  .login-a {
    position: absolute;
    top: 35px;
    left: 18.9333vw;
    width: 62.4vw;
    height: 195px;
    img {
      width: 62.4vw;
      height: 195px;
    }
  }
  .login-b {
    position: absolute;
    top: 250px;
    left: 0;
    width: 100%;
    height: 344px;
    img {
      width: 100%;
      height: 344px;
    }
  }
  .content {
    position: absolute;
    top: 420px;
    left: 28.5333vw;
    width: 43.4667vw;
    height: 51px;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 500;
    font-family: "Roboto";
    text-align: center;
  }
  .content-gologin {
    position: absolute;
    top: 484px;
    left: 33.0667vw;
    width: 36.5333vw;
    height: 39px;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
      line-height: 30px;
      color: #6c63ff;
      font-weight: 500;
      font-family: "Roboto";
      text-align: center;
    }
  }
}
</style>
