<template>
  <div class="navbar">
    <div class="right-menu">
      <span style="color: #aaa;font-size:12px;margin-right: 15px;">Role:{{ user.role }}</span>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../assets/images/monkey.jpeg" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/personal-data">
            <el-dropdown-item>Personal Profile</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span>Log out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import abi from '../../abi/ERC20.json'
// import BigNumber from 'bignumber.js';

export default {
  mounted() {
    this.initWeb3();
  },
  computed: {
    user() {
      const role = sessionStorage.getItem('role');
      return JSON.parse(role);
    }
  },
  data() {
    return {
      balance:0,
      tokenBalance: 0,
      tokenERCAddr: "0xaE2ABEFFccC28078EbA6EACE997eC52D40135450",
      web3: null,
      ethContract: null,
      allowance: 0,
      chainId: '0x21A9B4',
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
        const provider = new Web3.providers.HttpProvider('https://devnet2openapi.platon.network/rpc', null, { chainId: this.chainId });
        this.web3 = new Web3(provider);
      }
      //切换到platon dev
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.chainId }],
      });
      this.ethContract = new this.web3.eth.Contract(abi, this.tokenERCAddr) //所有代币的abi可以通用（abi,合约地址）
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
      if (this.ethContract) {
        let accounts = await this.web3.eth.getAccounts()
        let decimals = await this.ethContract.methods.decimals().call()
        this.tokenBalance = await this.ethContract.methods.balanceOf(accounts[0]).call() / Math.pow(10, decimals)
      }
    },
    async logout() {
      this.$confirm('Are you sure log out?', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        sessionStorage.clear();
        this.$router.push('/login');
      }).catch(() => { });
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #121212;
  border-bottom: 1px solid #1a1f1f;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
