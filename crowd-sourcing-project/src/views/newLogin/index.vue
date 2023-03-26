<template>
  <div class="login">
    <h2>ErisX</h2>
    <div class="container">
      <div class="switch">
        <div :class="['btn', com === 'EmailLogin' ? 'active' : '']" @click="() => com = 'EmailLogin'">Email</div>
        <div :class="['btn', com === 'WalletLogin' ? 'active' : '']" @click="() => com = 'WalletLogin'">Connect Wallet</div>
      </div>
      <components :is="com"></components>
    </div>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2023 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>

import EmailLogin from './components/emailLogin.vue';
import WalletLogin from './components/walletLogin.vue';

export default {
  name: "Login",
  components: {
    EmailLogin,
    WalletLogin
  },
  data() {
    return {
      com: 'EmailLogin'
    };
  },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect;
  //     },
  //     immediate: true
  //   }
  // },
  
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container {
    width: 480px;
    margin-bottom: 20px;
    margin-top: 40px;
  }

  .switch {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
  }
  .btn {
    font-size: 16px;
    font-weight: 800;
    color: #818f8e;
    line-height: 48px;
    cursor: pointer;
    width: 50%;
    text-align: center;
    &:hover {
      background-color: rgba(255,255,255,.1);
    }
    &:nth-of-type(1) {
      margin-right: 25px;
    }
    &.active {
      background: #171C1C;
      color: #57ffd7;
      border-radius: 4px;
    }
  }
}

</style>
