<template>
  <div class="detail-page">
    <span style="color: #888;" @click="back"><i class="el-icon-arrow-left"></i>返回</span>
    <div class="contain" v-for="item in list" :key="item.id">
      <div class="title">
        <img src="../../assets/images/detail-title.png" alt="" width="200px" style="margin-bottom: 20px;">
        <div class="name">{{ item.name }}</div>
        <div class="status">
          <span :class="{'is-active': item.status === 1}">进行中</span>/
          <span :class="{'is-active': item.status === 2}">已完成</span>/
          <span :class="{'is-active': item.status === 3}">失败</span>
        </div>
      </div>
      <div class="inner">
        <div class="des">{{ item.des }}</div>
        <div class="skill">
          <span class="center"><star />需要的技能: {{ item.skill.join() }}</span>
          <span class="center"><star />信誉分、技能分要求：信誉分：{{ item.creditScore }}分 技能分：{{ item.skillScore }}分</span>
        </div>
        <div class="rule center"><star />支付规则： {{ item.payRule }}</div>
        <div class="explain">
          <div class="center"><star />需求说明：</div>
          <div>{{ item.explain }}</div>
        </div>
        <div class="publisher">
          <div class="left center">
            <star />发单方：{{ item.publisher }} <star />薪资：{{ item.money }} <star />时间：{{ item.time }}
          </div>
          <div class="right">
            <el-button type="primary">提交里程碑</el-button>
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
  data() {
    return {
      list: [
        {
          name: '任务名111',
          status: 1, // 进行中-1，已完成-2，失败-3
          des: '我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述',
          skill: ['java', 'javascript'],
          creditScore: 30,
          skillScore: 50,
          payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
          explain: '1.巴拉巴拉...',
          publisher: 'Coco',
          money: '100,000',
          time: '2022/03/12-2022/04/11'
        }
      ]
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
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