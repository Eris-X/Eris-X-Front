<template>
  <div class="under-way">
    <div class="task" v-for="item in taskList" :key="item.id">
      <div class="task-left" style="margin-right: 30px;">
        <div class="name mb10">
          <img
            class="mask"
            src="../../../assets/images/progress.png"
            alt=""
            width="40px"
            style="margin-right: 10px;"
          >
          <span style="font-size: 20px; font-weight: 700;">{{ item.name }}</span>
        </div>
        <div class="des mb10" style="color: #a7a8a8;">{{ item.des }}</div>
        <div class="bottom mb10">
          <div class="left">
            <div class="publisher">发单方：{{ item.publisher }}</div>
            <div class="money" style="margin-left:10px;">薪资：{{ item.money }}</div>
          </div>
          <div class="right">
            <!-- <div class="progress">项目进度：{{ item.progress }}</div> -->
            <el-button type="primary" style="margin-left:10px;">提交里程碑</el-button>
          </div>
        </div>
      </div>
      <div class="task-right">
        <el-progress
          type="circle"
          :percentage="item.progress"
          define-back-color="#333D3C"
          color="#41deca"
        ></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UnderWay',
  data() {
    return {
      taskList: [
        {
          id: 1,
          name: '任务名称1',
          des: '我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目',
          publisher: 'AA',
          money: '10,000',
          progress: 10
        },
        {
          id: 2,
          name: '任务名称2',
          des: '我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目',
          publisher: 'BB',
          money: '26,000',
          progress: 90
        },
        {
          id: 3,
          name: '任务名称3',
          des: '我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目，我是一个很厉害的项目',
          publisher: 'BB',
          money: '2,000',
          progress: 56
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.under-way {
  .task {
    color: #fff;
    font-size: 13px;
    border-radius: 8px;
    border: 1px solid;
    padding: 8px 12px;
    border: 1px solid #333D3C;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
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