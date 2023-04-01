// dog=天选worker
// 所有需要缓存到的数据都放在这里了，登录的时候会缓存到 localStorage 里，否则无法完成交互
// 重要：id必须是唯一的，不管他是taskHall还是underWayOrder
export const dog = {
  // taskHall -- 任务大厅列表(角色共用)
  taskHall: [
    {
      id: 1,
      name: 'Wechat mini program for community group purchase.', // 任务名称
      description: 'Develop a community group purchase mini program on wechat which requires access to wechat pay. Responsible for providing arrangement and maintenance of server of mini programs.', // 介绍
      publisher: 'Boss Wang', // 发布方
      money: '30,000', // 薪酬
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The completion deadline for the development of the mini program is within six months from now. The technologies to be used include WeChat Mini Program API, React Native, Node.js, and MongoDB.',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 2,
      name: 'Program design of graphics crawler', // 任务名称
      description: 'Getting real graphs from different platforms according to key words input by users', // 介绍
      publisher: 'Boss Li', // 发布方
      money: '2,000', // 薪酬
      skill: 'Python', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The program should adhere to ethical and legal considerations, such as respecting intellectual property rights and avoiding crawling of prohibited content.The technologies to be used include a web scraping library, such as Beautiful Soup or Scrapy, and a database system, such as MySQL or MongoDB.',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 3,
      name: 'Develop the website of company', // 任务名称
      description: 'Develop a website for Coca Cola where it contains the abstract history, product information and contacts of the company.', // 介绍
      publisher: 'Boss Zhao', // 发布方
      money: '25,000', // 薪酬
      skill: 'Java,Vue', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 3, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The website should be visually appealing and reflect the company\'s brand and values.It should have a responsive design that works well on both desktop and mobile devices.',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 4,
      name: 'Write a Linux Shell', // 任务名称
      description: 'Write a Linux Shell script which can control cameras connected by Raspberry Pi  to take pictures everyday in the fixed time and send them to assigned emails.', // 介绍
      publisher: 'Boss Wang', // 发布方
      money: '500', // 薪酬
      skill: 'Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 2, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'It should be able to handle signals, such as Ctrl+C or Ctrl+Z.The shell should be secure and not allow unauthorized access to the system or its resources.',
      time: '2022/03/12-2022/04/11'
    },
    {
      id: 5,
      name: 'System Logs Analysis', // 任务名称
      description: 'Some company had a cyber attack. Analyze the diary of assigned system, and find the unusual terms to get analysis report.', // 介绍
      publisher: 'Boss An', // 发布方
      money: '5,000', // 薪酬
      skill: 'cyber security', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The analysis should identify patterns, trends, and anomalies in the system behavior, such as spikes in CPU usage or disk I/O.',
      time: '2022/03/12-2022/04/11'
    },
  ],
  // workerUnderWayOrder -- 我的订单-进行中的订单（角色：打工人）
  workerUnderWayOrder: [
    {
      id: 6,
      name: 'Develop Shopping Websites.',
      description: 'Develop a shopping website for Nike, requesting a product which has a webpage and payment interface. Need to use spring boot frame.',
      publisher: 'Boss Li',
      money: '200,000',
      progress: 10,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The website should have an intuitive user interface with easy navigation and search functionality.It should have clear and concise product descriptions, including images, pricing, and availability information.',
      
    },
    {
      id: 7,
      name: 'Develop wechat mini programs.',
      description: 'Develop a wechat mini program for Aipai photo studio. Need to realize functions of showing information, reservation and payment.',
      publisher: 'Boss Jia',
      money: '60,000',
      progress: 90,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'It should include an order tracking system to allow customers to monitor their order status and receive updates.The mini program should have a review system that allows customers to leave feedback on their purchases.',
    },
    {
      id: 8,
      name: 'Design a Python script.',
      description: 'Design a python script which uses api of twitter to get tweets from assigned hashtags. Need to be done before April of 2023.',
      publisher: 'Boss chen',
      money: '3,000',
      progress: 56,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The script should be easy to use, with clear and concise documentation and user input validation.It should handle errors and exceptions gracefully, providing clear error messages for troubleshooting.',
    },
  ],
  // workerHistoryOrder -- 我的订单-历史订单(角色：打工人)
  workerHistoryOrder: [
    {
      id: 9,
      name: 'Design a logistical management system.',
      description: 'Design a logistical management system which has characteristics such as real-time data processing, visualization, multiple-role management and scalability.',
      publisher: 'Boss He',
      money: '10,000',
      progress: '10',
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The system should be able to manage logistics operations, such as shipment scheduling, inventory management, and order tracking.It should provide real-time visibility into the status of shipments, inventory levels, and order fulfillment.',
    },
    {
      id: 10,
      name: 'Develop an online education platform',
      description: 'Develop an online education platform where there exist functions such as courses release, students registration, study videos, online tests and grades management',
      publisher: 'Boss Liu',
      money: '26,000',
      progress: '90',
      time: '2022/01/12-2022/02/22',
      taskStatus: true,
      status: 3,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The platform should offer a wide range of courses and classes, covering various topics and levels of difficulty.It should have an intuitive user interface with easy navigation and search functionality.',
    },
    {
      id: 11,
      name: 'Develop a social media app.',
      description: 'Support functions such as users log-in, personal profile, messages sending, posting, following and commenting.',
      publisher: 'Boss Liu',
      money: '20,000',
      progress: '56',
      time: '2022/02/18-2022/03/22',
      taskStatus: true,
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      // explain: '1.巴拉巴拉...',
    },
  ],
  // bossUnderWayOrder -- 我的订单-进行中的订单（角色：发布者）
  bossUnderWayOrder: [
    {
      id: 12,
      name: 'Develop Shopping Websites.',
      description: 'Develop a shopping website for Nike, requesting a product which has a webpage and payment interface. Need to use spring boot frame.',
      publisher: 'Boss Li',
      money: '200,000',
      progress: 10,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The completion deadline for the development of the website is within six months from now.The technologies to be used include HTML, CSS, JavaScript, a CMS such as Magento or Shopify, and possibly a web framework such as React or Angular.',
      
    },
    {
      id: 13,
      name: 'Develop wechat mini programs.',
      description: 'Develop a wechat mini program for Aipai photo studio. Need to realize functions of showing information, reservation and payment.',
      publisher: 'Boss Jia',
      money: '60,000',
      progress: 90,
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'The mini program should have a content management system (CMS) that allows for easy updates and modifications to products and content.It should be optimized for search engines and have high-quality content that is regularly updated.',
    },
  ],
  // bossHistoryOrder -- 我的订单-历史订单(角色：发布者)
  bossHistoryOrder: [
    {
      id: 14,
      name: 'Design a logistical management system.',
      description: 'Design a logistical management system which has characteristics such as real-time data processing, visualization, multiple-role management and scalability.',
      publisher: 'Boss He',
      money: '10,000',
      progress: '10',
      time: '2022/01/11-2022/05/12',
      taskStatus: true, 
      status: 2,
      skill: 'Vue, Linux', // 需要的技能
      creditScore: '10', // 信誉分
      skillScore: '10', // 技能分
      payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
      explain: 'It should be able to handle different modes of transportation, such as air, land, and sea.The system should support third-party logistics (3PL) providers and integrate with their systems.',
    },
  ],
  // workerHomeData -- 打工者 Home
  workerHomeData: {
    name: 'Lulu',
    eth: 22,
    crt: 33,
    ongoing: 4,
    commented: 5,
    creditScore: 99,
    SkillScore: 22
  },
  // bossHomeData -- 发布者 Home
  bossHomeData: {
    name: 'Boss Li',
    eth: 66,
    crt: 77,
    ongoing: 8,
    commented: 9,
  }
}
