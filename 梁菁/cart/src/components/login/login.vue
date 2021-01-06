<template>
  <div class="login_box">
    <div class="login_top">
      <img src="../../assets/image/bgc_one.png" alt="" />
      <div class="logo">
        <img src="../../assets/image/Path 1@2x.png" alt="" class="dif_one" />
        <img src="../../assets/image/Path 2@2x.png" alt="" class="dif_two" />
      </div>
      <div class="title">Hi - Book</div>
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
    <div class="user w" v-for="(item, index) in user" :key="index">
      <span
        class="iconfont"
        :class="index === 0 ? 'icon-yonghu1' : 'icon-suo'"
      ></span>
      <input :type="index === 0 ? 'text' : type" :placeholder="item" @input="input(index,$event)"/>
      <span
        v-show="index === 1"
        class="diff"
        :class="eyes"
        @click="click"
      ></span>
    </div>
    <div class="forgot w">Forgot Password</div>
    <div class="login" @click="setUser">Sign in</div>
    <div class="other_login">
      <span>or</span>
      <img src="../../assets/image/facebook@2x.png" alt="" />
      <img src="../../assets/image/search@2x.png" alt="" class="img_two" />
    </div>
    <div class="sing_up">
      Don't have an account?
      <span>Sign up</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ["User name", "Password"],
      eyes: "iconfont icon-yanjing",
      type: "password",
      username: '',
      password:''
    };
  },
  methods: {
    click() {
      this.eyes =
        this.eyes === "iconfont icon-yanjing"
          ? "iconfont icon-jurassic_loseeyes"
          : "iconfont icon-yanjing";
      this.type = this.type === "text" ? "password" : "text";
    },
    input(index,$event) {
      if(index === 0) {
        this.username = $event.target.value;
      }else if(index === 1) {
        this.password = $event.target.value
      }
    },
    setUser() {
      if(this.username !=='' && this.password !== '') {
        window.sessionStorage.setItem(
          'username', this.username
        )
        window.sessionStorage.setItem(
          'password', this.password
        )
        this.$router.push(
          {
            name: 'list'
          }
        )
      }else {
        alert('请输入用户名或者密码')
      }
    }
  },
};
</script>

<style lang="less" scoped>
.login_box {
  width: 100vw;
  height: 216.5333vw;
  overflow: hidden;
  .login_top {
    position: relative;
    width: 100vw;
    height: 70.1333vw;
    margin-bottom: 12vw;
    img {
      position: absolute;
      width: 91.4667vw;
      height: 78.9333vw;
      top: -9.8667vw;
      right: -14.6667vw;
    }
    .logo {
      position: absolute;
      top: 26.6667vw;
      left: 40.8vw;
      width: 18.4vw;
      height: 18.4vw;
      border-radius: 3.2vw;
      filter: drop-shadow(0px 0.8vw 0.9333vw rgba(0, 0, 0, 0.16));
      background-color: #ffffff;
    }
    .dif_one,
    .dif_two {
      position: absolute;
      top: 5.3333vw;
      left: 5.8667vw;
      width: 3.7333vw;
      height: 7.2vw;
    }
    .dif_two {
      top: 5.3333vw;
      left: 9.8vw;
    }
  }
  .title {
    position: absolute;
    bottom: 14.1333vw;
    left: 36.5333vw;
    width: 36.2667vw;
    height: 5.3333vw;
    font-size: 6.4vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
  }
  .one,
  .two,
  .three {
    width: 3.2vw;
    height: 3.2vw;
    border-radius: 1.6vw;
  }
  .one {
    position: absolute;
    top: 24.8vw;
    left: 12vw;
    background-color: #a5d545;
  }
  .two {
    position: absolute;
    top: 38.1333vw;
    left: 21.6vw;
    background-color: #6c63ff;
  }
  .three {
    position: absolute;
    bottom: 8vw;
    left: 12vw;
    background-color: #ffcb33;
  }
  .user {
    position: relative;
    span {
      position: absolute;
      z-index: 2;
      top: 4.8vw;
      left: 6.1333vw;
    }
    input {
      padding-left: 14.4vw;
      width: (87.2vw - 14.4vw);
      height: 12.8vw;
      border-radius: 6.4vw;
      filter: drop-shadow(0px 0.8vw 0.9333vw rgba(0, 0, 0, 0.08));
      background-color: #ffffff;
      border: 0.2667vw solid #b1b1b1;
      margin-bottom: 4vw;
    }
  }
}
.diff {
  position: absolute;
  top: 4.8vw;
  left: 75.4667vw !important;
}
.forgot {
  text-align: right;
  font-size: 3.7333vw;
  color: #000000;
  font-family: "Open Sans";
  margin-bottom: 7.4667vw;
}
.login {
  width: 44.8vw;
  height: 10.1333vw;
  border-radius: 5.0667vw;
  filter: drop-shadow(0px 0.8vw 0.9333vw rgba(0, 0, 0, 0.16));
  background-color: #060aff;
  font-size: 4.2667vw;
  color: #ffffff;
  font-weight: bold;
  font-family: "Open Sans";
  text-align: center;
  line-height: 10.13vw;
  margin: auto;
  margin-bottom: 6.1333vw;
}
.other_login {
  width: 44.8vw;
  height: 10.1333vw;
  margin: auto;
  span {
    display: block;
    margin-bottom: 5.3333vw;
    font-size: 4.2667vw;
    color: #000000;
    font-weight: bold;
    font-family: "Open Sans";
    text-align: center;
  }
  img {
    width: 6.9333vw;
    height: 6.9333vw;
    margin: 0 5.3333vw;
  }
  .img_two {
    margin-left: 9.3333vw;
  }
}
.sing_up {
  margin-top: calc(12.8vw + 6.9333vw);
  font-size: 3.7333vw;
  color: #000000;
  font-family: "Open Sans";
  text-align: center;
  span {
    font-weight: bold;
  }
}
</style>