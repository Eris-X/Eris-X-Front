<template>
  <div class="wallet">
    <div class="container">
      <div class="my">
        <h4 style="margin: 0 0 20px;font-size: 20px;">我的钱包地址: 0x4395****745</h4>
        <div class="card-container">
          <div class="card">
            <div>余额：100usdt</div>
            <div>已质押：100usdt</div>
          </div>
          <div class="card">
            <div>总收入：100usdt</div>
          </div>
        </div>
      </div>
      <div class="detail">
        <h4 style="margin: 20px 0 20px;font-size: 20px;">收支明细</h4>
        <div class="card-container">
          <div class="card" v-for="item in list" :key="item.id">
            <div class="task">
              <div class="name">{{ item.name }}</div>
              <div class="money">任务收入：{{ item.taskMoney }} usdt</div>
            </div>
            <div class="other">
              <div class="left">
                <div class="boss">发单方：{{ item.publisher }}</div>
                <div class="boss">薪资：{{ item.money }}</div>
                <div class="boss">时间：{{ item.time }}</div>
              </div>
              <div class="right">
                <el-button type="primary">查看任务</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Wallet',
  data() {
    return {
      list: [
        {
          id: 1,
          name: '任务1',
          taskMoney: '100,000',
          publisher: 'AAA',
          money: '100,000',
          time: '2022/01/11-2022/05/12'
        },
        {
          id: 2,
          name: '任务2',
          taskMoney: '90,000',
          publisher: 'Elle',
          money: '90,000',
          time: '2023/01/1-2022/02/12'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.wallet {
  .container {
    padding: 20px;
    font-size: 13px;
    color: #fff;

    .my {
      .card-container {
        display: flex;
        justify-content: space-around;
      }
      .card {
        width: 320px;
        height: 140px;
        border-radius: 20px;
        background: #262c2c url('../../assets/images/card-bg.png') no-repeat center/cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 50px;
      }
    }
    .detail {
      .task {
        display: flex;
        font-size: 18px;
        align-items: center;
        justify-content: space-between;
        background: #262c2c;
        padding: 20px;
      }
      .other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
      }
      .card {
        border: 1px solid #262c2c;
        border-radius: 20px;
        margin-bottom: 20px;
        overflow: hidden;
        &:hover {
          // border: 1px solid #ccc;
          .task {
            background: linear-gradient(to right,#6a9167,#138d89);
          }
        }
      }
    }
  }
}
</style>