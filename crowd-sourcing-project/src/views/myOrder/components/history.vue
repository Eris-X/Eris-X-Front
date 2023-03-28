<template>
  <div class="history">
    <div class="task" v-for="item in taskList" :key="item.id">
      <!-- <div class="task-left" style="margin-right: 30px;"> -->
        <div class="name mb10">
          <div class="left">
            <img
              class="mask"
              src="../../../assets/images/progress.png"
              alt=""
              width="40px"
              style="margin-right: 10px;"
            >
            <span style="font-size: 20px; font-weight: 700;">{{ item.name }}</span>
          </div>
          <div class="right">
            <div v-if="item.status" style="display: flex;">
              <i
                class="el-icon-success"
                style="color:#41deca;margin-right:10px;font-size:20px;font-weight: 700;"
              ></i>已完成
            </div>
            <div v-if="!item.status" style="display: flex;">
              <i
                class="el-icon-error"
                style="color:red;margin-right:10px;font-size:20px;font-weight: 700;"
              ></i>失败
            </div>
          </div>
        </div>
        <div class="des mb10" style="color: #a7a8a8;">{{ item.des }}</div>
        <div class="bottom mb10">
          <div class="left">
            <div class="publisher">发单方：{{ item.publisher }}</div>
            <div class="money" style="margin-left:10px;">薪资：{{ item.money }}</div>
            <div class="money" style="margin-left:10px;">时间：{{ item.time }}</div>
          </div>
          <div class="right">
            <!-- <div class="progress">项目进度：{{ item.progress }}</div> -->
            <el-button type="primary" style="margin-left:10px;" @click="viewDetail">查看详情</el-button>
          </div>
        </div>
      <!-- </div> -->
      <!-- <div class="task-right">
        <el-progress
          type="circle"
          :percentage="item.progress"
          define-back-color="#333D3C"
          color="#41deca"
        ></el-progress>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'History',
  data() {
    return {
      taskList: [
        {
          id: 1,
          name: '设计一个物流管理系统',
          des: '设计一个物流管理系统，该系统需要具备实时数据处理和可视化展示、多角色权限管理和可扩展性等特性。',
          publisher: '何老板',
          money: '10,000',
          progress: '10',
          time: '2022/01/11-2022/05/12',
          status: true
        },
        {
          id: 2,
          name: '开发一个在线教育平台',
          des: '开发一个在线教育平台，需要有教师发布课程、学生注册、学习视频、在线测试、成绩管理等功能。',
          publisher: '刘老板',
          money: '26,000',
          progress: '90',
          time: '2022/01/12-2022/02/22',
          status: false
        },
        {
          id: 3,
          name: '设计一个社交媒体应用',
          des: '支持用户登录、个人资料、消息发送、帖子发布、点赞和评论等功能。',
          publisher: '刘老板',
          money: '20,000',
          progress: '56',
          time: '2022/02/18-2022/03/22',
          status: true
        },
      ]
    }
  },
  methods: {
    viewDetail() {
      this.$router.push('/task-detail')
    }
  }
}
</script>
<style lang="scss" scoped>
.history {
  .task {
    color: #fff;
    font-size: 13px;
    border-radius: 8px;
    border: 1px solid;
    padding: 8px 12px;
    border: 1px solid #333D3C;
    margin-bottom: 10px;
    // display: flex;
    // align-items: center;
    &:hover {
      border-color: #41deca;
    }
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
    }
    .right {
      display: flex;
      align-items: center;  
    }
  }
}
</style>