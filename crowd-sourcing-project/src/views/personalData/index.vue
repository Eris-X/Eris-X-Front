<template>
  <div class="personal-data">
    <div class="intro">
      <div class="left">
        <div class="photo"></div>
        <div class="user">
          <div>
            用户名：
            <el-input v-if="editUserName" v-model="userName" @blur="() => editUserName = false"></el-input>
            <span v-else @click="() => editUserName = true">
              <span class="content">{{ userName }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i>
            </span>
          </div>

          <div>
            个人简介设置：
            <el-input v-if="editDes" v-model="des" @blur="() => editDes = false"></el-input>
            <span v-else @click="() => editDes = true">
              <span class="content">{{ des }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i></span>
          </div>

          <div>
            <a href="">linktree链接</a>
          </div>

          <div>
            工作语言：
            <el-select v-if="editLang" v-model="lang" @change="() => editLang = false" multiple>
              <el-option label="中文" value="中文"></el-option>
              <el-option label="英文" value="英文"></el-option>
              <el-option label="法语" value="法语"></el-option>
            </el-select>
            <span v-else @click="() => editLang = true">
              <span class="content">{{ lang.join(',') }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="inner">
          <div class="title">擅长技能</div>
          <div class="skill-icon">
            <img src="../../assets/images/vue.png" width="32px" alt="">
            <img src="../../assets/images/js.png" width="32px" alt="">
            <img src="../../assets/images/java.png" width="32px" alt="">
            <img src="../../assets/images/python.png" width="32px" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="history">
      <div v-for="item in list" :key="item.id" class="container">
        <div class="name">
          <img src="../../assets/images/progress.png" alt="" width="40" style="margin-right: 10px;">
          {{ item.name }}
        </div>
        <div class="des">{{ item.des }}</div>
        <div class="btn">
          <el-button type="primary">链接：github</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalData',
  data() {
    return {
      userName: 'Lulu',
      editUserName: false,
      des: '我是个人简介，我是个人简介，我是个人简介，我是个人简介，我是个人简介，我是个人简介，我是个人简介',
      editDes: false,
      lang: ['中文', '英文'],
      editLang: false,
      list: [
        {
          id: 1,
          name: '成果名称1',
          des: '我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，'
        },
        {
          id: 2,
          name: '成果名称22',
          des: '我是成果内容描述222222，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述22222，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述，简单介绍，我是成果内容描述22222，简单介绍，我是成果内容描述，简单介绍，'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.personal-data {
  display: flex;
  color: #fff;
  font-size: 13px;
  flex-direction: column;
  .intro {
    height: 150px;
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #1a1f1f;
    .left {
      width: 50%;
      display: flex;
      .photo {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: url('../../assets/images/profile.jpg') no-repeat center/cover;
      }
      .user {
        flex: 1;
        margin-left: 25px;
        display: flex;
        flex-direction: column;
        > div {
          margin-bottom: 10px;
        }
      }
      .content {
        color: #aaa;
      }
    }
    .right {
      flex: 1;
      background:#171c1c;
      height: 100%;
      display: flex;
      margin-left: 50px;
      border-radius: 30px;
      .inner {
        padding: 14px 20px;
        .title {
          font-size: 20px;
          font-weight: 500;
        }
        .skill-icon {
          margin-top: 25px;
          > img {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .history {
    margin-top: 20px;
    .container {
      padding: 18px 24px;
      border: 1px solid #333D3C;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    .name {
      margin-bottom: 10px;
      font-size: 20px;
      display: flex;
      align-items: center;
    }
    .des {
      margin-bottom: 30px;
      color: rgb(167, 168, 168);
    }
    .btn {
      text-align: right;
    }
  }
}
</style>