<template>
  <div class="detail-page">
    <span style="color: #888;cursor: pointer;" @click="back"><i class="el-icon-arrow-left"></i>返回</span>
    <div class="contain">
      <div class="title">
        <img src="../../assets/images/detail-title.png" alt="" width="200px" style="margin-bottom: 20px;">
        <div class="name">{{ list.name }}</div>
        <div class="status">
          <span :class="{'is-active': list.status === 0}">未开始</span>/
          <span :class="{'is-active': list.status === 1}">进行中</span>/
          <span :class="{'is-active': list.status === 2}">已完成</span>/
          <span :class="{'is-active': list.status === 3}">失败</span>
        </div>
      </div>
      <div class="inner">
        <div class="des">{{ list.description }}</div>
        <div class="skill">
          <span class="center"><star />需要的技能: {{ list.skill }}</span>
          <span class="center"><star />信誉分、技能分要求：信誉分：{{ list.creditScore }}分 技能分：{{ list.skillScore }}分</span>
        </div>
        <div class="rule center"><star />支付规则： {{ list.payRule }}</div>
        <div class="explain">
          <div class="center"><star />需求说明：</div>
          <div>{{ list.explain }}</div>
        </div>
        <div class="publisher">
          <div class="left center">
            <star />发单方：{{ list.publisher }} <star />薪资：{{ list.money }} <star />时间：{{ list.time }}
          </div>
          <div class="right">
            <el-button v-if="user.role === '发布者'" type="primary">提交任务</el-button>
            <el-button v-if="user.role === '打工人' && list.status === 0" type="primary" @click="receiveTask">接受任务</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from './components/star.vue'
export default {
  name: 'TaskDetail',
  components: {
    Star
  },
  computed: {
    user() {
      return JSON.parse(sessionStorage.getItem('role'))
    }
  },
  data() {
    return {
      list: {
      //   name: '任务名111',
      //   status: 1, // 进行中-1，已完成-2，失败-3
      //   des: '我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述',
      //   skill: 'java,javascript',
      //   creditScore: 30,
      //   skillScore: 50,
      //   payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      //   explain: '1.巴拉巴拉...',
      //   publisher: 'Coco',
      //   money: '100,000',
      //   time: '2022/03/12-2022/04/11'
      }
    }
  },
  created() {
    if (this.$route.params) {
      const detail = this.$route.params;
      detail.payRule = detail.payRule === 1 ? '订单/尾款' : (
          detail.payRule === 2 ? '里程碑付款' : (
            detail.payRule === 3 ? '一次性付款' : ''
          )
        )
      this.list = detail;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    receiveTask() {
      // 删除 任务大厅
      const oldTaskList = JSON.parse(sessionStorage.getItem('taskHall'));
      const index = oldTaskList.findIndex(item => item.id === this.list.id);
      if (index === -1) return;
      oldTaskList.splice(index, 1);
      sessionStorage.setItem('taskHall', JSON.stringify(oldTaskList));
      // 新增到 我的订单-进行中的订单
      const myNewTask = this.list;
      const myOrder = JSON.parse(sessionStorage.getItem('underWayOrder'));
      myOrder.unshift(myNewTask);
      sessionStorage.setItem('underWayOrder', JSON.stringify(myOrder));
      
      this.$message.success('任务已接收，请到我的订单中查看', {
        // duration控制弹窗关闭时间
        duration: 5000
      });

      // 按照业务场景，我给出以下方案，仅供参考：
      // 第一，如果想要返回【任务大厅】打开this.back(),否则注释
      this.back();
      // 第二，如果任务已接收，想要直接跳转到我的订单，请打开以下注释
      // this.$router.push('/my-order');

    }
  }
}
</script>
<style lang="scss" scoped>
.detail-page {
  font-size: 14px;
  color: #fff;
  padding: 30px 40px;
  .contain {
    margin-top: 20px;
    padding: 20px;
    background: #171c1c;
    border-radius: 20px;
    .inner {
      // padding: 20px;
      // background: #171c1c;
      // border-radius: 20px;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      .name {
        font-size: 30px;
        margin-bottom: 15px;
      }
    }
    .des {
      line-height: 24px;
      margin-bottom: 20px;
    }
    .skill {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .rule {
      margin-bottom: 20px;
    }
    .explain {
      margin-bottom: 20px;
    }
    .publisher {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .center {
    display: flex;
    align-items: center;
  }
  .status {
    color: #333D3C;
    .is-active {
      color: #41deca;
      font-weight: 500;
    }
  }
}
</style>