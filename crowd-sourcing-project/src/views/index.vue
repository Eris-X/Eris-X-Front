<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <div class="avator-container">
          <div class="avator"></div>
          <span class="name">Lulu</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <div class="database-container">
        <div class="con con1">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <!-- <img src="../assets/images/wallet.png" alt="" width="25px" style="margin-right: 10px"> -->
                <i
                  class="el-icon-wallet"
                  style="font-size:20px; color:#fff; margin-right:5px;"
                />
                <span style="color:#fff; font-size:16px;">余额</span>
              </div>
              <div class="tikuan-btn">
                <i
                  class="el-icon-bank-card"
                  style="font-size:20px; color:#000; margin-right:5px;"
                />
                  <span style="color:#000;">提款</span>
                </div>
            </div>
            <div class="main">
              <div class="eth" style="border-right: 1px solid #262c2c;">
                <span style="color: #fff; font-size: 22px;">0</span>
                <span style="color: #818f8e;">ETH</span>
              </div>
              <div class="usd">
                <span style="color: #fff; font-size: 22px;">30000</span>
                <span style="color: #818f8e;">USD</span>
              </div>
            </div>
          </div>
        </div>
        <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/fans.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">正在进行的订单</span>
              </div>
            </div>
            <div class="main">
              <span>3</span>
            </div>
          </div>
        </div>
        <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/sell.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">验收中</span>
              </div>
            </div>
            <div class="main">
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/nft.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">待评价</span>
              </div>
            </div>
            <div class="main">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

    </el-row>
    <el-row :gutter="20">
      <div style="margin-top: 20px;">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="截止日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="progress"
            label="项目进度"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="项目简介"
            >
          </el-table-column>

        </el-table>
      </div>
    </el-row>
    <!-- <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
      </el-col>

    </el-row> -->
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      tableData: [{
        date: '2023-07-02',
        name: '开发购物网站',
        address: '为耐克公司开发一个购物网站，涉及到产品展示页面以及支付接口。要求使用spring boot框架。',
        progress:'10%'
      }, {
        date: '2023-05-04',
        name: '开发微信小程序',
        address: '为爱拍照相馆开发一个微信小程序，实现信息展示、顾客预约、顾客支付等功能。',
        progress:'90%'
      }, {
        date: '2023-04-01',
        name: '设计一个Python脚本',
        address: '设计一个python脚本调用twitter的api爬取指定话题下的推文，要求在2023.4月前完成',
        progress:'56%'
      }]
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  .col-item {
    margin-bottom: 20px;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  .avator-container {
    display: flex;
    align-items: center;
    .avator {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: url('../assets/images/profile.jpg') no-repeat center/cover;
      margin-right: 15px;
    }
    .name {
      font-size: 24px;
      color: #fff;
    } 
  }

  .database-container {
    display: flex;
  }
  
  .con {
    height: 150px;
    border-radius: 12px;
    margin-top: 10px;
    background: linear-gradient(to right,#6a9167,#138d89);
    padding: 1px;
    &:hover {
      background: linear-gradient(to right,#b3ffac,#12fff7);
    }
    .con-inner {
      width: 100%;
      height: 100%;
      background: #151717;
      padding: 24px 12px 14px 20px;
      border-radius: 12px;
    }
  }

  .con1 {
    width: 35%;
    .title {
      display: flex;
      justify-content: space-between;
    }
    .diff {
      display: flex;
      align-items: center;
    }
    .tikuan-btn {
      background: linear-gradient(to right,#b3ffac,#12fff7);
      border-radius: 16px;
      text-align: center;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      margin-left: auto;
      height: 26px;
      line-height: 26px;
    }
  }
  .con2 {
    flex: 1;
    margin-left: 20px;
    .main {
      justify-content: center;
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
  }
  .diff {
    display: flex;
  }
  .main {
    display: flex;
    margin-top: 30px;
    > div {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

