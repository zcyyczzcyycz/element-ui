<template>
  <div id="login">
    <div class="header">
      <h2>后台管理系统</h2>
    </div>
    <div class="main">
      <div class="pic">
        <img src="./images/login.png" alt="" />
      </div>
      <div class="form">
        <el-card>
          <el-form
            :rules="rules"
            ref="zForm"
            label-position="left"
            label-width="80px"
            :model="form"
            class="not_full"
          >
            <div>
              <el-form-item label="用户名" required prop="username">
                <el-input
                  v-model.trim="form.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" required prop="password">
                <el-input
                  v-model.trim="form.password"
                  show-password
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
            </div>
            <div class="btn">
              <el-button type="primary" @click="submit">登录</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/api";
import crypto from "crypto-js";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.zForm.validate((valid) => {
        if (valid) {
          let obj = Object.assign({}, this.form);
          obj.password = crypto.SHA256(obj.password).toString();
          console.log("obj", obj);
          window.msg_success = "登录成功";
          axios.login(obj).then((res) => {
            console.log("登录", res);
            if (res.code) {
              this.$router.replace("/admin");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("@/assets/less/global.less");
.el-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
}
.btn {
  text-align: right;
  margin-top: 60px;
}
#login {
  height: 100vh;
  background-color: @z-primary-color;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .header {
    text-align: center;
    font-size: 30px;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .pic img {
      width: 500px;
    }
    .form {
      width: 400px;
      height: 400px;
    }
  }
}
</style>