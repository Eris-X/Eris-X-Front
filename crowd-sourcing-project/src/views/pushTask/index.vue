<template>
  <div class="push-task">
    <el-form ref="form" :model="form" label-width="120px" class="form">
      <el-form-item label="Task name">
        <el-input v-model="form.name" style="width: 300px;"></el-input>
      </el-form-item>
      <el-form-item label="Skills needed">
        <el-select
          v-model="form.skill"
          placeholder="Please select skill wanted"
          multiple
        >
          <el-option label="java" value="java"></el-option>
          <el-option label="javascript" value="javascript"></el-option>
          <el-option label="c++" value="c++"></el-option>
          <el-option label="python" value="python"></el-option>
          <el-option label="go" value="go"></el-option>
          <el-option label="c" value="c"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Reputation credits threshold">
        <el-input v-model="form.creditScore" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="Skill credits threshold">
        <el-input v-model="form.skillScore" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="Pay method">
        <el-select
          v-model="form.payRule"
          placeholder="Please select pay method"
        >
          <el-option label="Deposit & Final Payment" value="1"></el-option>
          <el-option label="Milestone Payment" value="2"></el-option>
          <el-option label="One-time Payment" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Salary">
        <el-input v-model="form.money" style="width: 220px;"></el-input>
      </el-form-item>
      <el-form-item label="Task Abstract">
        <el-input type="textarea"  :autosize="{ minRows: 3, maxRows: 6}" v-model="form.intro" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="Demand information">
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="form.description" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" >Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Web3 from 'web3'
import abi from '../../abi/Project.json'
export default {
  name: 'PushTask',
  data() {
    return {
      form: {
        name: '', // 任务名称
        skill: [], // 技能需求
        creditScore: '', // 信誉分门槛
        skillScore: '', // 技能分门槛
        payRule: '', // 支付规则
        money: '', // 薪资
        intro: '', // 任务介绍
        description: '', // 需求说明
        publisher: 'Lulu', // 发布方
        time: '2023/04/12-2023/06/15'
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
  mounted() {
    this.initWeb3();
  },
  methods: {
    onSubmit() {
      this.submitPorjectTochain();
      console.log('submit!', this.form);
      const params = {
        ...this.form,
        skill: this.form.skill.join(),
      }

      // 加到 任务大厅
      const taskHall = JSON.parse(localStorage.getItem('taskHall'));
      taskHall.unshift(params);
      localStorage.setItem('taskHall', JSON.stringify(taskHall));

      // 加到 任务大厅
      const bossUnderWayOrder = JSON.parse(localStorage.getItem('bossUnderWayOrder'));
      bossUnderWayOrder.unshift(params);
      localStorage.setItem('bossUnderWayOrder', JSON.stringify(bossUnderWayOrder));

      setTimeout(() => {
        this.$message.success('任务发布成功，请前往任务大厅或我的订单查看！', {
          duration: 5000
        });
      }, 5000);
    },
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .push-task {
    padding: 20px 30px;
    background: #171c1c;
    border-radius: 20px;
    margin-top: 12px;
    margin-left: 00px;
    margin-right: 00px;

  }
  .form{
    margin-left: 350px;
    margin-right: 200px;

  }
</style>