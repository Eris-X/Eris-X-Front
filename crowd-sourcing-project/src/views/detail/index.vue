<template>
  <div class="detail-page">
    <span style="color: #888;cursor: pointer;" @click="back"><i class="el-icon-arrow-left"></i>Back</span>
    <div class="contain">
      <div class="title">
        <img src="../../assets/images/detail-title.png" alt="" width="200px" style="margin-bottom: 20px;">
        <div class="name">{{ list.name }}</div>
        <div class="status">
          <span :class="{ 'is-active': list.status === 0 }">Not Started</span>/
          <span :class="{ 'is-active': list.status === 1 }">Ongoing</span>/
          <span :class="{ 'is-active': list.status === 2 }">Done</span>/
          <span :class="{ 'is-active': list.status === 3 }">Fail</span>
        </div>
      </div>
      <div class="inner">
        <div class="des">{{ list.description }}</div>
        <div class="skill">
          <span class="center">
            <star />Skills needed: {{ list.skill }}
          </span>
          <span class="center">
            <!-- <star />Reputation & Skill needed:Reputation Credits:{{ list.creditScore }} Skill needed:{{ list.skillScore }} -->

            <star />Reputation Credits:{{ list.creditScore }}
          </span>
          <span>
            <star/>Skill Credits:{{ list.skillScore }}
          </span>
        </div>
        <div class="rule center">
          <star />Pay method： {{ list.payRule }}
        </div>
        <div class="explain">
          <div class="center">
            <star />Demand information:
          </div>
          <div>{{ list.explain }}</div>
        </div>
        <div class="publisher">
          <div class="left center">
            <star />Issuer:{{ list.publisher }}
            <star />Salary:{{ list.money }}
            <star />Date:{{ list.time }}
          </div>
          <div class="right">
            <el-button v-if="user.role === 'issuer'" type="primary">Submit Task</el-button>
            <el-button v-if="user.role === 'worker' && list.status === 0" type="primary"
              @click="receiveTask">Accept Task</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Star from './components/star.vue'
import Web3 from 'web3'
import abi from '../../abi/Project.json'
export default {
  name: 'TaskDetail',
  components: {
    Star
  },
  computed: {
    user() {
      return JSON.parse(sessionStorage.getItem('role'))
    }
  },
  data() {
    return {
      list: {
        //   name: '任务名111',
        //   status: 1, // 进行中-1，已完成-2，失败-3
        //   des: '我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述我是任务描述',
        //   skill: 'java,javascript',
        //   creditScore: 30,
        //   skillScore: 50,
        //   payRule: 1, // 订单/尾款-1， 里程碑付款-2， 一次性付款-3
        //   explain: '1.巴拉巴拉...',
        //   publisher: 'Coco',
        //   money: '100,000',
        //   time: '2022/03/12-2022/04/11'
      },
      balance:0,
      tokenBalance: 0,
      projectAddr: "0xaE2ABEFFccC28078EbA6EACE997eC52D40135450",
      web3: null,
      ethContract: null,
      allowance: 0,
      chainId: '0x21A9B4',
    }
  },
  created() {
    // if (this.$route.params) {
    //   const detail = this.$route.params;
    //   detail.payRule = detail.payRule === 1 ? '订单/尾款' : (
    //     detail.payRule === 2 ? '里程碑付款' : (
    //       detail.payRule === 3 ? '一次性付款' : ''
    //     )
    //   )
    //   this.list = detail;
    // }
    if (this.$route.params) {
      const detail = this.$route.params;
      detail.payRule = detail.payRule === 1 ? 'Deposit & Final Payment ' : (
        detail.payRule === 2 ? 'Milestone Payment' : (
          detail.payRule === 3 ? 'One-time Payment' : ''
        )
      )
      this.list = detail;
    }
  },
  mounted() {
    this.initWeb3();
  },
  methods: {
    async submitPorjectTochain() {
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
      this.ethContract.methods.saveEvidence("current.id","current.id").send(options);
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
    },
    back() {
      this.$router.go(-1);
    },
   async receiveTask() {

      await this.submitPorjectTochain();
      // 删除 任务大厅
      const oldTaskList = JSON.parse(sessionStorage.getItem('taskHall'));
      const index = oldTaskList.findIndex(item => item.id === this.list.id);
      if (index === -1) return;
      oldTaskList.splice(index, 1);
      sessionStorage.setItem('taskHall', JSON.stringify(oldTaskList));
      // 新增到 我的订单-进行中的订单
      const myNewTask = this.list;
      const myOrder = JSON.parse(sessionStorage.getItem('underWayOrder'));
      myOrder.unshift(myNewTask);
      sessionStorage.setItem('underWayOrder', JSON.stringify(myOrder));

      this.$message.success('任务已接收，请到我的订单中查看', {
        // duration控制弹窗关闭时间
        duration: 5000
      });

      // 按照业务场景，我给出以下方案，仅供参考：
      // 第一，如果想要返回【任务大厅】打开this.back(),否则注释
      this.back();
      // 第二，如果任务已接收，想要直接跳转到我的订单，请打开以下注释
      // this.$router.push('/my-order');

    }
  }
}
</script>
<style lang="scss" scoped>
.detail-page {
  font-size: 14px;
  color: #fff;
  padding: 30px 40px;

  .contain {
    margin-top: 20px;
    padding: 20px;
    background: #171c1c;
    border-radius: 20px;

    .inner {
      // padding: 20px;
      // background: #171c1c;
      // border-radius: 20px;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      .name {
        font-size: 30px;
        margin-bottom: 15px;
      }
    }

    .des {
      line-height: 24px;
      margin-bottom: 20px;
    }

    .skill {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .rule {
      margin-bottom: 20px;
    }

    .explain {
      margin-bottom: 20px;
    }

    .publisher {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .center {
    display: flex;
    align-items: center;
  }

  .status {
    color: #333D3C;

    .is-active {
      color: #41deca;
      font-weight: 500;
    }
  }
}</style>