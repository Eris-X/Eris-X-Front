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
        <div class="des mb10" style="color: #a7a8a8;">{{ item.description }}</div>
        <div class="bottom mb10">
          <div class="left">
            <div class="publisher">Issuer：{{ item.publisher }}</div>
            <div class="money" style="margin-left:10px;">Salary：{{ item.money }}</div>
          </div>
          <div class="right">
            <!-- <div class="progress">项目进度：{{ item.progress }}</div> -->
            <el-button v-if="user.role === 'worker'" type="primary" style="margin-left:10px;" @click="beforeSubmit(item)">Submit</el-button>
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
    <el-dialog
      :title="``"
      :visible.sync="dialogFormVisible"
      width="480px"
      custom-class="url-dialog"
    >
      <div style="width:60px;">URL: </div><el-input v-model="url" placeholder="请输入URL"></el-input>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Web3 from 'web3'
import abi from '../../../abi/Project.json'
export default {
  name: 'UnderWay',
  created() {
    const workerUnderWayOrder = localStorage.getItem('workerUnderWayOrder');
    const bossUnderWayOrder = localStorage.getItem('bossUnderWayOrder');
    this.taskList = this.user.role === 'worker' ? JSON.parse(workerUnderWayOrder) : JSON.parse(bossUnderWayOrder);
  },
  computed: {
    user() {
      const role = sessionStorage.getItem('role');
      return JSON.parse(role);
    }
  },
  data() {
    return {
      taskList: [],
      balance:0,
      tokenBalance: 0,
      projectAddr: "0xaE2ABEFFccC28078EbA6EACE997eC52D40135450",
      web3: null,
      ethContract: null,
      allowance: 0,
      chainId: '0x21A9B4',
      dialogFormVisible: false,
      current: {},
      url: ''
    }
  },
  mounted() {
    this.initWeb3();
  },
  methods: {
     async submitPorjectTochain(current){
      let accounts = await this.web3.eth.getAccounts();
      console.log(accounts)
      let options = {
        from: accounts[0], // 发送者的地址
      };
      this.ethContract = new this.web3.eth.Contract(abi, this.projectAddr, {
        from: accounts[0], // default from address
        gasLimit: 70000,
        gasPrice: 1000000000 // default gas price in wei, 10 gwei in this case
      });
      this.ethContract.methods.saveEvidence(current.id,current.id).send(options);
    },

    beforeSubmit(current) {
      this.dialogFormVisible = true;
      this.current = current;
    },

    async submit() {
      const current = this.current;
      try {
        await this.submitPorjectTochain(current);
      } catch (err) {
        console.log(err);
      } finally {
        // 删除 当前进行中的订单
        const index = this.taskList.findIndex(item => item.id === current.id);
        if (index === -1) {
          // 删除失败了，给了个友情提示
          this.$message.error('当前网络异常，请稍后重试...', {
            duration: 5000
          });
        } else {
          setTimeout(() => {
            this.taskList.splice(index, 1);
            localStorage.setItem('workerUnderWayOrder', JSON.stringify(this.taskList));
    
            // 新增 历史订单
            const workerHistoryOrder = JSON.parse(localStorage.getItem('workerHistoryOrder'));
            workerHistoryOrder.unshift(current);
            localStorage.setItem('workerHistoryOrder', JSON.stringify(workerHistoryOrder));

            // 提交成功后，更新home、信誉分、技能分
            const workerHomeData = JSON.parse(localStorage.getItem('workerHomeData'));
            workerHomeData.crt += 10;
            workerHomeData.ongoing -= 1;
            workerHomeData.commented += 1;
            workerHomeData.creditScore += 10;
            workerHomeData.SkillScore += 5;
            localStorage.setItem('workerHomeData', JSON.stringify(workerHomeData));

            this.$message.success('The task has been submitted. Please check it in the Historical Tasks.', {
            // duration控制弹窗关闭时间
            duration: 5000
          });
          }, 5000);
        }
        this.dialogFormVisible = false;
      }
      
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
      this.ethContract = new this.web3.eth.Contract(abi, this.projectAddr) //所有代币的abi可以通用（abi,合约地址）
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
    justify-content: space-between;
    &:hover {
      border-color: #41deca;
    }
  }
  .task-left {
    flex: 1;
    width: 80%;
    .des {
      word-break: break-word;
    }
  }
  .task-right {
    width: 145px;
    margin-left: 30px;
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
<style lang="scss">
.url-dialog {
  background: #1a1f1f;
  .el-dialog__body {
    display: flex;
    align-items: center;
  }
}
</style>