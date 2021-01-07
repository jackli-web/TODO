<template>
  <div class="hello">
    <div class="loginFrom">
      <div class="loginFrom-img">
        <img src="../assets/images/Group 2.png" alt="" />
      </div>
      <div class="loginFrom-email">
        <input
          type="text"
          name="username"
          placeholder="email"
          v-model="user.email"
        />
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
      <div class="loginFrom-confirm-password">
        <input
          type="password"
          name="password"
          placeholder="confirm password"
          v-model="user.confirmPassword"
        />
      </div>
      <div class="loginuser" @click="addLogin">
        <span>Sign Up</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    godeall() {
      this.$router.push({ name: "HelloWorld" });
    },
    clearuser() {
      this.user.username = "";
      this.user.password = "";
    },
    addLogin() {
      if (this.user.email !== "") {
        if (this.user.username !== "") {
          if (this.user.password !== "") {
            if (this.user.confirmPassword !== "") {
              if (this.user.password == this.user.confirmPassword) {
                this.$router.push({
                  name: "login",
                  params: {
                    username: this.user.username,
                    password: this.user.password
                  }
                });
              } else {
                alert("输入的两次密码不一致！！");
              }
            } else {
              alert("请输入确定密码");
            }
          } else {
            alert("请输入密码！！！！");
          }
        } else {
          alert("请输入账号！！！");
        }
      } else {
        alert("请输入邮箱！！");
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.hello {
  width: 100vm;
  height: 100%;
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
    .loginFrom-email {
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
        font-size: 3.2vw;
        line-height: 6.4vw;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .loginFrom-username {
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
        font-size: 3.2vw;
        line-height: 6.4vw;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .loginFrom-password {
      position: absolute;
      top: 220px;
      width: 82.9333vw;
      height: 31px;
      border-bottom: 1px solid #8b8b8b;
      input {
        width: 77.6vw;
        height: 10px;
        outline: none;
        border: none;
        margin: 0 auto;
        font-size: 3.2vw;
        line-height: 6.4vw;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .loginFrom-confirm-password {
      position: absolute;
      top: 274px;
      width: 82.9333vw;
      height: 31px;
      border-bottom: 1px solid #8b8b8b;
      input {
        width: 77.6vw;
        height: 10px;
        outline: none;
        border: none;
        margin: 0 auto;
        font-size: 3.2vw;
        line-height: 6.4vw;
        color: #bbbbbb;
        font-weight: 500;
        font-family: "Roboto";
      }
    }
    .loginuser {
      position: absolute;
      top: 337px;
      width: 82.9333vw;
      height: 31px;
      border-radius: 6.6667vw;
      background-color: #6c63ff;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 5.3333vw;
        line-height: 5.3333vw;
        color: #ffffff;
        font-weight: 500;
        font-family: "Roboto";
        text-align: center;
      }
    }
  }
}
</style>
