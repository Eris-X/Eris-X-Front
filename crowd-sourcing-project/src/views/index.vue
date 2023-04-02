<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <div class="avator-container">
          <div :class="['avator', this.user.role==='worker'?'worker':'boss']"></div>
          <span class="name">{{ home.name }}</span>
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
                <span style="color:#fff; font-size:16px;">Balance</span>
              </div>
              <div class="tikuan-btn">
                <i
                  class="el-icon-bank-card"
                  style="font-size:20px; color:#000; margin-right:5px;"
                />
                  <span style="color:#000;">Withdraw</span>
                </div>
            </div>
            <div class="main">
              <div class="eth" style="border-right: 1px solid #262c2c;">
                <!-- <span style="color: #fff; font-size: 22px;">{{this.balance}}</span> -->
                <span style="color: #fff; font-size: 22px;">{{this.home.eth}}</span>
                <span style="color: #818f8e;">LAT</span>
              </div>
              <div class="usd">
                <!-- <span style="color: #fff; font-size: 22px;">{{this.tokenBalance}}</span> -->
                <span style="color: #fff; font-size: 22px;">{{this.home.crt}}</span>
                <span style="color: #818f8e;">CRT</span>
              </div>
            </div>
          </div>
        </div>
        <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/fans.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">Ongoing Task</span>
              </div>
            </div>
            <div class="main">
              <span>{{this.home.ongoing}}</span>
            </div>
          </div>
        </div>
        <!-- <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/sell.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">Checking</span>
              </div>
            </div>
            <div class="main">
              <span>2</span>
            </div>
          </div>
        </div> -->
        <div class="con con2">
          <div class="con-inner">
            <div class="title">
              <div class="diff">
                <img src="../assets/images/nft.png" alt="" width="18px" style="margin-right: 10px">
                <span style="color:#fff; font-size:16px;">To be commented</span>
              </div>
            </div>
            <div class="main">
              <span>{{this.home.commented}}</span>
            </div>
          </div>
        </div>
      </div>

    </el-row>
    <el-row :gutter="20">
      <div style="margin-top: 20px;">
        <el-table
          :data="user.role === 'worker' ? workerTableData : bossTableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Deadline"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Task Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="progress"
            label="Task Progress"
            width="150">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Task Abstract"
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
import Web3 from 'web3'
import abi from '../abi/ERC20.json'
// import BigNumber from 'bignumber.js';
export default {
  name: "Index",
  data() {
    return {
      workerTableData: [{
        date: '2023-07-02',
        name: 'Develop Shopping Websites.',
        address: 'Develop a shopping website for Nike, requesting a product which has a webpage and payment interface. Need to use spring boot frame.',
        progress:'10%'
      }, {
        date: '2023-05-04',
        name: 'Develop wechat mini programs.',
        address: 'Develop a wechat mini program for Aipai photo studio. Need to realize functions of showing information, reservation and payment.',
        progress:'90%'
      }, {
        date: '2023-04-01',
        name: 'Design a Python script.',
        address: 'Design a python script which uses api of twitter to get tweets from assigned hashtags. Need to be done before April of 2023.',
        progress:'56%'
      }],
      // bossTableData: [{
      //   date: '2023-02-02',
      //   name: 'Develop a website',
      //   address: 'Build a Learning Management System for Tech Academy, requiring course management, student enrollment, and assessment tools. Must use Django framework.',
      //   progress:'10%'
      // },
      // {
      //   date: '2023-03-21',
      //   name: 'Develop a E-commerce Platform',
      //   address: 'Develop an E-commerce Platform for WonderMart, requiring integration with multiple payment gateways and an efficient inventory management system. Must use Magento framework',
      //   progress:'50%'
      // },
      // {
      //   date: '2023-04-05',
      //   name: 'Develop a Media App',
      //   address: 'Create a Social Media App for Pet Lovers, requiring user profiles, real-time messaging, and push notifications. Must use React Native framework.',
      //   progress:'70%'
      // }],
      bossTableData: [{
        date: '2023-02-02',
        name: 'Develop Shopping Websites.',
        address: 'Develop a shopping website for Nike, requesting a product which has a webpage and payment interface. Need to use spring boot frame.',
        progress:'10%'
      },
      {
        date: '2023-03-21',
        name: 'Develop wechat mini programs.',
        address: 'Develop a wechat mini program for Aipai photo studio. Need to realize functions of showing information, reservation and payment.',
        progress:'90%'
      }],
      balance:0,
      tokenBalance: 0,
      tokenERCAddr: "0xaE2ABEFFccC28078EbA6EACE997eC52D40135450",
      web3: null,
      ethContract: null,
      allowance: 0,
      chainId: '0x21A9B4',
    };
  },
  computed: {
    user() {
      const role = sessionStorage.getItem('role');
      return JSON.parse(role);
    },
    home() {
      const workerHomeData = JSON.parse(localStorage.getItem('workerHomeData'));
      const bossHomeData = JSON.parse(localStorage.getItem('bossHomeData'));
      return this.user.role === 'worker' ? workerHomeData : bossHomeData;
    }
  },
  mounted() {
    this.initWeb3();
    this.getEthBalance();
    this.getTokenBalance();
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
    async initWeb3() {
      if (typeof window.ethereum !== 'undefined') {
        // 使用 MetaMask
        this.web3 = new Web3(window.ethereum);
        try {
          // 请求用户授权
          await window.ethereum.enable();
        } catch (error) {
          console.error('User denied account access');
        }
      } else if (typeof window.web3 !== 'undefined') {
        // 使用旧版 MetaMask
        this.web3 = new Web3(window.web3.currentProvider);
      } else {
        // 如果用户没有安装 MetaMask，则使用 Infura 作为 Provider
        console.warn('No Web3 detected');
        const provider = new Web3.providers.HttpProvider('https://devnet2openapi.platon.network/rpc', null, { chainId: this.chainId });
        this.web3 = new Web3(provider);
      }
      //切换到platon dev
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.chainId }],
      });
      this.ethContract = await new this.web3.eth.Contract(abi, this.tokenERCAddr) //所有代币的abi可以通用（abi,合约地址）
    },
    ConnectWallet() {  // 链接钱包
      if (window.ethereum) {
        window.ethereum.enable().then((res) => {
          this.walletAddress = res[0];
          // alert("当前钱包地址:" + res[0]);
        });
      } else {
        alert("请安装MetaMask钱包");
      }
    },
    //查询代币余额
    async getEthBalance() {
      if (window.ethereum) {
        let fromAddress = await this.web3.eth.getAccounts()
        this.web3.eth.getBalance(fromAddress[0], (err, res) => {
          if (!err) {
            this.balance = res / Math.pow(10, 18);
          }
        })
      }
    },
    //查询代币余额
    async getTokenBalance() {
      this.ethContract = await new this.web3.eth.Contract(abi, this.tokenERCAddr) //所有代币的abi可以通用（abi,合约地址）
      if (this.ethContract) {
        let accounts = await this.web3.eth.getAccounts();
        let decimals = await this.ethContract.methods.decimals().call();
        this.tokenBalance = await this.ethContract.methods.balanceOf(accounts[0]).call() / Math.pow(10, decimals);
        console.log(this.tokenBalance)
      }
    },
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
      // background: url('../assets/images/monkey.jpeg') no-repeat center/cover;
      margin-right: 15px;
      &.worker {
        background: url('../assets/images/monkey.jpeg') no-repeat center/cover;
      }
      &.boss {
        background: url('../assets/images/bossLi.png') no-repeat center/cover;
      }
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

