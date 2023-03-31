<template>
  <div class="email-login">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="role">
        <el-select
          v-model="loginForm.role"
          style="width:100%;"
        >
          <el-option label="issuer" value="issuer"></el-option>
          <el-option label="worker" value="worker"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span>Login</span>
        </el-button>
        <!-- <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { dog } from '../dog';
export default {
  name: 'EmailLogin',
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        role: 'worker'
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined
    }
  },
  methods: {
    handleLogin() {
      console.log('login!!');
      sessionStorage.setItem('role', JSON.stringify(this.loginForm));
      localStorage.setItem('taskHall', JSON.stringify(dog.taskHall));
      if (this.loginForm.role === 'worker') {
        localStorage.setItem('workerUnderWayOrder', JSON.stringify(dog.workerUnderWayOrder));
        localStorage.setItem('workerHistoryOrder', JSON.stringify(dog.workerHistoryOrder));
      } else if (this.loginForm.role === 'issuer') {
        localStorage.setItem('bossUnderWayOrder', JSON.stringify(dog.bossUnderWayOrder));
        localStorage.setItem('bossHistoryOrder', JSON.stringify(dog.bossHistoryOrder));
      }
      this.$router.push('/index');
    }
  }
}
</script>
<style lang="scss" scoped>
.email-login {
  text-align: center;
  min-height: 280px;
}
</style>