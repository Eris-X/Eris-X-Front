<template>
  <div class="order-receive-hall">
    <div class="task" v-for="item in taskList" :key="item.id" @click="() => getTaskDetail(item)">
      <div class="name">{{ item.name }}</div>
      <div class="des">{{ item.description }}</div>
      <div class="publisher">Issuer:{{ item.publisher }}</div>
      <div class="skill"> Skills needed:{{ item.skill }}</div>
      <div class="credit">Reputation Credits:{{ item.creditScore }}</div>
      <div class="skill">Skill needed: {{ item.skillScore }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderReceiveHall',
  data() {
    return{
      // taskList: [
      //   {
      //     id: 1,
      //     name: 'Wechat mini program for community group purchase.', // 任务名称
      //     description: 'Develop a community group purchase mini program on wechat which requires access to wechat pay. Responsible for providing arrangement and maintenance of server of mini programs. ', // 介绍
      //     publisher: 'Boss Wang', // 发布方
      //     money: '30,000', // 薪酬
      //     skill: 'Vue, Linux', // 需要的技能
      //     creditScore: '10', // 信誉分
      //     skillScore: '10' // 技能分
      //   },
      //   {
      //     id: 2,
      //     name: 'Program design of graphics crawler', // 任务名称
      //     description: 'Getting real graphs from different platforms according to key words input by users.', // 介绍
      //     publisher: 'Boss Li', // 发布方
      //     money: '2,000', // 薪酬
      //     skill: 'Python', // 需要的技能
      //     creditScore: '10', // 信誉分
      //     skillScore: '10' // 技能分
      //   },
      //   {
      //     id: 3,
      //     name: 'Develop the website of company', // 任务名称
      //     description: 'Develop a website for Coca Cola where it contains the abstract history, product information and contacts of the company.', // 介绍
      //     publisher: 'Boss Zhao', // 发布方
      //     money: '25,000', // 薪酬
      //     skill: 'Java，Vue', // 需要的技能
      //     creditScore: '10', // 信誉分
      //     skillScore: '10' // 技能分
      //   },
      //   {
      //     id: 4,
      //     name: 'Write a Linux Shell', // 任务名称
      //     description: 'Write a Linux Shell script which can control cameras connected by Raspberry Pi  to take pictures everyday in the fixed time and send them to assigned emails.', // 介绍
      //     publisher: 'Boss Wang', // 发布方
      //     money: '500', // 薪酬
      //     skill: 'Linux', // 需要的技能
      //     creditScore: '10', // 信誉分
      //     skillScore: '10' // 技能分
      //   },
      //   {
      //     id: 5,
      //     name: 'System Diary Analysis', // 任务名称
      //     description: 'Some company had a cyber attack. Analyze the diary of assigned system, and find the unusual terms to get analysis report.', // 介绍
      //     publisher: 'Boss An', // 发布方
      //     money: '5,000', // 薪酬
      //     skill: 'cyber security', // 需要的技能
      //     creditScore: '10', // 信誉分
      //     skillScore: '10' // 技能分
      //   },
      // ]
    }
  },
  computed: {
    taskList() {
      return JSON.parse(sessionStorage.getItem('taskHall'));
    }
  },
  methods: {
    getTaskDetail(arg) {
      console.log('arg', arg)
      this.$router.push({
        name: 'TaskDetail',
        // 跳转到详情页的时候，通过params把详情组件需要展示的信息传过去
        params: {
          status: 0,
          ...arg
        }
      });
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
      cursor: pointer;
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