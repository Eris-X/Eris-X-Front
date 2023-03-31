<template>
  <div class="history">
    <div class="task" v-for="item in taskList" :key="item.id">
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
            <div v-if="item.taskStatus" style="display: flex;">
              <i
                class="el-icon-success"
                style="color:#41deca;margin-right:10px;font-size:20px;font-weight: 700;"
              ></i>Done
            </div>
            <div v-if="!item.taskStatus" style="display: flex;">
              <i
                class="el-icon-error"
                style="color:red;margin-right:10px;font-size:20px;font-weight: 700;"
              ></i>fail
            </div>
          </div>
        </div>
        <div class="des mb10" style="color: #a7a8a8;">{{ item.description }}</div>
        <div class="bottom mb10">
          <div class="left">
            <div class="publisher">Issuer:{{ item.publisher }}</div>
            <div class="money" style="margin-left:10px;">Salary:{{ item.money }}</div>
            <div class="money" style="margin-left:10px;">Date:{{ item.time }}</div>
          </div>
          <div class="right">
            <el-button type="primary" style="margin-left:10px;" @click="viewDetail(item)">Detail</el-button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'History',
  data() {
    return {
      // taskList: [
      //   {
      //     id: 1,
      //     name: 'Design a logistical management system.',
      //     des: 'Design a logistical management system which has characteristics such as real-time data processing, visualization, multiple-role management and scalability. ',
      //     publisher: 'Boss He',
      //     money: '10,000',
      //     progress: '10',
      //     time: '2022/01/11-2022/05/12',
      //     status: true
      //   },
      //   {
      //     id: 2,
      //     name: 'Develop an online education platform',
      //     des: 'Develop an online education platform where there exist functions such as courses release, students registration, study videos, online tests and grades management.',
      //     publisher: 'Boss Liu',
      //     money: '26,000',
      //     progress: '90',
      //     time: '2022/01/12-2022/02/22',
      //     status: false
      //   },
      //   {
      //     id: 3,
      //     name: 'Develop a social media app.',
      //     des: 'Support functions such as users log-in, personal profile, messages sending, posting, following and commenting.',
      //     publisher: 'Boss Liu',
      //     money: '20,000',
      //     progress: '56',
      //     time: '2022/02/18-2022/03/22',
      //     status: true
      //   },
      // ]
    }
  },
  computed: {
    taskList() {
      const historyOrder = sessionStorage.getItem('historyOrder');
      return JSON.parse(historyOrder);
    },
  },
  methods: {
    viewDetail(arg) {
      this.$router.push({
        name: 'TaskDetail',
        params: {
          status: 2,
          ...arg
        }
      })
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