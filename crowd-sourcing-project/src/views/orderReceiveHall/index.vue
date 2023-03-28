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
          name: '社区团购微信小程序', // 任务名称
          description: '开发一个社区团购微信小程序，要求接入微信支付；负责提供小程序服务器部署与维护', // 介绍
          publisher: '王老板', // 发布方
          money: '30,000', // 薪酬
          skill: 'Vue，Linux', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 2,
          name: '图片爬虫程序设计', // 任务名称
          description: '根据用户输入的关键词，从多个平台爬取真实的图片', // 介绍
          publisher: '李老板', // 发布方
          money: '2,000', // 薪酬
          skill: 'Python', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 3,
          name: '开发公司网站', // 任务名称
          description: '帮可口可乐公司设计一个网站，网站内容主要有公司历史简介、公司主营产品简介、公司联系方式等', // 介绍
          publisher: '赵老板', // 发布方
          money: '25,000', // 薪酬
          skill: 'Java，Vue', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 4,
          name: 'Linux Shell脚本', // 任务名称
          description: '写一个Linux Shell脚本，实现控制树莓派连接的摄像头每天固定时间拍摄照片发送至指定邮箱', // 介绍
          publisher: '王老板', // 发布方
          money: '500', // 薪酬
          skill: 'Linux', // 需要的技能
          creditScore: '10', // 信誉分
          skillScore: '10' // 技能分
        },
        {
          id: 5,
          name: '系统日志分析', // 任务名称
          description: '某公司遭遇到了网络攻击，分析给定系统日志，找出异常项，形成分析报告', // 介绍
          publisher: '安老板', // 发布方
          money: '5,000', // 薪酬
          skill: '网络安全', // 需要的技能
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