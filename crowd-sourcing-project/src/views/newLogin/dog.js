// dog=天选打工人
// 所有需要缓存到的数据都放在这里了，登录的时候会缓存到sessionStorage里，否则无法完成交互
// 重要：id必须是唯一的，不管他是taskHall还是underWayOrder
export const dog = {
  // taskHall -- 任务大厅列表
  taskHall: [
    {
      id: 1,
      name: '社区团购微信小程序', // 任务名称
      description: '开发一个社区团购微信小程序，要求接入微信支付；负责提供小程序服务器部署与维护', // 介绍
      publisher: '王老板', // 发布方
      money: '30,000', // 薪酬
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 2,
      name: '图片爬虫程序设计', // 任务名称
      description: '根据用户输入的关键词，从多个平台爬取真实的图片', // 介绍
      publisher: '李老板', // 发布方
      money: '2,000', // 薪酬
      skill: 'Python', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 3,
      name: '开发公司网站', // 任务名称
      description: '帮可口可乐公司设计一个网站，网站内容主要有公司历史简介、公司主营产品简介、公司联系方式等', // 介绍
      publisher: '赵老板', // 发布方
      money: '25,000', // 薪酬
      skill: 'Java，Vue', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 3, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 4,
      name: 'Linux Shell脚本', // 任务名称
      description: '写一个Linux Shell脚本，实现控制树莓派连接的摄像头每天固定时间拍摄照片发送至指定邮箱', // 介绍
      publisher: '王老板', // 发布方
      money: '500', // 薪酬
      skill: 'Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 2, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 5,
      name: '系统日志分析', // 任务名称
      description: '某公司遭遇到了网络攻击，分析给定系统日志，找出异常项，形成分析报告', // 介绍
      publisher: '安老板', // 发布方
      money: '5,000', // 薪酬
      skill: '网络安全', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      time: '2022/03/12-2022/04/11'
    },
  ],
  // underWayOrder -- 我的订单-进行中的订单
  underWayOrder: [
    {
      id: 6,
      name: '开发购物网站',
      description: '为耐克公司开发一个购物网站，涉及到产品展示页面以及支付接口。要求使用spring boot框架。',
      publisher: '李老板',
      money: '200,000',
      progress: 10,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
      
    },
    {
      id: 7,
      name: '开发微信小程序',
      description: '为爱拍照相馆开发一个微信小程序，实现信息展示、顾客预约、顾客支付等功能。',
      publisher: '贾老板',
      money: '60,000',
      progress: 90,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
    },
    {
      id: 8,
      name: '设计一个Python脚本',
      description: '设计一个python脚本调用twitter的api爬取指定话题下的推文，要求在2023.4月前完成',
      publisher: '陈老板',
      money: '3,000',
      progress: 56,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
    },
  ],
  // historyOrder -- 我的订单-历史订单
  historyOrder: [
    {
      id: 9,
      name: '设计一个物流管理系统',
      description: '设计一个物流管理系统，该系统需要具备实时数据处理和可视化展示、多角色权限管理和可扩展性等特性。',
      publisher: '何老板',
      money: '10,000',
      progress: '10',
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
    },
    {
      id: 10,
      name: '开发一个在线教育平台',
      description: '开发一个在线教育平台，需要有教师发布课程、学生注册、学习视频、在线测试、成绩管理等功能。',
      publisher: '刘老板',
      money: '26,000',
      progress: '90',
      time: '2022/01/12-2022/02/22',
      taskStatus: false,
      status: 3,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
    },
    {
      id: 11,
      name: '设计一个社交媒体应用',
      description: '支持用户登录、个人资料、消息发送、帖子发布、点赞和评论等功能。',
      publisher: '刘老板',
      money: '20,000',
      progress: '56',
      time: '2022/02/18-2022/03/22',
      taskStatus: true,
      status: 2,
      skill: 'Vue，Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: '1.巴拉巴拉...',
    },
  ]
}