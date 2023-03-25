<template>
  <div class="order-receive-hall">
    <div class="task" v-for="item in taskList" :key="item.id">
      <div class="name">{{ item.name }}</div>
      <div class="des">{{ item.description }}</div>
      <div class="publisher">发单方：{{ item.publisher }}</div>
      <div class="skill">需要的技能：{{ item.skill }}</div>
      <div class="credit">信誉分：{{ item.creditScore }}</div>
      <div class="skill">需要的技能：{{ item.skillScore }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderReceiveHall',
  data() {
    return{
      taskList: [
        {
          id: 1,
          name: '任务1', // 任务名称
          description: '我是任务1，我需要做一个小程序，介绍公司的产品，起到推广和运营的作用', // 介绍
          publisher: 'Boss Li', // 发布方
          money: '1,000', // 薪酬
          skill: 'vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 2,
          name: '任务2', // 任务名称
          description: '我是任务1，我需要做一个小程序，介绍公司的产品，起到推广和运营的作用', // 介绍
          publisher: 'Boss Li', // 发布方
          money: '1,000', // 薪酬
          skill: 'vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 3,
          name: '任务3', // 任务名称
          description: '我是任务1，我需要做一个小程序，介绍公司的产品，起到推广和运营的作用', // 介绍
          publisher: 'Boss Li', // 发布方
          money: '1,000', // 薪酬
          skill: 'vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 4,
          name: '任务4', // 任务名称
          description: '我是任务1，我需要做一个小程序，介绍公司的产品，起到推广和运营的作用', // 介绍
          publisher: 'Boss Li', // 发布方
          money: '1,000', // 薪酬
          skill: 'vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 5,
          name: '任务5', // 任务名称
          description: '我是任务1，我需要做一个小程序，介绍公司的产品，起到推广和运营的作用', // 介绍
          publisher: 'Boss Li', // 发布方
          money: '1,000', // 薪酬
          skill: 'vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .order-receive-hall {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-weight: 300;
    
    .task {
      width: 30%;
      height: 230px;
      padding: 20px;
      border-radius: 20px;
      background: #262c2c;
      font-size: 13px;
      margin-right: 30px;
      margin-top: 30px;
      &:hover {
        background: linear-gradient(to right,#6a9167,#138d89);
      }
      > div {
        margin-bottom: 10px;
      }
    }
    .name {
      font-size: 20px;
      font-weight: 700;
    }
  }
</style>