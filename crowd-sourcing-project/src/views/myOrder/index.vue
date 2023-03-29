<template>
  <div class="my-order">
    <div class="switch">
      <div
        :class="['btn', com==='UnderWay' ? 'is-active': '']" @click="() => this.com = 'UnderWay'"
        style="margin-right: 15px;"
      >进行中的订单</div>
      <div :class="['btn', com==='History' ? 'is-active': '']" @click="() => this.com = 'History'">历史订单</div>
    </div>
    <div style="margin: 10px 0; text-align: right;">
      <el-button v-if="user.role === '发布者'" type="primary" @click="pushTask">发布任务</el-button>
    </div>
    <div class="container">
      <component :is="com"></component>
    </div>
  </div>
</template>
<script>
import UnderWay from './components/underWay.vue';
import History from './components/history.vue';
export default {
  name: 'MyOrder',
  components: {
    UnderWay,
    History
  },
  data() {
    return {
      com: 'UnderWay'
    }
  },
  computed: {
    user() {
      const role = sessionStorage.getItem('role');
      return JSON.parse(role);
    }
  },
  methods: {
    pushTask() {
      this.$router.push('/push-task');
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-order {
    height: calc( 100vh - 70px );
    .switch {
      display: flex;
      margin-top: 20px;
    }
    .btn {
      padding: 8px 12px;
      color: #fff;
      font-size: 14px;
      border-radius: 8px;
      &:hover {
        background: #262c2c;
        cursor: pointer;
      }
      &.is-active {
        background: linear-gradient(to right,#6a9167,#138d89);
      }
    }
    .container {
      width: 100%;
      height: calc( 100% - 50px );
    }
  }
</style>