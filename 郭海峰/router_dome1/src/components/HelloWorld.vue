<template>
  <div class="hello">
    <div class="loginFrom">
      <div class="loginFrom-img">
        <img src="../assets/images/Group 2.png" alt="" />
      </div>
      <div class="loginFrom-username">
        <input
          type="text"
          name="username"
          placeholder="username"
          v-model="user.username"
        />
      </div>
      <div class="loginFrom-password">
        <input
          type="password"
          name="password"
          placeholder="password"
          v-model="user.password"
        />
      </div>
      <div class="clearpassword">Forgot Password?</div>
      <div class="loginuser" @click="loginuser">
        <span>Login</span>
      </div>
      <div class="godeall" @click="godeall">Or<span>Sign up</span></div>
      <div class="with-a"></div>
      <div class="with">With</div>
      <div class="with-b"></div>
      <div class="waibulianjie">
        <img src="../assets/images/icons8-google-50.png">
        <img src="../assets/images/icons8-facebook-48.png">
        <img src="../assets/images/icons8-wechat-48.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      userlist: [
        {
          username: "zhangsan",
          password: "123456"
        },
        {
          username: "admin",
          password: "123456"
        },
        {
          username: "sst",
          password: "123456"
        },
        {
          username: "ssst2",
          password: "123456"
        }
      ]
    };
  },
  methods: {
    clearuser() {
      this.user.username = "";
      this.user.password = "";
    },
    loginuser() {
      var x = this.userlist.length;
      var y = 0;
      this.userlist.forEach(element => {
        if (element.username == this.user.username) {
          if (element.password == this.user.password) {
            this.$router.push({
              name: "jieguo",
              params: { username: this.user.username }
            });
          } else {
            alert("密码错误");
          }
        } else {
          y++;
        }
        if (y == x) {
          alert("没有这个账号！请先注册！");
        }
      });
    },
    godeall() {
      this.$router.push({ name: "deall" });
    }
  },
  created() {
    if (this.$route.params.hasOwnProperty("username")) {
      this.userlist.push({
        username: this.$route.params.username,
        password: this.$route.params.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  width: 100vw;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginFrom {
    position: relative;
    width: 83.2vw;
    height: 475px;
    .loginFrom-img {
      width: 16vw;
      height: 60px;
      margin: 0 auto;
    }
    .loginFrom-username {
      position: absolute;
      top: 100px;
      width: 82.9333vw;
      height: 31px;
      border-bottom: 1px solid #8b8b8b;
      input {
        width: 77.6vw;
        height: 10px;
        outline: none;
        border: none;
        margin: 0 auto;
        font-size: 12px;
        line-height: 24px;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .loginFrom-password {
      position: absolute;
      top: 165px;
      width: 82.9333vw;
      height: 31px;
      border-bottom: 1px solid #8b8b8b;
      input {
        width: 77.6vw;
        height: 10px;
        outline: none;
        border: none;
        margin: 0 auto;
        font-size: 12px;
        line-height: 24px;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .clearpassword {
      position: absolute;
      left: 53.8667vw;
      top: 200px;
      font-size: 12px;
      line-height: 24px;
      color: #6a696b;
      font-weight: bold;
      font-family: "Roboto";
      text-align: center;
    }
    .loginuser {
      position: absolute;
      top: 260px;
      width: 82.9333vw;
      height: 50px;
      border-radius: 6.6667vw;
      background-color: #6c63ff;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        font-weight: 500;
        font-family: "Roboto";
        text-align: center;
      }
    }
    .godeall {
      position: absolute;
      top: 330px;
      left: 32.0667vw;
      font-size: 12px;
      line-height: 24px;
      color: #6a696b;
      font-weight: bold;
      font-family: "Roboto";
      text-align: center;
      span {
        margin-left: 2.6667vw;
        color: #4a3fee;
      }
    }
    .with-a {
      position: absolute;
      top: 377px;
      width: 36vw;
      height: 1px;
      background-color: #ffffff;
      border: 1px solid #707070;
    }
    .with {
      position: absolute;
      top: 365.5px;
      left: 38.5vw;
      font-size: 12px;
      line-height: 24px;
      color: #6a696b;
      font-weight: 500;
      font-family: "Roboto";
      text-align: center;
    }
    .with-b {
      position: absolute;
      top: 377px;
      left: 47.4667vw;
      width: 36vw;
      height: 1px;
      background-color: #ffffff;
      border: 1px solid #707070;
    }
    .waibulianjie{
      position: absolute;
      top: 414px;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img{
        width: 13.3333vw;
        height: 50px;
      }
    }
  }
}
</style>
