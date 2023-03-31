<template>
  <div class="wallet">
    <div class="container">
      <div class="my">
        <h4 style="margin: 0 0 20px;font-size: 20px;">我的钱包地址: {{ walletAddress }}</h4>
        <button @click="ConnectWallet">连接钱包</button>
        <button @click="getTokenBalance">查余额</button>
        <button @click="tokenTransfer">转账代币</button>
        <button @click="signMessage">签名</button>
        <button @click="getAllowance">查询授权金额</button>
        <button @click="getApprove">授权</button>


        <div class="card-container">
          <div class="card">
            <div>Balance:{{tokenBalance}}</div>
            <div>Authorized quota:{{allowance}}</div>
            <div>Deposit: 100usdt</div>
          </div>
          <div class="card">
            <div>Total income: 30000 usdt</div>
          </div>
        </div>
      </div>
      <div class="detail">
        <h4 style="margin: 20px 0 20px;font-size: 20px;">Revenue and expenditure details</h4>
        <div class="card-container">
          <div class="card" v-for="item in list" :key="item.id">
            <div class="task">
              <div class="name">{{ item.name }}</div>
              <div class="money">Task income:{{ item.taskMoney }} usdt</div>
            </div>
            <div class="other">
              <div class="left">
                <div class="boss">Issuer: {{ item.publisher }}</div>
                <div class="boss">Salary:{{ item.money }}</div>
                <div class="boss">date:{{ item.time }}</div>
              </div>
              <div class="right">
                <el-button type="primary">task detail</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Web3 from 'web3'
import abi from '../../abi/ERC20.json'
import BigNumber from 'bignumber.js';
export default {
  name: 'Wallet',
  mounted() {
    this.initWeb3();
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Design a logistical management system',
          taskMoney: '10,000',
          publisher: 'Boss He',
          money: '10,000',
          time: '2022/01/11-2022/05/12'
        },
        {
          id: 2,
          name: 'Design a social media application',
          taskMoney: '20,000',
          publisher: 'Boss Liu',
          money: '20,000',
          time: '2022/02/18-2022/03/22'
        },
      ],
      walletAddress: "",
      tokenBalance:0,
      tokenERCAddr:"0xaE2ABEFFccC28078EbA6EACE997eC52D40135450",
      web3: null,
      ethContract:null,
      allowance:0,
      chainId:'0x21A9B4',
    }
  },
  methods: {
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
        const provider = new Web3.providers.HttpProvider('https://devnet2openapi.platon.network/rpc', null, {chainId: this.chainId});
        this.web3 = new Web3(provider);
      }
      //切换到platon dev
      await  window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.chainId}],
      });
      this.ethContract = new this.web3.eth.Contract(abi, this.tokenERCAddr) //所有代币的abi可以通用（abi,合约地址）
    },
    getData() {
      console.log('first')
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
    async getTokenBalance() {
      if (this.ethContract) {
        let accounts = await this.web3.eth.getAccounts()
        let decimals = await this.ethContract.methods.decimals().call()
        this.tokenBalance = await this.ethContract.methods.balanceOf(accounts[0]).call() / Math.pow(10, decimals)
      }
    },
    //token转账
    async tokenTransfer() {
      let accounts = await this.web3.eth.getAccounts()
      let decimals = await this.ethContract.methods.decimals().call()
      let amount = new BigNumber(1 * Math.pow(10, decimals));
      const maxUint256 = new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
      if (amount.gt(maxUint256)) {
        console.error('Amount exceeds maximum uint256 value.');
        return;
      }

      let toAddress = "0x9eBd6e81941FB5df5f22A4dBB3735f4e53280E68";
      console.log(accounts[0])
      let options = {
        from: accounts[0], // 发送者的地址
      };
      await this.ethContract.methods.transfer(toAddress, amount).send(options)
    },
    async signMessage() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          // 请求用户授权
          await window.ethereum.enable();
          // 发送签名请求
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          const account = accounts[0];
          const signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [
              'Hello, world!',
              account
            ]
          });
          console.log('Signature: ', signature);
        } catch (error) {
          console.error('User denied account access');
        }
      } else {
        console.error('Web3 not found');
      }
    },
    //查询授权金额
    async getAllowance(){
      if(window.web3) {
        let accounts = await this.web3.eth.getAccounts()
        let decimals = await this.ethContract.methods.decimals().call()
        this.allowance = await this.ethContract.methods.allowance(accounts[0],this.tokenERCAddr).call()/Math.pow(10,decimals)
      }
    },

    //授权
    async getApprove() {
      if (window.web3) {
        let decimals = await this.ethContract.methods.decimals().call()
        let amount =new BigNumber(100 * Math.pow(10, decimals));//转账100个
        //小狐狸账户
        let accounts = await this.web3.eth.getAccounts()
        this.ethContract.methods.approve(this.tokenERCAddr, amount + '').send({from: accounts[0]})
      }
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