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
      des: '我是一名前端程序员，具备扎实的HTML、CSS和JavaScript等技术基础，擅长使用Vue前端框架开发各种类型的应用程序，了解Java与Python。我喜欢探索新的技术和工具，具备良好的自学能力和团队合作能力。我注重代码质量和用户体验，能够快速迭代和优化应用程序，同时也善于沟通和协作，能够与团队成员和客户保持良好的合作关系。',
      editDes: false,
      lang: ['中文', '英文'],
      editLang: false,
      list: [
        {
          id: 1,
          name: '参与开发可可论坛',
          des: '该项目是一个使用Vue前端框架与Spring boot开发的社交媒体应用。该应用可以实现用户注册、登录、个人资料、消息发送、帖子发布、点赞和评论等功能，具备良好的用户界面设计和交互体验。该前端应用与后端API集成，能够处理复杂的数据交互和状态管理，支持实时通知和搜索功能。'
        },
        {
          id: 2,
          name: '参与牛课前端开发',
          des: '该项目是一个使用Vue前端框架与Django开发的在线教育平台。该平台可以实现教师发布课程、学生注册、学习视频、在线测试、成绩管理等功能，具备良好的用户界面设计和易用性。该前端应用与后端API集成，能够处理大量的数据处理和业务逻辑，支持多种课程类型和学习方式。'
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